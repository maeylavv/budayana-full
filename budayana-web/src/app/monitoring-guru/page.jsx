import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import MonitoringSidebar from "../../components/MonitoringSidebar";
import { monitoringApi } from "../../lib/api";
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import "../../pages/Profile.css";
import "../../pages/Results.css";
import InfoIcon from "../../components/InfoIcon";
import { GURU_INFO } from "../../components/infoContent/guruInfoContent";

export default function MonitoringGuruDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedClass, setSelectedClass] = useState("");

  const [classSummary, setClassSummary] = useState({
    averageImprovement: 0,
    activeStudents: 0,
    inactiveStudents: 0,
    islandExploration: [],
    literacyLevels: [],
    timeAnalysis: []
  });
  const [summaryLoading, setSummaryLoading] = useState(true);

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
        setTableLoading(true);
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
        console.error("Gagal memuat siswa:", err);
        if (active) {
          setError(err.message || "Gagal memuat data siswa");
        }
      } finally {
        if (active) {
          setTableLoading(false);
          setInitialLoading(false);
        }
      }
    };
    fetchStudents();

    return () => {
      active = false;
      controller.abort();
    };
  }, [selectedClass, debouncedSearch]);

  // Fetch class summary
  useEffect(() => {
    const controller = new AbortController();
    let active = true;

    const fetchSummary = async () => {
      try {
        setSummaryLoading(true);
        const data = await monitoringApi.getClassSummary(selectedClass, {
          signal: controller.signal
        });
        if (active && data) {
          setClassSummary({
            averageImprovement: Number(data.averageImprovement) || 0,
            activeStudents: Number(data.activeStudents) || 0,
            inactiveStudents: Number(data.inactiveStudents) || 0,
            islandExploration: Array.isArray(data.islandExploration) ? data.islandExploration : [],
            literacyLevels: Array.isArray(data.literacyLevels) ? data.literacyLevels : [],
            timeAnalysis: Array.isArray(data.timeAnalysis) ? data.timeAnalysis : []
          });
        }
      } catch (err) {
        if (err.name === "AbortError" || err.message?.toLowerCase().includes("abort")) {
          return;
        }
        console.error("Gagal memuat ringkasan kelas:", err);
      } finally {
        if (active) {
          setSummaryLoading(false);
        }
      }
    };
    fetchSummary();

    return () => {
      active = false;
      controller.abort();
    };
  }, [selectedClass]);

  if (initialLoading || summaryLoading) {
    if (error) {
      return (
        <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
          <MonitoringSidebar role="guru" />
          <main className="flex-1 p-6 md:p-10 box-border overflow-x-hidden">
            <div style={{ marginBottom: '30px' }}>
                <h1 className="results-section-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>Ringkasan Hasil Siswa</h1>
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

    return (
      <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
        <MonitoringSidebar role="guru" />
        <main className="flex-1 p-6 md:p-10 box-border overflow-x-hidden">
          <div style={{ marginBottom: '30px' }}>
              <h1 className="results-section-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>Ringkasan Hasil Siswa</h1>
              <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', marginTop: '10px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: 'white', border: '2px dashed #955C2E', borderRadius: '16px', gap: '16px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '48px', border: '4px solid #f3a64c', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
              <p style={{ color: '#955C2E', fontSize: '1.2rem', fontWeight: 'bold' }}>Memuat data siswa...</p>
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

  const filteredStudents = students;
  const donutData = [
    { name: "Aktif", value: classSummary.activeStudents, color: "#4CAF50" },
    { name: "Tidak Aktif", value: classSummary.inactiveStudents, color: "#F44336" }
  ];

  return (
    <div className="flex bg-[#FEF6DF] min-h-screen w-full" style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      <MonitoringSidebar role="guru" />
      
      <main className="flex-1 p-6 md:p-10 box-border overflow-x-hidden">
        <div style={{ marginBottom: '30px' }}>
            <h1 className="results-section-title" style={{ fontSize: '2rem', marginBottom: '4px' }}>Ringkasan Hasil Siswa</h1>
            <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', marginTop: '10px' }} />
        </div>

        <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 className="results-section-title" style={{ fontSize: '1.2rem', margin: 0 }}>Statistik Kelas</h2>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                  style={{
                    padding: '8px 40px 8px 16px',
                    borderRadius: '999px',
                    border: '2px solid #955C2E',
                    backgroundColor: 'white',
                    color: '#5C3A1E',
                    fontFamily: "'Fredoka One', sans-serif",
                    fontWeight: 'bold',
                    outline: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    appearance: 'none',
                    WebkitAppearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23955C2E' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'/%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 16px center'
                  }}
              >
                <option value="">Semua Kelas</option>
                <option value="A">Kelas A</option>
                <option value="B">Kelas B</option>
                <option value="C">Kelas C</option>
              </select>
            </div>
            
            {/* Top 3 Charts */}
            <div className="charts-grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '20px' }}>
              {/* Gauge (using Pie half) */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Rata-rata Kenaikan <InfoIcon {...GURU_INFO.rataRataKenaikan} /></h3>
                <div className="chart-wrapper-200">
                  {(() => {
                    const classImpVal = classSummary.averageImprovement;
                    
                    // Colors: <=30 red (#F44336), 31-70 yellow (#FFC107), >70 green (#4CAF50)
                    let classColor = "#4CAF50";
                    if (classImpVal <= 30) {
                      classColor = "#F44336";
                    } else if (classImpVal <= 70) {
                      classColor = "#FFC107";
                    } else {
                      classColor = "#4CAF50";
                    }
                    
                    const prefix = classImpVal > 0 ? "+" : "";
                    const formattedText = `${prefix}${classImpVal}%`;
                    
                    return (
                      <>
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie 
                              data={[
                                { name: "Kenaikan", value: Math.abs(classImpVal) }, 
                                { name: "Sisa", value: Math.max(0, 100 - Math.abs(classImpVal)) }
                              ]} 
                              cx="50%" 
                              cy="85%" 
                              startAngle={180} 
                              endAngle={0} 
                              innerRadius={90} 
                              outerRadius={120} 
                              dataKey="value"
                            >
                              <Cell fill={classColor} />
                              <Cell fill="#E0E0E0" />
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                          </PieChart>
                        </ResponsiveContainer>
                        <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: 'bold', color: classColor, marginTop: '-30px' }}>
                          {formattedText}
                        </p>
                      </>
                    );
                  })()}
                </div>
              </div>

              {/* Donut Chart */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Siswa Aktif vs Tidak <InfoIcon {...GURU_INFO.siswaAktif} /></h3>
                <div className="chart-wrapper-200" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {classSummary.activeStudents > 0 || classSummary.inactiveStudents > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie 
                          data={donutData} 
                          cx="50%" 
                          cy="50%" 
                          innerRadius={60} 
                          outerRadius={80} 
                          dataKey="value"
                        >
                          {donutData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value} Siswa`]} />
                      </PieChart>
                    </ResponsiveContainer>
                  ) : (
                    <div style={{ color: '#955C2E', fontSize: '1rem', fontWeight: 'bold' }}>Belum ada data keaktifan</div>
                  )}
                </div>
              </div>

              {/* Bar Chart Rata-rata Kelas per Level Bloom (LOGIC UNCHANGED) */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Rata-rata Kelas per Level <InfoIcon {...GURU_INFO.rataRataLevel} /></h3>
                <div className="chart-wrapper-200" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {classSummary.literacyLevels && classSummary.literacyLevels.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={classSummary.literacyLevels} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                        <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10 }} width={38} />
                        <Tooltip formatter={(value) => [`${value}%`, 'Rata-rata']} />
                        <Bar dataKey="nilai" fill="#955C2E" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div style={{ color: '#955C2E', fontSize: '1rem', fontWeight: 'bold' }}>Belum ada data level</div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom 2 Charts */}
            <div className="charts-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
              {/* Island Completion Rate (FIXED TO VERTIKAL BAR BASED ON MOCKUP) */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Tingkat Penyelesaian Pulau <InfoIcon {...GURU_INFO.penyelesaianPulau} /></h3>
                <div className="chart-wrapper-responsive" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {classSummary.islandExploration && classSummary.islandExploration.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={classSummary.islandExploration} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                        <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 10 }} width={38} />
                        <Tooltip formatter={(value) => [`${value}%`, 'Penyelesaian']} />
                        <Bar dataKey="rate" fill="#f3a64c" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  ) : (
                    <div style={{ color: '#955C2E', fontSize: '1rem', fontWeight: 'bold' }}>Belum ada data tingkat penyelesaian</div>
                  )}
                </div>
              </div>

              {/* Analisis Waktu (Area Chart) */}
              <div style={{ border: '2px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white' }}>
                <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '10px' }}>Analisis Waktu <InfoIcon {...GURU_INFO.analisisWaktu} /></h3>
                <div className="chart-wrapper-responsive" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {classSummary.timeAnalysis && classSummary.timeAnalysis.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={classSummary.timeAnalysis} margin={{ top: 10, right: 10, left: 0, bottom: 5 }}>
                        <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                        <YAxis tickFormatter={(v) => `${v} m`} tick={{ fontSize: 10 }} width={35} />
                        <Tooltip formatter={(value) => [`${value} menit`, 'Durasi Belajar']} />
                        <Area type="monotone" dataKey="time" stroke="#955C2E" fill="#E8D9C0" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  ) : (
                    <div style={{ color: '#955C2E', fontSize: '1rem', fontWeight: 'bold' }}>Belum ada data waktu belajar</div>
                  )}
                </div>
              </div>
            </div>
        </section>

        <section style={{ marginTop: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
              <h2 className="results-section-title" style={{ fontSize: '1.2rem', margin: 0, display: 'flex', alignItems: 'center', whiteSpace: 'nowrap' }}>Tabel Siswa <InfoIcon {...GURU_INFO.tabelSiswa} /></h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <div style={{ position: 'relative', width: '250px' }}>
                  <input 
                    type="text" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Cari..." 
                    style={{ width: '100%', padding: '8px 16px', borderRadius: '999px', border: '2px solid #955C2E', outline: 'none', fontFamily: "'Fredoka One', sans-serif", color: '#5C3A1E' }}
                  />
                  <Search style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', color: '#955C2E' }} size={18} />
                </div>
              </div>
            </div>
            
            <div className="history-table-wrapper" style={{ overflowX: 'auto', width: '100%' }}>
              <div className="history-table-container" style={{ display: 'flex', flexDirection: 'column', minWidth: '900px', height: 'auto', overflowY: 'visible' }}>
                <div className="history-header" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr 1.5fr 1.2fr', backgroundColor: '#955C2E', color: 'white', padding: '16px 24px', alignItems: 'center' }}>
                  <div style={{ textAlign: 'left' }}>Nama</div>
                  <div style={{ textAlign: 'center' }}>Kelas</div>
                  <div style={{ textAlign: 'center' }}>Total XP</div>
                  <div style={{ textAlign: 'center' }}>Peningkatan Cerita</div>
                  <div style={{ textAlign: 'center' }}>Literasi Budaya</div>
                  <div style={{ textAlign: 'center' }}>Aksi</div>
                </div>
                <div className="history-body">
                {tableLoading ? (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '200px', color: '#955C2E', fontSize: '1.2rem', fontWeight: 'bold', backgroundColor: '#FEF6DF' }}>
                    Memuat data siswa...
                  </div>
                ) : error ? (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '200px', color: '#F44336', fontSize: '1.2rem', fontWeight: 'bold', backgroundColor: '#FEF6DF' }}>
                    ⚠️ Gagal memuat data: {error}
                  </div>
                ) : filteredStudents.length === 0 ? (
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', minHeight: '200px', color: '#955C2E', fontSize: '1.2rem', fontWeight: 'bold', backgroundColor: '#FEF6DF' }}>
                    {debouncedSearch ? "Tidak ada siswa ditemukan." : "Belum ada siswa di kelas ini."}
                  </div>
                ) : (
                  filteredStudents.map((student) => {
                    const studentClass = student.class || (student.grade && student.classLabel ? `${student.grade}${student.classLabel}` : (student.grade ?? "-"));
                    const totalXp = student.totalXp ?? student.totalXP ?? 0;
                    
                    const learningImprovement = student.learningImprovement !== undefined && student.learningImprovement !== null 
                      ? (Number(student.learningImprovement) > 0 ? `+${student.learningImprovement}%` : `${student.learningImprovement}%`) 
                      : "0%";
                    
                    const averageLiteracyScore = student.averageLiteracyScore !== undefined && student.averageLiteracyScore !== null 
                      ? (Number(student.averageLiteracyScore) > 0 ? `+${student.averageLiteracyScore}%` : `${student.averageLiteracyScore}%`) 
                      : "0%";

                    return (
                      <div key={student.id} className="history-row" style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1.5fr 1.5fr 1.2fr', padding: '16px 24px', borderBottom: '2px solid #955C2E', alignItems: 'center', backgroundColor: '#FEF6DF' }}>
                        <div style={{ textAlign: 'left', fontWeight: '800', color: '#333' }}>{student.name}</div>
                        <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{studentClass}</div>
                        <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{totalXp}</div>
                        <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{learningImprovement}</div>
                        <div style={{ textAlign: 'center', fontWeight: '800', color: '#333' }}>{averageLiteracyScore}</div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Link to={`/monitoring-guru/hasil/${student.id}`} className="no-wrap-btn" style={{ backgroundColor: '#f3a64c', color: 'white', padding: '10px 16px', borderRadius: '12px', textDecoration: 'none', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '1rem', border: 'none', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                                Lihat Dashboard <Search size={16} />
                            </Link>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
            </div>
        </section>
      </main>
    </div>
  );
}