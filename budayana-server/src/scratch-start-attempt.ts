import prisma from "./lib/db"

async function main() {
  const token = "A0Lw1d8jqKoM3Zl4U1e01j4rsQisHojs"
  const storyId = "cmjjkesfl0006vsvh8g4irre9"
  const url = "http://localhost:3000/api/attempts"
  
  const payload = {
    storyId
  }

  console.log(`Sending start attempt POST request with token: ${token}...`)

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
        "Cookie": `better-auth.session_token=${token}`
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
  .catch(console.error)
  .finally(() => prisma.$disconnect())
