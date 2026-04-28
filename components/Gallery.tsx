"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const photos = [
  { src: "/images/cafe.png", alt: "Café moment", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/park.png", alt: "Park walk", span: "" },
  { src: "/images/car.png", alt: "Road trip", span: "" },
  { src: "/images/proposal.png", alt: "The proposal", span: "md:col-span-2" },
  { src: "/images/family.png", alt: "Family", span: "" },
  { src: "/images/wedding.png", alt: "Wedding day", span: "md:col-span-2 md:row-span-2" },
  { src: "/images/night.png", alt: "Night celebration", span: "" },
  { src: "/images/opening.png", alt: "Together", span: "" },
];

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll(".gallery-item");
      if (!items) return;

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, gridRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-24 px-6" style={{ background: "linear-gradient(to bottom, #1a0f08, #1a1008 80%, #FAF7F2)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Moments</p>
          <h2 className="font-heading text-ivory text-4xl md:text-5xl drop-shadow-lg">Gallery</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className={`gallery-item relative overflow-hidden rounded-sm aspect-square ${photo.span}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
