"use client";
import { useRef } from "react";
import gsap from "gsap";

export default function Envelope({ onOpen }: { onOpen: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  function handleOpen() {
    gsap.to(overlayRef.current, {
      opacity: 0,
      scale: 1.06,
      duration: 1.4,
      ease: "power2.inOut",
      onComplete: onOpen,
    });
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer select-none"
      style={{ background: "linear-gradient(135deg, #1a0a00 0%, #2d1500 50%, #1a0a00 100%)" }}
      onClick={handleOpen}
    >
      {/* Double border frame */}
      <div className="absolute inset-4 border border-gold/25 pointer-events-none" />
      <div className="absolute inset-7 border border-gold/10 pointer-events-none" />

      {/* Corner accents */}
      {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((pos) => (
        <div key={pos} className={`absolute ${pos} w-6 h-6 pointer-events-none`}>
          <div className="absolute top-0 left-0 w-full h-px bg-gold/50" />
          <div className="absolute top-0 left-0 w-px h-full bg-gold/50" />
        </div>
      ))}

      <div className="shimmer-line w-48 h-px mb-10" />

      <p className="font-display text-gold/60 text-xs tracking-[0.5em] uppercase mb-8">
        Together with their families
      </p>

      <h1
        className="font-script text-ivory leading-none drop-shadow-lg"
        style={{ fontSize: "clamp(64px, 14vw, 130px)" }}
      >
        Karthick
      </h1>
      <p className="font-display text-gold tracking-[0.5em] text-xl my-4">&amp;</p>
      <h1
        className="font-script text-ivory leading-none drop-shadow-lg"
        style={{ fontSize: "clamp(64px, 14vw, 130px)" }}
      >
        Priya
      </h1>

      <div className="shimmer-line w-48 h-px mt-10 mb-10" />

      <div className="flex flex-col items-center gap-3">
        <p className="font-display text-ivory/50 text-xs tracking-[0.5em] uppercase">
          Tap to open
        </p>
        <div className="tap-bounce w-px h-8 bg-gold/40" />
      </div>
    </div>
  );
}
