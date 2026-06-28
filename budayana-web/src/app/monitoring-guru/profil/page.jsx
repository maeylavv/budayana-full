import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import { authClient } from "../../../lib/auth-client";
import { monitoringApi } from "../../../lib/api";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

function ConfirmationModal({ open, title, message, onCancel, onConfirm, confirmText, cancelText = "Cancel", isDestructive = false }) {
  if (!open) return null;

  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div 
        onClick={onCancel}
        style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(92,53,25,0.35)', backdropFilter: 'blur(2px)' }}
      />
      <div style={{
        position: 'relative',
        backgroundColor: '#FFF5E6',
        border: '3px solid #C8935A',
        borderRadius: '20px',
        width: '450px',
        maxWidth: '92vw',
        padding: '24px',
        boxSizing: 'border-box',
        fontFamily: "'Fredoka One', sans-serif",
        textAlign: 'center',
        boxShadow: '0 10px 25px rgba(123, 79, 46, 0.25)',
        animation: 'scaleIn 200ms ease-out'
      }}>
        <h3 style={{ fontSize: '1.4rem', color: isDestructive ? '#c53030' : '#7B4F2E', margin: '0 0 12px 0', fontWeight: 'bold' }}>
          {title}
        </h3>
        <p style={{ fontSize: '1rem', color: '#5C3A1E', margin: '0 0 24px 0', lineHeight: '1.5' }}>
          {message}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
          <button 
            onClick={onCancel}
            style={{
              backgroundColor: '#A0AEC0',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              padding: '10px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            {cancelText}
          </button>
          <button 
            onClick={onConfirm}
            style={{
              backgroundColor: isDestructive ? '#c53030' : '#955C2E',
              color: 'white',
              border: 'none',
              borderRadius: '999px',
              padding: '10px 24px',
              fontSize: '1rem',
              fontWeight: 'bold',
              cursor: 'pointer',
              transition: 'background-color 0.2s'
            }}
          >
            {confirmText}
          </button>
        </div>
        <style>{`
          @keyframes scaleIn { 
            from { transform: scale(0.95); opacity: 0; } 
            to { transform: scale(1); opacity: 1; } 
          }
        `}</style>
      </div>
    </div>
  );
}

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

  const [errors, setErrors] = useState({ nama: "", kelas: "", username: "" });
  const [success, setSuccess] = useState("");
  const [showEditConfirm, setShowEditConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = { nama: "", kelas: "", username: "" };
    let isValid = true;
    if (!formData.nama.trim()) {
      newErrors.nama = "Nama tidak boleh kosong.";
      isValid = false;
    }
    if (!formData.username.trim()) {
      newErrors.username = "Username tidak boleh kosong.";
      isValid = false;
    }
    const parsedGrade = parseInt(formData.kelas, 10);
    if (isNaN(parsedGrade) || parsedGrade < 1 || parsedGrade > 6) {
      newErrors.kelas = "Kelas harus berupa angka (1-6).";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleUpdate = () => {
    if (isEditing) {
      if (!validate()) return;
      setShowEditConfirm(true);
    } else {
      setIsEditing(true);
      setSuccess("");
      setErrors({ nama: "", kelas: "", username: "" });
    }
  };

  const confirmSave = async () => {
    setShowEditConfirm(false);
    if (!validate()) return;

    const parsedGrade = parseInt(formData.kelas, 10);
    try {
      await authClient.updateUser({
        name: formData.nama,
        grade: parsedGrade,
        username: formData.username
      });
      setIsEditing(false);
      setSuccess("Profil berhasil diperbarui!");
    } catch (err) {
      alert("Gagal memperbarui profil: " + (err.message ?? err));
    }
  };

  const handleLogout = async () => {
    await authClient.signOut();
    navigate("/");
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    setShowDeleteConfirm(false);
    try {
      await monitoringApi.deleteSelf();
      localStorage.removeItem("ba_token");
      localStorage.removeItem("ba_user_id");
      await authClient.signOut();
      sessionStorage.setItem("logout_success_message", "Akun Anda berhasil dihapus.");
      navigate("/monitoring-login-guru");
    } catch (err) {
      alert("Gagal menghapus akun: " + (err.message ?? err));
    }
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
            {success && (
              <div style={{ backgroundColor: '#E8F5E9', border: '2px solid #4CAF50', color: '#2E7D32', padding: '12px 20px', borderRadius: '16px', marginBottom: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✅</span> {success}
              </div>
            )}
            
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Nama</label>
              <input name="nama" type="text" value={formData.nama} onChange={handleChange} readOnly={!isEditing} style={{ border: errors.nama ? '2px solid #c53030' : '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} />
              {errors.nama && <span style={{ color: '#c53030', fontSize: '0.9rem', marginTop: '6px', display: 'block', fontWeight: 'bold' }}>⚠️ {errors.nama}</span>}
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Guru Kelas</label>
              <input name="kelas" type="text" value={formData.kelas} onChange={handleChange} readOnly={!isEditing} style={{ border: errors.kelas ? '2px solid #c53030' : '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} />
              {errors.kelas && <span style={{ color: '#c53030', fontSize: '0.9rem', marginTop: '6px', display: 'block', fontWeight: 'bold' }}>⚠️ {errors.kelas}</span>}
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Username</label>
              <input name="username" type="text" value={formData.username} onChange={handleChange} readOnly={!isEditing} style={{ border: errors.username ? '2px solid #c53030' : '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} />
              {errors.username && <span style={{ color: '#c53030', fontSize: '0.9rem', marginTop: '6px', display: 'block', fontWeight: 'bold' }}>⚠️ {errors.username}</span>}
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Email</label>
              <input name="email" type="text" value={formData.email} readOnly style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} />
            </div>

            <div className="profile-btn-container">
              <button 
                onClick={handleDeleteClick}
                style={{ backgroundColor: '#c53030', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                Hapus profil
              </button>
              <button 
                onClick={handleUpdate}
                style={{ backgroundColor: '#955C2E', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                {isEditing ? 'Save Changes' : 'Ubah Data'}
              </button>
            </div>
          </section>
        </div>
      </main>

      <ConfirmationModal 
        open={showEditConfirm}
        title="Konfirmasi Perubahan Data"
        message="Apakah Anda yakin ingin menyimpan perubahan profil ini?"
        confirmText="Simpan Data"
        cancelText="Batal"
        onConfirm={confirmSave}
        onCancel={() => setShowEditConfirm(false)}
      />

      <ConfirmationModal 
        open={showDeleteConfirm}
        title="Hapus Akun?"
        message="Tindakan ini tidak dapat dibatalkan. Profil Anda dan semua akses yang terkait akan dihapus secara permanen."
        confirmText="Hapus Akun"
        cancelText="Batal"
        isDestructive={true}
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteConfirm(false)}
      />
    </div>
  );
}
