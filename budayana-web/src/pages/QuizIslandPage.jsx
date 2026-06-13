import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { ChevronLeft, Lock, Play, Check, Star, Info, Lightbulb } from 'lucide-react';
import { authClient } from '../lib/auth-client';
import { useSound } from '../hooks/useSound';
import { quizAttemptsApi } from '../lib/api';
import './QuizIslandPage.css';

// Static Data definitions
const TOPICS = [
  { id: 'rumah', title: 'Rumah Adat', icon: '🏠', totalXp: 300, color: '#ffb3c6' },
  { id: 'makanan', title: 'Makanan Tradisional', icon: '🍛', totalXp: 300, color: '#97d2ec' },
  { id: 'tarian', title: 'Tarian & Alat Musik', icon: '🎭', totalXp: 300, color: '#a7e4c0' }
];

export default function QuizIslandPage() {
  const navigate = useNavigate();
  const { islandSlug } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id || 'guest';
  const { playClick } = useSound();

  const [entryPopup, setEntryPopup] = useState(null);
  const [completedAttempts, setCompletedAttempts] = useState([]);
  const [loadingAttempts, setLoadingAttempts] = useState(true);
  const [infoPopup, setInfoPopup] = useState(null);
  const [replaySelectionPopup, setReplaySelectionPopup] = useState(null);
  const [replayConfirmPopup, setReplayConfirmPopup] = useState(null);

  // Initialize from Local Storage defensively
  // Key is user-specific to prevent progress sharing between accounts.
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem(`budayana_progress_${userId}_${islandSlug}`);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return parsed;
        }
      } catch (err) {
        console.error('Failed to parse saved progress', err);
      }
    }
    return {
      rumah: { 1: 'unlocked', 2: 'locked', 3: 'locked' },
      makanan: { 1: 'unlocked', 2: 'locked', 3: 'locked' },
      tarian: { 1: 'unlocked', 2: 'locked', 3: 'locked' }
    };
  });

  const fetchAttempts = () => {
    if (userId && userId !== 'guest') {
      quizAttemptsApi.list({ islandSlug, completed: true, limit: 100 })
        .then(res => {
          const items = res.items || [];
          const completedOnes = items.filter(a => a.completed === true);
          setCompletedAttempts(completedOnes);
          setLoadingAttempts(false);
        })
        .catch(err => {
          console.error('Failed to load completed attempts', err);
          setLoadingAttempts(false);
        });
    } else {
      setLoadingAttempts(false);
    }
  };

  useEffect(() => {
    fetchAttempts();
  }, [islandSlug, userId]);

  // Sync to local storage continuously on any progress validation shift
  useEffect(() => {
    localStorage.setItem(`budayana_progress_${userId}_${islandSlug}`, JSON.stringify(progress));
  }, [progress, islandSlug, userId]);

  useEffect(() => {
    const completedTopic = searchParams.get('completedTopic');
    const completedLevel = parseInt(searchParams.get('completedLevel'), 10);
    if (completedTopic && completedLevel) {
      setTimeout(() => {
        let isReplay = false;
        setProgress(prev => {
          const topicProgress = prev[completedTopic];
          if (!topicProgress) return prev;

          // Safeguard: If level is already completed (a replay), do not change progress or unlock next level
          if (topicProgress[completedLevel] === 'completed') {
            isReplay = true;
            return prev;
          }

          const newProgress = { ...topicProgress, [completedLevel]: 'completed' };
          if (completedLevel + 1 <= 3 && newProgress[completedLevel + 1] !== 'completed') {
             newProgress[completedLevel + 1] = 'unlocked';
          }
          return { ...prev, [completedTopic]: newProgress };
        });

        // Trigger completed attempts reload
        fetchAttempts();

        // Clear out the query string to prevent looping if reloaded
        setSearchParams({}, { replace: true });
      }, 0);
    }
  }, [searchParams, setSearchParams, userId, islandSlug, completedAttempts]);

  const handleLevelClick = (topicId, levelId) => {
    playClick();
    if (!levelId) return; // Add this guard for Main Lagi click

    const topicProgress = progress?.[topicId] || {};
    if (topicProgress[levelId] === 'locked') return;

    if (topicProgress[levelId] === 'completed') {
      const completedCount = [1, 2, 3].reduce((acc, lvl) => acc + (topicProgress[lvl] === 'completed' ? 1 : 0), 0);
      if (completedCount < 3) {
        setInfoPopup({ type: 'continue', topicId, levelId });
      } else {
        setInfoPopup({ type: 'replay', topicId, levelId });
      }
    } else {
      setEntryPopup({ topicId, levelId });
    }
  };

  const closeEntryPopup = () => setEntryPopup(null);

  const startQuiz = () => {
    playClick();
    navigate(`/islands/${islandSlug}/quiz/${entryPopup.topicId}/${entryPopup.levelId}`);
  };

  // Convert "sumatra" slug back to Title Case conventionally if we don't fetch full object
  const formatIslandName = (slug) => {
    if (!slug) return '';
    return slug.charAt(0).toUpperCase() + slug.slice(1);
  };

  const islandEmojis = {
    sumatra: '🌴',
    jawa: '🌋',
    kalimantan: '🐒',
    sulawesi: '🏖️',
    bali: '🌺',
    nusa: '🐉',
    maluku: '⛵',
    papua: '🦜'
  };
  const emoji = islandEmojis[islandSlug] || '🌴';

  const mascotByLevel = {
    1: "/assets/budayana/islands/Buaya.png",
    2: "/assets/budayana/islands/Monyet.png",
    3: "/assets/budayana/islands/Harimau.png",
  };

  if (loadingAttempts) {
    return (
      <div className='quiz-detail-page-loading' style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FDF6EC',
        fontFamily: "'Fredoka', sans-serif",
        color: '#5C3A1E'
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🌴</div>
        <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>Memuat kuis...</div>
      </div>
    );
  }

  return (
    <div className='quiz-detail-page'>
      {/* Header */}
      <div className='quiz-detail-header'>
        <button className='quiz-back-btn' onClick={() => { playClick(); navigate('/quiz'); }}>
          <ChevronLeft size={28} color="#000" />
        </button>
        
        <h1 className='quiz-detail-title'>
          {emoji} {formatIslandName(islandSlug)}
        </h1>
        <div style={{ width: '48px' }}></div> {/* Spacer to center the title */}
      </div>

      {/* Notification Banner */}
      <div className='quiz-notif-banner'>
        <div className='quiz-notif-icon'>💡</div>
        <p className='quiz-notif-text'>
          Mulai dari Level 1 dulu ya! Level selanjutnya akan terbuka setelah kamu menyelesaikan level sebelumnya.
        </p>
      </div>

      {/* Scrollable Container for Topics */}
      <div className='quiz-topics-container'>
        {TOPICS.map((topic) => (
          <TopicCard 
            key={topic.id} 
            topic={topic} 
            progressMap={progress?.[topic.id] || {}} 
            completedAttempts={completedAttempts}
            onLevelClick={(levelId) => handleLevelClick(topic.id, levelId)} 
            setReplayConfirmPopup={setReplayConfirmPopup}
          />
        ))}
      </div>

      {/* Mascot Element */}
      <img src="/assets/budayana/islands/Bocah1 1.png" alt="Mascot" className="quiz-mascot" onError={(e) => e.target.style.display='none'} />

      {/* Quiz Entry Popup */}
      {entryPopup && (
        <div className='popup-overlay' onClick={() => { playClick(); closeEntryPopup(); }} style={{zIndex: 9999, backgroundColor: 'rgba(253, 245, 230, 0.95)'}}>
          <div className='quiz-welcome-popup-island' onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Mascot positioned overflowing the top organically like the success views */}
              <img src={mascotByLevel[entryPopup.levelId]} className="welcome-popup-mascot" alt="character" onError={e => e.target.style.display='none'} />
              
              <h2 className='welcome-title' style={{fontSize: '2.2rem', textAlign: 'center', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#51423c', margin: '80px 0 5px 0', lineHeight: '1.2'}}>
                {TOPICS.find(t => t.id === entryPopup.topicId)?.title || ''}
              </h2>
              
              <p style={{fontFamily: 'Fredoka, sans-serif', fontSize: '1.1rem', fontWeight: '500', color: '#a4a4a4', margin: '0 0 25px 0'}}>
                Level {entryPopup.levelId}
              </p>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', backgroundColor: '#ffefcd', color: '#ffa500', padding: '10px 24px', borderRadius: '30px', border: '2px solid #ffbe1a', fontSize: '1.2rem', fontFamily: "'Fredoka', sans-serif", fontWeight: 500, marginBottom: '30px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                ⭐ +100 XP
              </div>
              
              <button 
                className='quiz-action-btn' 
                onClick={startQuiz}
                style={{ 
                  backgroundColor: '#ffaa00', 
                  color: '#fff', 
                  border: 'none', 
                  boxShadow: '0 5px 0px #d99100', 
                  width: '100%', 
                  padding: '16px', 
                  borderRadius: '30px', 
                  fontSize: '1.4rem',
                  fontFamily: 'Fredoka, sans-serif',
                  fontWeight: '700'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
                onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(5px)'; e.currentTarget.style.boxShadow = 'none'; }}
                onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 5px 0px #d99100'; }}
              >
                Mulai!
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Info Popup for Completed Levels */}
      {infoPopup && (() => {
        const isReplayMode = infoPopup.type === 'replay';
        return (
          <div className='popup-overlay' onClick={() => { playClick(); setInfoPopup(null); }} style={{zIndex: 9999, backgroundColor: 'rgba(253, 245, 230, 0.95)'}}>
            <div className='quiz-welcome-popup-island' onClick={(e) => e.stopPropagation()}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
                <span style={{ fontSize: '4rem', marginBottom: '10px' }}>{isReplayMode ? '🏆' : '🚀'}</span>
                
                <h2 className='welcome-title' style={{fontSize: '1.8rem', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#51423c', margin: '10px 0 10px 0', lineHeight: '1.2'}}>
                  {isReplayMode ? 'Level ini sudah kamu taklukkan!' : 'Kamu sudah selesai level ini!'}
                </h2>
                
                <p style={{fontFamily: "'Fredoka', sans-serif", fontSize: '1.1rem', fontWeight: '500', color: '#7B4F2E', margin: '0 0 25px 0', padding: '0 10px'}}>
                  {isReplayMode 
                    ? 'Mau ulang topik ini dari awal? Gunakan tombol Tantang Dirimu Lagi di bawah!' 
                    : 'Yuk lanjut ke level berikutnya,\nkamu hampir sampai! 💪'}
                </p>
                
                <button 
                  className='quiz-action-btn' 
                  onClick={() => { playClick(); setInfoPopup(null); }}
                  style={{ 
                    backgroundColor: '#ffaa00', 
                    color: '#fff', 
                    border: 'none', 
                    boxShadow: '0 5px 0px #d99100', 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '30px', 
                    fontSize: '1.2rem',
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: '700'
                  }}
                >
                  {isReplayMode ? 'Oke, mengerti!' : 'Oke, lanjut!'}
                </button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Replay Confirmation Popup */}
      {replayConfirmPopup && (
        <div className='popup-overlay' onClick={() => { playClick(); setReplayConfirmPopup(null); }} style={{zIndex: 9999, backgroundColor: 'rgba(253, 245, 230, 0.95)'}}>
          <div className='quiz-welcome-popup-island' onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
              <span style={{ fontSize: '4rem', marginBottom: '10px' }}>🕹️</span>
              
              <h2 className='welcome-title' style={{fontSize: '1.8rem', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#51423c', margin: '10px 0 10px 0', lineHeight: '1.2'}}>
                Main lagi yuk!
              </h2>
              
              <p style={{fontFamily: "'Fredoka', sans-serif", fontSize: '1.1rem', fontWeight: '500', color: '#7B4F2E', margin: '0 0 25px 0', padding: '0 10px'}}>
                Topik ini sudah kamu kuasai! Siap tantang dirimu lagi? 💡
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                <button 
                  className='quiz-action-btn' 
                  onClick={() => {
                    playClick();
                    setReplaySelectionPopup(replayConfirmPopup);
                    setReplayConfirmPopup(null);
                  }}
                  style={{ 
                    backgroundColor: '#ffaa00', 
                    color: '#fff', 
                    border: 'none', 
                    boxShadow: '0 5px 0px #d99100', 
                    width: '100%', 
                    padding: '12px', 
                    borderRadius: '30px', 
                    fontSize: '1.2rem',
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: '700'
                  }}
                >
                  Yuk main!
                </button>
                <button
                  onClick={() => { playClick(); setReplayConfirmPopup(null); }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#955C2E',
                    marginTop: '5px',
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: '600',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  Nanti dulu
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Replay Level Selection Popup */}
      {replaySelectionPopup && (
        <div className='popup-overlay' onClick={() => { playClick(); setReplaySelectionPopup(null); }} style={{zIndex: 9999, backgroundColor: 'rgba(253, 245, 230, 0.95)'}}>
          <div className='quiz-welcome-popup-island' onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' }}>
              <img src="/assets/budayana/islands/Monyet.png" className="welcome-popup-mascot" alt="character" onError={e => e.target.style.display='none'} style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
              
              <h2 className='welcome-title' style={{fontSize: '1.8rem', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#51423c', margin: '20px 0 10px 0', lineHeight: '1.2'}}>
                Pilih Level
              </h2>
              
              <p style={{fontFamily: "'Fredoka', sans-serif", fontSize: '1.1rem', fontWeight: '500', color: '#7B4F2E', margin: '0 0 20px 0'}}>
                Pilih level yang ingin dimainkan lagi:
              </p>
              
              <div style={{ display: 'flex', gap: '12px', width: '100%', flexDirection: 'column' }}>
                {[1, 2, 3].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => {
                      playClick();
                      setReplaySelectionPopup(null);
                      setEntryPopup({ topicId: replaySelectionPopup, levelId: lvl });
                    }}
                    className='quiz-action-btn'
                    style={{
                      backgroundColor: lvl === 1 ? '#f3a64c' : lvl === 2 ? '#EF6D54' : '#5e7a41',
                      color: '#fff',
                      border: 'none',
                      boxShadow: `0 4px 0px ${lvl === 1 ? '#c98230' : lvl === 2 ? '#b84c36' : '#41572c'}`,
                      padding: '12px',
                      borderRadius: '30px',
                      fontSize: '1.2rem',
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: '700'
                    }}
                  >
                    Level {lvl}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => { playClick(); setReplaySelectionPopup(null); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#955C2E',
                  marginTop: '15px',
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Nested Components
function TopicCard({ topic, progressMap = {}, completedAttempts = [], onLevelClick, setReplayConfirmPopup }) {
  const completedCount = [1, 2, 3].reduce((acc, lvl) => acc + (progressMap?.[lvl] === 'completed' ? 1 : 0), 0);

  // Compute attempts specifically completed for this topic
  const attemptsForTopic = completedAttempts.filter(a => a.completed === true && a.topicSlug === topic.id);
  const countL1 = attemptsForTopic.filter(a => a.levelId === 1).length;
  const countL2 = attemptsForTopic.filter(a => a.levelId === 2).length;
  const countL3 = attemptsForTopic.filter(a => a.levelId === 3).length;
  const attemptCount = Math.min(countL1, countL2, countL3);

  // Determine progress text & suffix
  let progressSuffix = "";
  if (completedCount === 0) progressSuffix = " · Yuk mulai!";
  else if (completedCount === 1) progressSuffix = " · Kamu bisa!";
  else if (completedCount === 2) progressSuffix = " · Tinggal 1 lagi!";
  else if (completedCount === 3) {
    if (attemptCount <= 1) {
      progressSuffix = " · Keren banget!";
    } else {
      progressSuffix = ` · Sudah dimainkan ${attemptCount} kali`;
    }
  }
  const progressLabel = `${completedCount} dari 3 level selesai${progressSuffix}`;

  const showGreenBanner = completedCount === 3 && attemptCount <= 1;
  const showYellowBanner = completedCount === 3 && attemptCount > 1;

  return (
    <div className='quiz-topic-card'>
      <div className='quiz-topic-header' style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '12px' }}>
        <div className='quiz-topic-icon' style={{ backgroundColor: topic.color }}>
          {topic.icon}
        </div>
        <div className='quiz-topic-info' style={{ flex: 1 }}>
          <h3 style={{ margin: 0, color: '#5C3A1E', fontFamily: 'Fredoka, sans-serif' }}>{topic.title}</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#5C3A1E', opacity: 0.8 }}>3 Level - {topic.totalXp} XP</p>
        </div>
        
        {attemptCount >= 1 && (
          <div className="attempt-badge-wrapper" style={{ alignSelf: 'center' }}>
            <div 
              className="quiz-attempt-badge" 
              style={{ 
                backgroundColor: '#FFF3DC', 
                border: '1.5px solid #E8A94A', 
                borderRadius: '20px', 
                padding: '6px 14px', 
                fontSize: '13px', 
                color: '#A0620A',
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 600,
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              🎯 Percobaan {attemptCount}
            </div>
            
            <div className="attempt-tooltip">
              <div className="tooltip-arrow"></div>
              <div className="tooltip-content">
                Percobaan bertambah setelah kamu selesaikan Level 1, 2, dan 3 
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Progress Bar Container */}
      <div className="quiz-topic-progress-wrapper" style={{ marginTop: '16px', marginBottom: '16px' }}>
        <div className="quiz-progress-bar-bg" style={{ width: '100%', height: '10px', backgroundColor: '#EDD8B8', borderRadius: '5px', overflow: 'hidden' }}>
          <div 
            className="quiz-progress-bar-fill" 
            style={{ 
              width: `${(completedCount / 3) * 100}%`, 
              height: '100%', 
              background: 'linear-gradient(90deg, #F4A229, #E8701A)', 
              borderRadius: '5px',
              transition: 'width 0.3s ease-out'
            }}
          ></div>
        </div>
        <div className="quiz-progress-label" style={{ fontSize: '13px', color: '#5C3A1E', marginTop: '6px', fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>
          {completedCount === 3 ? (
            <span style={{ color: '#5CB87A', fontWeight: 'bold' }}>{progressLabel}</span>
          ) : progressLabel}
        </div>
      </div>

      {/* Conditional Banners */}
      {showGreenBanner && (
        <div 
          className="quiz-topic-banner green-banner"
          style={{
            background: 'linear-gradient(135deg, #EDFAF2, #D0F5E0)',
            border: '2px solid #5CB87A',
            borderRadius: '14px',
            padding: '14px 16px',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            textAlign: 'left'
          }}
        >
          <span style={{ fontSize: '28px' }}>🎊</span>
          <div>
            <h4 style={{ margin: 0, fontSize: '16px', color: '#1E4620', fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Topik selesai!</h4>
            <p style={{ margin: 0, fontSize: '13px', color: '#2E6C35', fontFamily: "'Fredoka', sans-serif" }}>Kamu bisa main lagi kapan saja ✨</p>
          </div>
        </div>
      )}

      {showYellowBanner && (
        <div className="mode-latihan-wrapper" style={{ marginBottom: '15px' }}>
          <div 
            className="quiz-topic-banner yellow-banner"
            style={{
              background: 'linear-gradient(135deg, #FFF8ED, #FFE5C0)',
              border: '2px solid #E8A94A',
              borderRadius: '14px',
              padding: '14px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'left',
              cursor: 'pointer'
            }}
          >
            <span style={{ fontSize: '28px' }}>✨</span>
            <div>
              <h4 style={{ margin: 0, fontSize: '16px', color: '#6A4305', fontFamily: "'Fredoka', sans-serif", fontWeight: 600 }}>Mode Latihan</h4>
              <p style={{ margin: 0, fontSize: '13px', color: '#8F5A07', fontFamily: "'Fredoka', sans-serif" }}>Main lagi untuk mencoba hasil yang lebih bagus!</p>
            </div>
          </div>
          
          <div className="mode-latihan-tooltip">
            <div className="tooltip-arrow"></div>
            <div className="tooltip-content" style={{ padding: '8px 14px', maxWidth: '280px' }}>
              Di Mode Latihan, kamu bisa pilih level mana saja untuk diulang. XP sudah tersimpan ⚡
            </div>
          </div>
        </div>
      )}

      {/* Level List */}
      <div className='quiz-topic-levels'>
        {[1, 2, 3].map((levelId) => (
          <LevelItem 
            key={levelId} 
            levelNumber={levelId} 
            status={progressMap?.[levelId] || 'locked'} 
            topicCompleted={completedCount === 3}
            onClick={() => onLevelClick(levelId)} 
          />
        ))}
      </div>

      {/* Main Lagi Button */}
      {completedCount === 3 && (
        <button
          onClick={() => {
            onLevelClick(null); // triggers sound/effect if any, then opens confirm dialog
            setReplayConfirmPopup(topic.id);
          }}
          className="quiz-main-lagi-btn"
          style={{
            width: '100%',
            backgroundColor: '#F4A229',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            padding: '12px 16px',
            fontSize: '16px',
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: '700',
            letterSpacing: '0.3px',
            cursor: 'pointer',
            marginTop: '15px',
            marginBottom: '5px',
            boxShadow: '0 3px 0px #eaddc9ff',
            transition: 'transform 0.1s, box-shadow 0.1s'
          }}
          onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(3px)'; e.currentTarget.style.boxShadow = 'none'; }}
          onMouseUp={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 3px 0px #C47A10'; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 3px 0px #C47A10'; }}
        >
          🔁 Tantang Dirimu Lagi!
        </button>
      )}
    </div>
  );
}

function LevelItem({ levelNumber, status = 'locked', topicCompleted, onClick }) {
  const isLocked = status === 'locked';
  const isCompleted = status === 'completed';
  const isUnlocked = status === 'unlocked';

  let IconComponent = null;
  let iconColor = "";

  if (isLocked) {
    IconComponent = Lock;
    iconColor = "#fff";
  } else if (isCompleted) {
    IconComponent = Check;
    iconColor = "#fff";
  } else {
    IconComponent = Play;
    iconColor = "#fff"; 
  }

  // Determine XP labels and styles based on conditions
  let xpText = "100 XP";
  let xpColor = "#D4822A";
  let xpOpacity = 1;

  if (isLocked) {
    xpText = "100 XP";
    xpColor = "#B0A090";
    xpOpacity = 0.5;
  } else if (isCompleted) {
    if (topicCompleted) {
      xpText = "✓ selesai";
      xpColor = "#5CB87A";
    } else {
      xpText = "+100 XP ✓";
      xpColor = "#5CB87A";
    }
  } else {
    xpText = "100 XP";
    xpColor = "#D4822A";
  }

  let itemStyle = {};
  let iconWrapperStyle = {};
  let labelStyle = {};

  if (isLocked) {
    itemStyle = {
      backgroundColor: '#F5F0EB',
      borderColor: '#DDD0C0',
      borderWidth: '1.5px',
      borderStyle: 'solid',
      opacity: 0.7,
      cursor: 'not-allowed'
    };
    iconWrapperStyle = {
      backgroundColor: '#C4B8AB',
      borderRadius: '50%',
      padding: '6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '32px',
      height: '32px',
      boxSizing: 'border-box'
    };
    labelStyle = {
      color: '#A09080'
    };
  } else if (isCompleted) {
    itemStyle = {
      backgroundColor: '#e6f7e6',
      borderColor: '#40ba39',
      borderWidth: '2px',
      borderStyle: 'solid',
      cursor: 'pointer'
    };
    iconWrapperStyle = {
      backgroundColor: '#40ba39',
      borderRadius: '50%',
      padding: '6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '32px',
      height: '32px',
      boxSizing: 'border-box'
    };
    labelStyle = {
      color: '#5C3A1E'
    };
  } else {
    // Unlocked
    itemStyle = {
      backgroundColor: '#FFF3E0',
      borderColor: '#F4A229',
      borderWidth: '2px',
      borderStyle: 'solid',
      cursor: 'pointer'
    };
    iconWrapperStyle = {
      backgroundColor: '#F4A229',
      borderRadius: '50%',
      padding: '6px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '32px',
      height: '32px',
      boxSizing: 'border-box'
    };
    labelStyle = {
      color: '#5C3A1E'
    };
  }

  return (
    <div 
      className={`quiz-level-item ${status}`} 
      style={itemStyle}
      onClick={isLocked ? undefined : onClick}
    >
      <div className={`quiz-level-icon-wrapper ${status}`} style={iconWrapperStyle}>
        <IconComponent size={16} color={iconColor} strokeWidth={3} fill={isUnlocked ? '#fff' : 'none'} />
      </div>
      
      <div className='quiz-level-label' style={labelStyle}>
        Level {levelNumber}
      </div>

      <div 
        className={`quiz-level-xp ${status}`}
        style={{ color: xpColor, opacity: xpOpacity, fontWeight: 'bold' }}
      >
        {xpText}
      </div>
    </div>
  );
}
