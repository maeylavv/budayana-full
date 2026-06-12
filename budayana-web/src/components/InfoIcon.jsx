import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';

const ExampleBox = ({ children }) => (
  <div style={{
    backgroundColor: '#FDE8C0',
    border: '1.5px dashed #C8935A',
    borderRadius: '10px',
    padding: '0.75rem',
    fontSize: '12px',
    marginTop: '12px'
  }}>
    <div style={{ fontWeight: 'bold', marginBottom: '4px', color: '#5C3A1E' }}>Contoh:</div>
    <div style={{ color: '#5C3A1E' }}>{children}</div>
  </div>
);

const NoteTag = ({ children }) => (
  <div style={{
    backgroundColor: 'rgba(245,200,66,0.25)',
    border: '1px solid #F5C842',
    borderRadius: '10px',
    padding: '4px 10px',
    fontSize: '11px',
    marginTop: '12px',
    display: 'inline-block',
    color: '#5C3A1E'
  }}>
    <span style={{ fontWeight: 'bold' }}>Catatan: </span>{children}
  </div>
);

export default function InfoIcon({
  tooltipText,
  modalTitle = "Bagaimana nilai ini dihitung?",
  modalMetricName,
  modalContent,
  exampleBox,
  noteText,
  isLoading = false
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const hoverTimeoutRef = useRef(null);

  // Check screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle body scroll and escape key for modal/sheet
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      const handleEscape = (e) => {
        if (e.key === 'Escape') setIsModalOpen(false);
      };
      window.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isModalOpen]);

  const handleMouseEnter = () => {
    if (isMobile) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setIsHovered(true), 150);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    hoverTimeoutRef.current = setTimeout(() => setIsHovered(false), 100);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsHovered(false);
    setIsModalOpen(true);
  };

  // Shared content for Modal and Bottom Sheet
  const renderContent = () => {
    if (isLoading) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ height: '10px', backgroundColor: '#FDE8C0', borderRadius: '6px', width: '100%', animation: 'pulse 1.2s infinite' }} />
          <div style={{ height: '10px', backgroundColor: '#FDE8C0', borderRadius: '6px', width: '85%', animation: 'pulse 1.2s infinite' }} />
          <div style={{ height: '10px', backgroundColor: '#FDE8C0', borderRadius: '6px', width: '60%', animation: 'pulse 1.2s infinite' }} />
          <style>{`
            @keyframes pulse {
              0% { opacity: 1; }
              50% { opacity: 0.4; }
              100% { opacity: 1; }
            }
          `}</style>
        </div>
      );
    }

    return (
      <>
        <div style={{ fontSize: '13px', color: '#5C3A1E', lineHeight: '1.6' }}>
          {modalContent}
        </div>
        {exampleBox && <ExampleBox>{exampleBox}</ExampleBox>}
        {noteText && <NoteTag>{noteText}</NoteTag>}
      </>
    );
  };

  const renderModal = () => {
    if (!isModalOpen) return null;

    if (isMobile) {
      // Bottom Sheet
      return createPortal(
        <div style={{ position: 'fixed', inset: 0, zIndex: 100 }}>
          <div 
            onClick={() => setIsModalOpen(false)}
            style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(92,53,25,0.35)' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, width: '100%',
            backgroundColor: '#FFF5E6', border: '2.5px solid #C8935A',
            borderRadius: '20px 20px 0 0', padding: '1.5rem',
            boxSizing: 'border-box', maxHeight: '70vh', overflowY: 'auto',
            animation: 'slideUp 280ms ease-out',
            fontFamily: "'Fredoka One', sans-serif"
          }}>
            <div style={{ width: '36px', height: '4px', backgroundColor: '#FDE8C0', borderRadius: '999px', margin: '0 auto 10px auto' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '28px', height: '28px', backgroundColor: '#955C2E', borderRadius: '50%', color: '#FFF5E6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'serif', fontStyle: 'italic', fontWeight: 'bold' }}>i</div>
              <h3 style={{ fontSize: '16px', color: '#5C3A1E', margin: 0 }}>{modalTitle}</h3>
            </div>
            {modalMetricName && (
              <div style={{ fontSize: '12px', color: '#955C2E', borderBottom: '1.5px dashed #FDE8C0', paddingBottom: '8px', marginBottom: '12px' }}>
                Metrik: {modalMetricName}
              </div>
            )}
            {renderContent()}
          </div>
          <style>{`
            @keyframes slideUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
          `}</style>
        </div>,
        document.body
      );
    }

    // Desktop Modal
    return createPortal(
      <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div 
          onClick={() => setIsModalOpen(false)}
          style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(92,53,25,0.35)' }}
        />
        <div style={{
          position: 'relative', backgroundColor: '#FFF5E6', border: '2.5px solid #C8935A',
          borderRadius: '20px', width: '400px', maxWidth: '92vw', padding: '1.5rem',
          boxSizing: 'border-box', animation: 'scaleIn 220ms ease-out',
          fontFamily: "'Fredoka One', sans-serif"
        }}>
          <button 
            onClick={() => setIsModalOpen(false)}
            style={{ position: 'absolute', top: '12px', right: '12px', width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#FDE8C0', border: '1px solid #C8935A', color: '#5C3A1E', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
          >
            <X size={16} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '28px', height: '28px', backgroundColor: '#955C2E', borderRadius: '50%', color: '#FFF5E6', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'serif', fontStyle: 'italic', fontWeight: 'bold', fontSize: '16px' }}>i</div>
            <h3 style={{ fontSize: '16px', color: '#5C3A1E', margin: 0, paddingRight: '20px' }}>{modalTitle}</h3>
          </div>
          {modalMetricName && (
            <div style={{ fontSize: '12px', color: '#955C2E', borderBottom: '1.5px dashed #FDE8C0', paddingBottom: '8px', marginBottom: '12px' }}>
              Metrik: {modalMetricName}
            </div>
          )}
          {renderContent()}
        </div>
        <style>{`
          @keyframes scaleIn { 
            from { transform: scale(0.93); opacity: 0; } 
            to { transform: scale(1); opacity: 1; } 
          }
        `}</style>
      </div>,
      document.body
    );
  };

  return (
    <div 
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', marginLeft: '6px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={handleClick}
        style={{
          width: '22px', height: '22px',
          backgroundColor: isModalOpen ? '#f3a64c' : (isHovered ? '#5C3A1E' : '#955C2E'),
          border: '2.5px solid #FDE8C0', borderRadius: '50%',
          color: '#FFF5E6', fontFamily: 'serif', fontStyle: 'italic', fontWeight: 'bold',
          fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', transition: 'all 150ms ease',
          transform: isHovered && !isModalOpen ? 'scale(1.15)' : 'scale(1)',
          padding: 0, outline: 'none', lineHeight: 1
        }}
        aria-label="Info Perhitungan"
      >
        i
      </button>

      {/* Tooltip Bubble (Desktop Only) */}
      {!isMobile && isHovered && !isModalOpen && tooltipText && (
        <div style={{
          position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)',
          backgroundColor: '#5C3A1E', color: '#FFF5E6', fontSize: '12px', width: 'max-content', maxWidth: '220px',
          borderRadius: '10px', padding: '8px 12px', zIndex: 50, textAlign: 'center',
          animation: 'fadeUp 180ms ease-out', pointerEvents: 'none',
          fontFamily: "'Fredoka One', sans-serif", fontWeight: 'normal', whiteSpace: 'normal', lineHeight: '1.4'
        }}>
          {tooltipText}
          <div style={{
            position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
            borderWidth: '5px', borderStyle: 'solid', borderColor: '#5C3A1E transparent transparent transparent'
          }} />
        </div>
      )}

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translate(-50%, 4px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>

      {renderModal()}
    </div>
  );
}
