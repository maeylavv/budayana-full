import { useState, useEffect } from "react";
import MonitoringSidebar from "../../components/MonitoringSidebar";
import StudentAnalyticsDashboard from "../../components/StudentAnalyticsDashboard";
import { monitoringApi } from "../../lib/api";
import "../../pages/Profile.css";
import "../../pages/Results.css";

export default function MonitoringOrtuDashboard() {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState("");
  const [studentAnalytics, setStudentAnalytics] = useState(null);
  const [loadingList, setLoadingList] = useState(true);
  const [loadingAnalytics, setLoadingAnalytics] = useState(false);
  const [error, setError] = useState(null);

  // Fetch children list
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoadingList(true);
        const data = await monitoringApi.listStudents();
        setStudents(data || []);
        if (data && data.length > 0) {
          setSelectedStudentId(data[0].id);
        } else {
          setLoadingList(false);
        }
      } catch (err) {
        console.error("Gagal memuat data anak:", err);
        setError(err.message || "Gagal memuat data anak");
        setLoadingList(false);
      }
    };
    fetchStudents();
  }, []);

  // Fetch student detailed analytics
  useEffect(() => {
    if (!selectedStudentId) return;

    const controller = new AbortController();
    let active = true;

    const fetchAnalytics = async () => {
      try {
        setLoadingAnalytics(true);
        const data = await monitoringApi.getStudentAnalytics(selectedStudentId, {
          signal: controller.signal
        });
        if (active && data) {
          setStudentAnalytics(data);
          setError(null);
        }
      } catch (err) {
        if (err.name === "AbortError" || err.message?.toLowerCase().includes("abort")) {
          return;
        }
        console.error("Gagal memuat analitik anak:", err);
        if (active) {
          setError(err.message || "Gagal memuat analitik anak");
        }
      } finally {
        if (active) {
          setLoadingAnalytics(false);
          setLoadingList(false);
        }
      }
    };

    fetchAnalytics();

    return () => {
      active = false;
      controller.abort();
    };
  }, [selectedStudentId]);

  const isLoading = loadingList || (loadingAnalytics && !studentAnalytics?.studentInfo?.name);

  if (isLoading) {
    return (
      <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
        <MonitoringSidebar role="ortu" />
        <main className="flex-1 p-10 box-border overflow-x-hidden">
          <div style={{ marginBottom: '30px' }}>
              <h1 className="results-section-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>Dashboard Orang Tua</h1>
              <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', marginTop: '10px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: 'white', border: '2px dashed #955C2E', borderRadius: '16px', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', border: '4px solid #f3a64c', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
              <p style={{ color: '#955C2E', fontSize: '1.2rem', fontWeight: 'bold' }}>Memuat data anak...</p>
            </div>
          </div>
        </main>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
        <MonitoringSidebar role="ortu" />
        <main className="flex-1 p-10 box-border overflow-x-hidden">
          <div style={{ marginBottom: '30px' }}>
              <h1 className="results-section-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>Dashboard Orang Tua</h1>
              <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', marginTop: '10px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: 'white', border: '2px solid #F44336', borderRadius: '16px', gap: '16px', padding: '20px' }}>
            <p style={{ color: '#F44336', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>⚠️ Gagal memuat data: {error}</p>
            <button onClick={() => window.location.reload()} style={{ backgroundColor: '#955C2E', color: 'white', padding: '10px 20px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Coba Lagi</button>
          </div>
        </main>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
        <MonitoringSidebar role="ortu" />
        <main className="flex-1 p-10 box-border overflow-x-hidden">
          <div style={{ marginBottom: '30px' }}>
              <h1 className="results-section-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>Dashboard Orang Tua</h1>
              <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', marginTop: '10px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: 'white', border: '2px dashed #955C2E', borderRadius: '16px', gap: '16px', padding: '20px' }}>
            <p style={{ color: '#955C2E', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>Belum ada data anak yang terhubung.</p>
          </div>
        </main>
      </div>
    );
  }

  const childSelector = (
    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
      {students.length > 1 && (
        <>
          <label htmlFor="child-select" style={{ color: '#7B4F2E', fontWeight: 'bold', fontSize: '1rem' }}>Pilih Anak:</label>
          <select
            id="child-select"
            value={selectedStudentId}
            onChange={(e) => setSelectedStudentId(e.target.value)}
            style={{
              padding: '6px 12px',
              borderRadius: '12px',
              border: '2px solid #7B4F2E',
              backgroundColor: 'white',
              color: '#7B4F2E',
              fontFamily: "'Fredoka One', sans-serif",
              fontWeight: 'bold',
              outline: 'none',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            {students.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
          </select>
        </>
      )}
      {loadingAnalytics && (
        <span style={{ color: '#955C2E', fontSize: '0.9rem', fontWeight: 'bold', marginLeft: '8px' }}>Mengambil data terbaru...</span>
      )}
    </div>
  );

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="ortu" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        {studentAnalytics && (
          <StudentAnalyticsDashboard
            studentAnalytics={studentAnalytics}
            childSelector={childSelector}
          />
        )}
      </main>
    </div>
  );
}
