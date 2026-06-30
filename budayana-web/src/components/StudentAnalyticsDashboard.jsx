import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Puzzle, X } from 'lucide-react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell
} from 'recharts';
import ScoreTable from "./ScoreTable";
import "../pages/Profile.css";
import "../pages/Results.css";
import InfoIcon from "./InfoIcon";
import { PARENT_INFO, getStatistikQuizInfo } from "./infoContent/parentInfoContent";
import { getJourneyContent } from "../utils/xpJourney";

const ISLAND_TEXT_COLORS = {
  "sumatra": "#5e79bfff",          
  "jawa": "#9663b4ff",            
  "kalimantan": "#2fa37bff",      
  "sulawesi": "#bc5d83ff",       
  "papua": "#ab7e02ff",            
  "bali": "#918423ff",           
  "maluku": "#64952cff",           
  "nusa tenggara": "#cc643eff",    
  "nusa-tenggara": "#cc643eff",
};

const getIslandTextColor = (islandName) => {
  if (!islandName) return "#5b4631";
  const key = islandName.toLowerCase().trim();
  return ISLAND_TEXT_COLORS[key] || "#5b4631";
};

// Half Pie/Donut Chart Colors
const GAUGE_COLORS = ["#4CAF50", "#E8D9C0"];

const ESSAY_QUESTIONS = {
  "bali": "Menurutmu, mengapa Bawang tidak mendapatkan emas seperti Kesuna?",
  "sumatra": "Apa pesan moral yang bisa di ambil dari kisah Malin Kundang?",
  "nusa tenggara": "Menurutmu, mengapa petani menyembunyikan Watu Maladong?",
  "nusa-tenggara": "Menurutmu, mengapa petani menyembunyikan Watu Maladong?",
  "sulawesi": "Menurutmu, mengapa Nenek Pakande menculik anak-anak yang bermain pada waktu sore hari?",
}

const getEssayQuestion = (islandName) => {
  if (!islandName) return "Apa pesan moral yang bisa di ambil dari cerita tersebut?";
  const key = islandName.toLowerCase().trim();
  return ESSAY_QUESTIONS[key] || "Apa pesan moral yang bisa di ambil dari cerita tersebut?";
}

const getIslandNameFromTitle = (title) => {
  if (!title) return "";
  const lowerTitle = title.toLowerCase();
  const knownIslands = ["sumatra", "jawa", "bali", "kalimantan", "sulawesi", "papua", "maluku", "nusa tenggara", "nusa-tenggara"];
  for (const island of knownIslands) {
    if (lowerTitle.includes(island)) {
      if (island === "nusa-tenggara" || island === "nusa tenggara") return "Nusa Tenggara";
      return island.charAt(0).toUpperCase() + island.slice(1);
    }
  }
  return "";
}

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

