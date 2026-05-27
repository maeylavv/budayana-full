import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authClient } from "../../lib/auth-client";
import "../../pages/auth/Sign_Up.css"; // Reuse the sign-up styling

export default function MonitoringLogin({ role }) {
  const navigate = useNavigate();
  const [isLoginMode, setIsLoginMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    grade: "",
    namaAnak: "", // For parent portal
  });

  const isGuru = role === "guru";

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
          try {
            await authClient.signOut();
          } catch (signOutErr) {
            console.error("SignOut during role bypass failed:", signOutErr);
          }
          localStorage.removeItem("ba_token");
          localStorage.removeItem("ba_user_id");
          throw new Error(isGuru ? "Akun ini bukan akun Guru." : "Akun ini bukan akun Orang Tua.");
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
          try {
            await authClient.signOut();
          } catch (signOutErr) {
            console.error("SignOut during role bypass failed:", signOutErr);
          }
          localStorage.removeItem("ba_token");
          localStorage.removeItem("ba_user_id");
          throw new Error(isGuru ? "Akun ini bukan akun Guru." : "Akun ini bukan akun Orang Tua.");
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
        <p style={{ fontFamily: 'Fredoka One', color: '#955C2E', marginTop: '-10px', marginBottom: '20px', fontWeight: 'bold' }}>
          {isLoginMode ? "Masuk ke akunmu yuk!" : "Daftar akunmu dulu yuk!"}
        </p>
      </div>

      <div className='signin_form' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            <label htmlFor='email'>{isGuru ? "Email" : "Email Orang Tua"}</label>
            <input 
              type='text' 
              id='email' 
              placeholder={isLoginMode 
                ? 'emailkamu@gmail.com / username_kamu' 
                : (isGuru ? 'emailkamu@gmail.com' : 'Pastikan email orang tua sama dengan akun anak')} 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>

          <div className='field'>
            <label htmlFor='password'>Password</label>
            <div className='password-wrapper' style={{ position: 'relative' }}>
              <input type={showPassword ? "text" : "password"} id='password' placeholder='Password Kamu (8+ Karakter)' value={formData.password} onChange={handleChange} required />
              {formData.password && (
                <button
                  type='button'
                  className='password-toggle'
                  onClick={() => setShowPassword((v) => !v)}
                  style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' }}
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
    </div>
  );
}
