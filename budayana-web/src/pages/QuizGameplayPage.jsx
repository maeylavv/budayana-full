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
  // Track if attempt has been submitted to prevent double-submit on re-render
  const attemptSubmittedRef = useRef(false);
  
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

  const handleSelanjutnya = () => {
    playClick();
    if (safeQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(safeQuestionIndex + 1);
    } else {
      const now = Date.now();
      setEndTime(now);
      setGameState('success');
      // Submit attempt to API (only once per session)
      if (!attemptSubmittedRef.current) {
        attemptSubmittedRef.current = true;
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
          })
          .catch((err) => {
            // Non-blocking: log error but don't interrupt user flow
            console.error('[Quiz] Failed to submit attempt:', err);
          });
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
    if (!endTime) return "0s";
    const diff = Math.floor((endTime - startTime) / 1000);
    const m = Math.floor(diff / 60);
    const s = diff % 60;
    return m > 0 ? `${m}m ${s}s` : `${s}s`;
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
      {gameState === 'literacy' && (
        <div className='gameplay-literacy-view'>
          <div className='literacy-image-container'>
            <img src={literacy.image || ' '} alt='Intro' onError={e => e.target.style.display = 'none'} className='literacy-img' />
          </div>
          <div className='literacy-text-container'>
            <p className='literacy-text'>
              {literacy.text}
            </p>
          </div>
          <div className='literacy-action'>
            <button className='quiz-action-btn primary mt-4' onClick={() => { playClick(); setGameState('question'); }} style={{ marginTop: '2px' }}>
              Lanjut ke Quiz &rarr;
            </button>
          </div>
        </div>
      )}

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
          <div className='quiz-nav-buttons'>
            <button 
              className='quiz-nav-btn back-btn' 
              onClick={handleKembali}
            >
              &larr; Kembali
            </button>

            <div style={{ textAlign: 'center', marginTop: '14px' }}>
              <div className="baca-lagi-wrapper">
                <button
                  className='quiz-nav-btn back-btn'
                  onClick={() => { playClick(); setGameState('literacy'); }}
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
            
            <button 
              className='quiz-nav-btn next-btn' 
              onClick={handleSelanjutnya}
              disabled={answers[safeQuestionIndex]?.isCorrect !== true}
            >
              {safeQuestionIndex === questions.length - 1 ? 'Selesai \u2714' : 'Selanjutnya \u2192'}
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
                  <span style={{ fontSize: '4.5rem', marginBottom: '15px', display: 'block', textAlign: 'center' }}>🎉</span>
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
                  navigate(`/islands/${islandSlug}/quiz?completedTopic=${topicId}&completedLevel=${levelId}`);
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
