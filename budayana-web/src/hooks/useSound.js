import { useCallback } from 'react';

export function useSound() {
  const playSound = useCallback((type) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();

      const playOscillator = (type, freqStart, freqEnd, duration, gainStart = 0.1, gainEnd = 0.01) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freqStart, ctx.currentTime);
        if (freqEnd) {
          osc.frequency.exponentialRampToValueAtTime(freqEnd, ctx.currentTime + duration);
        }
        gain.gain.setValueAtTime(gainStart, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(gainEnd, ctx.currentTime + duration);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + duration);
      };

      if (type === 'click') {
        // Cute Bloop / Pop
        playOscillator('sine', 600, 300, 0.08, 0.1, 0.001);
      } else if (type === 'correct') {
        // Happy Sparkle (Arpeggio C5-E5-G5-C6)
        playOscillator('triangle', 523.25, 523.25, 0.1, 0.1, 0.01); 
        setTimeout(() => playOscillator('triangle', 659.25, 659.25, 0.1, 0.1, 0.01), 80); 
        setTimeout(() => playOscillator('triangle', 783.99, 783.99, 0.1, 0.1, 0.01), 160); 
        setTimeout(() => playOscillator('triangle', 1046.50, 1046.50, 0.3, 0.15, 0.001), 240);
      } else if (type === 'wrong') {
        // Cute Womp Womp
        playOscillator('triangle', 300, 250, 0.25, 0.15, 0.01);
        setTimeout(() => playOscillator('triangle', 250, 150, 0.4, 0.15, 0.001), 200);
      } else if (type === 'tada') {
        // Triumphant Fanfare (Tada!)
        playOscillator('square', 523.25, 523.25, 0.15, 0.1, 0.01); // C5
        setTimeout(() => playOscillator('square', 783.99, 783.99, 0.15, 0.1, 0.01), 150); // G5
        setTimeout(() => playOscillator('square', 659.25, 659.25, 0.15, 0.1, 0.01), 300); // E5
        setTimeout(() => playOscillator('square', 1046.50, 1046.50, 0.6, 0.2, 0.001), 450); // C6
      }
    } catch (e) {
      console.warn('AudioContext error:', e);
    }
  }, []);

  return {
    playClick: () => playSound('click'),
    playCorrect: () => playSound('correct'),
    playWrong: () => playSound('wrong'),
    playTada: () => playSound('tada'),
  };
}
