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
  // Parallelize all queries for performance
  const [completedAttempts, allAttempts, xpResult] = await Promise.all([
    // 1. Get all unique completed levels (distinct islandSlug+topicSlug+levelId combos)
    prisma.quizAttempt.findMany({
      where: { userId, completed: true },
      select: {
        islandSlug: true,
        topicSlug: true,
        levelId: true,
        percentageScore: true,
        xpGained: true,
      },
    }),

    // 2. Get average score of all completed attempts
    prisma.quizAttempt.aggregate({
      where: { userId, completed: true },
      _avg: { percentageScore: true },
      _max: { levelId: true },
      _sum: { xpGained: true },
    }),

    // 3. User totalXp (shared field)
    prisma.user.findUnique({
      where: { id: userId },
      select: { totalXp: true },
    }),
  ])

  // Count unique completed levels (a level counts once even if replayed)
  const uniqueLevelKeys = new Set(
    completedAttempts.map(
      (a) => `${a.islandSlug}::${a.topicSlug}::${a.levelId}`
    )
  )
  const levelsCompleted = uniqueLevelKeys.size

  // Average score across all completed attempts
  const averageScore = Math.round(allAttempts._avg.percentageScore ?? 0)

  // Derive badge from highest level ever completed
  const maxLevel = allAttempts._max.levelId ?? 0
  const currentBadge = deriveBadge(maxLevel)

  // Total XP earned specifically from quiz (sum of xpGained in quiz_attempts)
  const totalXpFromQuiz = allAttempts._sum.xpGained ?? 0

  // Per-island exploration: group completed unique levels by island
  const islandLevelMap: Record<string, Set<string>> = {}
  for (const a of completedAttempts) {
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
