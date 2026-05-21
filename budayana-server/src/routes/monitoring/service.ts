import prisma from "../../lib/db"

/**
 * Get students filtered by grade
 */
export const getStudentsByGrade = async (grade: number, classLabel?: string, search?: string) => {
  const students = await prisma.user.findMany({
    where: {
      grade: grade,
      role: "STUDENT",
      ...(classLabel
        ? {
            classLabel: {
              equals: classLabel,
              mode: "insensitive"
            }
          }
        : {}),
      ...(search
        ? {
            OR: [
              {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                username: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {})
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
      storyAttempts: {
        where: {
          preTestScore: { not: null },
          postTestScore: { not: null }
        },
        select: {
          preTestScore: true,
          postTestScore: true
        }
      },
      quizAttempts: {
        where: {
          completed: true
        },
        select: {
          percentageScore: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  })

  return students.map(s => {
    let sumImp = 0;
    let countImp = 0;
    for (const sa of s.storyAttempts) {
      sumImp += (Number(sa.postTestScore) - Number(sa.preTestScore));
      countImp++;
    }
    const learningImprovement = countImp > 0 ? Math.round(sumImp / countImp) : 0;

    let sumLit = 0;
    let countLit = 0;
    for (const qa of s.quizAttempts) {
      sumLit += qa.percentageScore;
      countLit++;
    }
    const averageLiteracyScore = countLit > 0 ? Math.round(sumLit / countLit) : 0;

    return {
      id: s.id,
      name: s.name,
      email: s.email,
      username: s.username,
      displayUsername: s.displayUsername,
      grade: s.grade,
      classLabel: s.classLabel,
      guardianEmail: s.guardianEmail,
      role: s.role,
      totalXp: s.totalXp,
      learningImprovement,
      averageLiteracyScore
    };
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
export const getStudentsByGuardianEmail = async (email: string, search?: string) => {
  const students = await prisma.user.findMany({
    where: {
      guardianEmail: {
        equals: email,
        mode: "insensitive"
      },
      role: "STUDENT",
      ...(search
        ? {
            OR: [
              {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              },
              {
                username: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            ],
          }
        : {})
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
      storyAttempts: {
        where: {
          preTestScore: { not: null },
          postTestScore: { not: null }
        },
        select: {
          preTestScore: true,
          postTestScore: true
        }
      },
      quizAttempts: {
        where: {
          completed: true
        },
        select: {
          percentageScore: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  })

  return students.map(s => {
    let sumImp = 0;
    let countImp = 0;
    for (const sa of s.storyAttempts) {
      sumImp += (Number(sa.postTestScore) - Number(sa.preTestScore));
      countImp++;
    }
    const learningImprovement = countImp > 0 ? Math.round(sumImp / countImp) : 0;

    let sumLit = 0;
    let countLit = 0;
    for (const qa of s.quizAttempts) {
      sumLit += qa.percentageScore;
      countLit++;
    }
    const averageLiteracyScore = countLit > 0 ? Math.round(sumLit / countLit) : 0;

    return {
      id: s.id,
      name: s.name,
      email: s.email,
      username: s.username,
      displayUsername: s.displayUsername,
      grade: s.grade,
      classLabel: s.classLabel,
      guardianEmail: s.guardianEmail,
      role: s.role,
      totalXp: s.totalXp,
      learningImprovement,
      averageLiteracyScore
    };
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

const standardSlugs = ["sumatra", "jawa", "kalimantan", "sulawesi", "papua", "bali", "maluku", "nusa-tenggara"];

/**
 * Helper functions for analytics aggregation formatting
 */
function getIslandDisplayName(slug: string, dbName?: string): string {
  const norm = slug.toLowerCase().trim();
  if (norm === "sumatra") return "Sumatra";
  if (norm === "jawa") return "Jawa";
  if (norm === "kalimantan") return "Kalimantan";
  if (norm === "sulawesi") return "Sulawesi";
  if (norm === "papua") return "Papua";
  if (norm === "bali") return "Bali";
  if (norm === "maluku") return "Maluku";
  if (norm === "nusa-tenggara" || norm === "nusatenggara") return "Nusa Tenggara";
  
  if (dbName) return dbName;
  return slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}

function getTopicDisplayName(slug: string): string {
  const norm = slug.toLowerCase().trim();
  if (norm === "makanan" || norm.includes("makanan")) return "Makanan Tradisional";
  if (norm === "rumah" || norm.includes("rumah")) return "Rumah Adat";
  if (norm === "tarian" || norm.includes("tarian") || norm.includes("musik") || norm.includes("alat")) return "Tarian & Alat Musik";
  if (norm.includes("senjata")) return "Senjata Tradisional";
  if (norm.includes("pakaian") || norm.includes("busana")) return "Pakaian Adat";
  return "Makanan Tradisional";
}

function normalizeTopicLabel(slug: string): string {
  return getTopicDisplayName(slug);
}

function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const pad = (num: number) => String(num).padStart(2, "0");
  return `${pad(minutes)}:${pad(seconds)}`;
}

function formatDate(d: Date): string {
  const pad = (num: number) => String(num).padStart(2, "0");
  const day = pad(d.getDate());
  const month = pad(d.getMonth() + 1);
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

function deriveStudentTitle(totalXp: number, maxLevelCompleted: number): string {
  if (maxLevelCompleted >= 3 || totalXp >= 1200) return "Si Pakar Budaya";
  if (maxLevelCompleted >= 2 || totalXp >= 800) return "Si Penjelajah";
  return "Si Pengamat";
}

/**
 * Get class-wide analytics summary for teachers
 */
export const getClassSummary = async (grade: number, classLabel?: string) => {
  // 1. Get all students in the class
  const students = await prisma.user.findMany({
    where: {
      role: "STUDENT",
      grade: grade,
      ...(classLabel
        ? {
            classLabel: {
              equals: classLabel,
              mode: "insensitive"
            }
          }
        : {})
    },
    select: {
      id: true,
      name: true,
      classLabel: true,
      totalXp: true,
      storyAttempts: {
        where: {
          preTestScore: { not: null },
          postTestScore: { not: null }
        },
        select: {
          preTestScore: true,
          postTestScore: true
        }
      },
      quizAttempts: {
        where: {
          completed: true
        },
        select: {
          percentageScore: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  });

  const totalStudents = students.length;

  // If no students exist, return safe defaults
  if (totalStudents === 0) {
    return {
      averageImprovement: 0,
      activeStudents: 0,
      inactiveStudents: 0,
      islandExploration: [
        { name: "Sumatra", rate: 0 },
        { name: "Jawa", rate: 0 },
        { name: "Kalimantan", rate: 0 },
        { name: "Sulawesi", rate: 0 },
        { name: "Papua", rate: 0 },
        { name: "Bali", rate: 0 },
        { name: "Maluku", rate: 0 },
        { name: "Nusa Tenggara", rate: 0 }
      ],
      literacyLevels: [
        { name: "Ingatan", nilai: 0 },
        { name: "Analisis", nilai: 0 },
        { name: "Pendapat", nilai: 0 }
      ],
      timeAnalysis: [
        { name: "Mon", time: 0 },
        { name: "Tue", time: 0 },
        { name: "Wed", time: 0 },
        { name: "Thu", time: 0 },
        { name: "Fri", time: 0 },
        { name: "Sat", time: 0 },
        { name: "Sun", time: 0 }
      ],
      students: []
    };
  }

  // 2. Calculate averageImprovement across class
  // AVG(postTestScore - preTestScore)
  let sumClassImprovement = 0;
  let countClassImprovement = 0;

  for (const s of students) {
    for (const attempt of s.storyAttempts) {
      const post = Number(attempt.postTestScore);
      const pre = Number(attempt.preTestScore);
      sumClassImprovement += (post - pre);
      countClassImprovement++;
    }
  }

  const averageImprovement = countClassImprovement > 0 
    ? Math.round(sumClassImprovement / countClassImprovement) 
    : 0;

  // 3. Active vs Inactive Students
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const activeStories = await prisma.storyAttempt.findMany({
    where: {
      user: {
        role: "STUDENT",
        grade: grade,
        ...(classLabel
          ? {
              classLabel: {
                equals: classLabel,
                mode: "insensitive"
              }
            }
          : {})
      },
      startedAt: { gte: sevenDaysAgo }
    },
    select: {
      userId: true
    }
  });

  const activeQuizzes = await prisma.quizAttempt.findMany({
    where: {
      user: {
        role: "STUDENT",
        grade: grade,
        ...(classLabel
          ? {
              classLabel: {
                equals: classLabel,
                mode: "insensitive"
              }
            }
          : {})
      },
      startedAt: { gte: sevenDaysAgo }
    },
    select: {
      userId: true
    }
  });

  const activeUserIds = new Set([
    ...activeStories.map(s => s.userId),
    ...activeQuizzes.map(q => q.userId)
  ]);

  const activeStudents = activeUserIds.size;
  const inactiveStudents = Math.max(0, totalStudents - activeStudents);

  // 4. Island Exploration rates
  const storyAttemptsAll = await prisma.storyAttempt.findMany({
    where: {
      user: {
        role: "STUDENT",
        grade: grade,
        ...(classLabel
          ? {
              classLabel: {
                equals: classLabel,
                mode: "insensitive"
              }
            }
          : {})
      }
    },
    select: {
      userId: true,
      story: {
        select: {
          island: {
            select: {
              slug: true,
              islandName: true
            }
          }
        }
      }
    }
  });

  const quizAttemptsAll = await prisma.quizAttempt.findMany({
    where: {
      user: {
        role: "STUDENT",
        grade: grade,
        ...(classLabel
          ? {
              classLabel: {
                equals: classLabel,
                mode: "insensitive"
              }
            }
          : {})
      }
    },
    select: {
      userId: true,
      islandSlug: true
    }
  });

  const dbIslands = await prisma.island.findMany({
    orderBy: { unlockOrder: "asc" }
  });

  const islandParticipants = new Map<string, Set<string>>();

  // Initialize all known islands
  for (const isl of dbIslands) {
    islandParticipants.set(isl.slug.toLowerCase().trim(), new Set<string>());
  }

  for (const slug of standardSlugs) {
    if (!islandParticipants.has(slug)) {
      islandParticipants.set(slug, new Set<string>());
    }
  }

  // Process story attempts
  for (const sa of storyAttemptsAll) {
    if (sa.story?.island?.slug) {
      const slug = sa.story.island.slug.toLowerCase().trim();
      if (!islandParticipants.has(slug)) {
        islandParticipants.set(slug, new Set<string>());
      }
      islandParticipants.get(slug)!.add(sa.userId);
    }
  }

  // Process quiz attempts
  for (const qa of quizAttemptsAll) {
    if (qa.islandSlug) {
      const slug = qa.islandSlug.toLowerCase().trim();
      if (!islandParticipants.has(slug)) {
        islandParticipants.set(slug, new Set<string>());
      }
      islandParticipants.get(slug)!.add(qa.userId);
    }
  }

  const islandExploration = [];
  const processedSlugs = new Set<string>();

  for (const isl of dbIslands) {
    const slug = isl.slug.toLowerCase().trim();
    processedSlugs.add(slug);
    const participants = islandParticipants.get(slug) || new Set<string>();
    const rate = Math.round((participants.size / totalStudents) * 100);
    islandExploration.push({
      name: getIslandDisplayName(slug, isl.islandName),
      rate
    });
  }

  for (const slug of standardSlugs) {
    if (!processedSlugs.has(slug)) {
      const participants = islandParticipants.get(slug) || new Set<string>();
      const rate = Math.round((participants.size / totalStudents) * 100);
      islandExploration.push({
        name: getIslandDisplayName(slug),
        rate
      });
    }
  }

  // 5. Time Analysis
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const weekdayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const timeMap = new Map<string, number>();
  for (const label of weekdayLabels) {
    timeMap.set(label, 0);
  }

  const storyTimes = await prisma.storyAttempt.findMany({
    where: {
      user: {
        role: "STUDENT",
        grade: grade,
        ...(classLabel
          ? {
              classLabel: {
                equals: classLabel,
                mode: "insensitive"
              }
            }
          : {})
      },
      startedAt: { gte: sevenDaysAgo }
    },
    select: {
      totalTimeSeconds: true,
      startedAt: true
    }
  });

  const quizTimes = await prisma.quizAttempt.findMany({
    where: {
      user: {
        role: "STUDENT",
        grade: grade,
        ...(classLabel
          ? {
              classLabel: {
                equals: classLabel,
                mode: "insensitive"
              }
            }
          : {})
      },
      startedAt: { gte: sevenDaysAgo }
    },
    select: {
      totalTimeSeconds: true,
      startedAt: true
    }
  });

  for (const sa of storyTimes) {
    const dayIndex = sa.startedAt.getDay();
    const dayName = weekdays[dayIndex];
    if (timeMap.has(dayName)) {
      timeMap.set(dayName, timeMap.get(dayName)! + sa.totalTimeSeconds);
    }
  }

  for (const qa of quizTimes) {
    const dayIndex = qa.startedAt.getDay();
    const dayName = weekdays[dayIndex];
    if (timeMap.has(dayName)) {
      timeMap.set(dayName, timeMap.get(dayName)! + qa.totalTimeSeconds);
    }
  }

  const timeAnalysis = weekdayLabels.map(label => {
    const totalSeconds = timeMap.get(label) || 0;
    return {
      name: label,
      time: Math.round(totalSeconds / 60)
    };
  });

  // 6. Literacy levels (vertical bar chart)
  const quizAttemptsClass = await prisma.quizAttempt.findMany({
    where: {
      user: {
        role: "STUDENT",
        grade: grade,
        ...(classLabel
          ? {
              classLabel: {
                equals: classLabel,
                mode: "insensitive"
              }
            }
          : {})
      },
      completed: true
    },
    select: {
      levelId: true,
      percentageScore: true
    }
  });

  const levelScoresMap = new Map<number, { sum: number; count: number }>();
  levelScoresMap.set(1, { sum: 0, count: 0 });
  levelScoresMap.set(2, { sum: 0, count: 0 });
  levelScoresMap.set(3, { sum: 0, count: 0 });

  for (const qa of quizAttemptsClass) {
    const lvl = qa.levelId;
    if (levelScoresMap.has(lvl)) {
      const data = levelScoresMap.get(lvl)!;
      data.sum += qa.percentageScore;
      data.count++;
    }
  }

  const literacyLevels = [
    {
      name: "Ingatan",
      nilai: levelScoresMap.get(1)!.count > 0 ? Math.round(levelScoresMap.get(1)!.sum / levelScoresMap.get(1)!.count) : 0
    },
    {
      name: "Analisis",
      nilai: levelScoresMap.get(2)!.count > 0 ? Math.round(levelScoresMap.get(2)!.sum / levelScoresMap.get(2)!.count) : 0
    },
    {
      name: "Pendapat",
      nilai: levelScoresMap.get(3)!.count > 0 ? Math.round(levelScoresMap.get(3)!.sum / levelScoresMap.get(3)!.count) : 0
    }
  ];

  // 7. Student Table list
  const enrichedStudents = students.map(s => {
    let sumImp = 0;
    let countImp = 0;
    for (const sa of s.storyAttempts) {
      sumImp += (Number(sa.postTestScore) - Number(sa.preTestScore));
      countImp++;
    }
    const learningImprovement = countImp > 0 ? Math.round(sumImp / countImp) : 0;

    let sumLit = 0;
    let countLit = 0;
    for (const qa of s.quizAttempts) {
      sumLit += qa.percentageScore;
      countLit++;
    }
    const averageLiteracyScore = countLit > 0 ? Math.round(sumLit / countLit) : 0;

    return {
      id: s.id,
      name: s.name,
      class: `${grade}${s.classLabel || ""}`,
      totalXp: s.totalXp || 0,
      learningImprovement,
      averageLiteracyScore
    };
  });

  return {
    averageImprovement,
    activeStudents,
    inactiveStudents,
    islandExploration,
    literacyLevels,
    timeAnalysis,
    students: enrichedStudents
  };
};

/**
 * Get detailed student analytics and historic charts
 */
export const getStudentAnalytics = async (studentId: string) => {
  const student = await prisma.user.findUnique({
    where: { id: studentId },
    include: {
      storyAttempts: {
        include: {
          story: {
            include: {
              island: true
            }
          }
        }
      },
      quizAttempts: {
        where: {
          completed: true
        }
      }
    }
  });

  if (!student) {
    throw new Error("Student not found");
  }

  const studentGrade = student.grade || 4;
  const studentClassLabel = student.classLabel || "";

  // Title / Gelar derivation
  const studentQuizzes = student.quizAttempts;
  const studentStories = student.storyAttempts;
  const maxLevelCompleted = studentQuizzes.length > 0 ? Math.max(...studentQuizzes.map(q => q.levelId)) : 0;
  const totalXp = student.totalXp || 0;
  const title = deriveStudentTitle(totalXp, maxLevelCompleted);

  // ==========================================
  // 1. STORY ANALYTICS
  // ==========================================
  
  // Stats
  const completedStories = studentStories.filter(sa => sa.finishedAt !== null);
  const storiesCompleted = new Set(completedStories.map(s => s.storyId)).size;
  const totalStoryXp = studentStories.reduce((acc, sa) => acc + (sa.totalXpGained || 0), 0);

  const preTestAttempts = studentStories.filter(sa => sa.preTestScore !== null);
  const averagePreTest = preTestAttempts.length > 0 
    ? Math.round(preTestAttempts.reduce((acc, sa) => acc + Number(sa.preTestScore), 0) / preTestAttempts.length) 
    : 0;

  const postTestAttempts = studentStories.filter(sa => sa.postTestScore !== null);
  const averagePostTest = postTestAttempts.length > 0 
    ? Math.round(postTestAttempts.reduce((acc, sa) => acc + Number(sa.postTestScore), 0) / postTestAttempts.length) 
    : 0;

  // Improvement Gauge: AVG(postTestScore - preTestScore) for attempts with both scores
  const bothScoresAttempts = studentStories.filter(sa => sa.preTestScore !== null && sa.postTestScore !== null);
  const averageImprovement = bothScoresAttempts.length > 0
    ? Math.round(bothScoresAttempts.reduce((acc, sa) => acc + (Number(sa.postTestScore) - Number(sa.preTestScore)), 0) / bothScoresAttempts.length)
    : 0;

  const improvementGauge = [
    { name: "Kenaikan", value: averageImprovement },
    { name: "Sisa", value: 100 - averageImprovement }
  ];

  // Story Interest (attempts count per story title)
  const storyCountsMap = new Map<string, number>();
  for (const sa of studentStories) {
    if (sa.story?.title) {
      storyCountsMap.set(sa.story.title, (storyCountsMap.get(sa.story.title) || 0) + 1);
    }
  }
  const storyInterest = Array.from(storyCountsMap.entries()).map(([name, count]) => ({
    name,
    count
  }));

  // Story History
  const storyHistory = studentStories.map(sa => ({
    storyTitle: sa.story?.title || "Cerita Rakyat",
    preTestScore: sa.preTestScore !== null ? Number(sa.preTestScore) : 0,
    postTestScore: sa.postTestScore !== null ? Number(sa.postTestScore) : 0,
    xp: sa.totalXpGained || 0,
    date: sa.finishedAt ? formatDate(sa.finishedAt) : formatDate(sa.startedAt),
    time: formatDuration(sa.totalTimeSeconds),
    essay: sa.essayAnswer || null,
    timestamp: sa.finishedAt || sa.startedAt
  })).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .map(({ timestamp, ...rest }) => rest);

  const storyAnalytics = {
    stats: {
      storiesCompleted,
      totalXp: totalStoryXp,
      averagePreTest,
      averagePostTest
    },
    improvementGauge,
    storyInterest,
    history: storyHistory
  };

  // ==========================================
  // 2. QUIZ ANALYTICS
  // ==========================================

  // Stats
  const completedQuizzes = studentQuizzes.filter(q => q.completed);
  const completedIslands = new Set(completedQuizzes.map(q => q.islandSlug.toLowerCase().trim()));
  const standardCompleted = Array.from(completedIslands).filter(slug => standardSlugs.includes(slug));
  const explorationProgress = Math.round((standardCompleted.length / 8) * 100);
  const totalQuizXp = studentQuizzes.reduce((acc, q) => acc + (q.xpGained || 0), 0);
  const averageQuizScore = studentQuizzes.length > 0
    ? Math.round(studentQuizzes.reduce((acc, q) => acc + q.percentageScore, 0) / studentQuizzes.length)
    : 0;

  // Dominant Literacy Badge Derivation
  const levelAttempts: Record<number, number> = { 1: 0, 2: 0, 3: 0 };
  const levelScores: Record<number, number> = { 1: 0, 2: 0, 3: 0 };

  for (const q of studentQuizzes) {
    const lvl = q.levelId;
    if (lvl === 1 || lvl === 2 || lvl === 3) {
      levelAttempts[lvl]++;
      levelScores[lvl] += q.percentageScore;
    }
  }

  const levelAverages: Record<number, number> = {
    1: levelAttempts[1] > 0 ? levelScores[1] / levelAttempts[1] : 0,
    2: levelAttempts[2] > 0 ? levelScores[2] / levelAttempts[2] : 0,
    3: levelAttempts[3] > 0 ? levelScores[3] / levelAttempts[3] : 0,
  };

  let dominantLevel = 1;
  let maxAttempts = levelAttempts[1];

  for (const lvl of [2, 3] as const) {
    if (levelAttempts[lvl] > maxAttempts) {
      maxAttempts = levelAttempts[lvl];
      dominantLevel = lvl;
    } else if (levelAttempts[lvl] === maxAttempts && maxAttempts > 0) {
      // Tie-breaker
      if (levelAverages[lvl] > levelAverages[dominantLevel]) {
        dominantLevel = lvl;
      }
    }
  }

  // Default fallback if no attempts
  if (maxAttempts === 0) {
    dominantLevel = 1;
  }

  const badgeMap: Record<number, string> = {
    1: "Pengamat Budaya",
    2: "Penjelajah Budaya",
    3: "Ahli Budaya",
  };
  const currentBadge = badgeMap[dominantLevel] || "Pengamat Budaya";

  // Radar Literacy (Student vs Class)
  const classQuizzes = await prisma.quizAttempt.findMany({
    where: {
      user: {
        role: "STUDENT",
        grade: studentGrade
      },
      completed: true
    },
    select: {
      userId: true,
      levelId: true,
      percentageScore: true,
      topicSlug: true
    }
  });

  const studentLvlSums = { 1: 0, 2: 0, 3: 0 };
  const studentLvlCnts = { 1: 0, 2: 0, 3: 0 };
  for (const q of studentQuizzes) {
    const lvl = q.levelId as 1 | 2 | 3;
    if (lvl in studentLvlSums) {
      studentLvlSums[lvl] += q.percentageScore;
      studentLvlCnts[lvl]++;
    }
  }

  const classLvlSums = { 1: 0, 2: 0, 3: 0 };
  const classLvlCnts = { 1: 0, 2: 0, 3: 0 };
  for (const q of classQuizzes) {
    const lvl = q.levelId as 1 | 2 | 3;
    if (lvl in classLvlSums) {
      classLvlSums[lvl] += q.percentageScore;
      classLvlCnts[lvl]++;
    }
  }

  const radarLiteracy = [
    {
      subject: "Ingatan (L1)",
      Student: studentLvlCnts[1] > 0 ? Math.round(studentLvlSums[1] / studentLvlCnts[1]) : 0,
      Target: classLvlCnts[1] > 0 ? Math.round(classLvlSums[1] / classLvlCnts[1]) : 0,
      fullMark: 100
    },
    {
      subject: "Analisis (L2)",
      Student: studentLvlCnts[2] > 0 ? Math.round(studentLvlSums[2] / studentLvlCnts[2]) : 0,
      Target: classLvlCnts[2] > 0 ? Math.round(classLvlSums[2] / classLvlCnts[2]) : 0,
      fullMark: 100
    },
    {
      subject: "Pendapat (L3)",
      Student: studentLvlCnts[3] > 0 ? Math.round(studentLvlSums[3] / studentLvlCnts[3]) : 0,
      Target: classLvlCnts[3] > 0 ? Math.round(classLvlSums[3] / classLvlCnts[3]) : 0,
      fullMark: 100
    }
  ];

  // Cultural Interest
  const topics = ["Makanan Tradisional", "Rumah Adat", "Tarian & Alat Musik"];

  const studentTopicSums: Record<string, number> = { "Makanan Tradisional": 0, "Rumah Adat": 0, "Tarian & Alat Musik": 0 };
  const studentTopicCnts: Record<string, number> = { "Makanan Tradisional": 0, "Rumah Adat": 0, "Tarian & Alat Musik": 0 };
  for (const q of studentQuizzes) {
    const topicLabel = normalizeTopicLabel(q.topicSlug);
    if (topicLabel in studentTopicSums) {
      studentTopicSums[topicLabel] += q.percentageScore;
      studentTopicCnts[topicLabel]++;
    }
  }

  const classTopicSums: Record<string, number> = { "Makanan Tradisional": 0, "Rumah Adat": 0, "Tarian & Alat Musik": 0 };
  const classTopicCnts: Record<string, number> = { "Makanan Tradisional": 0, "Rumah Adat": 0, "Tarian & Alat Musik": 0 };
  for (const q of classQuizzes) {
    const topicLabel = normalizeTopicLabel(q.topicSlug);
    if (topicLabel in classTopicSums) {
      classTopicSums[topicLabel] += q.percentageScore;
      classTopicCnts[topicLabel]++;
    }
  }

  const culturalInterest = topics.map(topic => {
    return {
      name: topic,
      "Skor Siswa": studentTopicCnts[topic] > 0 ? Math.round(studentTopicSums[topic] / studentTopicCnts[topic]) : 0,
      "Rata-rata Kelas": classTopicCnts[topic] > 0 ? Math.round(classTopicSums[topic] / classTopicCnts[topic]) : 0
    };
  });

  // Quiz History
  const quizHistory = studentQuizzes.map(qa => ({
    island: getIslandDisplayName(qa.islandSlug),
    topic: getTopicDisplayName(qa.topicSlug),
    level: qa.levelId,
    bloom: qa.levelId === 1 ? "Ingatan" : (qa.levelId === 2 ? "Analisis" : "Pendapat"),
    score: `${qa.score}/${qa.totalQuestions}`,
    scorePercent: qa.percentageScore,
    time: formatDuration(qa.totalTimeSeconds),
    date: qa.finishedAt ? formatDate(qa.finishedAt) : formatDate(qa.startedAt),
    timestamp: qa.finishedAt || qa.startedAt
  })).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())
    .map(({ timestamp, ...rest }) => rest);

  const quizAnalytics = {
    stats: {
      explorationProgress,
      totalXp: totalQuizXp,
      currentBadge,
      averageScore: averageQuizScore
    },
    radarLiteracy,
    culturalInterest,
    history: quizHistory,
    currentBadge
  };

  return {
    studentInfo: {
      id: student.id,
      name: student.name,
      class: `${studentGrade}${studentClassLabel}`,
      avatar: "👦",
      title
    },
    storyAnalytics,
    quizAnalytics
  };
};
