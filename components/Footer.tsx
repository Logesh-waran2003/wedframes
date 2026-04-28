"use client";

import LayeredScene from "./LayeredScene";
import Particles from "./Particles";

export default function Footer() {
  return (
    <LayeredScene
      bg="/images/night.png"
      couple="/layers/night-couple.png"
      foreground="/layers/bokeh-overlay.png"
      sectionBg="linear-gradient(to bottom, #05050f, #000005)"
    >
      <Particles count={30} />
      <div className="text-center w-full max-w-2xl mx-auto relative z-10">
        <p className="font-display text-gold/60 text-xs tracking-[0.5em] uppercase mb-6 drop-shadow-md">
          With Love
        </p>
        <h2
          className="font-script text-ivory leading-none drop-shadow-lg mb-5"
          style={{ fontSize: "clamp(52px, 9vw, 100px)" }}
        >
          See You There
        </h2>
        <div className="shimmer-line w-40 h-px mx-auto mb-6" />
        <p
          className="font-script text-ivory/90 drop-shadow-md"
          style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
        >
          Karthick &amp; Priya
        </p>
        <p className="font-display text-ivory/40 text-xs mt-6 tracking-[0.4em] uppercase">
          June 21, 2026 · Chennai
        </p>
      </div>
    </LayeredScene>
  );
}
