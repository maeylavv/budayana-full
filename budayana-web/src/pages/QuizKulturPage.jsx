import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./QuizKulturPage.css"
import ToggleMenu from "../components/ToggleMenu"
import MapUI from "../components/MapUI"
import { islands as staticIslands } from "../data/islands"

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

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Use the static islands directly, assuming they are unlocked/open for now
  const allIslands = staticIslands.map((island) => ({
    ...island,
    isUnlocked: true, // We can keep them conceptually unlocked for the quiz
  }))

  // Reorder allIslands based on orderedIslandIds for Tablet/Mobile rendering
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

  const orderedIslands = [...allIslands].sort((a, b) => {
    return orderedIslandIds.indexOf(a.id) - orderedIslandIds.indexOf(b.id)
  })

  const handleOpenIsland = (island) => {
    navigate(`/islands/${island.slug || island.id}/quiz`)
  }

  const goToProfile = () => navigate("/profile")

  return (
    <div className='page quiz-page'>
      {/* HEADER */}
      <div className='header'>
        <div className="toggle-wrapper" style={{ zIndex: 10 }}>
          <ToggleMenu />
        </div>

        <div className='gameName'>
          <img src='/assets/budayana/islands/Game Name.png' alt='Budayana' />
        </div>

        <div className='profile' onClick={goToProfile}>
          <img src='/assets/budayana/islands/Profile.png' alt='Profil' />
        </div>
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
    </div>
  )
}

function QuizIslandCardsList({ islands, onIslandClick }) {
  return (
    <div className="quiz-island-cards-container">
      {islands.map((island) => {
        /*
        ========================
        TEMP TESTING MODE
        RESTORE LOCK AFTER TEST
        ========================
        const isLocked = !island.isUnlocked;
        */
        const isLocked = false;
        return (
          <div
            key={island.id || island.slug}
            className={`quiz-island-card ${isLocked ? 'locked' : ''}`}
            /*
            ========================
            TEMP TESTING MODE
            RESTORE LOCK AFTER TEST
            ========================
            onClick={() => !isLocked && onIslandClick(island)}
            */
            onClick={() => onIslandClick(island)}
          >
            <div className="quiz-island-card-image-wrapper">
              <img
                src={`/assets/budayana/islands/${island.name}.png`}
                alt={island.name}
                className="quiz-island-card-image"
              />
              {/*
              ========================
              TEMP TESTING MODE
              RESTORE LOCK AFTER TEST
              ========================
              isLocked && (
                <div className="quiz-island-card-lock-overlay">
                  <img
                    src='/assets/budayana/islands/padlock.png'
                    alt='locked'
                    className="quiz-island-card-lock-icon"
                  />
                </div>
              )
              */}
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
