import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import "./QuizKulturPage.css"
import ToggleMenu from "../components/ToggleMenu"
import MapUI from "../components/MapUI"
import { islands as staticIslands } from "../data/islands"
import MusicToggleButton from "../components/MusicToggleButton"
import { useQuizResults } from "../hooks/useQuizResults"
import { getJourneyContent } from "../utils/xpJourney"
import { Compass } from "lucide-react"

const getNextLevelInfo = (xp) => {
  if (xp >= 7200) {
    return null;
  }
  if (xp >= 6500) {
    return {
      nextTitle: "Penjelajah Budaya Nusantara",
      xpNeeded: 7200 - xp
    };
  }
  if (xp >= 4500) {
    return {
      nextTitle: "Penjelajah Hebat",
      xpNeeded: 6500 - xp
    };
  }
  if (xp >= 2500) {
    return {
      nextTitle: "Ahli Budaya",
      xpNeeded: 4500 - xp
    };
  }
  if (xp >= 1000) {
    return {
      nextTitle: "Petualang Nusantara",
      xpNeeded: 2500 - xp
    };
  }
  return {
    nextTitle: "Penjelajah Muda",
    xpNeeded: 1000 - xp
  };
};

export default function QuizKulturPage() {
  const navigate = useNavigate()
  const [showWelcome, setShowWelcome] = useState(() => {
    const lastSeen = localStorage.getItem('budayana_quiz_welcome_timestamp');
    if (!lastSeen) return true;
    const daysSince = (Date.now() - parseInt(lastSeen, 10)) / (1000 * 60 * 60 * 24);
    return daysSince > 7;
  });
  const [currentStep, setCurrentStep] = useState(1)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const [lockedIslandWarning, setLockedIslandWarning] = useState(null)

  const { quizStats } = useQuizResults()

  const [showXpJourneyModal, setShowXpJourneyModal] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  const totalXP = quizStats?.totalXpFromQuiz || 0
  const journey = getJourneyContent(totalXP)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Compute lock/unlock and completion status sequentially
  const allIslands = useMemo(() => {
    const explorationMap = new Map()
    const hasAttemptsMap = new Map()
    
    if (quizStats?.islandExploration) {
      quizStats.islandExploration.forEach((exp) => {
        explorationMap.set(exp.islandSlug, exp)
        if (exp.levelsCompleted > 0) {
          hasAttemptsMap.set(exp.islandSlug, true)
        }
      })
    }

    const lockSequence = [
      "sumatra",
      "jawa",
      "bali",
      "kalimantan",
      "sulawesi",
      "maluku",
      "nusa-tenggara",
      "papua"
    ]

    return staticIslands.map((staticIsland) => {
      const idx = lockSequence.indexOf(staticIsland.slug)
      let isUnlocked = false
      
      if (idx === 0) {
        isUnlocked = true
      } else {
        const hasAttempts = hasAttemptsMap.get(staticIsland.slug) || false
        const prevSlug = lockSequence[idx - 1]
        const prevExp = explorationMap.get(prevSlug)
        const prevCompleted = prevExp ? prevExp.isFullyCompleted : false

        isUnlocked = hasAttempts || prevCompleted
      }

      const exp = explorationMap.get(staticIsland.slug)
      const isCompleted = exp ? exp.isFullyCompleted : false

      return {
        ...staticIsland,
        isCompleted,
        isUnlocked,
      }
    })
  }, [quizStats])

  const orderedIslands = useMemo(() => {
    const orderedIslandIds = [
      "sulawesi",
      "sumatra",
      "jawa",
      "papua",
      "kalimantan",
      "maluku",
      "bali",
      "nusa-tenggara"
    ]
    return [...allIslands].sort((a, b) => {
      return orderedIslandIds.indexOf(a.id) - orderedIslandIds.indexOf(b.id)
    })
  }, [allIslands])

  const handleOpenIsland = (island) => {
    if (!island.isUnlocked) {
      const sequenceNames = [
        "Sumatra",
        "Jawa",
        "Bali",
        "Kalimantan",
        "Sulawesi",
        "Maluku",
        "Nusa Tenggara",
        "Papua"
      ]
      const currentIdx = sequenceNames.findIndex(name => name.toLowerCase() === island.name.toLowerCase())
      const prevIslandName = currentIdx > 0 ? sequenceNames[currentIdx - 1] : "Sumatra"
      setLockedIslandWarning(prevIslandName)
      return
    }
    navigate(`/islands/${island.slug || island.id}/quiz`)
  }

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowXpJourneyModal(false);
      setIsClosing(false);
    }, 200);
  };

  return (
    <div className='page quiz-page'>
      {/* HEADER */}
      <div className='header'>
        <div className="toggle-wrapper" style={{ zIndex: 10, display: "flex", alignItems: "center", gap: "15px" }}>
          <ToggleMenu />
          <MusicToggleButton />
        </div>

        <div className='gameName'>
          <img src='/assets/budayana/islands/Game Name.png' alt='Budayana' />
        </div>

        <div className="profile-header-group">
          <button 
            className="achievement-preview-btn-top"
            onClick={() => setShowXpJourneyModal(true)}
          >
            <Compass size={18} style={{ color: '#955C2E' }} />
            <div className="achievement-btn-content">
              <span className="achievement-btn-label">Perjalanan Budayaku</span>
              <div className="achievement-btn-progress-bg">
                <div className="achievement-btn-progress-fill" style={{ width: `${Math.min((totalXP / 7200) * 100, 100)}%` }} />
              </div>
            </div>
          </button>

          <div className='profile' onClick={handleProfileClick} title="Buka Profil">
            <div className="homepage-avatar-wrapper">
              <img src='/assets/budayana/islands/Profile.png' alt='Profil' />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE HEADER */}
      <div className="mobile-header">
        <div className="mobile-header-top">
          <MusicToggleButton />
          <img
            src='/assets/budayana/islands/Profile.png'
            alt='Profil'
            className="profile-avatar"
            onClick={handleProfileClick}
          />
        </div>
        <img
          src='/assets/budayana/islands/Game Name.png'
          alt='Budayana'
          className="game-logo"
        />
        <button 
          className="achievement-preview-btn-top"
          onClick={() => setShowXpJourneyModal(true)}
        >
          <Compass size={18} style={{ color: '#955C2E' }} />
          <div className="achievement-btn-content">
            <span className="achievement-btn-label">Perjalanan Budayaku</span>
            <div className="achievement-btn-progress-bg">
              <div className="achievement-btn-progress-fill" style={{ width: `${Math.min((totalXP / 7200) * 100, 100)}%` }} />
            </div>
          </div>
        </button>
        <ToggleMenu />
      </div>

      {/* MAP ISLANDS OR RESPONSIVE CARDS */}
      {windowWidth > 1024 ? (
        <MapUI allIslands={allIslands} onIslandClick={handleOpenIsland} />
      ) : (
        <>
          <MapUI allIslands={allIslands} onIslandClick={handleOpenIsland} showIslands={false} showBackground={windowWidth > 768} />
          <QuizIslandCardsList islands={orderedIslands} onIslandClick={handleOpenIsland} />
        </>
      )}

      {/* WELCOME POPUP */}
      {showWelcome && (
        <div className='popup-overlay' onClick={() => {
          localStorage.setItem('budayana_quiz_welcome_timestamp', Date.now().toString())
          setShowWelcome(false)
        }}>
          <div
            className='quiz-welcome-popup'
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='welcome-title'>
              🗺️ Petualangan Kultur Quiz
            </h2>
            <p className='welcome-subtitle'>
              Jelajahi 8 pulau, 3 topik budaya, 
              <br />
             dan taklukkan tantangan quiz yang menantimu!
            </p>

            <div className='steps-container'>
              {/* Step 1 */}
              <div className={`step-item ${currentStep === 1 ? 'active-step' : ''}`}>
                <div className='step-circle'>1</div>
                <div className='step-label'>Pilih Pulau</div>
              </div>
              {/* Step 2 */}
              <div className={`step-item ${currentStep === 2 ? 'active-step' : ''}`}>
                <div className='step-circle'>2</div>
                <div className='step-label'>Pilih Topik</div>
              </div>
              {/* Step 3 */}
              <div className={`step-item ${currentStep === 3 ? 'active-step' : ''}`}>
                <div className='step-circle'>3</div>
                <div className='step-label'>Pilih Level</div>
              </div>
            </div>

            <button 
              className='quiz-ok-btn' 
              onClick={() => {
                if (currentStep < 3) {
                  setCurrentStep(prev => prev + 1)
                } else {
                  localStorage.setItem('budayana_quiz_welcome_timestamp', Date.now().toString())
                  setShowWelcome(false)
                }
              }}
            >
              {currentStep < 3 ? 'Lanjut' : 'Oke!'}
            </button>
          </div>
        </div>
      )}

      {/* Variant 3: Modal Popup (XP Journey Progress) */}
      {showXpJourneyModal && (() => {
        const progress = Math.min((totalXP / 7200) * 100, 100);

        return (
          <div 
            className={`journey-overlay ${isClosing ? 'closing' : ''}`}
            onClick={handleCloseModal}
          >
            <div 
              className="journey-card" 
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="achievement-modal-close-btn" 
                onClick={handleCloseModal}
                title="Tutup"
              >
                ✕
              </button>

              <div className="achievement-modal-trophy" style={{ fontSize: '5rem', display: 'block', marginBottom: '12px' }}>
                {journey.emoji}
              </div>

              <h2 className="achievement-modal-title">
                {journey.title}
              </h2>

              <p className="achievement-modal-desc">
                {journey.subtitle}
              </p>

              {/* Progress Bar */}
              <div className="journey-progress-wrapper">
                <div className="journey-bar">
                  <div 
                    className="journey-fill" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="achievement-progress-text">
                  {totalXP} / 7200 XP
                </p>
              </div>

              {/* Tips List */}
              <div className="achievement-suggestions">
                {journey.tips.map((tip, index) => {
                  const emojiPart = tip.match(/^([^\s]+)/)?.[0] || '';
                  const textPart = tip.replace(/^([^\s]+)\s*/, '');
                  return (
                    <div key={index} className="achievement-suggestion-item">
                      <span>{emojiPart}</span> {textPart}
                    </div>
                  );
                })}
              </div>

              {/* Next Level progress message */}
              {(() => {
                const nextInfo = getNextLevelInfo(totalXP);
                if (!nextInfo) return null;
                return (
                  <p style={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 'bold',
                    fontSize: '0.95rem',
                    color: '#8F5A07',
                    marginBottom: '16px',
                    textAlign: 'center'
                  }}>
                    {nextInfo.xpNeeded} XP lagi untuk naik ke "{nextInfo.nextTitle}"
                  </p>
                );
              })()}

              {/* Action Buttons */}
              <div className="achievement-actions">
                <button 
                  className="achievement-btn-primary" 
                  onClick={handleCloseModal}
                >
                  Lanjut menjelajah
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* LOCKED ISLAND WARNING POPUP */}
      {lockedIslandWarning && (
        <div className='popup-overlay' style={{ zIndex: 2000 }}>
          <div className='popup popup-locked' style={{ position: 'relative', border: '3px solid #955c2e', backgroundColor: '#fff4d6', padding: '40px', borderRadius: '32px', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '420px', maxWidth: '90vw' }}>
            <button className='popup-close' onClick={() => setLockedIslandWarning(null)} style={{ position: 'absolute', top: '15px', right: '15px', border: 'none', background: 'transparent', cursor: 'pointer' }}>
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
              <button className='quiz-ok-btn' onClick={() => setLockedIslandWarning(null)}>
                Oke!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function QuizIslandCardsList({ islands, onIslandClick }) {
  return (
    <div className="quiz-island-cards-container">
      {islands.map((island) => {
        const isLocked = !island.isUnlocked;
        return (
          <div
            key={island.id || island.slug}
            className={`quiz-island-card ${isLocked ? 'locked' : ''}`}
            onClick={() => onIslandClick(island)}
          >
            <div className="quiz-island-card-image-wrapper">
              <img
                src={`/assets/budayana/islands/${island.name}.png`}
                alt={island.name}
                className="quiz-island-card-image"
              />
              {isLocked && (
                <div className="quiz-island-card-lock-overlay">
                  <img
                    src='/assets/budayana/islands/padlock.png'
                    alt='locked'
                    className="quiz-island-card-lock-icon"
                  />
                </div>
              )}
            </div>
            <div className="quiz-island-card-info">
              <h3 className="quiz-island-card-title">{island.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
