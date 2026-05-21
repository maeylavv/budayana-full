import { useState, useEffect } from "react";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import { authClient } from "../../../lib/auth-client";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

export default function MonitoringOrtuProfil() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUser = async () => {
      try {
        const { data: session } = await authClient.getSession();
        if (session?.user) {
          setUser(session.user);
          setFormData({
            name: session.user.name ?? "",
            username: session.user.username ?? session.user.displayUsername ?? "",
            email: session.user.email ?? ""
          });
        }
      } catch (err) {
        console.error("Gagal mengambil data profil:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    if (isEditing) {
      try {
        await authClient.updateUser({
          name: formData.name,
          username: formData.username
        });
        setIsEditing(false);
      } catch (err) {
        alert("Gagal memperbarui profil: " + (err.message ?? err));
      }
    } else {
      setIsEditing(true);
    }
  };

  if (loading) {
    return <div className="flex bg-[#FEF6DF] min-h-screen w-full items-center justify-center" style={{ fontFamily: "'Fredoka One', sans-serif" }}>Memuat profil...</div>;
  }

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="ortu" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <section className="profile-top">
          <div className="profile-avatar-circle" style={{ borderColor: '#7B4F2E', backgroundColor: '#F2E5D3', overflow: 'hidden' }}>
            <img 
              src="/monitoring/avatar-parent.png" 
              alt="Avatar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              onError={(e) => { e.target.src = "https://api.dicebear.com/7.x/adventurer/svg?seed=Rosidah"; }}
            />
          </div>
          <div className="profile-top-text">
            <h1 className="profile-name" style={{ color: '#7B4F2E', fontWeight: '800' }}>{formData.name}</h1>
            <div className="profile-grade-badge" style={{ backgroundColor: '#be94e3', color: 'white', border: '2px solid #955C2E' }}>
              Orang Tua
            </div>
          </div>
        </section>

        <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', margin: '30px 0' }} />

        <div className="form_profile">
          <section className="profile-form">
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Nama</label>
              <input name="name" type="text" value={formData.name} onChange={handleChange} readOnly={!isEditing} style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff' }} />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Username</label>
              <input name="username" type="text" value={formData.username} onChange={handleChange} readOnly={!isEditing} style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff' }} />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Email</label>
              <input name="email" type="text" value={formData.email} onChange={handleChange} readOnly={!isEditing} style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff' }} />
            </div>

            <div className="profile-btn-container">
              <button style={{ backgroundColor: '#c53030', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Hapus Akun
              </button>
              <button 
                onClick={handleUpdate}
                style={{ backgroundColor: '#955C2E', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                {isEditing ? 'Simpan Data' : 'Ubah Data'}
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
