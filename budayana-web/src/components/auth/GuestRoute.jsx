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

  // Redirect authenticated STUDENT users to their portal home.
  // We do NOT redirect PARENT or TEACHER roles in GuestRoute, so they can
  // stay on the /login guest page and view the role mismatch error.
  if (session?.user) {
    const userRole = session.user.role || ""
    
    if (userRole === "STUDENT") {
      const from = location.state?.from?.pathname || "/home"
      return <Navigate to={from} replace />
    }
  }

  return <Outlet />
}
