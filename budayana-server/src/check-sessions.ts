import prisma from "./lib/db"

async function main() {
  const sessions = await prisma.session.findMany({
    take: 5
  })
  console.log("Sessions:")
  for (const s of sessions) {
    console.log(`- ID: ${s.id}, Token: ${s.token}, userId: ${s.userId}, expiresAt: ${s.expiresAt.toISOString()}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
