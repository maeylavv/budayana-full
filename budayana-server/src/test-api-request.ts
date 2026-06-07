async function main() {
  const attemptId = "cmpdruiri000074ugruhro02p"
  const url = `http://localhost:3000/api/attempts/${attemptId}/logs`
  
  const payload = {
    questionId: "cmq2whx71001s8ougwv2765vo",
    selectedOptionId: "cmq2whx7o001t8ougeapj1smk",
    attemptCount: 1
  }

  console.log(`Sending POST request to ${url}...`)
  console.log("Payload:", payload)

  try {
    const start = Date.now()
    // We don't have auth headers in this script, but wait!
    // The endpoint requires authentication. Let's see if it returns 401, or if we can bypass auth, or see what it returns.
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })
    
    console.log(`Response Status: ${response.status} in ${Date.now() - start}ms`)
    const text = await response.text()
    console.log("Response Text:", text)
  } catch (error) {
    console.error("Request failed:", error)
  }
}

main()
