"use client";

import LayeredScene from "./LayeredScene";
import Particles from "./Particles";

const scenes = [
  {
    bg: "/images/cafe.png",
    couple: "/layers/cafe-couple.png",
    foreground: "/layers/bokeh-overlay.png",
    sectionBg: "linear-gradient(to bottom, #2d1a00, #1a0f00)",
    label: "Chapter One",
    title: "Where It Began",
    subtitle: "A chance meeting at our favorite café turned into hours of conversation and a lifetime of memories.",
    particles: false,
  },
  {
    bg: "/images/park.png",
    couple: "/layers/park-couple.png",
    sectionBg: "linear-gradient(to bottom, #0a1a0a, #051005)",
    label: "Chapter Two",
    title: "Growing Together",
    subtitle: "Through every season, our love grew deeper — long walks, shared dreams, and quiet moments that meant everything.",
    particles: false,
  },
  {
    bg: "/images/car.png",
    couple: "/layers/car-couple.png",
    sectionBg: "linear-gradient(to bottom, #0a0a1a, #050510)",
    label: "Chapter Three",
    title: "The Adventures",
    subtitle: "Every road trip, every spontaneous detour — we discovered that home isn't a place, it's a person.",
    particles: false,
  },
  {
    bg: "/images/proposal.png",
    couple: "/layers/proposal-couple.png",
    foreground: "/layers/bokeh-overlay.png",
    sectionBg: "linear-gradient(to bottom, #1a0a1a, #0d050d)",
    label: "Chapter Four",
    title: "The Question",
    subtitle: "One knee, one ring, one perfect moment — and a 'yes' that echoed through eternity.",
    pin: true,
    particles: true,
  },
  {
    bg: "/images/family.png",
    couple: "/layers/family-couple.png",
    sectionBg: "linear-gradient(to bottom, #1a1000, #0d0800)",
    label: "Chapter Five",
    title: "Our People",
    subtitle: "Blessed with families who became one, friends who became family, and a love that multiplied.",
    particles: false,
  },
];

export default function OurStory() {
  return (
    <div>
      {/* Section intro */}
      <div className="py-20 text-center" style={{ background: "#0d0800" }}>
        <p className="font-display text-gold/60 text-xs tracking-[0.5em] uppercase mb-4">Our Journey</p>
        <h2 className="font-script text-ivory" style={{ fontSize: "clamp(48px, 8vw, 80px)" }}>
          Our Story
        </h2>
        <div className="shimmer-line w-32 h-px mx-auto mt-6" />
      </div>

      {scenes.map((scene) => (
        <LayeredScene
          key={scene.title}
          bg={scene.bg}
          couple={scene.couple}
          foreground={scene.foreground}
          sectionBg={scene.sectionBg}
          pin={scene.pin}
        >
          {scene.particles && <Particles count={25} />}
          <div className="text-center w-full max-w-2xl mx-auto relative z-10">
            <p className="font-display text-gold/60 text-xs tracking-[0.5em] uppercase mb-3 drop-shadow-md">
              {scene.label}
            </p>
            <h3
              className="font-script text-ivory leading-none drop-shadow-lg mb-4"
              style={{ fontSize: "clamp(48px, 8vw, 86px)" }}
            >
              {scene.title}
            </h3>
            <div className="shimmer-line w-32 h-px mx-auto mb-4" />
            <p className="font-display text-ivory/85 text-base md:text-lg leading-relaxed drop-shadow-md italic max-w-lg mx-auto">
              {scene.subtitle}
            </p>
          </div>
        </LayeredScene>
      ))}
    </div>
  );
}
