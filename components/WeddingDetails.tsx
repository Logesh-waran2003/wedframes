"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TARGET = new Date("2026-02-14T18:00:00+05:30").getTime();

function getTimeLeft() {
  const diff = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hrs: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
    sec: Math.floor((diff / 1000) % 60),
  };
}

const CARDS = [
  { icon: "📅", label: "Date", value: "Saturday, 14th February 2026" },
  { icon: "🕕", label: "Time", value: "6:00 PM onwards" },
  { icon: "📍", label: "Venue", value: "The Grand Leela Palace, Chennai" },
];

export default function WeddingDetails() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const countdown = [
    { value: time.days, label: "DAYS" },
    { value: time.hrs, label: "HRS" },
    { value: time.min, label: "MIN" },
    { value: time.sec, label: "SEC" },
  ];

  return (
    <section ref={sectionRef} style={{ background: "#111111" }}>
      {/* Hero image */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image src="/images/wedding.png" alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-4xl text-white italic text-center px-6"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            We invite you to celebrate our forever
          </p>
        </div>
      </div>

      {/* Info cards */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="rounded-2xl p-8 text-center"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              <div className="text-3xl mb-3">{card.icon}</div>
              <p
                className="text-sm tracking-widest uppercase"
                style={{ color: "#C9A84C", fontFamily: "var(--font-cormorant), serif" }}
              >
                {card.label}
              </p>
              <p
                className="text-xl text-white mt-2"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Venue address */}
        <p
          className="text-sm text-white/50 text-center mt-4 italic"
          style={{ fontFamily: "var(--font-cormorant), serif" }}
        >
          1 Sardar Patel Road, Guindy, Chennai - 600032
        </p>

        {/* Countdown */}
        <div className="flex justify-center gap-4 mt-8">
          {countdown.map((c) => (
            <div
              key={c.label}
              className="rounded-xl p-4 text-center min-w-[80px]"
              style={{ border: "1px solid rgba(201,168,76,0.4)" }}
            >
              <p className="text-4xl text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>
                {String(c.value).padStart(2, "0")}
              </p>
              <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C" }}>
                {c.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
