
import { useEffect, useState } from "react"
import { X, BookOpen, Puzzle } from "lucide-react"
import { useResults } from "../hooks/useResults"
import { useQuizResults } from "../hooks/useQuizResults"
import { islands } from "../data/islands"
import { islandsApi } from "../lib/api"
import { getJourneyContent } from "../utils/xpJourney"
import InfoIcon from "../components/InfoIcon"
import { PARENT_INFO } from "../components/infoContent/parentInfoContent"
import "./Results.css"

const ISLAND_TEXT_COLORS = {
  "sumatra": "#5e79bfff",          
  "jawa": "#9663b4ff",            
  "kalimantan": "#2fa37bff",      
  "sulawesi": "#bc5d83ff",       
  "papua": "#ab7e02ff",            
  "bali": "#918423ff",           
  "maluku": "#64952cff",           
  "nusa tenggara": "#cc643eff",    
  "nusa-tenggara": "#cc643eff",
}

const getIslandTextColor = (islandName) => {
  if (!islandName) return "#5b4631";
  const key = islandName.toLowerCase().trim();
  return ISLAND_TEXT_COLORS[key] || "#5b4631";
}

const ESSAY_QUESTIONS = {
  "bali": "Menurutmu, mengapa Bawang tidak mendapatkan emas seperti Kesuna?",
  "sumatra": "Apa pesan moral yang bisa di ambil dari kisah Malin Kundang?",
  "nusa tenggara": "Menurutmu, mengapa petani menyembunyikan Watu Maladong?",
  "nusa-tenggara": "Menurutmu, mengapa petani menyembunyikan Watu Maladong?",
  "sulawesi": "Menurutmu, mengapa Nenek Pakande menculik anak-anak yang bermain pada waktu sore hari?",
}

const getEssayQuestion = (islandName) => {
  if (!islandName) return "Apa pesan moral yang bisa di ambil dari cerita tersebut?";
  const key = islandName.toLowerCase().trim();
  return ESSAY_QUESTIONS[key] || "Apa pesan moral yang bisa di ambil dari cerita tersebut?";
}

