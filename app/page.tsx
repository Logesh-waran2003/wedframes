"use client";

import { useEffect } from "react";
import Image from "next/image";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import StoryScene from "@/components/StoryScene";
import WeddingDetails from "@/components/WeddingDetails";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";

gsap.registerPlugin(ScrollTrigger);

const scenes = [
  {
    image: "/images/cafe.png",
    title: "The First Hello",
    caption: "01 — The Beginning",
    lines: [
      "It started with a glance across a crowded café...",
      "A moment small enough to miss, yet impossible to forget.",
    ],
    align: "right" as const,
    dark: false,
  },
  {
    image: "/images/park.png",
    title: "Getting Closer",
    caption: "02 — Growing Together",
    lines: [
      "Long walks, longer conversations,",
      "and laughter that never stopped.",
    ],
    align: "left" as const,
    dark: true,
  },
  {
    image: "/images/car.png",
    title: "Every Road Together",
    caption: "03 — The Journey",
    lines: [
      "Every journey felt like home",
      "when they were side by side.",
    ],
    align: "right" as const,
    dark: false,
  },
  {
    image: "/images/proposal.png",
    title: "The Question",
    caption: "04 — The Moment",
    lines: [
      "Under a sky full of stars,",
      "he got down on one knee...",
    ],
    align: "left" as const,
    dark: true,
  },
  {
    image: "/images/family.png",
    title: "Two Families, One Heart",
    caption: "05 — The Beginning",
    lines: [
      "The moment two families",
      "became one beautiful story.",
    ],
    align: "right" as const,
    dark: false,
  },
];

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <main className="bg-black">
      <Hero />
      {scenes.map((s) => (
        <StoryScene key={s.caption} {...s} />
      ))}
      <WeddingDetails />
      <Gallery />
      <RSVP />
      <footer className="relative py-20 text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/night.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/75" />
        </div>
        <div className="relative z-10">
          <p className="text-3xl text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
            Priya &amp; Arjun
          </p>
          <p className="text-xs tracking-[0.3em] uppercase mt-3" style={{ color: "#C9A84C" }}>
            14 · 02 · 2026
          </p>
          <p
            className="text-sm text-white/40 mt-4"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            With love &amp; gratitude, we look forward to celebrating with you.
          </p>
        </div>
      </footer>
    </main>
  );
}
