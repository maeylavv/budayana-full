import prisma from "./lib/db"
import { getUserProgress } from "./routes/progress/service"

async function main() {
  const user = await prisma.user.findFirst({
    where: { name: "elvademo" }
  })
  if (!user) {
    console.log("User elvademo not found")
    return
  }

  console.log(`Triggering getUserProgress service for user: ${user.name}`)
  await getUserProgress(user.id, {})

  const progress = await prisma.userProgress.findMany({
    where: { userId: user.id },
    include: { island: true }
  })

  console.log("=== RESULTS AFTER SERVICE EXECUTION ===")
  for (const p of progress) {
    console.log(`${p.island.islandName} (${p.island.slug}): isUnlocked=${p.isUnlocked}, isCompleted=${p.isCompleted}, cycleCount=${p.cycleCount}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
