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
  grade: t.Number(),
  classLabel: t.Nullable(t.String()),
  guardianEmail: t.Nullable(t.String()),
  role: t.String(),
  totalXp: t.Nullable(t.Number()),
})

export const StudentListResponseSchema = t.Array(StudentResponseSchema)
