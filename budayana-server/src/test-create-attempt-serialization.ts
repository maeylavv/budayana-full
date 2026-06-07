import { createAttempt } from "./routes/attempts/service"
import prisma from "./lib/db"

async function main() {
  const storyId = "cmjjkesfl0006vsvh8g4irre9"
  const userId = "evvLt1MUgyQEutsjuIjpxvhQo6qAactd"

  const attempt = await createAttempt(userId, storyId)
  console.log("Attempt object keys:", Object.keys(attempt))
  console.log("QuestionLogs count:", attempt.questionLogs?.length)
  console.log("QuestionLogs sample:", attempt.questionLogs?.[0])
}

main().catch(console.error).finally(() => prisma.$disconnect())
