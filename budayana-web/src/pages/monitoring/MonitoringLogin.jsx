import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { authClient } from "../../lib/auth-client";
import "../../pages/auth/Sign_Up.css"; // Reuse the sign-up styling
import PortalRedirectPopup from "../../components/PortalRedirectPopup";
import MusicToggleButton from "../../components/MusicToggleButton.jsx";

export default function MonitoringLogin({ role }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginMode, setIsLoginMode] = useState(location.state?.isSignup ? false : true);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Monitor active session for role mismatch on mount and clear it immediately
  const { data: session } = authClient.useSession();
  const isGuru = role === "guru";

  // State for portal redirect popup
  const [showRedirectPopup, setShowRedirectPopup] = useState(false);
  const [redirectPopupConfig, setRedirectPopupConfig] = useState({
    message: "",
    targetPath: "",
    targetLabel: ""
  });
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const trigger = sessionStorage.getItem("portal_mismatch_popup_trigger");
    if (trigger === "true") {
      setShowRedirectPopup(true);
    }

    const msg = sessionStorage.getItem("logout_success_message");
    if (msg) {
      setSuccess(msg);
      sessionStorage.removeItem("logout_success_message");
    }
  }, []);


  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    grade: "",
    namaAnak: "", // For parent portal
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (isLoginMode) {
        const isEmail = formData.email.includes("@");
        
        const signInOptions = isEmail 
          ? { email: formData.email, password: formData.password }
          : { username: formData.email, password: formData.password };

        const { data, error: authError } = isEmail
          ? await authClient.signIn.email(signInOptions)
          : await authClient.signIn.username(signInOptions);

        if (authError) throw new Error(authError.message || "Gagal masuk");

        // 1. Temporarily store credentials so the subsequent getSession call works with the new token
        if (data?.session?.token) {
          localStorage.setItem("ba_token", data.session.token);
        }
        if (data?.user?.id) {
          localStorage.setItem("ba_user_id", data.user.id);
        }

        // 2. Retrieve official server-validated session to get real-time role information
        const sessionResponse = await authClient.getSession();
        const sessionUser = sessionResponse?.data?.user;
        const userRole = sessionUser?.role || "STUDENT";
        const isExpectedRole = isGuru ? userRole === "TEACHER" : userRole === "PARENT";

        if (!isExpectedRole) {
          authClient.signOut().catch(() => {});
          localStorage.removeItem("ba_token");
          localStorage.removeItem("ba_user_id");
          
          setLoading(false);
          sessionStorage.setItem("portal_mismatch_popup_trigger", "true");
          window.location.reload();
          return;
        }

        if (userRole === "TEACHER") {
          window.location.href = "/monitoring-guru/profil";
        } else {
          window.location.href = "/monitoring-ortu/profil";
        }
      } else {
        // Signup logic
        const signUpPayload = {
          email: formData.email,
          password: formData.password,
          name: formData.name,
          username: formData.username,
          role: isGuru ? "TEACHER" : "PARENT",
        };

        if (isGuru) {
          const parsedGrade = parseInt(formData.grade, 10);
          if (isNaN(parsedGrade) || parsedGrade < 1 || parsedGrade > 6) {
            throw new Error("Tingkat kelas guru harus berupa angka antara 1 sampai 6.");
          }
          signUpPayload.grade = parsedGrade;
        }

        const { data, error: authError } = await authClient.signUp.email(signUpPayload);

        if (authError) throw new Error(authError.message || "Gagal mendaftar");

        // 1. Temporarily store credentials so the subsequent getSession call works with the new token
        if (data?.session?.token) {
          localStorage.setItem("ba_token", data.session.token);
        }
        if (data?.user?.id) {
          localStorage.setItem("ba_user_id", data.user.id);
        }

        // 2. Retrieve official server-validated session to get real-time role information
        const sessionResponse = await authClient.getSession();
        const sessionUser = sessionResponse?.data?.user;
        const userRole = sessionUser?.role || (isGuru ? "TEACHER" : "PARENT");
        const isExpectedRole = isGuru ? userRole === "TEACHER" : userRole === "PARENT";

        if (!isExpectedRole) {
          authClient.signOut().catch(() => {});
          localStorage.removeItem("ba_token");
          localStorage.removeItem("ba_user_id");
          
          setLoading(false);
          sessionStorage.setItem("portal_mismatch_popup_trigger", "true");
          window.location.reload();
          return;
        }

        if (userRole === "TEACHER") {
          window.location.href = "/monitoring-guru/profil";
        } else {
          window.location.href = "/monitoring-ortu/profil";
        }
      }
    } catch (err) {
      let msg = err.message || "Terjadi kesalahan.";
      if (msg.toLowerCase().includes("credential") || msg.toLowerCase().includes("invalid") || msg.toLowerCase().includes("password") || msg.toLowerCase().includes("username")) {
        msg = "Username, email atau password salah";
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

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
        <p>{isLoginMode ? "Belum punya akun?" : "Sudah punya akun?"}</p>
        <div className='redi_button'>
          <button className='to_login' onClick={() => setIsLoginMode(!isLoginMode)}>
            {isLoginMode ? "Daftar Akun" : "Masuk Akun"}
          </button>
        </div>
      </div>

      <div className='header_form'>
        <h1>Selamat Datang di</h1>
        <img src='/assets/budayana/islands/Game Name.png' alt='Budayana'></img>
        <h2>Dashboard {isGuru ? "Guru" : "Orang Tua"}</h2>
        <p style={{ fontFamily: 'Fredoka One', color: '#955C2E', marginTop: '8px', marginBottom: '20px', fontWeight: 'bold' }}>
          {isLoginMode ? "Masuk ke akunmu yuk!" : "Daftar akunmu dulu yuk!"}
        </p>
      </div>

      <div className='signin_form' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {success && (
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
            <div className="inline-error" style={{ backgroundColor: '#E8F5E9', border: '2px solid #4CAF50', color: '#2E7D32', borderRadius: '10px', padding: '12px 20px', width: '100%', boxSizing: 'border-box', textAlign: 'center', fontWeight: 'bold' }}>
              <span>✅ {success}</span>
            </div>
          </div>
        )}
        {error && (
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '15px' }}>
            <div className="inline-error">
              <span>⚠️ {error}</span>
            </div>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          {!isLoginMode && (
            <div className='field'>
              <label htmlFor='name'>Nama</label>
              <input type='text' id='name' placeholder={isGuru ? 'Nama Kamu' : 'Nama Lengkap'} value={formData.name} onChange={handleChange} required />
            </div>
          )}

          {!isLoginMode && isGuru && (
            <div className='field'>
              <label htmlFor='grade'>Guru Kelas</label>
              <input type='number' id='grade' placeholder='Tingkat kelas yang diajar (contoh : 4)' value={formData.grade} onChange={handleChange} required />
            </div>
          )}

          {!isLoginMode && (
            <div className='field'>
              <label htmlFor='username'>Username</label>
              <input type='text' id='username' placeholder='Username' value={formData.username} onChange={handleChange} required />
            </div>
          )}

          <div className='field'>
            <label htmlFor='email'>{isGuru ? "Email/Username Guru" : "Email/Username Orang Tua"}</label>
            <input 
              type='text' 
              id='email' 
              placeholder={isLoginMode 
                ? 'email@gmail.com / username_kamu' 
                : (isGuru ? 'email@gmail.com' : 'Pastikan email orang tua sama dengan akun anak')} 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className='field'>
            <label htmlFor='password'>Password</label>
            <div className='password-wrapper'>
              <input type={showPassword ? "text" : "password"} id='password' placeholder='Password Kamu (6+ Karakter)' minLength="6" value={formData.password} onChange={handleChange} required />
              {formData.password && (
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

          <div className='submit'>
            <button type='submit' className='register' style={{ backgroundColor: '#955C2E' }} disabled={loading}>
              {loading ? "Memproses..." : (isLoginMode ? "Masuk!" : "Mulai!")}
            </button>
          </div>
        </form>
      </div>

      <div className='background'>
        <div className='grass'>
          <img className='rumput' src='/assets/budayana/islands/Rumput.png' alt='rumput'></img>
        </div>
        <div className='animals'>
          <div className='animals_group_left'>
            <img className='buaya' src='/assets/budayana/islands/Buaya.png' alt='buaya'></img>
            <img className='monyet' src='/assets/budayana/islands/Monyet.png' alt='monyet'></img>
          </div>
          <div className='animals_group_right'>
            <img className='badak' src='/assets/budayana/islands/Badak.png' alt='badak'></img>
            <img className='harimau' src='/assets/budayana/islands/Harimau.png' alt='harimau'></img>
          </div>
        </div>
      </div>

      <PortalRedirectPopup
        open={showRedirectPopup}
        currentPortal={isGuru ? "teacher" : "parent"}
        onClose={() => {
          sessionStorage.removeItem("portal_mismatch_popup_trigger");
          setShowRedirectPopup(false);
        }}
      />
    </div>
  );
}
