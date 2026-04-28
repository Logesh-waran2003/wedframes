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
  sectionBg?: string;
  pin?: boolean;
  fullLayout?: boolean; // children fill full section, not just bottom
  children: ReactNode;
}

export default function LayeredScene({
  bg,
  couple,
  foreground,
  sectionBg = "#000000",
  pin = false,
  fullLayout = false,
  children,
}: LayeredSceneProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef      = useRef<HTMLDivElement>(null);
  const coupleRef  = useRef<HTMLDivElement>(null);
  const fgRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const baseTrigger = {
        trigger: sectionRef.current,
        start: "top top",
        end: pin ? "+=900" : "bottom top",
        scrub: 1,
        pin,
        pinSpacing: false,
        anticipatePin: pin ? 1 : 0,
      };

      gsap.fromTo(bgRef.current,
        { y: 0, scale: 1.05 },
        { y: -60, scale: 1.12, ease: "none", scrollTrigger: baseTrigger }
      );

      gsap.fromTo(coupleRef.current,
        { y: 0 },
        { y: -110, ease: "none", scrollTrigger: { ...baseTrigger, pin: false, anticipatePin: 0 } }
      );

      if (fgRef.current) {
        gsap.fromTo(fgRef.current,
          { y: 0, opacity: 0.45 },
          { y: -60, opacity: 0.15, ease: "none", scrollTrigger: { ...baseTrigger, pin: false, anticipatePin: 0 } }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [pin]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
      style={{ background: sectionBg, marginBottom: "-1px" }}
    >
      {/* Layer 1 — BG photo */}
      <div ref={bgRef} className="absolute inset-0 will-change-transform">
        <Image
          src={bg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
          style={{
            filter: "blur(2px) brightness(0.75)",
            transform: "scale(1.08)",
            objectPosition: "center 30%",
          }}
        />
      </div>

      {/* Layer 2 — Foreground overlay BEHIND couple */}
      {foreground && (
        <div ref={fgRef} className="absolute inset-0 pointer-events-none will-change-transform z-10">
          <Image src={foreground} alt="" fill className="object-cover mix-blend-screen" sizes="100vw" />
        </div>
      )}

      {/* Layer 3 — Edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 35%, rgba(0,0,0,0.5) 100%)" }}
      />

      {/* Layer 4 — Couple cutout ON TOP */}
      <div ref={coupleRef} className="absolute inset-0 will-change-transform z-20">
        <Image
          src={couple}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "contain", objectPosition: "center 55%" }}
        />
      </div>

      {/* Layer 5 — Bottom text scrim */}
      <div
        className="absolute inset-0 pointer-events-none z-30"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.35) 22%, rgba(0,0,0,0) 50%)" }}
      />

      {/* Layer 6 — Content */}
      {fullLayout ? (
        <div className="absolute inset-0 z-40">
          {children}
        </div>
      ) : (
        <div className="absolute bottom-0 left-0 right-0 z-40 px-6 pb-14 flex flex-col items-center">
          {children}
        </div>
      )}
    </section>
  );
}
