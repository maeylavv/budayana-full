import { ISLAND_COLORS, TOPIC_ICONS } from "../lib/dummyData";

const LOCAL_TOPIC_ICONS = {
  "Makanan Tradisional": "🍲",
  "Rumah Adat": "🏠",
  "Tarian & Alat Musik": "🎵",
  "Senjata Tradisional": "⚔️",
  "Pakaian Adat": "👚"
};

export default function ScoreTable({ history }) {
  const getBloomColor = (bloom) => {
    if (bloom === "Ingatan") return "text-blue-600 bg-blue-50";
    if (bloom === "Analisis") return "text-purple-600 bg-purple-50";
    if (bloom === "Pendapat") return "text-red-600 bg-red-50";
    return "text-gray-600 bg-gray-50";
  };

  const getScoreColor = (score, maxScore) => {
    if (!maxScore) return '#8C8C8C';
    const percent = (score / maxScore) * 100;
    if (percent >= 80) return '#32B65E';
    if (percent >= 50) return '#F2B84B';
    return '#E64B4B';
  };

  const getMaxScore = (level) => {
    const levelStr = String(level).toLowerCase();
    if (levelStr.includes('1')) return 5;
    if (levelStr.includes('2')) return 4;
    if (levelStr.includes('3')) return 3;
    return 0; // fallback
  };

  return (
    <div className="history-table-container" style={{ display: 'flex', flexDirection: 'column', height: '400px', overflowY: 'auto', overflowX: 'auto', position: 'relative' }}>
      <div className="history-header" style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', backgroundColor: '#955c2e', color: 'white', alignItems: 'center', position: 'sticky', top: 0, zIndex: 10, borderTopLeftRadius: '17px', borderTopRightRadius: '17px', minWidth: '850px' }}>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Pulau</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Topik</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Level</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Tipe Kuis</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Skor</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Waktu</div>
        <div style={{ textAlign: 'center', fontWeight: 'bold' }}>Tanggal</div>
      </div>
      <div className="history-body" style={{ overflowY: 'visible', flex: '1 1 0%' }}>
        {history.length > 0 ? (
          history.map((item, index) => {
            const rawScore = item.scorePercent; // The numerical score
            const maxScore = getMaxScore(item.level);

            return (
              <div key={index} className="history-row" style={{ display: 'grid', gridTemplateColumns: '1.5fr 2fr 1fr 1fr 1fr 1fr 1.5fr', padding: '16px 24px', borderBottom: '1px solid #E8D9C0', alignItems: 'center', minWidth: '850px' }}>
                <div style={{ textAlign: 'center' }}>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${ISLAND_COLORS[item.island] || 'bg-gray-100'}`}>
                    {item.island}
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <span>{LOCAL_TOPIC_ICONS[item.topic] || TOPIC_ICONS[item.topic] || "📝"}</span>
                  <span>{item.topic}</span>
                </div>
                <div style={{ textAlign: 'center' }}>{item.level}</div>
                <div style={{ textAlign: 'center' }}>
                  <span className={`px-2 py-1 rounded-md text-xs font-bold ${getBloomColor(item.bloom)}`}>
                    {item.bloom}
                  </span>
                </div>
                <div
                  className="quiz-score"
                  style={{
                    textAlign: 'center',
                    color: getScoreColor(rawScore, maxScore),
                    fontWeight: '700'
                  }}
                >
                  {rawScore}/{maxScore}
                </div>
                <div style={{ textAlign: 'center' }}>{item.time}</div>
                <div style={{ textAlign: 'center' }}>{item.date}</div>
              </div>
            );
          })
        ) : (
          <div className="empty-message" style={{ textAlign: 'center', padding: '20px', minWidth: '850px' }}>
            Belum ada riwayat pengerjaan.
          </div>
        )}
      </div>
    </div>
  );
}