export default function Results() {
  const { stats, attempts, isLoading } = useResults()
  const { quizStats, attempts: quizAttempts, isLoading: quizLoading } = useQuizResults()
  const journey = getJourneyContent(quizStats?.totalXpFromQuiz || 0)
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
      <div className='flex items-center gap-2 md:gap-2'>
        <div style={{
          display: 'inline-flex',
          backgroundColor: 'FFFBEC',
          padding: '4px',
          borderRadius: '12px',
          border: '2px solid #E8D9C0',
          gap: '4px'
        }}>
          <button
          onClick={() => setActiveTab("ceritaRakyat")}
          className="transition-colors border-none cursor-pointer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '12px',
            backgroundColor: activeTab === "ceritaRakyat" ? '#7b4f2e' : 'transparent',
            color: activeTab === "ceritaRakyat" ? 'white' : '#5C3A1E',
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          <BookOpen size={20} /> Cerita Rakyat
        </button>
        <button
          onClick={() => setActiveTab("quizBudaya")}
          className="transition-colors border-none cursor-pointer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '12px',
            backgroundColor: activeTab === "quizBudaya" ? '#7b4f2e' : 'transparent',
            color: activeTab === "quizBudaya" ? 'white' : '#5C3A1E',
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          <Puzzle size={20} /> Quiz Budaya
          </button>
        </div>
      </div>

      {activeTab === "ceritaRakyat" ? (
        <>
          {/* Statistics Section */}
          <section>
            <h2 className='results-section-title'>Statistik</h2>
            <div className='stats-grid'>
              <div className='stat-card green' style={{ borderRadius: '24px' }}>
                <div className='stat-value'>{stats?.storiesCompleted || 0}</div>
                <div className='stat-label'>Cerita Rakyat Selesai</div>
              </div>
              <div className='stat-card purple' style={{ borderRadius: '24px' }}>
                <div className='stat-value'>{stats?.totalXp || 0}</div>
                <div className='stat-label'>Total XP</div>
              </div>
              <div className='stat-card pink' style={{ borderRadius: '24px' }}>
                <div className='stat-value'>
                  <p>
                    {stats?.averagePreTestScore !== undefined
                      ? Math.round(stats.averagePreTestScore)
                      : "0"}%
                  </p>
                </div>
                <div className='stat-label'>Rata-rata Pre Test</div>
              </div>
              <div className='stat-card orange' style={{ borderRadius: '24px' }}>
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
                        Belum ada riwayat Cerita Rakyat. Ayo mulai petualanganmu! 🗺️
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

                    const isInteractiveStory = ["sumatra", "sulawesi", "bali", "maluku", "nusa tenggara", "nusa-tenggara"].some(
                      i => displayTitle.toLowerCase().includes(i)
                    ) && !isTest
                    const essayLog = attempt.questionLogs?.find(
                      log => log.question?.questionType === "ESSAY" || log.userAnswerText
                    )
                    const hasEssay = isInteractiveStory && (attempt.essayAnswer || essayLog?.userAnswerText)

                    const islandName = attempt.story?.island?.islandName || getIslandName(attempt)
                    const rowColor = getIslandTextColor(islandName)

                    return (
                      <div key={attempt.id} className='history-row' style={{ color: rowColor, fontWeight: '600' }}>
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
                              className='buka-esai-btn'
                              onClick={() => {
                                let rawTitle = attempt.story?.title || "Cerita"
                                if (rawTitle.toLowerCase().startsWith("cerita ")) {
                                  rawTitle = rawTitle.substring(7)
                                }
                                const lowerTitle = rawTitle.toLowerCase();
                                const suffixesToRemove = [
                                  " sumatra",
                                  " sulawesi",
                                  " bali",
                                  " maluku",
                                  " nusa tenggara",
                                  " nusa-tenggara"
                                ];
                                for (const suffix of suffixesToRemove) {
                                  if (lowerTitle.endsWith(suffix)) {
                                    rawTitle = rawTitle.substring(0, rawTitle.length - suffix.length);
                                    break;
                                  }
                                }
                                const essayQuestion = getEssayQuestion(islandName);
                                setSelectedEssay({
                                  title: rawTitle,
                                  text: attempt.essayAnswer || essayLog?.userAnswerText,
                                  question: essayQuestion,
                                })
                              }}
                            >
                              Buka Esai
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
                  <p className='essay-modal-question'>{selectedEssay.question}</p>
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
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
              <h2 className="results-section-title" style={{ fontSize: '1.2rem', color: '#7B4F2E', margin: 0 }}>Statistik Quiz Budaya</h2>
              <InfoIcon {...PARENT_INFO.statistikQuiz} />
            </div>
            <div className='stats-grid'>
              <div className='stat-card green' style={{ borderRadius: '24px' }}>
                <div className='stat-value'>{Math.round(((quizStats?.islandsFullyCompleted ?? 0) / 8) * 100)}%</div>
                <div className='stat-label'>Eksplorasi Budaya</div>
              </div>
              <div className='stat-card purple' style={{ borderRadius: '24px' }}>
                <div className='stat-value'>{quizStats?.totalXpFromQuiz ?? 0}</div>
                <div className='stat-label'>XP Quiz Budaya</div>
              </div>
              <div className='stat-card pink' style={{ borderRadius: '24px', border: '3px solid #d986a1', borderBottom: '6px solid #d986a1', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className='stat-value' style={{ fontSize: '2.5rem', display: 'block', marginBottom: '4px' }}>
                    {journey.emoji}
                  </div>
                  <div className='stat-value' style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {journey.title}
                  </div>
                </div>
                <div className='stat-label' style={{ fontSize: '1.2rem', marginTop: '6px' }}>Peringkat Petualang</div>
              </div>
              <div className='stat-card orange' style={{ borderRadius: '24px' }}>
                <div className='stat-value'>{quizStats?.averageScore ?? 0}%</div>
                <div className='stat-label'>Rata-rata Nilai Quiz</div>
              </div>
            </div>
          </section>

          {/* Quiz History Section */}
          <section>
            <h2 className='results-section-title'>Riwayat Skor Quiz</h2>
            <div className='history-table-container'>
              <div className='history-header quiz-history-grid'>
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
                    .map((attempt) => {
                      const rowColor = getIslandTextColor(attempt.islandName)
                      return (
                        <div
                          key={attempt.id}
                          className='history-row quiz-history-grid'
                          style={{ color: rowColor, fontWeight: '600' }}
                        >
                          <div>{attempt.islandName}</div>
                          <div>{attempt.topicName}</div>
                          <div>{attempt.levelId}</div>
                          <div>{attempt.quizTypeName}</div>
                          <div>{attempt.score}/{attempt.totalQuestions}</div>
                          <div>{formatDuration(attempt.totalTimeSeconds)}</div>
                          <div>{formatDate(attempt.finishedAt)}</div>
                        </div>
                      )
                    })
                )}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}