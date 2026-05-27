import prisma from "./lib/db"

async function main() {
  console.log("=== CHECKING NEWEST USERS ===")
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    take: 3
  })

  console.log(`Found ${users.length} users.`)
  for (const u of users) {
    console.log(`\nUser ID: ${u.id}`)
    console.log(`Name: ${u.name} (Email: ${u.email})`)
    console.log(`Created At: ${u.createdAt}`)
    
    const attempts = await prisma.storyAttempt.findMany({
      where: { userId: u.id },
      include: {
        story: {
          select: { title: true }
        },
        stageAttempts: true,
        questionLogs: true
      },
      orderBy: { startedAt: "desc" }
    })

    console.log(`Attempts count for this user: ${attempts.length}`)
    for (const a of attempts) {
      console.log(`  - Attempt ID: ${a.id} (Story: ${a.story.title})`)
      console.log(`    Started At: ${a.startedAt}`)
      console.log(`    Finished At: ${a.finishedAt}`)
      console.log(`    preTestScore: ${a.preTestScore}`)
      console.log(`    postTestScore: ${a.postTestScore}`)
      console.log(`    Stage Attempts: ${a.stageAttempts.length}`)
      for (const sa of a.stageAttempts) {
        console.log(`      * Stage: ${sa.stageType}, Score: ${sa.score}`)
      }
      console.log(`    Question Logs: ${a.questionLogs.length}`)
      for (const ql of a.questionLogs) {
        console.log(`      * Question ID: ${ql.questionId}, Is Correct: ${ql.isCorrect}`)
      }
    }
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
