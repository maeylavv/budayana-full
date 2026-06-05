import React from 'react';
import './MapUI.css';

import BackgroundAssets from './BackgroundAssets';

// Island component with locked/unlocked visual states
export function IslandImage({ island, position, onClick }) {
  /*
  ========================
  TEMP TESTING MODE
  RESTORE LOCK AFTER TEST
  ========================
  const isLocked = !island.isUnlocked;
  */
  const isLocked = false;

  return (
    <div
      className='island-container'
      style={{
        position: 'absolute',
        left: position.left,
        top: position.top,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <img
        src={`/assets/budayana/islands/${island.name}.png`}
        alt={island.name}
        className={`island ${island.slug}`}
        style={{
          position: 'relative', // Override CSS position: absolute
          top: 0,
          left: 0,
          filter: isLocked ? 'brightness(0.4) grayscale(0.3)' : 'none',
          transition: 'filter 0.3s ease',
        }}
      />
      {/*
      ========================
      TEMP TESTING MODE
      RESTORE LOCK AFTER TEST
      ========================
      isLocked && (
        <div
          className='island-lock-overlay'
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
          }}
        >
          <img
            src='/assets/budayana/islands/padlock.png'
            alt='locked'
            style={{
              width: 'auto',
              height: '40px',
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.5))',
            }}
          />
        </div>
      )
      */}
    </div>
  );
}

// ISLAND DISPLAY DATA (positions on map)
export const islandPositions = {
  sumatra: { left: '5%', top: '25%' },
  kalimantan: { left: '28%', top: '28%' },
  sulawesi: { left: '49%', top: '40%' },
  maluku: { left: '63%', top: '40%' },
  papua: { left: '75%', top: '45%' },
  jawa: { left: '25%', top: '70%' },
  bali: { left: '50%', top: '75%' },
  "nusa-tenggara": { left: '60%', top: '72%' },
};

export default function MapUI({ allIslands, onIslandClick, showIslands = true, showBackground = true }) {
  return (
    <>
      {showIslands && allIslands.map((island) => {
        const position = islandPositions[island.id] || islandPositions[island.slug];
        if (!position) return null;

        return (
          <IslandImage
            key={island.id || island.slug}
            island={island}
            position={position}
            onClick={() => onIslandClick(island)}
          />
        );
      })}

      {/* BACKGROUND ASSETS */}
      {showBackground && <BackgroundAssets />}
    </>
  );
}
