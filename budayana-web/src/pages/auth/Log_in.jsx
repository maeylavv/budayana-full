import "./Log_in.css"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useMutation } from "@tanstack/react-query"
import { authClient } from "../../lib/auth-client"
import CookieBlockedPopup from "../../components/CookieBlockedPopup"

export default function Login() {
  const navigate = useNavigate()

  const goToSignin = () => {
    navigate("/sign-up")
  }

  // SHOW PASSWORD
  const [username, setUsername] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  // State deteksi cookies
  const [showCookiePopup, setShowCookiePopup] = useState(false)
  const [verifyingSession, setVerifyingSession] = useState(false)
  const [loginError, setLoginError] = useState("")

  // Monitor active session for PARENT or TEACHER mismatch and clear it immediately
  const { data: session } = authClient.useSession()

  // Read stored mismatch error and username on mount
  useEffect(() => {
    const storedError = sessionStorage.getItem("student_portal_mismatch_error")
    if (storedError) {
      setLoginError(storedError)
      sessionStorage.removeItem("student_portal_mismatch_error")
    }
    const storedUsername = sessionStorage.getItem("student_portal_mismatch_username")
    if (storedUsername) {
      setUsername(storedUsername)
      sessionStorage.removeItem("student_portal_mismatch_username")
    }
  }, [])

  const handleRoleMismatch = async (role, currentUsername) => {
    let errorMsg = "Akun ini bukan akun Siswa."
    if (role === "PARENT") {
      errorMsg = "Akun ini bukan akun Siswa.\nSilakan masuk melalui portal Orang Tua."
    } else if (role === "TEACHER") {
      errorMsg = "Akun ini bukan akun Siswa.\nSilakan masuk melalui portal Guru."
    }

    // Save to sessionStorage to survive GuestRoute unmount/remount
    sessionStorage.setItem("student_portal_mismatch_error", errorMsg)
    if (currentUsername) {
      sessionStorage.setItem("student_portal_mismatch_username", currentUsername)
    }

    try {
      await authClient.signOut()
    } catch (e) {
      console.error("SignOut during mismatch cleanup failed:", e)
    }
    localStorage.removeItem("ba_token")
    localStorage.removeItem("ba_user_id")
    setVerifyingSession(false)
    setLoginError(errorMsg)
  }

  useEffect(() => {
    if (session?.user) {
      const role = session.user.role || ""
      if (role === "PARENT" || role === "TEACHER") {
        handleRoleMismatch(role, username)
      }
    }
  }, [session])

  const loginMutation = useMutation({
    mutationFn: async ({ username, password }) => {
      const { data, error } = await authClient.signIn.username({
        username,
        password,
      })

      if (error) {
        throw new Error(error.message || "Login failed")
      }

      return data
    },
    onSuccess: async (data, variables) => {
      setVerifyingSession(true)

      // 1. Temporarily store credentials so the subsequent getSession call works with the new token
      if (data?.session?.token) {
        localStorage.setItem("ba_token", data.session.token)
      }
      if (data?.user?.id) {
        localStorage.setItem("ba_user_id", data.user.id)
      }

      try {
        // 2. Retrieve official server-validated session to get real-time role information
        const session = await authClient.getSession()

        if (session?.data?.session) {
          const userRole = session.data.user?.role || "STUDENT"

          // 3. Strict STUDENT-only role validation
          if (userRole !== "STUDENT") {
            await handleRoleMismatch(userRole, variables.username)
            return
          }

          // 4. Successful match, redirect to home
          window.location.href = "/home"
        } else {
          setVerifyingSession(false)
          setTimeout(() => {
            setShowCookiePopup(true)
          }, 100)
        }
      } catch (err) {
        setVerifyingSession(false)
        setTimeout(() => {
          setShowCookiePopup(true)
        }, 100)
      }
    },
    onError: (error) => {
      setVerifyingSession(false)
      let msg = error.message || "Terjadi kesalahan koneksi ke server."
      if (msg.toLowerCase().includes("credential") || msg.toLowerCase().includes("invalid") || msg.toLowerCase().includes("password") || msg.toLowerCase().includes("username")) {
        msg = "Username atau password salah"
      }
      setLoginError(msg)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    loginMutation.mutate({ username, password: passwordValue })
  }

  return (
    <div className='signin_page'>
      <div className='redirect'>
        <p>Belum punya akun?</p>
 
        <div className='redi_button'>
          <button className='to_sign' onClick={goToSignin}>
            Daftar Akun
          </button>
        </div>
      </div>
 
      <div className='header_form'>
        <h1>Selamat Datang di</h1>
        <img src='/assets/budayana/islands/Game Name.png' alt='Budayana' />
        <h2>Masukan akunmu dulu yuk!</h2>
      </div>
 
      <div className='login_form'>
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              placeholder='Username Kamu'
              required
              value={username}
              onChange={(e) => {
                setUsername(e.target.value)
                setLoginError("")
              }}
            />
          </div>
 
          <div className='field'>
            <label htmlFor='password'>Password</label>
            <div className='password-wrapper'>
              <input
                type={showPassword ? "text" : "password"}
                id='password'
                placeholder=' Password Kamu (6+ karakter)'
                required
                minLength='6'
                value={passwordValue}
                onChange={(e) => {
                  setPasswordValue(e.target.value)
                  setLoginError("")
                }}
              />
              {passwordValue && (
                <button
                  type='button'
                  className='password-toggle'
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? "Sembunyikan" : "Lihat"}
                </button>
              )}
            </div>
            {loginError && (
              <div style={{ marginTop: '8px' }}>
                <span className="inline-error" style={{ whiteSpace: 'pre-line' }}>⚠️ {loginError}</span>
              </div>
            )}
          </div>
 
          <div className='submit'>
            <button
              type='submit'
              className='register'
              disabled={loginMutation.isPending || verifyingSession}
            >
              {loginMutation.isPending || verifyingSession
                ? "Memverifikasi..."
                : "Mulai!"}
            </button>
          </div>
        </form>
      </div>

      <div className='background'>
        <div className='grass'>
          <img className='rumput' src='/assets/budayana/islands/Rumput.png' />
        </div>

        <div className='animals'>
          <img className='buaya' src='/assets/budayana/islands/Buaya.png' />
          <img className='monyet' src='/assets/budayana/islands/Monyet.png' />
          <img className='badak' src='/assets/budayana/islands/Badak.png' />
          <img className='harimau' src='/assets/budayana/islands/Harimau.png' />
        </div>
      </div>

      {/* Popup Deteksi Cookies Blocked */}
      <CookieBlockedPopup
  isOpen={showCookiePopup}
  onClose={() => {
    localStorage.removeItem("ba_token")
    localStorage.removeItem("ba_user_id")
    setShowCookiePopup(false)
  }}
  onRetry={() => {
    window.location.reload()
  }}
/>
    </div>
  )
}
