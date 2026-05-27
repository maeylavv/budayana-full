import prisma from "./lib/db"
import { getIslandBySlug } from "./routes/islands/service"

async function main() {
  console.log("=== CHECKING SUMATRA ISLAND STORIES IN DB ===")
  const island = await getIslandBySlug("sumatra", true)
  if (!island) {
    console.log("Sumatra island not found")
    return
  }

  console.log(`Island: ${island.islandName}`)
  console.log(`Total stories returned by service: ${island.stories.length}`)
  for (const s of island.stories) {
    console.log(`\nStory ID: ${s.id}`)
    console.log(`Title: ${s.title}`)
    console.log(`Type: ${s.storyType}`)
    console.log(`Order: ${s.order}`)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
