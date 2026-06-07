import prisma from "./lib/db"

async function main() {
  const userId = "evvLt1MUgyQEutsjuIjpxvhQo6qAactd"
  const attempts = await prisma.storyAttempt.findMany({
    where: { userId },
    include: {
      story: true,
      questionLogs: true,
      stageAttempts: true,
    },
    orderBy: { startedAt: "desc" }
  })

  console.log(`Total attempts for user ${userId}: ${attempts.length}`)
  for (const attempt of attempts) {
    console.log(`- Attempt ID: ${attempt.id}
    Story Title: "${attempt.story?.title}"
    Story ID: ${attempt.storyId}
    Started At: ${attempt.startedAt.toISOString()}
    Finished At: ${attempt.finishedAt ? attempt.finishedAt.toISOString() : "Not Finished"}
    Total Time (sec): ${attempt.totalTimeSeconds}
    Question Logs: ${attempt.questionLogs.length}
    StageAttempts: ${attempt.stageAttempts.length}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
