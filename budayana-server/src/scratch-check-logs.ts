import prisma from "./lib/db"

async function main() {
  console.log("=== CHECKING QUESTION ATTEMPT LOGS ===")
  const logs = await prisma.questionAttemptLog.findMany({
    include: {
      question: {
        select: {
          id: true,
          questionText: true,
          stageType: true,
          storyId: true,
          story: {
            select: {
              title: true
            }
          }
        }
      },
      storyAttempt: {
        select: {
          id: true,
          storyId: true,
          story: {
            select: {
              title: true
            }
          }
        }
      }
    },
    orderBy: { answeredAt: "desc" },
    take: 20
  })

  console.log(`Found ${logs.length} logs.`)
  for (const log of logs) {
    console.log(`\nLog ID: ${log.id}`)
    console.log(`Answered At: ${log.answeredAt}`)
    console.log(`Attempt ID: ${log.attemptId} (Story: ${log.storyAttempt.story.title})`)
    console.log(`Question ID: ${log.questionId} (Stage Type: ${log.question.stageType}, Story: ${log.question.story.title})`)
    console.log(`Question Text: ${log.question.questionText}`)
    console.log(`User Answer: ${log.userAnswerText}`)
    console.log(`Is Correct: ${log.isCorrect}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
