import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import { authClient } from "../../../lib/auth-client";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

export default function MonitoringGuruProfil() {
  const navigate = useNavigate();
  const { data: session, isPending } = authClient.useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    nama: "",
    kelas: "",
    username: "",
    email: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (session?.user) {
      setFormData({
        nama: session.user.name ?? "",
        kelas: session.user.grade?.toString() ?? "",
        username: session.user.username ?? "",
        email: session.user.email ?? ""
      });
    }
  }, [session]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
     if (isEditing) {
        const parsedGrade = parseInt(formData.kelas, 10);
        if (isNaN(parsedGrade) || parsedGrade < 1 || parsedGrade > 6) {
            alert("Tingkat kelas guru harus berupa angka antara 1 sampai 6.");
            return;
        }
        try {
            await authClient.updateUser({
                name: formData.nama,
                grade: parsedGrade,
                username: formData.username
            });
            setIsEditing(false);
        } catch (err) {
            alert("Gagal memperbarui profil");
        }
     } else {
        setIsEditing(true);
     }
  }

  const handleLogout = async () => {
    await authClient.signOut();
    navigate("/");
  };

  if (isPending) return <div className="flex bg-[#FEF6DF] min-h-screen w-full items-center justify-center">Memuat...</div>;
  if (!session) {
    navigate("/monitoring-login-guru");
    return null;
  }

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <section className="profile-top">
          <div className="profile-avatar-circle" style={{ fontSize: '3rem', borderColor: '#7B4F2E', backgroundColor: '#F2E5D3' }}>
            👩‍🏫
          </div>
          <div className="profile-top-text">
            <h1 className="profile-name" style={{ color: '#7B4F2E', fontWeight: '800' }}>{formData.nama}</h1>
            <div className="profile-grade-badge" style={{ backgroundColor: '#5CDCB3', borderColor: '#4FBA95', color: 'white' }}>
              Guru
            </div>
          </div>
        </section>

        <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', margin: '30px 0' }} />

        <div className="form_profile">
          <section className="profile-form">
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Nama</label>
              <input name="nama" type="text" value={formData.nama} onChange={handleChange} readOnly={!isEditing} style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Guru Kelas</label>
              <input name="kelas" type="text" value={formData.kelas} onChange={handleChange} readOnly={!isEditing} style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Username</label>
              <input name="username" type="text" value={formData.username} onChange={handleChange} readOnly={!isEditing} style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Email</label>
              <input name="email" type="text" value={formData.email} readOnly style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} />
            </div>

            <div className="profile-btn-container">
              <button 
                onClick={handleLogout}
                style={{ backgroundColor: '#c53030', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Keluar
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
