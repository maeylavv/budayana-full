import prisma from "./lib/db"

async function main() {
  const stories = await prisma.story.findMany({
    include: {
      interactiveSlides: true,
      staticSlides: true,
    }
  })

  console.log(`Total stories found: ${stories.length}`)
  for (const story of stories) {
    console.log(`- Story ID: ${story.id}
    Title: "${story.title}"
    Type: "${story.storyType}"
    Island: "${story.island}"
    Static slides count: ${story.staticSlides.length}
    Interactive slides count: ${story.interactiveSlides.length}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
