import prisma from "./lib/db"

async function main() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      role: true,
      email: true
    }
  })
  console.log("=== USERS ===")
  console.log(JSON.stringify(users, null, 2))

  for (const u of users) {
    const attempts = await prisma.storyAttempt.findMany({
      where: { userId: u.id },
      include: {
        story: true
      }
    })
    console.log(`=== ATTEMPTS FOR ${u.name} (${u.id}) ===`)
    console.log(JSON.stringify(attempts.map(a => ({
      id: a.id,
      storyTitle: a.story.title,
      pre: a.preTestScore,
      post: a.postTestScore,
      finishedAt: a.finishedAt,
      xp: a.totalXpGained
    })), null, 2))
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
