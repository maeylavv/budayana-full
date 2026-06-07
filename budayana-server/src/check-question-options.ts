import prisma from "./lib/db"

async function main() {
  const question = await prisma.question.findFirst({
    where: {
      questionText: {
        contains: "sedang malin lakukan"
      }
    },
    include: {
      answerOptions: true
    }
  })

  if (!question) {
    console.log("Question not found!")
    return
  }

  console.log(`Question ID: ${question.id}`)
  console.log(`Question Text: "${question.questionText}"`)
  console.log(`Question Type: "${question.questionType}"`)
  console.log("Answer Options:")
  for (const opt of question.answerOptions) {
    console.log(`- Option ID: ${opt.id}
    Option Text: "${opt.optionText}"
    isCorrect: ${opt.isCorrect}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
