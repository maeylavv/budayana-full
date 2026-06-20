import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import MonitoringSidebar from "../../../../components/MonitoringSidebar";
import { monitoringApi } from "../../../../lib/api";
import "../../../../pages/Profile.css";
import "../../../../pages/Results.css";

const getAnimalAvatar = (seed) => {
  const animals = ["Buaya.png", "Badak.png", "Harimau.png", "Monyet.png"];
  if (!seed) return `/assets/budayana/islands/${animals[0]}`;
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % animals.length;
  return `/assets/budayana/islands/${animals[index]}`;
};

export default function MonitoringGuruProfilAnakDetail() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  
  const [formData, setFormData] = useState({
    nama: "",
    kelas: "",
    username: "",
    password: "*****",
    emailWali: "",
    jenisKelamin: ""
  });

  const [originalData, setOriginalData] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const data = await monitoringApi.getStudent(studentId);
        setOriginalData(data);
        setFormData({
          nama: data.name,
          kelas: data.grade.toString(),
          username: data.username || "",
          password: "*****",
          emailWali: data.guardianEmail || "",
          jenisKelamin: data.gender || ""
        });
      } catch (err) {
        console.error("Gagal mengambil detail siswa:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [studentId]);

  if (loading) {
    return (
      <div className="flex bg-[#FEF6DF] min-h-screen w-full items-center justify-center">
        <p>Memuat data siswa...</p>
      </div>
    );
  }

  if (!originalData) {
    return (
      <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
        <MonitoringSidebar role="guru" />
        <main className="flex-1 p-10 box-border overflow-x-hidden">
          <p>Siswa tidak ditemukan.</p>
        </main>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    try {
        const updated = await monitoringApi.updateStudent(studentId, {
            name: formData.nama,
            grade: parseInt(formData.kelas),
            username: formData.username,
            guardianEmail: formData.emailWali,
            gender: formData.jenisKelamin
        });
        setOriginalData(updated);
        setFormData({
          nama: updated.name,
          kelas: updated.grade.toString(),
          username: updated.username || "",
          password: "*****",
          emailWali: updated.guardianEmail || "",
          jenisKelamin: updated.gender || ""
        });
        setIsEditing(false);
    } catch (err) {
        alert("Gagal memperbarui data siswa");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Apakah Anda yakin ingin menghapus akun siswa ini?")) {
        try {
            await monitoringApi.deleteStudent(studentId);
            navigate('/monitoring-guru/profil-anak');
        } catch (err) {
            alert("Gagal menghapus akun siswa");
        }
    }
  };

  const handleCancel = () => {
    setFormData({
      nama: originalData.name,
      kelas: originalData.grade.toString(),
      username: originalData.username || "",
      password: "*****",
      emailWali: originalData.guardianEmail || "",
      jenisKelamin: originalData.gender || ""
    });
    setIsEditing(false);
  };

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <section className="profile-top">
          <div className="profile-avatar-circle" style={{ width: '120px', height: '120px', borderColor: '#7B4F2E', backgroundColor: '#F2E5D3', overflow: 'hidden' }}>
            <img 
              src={getAnimalAvatar(studentId || formData.nama)} 
              alt="Avatar" 
              style={{ width: '80%', height: '80%', objectFit: 'contain' }}
            />
          </div>
          <div className="profile-top-text">
            <h1 className="profile-name" style={{ color: '#7B4F2E', fontWeight: '800', margin: 0 }}>{formData.nama}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <div className="profile-grade-badge student-badge-btn" style={{ backgroundColor: '#f3a64c', color: 'white' }}>
                Kelas {formData.kelas}
              </div>
              <button 
                onClick={() => navigate('/monitoring-guru/profil-anak')} 
                className="no-wrap-btn student-badge-btn"
                style={{ backgroundColor: '#955C2E', color: 'white', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}
              >
                <ChevronLeft size={16} />
                Kembali
              </button>
            </div>
          </div>
        </section>

        <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', margin: '30px 0' }} />

        <div className="form_profile" style={{ maxWidth: '800px' }}>
          <section className="profile-form">
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Nama</label>
              <input 
                type="text" 
                name="nama"
                value={formData.nama} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} 
              />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Kelas</label>
              <input 
                type="text" 
                name="kelas"
                value={formData.kelas} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} 
              />
            </div>

            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Jenis Kelamin</label>
              {isEditing ? (
                <select
                  name="jenisKelamin"
                  value={formData.jenisKelamin}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#ffffff', fontFamily: "'Fredoka One', sans-serif" }}
                >
                  <option value="" disabled>Pilih Jenis Kelamin</option>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              ) : (
                <input 
                  type="text" 
                  name="jenisKelamin"
                  value={formData.jenisKelamin || ""} 
                  readOnly 
                  style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} 
                />
              )}
            </div>

            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Username</label>
              <input 
                type="text" 
                name="username"
                value={formData.username} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} 
              />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Password</label>
              <input 
                type="text" 
                name="password"
                value={formData.password} 
                readOnly 
                style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} 
              />
            </div>
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Email Wali</label>
              <input 
                type="text" 
                name="emailWali"
                value={formData.emailWali} 
                onChange={handleChange}
                readOnly={!isEditing} 
                style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: isEditing ? '#ffffff' : '#f0f0f0' }} 
              />
            </div>

            <div className="profile-btn-container">
              {!isEditing ? (
                <>
                  <button onClick={handleDelete} style={{ backgroundColor: '#c53030', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                    Hapus Akun
                  </button>
                  <button onClick={() => setIsEditing(true)} style={{ backgroundColor: '#955C2E', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                    Ubah Data
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleCancel} style={{ backgroundColor: '#A0AEC0', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                    Batalkan
                  </button>
                  <button onClick={handleSave} style={{ backgroundColor: '#008b8b', color: 'white', padding: '12px 30px', borderRadius: '999px', fontSize: '1.1rem', fontWeight: 'bold', border: 'none', cursor: 'pointer' }}>
                    Konfirmasi
                  </button>
                </>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
