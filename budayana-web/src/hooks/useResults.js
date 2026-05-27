import React from "react"
import { useQuery } from "@tanstack/react-query"
import { attemptsApi, statisticsApi } from "../lib/api"

/**
 * Hook to fetch user results data including statistics and attempt history
 */
export function useResults() {
  // Fetch Statistics
  const {
    data: stats,
    isLoading: statsLoading,
    error: statsError,
  } = useQuery({
    queryKey: ["statistics"],
    queryFn: statisticsApi.get,
  })

  // Fetch Attempts History
  const {
    data: attemptsData,
    isLoading: attemptsLoading,
    error: attemptsError,
  } = useQuery({
    queryKey: ["attempts-history"],
    queryFn: () =>
      attemptsApi.list({
        limit: 50, // Fetch more for scrolling
        sortOrder: "desc", // Latest first makes more sense for history
        sortBy: "startedAt",
        isFinished: true,
      }),
  })

  // Normalize attempts data to always be an array
  const attempts = Array.isArray(attemptsData)
    ? attemptsData
    : attemptsData?.items || []

  // Derive statistics client-side to ensure accuracy as per user request
  const derivedStats = React.useMemo(() => {
    const finishedAttempts = attempts.filter((a) => {
      if (!a.finishedAt) return false
      const title = (a.story?.title || "").toLowerCase()
      return !title.includes("pre-test") && !title.includes("post-test")
    })

    // 1. Stories Completed (Total cycles completed)
    const storiesCompleted = finishedAttempts.length

    // 2. Total XP (Sum of all XP gained)
    const totalXp = finishedAttempts.reduce((sum, a) => {
      let xp = a.totalXpGained || 0

      // If XP is 0, try summing from stages
      if (xp === 0 && a.stages && a.stages.length > 0) {
        xp = a.stages.reduce((s, st) => s + (st.xpGained || 0), 0)
      }

      // Fallback if XP is 0 but it's a finished story
      const isStatic = a.story?.storyType === "STATIC" || (!a.story?.storyType)
      if (xp === 0 && isStatic) {
        xp = 100
      }

      return sum + xp
    }, 0)

    // 3. Pre-Test Average
    const preTestScores = finishedAttempts.filter(a => a.preTestScore !== null).map(a => Number(a.preTestScore))
    let averagePreTestScore = 0
    if (preTestScores.length > 0) {
      const totalScore = preTestScores.reduce((sum, score) => sum + score, 0)
      averagePreTestScore = totalScore / preTestScores.length
    }

    // 4. Post-Test Average
    const postTestScores = finishedAttempts.filter(a => a.postTestScore !== null).map(a => Number(a.postTestScore))
    let averagePostTestScore = 0
    if (postTestScores.length > 0) {
      const totalScore = postTestScores.reduce((sum, score) => sum + score, 0)
      averagePostTestScore = totalScore / postTestScores.length
    }

    return {
      storiesCompleted,
      totalXp,
      averagePreTestScore,
      averagePostTestScore,
    }
  }, [attempts])

  return {
    stats: derivedStats, // Use local override
    attempts,
    isLoading: statsLoading || attemptsLoading,
    isError: !!statsError || !!attemptsError,
    errors: {
      stats: statsError,
      attempts: attemptsError,
    },
  }
}
