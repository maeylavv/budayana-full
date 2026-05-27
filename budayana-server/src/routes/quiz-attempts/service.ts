/**
 * Service layer for Quiz Attempts domain
 * Follows the same pattern as routes/attempts/service.ts
 */
import prisma from "../../lib/db"
import {
  paginatedQuery,
  type PaginationParams,
  type PaginatedResult,
  buildWhereClause,
  combineWhereClauses,
} from "../../lib/utils"

export interface QuizAttemptFilters {
  islandSlug?: string
  topicSlug?: string
  levelId?: number
  completed?: boolean
}

export interface SubmitQuizAttemptData {
  islandSlug: string
  topicSlug: string
  levelId: number
  quizType?: string
  totalTimeSeconds: number
  xpGained: number
  score: number
  totalQuestions: number
  wrongAttempts?: number
  heartsLeft?: number
}

const ALLOWED_SORT_FIELDS = ["startedAt", "finishedAt", "xpGained", "percentageScore", "id"]

/**
 * Submit (create) a completed quiz attempt
 * Also increments user.totalXp
 */
export async function submitQuizAttempt(
  userId: string,
  data: SubmitQuizAttemptData
) {
  const percentageScore =
    data.totalQuestions > 0
      ? (data.score / data.totalQuestions) * 100
      : 0

  // Derive quizType from levelId if not provided
  const quizTypeMap: Record<number, string> = {
    1: "Ingatan",
    2: "Analisis",
    3: "Pendapat",
  }
  const resolvedQuizType = data.quizType ?? quizTypeMap[data.levelId] ?? "culture"

  // Create the attempt and increment XP in a transaction
  const [attempt] = await prisma.$transaction([
    prisma.quizAttempt.create({
      data: {
        userId,
        islandSlug: data.islandSlug,
        topicSlug: data.topicSlug,
        levelId: data.levelId,
        quizType: resolvedQuizType,
        finishedAt: new Date(),
        completed: true,
        totalTimeSeconds: data.totalTimeSeconds,
        xpGained: data.xpGained,
        score: data.score,
        totalQuestions: data.totalQuestions,
        percentageScore,
        wrongAttempts: data.wrongAttempts ?? 0,
        heartsLeft: data.heartsLeft ?? 5,
      },
    }),
    // Increment totalXp on User — same pattern as attempts/service.ts
    prisma.user.update({
      where: { id: userId },
      data: { totalXp: { increment: data.xpGained } },
    }),
  ])

  return attempt
}

/**
 * Get paginated list of quiz attempts for a user
 *
 * NOTE: `completed` is handled separately — NOT through buildWhereClause —
 * because buildWhereClause calls String(value) internally, which converts
 * boolean `true` to the string "true". PostgreSQL boolean columns don't
 * match string literals, so the WHERE clause would silently return 0 rows.
 * This mirrors the pattern used for `isFinished` in attempts/service.ts.
 */
export async function getQuizAttempts(
  userId: string,
  pagination: PaginationParams,
  filters: QuizAttemptFilters = {}
): Promise<PaginatedResult<any>> {
  // String-based filters (safe to use buildWhereClause for these)
  const filterClause = buildWhereClause(
    {
      islandSlug: filters.islandSlug,
      topicSlug: filters.topicSlug,
      levelId: filters.levelId,
    },
    ["islandSlug", "topicSlug", "levelId"]
  )

  // Boolean filter — must be passed as native boolean to Prisma
  const completedClause =
    filters.completed !== undefined
      ? { completed: filters.completed }
      : undefined

  const where = combineWhereClauses(
    { userId },
    filterClause,
    completedClause
  )

  return paginatedQuery(
    (options) =>
      prisma.quizAttempt.findMany({
        ...options,
        where,
      }),
    pagination,
    {
      allowedSortFields: ALLOWED_SORT_FIELDS,
      defaultSortField: "startedAt",
    }
  )
}
