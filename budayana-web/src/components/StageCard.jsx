import React from "react";
import { Check } from "lucide-react";

export default function StageCard({
  title,
  stage,
  animal,
  locked,
  completed,
  resume,
  scoreLabel,
  scoreValue,
  color,
  onClick
}) {
  const cardColorClass = color || "";

  return (
    <div
      className={`stage-card ${cardColorClass} ${locked ? "locked" : ""}`}
      onClick={locked ? undefined : onClick}
      style={{ cursor: locked ? "not-allowed" : "pointer" }}
    >
      {/* OLD RESPONSIVE STAGE VERSION
      <div className="stage-top">
        <h3 className="stage-title">{title}</h3>
        <div className="stage-badge">{stage}</div>
      </div>
      {(completed || resume || (scoreLabel && scoreValue !== null)) && (
        <div className="stage-status-area">
          {completed && (
            <div className="stage-check">
              <Check size={18} strokeWidth={3} color="#ffffff" />
            </div>
          )}
          {resume && (
            <button className="resume-btn" onClick={(e) => {
              e.stopPropagation();
              if (onClick) onClick();
            }}>
              Lanjutkan
            </button>
          )}
          {scoreLabel && scoreValue !== null && (
            <div className="stage-score-badge">
              {scoreLabel}: {scoreValue}
            </div>
          )}
        </div>
      )}
      <div className="stage-image">
        <img src={animal} alt={title} />
      </div>
      {locked && (
        <div className="stage-lock">
          🔒
        </div>
      )}
      */}

      <div className="stage-top">
        <h3 className="stage-title">{title}</h3>
        <div className="stage-badge">{stage}</div>
      </div>

      {/* Animal Illustration */}
      <div className="stage-image">
        <img src={animal} alt={title} />
      </div>

      {/* Decorative curved wave at the bottom */}
      <div className="stage-wave" />

      {/* Gameplay Status Overlays */}
      {completed && (
        <div className="stage-check">
          <Check size={18} strokeWidth={3} color="#ffffff" />
        </div>
      )}

      {resume && (
        <button className="resume-btn" onClick={(e) => {
          e.stopPropagation();
          if (onClick) onClick();
        }}>
          Lanjutkan
        </button>
      )}

      {scoreLabel && scoreValue !== null && (
        <div className="stage-score-badge">
          {scoreLabel}: {scoreValue}
        </div>
      )}

      {/* Lock Overlay */}
      {locked && (
        <div className="stage-lock-overlay">
          <img
            src="/assets/budayana/islands/padlock.png"
            className="stage-lock-icon"
            alt="locked"
          />
        </div>
      )}
    </div>
  );
}
