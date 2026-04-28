"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "./TextReveal";

gsap.registerPlugin(ScrollTrigger);

interface SceneProps {
  image: string;
  lines: string[];
  isProposal?: boolean;
}

export default function Scene({ image, lines, isProposal }: SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const imageEl = imageRef.current;
    if (!container || !imageEl) return;

    const ctx = gsap.context(() => {
      if (isProposal) {
        gsap.fromTo(
          imageEl,
          { scale: 1.05, y: 0 },
          {
            scale: 1.25,
            y: -40,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "+=800",
              scrub: true,
              pin: true,
            },
          }
        );
      } else {
        gsap.fromTo(
          imageEl,
          { scale: 1.05, y: 0 },
          {
            scale: 1.15,
            y: -80,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      }
    }, container);

    return () => ctx.revert();
  }, [isProposal]);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      <div ref={imageRef} className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <TextReveal lines={lines} />
      </div>
    </div>
  );
}
