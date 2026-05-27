import { useState, useEffect } from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { authClient } from "../../lib/auth-client"
import CookieBlockedPopup from "../CookieBlockedPopup"

export default function ProtectedRoute({ allowedRoles = ["STUDENT"] }) {
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

  // 1. If not authenticated, redirect to designated portal's login page
  if (!session?.user) {
    localStorage.removeItem("ba_token")
    localStorage.removeItem("ba_user_id")
    
    const path = location.pathname
    if (path.startsWith("/monitoring-guru")) {
      return <Navigate to='/monitoring-login-guru' replace />
    } else if (path.startsWith("/monitoring-ortu")) {
      return <Navigate to='/monitoring-login-ortu' replace />
    }
    return <Navigate to='/login' state={{ from: location }} replace />
  }

  // If session is active but user is not a STUDENT, redirect to their dashboard
  if (session?.user) {
    const role = session.user.role
    if (role && role !== "STUDENT") {
      if (role === "TEACHER") {
        return <Navigate to='/monitoring-guru/profil' replace />
      } else if (role === "PARENT") {
        return <Navigate to='/monitoring-ortu/profil' replace />
      }
    }
  }

  return <Outlet />
}

export function TeacherProtectedRoute() {
  const { data: session, isPending } = authClient.useSession()
  const location = useLocation()
  const hasLocalToken = !!localStorage.getItem("ba_token")

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
    return <Navigate to='/monitoring-login-guru' state={{ from: location }} replace />
  }

  if (session?.user) {
    const role = session.user.role
    if (!role || role !== "TEACHER") {
      if (role === "STUDENT") {
        return <Navigate to='/home' replace />
      } else if (role === "PARENT") {
        return <Navigate to='/monitoring-ortu/profil' replace />
      }
      return <Navigate to='/monitoring-login-guru' replace />
    }
  }

  return <Outlet />
}

export function ParentProtectedRoute() {
  const { data: session, isPending } = authClient.useSession()
  const location = useLocation()
  const hasLocalToken = !!localStorage.getItem("ba_token")

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
    return <Navigate to='/monitoring-login-ortu' state={{ from: location }} replace />
  }

  if (session?.user) {
    const role = session.user.role
    if (!role || role !== "PARENT") {
      if (role === "STUDENT") {
        return <Navigate to='/home' replace />
      } else if (role === "TEACHER") {
        return <Navigate to='/monitoring-guru/profil' replace />
      }
      return <Navigate to='/monitoring-login-ortu' replace />
    }
  }

  return <Outlet />
}

