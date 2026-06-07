async function main() {
  const sessionId = "0zhGirDfQ25PXaEfDK542A9ElOJFfVof"
  const attemptId = "cmpdruiri000074ugruhro02p"
  const url = `http://localhost:3000/api/attempts/${attemptId}/logs`
  
  const payload = {
    questionId: "cmq2whx71001s8ougwv2765vo",
    selectedOptionId: "cmq2whx7o001t8ougeapj1smk",
    attemptCount: 1
  }

  console.log(`Sending authenticated POST request with session ID: ${sessionId}...`)

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sessionId}`,
        "Cookie": `better-auth.session_token=${sessionId}`
      },
      body: JSON.stringify(payload)
    })
    
    console.log(`Response Status: ${response.status}`)
    const text = await response.text()
    console.log("Response Text:", text)
  } catch (error) {
    console.error("Request failed:", error)
  }
}

main()
