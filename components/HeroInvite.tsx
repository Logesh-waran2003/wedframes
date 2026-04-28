"use client";

import Image from "next/image";
import LayeredScene from "./LayeredScene";

export default function HeroInvite() {
  return (
    <LayeredScene
      bg="/images/opening.png"
      couple="/layers/opening-couple.png"
      foreground="/layers/floral-overlay.png"
    >
      <div className="text-center px-6 max-w-3xl mx-auto">
        <p className="text-gold font-body text-xs tracking-[0.4em] uppercase mb-6 drop-shadow-md">
          Together with their families
        </p>

        <h1 className="font-heading text-ivory text-6xl md:text-8xl font-normal leading-tight mb-2 drop-shadow-lg">
          Karthick
        </h1>
        <p className="text-gold text-3xl md:text-4xl font-body italic mb-2 drop-shadow-md">&amp;</p>
        <h1 className="font-heading text-ivory text-6xl md:text-8xl font-normal leading-tight mb-10 drop-shadow-lg">
          Priya
        </h1>

        <div className="w-24 h-px bg-gold/60 mx-auto mb-8" />

        <p className="text-ivory/95 font-body text-xl md:text-2xl tracking-wide drop-shadow-md">
          Request the pleasure of your company
        </p>
        <p className="text-ivory/80 font-body text-lg mt-3 drop-shadow-md">
          Saturday, the Twenty-First of June
        </p>
        <p className="text-ivory/80 font-body text-lg drop-shadow-md">
          Two Thousand and Twenty-Six
        </p>

        <div className="mt-12 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-gold/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </LayeredScene>
  );
}
