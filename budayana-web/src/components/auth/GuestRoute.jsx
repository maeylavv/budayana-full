import { Navigate, Outlet, useLocation } from "react-router-dom"
import { authClient } from "../../lib/auth-client"

/**
 * GuestRoute - Layout route accessible only without authentication
 * Redirects authenticated users to home or their intended destination
 * Use as a pathless layout route to protect auth pages
 */
export default function GuestRoute() {
  const { data: session, isPending } = authClient.useSession()
  const location = useLocation()

  // Show loading state while checking session
  if (isPending) {
    return (
      <div className='auth-loading'>
        <span>Loading...</span>
      </div>
    )
  }

  // const tempSession = localStorage.getItem("temp_dev_session")

  // Redirect authenticated users to their intended destination or role-based home
  if (session?.user) {
    const role = session.user.role
    if (role === "TEACHER") {
      return <Navigate to='/monitoring-guru/profil' replace />
    } else if (role === "PARENT") {
      return <Navigate to='/monitoring-ortu/profil' replace />
    } else {
      const from = location.state?.from?.pathname || "/home"
      return <Navigate to={from} replace />
    }
  }

  return <Outlet />
}
