"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroInvite from "@/components/HeroInvite";
import OurStory from "@/components/OurStory";
import WeddingDetails from "@/components/WeddingDetails";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";
import Envelope from "@/components/Envelope";
import MusicToggle from "@/components/MusicToggle";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  useEffect(() => {
    if (!envelopeOpen) return;

    const lenis = new Lenis({ lerp: 0.07, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, [envelopeOpen]);

  return (
    <>
      {!envelopeOpen && <Envelope onOpen={() => setEnvelopeOpen(true)} />}
      <MusicToggle />
      <main
        style={{
          opacity: envelopeOpen ? 1 : 0,
          transition: "opacity 0.6s ease 0.2s",
          pointerEvents: envelopeOpen ? "auto" : "none",
        }}
      >
        <HeroInvite />
        <OurStory />
        <WeddingDetails />
        <Gallery />
        <RSVP />
        <Footer />
      </main>
    </>
  );
}
