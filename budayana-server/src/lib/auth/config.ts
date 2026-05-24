import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import { openAPI, username } from "better-auth/plugins"
import prisma from "../db"

// All domains that are allowed to make cross-origin auth requests.
// CORS_ORIGIN should be the production frontend URL
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

  // Public backend URL
  baseURL: process.env.BETTER_AUTH_URL,

  // Auth API path
  basePath: "/api",

  plugins: [username(), openAPI()],

  user: {
    additionalFields: {
      role: {
        type: "string",
        input: true,
        required: false,
        defaultValue: "STUDENT",
        fieldName: "role",
      },
      grade: {
        type: "number",
        input: true,
        required: false,
        defaultValue: 0,
        fieldName: "grade",
      },
      classLabel: {
        type: "string",
        input: true,
        required: false,
        fieldName: "classLabel",
      },

      guardianEmail: {
        type: "string",
        input: true,
        required: false,
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

  // Allowed frontend origins
  trustedOrigins: allowedOrigins,

  emailAndPassword: {
    enabled: true,
  },

  advanced: {
    defaultCookieAttributes: {
      sameSite:
        process.env.NODE_ENV === "production"
          ? "none"
          : "lax",

      secure:
        process.env.NODE_ENV === "production",

      httpOnly: true,
    },
  },
})

let _schema: ReturnType<typeof auth.api.generateOpenAPISchema>

const getSchema = async () =>
  (_schema ??= auth.api.generateOpenAPISchema())

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

  components: getSchema().then(
    ({ components }) => components
  ) as Promise<any>,
} as const