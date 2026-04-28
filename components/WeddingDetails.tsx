"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2026-06-21T10:00:00");

function useCountdown(target: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target.getTime() - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
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
      <span className="font-heading text-gold text-4xl md:text-6xl block">
        {String(value).padStart(2, "0")}
      </span>
      <span className="font-body text-dark/60 text-xs tracking-[0.2em] uppercase mt-1 block">
        {label}
      </span>
    </div>
  );
}

export default function WeddingDetails() {
  const { days, hours, minutes, seconds } = useCountdown(WEDDING_DATE);

  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">Save the Date</p>
        <h2 className="font-heading text-dark text-4xl md:text-5xl mb-12">Wedding Details</h2>

        <div className="flex justify-center gap-8 md:gap-16 mb-16">
          <CountdownUnit value={days} label="Days" />
          <CountdownUnit value={hours} label="Hours" />
          <CountdownUnit value={minutes} label="Minutes" />
          <CountdownUnit value={seconds} label="Seconds" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 text-left max-w-2xl mx-auto">
          <div className="text-center border border-gold/20 rounded-sm p-8">
            <div className="w-12 h-px bg-gold/50 mx-auto mb-4" />
            <h3 className="font-heading text-dark text-2xl mb-2">Ceremony</h3>
            <p className="font-body text-dark/70 text-lg">Sunday, June 21, 2026</p>
            <p className="font-body text-dark/70">10:00 AM</p>
            <p className="font-body text-dark/50 mt-2 text-sm">
              The Grand Ballroom<br />
              Chennai, Tamil Nadu
            </p>
          </div>

          <div className="text-center border border-gold/20 rounded-sm p-8">
            <div className="w-12 h-px bg-gold/50 mx-auto mb-4" />
            <h3 className="font-heading text-dark text-2xl mb-2">Reception</h3>
            <p className="font-body text-dark/70 text-lg">Sunday, June 21, 2026</p>
            <p className="font-body text-dark/70">7:00 PM</p>
            <p className="font-body text-dark/50 mt-2 text-sm">
              The Grand Ballroom<br />
              Chennai, Tamil Nadu
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
