"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import Scene from "@/components/Scene";

const scenes = [
  {
    image: "/images/opening.png",
    lines: ["Some stories are not written...", "They are meant to be felt."],
  },
  {
    image: "/images/cafe.png",
    lines: ["It started with a glance...", "A moment small enough to miss..."],
  },
  {
    image: "/images/park.png",
    lines: ["Laughter became memories...", "Memories became love..."],
  },
  {
    image: "/images/car.png",
    lines: ["Every road felt beautiful...", "When they were together..."],
  },
  {
    image: "/images/proposal.png",
    lines: ["And then...", "He asked...", "She said yes."],
    isProposal: true,
  },
  {
    image: "/images/family.png",
    lines: ["Two families...", "One beautiful beginning..."],
  },
  {
    image: "/images/wedding.png",
    lines: ["We invite you...", "To celebrate our forever"],
  },
  {
    image: "/images/night.png",
    lines: ["Two souls...", "One journey...", "Forever begins here"],
  },
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main>
      {scenes.map((scene, i) => (
        <Scene
          key={i}
          image={scene.image}
          lines={scene.lines}
          isProposal={scene.isProposal}
        />
      ))}
    </main>
  );
}
