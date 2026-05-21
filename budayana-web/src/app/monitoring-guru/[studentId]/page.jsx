import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import StudentAnalyticsDashboard from "../../../components/StudentAnalyticsDashboard";
import { monitoringApi } from "../../../lib/api";

export default function StudentProfile() {
  const { studentId } = useParams();
  const [studentAnalytics, setStudentAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    const fetchStudentAnalytics = async () => {
      try {
        setLoading(true);
        const data = await monitoringApi.getStudentAnalytics(studentId, {
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
        console.error("Gagal memuat analitik siswa:", err);
        if (active) {
          setError(err.message || "Gagal memuat analitik siswa");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    if (studentId) {
      fetchStudentAnalytics();
    }

    return () => {
      active = false;
      controller.abort();
    };
  }, [studentId]);

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: 'white', border: '2px dashed #955C2E', borderRadius: '16px', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', border: '4px solid #f3a64c', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
              <p style={{ color: '#955C2E', fontSize: '1.2rem', fontWeight: 'bold' }}>Memuat analitik siswa...</p>
            </div>
            <style>{`
              @keyframes spin {
                to { transform: rotate(360deg); }
              }
            `}</style>
          </div>
        ) : error ? (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: 'white', border: '2px solid #F44336', borderRadius: '16px', gap: '16px', padding: '20px' }}>
            <p style={{ color: '#F44336', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center' }}>⚠️ Gagal memuat analitik: {error}</p>
            <button onClick={() => window.location.reload()} style={{ backgroundColor: '#955C2E', color: 'white', padding: '10px 20px', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>Coba Lagi</button>
          </div>
        ) : (
          <StudentAnalyticsDashboard
            studentAnalytics={studentAnalytics}
            backLink="/monitoring-guru/hasil"
          />
        )}
      </main>
    </div>
  );
}
