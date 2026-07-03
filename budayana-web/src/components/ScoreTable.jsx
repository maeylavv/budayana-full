import React from 'react';



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

const getScoreBadgeStyle = (score, maxScore) => {
  if (!maxScore) return { bg: "#FCEBEB", text: "#791F1F" };
  if (score === maxScore) return { bg: "#EAF3DE", text: "#27500A" }; // Sempurna -> hijau
  if (score === 0) return { bg: "#FCEBEB", text: "#791F1F" }; // 0 -> merah
  return { bg: "#FAEEDA", text: "#633806" }; // Selainnya -> kuning
};

export default function ScoreTable({ data }) {
  return (
    <div className="history-table-container" style={{ display: 'flex', flexDirection: 'column', height: '400px', overflowY: 'auto', overflowX: 'auto', position: 'relative' }}>
      <div className="history-header quiz-history-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr', padding: '16px 24px', backgroundColor: 'rgb(149, 92, 46)', color: 'white', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10, borderTopLeftRadius: '17px', borderTopRightRadius: '17px', minWidth: '850px' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Pulau</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Topik</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Level</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Tipe Kuis</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Skor</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Waktu</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Tanggal</div>
      </div>
      <div className="history-body" style={{ overflowY: 'visible', flex: '1 1 0%' }}>
        {data && data.length > 0 ? (
          data.map((item, index) => {
            const islandStyle = ISLAND_STYLE_MAP[item.island] || { bg: "#F1EFE8", text: "#5F5E5A", border: "#D5D5D5" };
            const scoreStyle = getScoreBadgeStyle(item.score, item.maxScore);
            
            return (
              <div key={item.id || index} className="history-row quiz-history-grid" style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', alignItems: 'center', minWidth: '850px' }}>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '999px', fontSize: '12px', fontWeight: '600', background: islandStyle.bg, color: islandStyle.text, border: `1px solid ${islandStyle.border}` }}>
                    {item.island}
                  </span>
                </div>
                <div style={{ textAlign: 'center', color: '#333', fontWeight: '600' }}>
                  {item.topic}
                </div>
                <div style={{ textAlign: 'center', color: '#5F5E5A', fontWeight: '500' }}>
                  {item.level}
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '6px', fontSize: '12px', fontWeight: '500', background: '#F1EFE8', color: '#5F5E5A' }}>
                    {item.quizType}
                  </span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <span style={{ display: 'inline-block', padding: '3px 10px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', background: scoreStyle.bg, color: scoreStyle.text }}>
                    {item.score}/{item.maxScore}
                  </span>
                </div>
                <div style={{ textAlign: 'center', color: '#5F5E5A', fontWeight: '500' }}>
                  {item.time}
                </div>
                <div style={{ textAlign: 'center', color: '#5F5E5A', fontWeight: '500' }}>
                  {item.date}
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-message" style={{ textAlign: 'center', padding: '20px', minWidth: '850px', color: '#5F5E5A' }}>
            Belum ada riwayat Quiz Budaya. Ayo mulai petualanganmu! 🗺️
          </div>
        )}
      </div>
    </div>
  );
}
