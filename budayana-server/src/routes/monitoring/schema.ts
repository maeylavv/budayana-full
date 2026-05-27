import { t } from "elysia"

export const UpdateStudentSchema = t.Partial(
  t.Object({
    name: t.String(),
    grade: t.Number(),
    username: t.String(),
    guardianEmail: t.String(),
    classLabel: t.String(),
  })
)

export const StudentResponseSchema = t.Object({
  id: t.String(),
  name: t.String(),
  email: t.String(),
  username: t.Nullable(t.String()),
  displayUsername: t.Nullable(t.String()),
  grade: t.Nullable(t.Number()),
  classLabel: t.Nullable(t.String()),
  guardianEmail: t.Nullable(t.String()),
  role: t.String(),
  totalXp: t.Nullable(t.Number()),
  learningImprovement: t.Optional(t.Nullable(t.Number())),
  averageLiteracyScore: t.Optional(t.Nullable(t.Number())),
})

export const StudentListResponseSchema = t.Array(StudentResponseSchema)

export const ClassSummaryResponseSchema = t.Object({
  averageImprovement: t.Number(),
  activeStudents: t.Number(),
  inactiveStudents: t.Number(),
  islandExploration: t.Array(
    t.Object({
      name: t.String(),
      rate: t.Number(),
    })
  ),
  literacyLevels: t.Array(
    t.Object({
      name: t.String(),
      nilai: t.Number(),
    })
  ),
  timeAnalysis: t.Array(
    t.Object({
      name: t.String(),
      time: t.Number(),
    })
  ),
  students: t.Array(
    t.Object({
      id: t.String(),
      name: t.String(),
      class: t.String(),
      totalXp: t.Number(),
      learningImprovement: t.Number(),
      averageLiteracyScore: t.Number(),
    })
  ),
})

export const StudentAnalyticsResponseSchema = t.Object({
  studentInfo: t.Object({
    id: t.String(),
    name: t.String(),
    class: t.String(),
    avatar: t.String(),
    title: t.String(),
  }),
  storyAnalytics: t.Object({
    stats: t.Object({
      storiesCompleted: t.Number(),
      totalXp: t.Number(),
      averagePreTest: t.Number(),
      averagePostTest: t.Number(),
    }),
    improvementGauge: t.Array(
      t.Object({
        name: t.String(),
        value: t.Number(),
      })
    ),
    storyInterest: t.Array(
      t.Object({
        name: t.String(),
        count: t.Number(),
      })
    ),
    history: t.Array(
      t.Object({
        storyTitle: t.String(),
        preTestScore: t.Nullable(t.Number()),
        postTestScore: t.Nullable(t.Number()),
        xp: t.Number(),
        date: t.String(),
        time: t.String(),
        essay: t.Nullable(t.String()),
      })
    ),
  }),
  quizAnalytics: t.Object({
    stats: t.Object({
      explorationProgress: t.Number(),
      totalXp: t.Number(),
      currentBadge: t.String(),
      averageScore: t.Number(),
    }),
    radarLiteracy: t.Array(
      t.Object({
        subject: t.String(),
        Student: t.Number(),
        Target: t.Number(),
        fullMark: t.Number(),
      })
    ),
    culturalInterest: t.Array(
      t.Object({
        name: t.String(),
        "Skor Siswa": t.Number(),
        "Rata-rata Kelas": t.Number(),
      })
    ),
    history: t.Array(
      t.Object({
        island: t.String(),
        topic: t.String(),
        level: t.Number(),
        bloom: t.String(),
        score: t.String(),
        scorePercent: t.Optional(t.Number()),
        time: t.String(),
        date: t.String(),
      })
    ),
    currentBadge: t.String(),
  }),
})

