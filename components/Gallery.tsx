"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "opening", "cafe", "park", "car", "proposal", "family", "wedding", "night",
];

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.children;
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section style={{ background: "#FAF7F2" }} className="py-24 px-6">
      <h2
        className="text-4xl text-center"
        style={{ color: "#1d1d1f", fontFamily: "var(--font-playfair), serif" }}
      >
        Moments Together
      </h2>
      <div className="w-12 h-px mx-auto mt-4 mb-12" style={{ background: "#C9A84C" }} />

      <div ref={gridRef} className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-6xl mx-auto">
        {IMAGES.map((name) => (
          <div key={name} className="overflow-hidden rounded-xl mb-3 cursor-pointer">
            <Image
              src={`/images/${name}.png`}
              alt={name}
              width={600}
              height={400}
              className="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
