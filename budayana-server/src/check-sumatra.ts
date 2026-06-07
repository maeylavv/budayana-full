import prisma from "./lib/db"

async function main() {
  console.log("Fetching Sumatra story and questions...")
  const story = await prisma.story.findFirst({
    where: {
      title: {
        contains: "Malin Kundang"
      }
    },
    include: {
      interactiveSlides: {
        include: {
          question: {
            include: {
              answerOptions: true
            }
          }
        }
      }
    }
  })

  if (!story) {
    console.log("Story not found!")
    return
  }

  console.log("Story Title:", story.title)
  console.log("Story ID:", story.id)
  
  for (const slide of story.interactiveSlides) {
    if (slide.question) {
      console.log(`\nQuestion ID: ${slide.question.id} (Slide ${slide.slideNumber})`)
      console.log(`Question Text: "${slide.question.questionText}"`)
      console.log("Options:")
      for (const opt of slide.question.answerOptions) {
        console.log(`  - ID: ${opt.id}, Text: "${opt.optionText}", isCorrect: ${opt.isCorrect}`)
      }
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
