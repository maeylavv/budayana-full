/**
 * Quiz Attempts API routes (requires authentication)
 * Follows the same pattern as routes/attempts/index.ts
 */
import { Elysia } from "elysia"
import { ErrorResponseSchema } from "../../lib/utils/schemas"
import { auth } from "../../lib/auth"
import {
  QuizAttemptSchema,
  SubmitQuizAttemptSchema,
  QuizAttemptQuerySchema,
  PaginatedQuizAttemptsSchema,
} from "./schema"
import * as quizAttemptService from "./service"

export const quizAttemptRoutes = new Elysia({ prefix: "/quiz-attempts" })
  .derive(async ({ request, set }) => {
    if (request.method === "OPTIONS") {
      return {
        user: null as { id: string; name: string; email: string } | null,
      }
    }

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
   * POST /api/quiz-attempts — Submit a completed quiz level attempt
   */
  .post(
    "/",
    async ({ body, user, set }) => {
      if (!user) {
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      const attempt = await quizAttemptService.submitQuizAttempt(user.id, body)
      return attempt
    },
    {
      body: SubmitQuizAttemptSchema,
      detail: {
        tags: ["Quiz Attempts"],
        summary: "Submit quiz attempt",
        description:
          "Records a completed quiz level attempt and increments user XP",
      },
      response: {
        200: QuizAttemptSchema,
        401: ErrorResponseSchema,
      },
    }
  )

  /**
   * GET /api/quiz-attempts — List history of quiz attempts
   */
  .get(
    "/",
    async ({ query, user, set }) => {
      if (!user) {
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      const { cursor, limit, sortBy, sortOrder, islandSlug, topicSlug, levelId, completed } =
        query

      const result = await quizAttemptService.getQuizAttempts(
        user.id,
        { cursor, limit, sortBy, sortOrder },
        { islandSlug, topicSlug, levelId, completed }
      )

      return result
    },
    {
      query: QuizAttemptQuerySchema,
      detail: {
        tags: ["Quiz Attempts"],
        summary: "List my quiz attempts",
        description: "Get paginated history of quiz attempts for the current user",
      },
      response: {
        200: PaginatedQuizAttemptsSchema,
        401: ErrorResponseSchema,
      },
    }
  )
