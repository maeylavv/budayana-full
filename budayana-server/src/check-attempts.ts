import prisma from "./lib/db"

async function main() {
  const storyId = "cmjjkesfl0006vsvh8g4irre9"
  console.log(`Attempts for story: ${storyId}`)
  const attempts = await prisma.storyAttempt.findMany({
    where: { storyId },
    include: {
      user: true,
      questionLogs: true
    }
  })

  console.log(`Found ${attempts.length} attempts:`)
  for (const a of attempts) {
    console.log(`- Attempt ID: ${a.id}
    User: ${a.user.name} (${a.userId})
    StartedAt: ${a.startedAt.toISOString()}
    FinishedAt: ${a.finishedAt ? a.finishedAt.toISOString() : "null"}
    Logs Count: ${a.questionLogs.length}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