export default function StudentAnalyticsDashboard({
  studentAnalytics,
  backLink,
  childSelector,
  loading = false
}) {
  const [activeTab, setActiveTab] = useState("ceritaRakyat");

  if (loading) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '400px', backgroundColor: 'white', border: '2px dashed #955C2E', borderRadius: '16px', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '48px', height: '48px', border: '4px solid #f3a64c', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          <p style={{ color: '#955C2E', fontSize: '1.2rem', fontWeight: 'bold' }}>Memuat data analitik...</p>
        </div>
        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  const { studentInfo, storyAnalytics, quizAnalytics } = studentAnalytics;

  if (!studentInfo || !studentInfo.name) {
    return (
      <div style={{ textAlign: 'center', padding: '40px', backgroundColor: 'white', borderRadius: '16px', border: '2px solid #E8D9C0' }}>
        <p style={{ color: '#955C2E', fontSize: '1.2rem', fontWeight: 'bold' }}>Data siswa tidak tersedia.</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'Fredoka One', sans-serif" }}>
      {/* Top Header */}
      <section className="profile-top">
        <div className="profile-avatar-circle" style={{ borderColor: '#7B4F2E', backgroundColor: '#e2cfab', overflow: 'hidden' }}>
          <img src={getAnimalAvatar(studentInfo.id || studentInfo.name)} alt="Avatar" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
        </div>
        <div className="profile-top-text">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <h1 className="profile-name" style={{ color: '#7B4F2E', margin: 0 }}>{studentInfo.name}</h1>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
            <div className="profile-grade-badge student-badge-btn" style={{ backgroundColor: '#f3a64c', color: 'white' }}>
              Kelas {studentInfo.class || "-"}
            </div>
            
            {/* Custom child selector (for Ortu dashboard) */}
            {childSelector}

            {/* Back button removed per user request */}
          </div>
        </div>
      </section>

      <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', margin: '24px 0' }} />

      {/* Feature Switcher Tabs */}
      <div style={{
        display: 'inline-flex',
        backgroundColor: '#FFFBEC',
        padding: '4px',
        borderRadius: '12px',
        border: '2px solid #E8D9C0',
        gap: '4px',
        marginBottom: '24px'
      }}>
        <button
          onClick={() => setActiveTab("ceritaRakyat")}
          className="transition-colors border-none cursor-pointer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '12px',
            backgroundColor: activeTab === "ceritaRakyat" ? '#7b4f2e' : 'transparent',
            color: activeTab === "ceritaRakyat" ? 'white' : '#5C3A1E',
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          <BookOpen size={20} /> Cerita Rakyat
        </button>
        <button
          onClick={() => setActiveTab("quizBudaya")}
          className="transition-colors border-none cursor-pointer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            borderRadius: '12px',
            backgroundColor: activeTab === "quizBudaya" ? '#7b4f2e' : 'transparent',
            color: activeTab === "quizBudaya" ? 'white' : '#5C3A1E',
            fontFamily: "'Fredoka One', sans-serif",
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          <Puzzle size={20} /> Quiz Budaya
        </button>
      </div>

      {/* Feature Panels */}
      {activeTab === "ceritaRakyat" ? (
        <StoryAnalyticsPanel storyAnalytics={storyAnalytics} studentInfo={studentInfo} />
      ) : (
        <QuizAnalyticsPanel quizAnalytics={quizAnalytics} studentInfo={studentInfo} />
      )}
    </div>
  );
}

// ==========================================
// SUB-PANEL: CERITA RAKYAT
// ==========================================
function StoryAnalyticsPanel({ storyAnalytics, studentInfo }) {
  const [selectedEssay, setSelectedEssay] = useState(null);
  if (!storyAnalytics) return null;

  const { stats, improvementGauge, storyInterest, history } = storyAnalytics;
  const hasInterestData = storyInterest && storyInterest.length > 0;

  return (
    <div className="fade-in">
      {/* Stats Cards */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', color: '#7B4F2E', margin: 0 }}>Statistik Cerita Rakyat</h2>
          <InfoIcon {...PARENT_INFO.statistikCerita} />
        </div>
        <div className="stats-grid">
          <div className="stat-card green" style={{ borderRadius: '24px' }}>
            <div className="stat-value">{stats.storiesCompleted}</div>
            <div className="stat-label">Sesi Cerita Selesai</div>
          </div>
          <div className="stat-card purple" style={{ borderRadius: '24px' }}>
            <div className="stat-value">{stats.totalXp}</div>
            <div className="stat-label">XP Cerita Rakyat</div>
          </div>
          <div className="stat-card pink" style={{ borderRadius: '24px' }}>
            <div className="stat-value">{stats.averagePreTest}%</div>
            <div className="stat-label">Rata-rata Pre-Test</div>
          </div>
          <div className="stat-card orange" style={{ borderRadius: '24px' }}>
            <div className="stat-value">{stats.averagePostTest}%</div>
            <div className="stat-label">Rata-rata Post-Test</div>
          </div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="charts-grid-2" style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Gauge Improvement Chart */}
        <div style={{ border: '3px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white', boxSizing: 'border-box' }}>
          <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '20px', marginTop: 0, display: 'flex', alignItems: 'center' }}>Kenaikan Pemahaman Belajar <InfoIcon {...PARENT_INFO.peningkatanCerita} /></h3>
          <div style={{ position: 'relative', width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {history && history.length > 0 ? (() => {
              const improvementValue = improvementGauge && improvementGauge[0] ? improvementGauge[0].value : 0;
              
              // Colors: 0-30 red (#F44336), 31-70 yellow (#FFC107), 71-100 green (#4CAF50)
              let dynamicColor = "#4CAF50";
              if (improvementValue <= 30) {
                dynamicColor = "#F44336";
              } else if (improvementValue <= 70) {
                dynamicColor = "#FFC107";
              } else {
                dynamicColor = "#4CAF50";
              }
              
              // Prefix formatting: '+' if positive, else empty (negatives have '-' automatically)
              const prefix = improvementValue > 0 ? "+" : "";
              const formattedText = `${prefix}${improvementValue}%`;
              
              // Absolute value for chart slice to prevent Recharts rendering issues on negative numbers
              const chartData = [
                { name: "Kenaikan", value: Math.abs(improvementValue) },
                { name: "Sisa", value: Math.max(0, 100 - Math.abs(improvementValue)) }
              ];
              
              return (
                <>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={chartData}
                        cx="50%"
                        cy="85%"
                        startAngle={180}
                        endAngle={0}
                        innerRadius={80}
                        outerRadius={110}
                        dataKey="value"
                      >
                        <Cell fill={dynamicColor} />
                        <Cell fill="#E8D9C0" />
                      </Pie>
                      <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                    </PieChart>
                  </ResponsiveContainer>
                  <div style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translate(-50%, 0)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                    <span style={{ fontSize: '2.2rem', fontWeight: 'bold', color: dynamicColor }}>{formattedText}</span>
                    <span style={{ fontSize: '0.8rem', color: '#955C2E', fontWeight: 'bold' }}>Rata-rata Kenaikan</span>
                  </div>
                </>
              );
            })() : (
              <div style={{ color: '#955C2E', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center', padding: '40px 0' }}>Belum ada data untuk ditampilkan.</div>
            )}
          </div>
        </div>

        {/* Story Interest Bar Chart */}
        <div style={{ border: '3px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white', boxSizing: 'border-box' }}>
          <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '20px', marginTop: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            Cerita Rakyat Terpopuler <InfoIcon {...PARENT_INFO.ceritaTerpopuler} />
          </h3>
          <div className="chart-wrapper-responsive" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '220px' }}>
            {hasInterestData && history && history.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={storyInterest} margin={{ top: 10, right: 10, left: -20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 9, fill: '#7B4F2E', fontWeight: 'bold' }} />
                  <YAxis tick={{ fontSize: 9 }} allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="count" name="Jumlah Dibaca" fill="#f3a64c" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ color: '#955C2E', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center', padding: '40px 0' }}>Belum ada data untuk ditampilkan.</div>
            )}
          </div>
        </div>
      </section>

      {/* Story History Table */}
      <section style={{ marginTop: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', padding: '0 4px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', margin: 0, color: '#7B4F2E' }}>Riwayat Cerita Rakyat</h2>
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#7B4F2E' }}>{history ? history.length : 0} hasil</span>
        </div>
        <div className="history-table-container" style={{ display: 'flex', flexDirection: 'column', height: '360px', overflowY: 'auto', overflowX: 'auto', position: 'relative' }}>
          <div className="history-header" style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.2fr 1.2fr 1.4fr 1.6fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', backgroundColor: '#955c2e', color: 'white', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10, borderTopLeftRadius: '17px', borderTopRightRadius: '17px', minWidth: '900px' }}>
            <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Judul Cerita</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Pre-Test</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Post-Test</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>XP</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Waktu</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Tanggal</div>
            <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Jawaban Esai</div>
          </div>
          <div className="history-body" style={{ overflowY: 'visible', flex: '1 1 0%' }}>
            {history && history.length > 0 ? (
              history.map((item, index) => {
                let rawTitle = item.storyTitle || "Cerita";
                let judulTanpaPulau = rawTitle;
                if (judulTanpaPulau.toLowerCase().startsWith("cerita ")) {
                  judulTanpaPulau = judulTanpaPulau.substring(7);
                }
                const lowerTitle = judulTanpaPulau.toLowerCase();
                const suffixesToRemove = [
                  " sumatra", " sulawesi", " bali", " maluku", " nusa tenggara", " nusa-tenggara", " jawa", " kalimantan", " papua"
                ];
                let namaPulau = "";
                for (const suffix of suffixesToRemove) {
                  if (lowerTitle.endsWith(suffix)) {
                    judulTanpaPulau = judulTanpaPulau.substring(0, judulTanpaPulau.length - suffix.length);
                    namaPulau = suffix.trim().replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
                    break;
                  }
                }
                
                const isInteractiveStory = ["sumatra", "sulawesi", "bali", "maluku", "nusa tenggara", "nusa-tenggara"].some(
                  i => rawTitle.toLowerCase().includes(i)
                );
                
                const getScoreBadge = (score) => {
                  if (score === null || score === undefined || score === "-") return { bg: "transparent", text: "inherit" };
                  const num = Number(score);
                  if (num < 50) return { bg: "#FCEBEB", text: "#791F1F" };
                  if (num < 80) return { bg: "#FAEEDA", text: "#633806" };
                  return { bg: "#EAF3DE", text: "#27500A" };
                };
                
                const ISLAND_STYLE_MAP = {
                  "Sumatra": { bg: "#E6ECFE", text: "#33437A", border: "#A8BFFB" },
                  "Kalimantan": { bg: "#DDF7EC", text: "#176B4F", border: "#5AD9AD" },
                  "Sulawesi": { bg: "#FFE6EF", text: "#993D5E", border: "#FFA6C9" },
                  "Maluku": { bg: "#EBF8DC", text: "#4D6B26", border: "#9ED65D" },
                  "Papua": { bg: "#FDEFC4", text: "#7A5A06", border: "#F6B80F" },
                  "Nusa Tenggara": { bg: "#FDE3D8", text: "#8A3A1E", border: "#F7885E" },
                  "Bali": { bg: "#FBF7DB", text: "#736B1F", border: "#F2E686" },
                  "Jawa": { bg: "#EEE0F5", text: "#5F3878", border: "#C498DD" }
                };

                const islandColor = ISLAND_STYLE_MAP[namaPulau] || { bg: "#F1EFE8", text: "#5F5E5A", border: "#D5D5D5" };
                const preTestStyle = getScoreBadge(item.preTestScore);
                const postTestStyle = getScoreBadge(item.postTestScore);
                const xpValue = item.xp > 0 ? `+${item.xp}` : item.xp;
                
                return (
                  <div key={index} className="history-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1.2fr 1.2fr 1.2fr 1.4fr 1.6fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', alignItems: 'center', minWidth: '900px' }}>
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <span style={{ 
                          background: islandColor.bg, 
                          color: islandColor.text, 
                          border: `1px solid ${islandColor.border}`, 
                          fontSize: '14px', 
                          fontWeight: 600, 
                          padding: '5px 14px', 
                          borderRadius: '999px', 
                          display: 'inline-block', 
                          fontFamily: "'Fredoka One', sans-serif",
                          whiteSpace: 'nowrap'
                        }}>
                          {judulTanpaPulau}{namaPulau ? ` ${namaPulau}` : ''}
                        </span>
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, background: preTestStyle.bg, color: preTestStyle.text }}>
                        {item.preTestScore !== null ? item.preTestScore : "-"}
                      </span>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, background: postTestStyle.bg, color: postTestStyle.text }}>
                        {item.postTestScore !== null ? item.postTestScore : "-"}
                      </span>
                    </div>
                    <div style={{ textAlign: 'center', color: '#5F5E5A', fontWeight: '600' }}>
                      {xpValue}
                    </div>
                    <div style={{ textAlign: 'center', color: '#5F5E5A', fontWeight: '600' }}>{item.time}</div>
                    <div style={{ textAlign: 'center', color: '#5F5E5A', fontWeight: '600' }}>{item.date}</div>
                    <div style={{ textAlign: 'left', fontSize: '0.85rem', color: '#7B4F2E', maxHeight: '50px', overflowY: 'auto', paddingRight: '4px', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
                      {item.essay ? (
                        <button
                          className="buka-esai-btn"
                          onClick={() => {
                            let rawTitleClick = item.storyTitle || "Cerita";
                            if (rawTitleClick.toLowerCase().startsWith("cerita ")) {
                              rawTitleClick = rawTitleClick.substring(7);
                            }
                            const lowerTitleClick = rawTitleClick.toLowerCase();
                            for (const suffix of suffixesToRemove) {
                              if (lowerTitleClick.endsWith(suffix)) {
                                rawTitleClick = rawTitleClick.substring(0, rawTitleClick.length - suffix.length);
                                break;
                              }
                            }
                            const islandNameClick = getIslandNameFromTitle(item.storyTitle);
                            const essayQuestion = getEssayQuestion(islandNameClick);
                            setSelectedEssay({
                              title: rawTitleClick,
                              text: item.essay,
                              question: essayQuestion,
                            })
                          }}
                        >
                          Buka Esai
                        </button>
                      ) : isInteractiveStory ? (
                        <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#8a8a8a' }}>Siswa belum menjawab esai</span>
                      ) : (
                        <span style={{ fontSize: '12px', fontStyle: 'italic', color: '#8a8a8a' }}>Tidak ada esai pada cerita</span>
                      )}
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="history-row" style={{ display: 'flex', justifyContent: 'center', padding: '24px', color: '#7B4F2E', fontStyle: 'italic', minWidth: '900px' }}>
                Belum ada data untuk ditampilkan.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Essay Modal */}
      {selectedEssay && (
        <div className='essay-modal-overlay' onClick={() => setSelectedEssay(null)}>
          <div className='essay-modal-container' onClick={(e) => e.stopPropagation()}>
            <div className='essay-modal-header'>
              <div className='essay-modal-title-wrapper'>
                <h3 className='essay-modal-title'>{selectedEssay.title}</h3>
              </div>
              <button className='essay-modal-close' onClick={() => setSelectedEssay(null)}>
                <X size={24} color="#ffffff" />
              </button>
              <p className='essay-modal-question'>{selectedEssay.question}</p>
            </div>
            <div className='essay-modal-body'>
              <p className='essay-modal-text'>{selectedEssay.text}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ==========================================
// SUB-PANEL: QUIZ BUDAYA
// ==========================================
function QuizAnalyticsPanel({ quizAnalytics, studentInfo }) {
  if (!quizAnalytics) return null;

  const { stats, radarLiteracy, culturalInterest, history, currentBadge } = quizAnalytics;
  const hasRadarData = radarLiteracy && radarLiteracy.length > 0;
  const hasInterestData = culturalInterest && culturalInterest.length > 0;
  console.log('Cultural interest data:', culturalInterest);

  // Synchronize dynamic journey milestone title and emoji with the student portal
  const journey = getJourneyContent(stats.totalXp || 0);
  const isGuru = window.location.pathname.includes('/monitoring-guru');
  const isParent = window.location.pathname.includes('/monitoring-ortu');
  const isEmptyState = (stats.totalXp || 0) === 0;

  const getMaxScore = (level) => {
    const levelStr = String(level).toLowerCase();
    if (levelStr.includes('1')) return 5;
    if (levelStr.includes('2')) return 4;
    if (levelStr.includes('3')) return 3;
    return 0;
  };

  const tableData = (history || []).map((item, index) => {
    const maxScore = getMaxScore(item.level);
    const scorePercent = typeof item.scorePercent === 'number' ? item.scorePercent : parseFloat(item.scorePercent) || 0;
    const rawScore = Math.round((scorePercent / 100) * maxScore);
    
    return {
      id: index,
      island: item.island,
      topic: item.topic,
      level: item.level,
      quizType: item.bloom,
      score: rawScore,
      maxScore: maxScore,
      time: item.time,
      date: item.date
    };
  });

  return (
    <div className="fade-in">
      {/* Stats Cards */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', color: '#7B4F2E', margin: 0 }}>Statistik Quiz Budaya</h2>
          <InfoIcon {...getStatistikQuizInfo(isGuru ? 'guru' : isParent ? 'ortu' : 'siswa')} />
        </div>
        <div className="stats-grid">
          <div className="stat-card green" style={{ borderRadius: '24px' }}>
            <div className="stat-value">{stats.explorationProgress}%</div>
            <div className="stat-label">Eksplorasi Budaya</div>
          </div>
          <div className="stat-card purple" style={{ borderRadius: '24px' }}>
            <div className="stat-value">{stats.totalXp}</div>
            <div className="stat-label">XP Quiz Budaya</div>
          </div>
          <div className="stat-card pink" style={{ borderRadius: '24px', border: '3px solid #d986a1', borderBottom: '6px solid #d986a1', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {isEmptyState && isGuru ? (
              <>
                <div
                  className="stat-value"
                  style={{
                    fontSize: '4rem',
                    opacity: 0.55
                  }}
                >
                  —
                </div>
                <div
                  className="stat-label"
                  style={{
                    marginTop: '8px'
                  }}
                >
                  Peringkat Petualang
                </div>
              </>
            ) : isEmptyState && isParent ? (
              <>
                <div
                  className="stat-value"
                  style={{
                    fontSize: '4rem',
                    lineHeight: 1,
                    marginBottom: '12px'
                  }}
                >
                  -
                </div>
                <div
                  className="stat-label"
                  style={{
                    fontSize: '1.2rem',
                    marginTop: '8px'
                  }}
                >
                  Peringkat Petualang
                </div>
              </>
            ) : (
              <>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div className="stat-value" style={{ fontSize: '2.5rem', display: 'block', marginBottom: '4px' }}>
                    {journey.emoji}
                  </div>
                  <div className="stat-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    {journey.title}
                  </div>
                </div>
                <div className="stat-label" style={{ fontSize: '1.2rem', marginTop: '6px' }}>Peringkat Petualang</div>
              </>
            )}
          </div>
          <div className="stat-card orange" style={{ borderRadius: '24px' }}>
            <div className="stat-value">{stats.averageScore}%</div>
            <div className="stat-label">Rata-rata Nilai Quiz</div>
          </div>
        </div>
      </section>

      {/* Charts Grid */}
      <section className="charts-grid-2" style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        {/* Radar Literacy */}
        <div style={{ border: '3px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white', boxSizing: 'border-box' }}>
          <div>
            <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '4px', marginTop: 0, display: 'flex', alignItems: 'center' }}>
              Kemampuan Kognitif Awal <InfoIcon {...PARENT_INFO.literasiBudaya} />
            </h3>
            <div style={{ fontSize: '12px', color: '#A07040', fontStyle: 'italic', marginBottom: '16px' }}>
              Berdasarkan percobaan pertama siswa
            </div>
          </div>
          <div className="chart-wrapper-responsive" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '280px' }}>
            {hasRadarData && history && history.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarLiteracy}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: '#7B4F2E', fontWeight: 'bold' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 9 }} />
                  <Radar name="Target/Rata-rata Kelas" dataKey="Target" stroke="#B0BEC5" fill="#CFD8DC" fillOpacity={0.6} />
                  <Radar name="Siswa" dataKey="Student" stroke="#4CAF50" fill="#4CAF50" fillOpacity={0.6} />
                  <Legend wrapperStyle={{ fontSize: '11px' }} />
                </RadarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ color: '#955C2E', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center', padding: '40px 0' }}>Belum ada data untuk ditampilkan.</div>
            )}
          </div>
        </div>

        {/* Topic Minat Budaya */}
        <div style={{ border: '3px solid #955C2E', borderRadius: '16px', padding: '20px', backgroundColor: 'white', boxSizing: 'border-box' }}>
          <h3 style={{ color: '#955C2E', fontWeight: 'bold', marginBottom: '20px', marginTop: 0, display: 'flex', alignItems: 'center', gap: '6px' }}>
            Minat Budaya Terbesar <InfoIcon {...PARENT_INFO.minatBudaya} />
          </h3>
          <div className="chart-wrapper-responsive" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '260px' }}>
            {hasInterestData && history && history.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={culturalInterest} margin={{ top: 20, right: 10, left: -20, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 10, fill: '#7B4F2E', fontWeight: 'bold' }} />
                  <YAxis tick={{ fontSize: 9 }} allowDecimals={false} domain={[0, 'auto']} />
                  <Tooltip formatter={(value) => `${value} kali`} />
                  <Legend iconType="circle" wrapperStyle={{ fontSize: '11px' }} />
                  <Bar dataKey="Siswa Ini" fill="#f3a64c" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="Rata-rata Kelas" fill="#955C2E" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div style={{ color: '#955C2E', fontSize: '1rem', fontWeight: 'bold', textAlign: 'center', padding: '40px 0' }}>Belum ada data untuk ditampilkan.</div>
            )}
          </div>
        </div>
      </section>

      {/* Quiz History Table */}
      <section style={{ marginTop: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px', padding: '0 4px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', margin: 0, color: '#7B4F2E' }}>Riwayat Quiz Budaya</h2>
          <span style={{ fontSize: '15px', fontWeight: 600, color: '#7B4F2E' }}>{tableData.length} hasil</span>
        </div>
        <ScoreTable data={tableData} />
      </section>
    </div>
  );
}
