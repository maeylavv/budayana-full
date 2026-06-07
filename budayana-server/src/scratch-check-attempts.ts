import prisma from "./lib/db"

async function main() {
  const token = "A0Lw1d8jqKoM3Zl4U1e01j4rsQisHojs"
  const session = await prisma.session.findUnique({
    where: { token },
    include: { user: true }
  })
  
  if (!session) {
    console.error("Session not found")
    return
  }
  
  console.log(`Active User ID: ${session.userId} (${session.user.name})`)
  
  const attempts = await prisma.storyAttempt.findMany({
    where: {
      userId: session.userId,
      storyId: "cmjjkesfl0006vsvh8g4irre9"
    },
    include: {
      questionLogs: {
        orderBy: { answeredAt: "desc" }
      }
    },
    orderBy: { startedAt: "desc" }
  })
  
  console.log(`Found ${attempts.length} attempts:`)
  for (const a of attempts) {
    console.log(`- Attempt ID: ${a.id}`)
    console.log(`  Started: ${a.startedAt.toISOString()}`)
    console.log(`  Finished: ${a.finishedAt ? a.finishedAt.toISOString() : "ACTIVE"}`)
    console.log(`  Total time: ${a.totalTimeSeconds}s`)
    console.log(`  Logs count: ${a.questionLogs.length}`)
    for (const log of a.questionLogs) {
      console.log(`    * Log ID: ${log.id}, Question ID: ${log.questionId}, userAnswerText: ${log.userAnswerText}, isCorrect: ${log.isCorrect}`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
