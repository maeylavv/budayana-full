/**
 * Quiz Statistics API routes (requires authentication)
 * Follows the same pattern as routes/statistics/index.ts
 */
import { Elysia } from "elysia"
import { ErrorResponseSchema } from "../../lib/utils/schemas"
import { auth } from "../../lib/auth"
import { QuizStatisticsSchema } from "./schema"
import * as quizStatisticsService from "./service"

export const quizStatisticsRoutes = new Elysia({ prefix: "/quiz-statistics" })
  // Auth middleware using derive — same pattern as all other routes
  .derive(async ({ request, set }) => {
    const session = await auth.api.getSession({ headers: request.headers })

    if (!session?.user) {
      set.status = 401
      return {
        user: null as { id: string; name: string; email: string } | null,
      }
    }

    return { user: session.user }
  })

  /**
   * GET /api/quiz-statistics — Get aggregated quiz statistics for the current user
   */
  .get(
    "/",
    async ({ user, set }) => {
      if (!user) {
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      const stats = await quizStatisticsService.getQuizStatistics(user.id)
      return stats
    },
    {
      detail: {
        tags: ["Quiz Statistics"],
        summary: "Get quiz statistics",
        description:
          "Returns levels completed, total XP from quiz, average score, islands explored, and current badge",
      },
      response: {
        200: QuizStatisticsSchema,
        401: ErrorResponseSchema,
      },
    }
  )
