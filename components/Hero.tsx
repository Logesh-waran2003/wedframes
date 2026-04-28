"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BOKEH = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  size: Math.random() * 6 + 3,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  duration: `${Math.random() * 4 + 4}s`,
}));

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const leakRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        scale: 1.2,
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(leakRef.current, {
        y: -40,
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "50% top",
          scrub: true,
        },
      });

      gsap.fromTo(
        nameRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1.8, ease: "power3.out", delay: 0.3 }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
      {/* Layer 1 — Background */}
      <div ref={bgRef} className="absolute inset-0" style={{ transform: "scale(1.08)" }}>
        <Image src="/images/opening.png" alt="" fill className="object-cover" priority />
      </div>

      {/* Layer 2 — Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Layer 3 — Light leak */}
      <div
        ref={leakRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, transparent 50%)",
          mixBlendMode: "screen",
          opacity: 0.6,
        }}
      />

      {/* Layer 4 — Bokeh particles */}
      {BOKEH.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            top: b.top,
            background: "rgba(201,168,76,0.5)",
            animation: `float-up ${b.duration} ${b.delay} infinite ease-in-out`,
          }}
        />
      ))}

      {/* Layer 5 — Content */}
      <div ref={contentRef} className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "#C9A84C", fontFamily: "var(--font-cormorant), serif" }}
        >
          Together With Their Families
        </p>

        <div className="h-4" />

        <h1
          ref={nameRef}
          className="text-6xl md:text-8xl lg:text-9xl font-normal text-white text-center opacity-0"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Priya & Arjun
        </h1>

        <div className="w-16 h-px mx-auto my-6" style={{ background: "#C9A84C" }} />

        <p
          className="text-xl tracking-[0.4em] text-white/80"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          14 · 02 · 2026
        </p>

        <div className="h-12" />

        <svg
          className="w-5 h-5 text-white opacity-50"
          style={{ animation: "bounce-down 2s infinite" }}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
