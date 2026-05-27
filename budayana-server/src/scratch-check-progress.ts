import prisma from "./lib/db"

async function main() {
  console.log("=== CHECKING USER PROGRESS ===")
  const newestUser = await prisma.user.findFirst({
    orderBy: { createdAt: "desc" }
  })

  if (!newestUser) {
    console.log("No users found")
    return
  }

  console.log(`Newest User ID: ${newestUser.id}`)
  console.log(`Name: ${newestUser.name} (${newestUser.email})`)

  const progress = await prisma.userProgress.findMany({
    where: { userId: newestUser.id },
    include: {
      island: true
    }
  })

  console.log(`Progress records: ${progress.length}`)
  for (const p of progress) {
    console.log(`  - Island: ${p.island.islandName} (${p.island.slug})`)
    console.log(`    isUnlocked: ${p.isUnlocked}`)
    console.log(`    isCompleted: ${p.isCompleted}`)
    console.log(`    cycleCount: ${p.cycleCount}`)
  }

  // Also count finished attempts for Sumatra main story
  const sumatraStory = await prisma.story.findFirst({
    where: { title: "Cerita Malin Kundang" }
  })
  
  if (sumatraStory) {
    const finishedAttempts = await prisma.storyAttempt.findMany({
      where: {
        userId: newestUser.id,
        storyId: sumatraStory.id,
        finishedAt: { not: null }
      }
    })
    console.log(`Finished attempts for Sumatra main story (${sumatraStory.id}): ${finishedAttempts.length}`)
    for (const a of finishedAttempts) {
      console.log(`    - ID: ${a.id}, FinishedAt: ${a.finishedAt}`)
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
