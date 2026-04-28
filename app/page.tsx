"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroInvite from "@/components/HeroInvite";
import OurStory from "@/components/OurStory";
import WeddingDetails from "@/components/WeddingDetails";
import Gallery from "@/components/Gallery";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.07,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <main>
      <HeroInvite />
      <OurStory />
      <WeddingDetails />
      <Gallery />
      <RSVP />
      <Footer />
    </main>
  );
}
