import prisma from "./lib/db"

async function main() {
  console.log("=== CHECKING STORY ATTEMPTS ===")
  const attempts = await prisma.storyAttempt.findMany({
    include: {
      story: {
        select: {
          title: true,
          island: {
            select: {
              islandName: true
            }
          }
        }
      },
      stageAttempts: true,
      questionLogs: {
        select: {
          id: true,
          isCorrect: true
        }
      }
    },
    orderBy: { startedAt: "desc" },
    take: 10
  })

  console.log(`Found ${attempts.length} attempts.`)
  for (const a of attempts) {
    console.log(`\nAttempt ID: ${a.id}`)
    console.log(`User ID: ${a.userId}`)
    console.log(`Story: ${a.story.title} (Island: ${a.story.island.islandName})`)
    console.log(`Started At: ${a.startedAt}`)
    console.log(`Finished At: ${a.finishedAt}`)
    console.log(`Pre-Test Score: ${a.preTestScore} (${typeof a.preTestScore})`)
    console.log(`Post-Test Score: ${a.postTestScore} (${typeof a.postTestScore})`)
    console.log(`Stage Attempts Count: ${a.stageAttempts.length}`)
    for (const sa of a.stageAttempts) {
      console.log(`  - Stage: ${sa.stageType}, Score: ${sa.score} (${typeof sa.score}), Time Spent: ${sa.timeSpentSeconds}s`)
    }
    console.log(`Question Logs Count: ${a.questionLogs.length}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
