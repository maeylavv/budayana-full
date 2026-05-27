import prisma from "./lib/db"
import { createAttempt, createQuestionLog, createStageAttempt } from "./routes/attempts/service"

async function main() {
  console.log("=== STARTING SCORING INTEGRATION TEST ===")
  
  // 1. Get or create a test user
  let user = await prisma.user.findFirst()
  if (!user) {
    user = await prisma.user.create({
      data: {
        id: "test-user-id-123",
        name: "Test Student",
        email: "student@test.com",
        grade: 4
      }
    })
  }
  console.log(`Using user: ${user.name} (ID: ${user.id})`)

  // 2. Main story ID for Sumatra (Malin Kundang)
  const storyId = "cmjjkesfl0006vsvh8g4irre9"
  const preTestStoryId = "cmjjkes640004vsvhz0ltf1p8"

  console.log("Creating attempt for main story...")
  const attempt = await createAttempt(user.id, storyId)
  console.log(`Created Attempt ID: ${attempt.id}`)

  // 3. Fetch pre-test questions
  const questions = await prisma.question.findMany({
    where: { storyId: preTestStoryId },
    include: { answerOptions: true }
  })

  console.log(`Found ${questions.length} Pre-Test questions.`)

  // 4. Log 6 correct answers and 4 incorrect answers
  console.log("Logging answers...")
  for (let i = 0; i < questions.length; i++) {
    const q = questions[i]
    const correctOpt = q.answerOptions.find(o => o.isCorrect)
    const incorrectOpt = q.answerOptions.find(o => !o.isCorrect)

    const shouldBeCorrect = i < 6 // 6 correct, 4 incorrect
    const selectedOpt = shouldBeCorrect ? correctOpt : incorrectOpt

    if (selectedOpt) {
      await createQuestionLog(attempt.id, {
        questionId: q.id,
        selectedOptionId: selectedOpt.id,
        attemptCount: 1
      })
    }
  }
  console.log("All answers logged.")

  // 5. Create stage attempt for PRE_TEST
  console.log("Submitting Stage 1 (PRE_TEST)...")
  const stage = await createStageAttempt(attempt.id, {
    stageType: "PRE_TEST",
    timeSpentSeconds: 45,
    xpGained: 0
  })

  console.log(`\n=== RESULTS ===`)
  console.log(`Returned Stage Score: ${stage.score} (${typeof stage.score})`)

  // 6. Fetch parent attempt from DB
  const updatedAttempt = await prisma.storyAttempt.findUnique({
    where: { id: attempt.id }
  })
  console.log(`Saved preTestScore in DB: ${updatedAttempt?.preTestScore} (${typeof updatedAttempt?.preTestScore})`)

  // 7. Cleanup
  console.log("\nCleaning up test records...")
  await prisma.stageAttempt.deleteMany({ where: { attemptId: attempt.id } })
  await prisma.questionAttemptLog.deleteMany({ where: { attemptId: attempt.id } })
  await prisma.storyAttempt.delete({ where: { id: attempt.id } })
  console.log("Cleanup finished. Test complete.")
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
