const storyId = "cmjjkesfl0006vsvh8g4irre9"
const url = `http://localhost:3000/api/stories/${storyId}`

console.log(`Fetching story from API: ${url}`)
try {
  const response = await fetch(url)
  if (!response.ok) {
    console.log(`Failed to fetch story: ${response.status} ${response.statusText}`)
  } else {
    const data = await response.json()
    console.log("Response keys:", Object.keys(data))
    console.log("storyType:", data.storyType)
    console.log("staticSlides count:", data.staticSlides?.length)
    console.log("interactiveSlides count:", data.interactiveSlides?.length)
  }
} catch (error) {
  console.error("Error fetching story:", error)
}
