import prisma from "./lib/db";

const femaleStudents = [
  "Ashilla Zahwa Ar Rasyid",
  "Berlian Aileen Merietta",
  "Nabila Khairunnisa' Ramadhani"
];

async function main() {
  console.log("Starting script to set gender for existing student accounts...");

  // 1. Get all students
  const students = await prisma.user.findMany({
    where: {
      role: "STUDENT"
    }
  });

  console.log(`Found ${students.length} student accounts in the database.`);

  let updatedCount = 0;
  for (const student of students) {
    // Determine gender
    const isFemale = femaleStudents.some(name => student.name.trim().toLowerCase() === name.toLowerCase());
    const targetGender = isFemale ? "Perempuan" : "Laki-laki";

    console.log(`Updating student ${student.name} (${student.id}) -> Gender: ${targetGender}`);

    await prisma.user.update({
      where: { id: student.id },
      data: { gender: targetGender }
    });

    updatedCount++;
  }

  console.log(`Successfully updated gender for ${updatedCount} student accounts.`);
}

main()
  .catch((e) => {
    console.error("Error setting gender for existing users:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
