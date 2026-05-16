import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./src/lib/db/prisma/generated"

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL || "",
})
const prisma = new PrismaClient({ adapter })

async function main() {
  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      grade: true,
      role: true,
    }
  })

  console.log("Total users:", users.length)
  console.log("Users sample:", JSON.stringify(users, null, 2))

  const studentsInGrade4 = users.filter(u => u.grade === 4 && u.role === "STUDENT")
  console.log("Students in Grade 4 with role STUDENT:", studentsInGrade4.length)
}

main()
  .catch(e => console.error(e))
  .finally(async () => await prisma.$disconnect())
