import prisma from "./lib/db"
import { createQuestionLog } from "./routes/attempts/service"

async function main() {
  console.log("Checking if attempt exists...")
  const attempt = await prisma.storyAttempt.findFirst({
    where: { finishedAt: null }
  })
  
  if (!attempt) {
    console.log("No active attempt found to test with!")
    return
  }
  
  console.log("Active Attempt ID:", attempt.id)
  
  // Sumatra slide 2 question ID and first option ID from check-sumatra output
  const questionId = "cmq2whx71001s8ougwv2765vo"
  const selectedOptionId = "cmq2whx7o001t8ougeapj1smk"
  
  console.log(`Calling createQuestionLog with:
  attemptId: ${attempt.id}
  questionId: ${questionId}
  selectedOptionId: ${selectedOptionId}`)
  
  try {
    const start = Date.now()
    const log = await createQuestionLog(attempt.id, {
      questionId,
      selectedOptionId,
      attemptCount: 1
    })
    console.log(`Success in ${Date.now() - start}ms! Created Log:`, log)
  } catch (error) {
    console.error("Error occurred in createQuestionLog:", error)
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
