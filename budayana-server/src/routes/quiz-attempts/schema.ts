/**
 * TypeBox validation schemas for Quiz Attempts domain
 * Follows the same pattern as routes/attempts/schema.ts
 */
import { t } from "elysia"
import {
  createPaginatedSchema,
  PaginationQuerySchema,
} from "../../lib/utils/schemas"

// Single Quiz Attempt schema (response)
export const QuizAttemptSchema = t.Object({
  id: t.String(),
  userId: t.String(),
  islandSlug: t.String(),
  topicSlug: t.String(),
  levelId: t.Number(),
  quizType: t.String(),
  startedAt: t.Date(),
  finishedAt: t.Nullable(t.Date()),
  completed: t.Boolean(),
  totalTimeSeconds: t.Number(),
  xpGained: t.Number(),
  score: t.Number(),
  totalQuestions: t.Number(),
  percentageScore: t.Number(),
  wrongAttempts: t.Number(),
  heartsLeft: t.Number(),
})

// Submit (create) quiz attempt input
export const SubmitQuizAttemptSchema = t.Object({
  islandSlug: t.String(),
  topicSlug: t.String(),
  levelId: t.Number({ minimum: 1, maximum: 3 }),
  quizType: t.Optional(t.String()),
  totalTimeSeconds: t.Number({ minimum: 0 }),
  xpGained: t.Number({ minimum: 0 }),
  score: t.Number({ minimum: 0 }),
  totalQuestions: t.Number({ minimum: 1 }),
  wrongAttempts: t.Optional(t.Number({ minimum: 0, default: 0 })),
  heartsLeft: t.Optional(t.Number({ minimum: 0, maximum: 5, default: 5 })),
})

// List query params
export const QuizAttemptQuerySchema = t.Composite([
  PaginationQuerySchema,
  t.Object({
    islandSlug: t.Optional(t.String()),
    topicSlug: t.Optional(t.String()),
    levelId: t.Optional(t.Number()),
    completed: t.Optional(t.Boolean()),
  }),
])

// Paginated response
export const PaginatedQuizAttemptsSchema = createPaginatedSchema(QuizAttemptSchema)
