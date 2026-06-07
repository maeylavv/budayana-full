import prisma from "./lib/db"

async function main() {
  console.log("Checking user sessions...")
  const sessions = await prisma.session.findMany({
    orderBy: { expiresAt: "desc" },
    take: 5,
    include: { user: true }
  })
  
  console.log(`Found ${sessions.length} sessions:`)
  for (const s of sessions) {
    console.log(`- Token: ${s.token}`)
    console.log(`  Expires: ${s.expiresAt.toISOString()}`)
    console.log(`  User: ${s.user.name} (${s.user.email})`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
