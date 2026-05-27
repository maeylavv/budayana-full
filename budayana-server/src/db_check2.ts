import prisma from "./lib/db"

async function main() {
  const user = await prisma.user.findUnique({
    where: { id: "ewvLt1MUgyQEutsjuljpxvhQo6qAacld" },
    include: {
      storyAttempts: {
        include: {
          story: true
        }
      }
    }
  })
  console.log("=== USER ewvLt1MUgyQEutsjuljpxvhQo6qAacld ===")
  console.log(JSON.stringify(user, null, 2))

  const user2 = await prisma.user.findUnique({
    where: { id: "evvLt1MUgyQEutsjuIjpxvhQo6qAactd" },
    include: {
      storyAttempts: {
        include: {
          story: true
        }
      }
    }
  })
  console.log("=== USER evvLt1MUgyQEutsjuIjpxvhQo6qAactd ===")
  console.log(JSON.stringify({
    id: user2?.id,
    name: user2?.name,
    attemptsCount: user2?.storyAttempts.length
  }, null, 2))
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
