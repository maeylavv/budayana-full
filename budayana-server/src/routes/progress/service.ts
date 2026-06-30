/**
 * Service layer for User Progress domain
 */
import type { UserProgress } from "../../lib/db/prisma/generated/client"
import prisma from "../../lib/db"
import {
  paginatedQuery,
  type PaginationParams,
  type PaginatedResult,
  buildWhereClause,
  combineWhereClauses,
} from "../../lib/utils"

export interface ProgressFilters {
  isUnlocked?: boolean
  isCompleted?: boolean
}

const ALLOWED_SORT_FIELDS = ["id"]

/**
 * Get user's progress for all islands
 */
export async function getUserProgress(
  userId: string,
  pagination: PaginationParams,
  filters: ProgressFilters = {}
): Promise<PaginatedResult<UserProgress> & { completedStory: number }> {
  // Auto-sync/repair completed and unlocked status for all progress records of this user
  try {
    const userProgressRecords = await prisma.userProgress.findMany({
      where: { userId },
      include: { island: { include: { stories: true } } }
    })

    // First auto-sync isCompleted and cycleCount for all islands
    for (const record of userProgressRecords) {
      const storyIds = record.island.stories.map(s => s.id)
      if (storyIds.length > 0) {
        const finishedAttemptsCount = await prisma.storyAttempt.count({
          where: {
            userId,
            storyId: { in: storyIds },
            finishedAt: { not: null }
          }
        })

        if (finishedAttemptsCount > 0) {
          if (!record.isCompleted || record.cycleCount !== finishedAttemptsCount) {
            await prisma.userProgress.update({
              where: { id: record.id },
              data: {
                isCompleted: true,
                cycleCount: finishedAttemptsCount
              }
            })
            record.isCompleted = true
            record.cycleCount = finishedAttemptsCount
          }
        }
      }
    }

    // Define correct locking sequence order
    const lockSequence = [
      "sumatra",
      "jawa",
      "bali",
      "kalimantan",
      "sulawesi",
      "maluku",
      "nusa-tenggara",
      "papua"
    ]

    // Sort progress records by lock sequence order to verify locks sequentially
    const sortedRecords = [...userProgressRecords].sort((a, b) => {
      return lockSequence.indexOf(a.island.slug) - lockSequence.indexOf(b.island.slug)
    })

    // Sequentially compute isUnlocked
    for (let i = 0; i < sortedRecords.length; i++) {
      const record = sortedRecords[i]
      let isUnlocked = false

      if (i === 0) {
        // Sumatra (the first island in the sequence) is unlocked by default
        isUnlocked = true
      } else {
        // Rule 2: Unlocked if user has existing attempts on this island
        const storyIds = record.island.stories.map(s => s.id)
        const totalAttemptsCount = await prisma.storyAttempt.count({
          where: {
            userId,
            storyId: { in: storyIds }
          }
        })
        const hasAttempts = totalAttemptsCount > 0

        // Rule 3: Unlocked if the predecessor island is completed
        const prevRecord = sortedRecords[i - 1]
        const prevCompleted = prevRecord ? prevRecord.isCompleted : false

        isUnlocked = hasAttempts || prevCompleted
      }

      if (record.isUnlocked !== isUnlocked) {
        await prisma.userProgress.update({
          where: { id: record.id },
          data: { isUnlocked }
        })
        record.isUnlocked = isUnlocked
      }
    }
  } catch (error) {
    console.error("[AUTO-SYNC] Failed to sync user progress:", error)
  }

  const filterClause = buildWhereClause(
    {
      isUnlocked: filters.isUnlocked,
      isCompleted: filters.isCompleted,
    },
    ["isUnlocked", "isCompleted"]
  )

  const where = combineWhereClauses({ userId }, filterClause)

  // Get the count of completed cycles
  const completedStory = await prisma.storyAttempt.count({
    where: {
      userId,
      finishedAt: {
        not: null,
      },
    },
  })

  const paginatedResult = await paginatedQuery(
    (options) =>
      prisma.userProgress.findMany({
        ...options,
        where,
        include: {
          island: {
            select: {
              id: true,
              islandName: true,
              unlockOrder: true,
            },
          },
        },
      }),
    pagination,
    {
      allowedSortFields: ALLOWED_SORT_FIELDS,
      defaultSortField: "id",
    }
  )

  return {
    ...paginatedResult,
    completedStory,
  }
}

/**
 * Get progress for a specific island
 */
export async function getProgressByIsland(userId: string, islandId: string) {
  return prisma.userProgress.findFirst({
    where: { userId, islandId },
    include: {
      island: {
        select: {
          id: true,
          islandName: true,
          unlockOrder: true,
        },
      },
    },
  })
}

/**
 * Create or update progress (upsert)
 */
export async function upsertProgress(
  userId: string,
  data: {
    islandId: string
    isUnlocked?: boolean
    isCompleted?: boolean
  }
) {
  // Check if progress exists
  const existing = await prisma.userProgress.findFirst({
    where: { userId, islandId: data.islandId },
  })

  if (existing) {
    return prisma.userProgress.update({
      where: { id: existing.id },
      data: {
        isUnlocked: data.isUnlocked ?? existing.isUnlocked,
        isCompleted: data.isCompleted ?? existing.isCompleted,
      },
    })
  }

  return prisma.userProgress.create({
    data: {
      userId,
      islandId: data.islandId,
      isUnlocked: data.isUnlocked ?? false,
      isCompleted: data.isCompleted ?? false,
    },
  })
}

/**
 * Update progress by ID
 */
export async function updateProgress(
  id: string,
  data: {
    isUnlocked?: boolean
    isCompleted?: boolean
  }
) {
  return prisma.userProgress.update({
    where: { id },
    data,
  })
}

/**
 * Check if progress belongs to user
 */
export async function progressBelongsToUser(
  id: string,
  userId: string
): Promise<boolean> {
  const count = await prisma.userProgress.count({
    where: { id, userId },
  })
  return count > 0
}

/**
 * Initialize progress for all islands for a user
 * Used when a new user is created
 */
export async function initializeUserProgress(userId: string) {
  const islands = await prisma.island.findMany({
    orderBy: { unlockOrder: "asc" },
  })

  const progressRecords = islands.map((island) => ({
    userId,
    islandId: island.id,
    isUnlocked: !island.isLockedDefault,
    isCompleted: false,
  }))

  return prisma.userProgress.createMany({
    data: progressRecords,
    skipDuplicates: true,
  })
}

/**
 * Increment cycle count for a user on an island
 */
export async function incrementCycleCount(userId: string, islandId: string) {
  const existing = await prisma.userProgress.findFirst({
    where: { userId, islandId },
  })

  if (existing) {
    return prisma.userProgress.update({
      where: { id: existing.id },
      data: {
        cycleCount: { increment: 1 },
        isCompleted: true,
      },
    })
  }

  return prisma.userProgress.create({
    data: {
      userId,
      islandId,
      isUnlocked: true,
      cycleCount: 1,
      isCompleted: true, // Mark as completed
    },
  })
}

/**
 * Get cycle count for a user on an island
 */
export async function getCycleCount(
  userId: string,
  islandId: string
): Promise<number> {
  const progress = await prisma.userProgress.findFirst({
    where: { userId, islandId },
    select: { cycleCount: true },
  })
  return progress?.cycleCount ?? 0
}
