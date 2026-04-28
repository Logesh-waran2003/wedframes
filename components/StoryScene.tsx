"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface StorySceneProps {
  image: string;
  title: string;
  caption: string;
  lines: string[];
  align: "left" | "right";
  dark?: boolean;
}

export default function StoryScene({ image, title, caption, lines, align, dark }: StorySceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const bg = dark ? "#111111" : "#FAF7F2";
  const textColor = dark ? "#ffffff" : "#1d1d1f";
  const fromX = align === "right" ? -60 : 60;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: fromX, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );

      const textEls = textRef.current?.children;
      if (textEls) {
        gsap.fromTo(
          textEls,
          { x: -fromX, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [fromX]);

  const imageBlock = (
    <div ref={imageRef} className="opacity-0">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
    </div>
  );

  const textBlock = (
    <div ref={textRef} className="flex flex-col justify-center">
      <p className="text-xs tracking-widest uppercase" style={{ color: "#C9A84C", fontFamily: "var(--font-cormorant), serif" }}>
        {caption}
      </p>
      <h2
        className="text-3xl md:text-4xl font-normal mt-4"
        style={{ color: textColor, fontFamily: "var(--font-playfair), serif" }}
      >
        {title}
      </h2>
      <div className="mt-6 space-y-2">
        {lines.map((line) => (
          <p
            key={line}
            className="text-lg leading-relaxed"
            style={{ color: textColor, fontFamily: "var(--font-cormorant), serif", opacity: 0.8 }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <section ref={sectionRef} style={{ background: bg }}>
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        {/* Mobile: stacked */}
        <div className="flex flex-col gap-10 md:hidden">
          {imageBlock}
          {textBlock}
        </div>
        {/* Desktop: two columns */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-center">
          {align === "right" ? (
            <>
              {imageBlock}
              {textBlock}
            </>
          ) : (
            <>
              {textBlock}
              {imageBlock}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
