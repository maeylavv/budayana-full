import React, { useState, useEffect } from 'react';
import './SentenceArrangementDND.css';

export default function SentenceArrangementDND({ question, answersMapping = {}, onAnswer }) {
  const safeDropZones = Array.isArray(question?.dropZones) ? question.dropZones : [];
  const [placements, setPlacements] = useState(answersMapping.placements || {});
  const [lockedZones, setLockedZones] = useState([]);

  const hasAnsweredFully = answersMapping.isCorrect === true;

  useEffect(() => {
    const freshPlacements = answersMapping.placements || {};
    setPlacements(freshPlacements);

    const savedLocked = answersMapping.lockedZones || [];
    if (hasAnsweredFully) {
      setLockedZones(safeDropZones.map(z => z.id));
    } else {
      setLockedZones(savedLocked);
    }
  }, [question, answersMapping, hasAnsweredFully]);

  useEffect(() => {
    if (JSON.stringify(placements) !== JSON.stringify(answersMapping.placements || {})) {
      onAnswer(placements, null, lockedZones);
    }
  }, [placements, onAnswer, answersMapping.placements, lockedZones]);

  const handleDragStart = (e, dragId) => {
    if (hasAnsweredFully) return;
    const placedZone = Object.keys(placements).find(key => placements[key] === dragId);
    if (placedZone && lockedZones.includes(placedZone)) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('dragId', dragId);
  };

  const handleDrop = (e, zoneId) => {
    e.preventDefault();
    if (hasAnsweredFully || lockedZones.includes(zoneId)) return;
    const dragId = e.dataTransfer.getData('dragId');
    if (!dragId) return;

    const newPlacements = { ...placements };
    Object.keys(newPlacements).forEach(key => {
      if (newPlacements[key] === dragId) delete newPlacements[key];
    });
    newPlacements[zoneId] = dragId;
    setPlacements(newPlacements);
  };

  const handleDropToPool = (e) => {
    e.preventDefault();
    if (hasAnsweredFully) return;
    const dragId = e.dataTransfer.getData('dragId');
    if (!dragId) return;

    const newPlacements = { ...placements };
    Object.keys(newPlacements).forEach(key => {
      if (newPlacements[key] === dragId && !lockedZones.includes(key)) {
        delete newPlacements[key];
      }
    });
    setPlacements(newPlacements);
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleRemove = (zoneId) => {
    if (hasAnsweredFully || lockedZones.includes(zoneId)) return;
    const newPlacements = { ...placements };
    delete newPlacements[zoneId];
    setPlacements(newPlacements);
  };

  const handlePeriksa = () => {
    if (hasAnsweredFully) return;

    if (question.mode === 'creative') {
      const placedIds = Object.values(placements);
      const placedTexts = placedIds.map(id => {
        const item = question.draggables.find(d => d.id === id);
        return item ? item.text : "";
      });

      const hasMinWords = placedIds.length >= (question.minWords || 1);
      
      let hasRequiredWords = true;
      if (question.requiredWords && question.requiredWords.length > 0) {
        hasRequiredWords = question.requiredWords.every(rw => placedTexts.includes(rw));
      }

      const isFullyCorrect = hasMinWords && hasRequiredWords;
      
      // If correct, lock all placed zones
      const finalLocked = isFullyCorrect ? Object.keys(placements) : [];
      setLockedZones(finalLocked);
      onAnswer(placements, isFullyCorrect, finalLocked);
      return;
    }

    let newLocked = [...lockedZones];
    let newPlacements = { ...placements };

    safeDropZones.forEach((z, idx) => {
      const placedId = placements[z.id];
      if (placedId) {
        if (placedId === question.correctOrder[idx]) {
          if (!newLocked.includes(z.id)) newLocked.push(z.id);
        } else {
          delete newPlacements[z.id];
        }
      }
    });

    setPlacements(newPlacements);
    setLockedZones(newLocked);

    const isFullyCorrect = newLocked.length === safeDropZones.length;
    onAnswer(newPlacements, isFullyCorrect, newLocked);
  };

  const placedDragIds = Object.values(placements);
  const remainingDraggables = question.draggables.filter(d => !placedDragIds.includes(d.id));
  const allPlaced = question.mode === 'creative'
    ? Object.keys(placements || {}).length >= (question.minWords || 1)
    : Object.keys(placements || {}).length === safeDropZones.length;

  const btnText = hasAnsweredFully ? 'Jawaban Benar!' : 'Periksa!';
  const btnClass = `sa-periksa-btn${hasAnsweredFully ? ' correct' : ''}`;

  return (
    <div className='sa-container'>

      {/* Header: title left, Periksa button right */}
      <div className='sa-header-row'>
        <h4 className='sa-title'>Urutkan kalimat di bawah ini:</h4>
        <button
          className={btnClass}
          onClick={handlePeriksa}
          disabled={hasAnsweredFully || !allPlaced}
        >
          {btnText}
        </button>
      </div>

      {/* Answer Drop Zones */}
      {question.mode === 'creative' ? (
        <div 
          className='sa-creative-zone' 
          onDrop={(e) => handleDrop(e, 'c_' + Date.now() + Math.random())}
          onDragOver={handleDragOver}
        >
          {Object.entries(placements || {}).map(([zoneId, dragId]) => {
            const placedItem = question.draggables.find(d => d.id === dragId);
            if (!placedItem) return null;
            return (
              <div
                key={zoneId}
                draggable={!hasAnsweredFully}
                onDragStart={(e) => handleDragStart(e, dragId)}
                className={`sa-placed-chip${hasAnsweredFully ? ' locked' : ''}`}
                style={{
                  backgroundColor: hasAnsweredFully ? '#b5e47a' : (placedItem.color || '#fff'),
                  borderColor: hasAnsweredFully ? '#5faa1e' : 'transparent',
                  cursor: hasAnsweredFully ? 'default' : 'grab',
                }}
              >
                {!hasAnsweredFully && (
                  <button
                    className='sa-remove-btn'
                    onClick={(e) => { e.stopPropagation(); handleRemove(zoneId); }}
                  >
                    ✕
                  </button>
                )}
                <span className='sa-chip-text'>{placedItem.text}</span>
              </div>
            );
          })}
          {Object.keys(placements || {}).length === 0 && (
            <span className='sa-placeholder' style={{ width: '100%', textAlign: 'center', opacity: 0.6, alignSelf: 'center', margin: 'auto' }}>
              Tarik dan letakkan kata-kata di sini...
            </span>
          )}
        </div>
      ) : (
        <div className='sa-zones-row'>
        {safeDropZones.map((z, idx) => {
          const placedDragId = placements[z.id];
          const placedItem = question.draggables.find(d => d.id === placedDragId);
          const isLocked = lockedZones.includes(z.id) || hasAnsweredFully;

          return (
            <div
              key={z.id}
              className={`sa-drop-zone${isLocked && placedItem ? ' locked' : ''}`}
              onDrop={(e) => handleDrop(e, z.id)}
              onDragOver={handleDragOver}
            >
              {placedItem ? (
                <div
                  draggable={!isLocked}
                  onDragStart={(e) => handleDragStart(e, placedItem.id)}
                  className='sa-placed-chip'
                  style={{
                    backgroundColor: isLocked ? '#b5e47a' : (placedItem.color || '#fff'),
                    borderColor: isLocked ? '#5faa1e' : 'transparent',
                    cursor: isLocked ? 'default' : 'grab',
                  }}
                >
                  {!isLocked && (
                    <button
                      className='sa-remove-btn'
                      onClick={(e) => { e.stopPropagation(); handleRemove(z.id); }}
                    >
                      ✕
                    </button>
                  )}
                  <span className='sa-chip-text'>{placedItem.text}</span>
                </div>
              ) : (
                <span className='sa-placeholder'>Letakkan di sini</span>
              )}
            </div>
          );
        })}
        </div>
      )}

      {/* Word Pool */}
      <div
        className='sa-pool-section'
        onDrop={handleDropToPool}
        onDragOver={handleDragOver}
      >
        <h4 className='sa-subtitle'>Pilih kalimat:</h4>
        <div className='sa-pool-grid'>
          {remainingDraggables.map(d => (
            <div
              key={d.id}
              draggable={!hasAnsweredFully}
              onDragStart={(e) => handleDragStart(e, d.id)}
              className='sa-draggable'
              style={{ backgroundColor: d.color || '#fff' }}
            >
              {d.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
