"use client";
import { useEffect, useRef } from "react";

export default function Particles({ count = 20 }: { count?: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els: HTMLDivElement[] = [];

    for (let i = 0; i < count; i++) {
      const p = document.createElement("div");
      const size = Math.random() * 3 + 1;
      const left = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = Math.random() * 6 + 8;
      const driftX = (Math.random() - 0.5) * 80;

      p.style.cssText = `
        position:absolute;
        bottom:-10px;
        left:${left}%;
        width:${size}px;
        height:${size}px;
        border-radius:50%;
        background:rgba(201,168,76,${(Math.random() * 0.5 + 0.2).toFixed(2)});
        --drift-x:${driftX}px;
        animation:floatParticle ${duration}s ${delay}s ease-in-out infinite;
        pointer-events:none;
      `;
      container.appendChild(p);
      els.push(p);
    }

    return () => els.forEach((p) => p.remove());
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none z-10"
    />
  );
}
