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

export default function MonitoringOrtuProfil() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: ""
  });
  
  const [errors, setErrors] = useState({ name: "", username: "" });
  const [success, setSuccess] = useState("");
  const [showEditConfirm, setShowEditConfirm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

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
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = { name: "", username: "" };
    let isValid = true;
    if (!formData.name.trim()) {
      newErrors.name = "Nama tidak boleh kosong.";
      isValid = false;
    }
    if (!formData.username.trim()) {
      newErrors.username = "Username tidak boleh kosong.";
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
      setErrors({ name: "", username: "" });
    }
  };

  const confirmSave = async () => {
    setShowEditConfirm(false);
    if (!validate()) return;

    try {
      await authClient.updateUser({
        name: formData.name,
        username: formData.username
      });
      setIsEditing(false);
      setSuccess("Profil berhasil diperbarui!");
    } catch (err) {
      alert("Gagal memperbarui profil: " + (err.message ?? err));
    }
  };

  const handleDeleteClick = () => {
    setShowDeleteConfirm(true);
  };

  const confirmDelete = async () => {
    setShowDeleteConfirm(false);
    try {
      // Call custom self deletion endpoint
      await monitoringApi.deleteSelf();

      // Clear sessions
      localStorage.removeItem("ba_token");
      localStorage.removeItem("ba_user_id");
      await authClient.signOut();

      // Set success message for redirect login screen
      sessionStorage.setItem("logout_success_message", "Akun Anda berhasil dihapus.");

      // Redirect
      navigate("/monitoring-login-ortu");
    } catch (err) {
      alert("Gagal menghapus akun: " + (err.message ?? err));
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
          <div className="profile-avatar-circle" style={{ borderColor: '#7B4F2E', backgroundColor: '#FDE8C0', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '3.1rem', display: 'block', lineHeight: 1, userSelect: 'none' }}>👤</span>
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
            {success && (
              <div style={{ backgroundColor: '#E8F5E9', border: '2px solid #4CAF50', color: '#2E7D32', padding: '12px 20px', borderRadius: '16px', marginBottom: '8px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>✅</span> {success}
              </div>
            )}
            
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Nama</label>
              <input 
                name="name" 
                type="text" 
                value={formData.name} 
                onChange={handleChange} 
                readOnly={!isEditing} 
                style={{ 
                  border: errors.name ? '2px solid #c53030' : '2px solid #E8D9C0', 
                  color: '#7B4F2E', 
                  fontWeight: 'bold', 
                  outline: 'none', 
                  backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' 
                }} 
              />
              {errors.name && <span style={{ color: '#c53030', fontSize: '0.9rem', marginTop: '6px', display: 'block', fontWeight: 'bold' }}>⚠️ {errors.name}</span>}
            </div>
            
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Username</label>
              <input 
                name="username" 
                type="text" 
                value={formData.username} 
                onChange={handleChange} 
                readOnly={!isEditing} 
                style={{ 
                  border: errors.username ? '2px solid #c53030' : '2px solid #E8D9C0', 
                  color: '#7B4F2E', 
                  fontWeight: 'bold', 
                  outline: 'none', 
                  backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' 
                }} 
              />
              {errors.username && <span style={{ color: '#c53030', fontSize: '0.9rem', marginTop: '6px', display: 'block', fontWeight: 'bold' }}>⚠️ {errors.username}</span>}
            </div>
            
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Email</label>
              <input 
                name="email" 
                type="text" 
                value={formData.email} 
                readOnly 
                style={{ 
                  border: '2px solid #E8D9C0', 
                  color: '#7B4F2E', 
                  fontWeight: 'bold', 
                  outline: 'none', 
                  backgroundColor: '#f0f0f0' 
                }} 
              />
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
