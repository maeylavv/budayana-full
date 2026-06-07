import prisma from "./lib/db"

async function main() {
  const story = await prisma.story.findUnique({
    where: { id: "cmjjkesfl0006vsvh8g4irre9" }
  })
  
  console.log("Story details:", story)
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
