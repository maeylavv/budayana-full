import { useMusic } from "../context/MusicContext";
import "./MusicToggleButton.css";

export default function MusicToggleButton() {
  const { isMuted, toggleMute } = useMusic();

  return (
    <button
      className="music-toggle-btn"
      onClick={toggleMute}
      aria-label={isMuted ? "Unmute Music" : "Mute Music"}
      title={isMuted ? "Nyalakan Musik" : "Matikan Musik"}
    >
      <img
        src={
          isMuted
            ? "/assets/budayana/islands/speaker mute-logo.png"
            : "/assets/budayana/islands/speaker-logo.png"
        }
        alt={isMuted ? "Music Muted" : "Music Playing"}
      />
    </button>
  );
}
