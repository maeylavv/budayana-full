/**
 * Service layer for Quiz Statistics domain
 * Follows the same pattern as routes/statistics/service.ts
 */
import prisma from "../../lib/db"

// 8 islands × 3 topics × 3 levels = 9 levels per island
const TOTAL_LEVELS_PER_ISLAND = 9

// Badge title derived from highest level completed
function deriveBadge(maxLevelCompleted: number): string {
  if (maxLevelCompleted >= 3) return "Pakar Budaya"
  if (maxLevelCompleted >= 2) return "Penjelajah Budaya"
  if (maxLevelCompleted >= 1) return "Pengamat Budaya"
  return "-"
}

export async function getQuizStatistics(userId: string) {
  // Parallelize queries for performance
  const [completedAttempts, xpResult] = await Promise.all([
    // Get all completed attempts ordered by startedAt ASC
    prisma.quizAttempt.findMany({
      where: { userId, completed: true },
      orderBy: { startedAt: "asc" },
      select: {
        islandSlug: true,
        topicSlug: true,
        levelId: true,
        percentageScore: true,
        xpGained: true,
      },
    }),

    // User totalXp (shared field)
    prisma.user.findUnique({
      where: { id: userId },
      select: { totalXp: true },
    }),
  ])

  // Filter to keep only the first completed attempt per level
  const firstAttemptsMap = new Map<string, typeof completedAttempts[0]>()
  for (const a of completedAttempts) {
    const key = `${a.islandSlug}::${a.topicSlug}::${a.levelId}`
    if (!firstAttemptsMap.has(key)) {
      firstAttemptsMap.set(key, a)
    }
  }
  const firstAttempts = Array.from(firstAttemptsMap.values())

  // Count unique completed levels
  const levelsCompleted = firstAttempts.length

  // Average score across FIRST attempts only
  const totalPercentageScore = firstAttempts.reduce((sum, a) => sum + a.percentageScore, 0)
  const averageScore = firstAttempts.length > 0 ? Math.round(totalPercentageScore / firstAttempts.length) : 0

  // Derive badge from highest level completed in first attempts
  const maxLevel = firstAttempts.length > 0 ? Math.max(...firstAttempts.map((a) => a.levelId)) : 0
  const currentBadge = deriveBadge(maxLevel)

  // Total XP earned from quiz is sum of all attempts' xpGained (replays gain 0)
  const totalXpFromQuiz = completedAttempts.reduce((sum, a) => sum + a.xpGained, 0)

  // Per-island exploration: group completed unique levels by island
  const islandLevelMap: Record<string, Set<string>> = {}
  for (const a of firstAttempts) {
    const key = `${a.topicSlug}::${a.levelId}`
    if (!islandLevelMap[a.islandSlug]) {
      islandLevelMap[a.islandSlug] = new Set()
    }
    islandLevelMap[a.islandSlug].add(key)
  }

  const islandExploration = Object.entries(islandLevelMap).map(
    ([islandSlug, levels]) => ({
      islandSlug,
      levelsCompleted: levels.size,
      totalLevels: TOTAL_LEVELS_PER_ISLAND,
      isFullyCompleted: levels.size >= TOTAL_LEVELS_PER_ISLAND,
    })
  )

  const islandsFullyCompleted = islandExploration.filter(
    (i) => i.isFullyCompleted
  ).length

  return {
    levelsCompleted,
    totalXpFromQuiz,
    averageScore,
    islandsFullyCompleted,
    currentBadge,
    islandExploration,
  }
}
