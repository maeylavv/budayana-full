import prisma from "./lib/db"

async function main() {
  console.log("=== CHECKING SUMATRA PRE-TEST QUESTIONS ===")
  const storyId = "cmjjkes640004vsvhz0ltf1p8"
  
  const questions = await prisma.question.findMany({
    where: { storyId },
    include: {
      answerOptions: true
    }
  })

  console.log(`Total Questions found: ${questions.length}`)
  for (const q of questions) {
    console.log(`\nQuestion ID: ${q.id}`)
    console.log(`Text: ${q.questionText}`)
    console.log(`Stage Type: ${q.stageType}`)
    console.log(`Options:`)
    for (const opt of q.answerOptions) {
      console.log(`  - Option: ${opt.optionText} (ID: ${opt.id}, isCorrect: ${opt.isCorrect})`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
