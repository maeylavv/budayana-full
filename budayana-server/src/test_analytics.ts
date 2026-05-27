import { getStudentAnalytics } from "./routes/monitoring/service"

async function main() {
  const data = await getStudentAnalytics("evvLt1MUgyQEutsjuIjpxvhQo6qAactd")
  console.log("=== ANALYTICS RESPONSE ===")
  console.log(JSON.stringify(data, null, 2))
}

main()
  .catch(console.error)
