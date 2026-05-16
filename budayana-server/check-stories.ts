// import { PrismaClient } from './src/lib/db/prisma/generated';
// import dotenv from 'dotenv';

// dotenv.config();

// const prisma = new PrismaClient();

// async function checkStories() {
//   try {
//     const islands = await prisma.island.findMany({
//       include: {
//         _count: {
//           select: { stories: true }
//         }
//       }
//     });
//     console.log(JSON.stringify(islands, null, 2));
//   } catch (err) {
//     console.error(err);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// checkStories();
