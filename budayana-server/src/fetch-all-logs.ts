import prisma from "./lib/db"

async function main() {
  console.log("Fetching all logs in database...")
  const logs = await prisma.questionAttemptLog.findMany({
    take: 50,
    orderBy: { answeredAt: "desc" },
    include: {
      question: true
    }
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
