import React, { useEffect, useState } from "react";
import './HeartEmptyPopup.css';

/**
 * HeartEmptyPopup — Supportive popup when user runs out of hearts.
 * Matches the existing Budayana quiz design system.
 */
export default function HeartEmptyPopup({ isOpen, onRetry, onBack, mascotSrc }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const t = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className={`popup-overlay ${isOpen ? 'active' : ''}`} style={{ zIndex: 10000 }}>
      <div className="heart-empty-card">
        {/* Mascot floating above card */}
        <div className="heart-mascot-wrapper">
          <img 
            src={mascotSrc || "/assets/budayana/islands/Buaya.png"} 
            alt="Mascot" 
            className="heart-mascot-img"
          />
        </div>

        {/* Title */}
        <div className="heart-popup-header">
          <span className="heart-icon">💔</span>
          <h2 className="heart-popup-title">Heart Habis!</h2>
        </div>

        {/* Warmup message box */}
        <div className="heart-message-box">
          <p className="heart-message-main">Yahh, heart kamu sudah habis 😢</p>
          <p className="heart-message-sub">
            Yuk coba lagi dari awal ya!<br />
            Semangat penjelajah budaya! 🌟
          </p>
        </div>

        {/* Buttons */}
        <div className="heart-popup-actions">
          <button className="heart-btn-retry" onClick={onRetry}>
            🔄 Ulangi Level
          </button>
          <button className="heart-btn-back" onClick={onBack}>
            ← Kembali ke Topik
          </button>
        </div>
      </div>
    </div>
  );
}
