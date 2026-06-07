import prisma from "./lib/db"

async function main() {
  const attemptId = "cmq2pq5zz000orsugnhxdgg2e"
  console.log(`Logs for user's active attempt: ${attemptId}`)
  const logs = await prisma.questionAttemptLog.findMany({
    where: { attemptId },
    include: {
      question: true
    },
    orderBy: { answeredAt: "asc" }
  })

  console.log(`Found ${logs.length} logs:`)
  for (const log of logs) {
    console.log(`- Log ID: ${log.id}
    Question ID: ${log.questionId}
    Question Text: "${log.question.questionText}"
    Answer: "${log.userAnswerText}"
    isCorrect: ${log.isCorrect}
    answeredAt: ${log.answeredAt.toISOString()}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
