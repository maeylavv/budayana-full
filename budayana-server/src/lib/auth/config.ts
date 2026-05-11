import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { openAPI, username } from "better-auth/plugins"
import prisma from "../db"

// All domains that are allowed to make cross-origin auth requests.
// CORS_ORIGIN should be the production frontend URL (e.g. https://budayana-web.vercel.app)
// CORS_ORIGIN_2 is optional for a second frontend (staging, preview, etc.)
export const allowedOrigins = [
  process.env.CORS_ORIGIN || "",
  process.env.CORS_ORIGIN_2 || "",
  ...Array.from({ length: 10 }, (_, i) => `http://localhost:${5170 + i}`),
].filter(Boolean)

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  // BETTER_AUTH_URL must be set in production so better-auth knows its own
  // public URL, which ensures cookies are issued with the correct domain/path.
  baseURL: process.env.BETTER_AUTH_URL,
  basePath: "/api",
  plugins: [username(), openAPI()],
  user: {
    additionalFields: {
      grade: {
        type: "number",
        input: true,
        required: true,
        fieldName: "grade",
      },
      // username: {
      //   type: "string",
      //   input: true,
      //   unique: true,
      //   required: true,
      //   fieldName: "username",
      //   references: {
      //     model: "User",
      //     field: "username",
      //   },
      // },
      guardianEmail: {
        type: "string",
        input: true,
        required: true,
        fieldName: "guardianEmail",
      },
      totalXp: {
        type: "number",
        input: false,
        fieldName: "totalXp",
        defaultValue: 0,
      },
    },
  },
  // trustedOrigins must exactly match the Origin header sent by the browser.
  // For cross-domain setups (different Vercel projects) this is critical.
  trustedOrigins: allowedOrigins,
  emailAndPassword: {
    enabled: true,
  },
  advanced: {
    // SameSite=None + Secure=true is REQUIRED for cross-domain cookies.
    // Without this, browsers block the session cookie when frontend and
    // backend are on different domains.
    defaultCookieAttributes: {
      sameSite: "none",
      secure: true,
      httpOnly: true,
    },
  },
})

let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>
const getSchema = async () => (_schema ??= auth.api.generateOpenAPISchema())

export const OpenAPI = {
  getPaths: (prefix = "/auth/api") =>
    getSchema().then(({ paths }) => {
      const reference: typeof paths = Object.create(null)

      for (const path of Object.keys(paths)) {
        const key = prefix + path
        reference[key] = paths[path]

        for (const method of Object.keys(paths[path])) {
          const operation = (reference[key] as any)[method]

          operation.tags = ["Better Auth"]
        }
      }

      return reference
    }) as Promise<any>,
  components: getSchema().then(({ components }) => components) as Promise<any>,
} as const
