
import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { useResults } from "../hooks/useResults"
import { useQuizResults } from "../hooks/useQuizResults"
import { islands } from "../data/islands"
import { islandsApi } from "../lib/api"
import "./Results.css"


export default function Results() {
  const { stats, attempts, isLoading } = useResults()
  const { quizStats, attempts: quizAttempts, isLoading: quizLoading } = useQuizResults()
  const [storyIslandMap, setStoryIslandMap] = useState({})
  const [selectedEssay, setSelectedEssay] = useState(null)
  const [activeTab, setActiveTab] = useState("ceritaRakyat")


  // Fetch all islands to build a StoryID -> IslandName map
  useEffect(() => {
    const fetchAllIslands = async () => {
      try {
        const promises = islands.map((island) =>
          islandsApi.getIsland(island.slug).catch(() => null)
        )
        const results = await Promise.all(promises)

        const newMap = {}
        results.forEach((islandData) => {
          if (islandData && islandData.stories) {
            islandData.stories.forEach((story) => {
              newMap[story.id] = islandData.islandName
            })
          }
        })
        setStoryIslandMap(newMap)
      } catch (error) {
        console.error("Failed to fetch island details for mapping", error)
      }
    }

    fetchAllIslands()
  }, [])


  const formatDate = (dateString) => {
    if (!dateString) return "-"
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    return `${day}-${month}-${year}`
  }


  const formatDuration = (seconds) => {
    if (seconds === undefined || seconds === null) return "-"
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${String(mins).padStart(2, "0")} : ${String(secs).padStart(2, "0")}`
  }

  // Helper to get island name
  const getIslandName = (attempt) => {
    const storyId = attempt.storyId || attempt.story?.id
    if (storyId && storyIslandMap[storyId]) {
      return storyIslandMap[storyId]
    }

    if (attempt.story?.islandId) {
      const island = islands.find((i) => i.id === attempt.story.islandId)
      if (island) return island.name
    }

    const title = attempt.story?.title || ""
    const islandByStory = islands.find(
      (i) => i.storyTitle.toLowerCase() === title.toLowerCase()
    )
    if (islandByStory) return islandByStory.name

    const lowerTitle = title.toLowerCase()
    const islandByName = islands.find(i => lowerTitle.includes(i.name.toLowerCase()))
    if (islandByName) return islandByName.name

    return ""
  }


  const getDisplayTitle = (attempt) => {
    let rawTitle = attempt.story?.title || "Unknown Story"
    if (rawTitle.toLowerCase().startsWith("cerita ")) {
      rawTitle = rawTitle.substring(7)
    }
    let islandName = attempt.story?.island?.islandName || getIslandName(attempt)
    return `Cerita ${rawTitle} ${islandName}`
  }


  if (isLoading && activeTab === "ceritaRakyat") {
    return (
      <div className='results-container'>
        <p>Memuat data...</p>
      </div>
    )
  }

  if (quizLoading && activeTab === "quizBudaya") {
    return (
      <div className='results-container'>
        <p>Memuat data Quiz Budaya...</p>
      </div>
    )
  }


  return (
    <div className='results-container'>
      {/* Tabs */}
      <div className='flex items-center gap-2 md:gap-4 mb-4 pb-4 border-b-2 border-[#d3cbb8]'>
        <button
          onClick={() => setActiveTab("ceritaRakyat")}
          className={`px-4 py-1.5 md:px-6 md:py-2 rounded-xl font-bold text-lg md:text-xl transition-colors ${activeTab === "ceritaRakyat" ? "bg-[#955c2e] text-white" : "text-[#955c2e] hover:bg-[#955c2e]/10"}`}
        >
          Cerita Rakyat
        </button>
        <button
          onClick={() => setActiveTab("quizBudaya")}
          className={`px-4 py-1.5 md:px-6 md:py-2 rounded-xl font-bold text-lg md:text-xl transition-colors ${activeTab === "quizBudaya" ? "bg-[#955c2e] text-white" : "text-[#955c2e] hover:bg-[#955c2e]/10"}`}
        >
          Quiz Budaya
        </button>
      </div>

      {activeTab === "ceritaRakyat" ? (
        <>
          {/* Statistics Section */}
          <section>
            <h2 className='results-section-title'>Statistik</h2>
            <div className='stats-grid'>
              <div className='stat-card green'>
                <div className='stat-value'>{stats?.storiesCompleted || 0}</div>
                <div className='stat-label'>Cerita Rakyat Selesai</div>
              </div>
              <div className='stat-card purple'>
                <div className='stat-value'>{stats?.totalXp || 0}</div>
                <div className='stat-label'>Total XP</div>
              </div>
              <div className='stat-card pink'>
                <div className='stat-value'>
                  <p>
                    {stats?.averagePreTestScore !== undefined
                      ? Math.round(stats.averagePreTestScore)
                      : "0"}%
                  </p>
                </div>
                <div className='stat-label'>Rata-rata Pre Test</div>
              </div>
              <div className='stat-card orange'>
                <div className='stat-value'>
                  <p>
                    {stats?.averagePostTestScore !== undefined
                      ? Math.round(stats.averagePostTestScore)
                      : "0"}%
                  </p>
                </div>
                <div className='stat-label'>Rata-rata Post Test</div>
              </div>
            </div>
          </section>

          {/* History Section */}
          <section>
            <h2 className='results-section-title'>Riwayat Skor</h2>
            <div className='history-table-container'>
              <div className='history-header'>
                <div>Tahap</div>
                <div>Pre-test</div>
                <div>Post-test</div>
                <div>XP</div>
                <div>Tanggal</div>
                <div>Waktu</div>
                <div>Esai</div>
              </div>
              <div className='history-body'>
                {(() => {
                  const filteredAttempts = attempts.filter((attempt) => {
                    if (!attempt.finishedAt) return false
                    const title = (attempt.story?.title || "").toLowerCase()
                    if (title.includes("pre-test")) return attempt.preTestScore !== null
                    if (title.includes("post-test")) return attempt.postTestScore !== null
                    return true
                  })

                  if (filteredAttempts.length === 0) {
                    return (
                      <div className='empty-message'>
                        Belum ada riwayat permainan.
                      </div>
                    )
                  }

                  const sortedAttempts = [...filteredAttempts].sort(
                    (a, b) => new Date(b.finishedAt) - new Date(a.finishedAt)
                  )

                  return sortedAttempts.map((attempt) => {
                    const displayTitle = getDisplayTitle(attempt)
                    const isTest =
                      displayTitle.toLowerCase().includes("pre-test") ||
                      displayTitle.toLowerCase().includes("post-test")

                    let displayXp = attempt.totalXpGained || 0
                    if (displayXp === 0 && attempt.stages && attempt.stages.length > 0) {
                      displayXp = attempt.stages.reduce((sum, s) => sum + (s.xpGained || 0), 0)
                    }
                    const isStaticStory = attempt.story?.storyType === "STATIC" || (!attempt.story?.storyType && !isTest)
                    if (displayXp === 0 && isStaticStory) displayXp = 100
                    if (isTest) displayXp = 0

                    let duration = attempt.totalTimeSeconds
                    if (duration === undefined || duration === null) {
                      if (attempt.finishedAt && attempt.startedAt) {
                        duration = (new Date(attempt.finishedAt) - new Date(attempt.startedAt)) / 1000
                      } else {
                        duration = 0
                      }
                    }

                    const isInteractiveStory = ["sumatra", "sulawesi", "bali", "maluku"].some(
                      i => displayTitle.toLowerCase().includes(i)
                    ) && !isTest
                    const essayLog = attempt.questionLogs?.find(
                      log => log.question?.questionType === "ESSAY" || log.userAnswerText
                    )
                    const hasEssay = isInteractiveStory && (attempt.essayAnswer || essayLog?.userAnswerText)

                    return (
                      <div key={attempt.id} className='history-row'>
                        <div>{displayTitle}</div>
                        <div>
                          {attempt.preTestScore !== null
                            ? Math.round(attempt.preTestScore)
                            : "-"}
                        </div>
                        <div>
                          {attempt.postTestScore !== null
                            ? Math.round(attempt.postTestScore)
                            : "-"}
                        </div>
                        <div>{displayXp}</div>
                        <div>{formatDate(attempt.finishedAt)}</div>
                        <div>{formatDuration(duration)}</div>
                        <div>
                          {hasEssay ? (
                            <button
                              className='essay-icon-btn'
                              onClick={() => {
                                let rawTitle = attempt.story?.title || "Cerita"
                                if (rawTitle.toLowerCase().startsWith("cerita ")) {
                                  rawTitle = rawTitle.substring(7)
                                }
                                if (
                                  rawTitle.toLowerCase().endsWith(" sumatra") ||
                                  rawTitle.toLowerCase().endsWith(" sulawesi") ||
                                  rawTitle.toLowerCase().endsWith(" bali") ||
                                  rawTitle.toLowerCase().endsWith(" maluku")
                                ) {
                                  const islandIndex = rawTitle.lastIndexOf(" ")
                                  rawTitle = rawTitle.substring(0, islandIndex)
                                }
                                setSelectedEssay({
                                  title: rawTitle,
                                  text: attempt.essayAnswer || essayLog?.userAnswerText,
                                })
                              }}
                            >
                              <img src="/assets/budayana/islands/open.png" alt="Buka Esai" className="w-6 h-6 object-contain" />
                            </button>
                          ) : ""}
                        </div>
                      </div>
                    )
                  })
                })()}
              </div>
            </div>
          </section>

          {/* Essay Modal */}
          {selectedEssay && (
            <div className='essay-modal-overlay' onClick={() => setSelectedEssay(null)}>
              <div className='essay-modal-container' onClick={(e) => e.stopPropagation()}>
                <div className='essay-modal-header'>
                  <div className='essay-modal-title-wrapper'>
                    <h3 className='essay-modal-title'>{selectedEssay.title}</h3>
                  </div>
                  <button className='essay-modal-close' onClick={() => setSelectedEssay(null)}>
                    <X size={24} color="#ffffff" />
                  </button>
                  <p className='essay-modal-question'>Apa pesan moral yang bisa di ambil dari cerita tersebut?</p>
                </div>
                <div className='essay-modal-body'>
                  <p className='essay-modal-text'>{selectedEssay.text}</p>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* ==================== TAB: QUIZ BUDAYA ==================== */
        <>
          {/* Quiz Statistics Section */}
          <section>
            <h2 className='results-section-title'>Statistik Quiz Budaya</h2>
            <div className='stats-grid'>
              <div className='stat-card green'>
                <div className='stat-value'>{quizStats?.islandsFullyCompleted ?? 0}</div>
                <div className='stat-label'>Eksplorasi Budaya</div>
              </div>
              <div className='stat-card purple'>
                <div className='stat-value'>{quizStats?.totalXpFromQuiz ?? 0}</div>
                <div className='stat-label'>Total XP Quiz</div>
              </div>
              <div className='stat-card pink'>
                <div
                  className='stat-value'
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                  }}
                >
                  <span style={{ fontSize: '2rem', lineHeight: 1 }}>🏆</span>
                  <span
                    style={{
                      fontSize:
                        quizStats?.currentBadge && quizStats.currentBadge !== '-'
                          ? '1.1rem'
                          : '1.6rem',
                      lineHeight: 1.2,
                      fontWeight: 700,
                      textAlign: 'center',
                    }}
                  >
                    {quizStats?.currentBadge || '-'}
                  </span>
                </div>
                <div className='stat-label'>Gelar Saat Ini</div>
              </div>
              <div className='stat-card orange'>
                <div className='stat-value'>{quizStats?.averageScore ?? 0}%</div>
                <div className='stat-label'>Rata-rata Nilai Quiz</div>
              </div>
            </div>
          </section>

          {/* Quiz History Section */}
          <section>
            <h2 className='results-section-title'>Riwayat Skor Quiz</h2>
            <div className='history-table-container'>
              <div
                className='history-header'
                style={{ gridTemplateColumns: '1.3fr 1.3fr 0.8fr 1.2fr 0.8fr 1fr 1fr' }}
              >
                <div>Pulau</div>
                <div>Topik</div>
                <div>Level</div>
                <div>Tipe Kuis</div>
                <div>Skor</div>
                <div>Waktu</div>
                <div>Tanggal</div>
              </div>
              <div className='history-body'>
                {quizAttempts.length === 0 ? (
                  <div className='empty-message'>
                    Belum ada riwayat Quiz Budaya. Ayo mulai petualanganmu! 🗺️
                  </div>
                ) : (
                  [...quizAttempts]
                    .sort(
                      (a, b) =>
                        new Date(b.finishedAt || b.startedAt) -
                        new Date(a.finishedAt || a.startedAt)
                    )
                    .map((attempt) => (
                      <div
                        key={attempt.id}
                        className='history-row'
                        style={{ gridTemplateColumns: '1.3fr 1.3fr 0.8fr 1.2fr 0.8fr 1fr 1fr' }}
                      >
                        <div>{attempt.islandName}</div>
                        <div>{attempt.topicName}</div>
                        <div>{attempt.levelId}</div>
                        <div>{attempt.quizTypeName}</div>
                        <div>{attempt.score}/{attempt.totalQuestions}</div>
                        <div>{formatDuration(attempt.totalTimeSeconds)}</div>
                        <div>{formatDate(attempt.finishedAt)}</div>
                      </div>
                    ))
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}