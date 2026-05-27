import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import MonitoringSidebar from "../../../components/MonitoringSidebar";
import { monitoringApi } from "../../../lib/api";
import "../../../pages/Profile.css";
import "../../../pages/Results.css";

export default function MonitoringGuruProfilAnak() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");
  
  // Debounce search query
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 400);
    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  // Fetch students with class filter and debounced search
  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    const fetchStudents = async () => {
      try {
        setLoading(true);
        const data = await monitoringApi.listStudents(selectedClass, debouncedSearch, {
          signal: controller.signal
        });
        if (active) {
          setStudents(data || []);
          setError(null);
        }
      } catch (err) {
        if (err.name === "AbortError" || err.message?.toLowerCase().includes("abort")) {
          return;
        }
        console.error("Gagal mengambil daftar siswa:", err);
        if (active) {
          setError(err.message || "Gagal mengambil data siswa");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };
    fetchStudents();

    return () => {
      active = false;
      controller.abort();
    };
  }, [selectedClass, debouncedSearch]);

  const filteredStudents = students;

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-10 box-border overflow-x-hidden">
        <section>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
              <h2 className="results-section-title" style={{ fontSize: '2rem', margin: 0, color: '#955C2E', fontWeight: 'bold' }}>Daftar Profil Siswa</h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <select
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '999px',
                    border: '2px solid #955C2E',
                    backgroundColor: 'white',
                    color: '#5C3A1E',
                    fontFamily: "'Fredoka One', sans-serif",
                    fontWeight: 'bold',
                    outline: 'none',
                    cursor: 'pointer',
                    fontSize: '1.1rem'
                  }}
                >
                  <option value="">Semua Kelas</option>
                  <option value="A">Kelas A</option>
                  <option value="B">Kelas B</option>
                  <option value="C">Kelas C</option>
                </select>
                <div style={{ position: 'relative', width: '250px' }}>
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari..." 
                    style={{ width: '100%', padding: '10px 16px', borderRadius: '999px', border: '2px solid #955C2E', outline: 'none', fontFamily: "'Fredoka One', sans-serif", color: '#5C3A1E', fontSize: '1.1rem' }}
                  />
                  <Search style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#955C2E' }} size={20} />
                </div>
              </div>
            </div>
            
            <div className="history-table-container" style={{ height: 'auto', minHeight: '500px' }}>
              <div className="history-header" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', backgroundColor: '#955C2E', color: 'white', padding: '16px 24px', alignItems: 'center' }}>
                <div style={{ paddingLeft: '24px' }}>Nama</div>
                <div style={{ textAlign: 'center' }}>Username</div>
                <div style={{ textAlign: 'center' }}>Kelas</div>
                <div style={{ textAlign: 'center' }}>Label Kelas</div>
                <div style={{ textAlign: 'center' }}>Aksi</div>
              </div>
              <div className="history-body" style={{ overflowY: 'auto' }}>
                {loading ? (
                   <div style={{ padding: '40px', textAlign: 'center', color: '#955C2E' }}>Memuat data siswa...</div>
                ) : error ? (
                   <div style={{ padding: '40px', textAlign: 'center', color: '#F44336' }}>⚠️ Gagal memuat data: {error}</div>
                ) : filteredStudents.length === 0 ? (
                   <div style={{ padding: '40px', textAlign: 'center', color: '#955C2E' }}>
                     {debouncedSearch ? "Tidak ada siswa ditemukan." : "Belum ada siswa di kelas ini."}
                   </div>
                ) : (
                  filteredStudents.map((student) => (
                    <div key={student.id} className="history-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', padding: '16px 24px', borderBottom: '2px solid #955C2E', alignItems: 'center', backgroundColor: '#FEF6DF' }}>
                      <div style={{ fontWeight: '800', color: '#333' }}>{student.name}</div>
                      <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{student.displayUsername || "-"}</div>
                      <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{student.grade}</div>
                      <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{student.classLabel || "-"}</div>
                      <div style={{ display: 'flex', justifyContent: 'center' }}>
                          <Link to={`/monitoring-guru/profil-anak/${student.id}`} className="no-wrap-btn" style={{ backgroundColor: '#f3a64c', color: 'white', padding: '10px 24px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '1rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                              Lihat Profil <Search size={18} />
                          </Link>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
        </section>
      </main>
    </div>
  );
}
