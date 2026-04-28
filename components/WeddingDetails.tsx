"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-06-21T10:00:00");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setTimeLeft({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return timeLeft;
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="text-center">
      <span className="font-script text-gold block drop-shadow-md" style={{ fontSize: "clamp(48px, 8vw, 80px)" }}>
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-display text-dark/50 text-xs tracking-[0.25em] uppercase mt-1 block">
        {label}
      </span>
    </div>
  );
}

function EventCard({ title, date, time, venue }: { title: string; date: string; time: string; venue: string }) {
  return (
    <div className="relative flex flex-col items-center p-10">
      {/* Spinning outer ring */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none border border-dashed border-gold/25"
        style={{ animation: "spinRing 18s linear infinite" }}
      />
      {/* Spinning inner ring (reverse) */}
      <div
        className="absolute inset-4 rounded-full pointer-events-none border border-gold/10"
        style={{ animation: "spinRing 28s linear infinite reverse" }}
      />
      <div className="w-10 h-px bg-gold/50 mb-5" />
      <h3 className="font-display text-dark text-2xl mb-3 tracking-wide">{title}</h3>
      <p className="font-body text-dark/70 text-lg">{date}</p>
      <p className="font-body text-dark/60 text-base">{time}</p>
      <p className="font-body text-dark/40 text-sm mt-3 text-center leading-relaxed">{venue}</p>
    </div>
  );
}

export default function WeddingDetails() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">Save the Date</p>
        <h2 className="font-script text-dark mb-12" style={{ fontSize: "clamp(48px, 7vw, 72px)" }}>
          Wedding Details
        </h2>

        <div className="flex justify-center gap-8 md:gap-16 mb-20">
          <CountdownUnit value={days}    label="Days" />
          <CountdownUnit value={hours}   label="Hours" />
          <CountdownUnit value={minutes} label="Minutes" />
          <CountdownUnit value={seconds} label="Seconds" />
        </div>

        <div className="shimmer-line w-48 h-px mx-auto mb-16" />

        <div className="grid md:grid-cols-2 gap-16 max-w-2xl mx-auto">
          <EventCard
            title="Ceremony"
            date="Sunday, June 21, 2026"
            time="10:00 AM"
            venue={"The Grand Ballroom\nChennai, Tamil Nadu"}
          />
          <EventCard
            title="Reception"
            date="Sunday, June 21, 2026"
            time="7:00 PM"
            venue={"The Grand Ballroom\nChennai, Tamil Nadu"}
          />
        </div>
      </div>
    </section>
  );
}
