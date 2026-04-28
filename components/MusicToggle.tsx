"use client";
import { useRef, useState } from "react";

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().then(() => setPlaying(true)).catch(() => {});
    }
  }

  return (
    <>
      <audio ref={audioRef} loop src="/music/wedding-bg.mp3" preload="none" />
      <button
        onClick={toggle}
        className="fixed top-5 left-5 z-40 w-10 h-10 rounded-full border border-gold/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-gold/80 hover:border-gold transition-all"
        aria-label={playing ? "Pause music" : "Play music"}
      >
        {playing ? (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </>
  );
}
