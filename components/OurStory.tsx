"use client";

import LayeredScene from "./LayeredScene";

const scenes = [
  {
    bg: "/images/cafe.png",
    couple: "/layers/cafe-couple.png",
    foreground: "/layers/bokeh-overlay.png",
    title: "Where It Began",
    subtitle: "A chance meeting at our favorite café turned into hours of conversation and a lifetime of memories.",
  },
  {
    bg: "/images/park.png",
    couple: "/layers/park-couple.png",
    title: "Growing Together",
    subtitle: "Through every season, our love grew deeper — long walks, shared dreams, and quiet moments that meant everything.",
  },
  {
    bg: "/images/car.png",
    couple: "/layers/car-couple.png",
    title: "The Adventures",
    subtitle: "Every road trip, every spontaneous detour — we discovered that home isn't a place, it's a person.",
  },
  {
    bg: "/images/proposal.png",
    couple: "/layers/proposal-couple.png",
    foreground: "/layers/bokeh-overlay.png",
    title: "The Question",
    subtitle: "One knee, one ring, one perfect moment — and a 'yes' that echoed through eternity.",
  },
  {
    bg: "/images/family.png",
    couple: "/layers/family-couple.png",
    title: "Our People",
    subtitle: "Blessed with families who became one, friends who became family, and a love that multiplied.",
  },
];

export default function OurStory() {
  return (
    <div>
      <div className="py-20 bg-ivory text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Our Journey</p>
        <h2 className="font-heading text-dark text-4xl md:text-5xl">Our Story</h2>
      </div>

      {scenes.map((scene) => (
        <LayeredScene
          key={scene.title}
          bg={scene.bg}
          couple={scene.couple}
          foreground={scene.foreground}
        >
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-heading text-ivory text-3xl md:text-5xl mb-6 drop-shadow-lg">{scene.title}</h3>
            <p className="font-body text-ivory/90 text-xl md:text-2xl leading-relaxed drop-shadow-md">
              {scene.subtitle}
            </p>
          </div>
        </LayeredScene>
      ))}
    </div>
  );
}
