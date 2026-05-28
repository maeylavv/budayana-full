import { Elysia, t } from "elysia"
import { auth } from "../../lib/auth"
import * as monitoringService from "./service"
import { 
  UpdateStudentSchema, 
  StudentResponseSchema, 
  StudentListResponseSchema,
  ClassSummaryResponseSchema,
  StudentAnalyticsResponseSchema
} from "./schema"
import { ErrorResponseSchema, SuccessResponseSchema } from "../../lib/utils/schemas"

export const monitoringRoutes = new Elysia({ prefix: "/monitoring" })
  .get("/", () => ({ status: "Monitoring module active" })) // Health check
  .derive(async ({ request, set }) => {
    if (request.method === "OPTIONS") {
      return { user: null }
    }

    const session = await auth.api.getSession({ headers: request.headers })

    if (!session?.user) {
      console.log("[Monitoring Auth] No session found")
      set.status = 401
      return { user: null }
    }

    // Fetch the full user from DB to ensure we have the latest role/grade
    const fullUser = await monitoringService.getStudentById(session.user.id)
    
    if (!fullUser) {
      console.log("[Monitoring Auth] User not found in DB")
      set.status = 401
      return { user: null }
    }

    return { user: fullUser }
  })
  /**
   * GET /api/monitoring/students - Get students of the teacher's grade
   */
  .get(
    "/students",
    async ({ user, query, set }) => {
      if (!user) {
        console.log("[Monitoring] No user session found")
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      console.log(`[Monitoring] Request from User: ${user.email}, Role: ${user.role}`)
      
      let students: any[] = []
      const classLabel = query.classLabel
      const search = query.search
      
      if (user.role === "TEACHER") {
        const targetGrade = Number(user.grade)
        console.log(`[Monitoring] Fetching students for grade: ${targetGrade}, classLabel: ${classLabel}, search: ${search}`)
        students = await monitoringService.getStudentsByGrade(targetGrade, classLabel, search)
      } else if (user.role === "PARENT") {
        console.log(`[Monitoring] Fetching children for parent: ${user.email}, search: ${search}`)
        students = await monitoringService.getStudentsByGuardianEmail(user.email, search)
      } else if (user.role === "ADMIN") {
        // Admins can see everyone? Or we can restrict. For now let's just return empty or all.
        students = []
      }

      console.log(`[Monitoring] Found ${students.length} students/children`)
      return students
    },
    {
      detail: {
        tags: ["Monitoring"],
        summary: "List students in my grade",
      },
      query: t.Object({
        classLabel: t.Optional(t.String()),
        search: t.Optional(t.String()),
      }),
      response: {
        200: StudentListResponseSchema,
        401: ErrorResponseSchema,
      },
    }
  )
  /**
   * GET /api/monitoring/students/:id - Get student details
   */
  .get(
    "/students/:id",
    async ({ params, user, set }) => {
      if (!user) {
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      const student = await monitoringService.getStudentById(params.id)
      if (!student) {
        set.status = 404
        return { error: "Student not found", code: "NOT_FOUND" }
      }

      // Authorization Check
      if (user.role === "TEACHER") {
        if (Number(student.grade) !== Number(user.grade)) {
          set.status = 403
          return { error: "Forbidden", code: "FORBIDDEN" }
        }
      } else if (user.role === "PARENT") {
        const parentEmail = user.email?.toLowerCase()
        const studentGuardianEmail = student.guardianEmail?.toLowerCase()
        if (studentGuardianEmail !== parentEmail) {
          set.status = 403
          return { error: "Forbidden", code: "FORBIDDEN" }
        }
      } else if (user.role !== "ADMIN") {
        set.status = 403
        return { error: "Forbidden", code: "FORBIDDEN" }
      }

      return student
    },
    {
      params: t.Object({ id: t.String() }),
      detail: {
        tags: ["Monitoring"],
        summary: "Get student details",
      },
      response: {
        200: StudentResponseSchema,
        401: ErrorResponseSchema,
        403: ErrorResponseSchema,
        404: ErrorResponseSchema,
      },
    }
  )
  /**
   * PATCH /api/monitoring/students/:id - Update student
   */
  .patch(
    "/students/:id",
    async ({ params, body, user, set }) => {
      if (!user || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      const student = await monitoringService.getStudentById(params.id)
      if (!student) {
        set.status = 404
        return { error: "Student not found", code: "NOT_FOUND" }
      }

      if (student.grade !== user.grade && user.role !== "ADMIN") {
        set.status = 403
        return { error: "Forbidden", code: "FORBIDDEN" }
      }

      const updated = await monitoringService.updateStudent(params.id, body)
      return updated
    },
    {
      params: t.Object({ id: t.String() }),
      body: UpdateStudentSchema,
      detail: {
        tags: ["Monitoring"],
        summary: "Update student details",
      },
      response: {
        200: StudentResponseSchema,
        401: ErrorResponseSchema,
        403: ErrorResponseSchema,
        404: ErrorResponseSchema,
      },
    }
  )
  /**
   * DELETE /api/monitoring/students/:id - Delete student
   */
  .delete(
    "/students/:id",
    async ({ params, user, set }) => {
      if (!user || (user.role !== "TEACHER" && user.role !== "ADMIN")) {
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      const student = await monitoringService.getStudentById(params.id)
      if (!student) {
        set.status = 404
        return { error: "Student not found", code: "NOT_FOUND" }
      }

      if (student.grade !== user.grade && user.role !== "ADMIN") {
        set.status = 403
        return { error: "Forbidden", code: "FORBIDDEN" }
      }

      await monitoringService.deleteStudent(params.id)
      return { success: true, message: "Student deleted successfully" }
    },
    {
      params: t.Object({ id: t.String() }),
      detail: {
        tags: ["Monitoring"],
        summary: "Delete student account",
      },
      response: {
        200: SuccessResponseSchema,
        401: ErrorResponseSchema,
        403: ErrorResponseSchema,
        404: ErrorResponseSchema,
      },
    }
  )
  /**
   * GET /api/monitoring/analytics/class-summary - Get class summary analytics (TEACHER only)
   */
  .get(
    "/analytics/class-summary",
    async ({ user, query, set }) => {
      if (!user) {
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      if (user.role !== "TEACHER") {
        set.status = 403
        return { error: "Forbidden", code: "FORBIDDEN" }
      }

      const targetGrade = Number(user.grade)
      const classLabel = query.classLabel
      
      const summary = await monitoringService.getClassSummary(targetGrade, classLabel)
      return summary
    },
    {
      detail: {
        tags: ["Monitoring Analytics"],
        summary: "Get class-wide aggregated analytics",
      },
      query: t.Object({
        classLabel: t.Optional(t.String())
      }),
      response: {
        200: ClassSummaryResponseSchema,
        401: ErrorResponseSchema,
        403: ErrorResponseSchema
      }
    }
  )
  /**
   * GET /api/monitoring/analytics/student/:studentId - Get student detailed analytics (TEACHER & PARENT)
   */
  .get(
    "/analytics/student/:studentId",
    async ({ params, user, set }) => {
      if (!user) {
        set.status = 401
        return { error: "Unauthorized", code: "UNAUTHORIZED" }
      }

      const studentId = params.studentId

      // Retrieve student to check ownership
      const student = await monitoringService.getStudentById(studentId)
      if (!student) {
        set.status = 404
        return { error: "Student not found", code: "NOT_FOUND" }
      }

      // Isolation check
      if (user.role === "TEACHER") {
        if (Number(student.grade) !== Number(user.grade)) {
          set.status = 403
          return { error: "Forbidden", code: "FORBIDDEN" }
        }
      } else if (user.role === "PARENT") {
        const parentEmail = user.email?.toLowerCase()
        const studentGuardianEmail = student.guardianEmail?.toLowerCase()
        if (studentGuardianEmail !== parentEmail) {
          set.status = 403
          return { error: "Forbidden", code: "FORBIDDEN" }
        }
      } else if (user.role !== "ADMIN") {
        set.status = 403
        return { error: "Forbidden", code: "FORBIDDEN" }
      }

      try {
        const analytics = await monitoringService.getStudentAnalytics(studentId)
        return analytics
      } catch (err: any) {
        set.status = 500
        return { error: err.message || "Internal Server Error", code: "INTERNAL_ERROR" }
      }
    },
    {
      params: t.Object({ studentId: t.String() }),
      detail: {
        tags: ["Monitoring Analytics"],
        summary: "Get detailed student-specific analytics and historic charts",
      },
      response: {
        200: StudentAnalyticsResponseSchema,
        401: ErrorResponseSchema,
        403: ErrorResponseSchema,
        404: ErrorResponseSchema
      }
    }
  )
