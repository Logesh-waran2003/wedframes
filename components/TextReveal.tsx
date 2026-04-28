"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  lines: string[];
}

export default function TextReveal({ lines }: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const lineEls = container.querySelectorAll(".reveal-line");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineEls,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="text-center">
      {lines.map((line, i) => (
        <p
          key={i}
          className="reveal-line text-3xl font-light tracking-widest text-white md:text-5xl"
          style={{ opacity: 0 }}
        >
          {line}
        </p>
      ))}
    </div>
  );
}
