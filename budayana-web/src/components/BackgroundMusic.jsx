import { useState, useRef, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useMusic } from "../context/MusicContext"

/**
 * Background music component with autoplay policy handling
 * Browsers block autoplay unless: user has interacted OR audio is muted
 * Strategy: Start muted, then unmute on first user interaction
 */
export default function BackgroundMusic() {
  const location = useLocation()
  const audioRef = useRef(null)
  const { isMuted } = useMusic()
  const [hasInteracted, setHasInteracted] = useState(false)

  // Determine if music should pause based on current route
  const pathParts = location.pathname.split('/').filter(Boolean)
  let shouldPause = false

  if (pathParts[0] === 'monitoring-guru' || pathParts[0] === 'monitoring-ortu') {
    // Pause music when teachers/parents enter their dashboard portals
    shouldPause = true
  } else if (pathParts[0] === 'islands') {
    if (pathParts[2] === 'story') {
      // /islands/:islandSlug/story/... (reading, pre-test, post-test, game)
      shouldPause = true
    } else if (pathParts[2] === 'quiz' && pathParts.length > 3) {
      // /islands/:islandSlug/quiz/:topicId/:levelId (gameplay)
      shouldPause = true
    }
  }

  useEffect(() => {
    const audioNode = audioRef.current;
    if (!audioNode) return

    if (shouldPause) {
      audioNode.pause()
    } else {
      audioNode.volume = 0.3
      // Set muted state based on global setting and interaction
      audioNode.muted = isMuted || !hasInteracted
      
      // Try to play (may fail due to autoplay policy if no interaction yet)
      const playPromise = audioNode.play()
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          console.log("Autoplay blocked, waiting for user interaction")
        })
      }
    }
  }, [shouldPause, location.pathname, isMuted, hasInteracted])

  useEffect(() => {
    const audioNode = audioRef.current;
    if (!audioNode) return

    // Handle user interaction to enable audio
    const handleInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        audioNode.muted = isMuted
        if (!shouldPause) {
          audioNode.play().catch(() => {})
        }
      }
    }

    // Listen for any user interaction
    if (!hasInteracted) {
      document.addEventListener("click", handleInteraction)
      document.addEventListener("keydown", handleInteraction)
      document.addEventListener("touchstart", handleInteraction)
    }

    return () => {
      document.removeEventListener("click", handleInteraction)
      document.removeEventListener("keydown", handleInteraction)
      document.removeEventListener("touchstart", handleInteraction)
    }
  }, [hasInteracted, shouldPause, isMuted])

  return (
    <audio
      ref={audioRef}
      src='/assets/budayana/music/Into the Wild.mp3'
      loop
      muted={isMuted || !hasInteracted}
      style={{ display: 'none' }}
    />
  )
}
