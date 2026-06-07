import prisma from "./lib/db"

async function main() {
  const attemptId = "cmpdruiri000074ugruhro02p"
  console.log(`Logs for attempt: ${attemptId}`)
  const logs = await prisma.questionAttemptLog.findMany({
    where: { attemptId },
    orderBy: { answeredAt: "asc" }
  })

  for (const log of logs) {
    console.log(`- Log ID: ${log.id}, Question ID: ${log.questionId}, Answer: "${log.userAnswerText}", isCorrect: ${log.isCorrect}, answeredAt: ${log.answeredAt.toISOString()}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
