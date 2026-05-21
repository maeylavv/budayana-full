/**
 * TypeBox validation schemas for Quiz Statistics domain
 * Follows the same pattern as routes/statistics/schema.ts
 */
import { t } from "elysia"

// Per-island exploration summary
export const IslandExplorationSchema = t.Object({
  islandSlug: t.String(),
  levelsCompleted: t.Number(),
  totalLevels: t.Number(),
  isFullyCompleted: t.Boolean(),
})

// Quiz Statistics response schema
export const QuizStatisticsSchema = t.Object({
  levelsCompleted: t.Number(),
  totalXpFromQuiz: t.Number(),
  averageScore: t.Number(),
  islandsFullyCompleted: t.Number(),
  currentBadge: t.String(),
  islandExploration: t.Array(IslandExplorationSchema),
})
