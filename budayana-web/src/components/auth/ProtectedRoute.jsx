import { useState, useEffect } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { authClient } from "../../lib/auth-client"
import CookieBlockedPopup from "../CookieBlockedPopup"

export default function ProtectedRoute() {
  const { data: session, isPending } = authClient.useSession()
  const location = useLocation()
  const [showCookiePopup, setShowCookiePopup] = useState(false)

  const hasLocalToken = !!localStorage.getItem("ba_token")

  useEffect(() => {
    // Jika ada token lokal tapi sesi pengguna tetap kosong setelah pemuatan,
    // berikan waktu ±2 detik sebelum menampilkan pop-up deteksi cookie.
    if (!isPending && hasLocalToken && !session?.user) {
      const timer = setTimeout(() => {
        setShowCookiePopup(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isPending, hasLocalToken, session])

  if (showCookiePopup) {
    return (
      <>
        <div className='auth-loading'>
          <span>Mendeteksi Sesi...</span>
        </div>
        <CookieBlockedPopup
          isOpen={true}
          onClose={() => {
            localStorage.removeItem("ba_token")
            localStorage.removeItem("ba_user_id")
            setShowCookiePopup(false)
            window.location.href = "/login"
          }}
          onRetry={() => {
            window.location.reload()
          }}
        />
      </>
    )
  }

  if (isPending) {
    return (
      <div className='auth-loading'>
        <span>Loading...</span>
      </div>
    )
  }

  if (!session?.user && !hasLocalToken) {
    localStorage.removeItem("ba_token")
    localStorage.removeItem("ba_user_id")
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  return <Outlet />
}
