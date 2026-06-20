import "./Sign_Up.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useMutation } from "@tanstack/react-query"
import MessagePopup from "../../components/MessagePopup.jsx"
import { authClient } from "../../lib/auth-client"
import { useInitializeProgress } from "../../hooks/useProgress"
import MusicToggleButton from "../../components/MusicToggleButton.jsx"

export default function SignIn() {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate("/login")
  }
  // POPUP MESSAGE
  const [popupOpen, setPopupOpen] = useState(false)
  const [popupType, setPopupType] = useState("success")
  const [popupMessage, setPopupMessage] = useState("")

  // SHOW PASSWORD
  const [passwordValue, setPasswordValue] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [step, setStep] = useState(1)

  // Form State
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [grade, setGrade] = useState("")
  const [classLabel, setClassLabel] = useState("")
  const [username, setUsername] = useState("")
  const [guardianEmail, setGuardianEmail] = useState("")
  const [gender, setGender] = useState("")
  const [fieldErrors, setFieldErrors] = useState({})

  // Progress initialization hook
  const initializeProgress = useInitializeProgress()

  const registerMutation = useMutation({
    mutationFn: async (formData) => {
      const { data, error } = await authClient.signUp.email({
        email: formData.email,
        password: formData.password,
        name: formData.name,
        username: formData.username,
        grade: formData.grade,
        classLabel: formData.classLabel,
        guardianEmail: formData.guardianEmail,
        gender: formData.gender,
      })

      if (error) {
        throw new Error(error.message || "Pendaftaran gagal, coba lagi ya.")
      }
      return data
    },
    onSuccess: async (data) => {
      try {
        await initializeProgress.mutateAsync()
      } catch (e) {
        console.warn("Progress initialization failed:", e)
      } finally {
        setPopupType("success")
        setPopupMessage("Pendaftaran berhasil! Selamat datang.")
        setPopupOpen(true)
      }
    },
    onError: (error) => {
      setPopupType("error")
      let msg = error.message || "Terjadi kesalahan koneksi ke server."
      const lowerMsg = msg.toLowerCase()
      const errors = {}

      if (lowerMsg.includes("email") && (lowerMsg.includes("already") || lowerMsg.includes("exist") || lowerMsg.includes("use"))) {
        errors.email = "Email ini sudah digunakan. Mohon gunakan email lain."
      } else if (lowerMsg.includes("username") && (lowerMsg.includes("already") || lowerMsg.includes("exist") || lowerMsg.includes("use") || lowerMsg.includes("taken"))) {
        errors.username = "Username sudah digunakan"
      } else {
        setPopupMessage(msg)
        setPopupOpen(true)
      }

      setFieldErrors(errors)
    },
  })

  const handleNextStep1 = () => {
    if (!name || !name.trim()) {
      setPopupType("error")
      setPopupMessage("Nama wajib diisi.")
      setPopupOpen(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const parsedGrade = parseInt(grade, 10);
    if (isNaN(parsedGrade) || parsedGrade < 1 || parsedGrade > 6) {
      setPopupType("error")
      setPopupMessage("Tingkat kelas siswa harus berupa angka antara 1 sampai 6.")
      setPopupOpen(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    if (!classLabel || !classLabel.trim()) {
      setPopupType("error")
      setPopupMessage("Label kelas wajib diisi.")
      setPopupOpen(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    if (!gender) {
      setPopupType("error")
      setPopupMessage("Jenis kelamin wajib dipilih.")
      setPopupOpen(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    setStep(2)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleNextStep2 = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email && email.trim() !== "" && !emailRegex.test(email.trim())) {
      setPopupType("error")
      setPopupMessage("Format email yang Anda masukkan tidak valid.")
      setPopupOpen(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    if (!username || !username.trim()) {
      setPopupType("error")
      setPopupMessage("Username wajib diisi.")
      setPopupOpen(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    if (!passwordValue || passwordValue.length < 6) {
      setPopupType("error")
      setPopupMessage("Password wajib diisi minimal 6 karakter.")
      setPopupOpen(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    setStep(3)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleStepClick = (targetStep) => {
    if (targetStep < step) {
      setStep(targetStep)
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!guardianEmail || !emailRegex.test(guardianEmail.trim())) {
      setPopupType("error")
      setPopupMessage("Email wali yang Anda masukkan tidak valid.")
      setPopupOpen(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const parsedGrade = parseInt(grade, 10);
    let finalEmail = email.trim();
    if (!finalEmail) {
      // Auto-generate dummy email if left blank (for SD students without email)
      finalEmail = `${username.trim().toLowerCase().replace(/\s+/g, '')}@siswa.budayana.local`;
    }

    registerMutation.mutate({
      email: finalEmail,
      name: name,
      grade: parsedGrade,
      classLabel: classLabel.trim(),
      username: username,
      password: passwordValue,
      guardianEmail: guardianEmail.trim(),
      gender: gender,
    })
  }

  return (
    <div className='signin_page'>
      <div className="auth-header-controls">
        <button className='back_button' onClick={() => navigate("/")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Kembali
        </button>
        <MusicToggleButton />
      </div>

      <div className='redirect'>
        <p>Sudah punya akun?</p>

        <div className='redi_button'>
          <button className='to_login' onClick={goToLogin}>
            Masuk Akun
          </button>
        </div>
      </div>

      <div className='header_form' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1 style={{ marginTop: '5px' }}>Selamat datang di</h1>

        <img src='/assets/budayana/islands/Game Name.png' alt='Budayana' style={{ maxWidth: '300px', margin: '5px 0' }} />

        {/* Stepper Progress Circles */}
        <div className="progress-indicator" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', margin: '20px auto 10px auto', fontFamily: "'Fredoka One', sans-serif" }}>
          {/* Step 1 */}
          <div 
            onClick={() => handleStepClick(1)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: step > 1 ? 'pointer' : 'default' }}
          >
            <span style={{
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: step >= 1 ? '#955C2E' : '#FFFFFF',
              border: '2px solid #955C2E',
              color: step >= 1 ? '#FFFFFF' : '#955C2E',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold'
            }}>1</span>
            <span style={{ color: step >= 1 ? '#5C3A1E' : '#967C66', fontWeight: 'bold', fontSize: '0.95rem' }}>Identitas</span>
          </div>
          
          <div style={{ width: '30px', height: '2px', backgroundColor: step >= 2 ? '#955C2E' : '#CCCCCC' }} />
          
          {/* Step 2 */}
          <div 
            onClick={() => handleStepClick(2)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: step > 2 ? 'pointer' : 'default' }}
          >
            <span style={{
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: step >= 2 ? '#955C2E' : '#FFFFFF',
              border: '2px solid',
              borderColor: step >= 2 ? '#955C2E' : '#CCCCCC',
              color: step >= 2 ? '#FFFFFF' : '#888888',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold'
            }}>2</span>
            <span style={{ color: step >= 2 ? '#5C3A1E' : '#888888', fontWeight: 'bold', fontSize: '0.95rem' }}>Akun</span>
          </div>
          
          <div style={{ width: '30px', height: '2px', backgroundColor: step >= 3 ? '#955C2E' : '#CCCCCC' }} />
          
          {/* Step 3 */}
          <div 
            onClick={() => handleStepClick(3)}
            style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: step > 3 ? 'pointer' : 'default' }}
          >
            <span style={{
              width: '32px', height: '32px', borderRadius: '50%',
              backgroundColor: step >= 3 ? '#955C2E' : '#FFFFFF',
              border: '2px solid',
              borderColor: step >= 3 ? '#955C2E' : '#CCCCCC',
              color: step >= 3 ? '#FFFFFF' : '#888888',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 'bold'
            }}>3</span>
            <span style={{ color: step >= 3 ? '#5C3A1E' : '#888888', fontWeight: 'bold', fontSize: '0.95rem' }}>Email wali</span>
          </div>
        </div>
      </div>

      <div className='signin_form'>
        <form onSubmit={handleSubmit}>
          {/* STEP 1: Identitas siswa */}
          {step === 1 && (
            <>
              <div className='field'>
                <label htmlFor='name'>Nama</label>
                <input
                  type='text'
                  id='name'
                  placeholder='Nama kamu'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div style={{ display: 'flex', gap: '16px', width: '100%' }}>
                <div className='field' style={{ flex: 1 }}>
                  <label htmlFor='kelas'>Kelas</label>
                  <input
                    type='number'
                    id='kelas'
                    placeholder='Contoh: 4'
                    required
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </div>
                
                <div className='field' style={{ flex: 1 }}>
                  <label htmlFor='classLabel'>Label kelas</label>
                  <input
                    type='text'
                    id='classLabel'
                    placeholder='Contoh: A'
                    required
                    value={classLabel}
                    onChange={(e) => setClassLabel(e.target.value)}
                  />
                </div>
              </div>

              <div className='field'>
                <label htmlFor='gender'>Jenis kelamin</label>
                <select
                  id='gender'
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  style={{
                    height: '50px',
                    padding: '4px 16px',
                    borderRadius: '10px',
                    fontFamily: "'Fredoka One', sans-serif",
                    color: gender ? '#000000' : '#A8A8A8',
                    fontWeight: '650',
                    fontSize: '1.2rem',
                    border: '1px solid #ccc',
                    width: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: '#ffffff'
                  }}
                >
                  <option value="" disabled>Pilih jenis kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>

              <div className='submit'>
                <button
                  type='button'
                  className='register'
                  onClick={handleNextStep1}
                >
                  Lanjut &rarr;
                </button>
              </div>
            </>
          )}

          {/* STEP 2: Buat akun */}
          {step === 2 && (
            <>
              <div className='field'>
                <label htmlFor='email'>Email <span style={{ fontWeight: 'normal', fontSize: '0.9em', opacity: 0.8 }}>(Opsional)</span></label>
                <input
                  type='email'
                  id='email'
                  placeholder='Email kamu'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (fieldErrors.email) {
                      setFieldErrors(prev => ({ ...prev, email: "" }))
                    }
                  }}
                />
                {fieldErrors.email && (
                  <div style={{ marginTop: '4px' }}>
                    <span className="inline-error">⚠️ {fieldErrors.email}</span>
                  </div>
                )}
              </div>

              <div className='field'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  id='username'
                  placeholder='Username kamu'
                  required
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value)
                    if (fieldErrors.username) {
                      setFieldErrors(prev => ({ ...prev, username: "" }))
                    }
                  }}
                />
                {fieldErrors.username && (
                  <div style={{ marginTop: '4px' }}>
                    <span className="inline-error">⚠️ {fieldErrors.username}</span>
                  </div>
                )}
              </div>

              <div className='field'>
                <label htmlFor='password'>Password</label>
                <div className='password-wrapper'>
                  <input
                    type={showPassword ? "text" : "password"}
                    id='password'
                    placeholder='Password kamu (6+ karakter)'
                    required
                    minLength='6'
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
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
              </div>

              <div className='submit' style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button
                  type='button'
                  onClick={() => { setStep(1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{
                    width: '180px',
                    height: '60px',
                    borderRadius: '30px',
                    border: '3px solid #955C2E',
                    backgroundColor: '#FFFFFF',
                    color: '#955C2E',
                    fontFamily: "'Fredoka One', sans-serif",
                    fontWeight: '600',
                    fontSize: '1.3rem',
                    cursor: 'pointer'
                  }}
                >
                  &larr; Kembali
                </button>
                <button
                  type='button'
                  className='register'
                  onClick={handleNextStep2}
                  style={{ width: '180px' }}
                >
                  Lanjut &rarr;
                </button>
              </div>
            </>
          )}

          {/* STEP 3: Email wali */}
          {step === 3 && (
            <>
              <div className='field'>
                <label htmlFor='guardianEmail'>Email Wali</label>
                <input
                  type='email'
                  id='guardianEmail'
                  placeholder='Email Wali (contoh: emailwali@gmail.com)'
                  required
                  value={guardianEmail}
                  onChange={(e) => setGuardianEmail(e.target.value)}
                />
              </div>

              <div className='submit' style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                <button
                  type='button'
                  onClick={() => { setStep(2); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  style={{
                    width: '180px',
                    height: '60px',
                    borderRadius: '30px',
                    border: '3px solid #955C2E',
                    backgroundColor: '#FFFFFF',
                    color: '#955C2E',
                    fontFamily: "'Fredoka One', sans-serif",
                    fontWeight: '600',
                    fontSize: '1.3rem',
                    cursor: 'pointer'
                  }}
                >
                  &larr; Kembali
                </button>
                <button
                  type='submit'
                  className='register'
                  style={{ width: '180px' }}
                  disabled={registerMutation.isPending}
                >
                  {registerMutation.isPending ? "Loading..." : "Mulai!"}
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      <div className='background'>
        <div className='grass'>
          <img className='rumput' src='/assets/budayana/islands/Rumput.png'></img>
        </div>

        <div className='animals'>
          <div className='animals_group_left'>
            <img
              className='buaya'
              src='/assets/budayana/islands/Buaya.png'
            ></img>
            <img
              className='monyet'
              src='/assets/budayana/islands/Monyet.png'
            ></img>
          </div>

          <div className='animals_group_right'>
            <img
              className='badak'
              src='/assets/budayana/islands/Badak.png'
            ></img>
            <img
              className='harimau'
              src='/assets/budayana/islands/Harimau.png'
            ></img>
          </div>
        </div>
      </div>

      <MessagePopup
        open={popupOpen}
        type={popupType}
        message={popupMessage}
        onClose={() => {
          setPopupOpen(false)
          if (popupType === "success") {
            window.location.href = "/home"
          }
        }}
      />
    </div>
  )
}
