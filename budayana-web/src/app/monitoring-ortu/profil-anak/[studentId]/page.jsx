import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MonitoringSidebar from "../../../../components/MonitoringSidebar";
import { monitoringApi } from "../../../../lib/api";
import "../../../../pages/Profile.css";
import "../../../../pages/Results.css";

export default function MonitoringOrtuProfilAnakDetail() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);
  
  const [formData, setFormData] = useState({
    name: "",
    grade: "",
    classLabel: "",
    username: "",
    password: "*****",
    guardianEmail: ""
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchStudent = async () => {
      try {
        const data = await monitoringApi.getStudent(studentId);
        setStudent(data);
        setFormData({
          name: data.name || "",
          grade: data.grade || "",
          classLabel: data.classLabel || "",
          username: data.displayUsername || data.username || "",
          password: "*****",
          guardianEmail: data.guardianEmail || ""
        });
      } catch (err) {
        console.error("Gagal mengambil data anak:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchStudent();
  }, [studentId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (loading) {
    return <div className="flex bg-[#FEF6DF] min-h-screen w-full items-center justify-center" style={{ fontFamily: "'Fredoka One', sans-serif" }}>Memuat data anak...</div>;
  }

  if (!student) {
    return (
      <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
        <MonitoringSidebar role="ortu" />
        <main className="flex-1 p-10 box-border overflow-x-hidden">
          <p style={{ color: '#955C2E', fontSize: '1.5rem', textAlign: 'center' }}>Data anak tidak ditemukan.</p>
        </main>
      </div>
    );
  }

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="ortu" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <section className="profile-top">
          <div className="profile-avatar-circle" style={{ width: '120px', height: '120px', borderColor: '#7B4F2E', backgroundColor: '#F2E5D3', overflow: 'hidden' }}>
             <img 
              src={`https://api.dicebear.com/7.x/adventurer/svg?seed=${student.name}`} 
              alt="Avatar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="profile-top-text">
            <h1 className="profile-name" style={{ color: '#7B4F2E', fontWeight: '800', margin: 0 }}>{student.name}</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <div className="profile-grade-badge student-badge-btn" style={{ backgroundColor: '#f3a64c', color: 'white' }}>
                Kelas {student.grade}{student.classLabel}
              </div>
            </div>
          </div>
        </section>

        <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', margin: '30px 0' }} />

        <div className="form_profile" style={{ width: '100%' }}>
          <section className="profile-form">
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Nama</label>
              <input name="name" type="text" value={formData.name} onChange={handleChange} readOnly style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} />
            </div>
            
            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Kelas</label>
              <input name="grade" type="text" value={formData.grade} onChange={handleChange} readOnly style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} />
            </div>

            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Label Kelas</label>
              <input name="classLabel" type="text" value={formData.classLabel} onChange={handleChange} readOnly style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} />
            </div>

            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Username</label>
              <input name="username" type="text" value={formData.username} onChange={handleChange} readOnly style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} />
            </div>

            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Password</label>
              <input name="password" type="text" value={formData.password} onChange={handleChange} readOnly style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} />
            </div>

            <div className="profile-field" style={{ marginBottom: '24px' }}>
              <label style={{ color: '#955C2E', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px', display: 'block' }}>Email Orang Tua</label>
              <input name="guardianEmail" type="text" value={formData.guardianEmail} readOnly style={{ border: '2px solid #E8D9C0', color: '#7B4F2E', fontWeight: 'bold', outline: 'none', backgroundColor: '#f0f0f0' }} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
