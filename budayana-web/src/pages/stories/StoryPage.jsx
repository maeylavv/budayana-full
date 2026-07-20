import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react"
import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import { ArrowLeft, ArrowRight, Clock, Sparkles } from "lucide-react"
import { useStory } from "../../hooks/useStories"
import {
  useStartAttempt,
  useAddStage,
  useUpdateAttempt,
} from "../../hooks/useAttempts"
import confetti from "canvas-confetti"
import { useSound } from "../../hooks/useSound"
import "./flipbook.css"

const $ = window.$

const formatTime = (seconds) => {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0")
  const secs = String(seconds % 60).padStart(2, "0")
  return `${mins} : ${secs}`
}

const getIslandDisplayName = (slug) => {
  if (!slug) return ""
  const slugMap = {
    sumatra: "Sumatra",
    jawa: "Jawa",
    bali: "Bali",
    kalimantan: "Kalimantan",
    sulawesi: "Sulawesi",
    maluku: "Maluku",
    nusa_tenggara: "Nusa Tenggara",
    "nusa-tenggara": "Nusa Tenggara",
    papua: "Papua"
  }
  return slugMap[slug.toLowerCase()] || slug.charAt(0).toUpperCase() + slug.slice(1)
}

/**
 * Unified Story Page Component (Flipbook)
 * Dynamically loads story data from API based on storyId
 * Uses turn.js for flipbook effect
 */
