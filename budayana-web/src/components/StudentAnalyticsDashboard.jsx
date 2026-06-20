import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell
} from 'recharts';
import ScoreTable from "./ScoreTable";
import "../pages/Profile.css";
import "../pages/Results.css";
import InfoIcon from "./InfoIcon";
import { PARENT_INFO } from "./infoContent/parentInfoContent";
import { getJourneyContent } from "../utils/xpJourney";

// Half Pie/Donut Chart Colors
const GAUGE_COLORS = ["#4CAF50", "#E8D9C0"];

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

            {/* Back button (for Teacher dashboard) */}
            {backLink && (
              <Link to={backLink} className="no-wrap-btn student-badge-btn" style={{ backgroundColor: '#955C2E', color: 'white', textDecoration: 'none', transition: 'background-color 0.2s' }}>
                Kembali
              </Link>
            )}
          </div>
        </div>
      </section>

      <hr className="profile-divider" style={{ borderTop: '2px solid #E8D9C0', margin: '24px 0' }} />

      {/* Feature Switcher Tabs */}
      <div className="flex items-center gap-2 md:gap-4 mb-6 pb-4 border-b-2 border-[#d3cbb8]">
        <button
          onClick={() => setActiveTab("ceritaRakyat")}
          className={`px-4 py-2 rounded-xl font-bold text-lg md:text-xl transition-colors border-none cursor-pointer ${
            activeTab === "ceritaRakyat"
              ? "bg-[#955c2e] text-white"
              : "bg-transparent text-[#955c2e] hover:bg-[#955c2e]/10"
          }`}
          style={{ fontFamily: "'Fredoka One', sans-serif" }}
        >
          Cerita Rakyat
        </button>
        <button
          onClick={() => setActiveTab("quizBudaya")}
          className={`px-4 py-2 rounded-xl font-bold text-lg md:text-xl transition-colors border-none cursor-pointer ${
            activeTab === "quizBudaya"
              ? "bg-[#955c2e] text-white"
              : "bg-transparent text-[#955c2e] hover:bg-[#955c2e]/10"
          }`}
          style={{ fontFamily: "'Fredoka One', sans-serif" }}
        >
          Quiz Budaya
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
        <h2 className="results-section-title" style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#7B4F2E' }}>Riwayat Cerita Rakyat</h2>
        <div className="history-table-container" style={{ display: 'flex', flexDirection: 'column', height: '360px', overflowY: 'auto', overflowX: 'auto', position: 'relative' }}>
          <div className="history-header" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr 1.2fr 3fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', backgroundColor: '#955c2e', color: 'white', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10, borderTopLeftRadius: '17px', borderTopRightRadius: '17px', minWidth: '900px' }}>
            <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Judul Cerita</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Pre-Test</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Post-Test</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>XP</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Tanggal</div>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Waktu</div>
            <div style={{ textAlign: 'left', fontWeight: 'bold' }}>Jawaban Esai</div>
          </div>
          <div className="history-body" style={{ overflowY: 'visible', flex: '1 1 0%' }}>
            {history && history.length > 0 ? (
              history.map((item, index) => (
                <div key={index} className="history-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1.2fr 1.2fr 3fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', alignItems: 'center', minWidth: '900px' }}>
                  <div style={{ textAlign: 'left', fontWeight: 'bold', color: '#7B4F2E' }}>{item.storyTitle}</div>
                  <div style={{ textAlign: 'center', color: '#FF9800', fontWeight: 'bold' }}>{item.preTestScore !== null ? item.preTestScore : "-"}</div>
                  <div style={{ textAlign: 'center', color: '#4CAF50', fontWeight: 'bold' }}>{item.postTestScore !== null ? item.postTestScore : "-"}</div>
                  <div style={{ textAlign: 'center', color: '#9C27B0', fontWeight: 'bold' }}>+{item.xp}</div>
                  <div style={{ textAlign: 'center' }}>{item.date}</div>
                  <div style={{ textAlign: 'center' }}>{item.time}</div>
                  <div style={{ textAlign: 'left', fontSize: '0.85rem', color: '#7B4F2E', maxHeight: '50px', overflowY: 'auto', paddingRight: '4px', wordBreak: 'break-word', whiteSpace: 'pre-wrap' }}>
                    {item.essay || <span style={{ color: '#aaa', fontStyle: 'italic' }}>Tidak ada esai</span>}
                  </div>
                </div>
              ))
            ) : (
              <div className="history-row" style={{ display: 'flex', justifyContent: 'center', padding: '24px', color: '#7B4F2E', fontStyle: 'italic', minWidth: '900px' }}>
                Belum ada data untuk ditampilkan.
              </div>
            )}
          </div>
        </div>
      </section>
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

  // Format score in history to make sure it renders beautifully as string or percentage
  const formattedHistory = (history || []).map(item => ({
    ...item,
    score: typeof item.score === 'number' ? `${item.score}%` : item.score,
    scorePercent: typeof item.score === 'number' ? item.score : parseFloat(item.score) || 0
  }));

  return (
    <div className="fade-in">
      {/* Stats Cards */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px', gap: '8px' }}>
          <h2 className="results-section-title" style={{ fontSize: '1.2rem', color: '#7B4F2E', margin: 0 }}>Statistik Quiz Budaya</h2>
          <InfoIcon {...PARENT_INFO.statistikQuiz} />
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
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className="stat-value" style={{ fontSize: '2.5rem', display: 'block', marginBottom: '4px' }}>
                {journey.emoji}
              </div>
              <div className="stat-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {journey.title}
              </div>
               </div>
            <div className="stat-label" style={{ fontSize: '1.2rem', marginTop: '6px' }}>Peringkat Petualang</div>
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
            {hasRadarData && formattedHistory.length > 0 ? (
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
            {hasInterestData && formattedHistory.length > 0 ? (
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
        <h2 className="results-section-title" style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#7B4F2E' }}>Riwayat Quiz Budaya</h2>
        <ScoreTable history={formattedHistory} />
      </section>
    </div>
  );
}
