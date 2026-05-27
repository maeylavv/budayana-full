import { useState, useMemo, useEffect } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./Home.css"
import { Check } from 'lucide-react'
import {
  useAttempts,
  getStoryUnlockStatus,
} from "../hooks/useAttempts"
import { useMyProgress, useIslandCycles } from "../hooks/useProgress"
import { useIsland } from "../hooks/useIslands"
import { islands as staticIslands } from "../data/islands"

// Components
import ToggleMenu from "../components/ToggleMenu"
import MapUI from "../components/MapUI"

// Helper to see if we need special slug handling
function getIslandSlug(name) {
  const lower = name.toLowerCase()
  if (lower === "nusa tenggara") return "nusa-tenggara"
  return lower
}

function ProgressDots({ completed = 0, total = 3 }) {
  return (
    <div className='progress-dots'>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className={`dot ${i < completed ? "dot-active" : "dot-inactive"}`}
        />
      ))}
    </div>
  )
}

// Stage Card Component with navigation
function StageCard({ stage, status, index, onClick, activeAttempt, latestFinishedAttempt }) {
  const isLocked = status === "locked"
  const isCompleted = status === "completed"

  /* Logic for Label and Value */
  const { label, value } = useMemo(() => {
    const lowerTitle = stage.title.toLowerCase()
    
    // Case 1: There is an active cycle in progress
    if (activeAttempt) {
      if (lowerTitle.includes("pre-test")) {
        return {
          label: "Nilai Terakhir",
          value: activeAttempt.preTestScore !== undefined && activeAttempt.preTestScore !== null 
            ? Math.round(activeAttempt.preTestScore) 
            : null
        }
      } else if (lowerTitle.includes("post-test")) {
        return {
          label: "Nilai Terakhir",
          value: activeAttempt.postTestScore !== undefined && activeAttempt.postTestScore !== null 
            ? Math.round(activeAttempt.postTestScore) 
            : null
        }
      } else {
        // Story/Game stage
        const storyStage = activeAttempt.stageAttempts?.find((s) => s.stageType === "STORY")
        let xp = storyStage?.xpGained
        // If they finished stage 2, show XP. If not, show null.
        if (storyStage) {
          return {
            label: "XP Terakhir",
            value: xp !== undefined && xp !== null ? xp : 0
          }
        }
        return { label: null, value: null }
      }
    }

    // Case 2: No active cycle, show scores from the latest finished attempt
    if (latestFinishedAttempt) {
      if (lowerTitle.includes("pre-test")) {
        return {
          label: "Nilai Terakhir",
          value: latestFinishedAttempt.preTestScore !== undefined && latestFinishedAttempt.preTestScore !== null 
            ? Math.round(latestFinishedAttempt.preTestScore) 
            : null
        }
      } else if (lowerTitle.includes("post-test")) {
        return {
          label: "Nilai Terakhir",
          value: latestFinishedAttempt.postTestScore !== undefined && latestFinishedAttempt.postTestScore !== null 
            ? Math.round(latestFinishedAttempt.postTestScore) 
            : null
        }
      } else {
        const storyStage = latestFinishedAttempt.stageAttempts?.find((s) => s.stageType === "STORY")
        let xp = storyStage?.xpGained ?? latestFinishedAttempt.totalXpGained
        if (!xp && (stage.apiStageType === "STATIC" || !stage.apiStageType)) {
          xp = 100
        }
        return {
          label: "XP Terakhir",
          value: xp !== undefined && xp !== null ? xp : 0
        }
      }
    }

    return { label: null, value: null }
  }, [activeAttempt, latestFinishedAttempt, stage])

  return (
    <div
      className={`stage-card ${isLocked ? "locked" : ""} ${isCompleted ? "completed" : ""}`}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={`/assets/budayana/islands/tahap ${(index % 3) + 1}.png`}
        className='stage-bg'
        alt={stage.title}
      />

      <div className='stage-content'>
        <p className='stage-title'>{stage.title}</p>
        <div className={`stage-order tahap-${index + 1}`}>
          Tahap {index + 1}
        </div>
        {isCompleted && (
          <div className='stage-check'>
            <Check size={18} strokeWidth={3} color='#ffffff' />
          </div>
        )}
        {status === "resume" && (
          <button className='resume-btn'>Lanjutkan</button>
        )}
      </div>
      {value !== null && label && (
        <div className='stage-score-badge'>
          {label}: {value}
        </div>
      )}

      {isLocked && (
        <div className='stage-lock-overlay'>
          <img
            src='/assets/budayana/islands/padlock.png'
            className='stage-lock-icon'
            alt='locked'
          />
        </div>
      )}
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeIsland, setActiveIsland] = useState(null)
  const [lockedIslandWarning, setLockedIslandWarning] = useState(null)

  // Fetch user's progress from API
  const { data: progressData, isLoading: isProgressLoading } = useMyProgress()

  // Use API progress data merged with static config
  const allIslands = useMemo(() => {
    // Create a map of progress items for easier lookup
    const progressMap = new Map()
    if (progressData && progressData.items) {
      progressData.items.forEach((item) => {
        if (item.island && item.island.islandName) {
          const slug = getIslandSlug(item.island.islandName)
          progressMap.set(slug, item)
        }
      })
    }

    // First map the staticIslands with their isCompleted status from progressData
    const mappedIslands = staticIslands.map((staticIsland) => {
      const progressItem = progressMap.get(staticIsland.slug)
      return {
        ...staticIsland,
        isCompleted: progressItem ? progressItem.isCompleted : false,
        apiIslandId: progressItem ? progressItem.islandId : null,
      }
    })

    // Sort by unlockOrder to compute isUnlocked sequentially
    const sortedIslands = [...mappedIslands].sort((a, b) => a.unlockOrder - b.unlockOrder)

    // Compute isUnlocked dynamically based on previous island completion
    const processedIslands = sortedIslands.map((island, idx) => {
      let isUnlocked = false
      if (island.unlockOrder === 1) {
        // First island (Sumatra) is unlocked by default
        isUnlocked = true
      } else {
        const prevIsland = sortedIslands[idx - 1]
        isUnlocked = prevIsland ? prevIsland.isCompleted : false
      }

      return {
        ...island,
        isUnlocked,
      }
    })

    // Map back to original staticIslands order to maintain MapUI layout positions
    return staticIslands.map((staticIsland) => {
      return processedIslands.find((i) => i.id === staticIsland.id) || {
        ...staticIsland,
        isUnlocked: false,
        isCompleted: false,
        apiIslandId: null,
      }
    })
  }, [progressData])

  // Auto-open island popup from URL param (only on initial load)
  useEffect(() => {
    const islandParam = searchParams.get("island")
    if (islandParam && allIslands.length > 0 && !activeIsland) {
      const matchedIsland = allIslands.find(
        (i) => i.slug === islandParam || i.id === islandParam
      )
      if (matchedIsland) {
        // Use setTimeout to avoid synchronous setState in effect warning
        setTimeout(() => setActiveIsland(matchedIsland), 0)
      }
    }
    // Only run when allIslands changes (i.e., on initial data load)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allIslands])

  // Handle island popup open/close with URL sync
  const handleOpenIsland = (island) => {
    if (!island.isUnlocked) {
      // Find the previous island in the sorted sequence
      const sorted = [...allIslands].sort((a, b) => a.unlockOrder - b.unlockOrder)
      const clickedIdx = sorted.findIndex((i) => i.id === island.id)
      const prevIsland = clickedIdx > 0 ? sorted[clickedIdx - 1] : null
      
      if (prevIsland) {
        setLockedIslandWarning(prevIsland.name)
      }
      return
    }
    setActiveIsland(island)
    setSearchParams({ island: island.slug }, { replace: true })
  }

  const handleCloseIsland = () => {
    setActiveIsland(null)
    setSearchParams({}, { replace: true })
  }

  // attempts and completed stages logic moved to IslandPopup

  const goToProfile = () => navigate("/profile")

  // const handleStageClick = (stage, status) => {
  //   if (status === "locked") return
  //   navigate(stage.route)
  // }

  return (
    <div className='page home-page'>
      {/* HEADER */}
      <div className='header'>
        <div style={{ zIndex: 10 }}>
          <ToggleMenu />
        </div>

        <div className='gameName'>
          <img src='/assets/budayana/islands/Game Name.png' alt='Budayana' />
        </div>

        <div className='profile' onClick={goToProfile}>
          <img src='/assets/budayana/islands/Profile.png' alt='Profil' />
        </div>
      </div>

      {/* Loading indicator */}
      {isProgressLoading && (
        <div
          style={{
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 100,
          }}
        >
          <span
            style={{
              color: "#fff",
              background: "rgba(0,0,0,0.5)",
              padding: "8px 16px",
              borderRadius: "8px",
            }}
          >
            Memuat progress...
          </span>
        </div>
      )}

      {/* MAP ISLANDS */}
      <MapUI allIslands={allIslands} onIslandClick={handleOpenIsland} />

      {/* POPUP */}
      {activeIsland && (
        <IslandPopup activeIsland={activeIsland} onClose={handleCloseIsland} />
      )}

      {/* LOCKED ISLAND WARNING POPUP */}
      {lockedIslandWarning && (
        <div className='popup-overlay' style={{ zIndex: 2000 }}>
          <div className='popup popup-locked' style={{ position: 'relative', border: '3px solid #955c2e', backgroundColor: '#fff4d6', padding: '40px', borderRadius: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '420px', maxWidth: '90vw' }}>
            <button className='popup-close' onClick={() => setLockedIslandWarning(null)} style={{ position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'transparent' }}>
              <img 
                src='/assets/budayana/islands/close button.png' 
                alt='close' 
                style={{ width: '40px', height: '40px' }} 
              />
            </button>
            <div className='lockedpopup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <img
                src='/assets/budayana/islands/bocah.png'
                className='notif-kid'
                alt='Explorer'
                style={{ width: '130px', height: 'auto', marginBottom: '10px' }}
              />
              <p className='locked-msg' style={{ color: '#5c3a1e', textAlign: 'center', fontSize: '18px', margin: '15px 0', lineHeight: '1.5', fontFamily: "'Fredoka One', sans-serif" }}>
                Mohon selesaikan semua tahapan di {lockedIslandWarning} terlebih dahulu!
              </p>
              <button className='ok-btn' onClick={() => setLockedIslandWarning(null)}>
                Oke!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function IslandPopup({ activeIsland, onClose }) {
  const navigate = useNavigate()
  // Fetch dynamic island details including stories
  const { data: islandDetails, isLoading: isIslandLoading } = useIsland(
    activeIsland.slug
  )

  // Fetch attempts for this island
  // Use API ID from progress if available, otherwise from island details
  const { data: attempts } = useAttempts(
    activeIsland.apiIslandId || islandDetails?.id
  )

  // Fetch cycle count for this island
  const { data: _cyclesData } = useIslandCycles(activeIsland.apiIslandId)

  const [lockedStageWarning, setLockedStageWarning] = useState(null)
  const [completedStageWarning, setCompletedStageWarning] = useState(false)

  const handleStageClick = (stage, status, index) => {
    if (status === "locked") {
      if (index === 1) {
        setLockedStageWarning(1)
      } else if (index === 2) {
        const hasFinishedPreTest = activeAttempt?.preTestScore !== null
        if (!hasFinishedPreTest) {
          setLockedStageWarning(1)
        } else {
          setLockedStageWarning(2)
        }
      }
      return
    }

    if (status === "completed") {
      setCompletedStageWarning(true)
      return
    }

    let finalRoute = stage.route

    // If resuming, try to find last read page from localStorage
    if (status === "resume") {
      try {
        const storageKey = `budayana_story_${stage.id}_pagesRead`
        const savedPages = localStorage.getItem(storageKey)

        if (savedPages) {
          const pages = JSON.parse(savedPages)
          if (Array.isArray(pages) && pages.length > 0) {
            const lastPage = Math.max(...pages)
            finalRoute = `${finalRoute}?page=${lastPage}`
          }
        }
      } catch (e) {
        console.warn("Failed to retrieve resume position", e)
      }
    }

    navigate(finalRoute)
  }

  // Helper to map API stories to stage cards
  const getDynamicStages = (stories, islandSlug) => {
    if (!stories) return []

    return stories.map((story, index) => {
      // Determine route based on story type or title keyword
      let route = ""
      const lowerTitle = story.title.toLowerCase()

      if (lowerTitle.includes("pre-test")) {
        route = `/islands/${islandSlug}/story/${story.id}/pre-test`
      } else if (lowerTitle.includes("post-test")) {
        route = `/islands/${islandSlug}/story/${story.id}/post-test`
      } else {
        // Use storyType from API to determine route
        // STATIC stories use flipbook, INTERACTIVE stories use game page
        if (story.storyType === "STATIC") {
          route = `/islands/${islandSlug}/story/${story.id}`
        } else {
          route = `/islands/${islandSlug}/story/${story.id}/game`
        }
      }

      return {
        id: story.id,
        key: story.id,
        title: story.title,
        route: route,
        apiStageType: story.storyType,
        order: story.order || index + 1,
      }
    })
  }

  const stages = useMemo(() => {
    if (!islandDetails?.stories) return []
    return getDynamicStages(
      islandDetails.stories,
      activeIsland.slug || activeIsland.id
    ).sort((a, b) => a.order - b.order)
  }, [islandDetails, activeIsland])

  // Identify main story and active cycle attempt
  const mainStoryId = useMemo(() => {
    if (!stages || stages.length === 0 || !activeIsland?.storyTitle) return null
    const mainStage = stages.find(
      (s) => s.title.toLowerCase() === activeIsland.storyTitle.toLowerCase()
    )
    return mainStage?.id
  }, [stages, activeIsland])

  const activeAttempt = useMemo(() => {
    if (!mainStoryId || !attempts?.items) return null
    return attempts.items.find(
      (a) => (a.storyId === mainStoryId || a.story?.id === mainStoryId) && !a.finishedAt
    )
  }, [attempts, mainStoryId])

  const latestFinishedAttempt = useMemo(() => {
    if (!mainStoryId || !attempts?.items) return null
    const finished = attempts.items.filter(
      (a) => (a.storyId === mainStoryId || a.story?.id === mainStoryId) && a.finishedAt
    )
    if (finished.length === 0) return null
    return finished.sort(
      (a, b) => new Date(b.finishedAt) - new Date(a.finishedAt)
    )[0]
  }, [attempts, mainStoryId])

  // Get status of each stage in current active cycle
  const getStageStatus = (stage, index) => {
    if (!activeAttempt) {
      if (index === 0) return "unlocked"
      return "locked"
    }

    if (index === 0) {
      if (activeAttempt.preTestScore !== null) return "completed"
      return "unlocked"
    }

    if (index === 1) {
      if (activeAttempt.preTestScore === null) return "locked"
      const hasFinishedStory = activeAttempt.stageAttempts?.some((s) => s.stageType === "STORY")
      if (hasFinishedStory) return "completed"
      return "unlocked"
    }

    if (index === 2) {
      const hasFinishedStory = activeAttempt.stageAttempts?.some((s) => s.stageType === "STORY")
      if (!hasFinishedStory) return "locked"
      return "unlocked"
    }

    return "locked"
  }

  // Count unlocked stages for progress dots (shows how far user has reached)
  const completedCount = useMemo(() => {
    if (!activeAttempt) return 1
    if (activeAttempt.preTestScore !== null) {
      const hasFinishedStory = activeAttempt.stageAttempts?.some((s) => s.stageType === "STORY")
      if (hasFinishedStory) return 3
      return 2
    }
    return 1
  }, [activeAttempt])

  // Calculate total finished attempts for this island's main story
  const totalFinishedAttempts = useMemo(() => {
    if (!attempts?.items || !mainStoryId) return 0
    return attempts.items.filter(
      (a) => (a.storyId === mainStoryId || a.story?.id === mainStoryId) && a.finishedAt
    ).length
  }, [attempts, mainStoryId])

  const isLoading = isIslandLoading

  return (
    <div className='popup-overlay' onClick={onClose}>
      <div
        className={`popup ${activeIsland.isUnlocked ? "popup-unlocked" : "popup-locked"
          }`}
        onClick={(e) => e.stopPropagation()}
      >
        {activeIsland.isUnlocked ? (
          <div className='unlockedpopup'>
            {/* Close button */}
            <button className='popup-close' onClick={onClose}>
              <img
                src='/assets/budayana/islands/close button.png'
                className='close-button'
                alt='close'
              />
            </button>

            {/* Cycle Count */}
            <div className='popup-cycle-count'>
              Percobaan : {totalFinishedAttempts}
            </div>

            {/* Title */}
            <h2 className='popup-title'>{activeIsland.name}</h2>
            <ProgressDots
              completed={completedCount}
              total={stages.length || 3}
            />

            {/* Loading state */}
            {isLoading && <div className='loading-text'>Memuat cerita...</div>}

            {/* Stage Grid */}
            {!isLoading && (
              <div className='stage-grid'>
                {stages.map((stage, index) => {
                  const status = getStageStatus(stage, index)
                  return (
                    <StageCard
                      key={stage.key}
                      stage={stage}
                      status={status}
                      index={index}
                      activeAttempt={activeAttempt}
                      latestFinishedAttempt={latestFinishedAttempt}
                      onClick={() => handleStageClick(stage, status, index)}
                    />
                  )
                })}
              </div>
            )}

            {/* LOCKED STAGE WARNING POPUP */}
            {lockedStageWarning && (
              <div className='popup-overlay' style={{ zIndex: 1000 }}>
                <div className='popup popup-locked' style={{ position: 'relative', border: '3px solid #955c2e', backgroundColor: '#fff4d6', padding: '40px', borderRadius: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '420px', maxWidth: '90vw' }}>
                  <button className='popup-close' onClick={() => setLockedStageWarning(null)} style={{ position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'transparent' }}>
                    <img 
                      src='/assets/budayana/islands/close button.png' 
                      alt='close' 
                      style={{ width: '40px', height: '40px' }} 
                    />
                  </button>
                  <div className='lockedpopup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                      src='/assets/budayana/islands/bocah flip.png'
                      className='notif-kid'
                      alt='Explorer'
                      style={{ width: '130px', height: 'auto', marginBottom: '10px' }}
                    />
                    <p className='locked-msg' style={{ color: '#5c3a1e', textAlign: 'center', fontSize: '18px', margin: '15px 0', lineHeight: '1.5', fontFamily: "'Fredoka One', sans-serif" }}>
                      Mohon selesaikan Tahap {lockedStageWarning} terlebih dahulu!
                    </p>
                    <button className='ok-btn' onClick={() => setLockedStageWarning(null)}>
                      Oke!
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* COMPLETED STAGE WARNING POPUP */}
            {completedStageWarning && (
              <div className='popup-overlay' style={{ zIndex: 1000 }}>
                <div className='popup popup-locked' style={{ position: 'relative', border: '3px solid #955c2e', backgroundColor: '#fff4d6', padding: '40px', borderRadius: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '420px', maxWidth: '90vw' }}>
                  <button className='popup-close' onClick={() => setCompletedStageWarning(false)} style={{ position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'transparent' }}>
                    <img 
                      src='/assets/budayana/islands/close button.png' 
                      alt='close' 
                      style={{ width: '40px', height: '40px' }} 
                    />
                  </button>
                  <div className='lockedpopup' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img
                      src='/assets/budayana/islands/bocah.png'
                      className='notif-kid'
                      alt='Explorer'
                      style={{ width: '130px', height: 'auto', marginBottom: '10px' }}
                    />
                    <p className='locked-msg' style={{ color: '#5c3a1e', textAlign: 'center', fontSize: '18px', margin: '15px 0', lineHeight: '1.5', fontFamily: "'Fredoka One', sans-serif" }}>
                      Tahap ini sudah selesai!<br />
                      Waktunya melangkah maju ke<br />
                      tahap selanjutnya.<br />
                      Semangat!
                    </p>
                    <button className='ok-btn' onClick={() => setCompletedStageWarning(false)}>
                      Oke!
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* LOCKED POPUP */
          <div className='lockedpopup'>
            <img
              src='/assets/budayana/islands/bocah flip.png'
              className='notif-kid'
              alt='notif-kid'
            />

            <p className='locked-msg'>
              Maaf, cerita ini masih dalam proses pengembangan. Tunggu ya!
            </p>

            <button className='ok-btn' onClick={onClose}>
              Oke!
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
