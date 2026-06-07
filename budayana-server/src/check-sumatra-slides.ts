import prisma from "./lib/db"

async function main() {
  const storyId = "cmjjkesfl0006vsvh8g4irre9" // Sumatra interactive story
  const story = await prisma.story.findUnique({
    where: { id: storyId },
    include: {
      staticSlides: true,
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

  const staticSlides = story.staticSlides.map(s => ({ ...s, type: 'story' }))
  const interactiveSlides = story.interactiveSlides.map(s => ({ ...s, type: s.slideType === 'ENDING' ? 'ending' : (s.question ? 'question' : 'image') }))
  
  const allSlides = [...staticSlides, ...interactiveSlides].sort((a, b) => a.slideNumber - b.slideNumber)
  
  console.log(`Slides for Sumatra story "${story.title}":`)
  for (const slide of allSlides) {
    console.log(`Slide ${slide.slideNumber}: Type: ${slide.type}`)
    if (slide.type === 'question') {
      console.log(`  Question ID: ${slide.question?.id}`)
      console.log(`  Question Text: "${slide.question?.questionText}"`)
      console.log(`  Question Type: "${slide.question?.questionType}"`)
      console.log(`  Options:`)
      for (const opt of slide.question?.answerOptions || []) {
        console.log(`    - [${opt.isCorrect ? 'x' : ' '}] "${opt.optionText}" (ID: ${opt.id})`)
      }
    } else if (slide.type === 'story') {
      console.log(`  Content: "${slide.contentText}"`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
