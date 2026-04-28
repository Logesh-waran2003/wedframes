"use client";

import { useRef, useEffect, type ReactNode } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LayeredSceneProps {
  bg: string;
  couple: string;
  foreground?: string;
  children: ReactNode;
}

export default function LayeredScene({ bg, couple, foreground, children }: LayeredSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const coupleRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        bgRef.current,
        { y: 0, scale: 1.05 },
        {
          y: -80,
          scale: 1.15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        coupleRef.current,
        { y: 0 },
        {
          y: -140,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        }
      );

      if (fgRef.current) {
        gsap.fromTo(
          fgRef.current,
          { y: 0, opacity: 0.7 },
          {
            y: -220,
            opacity: 0.3,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* BG layer — blurred + darkened so couple cutout reads as foreground */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={bg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          style={{ filter: "blur(6px) brightness(0.45) saturate(0.7)", transform: "scale(1.08)" }}
        />
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      <div ref={coupleRef} className="absolute inset-0 will-change-transform">
        <Image src={couple} alt="" fill className="object-contain object-bottom" sizes="100vw" />
      </div>

      {foreground && (
        <div ref={fgRef} className="absolute inset-0 pointer-events-none will-change-transform">
          <Image src={foreground} alt="" fill className="object-cover mix-blend-screen" sizes="100vw" />
        </div>
      )}

      {/* Text scrim — gradient behind text for legibility */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center z-30 px-6">
        {children}
      </div>
    </section>
  );
}
