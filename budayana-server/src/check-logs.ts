import { PrismaClient } from './lib/db/prisma/generated/client'
import prisma from './lib/db'

async function main() {
  const logs = await prisma.questionAttemptLog.findMany({
    where: { userAnswerText: { not: null } },
    include: { question: true }
  })
  console.log("Logs with text:", logs.length)
  console.log(JSON.stringify(logs, null, 2))
}

main().catch(console.error).finally(() => prisma.$disconnect())
