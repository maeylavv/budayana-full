import { useQuery } from "@tanstack/react-query"
import { quizAttemptsApi, quizStatisticsApi } from "../lib/api"

/**
 * Topic slug → display label mapping
 */
const TOPIC_LABELS = {
  rumah: "Rumah Adat",
  makanan: "Makanan Tradisional",
  tarian: "Tarian & Alat Musik",
}

/**
 * Island slug → display name mapping
 */
const ISLAND_LABELS = {
  sumatra: "Sumatra",
  jawa: "Jawa",
  bali: "Bali",
  sulawesi: "Sulawesi",
  kalimantan: "Kalimantan",
  papua: "Papua",
  maluku: "Maluku",
  "nusa-tenggara": "Nusa Tenggara",
}

/**
 * Level → quiz type (Bloom taxonomy) mapping
 */
const LEVEL_TYPE_LABELS = {
  1: "Ingatan",
  2: "Analisis",
  3: "Pendapat",
}

/**
 * Hook to fetch Quiz Budaya results data.
 * Mirrors the pattern of useResults.js for Cerita Rakyat.
 *
 * NOTE: We do NOT pass `completed: true` as a query param because
 * URLSearchParams converts boolean true → string "true", and the
 * backend's buildWhereClause has the same bug. Instead we fetch all
 * attempts (server already scopes to userId) and filter client-side.
 */
export function useQuizResults() {
  // Fetch quiz statistics
  const {
    data: quizStats,
    isLoading: statsLoading,
    error: statsError,
  } = useQuery({
    queryKey: ["quiz-statistics"],
    queryFn: quizStatisticsApi.get,
  })

  // Fetch quiz attempts history — no `completed` filter, client filters below
  const {
    data: attemptsData,
    isLoading: attemptsLoading,
    error: attemptsError,
  } = useQuery({
    queryKey: ["quiz-attempts-history"],
    queryFn: () =>
      quizAttemptsApi.list({
        limit: 100,
        sortBy: "startedAt",
        sortOrder: "desc",
      }),
  })

  // Normalize to array — response is { items, nextCursor, hasMore }
  const rawAttempts = Array.isArray(attemptsData)
    ? attemptsData
    : attemptsData?.items || []

  // Keep only completed attempts (client-side safety filter)
  const completedAttempts = rawAttempts.filter(
    (a) => a.completed === true && a.finishedAt != null
  )

  // Enrich attempts with display labels
  const attempts = completedAttempts.map((attempt) => ({
    ...attempt,
    islandName: ISLAND_LABELS[attempt.islandSlug] || capitalize(attempt.islandSlug),
    topicName: TOPIC_LABELS[attempt.topicSlug] || capitalize(attempt.topicSlug),
    // Prefer stored quizType, fallback to levelId-based label
    quizTypeName:
      attempt.quizType ||
      LEVEL_TYPE_LABELS[attempt.levelId] ||
      "Quiz",
  }))

  return {
    quizStats,
    attempts,
    isLoading: statsLoading || attemptsLoading,
    isError: !!statsError || !!attemptsError,
    errors: {
      stats: statsError,
      attempts: attemptsError,
    },
    TOPIC_LABELS,
    ISLAND_LABELS,
    LEVEL_TYPE_LABELS,
  }
}

/** Capitalize first letter of a string */
function capitalize(str) {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}
