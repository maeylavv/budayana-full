import prisma from "../../lib/db"

/**
 * Get students filtered by grade
 */
export const getStudentsByGrade = async (grade: number) => {
  return await prisma.user.findMany({
    where: {
      grade: grade,
      role: "STUDENT"
    },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      displayUsername: true,
      grade: true,
      classLabel: true,
      guardianEmail: true,
      role: true,
      totalXp: true,
    },
    orderBy: {
      name: "asc"
    }
  })
}

/**
 * Get student by ID
 */
export const getStudentById = async (id: string) => {
  return await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      displayUsername: true,
      grade: true,
      classLabel: true,
      guardianEmail: true,
      role: true,
      totalXp: true,
    }
  })
}

/**
 * Update student data
 */
export const updateStudent = async (id: string, data: any) => {
  return await prisma.user.update({
    where: { id },
    data
  })
}

/**
 * Get students filtered by guardian email
 */
export const getStudentsByGuardianEmail = async (email: string) => {
  return await prisma.user.findMany({
    where: {
      guardianEmail: email,
      role: "STUDENT"
    },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      displayUsername: true,
      grade: true,
      classLabel: true,
      guardianEmail: true,
      role: true,
      totalXp: true,
    },
    orderBy: {
      name: "asc"
    }
  })
}

/**
 * Delete student
 */
export const deleteStudent = async (id: string) => {
  return await prisma.user.delete({
    where: { id }
  })
}
