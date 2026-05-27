import prisma from "./lib/db"

async function main() {
  console.log("=== CHECKING STORIES ===")
  const stories = await prisma.story.findMany({
    include: {
      island: true,
      questions: {
        select: {
          id: true,
          stageType: true
        }
      }
    }
  })

  for (const s of stories) {
    console.log(`\nStory ID: ${s.id}`)
    console.log(`Title: ${s.title}`)
    console.log(`Type: ${s.storyType}`)
    console.log(`Island: ${s.island.islandName} (${s.island.slug})`)
    console.log(`Questions Count: ${s.questions.length}`)
    const stageCounts = s.questions.reduce((acc, q) => {
      acc[q.stageType] = (acc[q.stageType] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    console.log(`Questions by Stage:`, stageCounts)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
