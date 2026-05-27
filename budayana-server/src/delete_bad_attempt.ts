import prisma from "./lib/db"

async function main() {
  console.log("Searching for story attempts with preTestScore around 41.67...")
  
  const attempts = await prisma.storyAttempt.findMany({
    include: {
      story: true
    }
  })

  // Find attempt with score matching 41.67
  const badAttempts = attempts.filter(a => {
    if (!a.preTestScore) return false
    const score = Number(a.preTestScore)
    return score >= 41.6 && score <= 41.8
  })

  console.log(`Found ${badAttempts.length} matching attempts:`)
  for (const a of badAttempts) {
    console.log("Attempt details:", {
      id: a.id,
      userId: a.userId,
      storyTitle: a.story?.title,
      preTestScore: Number(a.preTestScore),
      finishedAt: a.finishedAt
    })

    console.log(`Deleting attempt ${a.id}...`)
    const deleted = await prisma.storyAttempt.delete({
      where: { id: a.id }
    })
    console.log("Deleted successfully!", deleted.id)
  }
  
  if (badAttempts.length === 0) {
    console.log("No attempts with score around 41.67 found.")
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
