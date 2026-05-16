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

        // Redirect based on role
        if (isGuru) navigate("/monitoring-guru/profil");
        else navigate("/monitoring-ortu/profil");
      } else {
        // Signup logic
        const { data, error: authError } = await authClient.signUp.email({
          email: formData.email,
          password: formData.password,
          name: formData.name,
          username: formData.username,
          grade: parseInt(formData.grade) || 0,
          role: isGuru ? "TEACHER" : "PARENT",
          classLabel: "-", // Provide a default value to avoid 'required' errors if any
          guardianEmail: "-", // Provide a default value to avoid 'required' errors if any
        });

        if (authError) throw new Error(authError.message || "Gagal mendaftar");

        if (isGuru) navigate("/monitoring-guru/profil");
        else navigate("/monitoring-ortu/profil");
      }
    } catch (err) {
      setError(err.message);
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

      <div className='signin_form'>
        {error && <p style={{ color: 'red', textAlign: 'center', marginBottom: '10px', fontWeight: 'bold', fontFamily: 'Fredoka One' }}>{error}</p>}
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