export default function StoryPage() {
  const { playClick, playTada } = useSound()
  const { islandSlug, storyId } = useParams()
  const navigate = useNavigate()

  // Use searchParams to track current page (1-indexed in URL)
  const [searchParams, setSearchParams] = useSearchParams({ page: "1" })
  const currentPageFromUrl = Math.max(
    1,
    parseInt(searchParams.get("page") || "1", 10)
  )

  // Helper to update page in search params
  const setCurrentPageUrl = useCallback(
    (page) => {
      setSearchParams({ page: String(page) }, { replace: true })
    },
    [setSearchParams]
  )

  // API Hooks
  const { data: story, isLoading: isStoryLoading } = useStory(storyId)
  const startAttempt = useStartAttempt()
  const addStage = useAddStage()
  const updateAttempt = useUpdateAttempt()

  // Component state
  const [timeElapsed, setTimeElapsed] = useState(0)
  const [timerRunning, setTimerRunning] = useState(true)
  const [xp, setXp] = useState(() => {
    try {
      const savedXp = localStorage.getItem(`budayana_story_${storyId}_xp`)
      return savedXp ? parseFloat(savedXp) : 0
    } catch {
      return 0
    }
  })
  const [showExitWarning, setShowExitWarning] = useState(false)
  const [scale, setScale] = useState(1)
  const [attemptId, setAttemptId] = useState(null)
  const [attemptStartedAt, setAttemptStartedAt] = useState(null)
  const [xpHighlight, setXpHighlight] = useState(false)
  const [pagesReadArray, setPagesReadArray] = useState(() => {
    try {
      const savedPages = localStorage.getItem(`budayana_story_${storyId}_pagesRead`)
      return savedPages ? JSON.parse(savedPages) : [1]
    } catch {
      return [1]
    }
  })
  const [showResults, setShowResults] = useState(false)

  // book ref and sizing
  const bookRef = useRef(null)
  const containerRef = useRef(null)
  const initRef = useRef(false)
  const lastPageRef = useRef(1) // Use ref instead of state to avoid dependency issues

  // Set reference for pages read to prevent stale closures in event bindings
  const readPagesRef = useRef(new Set(pagesReadArray))

  // Update readPagesRef whenever pagesReadArray changes
  useEffect(() => {
    readPagesRef.current = new Set(pagesReadArray)
  }, [pagesReadArray])

  // Get total pages from staticSlides
  const totalPages = story?.staticSlides?.length || 0
  // xpPerPage should calculate xp based on totalPages minus 1 (cover page)
  const xpPerPage = totalPages > 1 ? 100 / (totalPages - 1) : 0

  const clearStorage = () => {
    if (!storyId) return
    try {
      localStorage.removeItem(`budayana_story_${storyId}_xp`)
      localStorage.removeItem(`budayana_story_${storyId}_pagesRead`)
    } catch (e) {
      console.warn("Failed to clear localStorage:", e)
    }
  }

  // Save to localStorage whenever XP or pagesRead changes
  useEffect(() => {
    if (!storyId) return
    try {
      localStorage.setItem(`budayana_story_${storyId}_xp`, xp.toString())
      localStorage.setItem(`budayana_story_${storyId}_pagesRead`, JSON.stringify(pagesReadArray))
    } catch (e) {
      console.warn("Failed to save to localStorage:", e)
    }
  }, [xp, pagesReadArray, storyId])

  // Start Attempt
  const startAttemptRef = useRef(false)

  useEffect(() => {
    if (storyId && !attemptId && story?.storyType === "STATIC" && !startAttemptRef.current) {
      console.log(`[StoryPage] Initiating startAttempt mutate for storyId: ${storyId}`);
      startAttemptRef.current = true
      startAttempt.mutate(storyId, {
        onSuccess: (data) => {
          console.log(`[StoryPage] startAttempt onSuccess resolved. attemptId: ${data.id}, totalTimeSeconds: ${data.totalTimeSeconds}`);
          setAttemptId(data.id)
          setAttemptStartedAt(data.startedAt)

          // Resume timer if existing progress
          if (data.totalTimeSeconds) {
            const savedDuration = data.totalTimeSeconds * 1000
            startTimeRef.current = Date.now() - savedDuration
            setTimeElapsed(data.totalTimeSeconds)
            console.log(`[StoryPage] Resumed timer with saved duration: ${data.totalTimeSeconds} seconds`);
          } else {
            startTimeRef.current = Date.now()
            setTimeElapsed(0)
            console.log(`[StoryPage] Initialized new attempt timer at 0`);
          }
        },
        onError: (err) => {
          console.error("[StoryPage] Failed to start attempt:", err)
          startAttemptRef.current = false // Reset on error so it can retry
        },
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storyId, attemptId, story])

  // Timer Logic
  const startTimeRef = useRef(null)

  useEffect(() => {
    if (!timerRunning || !story || !attemptId) return

    if (!startTimeRef.current) {
      startTimeRef.current = Date.now()
    }

    const calculateElapsed = () => {
      const startTime = startTimeRef.current
      const now = Date.now()
      const elapsedSeconds = Math.floor(
        ((max) => (max > 0 ? max : 0))((now - startTime) / 1000)
      )
      setTimeElapsed(elapsedSeconds)
    }

    calculateElapsed()
    const t = setInterval(calculateElapsed, 1000)
    return () => clearInterval(t)
  }, [timerRunning, story, attemptId])

  // Handle window resize for responsiveness
  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth
      const h = window.innerHeight
      const baseWidth = 1100
      const baseHeight = 700
      const isMobile = w < 768
      const maxWidth = isMobile ? w - 24 : w - 180
      const maxHeight = isMobile ? h - 180 : h - 120
      const scaleX = maxWidth / baseWidth
      const scaleY = maxHeight / baseHeight
      setScale(Math.min(scaleX, scaleY, 1))
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // XP highlight effect timeout
  useEffect(() => {
    if (xpHighlight) {
      const timer = setTimeout(() => setXpHighlight(false), 1000)
      return () => clearTimeout(timer)
    }
  }, [xpHighlight])

  // Initialize turn.js
  useLayoutEffect(() => {
    if (!containerRef.current || !story || !$ || totalPages === 0) return

    const currentBook = bookRef.current

    if (currentBook && !initRef.current) {
      const b = $(currentBook)
      b.turn({
        width: 1100,
        height: 650,
        autoCenter: true,
        gradients: true,
        acceleration: true,
        elevation: 50,
        duration: 600,
        pages: totalPages,
        display: "single", // Single page mode to prevent skipping
        page: currentPageFromUrl, // Set initial page from URL
      })

      b.bind("turned", (event, page) => {
        const lastPage = lastPageRef.current
        lastPageRef.current = page

        // Update URL
        setCurrentPageUrl(page)

        // Only add XP when we haven't read this page yet AND it's a content page (page > 1)
        if (page > 1 && !readPagesRef.current.has(page)) {
          readPagesRef.current.add(page)
          setPagesReadArray(Array.from(readPagesRef.current))
          setXp((prevXp) => Math.min(100, prevXp + xpPerPage))
          setXpHighlight(true)
        }
      })

      initRef.current = true
    }

    return () => {
      if (initRef.current && currentBook && $(currentBook).turn) {
        try {
          $(currentBook).turn("destroy").remove()
        } catch {
          /* ignore */
        }
      }
    }
  }, [
    totalPages,
    story,
    xpPerPage,
    setCurrentPageUrl,
  ])

  useEffect(() => {
    if (showResults) {
      playTada();
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 10000,
        colors: ['#ffaa00', '#23a0ba', '#e05fa3', '#51423c', '#ffefcd']
      });
    }
  }, [showResults]);

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleFinish = async () => {
    playClick()
    setIsSubmitting(true)
    setTimerRunning(false)

    // Ensure XP is exactly 100 for completion
    const xpGained = 100

    if (attemptId) {
      try {
        // Add Stage
        await addStage.mutateAsync({
          attemptId,
          stageData: {
            stageType: "STORY",
            timeSpentSeconds: timeElapsed,
            xpGained: xpGained,
          },
        })

        // Update Attempt (Save progression, do NOT set finishedAt)
        await updateAttempt.mutateAsync({
          attemptId,
          data: {
            totalTimeSeconds: timeElapsed,
          },
        })
      } catch (error) {
        console.error("Failed to save story finish data", error)
      }
    }

    // Clear localStorage when finished
    clearStorage()

    setIsSubmitting(false)
    // Show results instead of navigating immediately
    setShowResults(true)
  }

  // Handle explicit exit (abandon)
  const [isExitSubmitting, setIsExitSubmitting] = useState(false)

  const handleExit = async () => {
    playClick()
    setIsExitSubmitting(true)
    // Clear local storage
    clearStorage()

    if (attemptId) {
      try {
        await updateAttempt.mutateAsync({
          attemptId,
          data: {
            // finishedAt: new Date().toISOString(), // removed to prevent premature finishing
            totalTimeSeconds: timeElapsed,
          },
        })
        // Short delay
        await new Promise(resolve => setTimeout(resolve, 500))
      } catch (error) {
        console.error("Failed to finish attempt on exit:", error)
      }
    }

    // Navigate away
    navigate(`/home?island=${islandSlug}`)
  }

  const renderResults = () => {
    return (
      <div className='w-full max-w-4xl mx-auto px-2 absolute z-50'>
        <div className='bg-white/95 backdrop-blur-md rounded-[40px] shadow-2xl p-6 md:p-10 border-[3px] border-[#2c2c2c] text-center'>
          <div className='bg-[#E4AE28] text-white font-extrabold text-3xl px-12 py-3 rounded-full shadow-lg mb-8 inline-block'>
            Selesai!
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
            <div className='bg-[#FF9ECF] rounded-3xl p-6 border-[3px] border-[#2c2c2c]'>
              <span className='font-bold text-xl'>Waktu</span>
              <div className='text-3xl font-black'>{formatTime(timeElapsed)}</div>
            </div>
            <div className='bg-[#BDEBFF] rounded-3xl p-6 border-[3px] border-[#2c2c2c]'>
              <span className='font-bold text-xl'>Total XP</span>
              <div className='text-3xl font-black'>+100 XP</div>
            </div>
          </div>
          <button
            onClick={() => navigate(`/home?island=${islandSlug}`)}
            className='bg-[#F7885E] text-white font-extrabold text-xl px-12 py-3 rounded-full shadow-lg hover:scale-105 transition border-2 border-[#c7623a]'
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    )
  }

  // Handle loading/error states
  if (isStoryLoading)
    return (
      <div className='min-h-screen bg-gradient-to-br from-[#fef8e7] to-[#f4e4c1] flex items-center justify-center'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-16 w-16 border-4 border-[#E4AE28] border-t-transparent mx-auto mb-4'></div>
          <p className='text-lg font-semibold text-[#2c2c2c]'>
            Memuat cerita...
          </p>
        </div>
      </div>
    )

  if (!story)
    return (
      <div className='min-h-screen bg-gradient-to-br from-[#fef8e7] to-[#f4e4c1] flex items-center justify-center'>
        <div className='text-center p-10'>
          <p className='text-lg font-semibold text-[#2c2c2c]'>
            Story not found
          </p>
        </div>
      </div>
    )

  if (!story.staticSlides || story.staticSlides.length === 0)
    return (
      <div className='min-h-screen bg-gradient-to-br from-[#fef8e7] to-[#f4e4c1] flex items-center justify-center'>
        <div className='text-center p-10'>
          <p className='text-lg font-semibold text-[#2c2c2c]'>
            No story slides available
          </p>
        </div>
      </div>
    )

  return (
    <div
      ref={containerRef}
      className='h-screen w-full flex flex-col items-center justify-center overflow-hidden relative'
      style={{
        background: story.backgroundImage
          ? `linear-gradient(rgba(254, 248, 231, 0.85), rgba(244, 228, 193, 0.85)), url('${story.backgroundImage}')`
          : "linear-gradient(135deg, #fef8e7 0%, #f4e4c1 100%)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {showResults && (
        <div className='absolute inset-0 z-40 bg-black/40 backdrop-blur-sm flex items-center justify-center'>
          {renderResults()}
        </div>
      )}

      {/* Floating arrows (Desktop only) */}
      <div className='hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none z-20'>
        <div className='w-full max-w-[92%] lg:max-w-350 flex justify-between px-2'>
          <button
            onClick={() => { playClick(); $(bookRef.current).turn("previous"); }}
            disabled={currentPageFromUrl === 1}
            className='pointer-events-auto bg-white/90 backdrop-blur-sm text-[#2c2c2c] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all hover:bg-white border-2 border-[#2c2c2c] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100'
          >
            <ArrowLeft size={28} strokeWidth={2.5} />
          </button>
          {currentPageFromUrl >= totalPages ? (
            <button
              onClick={handleFinish}
              disabled={isSubmitting}
              className={`pointer-events-auto bg-linear-to-r from-[#E4AE28] to-[#F7C951] text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-xl hover:scale-105 transition-all font-bold text-lg border-2 border-[#c79620] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
            >
              <Sparkles size={20} />
              {isSubmitting ? "Menyimpan..." : "Selesai"}
            </button>
          ) : (
            <button
              onClick={() => { playClick(); $(bookRef.current).turn("next"); }}
              className='pointer-events-auto bg-white/90 backdrop-blur-sm text-[#2c2c2c] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all hover:bg-white border-2 border-[#2c2c2c]'
            >
              <ArrowRight size={28} strokeWidth={2.5} />
            </button>
          )}
        </div>
      </div>

      {/* Mobile Bottom Navigation (Under the book) */}
      <div className='w-full max-w-[95%] mx-auto px-4 absolute bottom-8 z-30 flex justify-between lg:hidden pointer-events-none'>
        <button
          onClick={() => { playClick(); $(bookRef.current).turn("previous"); }}
          disabled={currentPageFromUrl === 1}
          className='pointer-events-auto bg-white/95 backdrop-blur-sm text-[#2c2c2c] px-6 py-3 rounded-full flex items-center gap-2 shadow-lg border-2 border-[#2c2c2c] disabled:opacity-40 disabled:cursor-not-allowed font-bold text-sm'
        >
          <ArrowLeft size={18} strokeWidth={2.5} />
          Sebelumnya
        </button>

        {currentPageFromUrl >= totalPages ? (
          <button
            onClick={handleFinish}
            disabled={isSubmitting}
            className={`pointer-events-auto bg-gradient-to-r from-[#E4AE28] to-[#F7C951] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-xl font-bold text-sm border-2 border-[#c79620] ${isSubmitting ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            <Sparkles size={16} />
            {isSubmitting ? "Menyimpan..." : "Selesai"}
          </button>
        ) : (
          <button
            onClick={() => { playClick(); $(bookRef.current).turn("next"); }}
            className='pointer-events-auto bg-white/95 backdrop-blur-sm text-[#2c2c2c] px-6 py-3 rounded-full flex items-center gap-2 shadow-lg border-2 border-[#2c2c2c] font-bold text-sm'
          >
            Berikutnya
            <ArrowRight size={18} strokeWidth={2.5} />
          </button>
        )}
      </div>

      {/* Header */}
      <div className='w-full max-w-[95%] md:max-w-[92%] lg:max-w-[1100px] flex items-center justify-between gap-1.5 absolute top-6 z-30 px-2 md:px-4'>
        {/* Keluar Button */}
        <button
          onClick={() => { playClick(); setShowExitWarning(true); }}
          className='w-10 h-10 md:w-auto md:h-12 md:px-5 bg-white/90 backdrop-blur-sm border-2 border-[#2c2c2c] flex items-center justify-center gap-2 rounded-full shadow-md hover:bg-white hover:scale-105 transition-all font-bold shrink-0 text-sm md:text-base'
        >
          <ArrowLeft size={18} />
          <span className='hidden md:inline'>Keluar</span>
        </button>

        {/* Spacing */}
        <div className='flex-1'></div>

        {/* Stats Row */}
        <div className='flex items-center gap-1 sm:gap-2 shrink-0'>
          {/* Page Badge */}
          <div className='h-10 md:h-12 px-3 md:px-5 bg-white/90 backdrop-blur-sm rounded-full border-2 border-[#2c2c2c] shadow-md flex items-center justify-center shrink-0'>
            <span className='text-[#2c2c2c] font-extrabold text-xs sm:text-sm md:text-base'>
              {totalPages > 0 ? currentPageFromUrl - 1 : 0} / {totalPages > 0 ? totalPages - 1 : 0}
            </span>
          </div>

          {/* Timer Badge */}
          <div className='h-10 md:h-12 px-3 md:px-4 bg-white/90 backdrop-blur-sm rounded-full shadow-md border-2 border-[#2c2c2c] flex items-center justify-center gap-1.5 shrink-0'>
            <Clock size={16} className='text-[#2c2c2c] w-4 h-4 md:w-5 md:h-5' />
            <span className='text-[#2c2c2c] font-bold text-xs sm:text-sm md:text-base tracking-wider md:tracking-wide'>
              {formatTime(timeElapsed)}
            </span>
          </div>

          {/* XP Badge */}
          <div
            className={`h-10 md:h-12 px-3 md:px-4 bg-white/90 backdrop-blur-sm rounded-full flex gap-1 items-center justify-center shadow-md border-2 transition-all duration-300 shrink-0 ${xpHighlight
              ? "border-green-500 scale-105 bg-green-50"
              : "border-[#2c2c2c]"
              }`}
          >
            <span className='font-black text-xs sm:text-sm md:text-base' style={{ color: "#E4AE28" }}>
              XP
            </span>
            <span
              className={`font-bold text-xs sm:text-sm md:text-base transition-colors duration-300 ${xpHighlight ? "text-green-600" : "text-[#2c2c2c]"
                }`}
            >
              {Math.round(xp)}/100
            </span>
          </div>
        </div>
      </div>

      {/* Flipbook container */}
      <div
        className='flex items-center justify-center relative origin-center transform-gpu'
        style={{
          transform: `scale(${scale}) translateZ(0)`,
          WebkitTransform: `scale(${scale}) translateZ(0)`,
          width: 1100,
          height: 650,
        }}
      >
        <div id='book' ref={bookRef} className='flipbook shadow-2xl'>
          {story.staticSlides.map((slide, idx) => {
            const isCover = slide.slideType === "COVER"

            return (
              <div
                key={slide.id}
                className={`page ${isCover ? "cover-page" : "story-page"}`}
              >
                {isCover ? (
                  <div className='cover-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#fffef9] to-[#fff9e8] h-full w-full border-[6px] border-[#8b7355]/20 rounded-2xl relative shadow-inner overflow-hidden'>
                    {/* Cover image background */}
                    <img
                      src={slide.imageUrl || story.coverImage || `/assets/budayana/islands/cover book ${islandSlug?.toLowerCase()}.png`}
                      className='cover-image absolute inset-0 w-full h-full object-cover z-0'
                      alt='Cover'
                      decoding='async'
                      loading='eager'
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                    <div className='absolute inset-4 border border-[#8b7355]/10 rounded-lg pointer-events-none z-10'></div>
                    <div className='cover-overlay flex flex-col items-center justify-center text-center z-20 px-4 md:px-8 relative max-w-[700px] mx-auto'>
                      <h1 className='text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-black text-[#4A3836] leading-tight mb-3 tracking-tight drop-shadow-md max-w-[620px] mx-auto'>
                        {story.title.toLowerCase().startsWith("cerita")
                          ? story.title
                          : `Cerita ${story.title}`}
                      </h1>
                      <div className='w-24 h-1 bg-[#8b7355] my-3 rounded-full shadow-xs'></div>
                      <p className='text-lg sm:text-xl md:text-xl lg:text-2xl font-bold text-[#955C2E] uppercase tracking-widest drop-shadow-sm max-w-[500px] mx-auto'>
                        Legenda Rakyat {getIslandDisplayName(islandSlug)}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className='page-inner'>
                    {slide.imageUrl && (
                      <div className='mb-6'>
                        <img
                          src={slide.imageUrl}
                          alt='Story'
                          decoding='async'
                          className='max-h-80 max-w-full object-contain rounded-xl shadow-lg'
                        />
                      </div>
                    )}
                    <div className='text-3xl font-medium leading-relaxed text-justify text-[#2c2c2c] font-serif px-4 whitespace-pre-wrap'>
                      {slide.contentText}
                    </div>
                    <div className='page-number'>{idx}</div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Exit Warning Popup */}
      {showExitWarning && (
        <div className='fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4'>
          <div className='bg-linear-to-br from-[#fff8e7] to-[#ffe8c1] w-[90%] max-w-md rounded-3xl border-4 border-[#e9c499] shadow-2xl p-8 text-center'>
            <img
              src='/assets/budayana/islands/image 90.png'
              alt='warning'
              className='w-32 mx-auto mb-4'
            />
            <p className='text-xl font-bold text-[#2c2c2c] leading-relaxed mb-6'>
              Kamu yakin mau keluar?
            </p>
            <button
              onClick={() => { playClick(); setShowExitWarning(false); }}
              className='w-full bg-linear-to-r from-[#f88c63] to-[#ff6b45] text-white font-bold py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all mb-3 border-2 border-[#c7623a]'
            >
              Lanjutkan Belajar
            </button>
            <button
              onClick={handleExit}
              disabled={isExitSubmitting}
              className={`font-bold hover:underline ${isExitSubmitting ? "text-gray-400" : "text-[#e64c45]"}`}
            >
              {isExitSubmitting ? "Mengakhiri..." : "Akhiri Sesi"}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
