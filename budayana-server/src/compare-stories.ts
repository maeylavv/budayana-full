import prisma from "./lib/db"

async function main() {
  const stories = await prisma.story.findMany({
    where: {
      storyType: "INTERACTIVE"
    },
    include: {
      questions: {
        include: {
          answerOptions: true
        }
      }
    }
  })

  for (const story of stories) {
    console.log(`\n=========================================`)
    console.log(`Story: ${story.title} (ID: ${story.id})`)
    console.log(`Questions Count: ${story.questions.length}`)
    
    for (const q of story.questions) {
      console.log(`  - Question: "${q.questionText}" (ID: ${q.id}, Type: ${q.questionType}, stageType: ${q.stageType})`)
      console.log(`    Options Count: ${q.answerOptions.length}`)
      for (const opt of q.answerOptions) {
        console.log(`      * Option: "${opt.optionText}" (ID: ${opt.id}, isCorrect: ${opt.isCorrect})`)
      }
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
