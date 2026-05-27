import prisma from "./lib/db"

async function main() {
  console.log("=== CHECKING SLIDES AND TRACKABILITY ===")
  const sumatra = await prisma.island.findUnique({
    where: { slug: "sumatra" }
  })

  if (!sumatra) {
    console.log("Sumatra not found")
    return
  }

  const stories = await prisma.story.findMany({
    where: { islandId: sumatra.id },
    include: {
      staticSlides: true,
      interactiveSlides: true
    }
  })

  console.log(`Stories found for Sumatra (${sumatra.id}): ${stories.length}`)
  for (const s of stories) {
    console.log(`\nStory ID: ${s.id}`)
    console.log(`Title: ${s.title}`)
    console.log(`Type: ${s.storyType}`)
    console.log(`Static Slides: ${s.staticSlides.length}`)
    console.log(`Interactive Slides: ${s.interactiveSlides.length}`)
    
    const hasContent =
      (s.storyType === "STATIC" && s.staticSlides.length > 0) ||
      (s.storyType === "INTERACTIVE" && s.interactiveSlides.length > 0)
    console.log(`Has Content (Trackable): ${hasContent}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
