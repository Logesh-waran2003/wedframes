"use client";
import LayeredScene from "./LayeredScene";

export default function HeroInvite() {
  return (
    <LayeredScene
      bg="/images/opening.png"
      couple="/layers/opening-couple.png"
      foreground="/layers/floral-overlay.png"
      sectionBg="linear-gradient(to bottom, #0d0500, #1a0a00)"
      fullLayout
    >
      {/* Bottom bar — split names left/right, center connector */}
      <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end px-8 pb-12">

        {/* LEFT — Karthick */}
        <div className="flex-1 text-left">
          <p className="font-display text-gold/60 text-xs tracking-[0.4em] uppercase mb-1 drop-shadow-md">Groom</p>
          <h1 className="font-script text-ivory leading-none drop-shadow-lg" style={{ fontSize: "clamp(48px, 6.5vw, 88px)" }}>
            Karthick
          </h1>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center gap-2 px-6 pb-2">
          <div className="shimmer-line w-16 h-px" />
          <p className="font-display text-gold text-xl tracking-[0.3em] drop-shadow-md">&amp;</p>
          <div className="shimmer-line w-16 h-px" />
          <p className="font-display text-ivory/40 text-xs tracking-[0.2em] uppercase mt-1 whitespace-nowrap drop-shadow-md">
            Jun 21 · 2026
          </p>
        </div>

        {/* RIGHT — Priya */}
        <div className="flex-1 text-right">
          <p className="font-display text-gold/60 text-xs tracking-[0.4em] uppercase mb-1 drop-shadow-md">Bride</p>
          <h1 className="font-script text-ivory leading-none drop-shadow-lg" style={{ fontSize: "clamp(48px, 6.5vw, 88px)" }}>
            Priya
          </h1>
        </div>

      </div>

      {/* Top center — tagline */}
      <div className="absolute top-8 left-0 right-0 flex justify-center z-10">
        <p className="font-display text-ivory/40 text-xs tracking-[0.4em] uppercase drop-shadow-md">
          Together with their families
        </p>
      </div>
    </LayeredScene>
  );
}
