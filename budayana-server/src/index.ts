import "dotenv/config"
import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import { openapi, fromTypes } from "@elysiajs/openapi"
import { auth, allowedOrigins } from "./lib/auth"
import { apiRoutes } from "./routes"
import { OpenAPI } from "./lib/auth/config"

const app = new Elysia()
  .use(
    cors({
      origin: (request) => {
        const origin = request.headers.get("origin")
        if (!origin) return false

        // Always allow localhost and production frontend
        if (
          origin.startsWith("http://localhost:") ||
          origin === "https://budayana-app.vercel.app"
        ) {
          return true
        }

        // Dynamically check against allowed origins from auth configuration
        return allowedOrigins.includes(origin)
      },
      methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
    })
  )
  .onError(({ error, set }) => {
    console.error("Elysia caught error:", error)
    
    // Safely normalise invalid status codes to prevent RangeError crashes in Bun
    const statusNum = typeof set.status === "number" ? set.status : parseInt(String(set.status || ""), 10)
    if (isNaN(statusNum) || statusNum < 100 || statusNum > 599) {
      set.status = 500
    }
    
    const errMsg = error && typeof error === "object" && "message" in error ? String((error as any).message) : String(error)
    
    return {
      error: errMsg || "Internal Server Error",
      code: "INTERNAL_SERVER_ERROR",
    }
  })
  .mount("/auth", auth.handler)
  .use(
    openapi({
      references: fromTypes(),
      documentation: {
        components: await OpenAPI.components,
        paths: await OpenAPI.getPaths(),
      },
    })
  )
  .use(apiRoutes)
  .get("/", () => "OK")

if (process.env.NODE_ENV === "development") {
  app.listen(3000)
  console.log("🚀 Server running at http://localhost:3000")
}

export default app