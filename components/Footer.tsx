"use client";

import LayeredScene from "./LayeredScene";

export default function Footer() {
  return (
    <LayeredScene
      bg="/images/night.png"
      couple="/layers/night-couple.png"
      foreground="/layers/bokeh-overlay.png"
    >
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-6 drop-shadow-md">
          With Love
        </p>
        <h2 className="font-heading text-ivory text-5xl md:text-6xl mb-6 drop-shadow-lg">
          See You There
        </h2>
        <div className="w-16 h-px bg-gold/60 mx-auto mb-6" />
        <p className="font-body text-ivory/90 text-xl md:text-2xl drop-shadow-md">
          Karthick &amp; Priya
        </p>
        <p className="font-body text-ivory/60 text-sm mt-8 tracking-widest uppercase">
          June 21, 2026 · Chennai
        </p>
      </div>
    </LayeredScene>
  );
}
