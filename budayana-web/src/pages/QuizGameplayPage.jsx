import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { QUIZ_DATA } from '../data/quizData';
import { authClient } from '../lib/auth-client';
import { quizAttemptsApi } from '../lib/api';
import QuestionRenderer from '../components/quiz/QuestionRenderer';
import ProgressBar from '../components/quiz/ProgressBar';
import HeartEmptyPopup from '../components/quiz/HeartEmptyPopup';
import confetti from 'canvas-confetti';
import { useSound } from '../hooks/useSound';
import { getLiteracyPages, highlightKeywords } from '../utils/literacyParser';
import './QuizGameplayPage.css';

export default function QuizGameplayPage() {
  const { playClick, playCorrect, playWrong, playTada } = useSound();
  const navigate = useNavigate();
  const { islandSlug, topicId, levelId } = useParams();
  const { data: session } = authClient.useSession();
  const userId = session?.user?.id || 'guest';

  // User-specific key prevents different accounts sharing the same resume state.
  const STORAGE_KEY = `budayana_quiz_state_${userId}_${islandSlug}_${topicId}_${levelId}`;

  // Helper to load saved state synchronously
  const getSavedValue = (key, defaultValue) => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed[key] !== undefined ? parsed[key] : defaultValue;
      }
    } catch (e) {
      console.error("Failed to load quiz state", e);
    }
    return defaultValue;
  };

  const [gameState, setGameState] = useState(() => getSavedValue('gameState', 'literacy'));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => getSavedValue('currentQuestionIndex', 0));
  const [hearts, setHearts] = useState(() => getSavedValue('hearts', 5));
  const [startTime, setStartTime] = useState(() => getSavedValue('startTime', Date.now()));
  const [endTime, setEndTime] = useState(() => getSavedValue('endTime', 0));
  const [answers, setAnswers] = useState(() => getSavedValue('answers', {}));
  const [showQuitPopup, setShowQuitPopup] = useState(false);
  const [showHeartPopup, setShowHeartPopup] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(() => getSavedValue('wrongAttempts', 0));
  const [attemptResult, setAttemptResult] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [literacyPageIndex, setLiteracyPageIndex] = useState(0);
  
  // Track if attempt has been submitted to prevent double-submit on re-render
  const attemptSubmittedRef = useRef(false);

  // Reset literacy page when level changes
  useEffect(() => {
    setLiteracyPageIndex(0);
  }, [islandSlug, topicId, levelId]);
  
  // Save state whenever relevant values change
  useEffect(() => {
    const stateToSave = {
      gameState,
      currentQuestionIndex,
      hearts,
      startTime,
      endTime,
      answers,
      wrongAttempts
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stateToSave));
  }, [STORAGE_KEY, gameState, currentQuestionIndex, hearts, startTime, endTime, answers, wrongAttempts]);

  // Trigger confetti when game state changes to success
  useEffect(() => {
    if (gameState === 'success') {
      playTada();
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        zIndex: 10000,
        colors: ['#ffaa00', '#23a0ba', '#e05fa3', '#51423c', '#ffefcd']
      });
    }
  }, [gameState]);

  // Load quiz data safely with defensive checks
  const quizConfig = QUIZ_DATA?.[islandSlug]?.[topicId]?.[levelId];

  // Guard clause for missing configuration
  if (!quizConfig || !quizConfig.questions || quizConfig.questions.length === 0) {
    return (
      <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'Fredoka One', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <h2 style={{ color: '#51423c' }}>Mohon maaf, konten kuis ini belum tersedia atau gagal dimuat!</h2>
        <button className='quiz-action-btn primary' onClick={() => { playClick(); navigate(`/islands/${islandSlug}/quiz`); }}>Kembali ke Topik</button>
      </div>
    );
  }

  const { literacy = {}, questions = [] } = quizConfig;

  // Defensive check: ensure currentQuestionIndex is always within valid range
  const safeQuestionIndex = Math.max(0, Math.min(currentQuestionIndex, questions.length - 1));
  const currentQuestion = questions[safeQuestionIndex] || {};

  // Unified Handler
  const handleUnifiedAnswer = (answerData, isCorrect, lockedZones) => {
    // DRAFT update (null means partial progress, don't trigger heart deduction or review state)
    if (isCorrect === null) {
      setAnswers(prev => ({
        ...prev,
        [safeQuestionIndex]: { 
           ...(prev[safeQuestionIndex] || {}), 
           placements: answerData,
           lockedZones: lockedZones
        }
      }));
      return;
    }

    // Ignore double clicks if currently reviewing failure state unconditionally
    if (gameState === 'wrong') return;
  
    const currentQAnswers = answers[safeQuestionIndex] || {};

    if (isCorrect) {
      playCorrect();
      setAnswers(prev => ({
        ...prev,
        [safeQuestionIndex]: { 
           ...currentQAnswers, 
           isCorrect: true, 
           correctIndex: currentQuestion?.type?.includes('choice') || currentQuestion?.type === 'picture_selection' ? answerData : undefined,
           placements: (!currentQuestion?.type?.includes('choice') && currentQuestion?.type !== 'picture_selection') ? answerData : undefined,
           lockedZones: lockedZones
        }
      }));
    } else {
      playWrong();
      setAnswers(prev => ({
        ...prev,
        [safeQuestionIndex]: { 
           ...currentQAnswers, 
           wrongIndices: currentQuestion?.type?.includes('choice') || currentQuestion?.type === 'picture_selection' ? [...(currentQAnswers.wrongIndices || []), answerData] : undefined,
           placements: (!currentQuestion?.type?.includes('choice') && currentQuestion?.type !== 'picture_selection') ? answerData : currentQAnswers.placements,
           lockedZones: lockedZones
        }
      }));

      // Deduct hearts upon error explicitly tracking parameters
      setWrongAttempts(curr => curr + 1);
      setHearts(curr => {
        const newHearts = curr - 1;
        if (newHearts <= 0) {
          setShowHeartPopup(true);
        } else {
          setGameState('wrong');
        }
        return newHearts;
      });
    }
  };

  const handleKembali = () => {
    playClick();
    if (safeQuestionIndex > 0) {
      setCurrentQuestionIndex(safeQuestionIndex - 1);
    } else {
      // On the first question, go back to literacy mode
      setGameState('literacy');
    }
  };

  const updateProgressLocally = () => {
    try {
      const progressKey = `budayana_progress_${userId}_${islandSlug}`;
      const localSaved = localStorage.getItem(progressKey);
      let localProgress = {
        rumah: { 1: 'unlocked', 2: 'locked', 3: 'locked' },
        makanan: { 1: 'unlocked', 2: 'locked', 3: 'locked' },
        tarian: { 1: 'unlocked', 2: 'locked', 3: 'locked' }
      };
      if (localSaved) {
        const parsed = JSON.parse(localSaved);
        if (parsed && typeof parsed === 'object') {
          localProgress = parsed;
        }
      }
      const topicProgress = localProgress[topicId] || { 1: 'unlocked', 2: 'locked', 3: 'locked' };
      
      const previousCompletedCount = [1, 2, 3].reduce((acc, lvl) => acc + (topicProgress[lvl] === 'completed' ? 1 : 0), 0);

      // Update only if not already completed (to avoid messing up replay mode)
      if (topicProgress[levelId] !== 'completed') {
        topicProgress[levelId] = 'completed';
        const nextLvl = parseInt(levelId, 10) + 1;
        if (nextLvl <= 3 && topicProgress[nextLvl] !== 'completed') {
          topicProgress[nextLvl] = 'unlocked';
        }
        localProgress[topicId] = topicProgress;
        localStorage.setItem(progressKey, JSON.stringify(localProgress));

        const afterUpdateCount = [1, 2, 3].reduce((acc, lvl) => acc + (topicProgress[lvl] === 'completed' ? 1 : 0), 0);
        if (afterUpdateCount === 3 && previousCompletedCount < 3) {
          sessionStorage.setItem(`budayana_just_completed_${userId}_${islandSlug}_${topicId}`, 'true');
        }
      }
    } catch (e) {
      console.error('Failed to update progress locally', e);
    }
  };

  const submitQuizResult = (now) => {
    setIsSubmitting(true);
    setSubmitError(null);
    const durationSeconds = Math.floor((now - startTime) / 1000);
    const finalScore = Math.max(0, questions.length - wrongAttempts);
    const finalXP = questions.reduce((acc, q) => acc + q.xp, 0);

    quizAttemptsApi
      .submit({
        islandSlug,
        topicSlug: topicId,
        levelId: parseInt(levelId, 10),
        totalTimeSeconds: durationSeconds,
        xpGained: finalXP,
        score: finalScore,
        totalQuestions: questions.length,
        wrongAttempts,
        heartsLeft: hearts,
      })
      .then((res) => {
        setAttemptResult(res);
        updateProgressLocally();
        setIsSubmitting(false);
        setGameState('success');
      })
      .catch((err) => {
        console.error('[Quiz] Failed to submit attempt:', err);
        setIsSubmitting(false);
        setSubmitError(err.message || 'Koneksi terputus atau server bermasalah');
      });
  };

  const retrySubmit = () => {
    submitQuizResult(endTime || Date.now());
  };

  const handleSelanjutnya = () => {
    playClick();
    if (safeQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(safeQuestionIndex + 1);
    } else {
      const now = Date.now();
      setEndTime(now);
      
      if (userId === 'guest') {
        updateProgressLocally();
        setGameState('success');
      } else {
        submitQuizResult(now);
      }
    }
  };

  const handleRetry = () => {
    playClick();
    // For multiple-choice: clear wrong highlights. For DragDrop: keep placements
    // so the DragDropQuestion useEffect restores locked correct zones.
    setAnswers(prev => {
      const updated = { ...prev };
      if (updated[safeQuestionIndex]) {
        updated[safeQuestionIndex] = {
          ...updated[safeQuestionIndex],
          wrongIndices: [],
          // Keep placements so DragDrop re-locks correct ones and removes wrong ones
        };
      }
      return updated;
    });
    setGameState('question');
  };

  const handleGameOverBack = () => {
    localStorage.removeItem(STORAGE_KEY);
    navigate(`/islands/${islandSlug}/quiz`);
  };

  const handleResetLevel = () => {
    localStorage.removeItem(STORAGE_KEY);
    setGameState('literacy');
    setCurrentQuestionIndex(0);
    setHearts(5);
    setStartTime(Date.now());
    setEndTime(0);
    setAnswers({});
    setWrongAttempts(0);
    setShowHeartPopup(false);
  };

  // Helper formatting for Results time
  const getFormattedTime = () => {
    if (!endTime) return "0d";
    const diff = Math.floor((endTime - startTime) / 1000);
    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);
    const s = diff % 60;
    
    if (h > 0) {
      return `${h}j ${m}m`;
    }
    return m > 0 ? `${m}m ${s}d` : `${s}d`;
  };

  const totalXP = questions.reduce((acc, q) => acc + q.xp, 0);

  // Score: total questions minus cumulative wrong attempts, floored at 0
  const score = Math.max(0, questions.length - wrongAttempts);

  const mascotByLevel = {
    '1': '/assets/budayana/islands/Buaya.png',
    '2': '/assets/budayana/islands/Monyet.png',
    '3': '/assets/budayana/islands/Harimau.png',
  };

  return (
    <div className='gameplay-page'>
      {/* Dynamic Header Tracker passed explicitly */}
      <ProgressBar 
        currentQuestionIndex={safeQuestionIndex}
        totalQuestions={questions.length}
        hearts={hearts}
        gameState={gameState}
        onBack={() => { playClick(); setShowQuitPopup(true); }}
        islandSlug={islandSlug}
        levelId={levelId}
      />

      {/* Views */}
      {isSubmitting && (
        <div className='popup-overlay' style={{ zIndex: 10000 }}>
          <div className='quiz-detail-page-loading' style={{
            backgroundColor: 'rgba(253, 246, 236, 0.95)',
            padding: '40px',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: "'Fredoka', sans-serif",
            color: '#5C3A1E'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '16px', animation: 'bounce 1.2s infinite' }}>🚀</div>
            <div style={{ fontSize: '1.4rem', fontWeight: 600, fontFamily: "'Fredoka One', 'Fredoka', sans-serif" }}>Mengirim hasil kuis...</div>
            <p style={{ marginTop: '10px', fontSize: '0.95rem', color: '#8F5A07' }}>Mohon jangan tutup halaman ini ya ✨</p>
          </div>
        </div>
      )}

      {submitError && (
        <div className='popup-overlay' style={{ zIndex: 10000 }}>
          <div className='quit-feedback-card' style={{ border: '2px solid #E27C7C', padding: '30px', maxWidth: '400px' }}>
            <span style={{ fontSize: '4rem', marginBottom: '15px', display: 'block', textAlign: 'center' }}>⚠️</span>
            <p className='quit-title' style={{ color: '#C93B3B', fontFamily: "'Fredoka One', 'Fredoka', sans-serif", fontSize: '1.6rem', marginBottom: '10px' }}>
              Gagal Mengirim Hasil
            </p>
            <p style={{ fontFamily: "'Fredoka', sans-serif", fontSize: '1.05rem', fontWeight: '500', color: '#7B4F2E', margin: '0 0 25px 0', padding: '0 10px', lineHeight: '1.4' }}>
              Koneksi internet terputus atau server sedang bermasalah. Jangan khawatir, progres bermainmu tetap aman! Silakan coba kirim lagi atau simpan draf untuk dikirim nanti.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
              <button 
                className='btn-continue-pill' 
                onClick={() => { playClick(); retrySubmit(); }}
                style={{ backgroundColor: '#ffaa00', color: '#fff', border: 'none', boxShadow: '0 4px 0px #d99100', width: '100%', padding: '12px', borderRadius: '30px', fontSize: '1.2rem', fontFamily: "'Fredoka', sans-serif", fontWeight: '700' }}
              >
                Coba Kirim Lagi
              </button>
              <button
                onClick={() => {
                  playClick();
                  navigate(`/islands/${islandSlug}/quiz`);
                }}
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
                Simpan Draf & Keluar
              </button>
            </div>
          </div>
        </div>
      )}

      {gameState === 'literacy' && (() => {
        const pages = getLiteracyPages(literacy.text || '');
        const currentPage = pages[literacyPageIndex] || '';
        
        return (
          <div className='gameplay-literacy-view'>
            <div className='literacy-image-container'>
              <img src={literacy.image || ' '} alt='Intro' onError={e => e.target.style.display = 'none'} className='literacy-img' />
            </div>
            
            {pages.length > 1 && (
              <div className="literacy-story-indicators">
                {pages.map((_, idx) => (
                  <div 
                    key={idx} 
                    className={`story-indicator-bar ${idx < literacyPageIndex ? 'completed' : idx === literacyPageIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            )}

            <div className='literacy-text-container'>
              <p className='literacy-text'>
                {highlightKeywords(currentPage)}
              </p>
            </div>
            
            <div className='literacy-navigation'>
              <button 
                className='literacy-nav-btn secondary' 
                onClick={() => { playClick(); setLiteracyPageIndex(prev => Math.max(0, prev - 1)); }}
                disabled={literacyPageIndex === 0}
                style={{ visibility: literacyPageIndex === 0 ? 'hidden' : 'visible' }}
              >
                <span aria-hidden="true">&larr;</span>
                <span>Sebelumnya</span>
              </button>
              
              {literacyPageIndex < pages.length - 1 ? (
                <button 
                  className='literacy-nav-btn primary' 
                  onClick={() => { playClick(); setLiteracyPageIndex(prev => Math.min(pages.length - 1, prev + 1)); }}
                >
                  <span>Selanjutnya</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              ) : (
                <button className='literacy-nav-btn primary' onClick={() => { playClick(); setGameState('question'); }}>
                  <span>Lanjut ke Quiz</span>
                  <span aria-hidden="true">&rarr;</span>
                </button>
              )}
            </div>
          </div>
        );
      })()}

      {(gameState === 'question' || gameState === 'wrong') && (
        <div className={`gameplay-question-view${levelId === '3' ? ' level-3' : levelId === '2' ? ' level-2' : ''}`}>
          <div className='question-character-bubble'>
            {(() => {
              const mascots = [
                '/assets/budayana/islands/Monyet.png',
                '/assets/budayana/islands/Harimau.png',
                '/assets/budayana/islands/Monyet.png',
                '/assets/budayana/islands/Badak.png',
                '/assets/budayana/islands/Buaya.png',
              ];
              const src = mascots[currentQuestionIndex % mascots.length];
              return <img src={src} alt='Mascot' className='mascot-img' onError={e => e.target.style.display = 'none'} />;
            })()}
            <div className='speech-bubble'>
              {currentQuestion.text}
            </div>
          </div>

          {currentQuestion.type === 'drag_drop_sentence' && (
            <div className='drag-drop-helper-text'>
              Petunjuk: Susun minimal 4 kata menjadi kalimat yang lengkap. Mulailah dengan kata seperti: Ayo..., Mari..., atau Yuk...
            </div>
          )}

          <QuestionRenderer 
            key={safeQuestionIndex}
            question={currentQuestion}
            answersMapping={answers[safeQuestionIndex] || {}}
            onAnswer={handleUnifiedAnswer}
          />

          {/* Navigation logic placed identically at the bottom under the blue border boundary! */}
          <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>
            <div className="baca-lagi-wrapper">
              <button
                className='baca-lagi-btn'
                onClick={() => { playClick(); setLiteracyPageIndex(0); setGameState('literacy'); }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#1b8599',
                  fontSize: '1rem',
                  fontFamily: "'Fredoka One', 'Fredoka', sans-serif",
                  fontWeight: 600,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                  padding: 0,
                }}
              >
                📖 Lupa? Baca lagi!
              </button>
              <div className="baca-lagi-tooltip">
                <div className="tooltip-content">
                  Kembali ke cerita di awal untuk cari petunjuk jawaban! 🕵️
                </div>
                <div className="tooltip-arrow-down"></div>
              </div>
            </div>
          </div>
          
          <div className='quiz-nav-buttons'>
            <button 
              className='quiz-nav-btn back-btn' 
              onClick={handleKembali}
            >
              <span aria-hidden="true">&larr;</span>
              <span>Kembali</span>
            </button>
            
            <button 
              className='quiz-nav-btn next-btn' 
              onClick={handleSelanjutnya}
              disabled={answers[safeQuestionIndex]?.isCorrect !== true}
            >
              {safeQuestionIndex === questions.length - 1 ? (
                <>
                  <span>Selesai</span>
                  <span aria-hidden="true">&#10004;</span>
                </>
              ) : (
                <>
                  <span>Selanjutnya</span>
                  <span aria-hidden="true">&rarr;</span>
                </>
              )}
            </button>
          </div>
          {/* Persistent link to jump back to literacy from any question */}
          
        </div>
      )}

      {/* Wrong answer overlay */}
      {gameState === 'wrong' && (
        <div className='popup-overlay' style={{ zIndex: 999 }}>
          <div className='wrong-feedback-card'>
            <img
              src='/assets/budayana/islands/bocah flip.png'
              alt='Wrong'
              className='wrong-mascot-img'
              onError={e => e.target.style.display = 'none'}
            />
            <p className='feedback-title'>
              Uh oh... jawabannya kurang tepat,<br />ayo coba lagi! Kamu pasti bisa!
            </p>
            <button className='btn-retry-pill' onClick={handleRetry}>
              Siap, coba lagi
            </button>
          </div>
        </div>
      )}

      {/* Heart Empty supportive popup */}
      <HeartEmptyPopup 
        isOpen={showHeartPopup}
        mascotSrc={mascotByLevel[levelId]}
        onRetry={() => { playClick(); handleResetLevel(); }}
        onBack={() => { playClick(); handleGameOverBack(); }}
      />

      {/* Quit confirmation popup */}
      {showQuitPopup && (
        <div className='popup-overlay' style={{ zIndex: 1000 }}>
          <div className='quit-feedback-card'>
            <img
              src='/assets/budayana/islands/image 90.png'
              alt='Quit'
              className='quit-mascot-img'
              onError={e => e.target.style.display = 'none'}
            />
            <p className='quit-title'>
              Kamu yakin mau keluar?
            </p>
            <button className='btn-continue-pill' onClick={() => { playClick(); setShowQuitPopup(false); }}>
              Lanjutkan Belajar
            </button>
            <button className='btn-quit-link' onClick={() => {
              playClick();
              localStorage.removeItem(STORAGE_KEY);
              navigate(`/islands/${islandSlug}/quiz`);
            }}>
              Akhiri Sesi
            </button>
          </div>
        </div>
      )}

      {gameState === 'success' && (() => {
        const isReplayMode = attemptResult ? (attemptResult.isReplay || attemptResult.xpGained === 0) : false;
        return (
          <div className='popup-overlay success' style={{ zIndex: 999 }}>
            <div className='success-feedback-card'>
              {isReplayMode ? (
                <>
                  <span style={{ fontSize: '4.5rem', transform: 'translateY(14px)', display: 'block', textAlign: 'center' }}>🎉</span>
                  <h1 className='success-title'>Keren banget!</h1>
                  <p className='success-subtitle'>
                    XP kamu sudah terkumpul sebelumnya 🌟<br />Tapi semangat kamu main lagi itu yang paling penting!
                  </p>
                </>
              ) : (
                <>
                  <img 
                    src={mascotByLevel[levelId] || '/assets/budayana/islands/Buaya.png'} 
                    alt='Mascot' 
                    className='mascot-img-success' 
                    onError={e => e.target.style.display = 'none'} 
                  />      
                  {/* Level-based title & subtitle */}
                  {levelId === '1' && <>
                    <h1 className='success-title'>Pengamat Budaya</h1>
                    <p className='success-subtitle'>Hebat! Kamu sudah jadi Pengamat Budaya!</p>
                  </>}
                  {levelId === '2' && <>
                    <h1 className='success-title'>Penjelajah Budaya 🧭</h1>
                    <p className='success-subtitle'>Luar biasa! Kamu sekarang seorang penjelajah!</p>
                  </>}
                  {levelId === '3' && <>
                    <h1 className='success-title'>Pakar Budaya 🏆</h1>
                    <p className='success-subtitle'>Selamat! Kamu telah menjadi Pakar Budaya!</p>
                  </>}
                </>
              )}

              <div className='success-stats'>
                {!isReplayMode && (
                  <div className='stat-box xp-box'>
                    <h2>+{totalXP}</h2>
                    <p>XP Didapat</p>
                  </div>
                )}
                <div className='stat-box score-box'>
                  <h2>{score}/{questions.length}</h2>
                  <p>Skor</p>
                </div>
                <div className='stat-box time-box'>
                  <h2>{getFormattedTime()}</h2>
                  <p>Waktu</p>
                </div>
              </div>

              <div className='success-actions'>
                <button className='btn-pill-primary' onClick={() => {
                  playClick();
                  localStorage.removeItem(STORAGE_KEY);
                  navigate(`/islands/${islandSlug}/quiz`);
                }}>
                  ← Kembali ke Topik
                </button>
                <button className='btn-pill-secondary' onClick={() => {
                  playClick();
                  localStorage.removeItem(STORAGE_KEY);
                  navigate('/quiz');
                }}>
                  🗺️ Peta Pulau
                </button>
              </div>
            </div>
          </div>
        );
      })()}  
    </div>
  );
}
