import { createContext, useContext, useState } from "react";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  // Read from localStorage to persist user choice, default to false (not muted/playing)
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem("music_muted");
    return saved ? JSON.parse(saved) : false;
  });

  const toggleMute = () => {
    setIsMuted((prev) => {
      const next = !prev;
      localStorage.setItem("music_muted", JSON.stringify(next));
      return next;
    });
  };

  return (
    <MusicContext.Provider value={{ isMuted, toggleMute, setIsMuted }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
