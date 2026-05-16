import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./src/lib/db/prisma/generated"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || "",
})
const prisma = new PrismaClient({ adapter })

async function main() {
  const email = "aisais@gmail.com"
  const updated = await prisma.user.update({
    where: { email },
    data: { 
      role: "TEACHER",
      emailVerified: true
    }
  })
  console.log(`Updated ${email} to role: ${updated.role}`)
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
