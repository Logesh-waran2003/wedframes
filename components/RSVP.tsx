"use client";

import { useState, FormEvent } from "react";

export default function RSVP() {
  const [attending, setAttending] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ background: "#F2D7D5" }} className="py-24 px-6">
        <p
          className="text-2xl text-center py-12"
          style={{ color: "#1d1d1f", fontFamily: "var(--font-playfair), serif" }}
        >
          We can&apos;t wait to celebrate with you ♥
        </p>
      </section>
    );
  }

  const inputClass =
    "border-b border-[#1d1d1f]/30 bg-transparent w-full py-3 px-0 text-lg outline-none block focus:border-[#C9A84C] placeholder:text-[#1d1d1f]/40";

  return (
    <section style={{ background: "#F2D7D5" }} className="py-24 px-6">
      <h2
        className="text-4xl text-center"
        style={{ color: "#1d1d1f", fontFamily: "var(--font-playfair), serif" }}
      >
        Join Our Celebration
      </h2>
      <p
        className="text-center mt-3 italic"
        style={{ color: "rgba(29,29,31,0.6)", fontFamily: "var(--font-cormorant), serif" }}
      >
        Kindly respond by 1st February 2026
      </p>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-12">
        <div className="mb-8">
          <input
            type="text"
            placeholder="Your full name"
            required
            className={inputClass}
            style={{ color: "#1d1d1f", fontFamily: "var(--font-cormorant), serif" }}
          />
        </div>

        <div className="mb-8">
          <input
            type="email"
            placeholder="your@email.com"
            required
            className={inputClass}
            style={{ color: "#1d1d1f", fontFamily: "var(--font-cormorant), serif" }}
          />
        </div>

        <div className="mb-8">
          <select
            required
            className={inputClass}
            style={{ color: "#1d1d1f", fontFamily: "var(--font-cormorant), serif" }}
            defaultValue=""
          >
            <option value="" disabled>Number of guests</option>
            <option value="1">1 guest</option>
            <option value="2">2 guests</option>
            <option value="3">3 guests</option>
            <option value="4+">4+ guests</option>
          </select>
        </div>

        <div className="mb-8 flex gap-4">
          <label
            className={`px-6 py-2 rounded-full cursor-pointer transition-colors text-sm ${
              attending === "yes"
                ? "bg-[#1d1d1f] text-white"
                : "border border-[#1d1d1f]/30 text-[#1d1d1f]"
            }`}
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            <input
              type="radio"
              name="attending"
              value="yes"
              className="hidden"
              onChange={() => setAttending("yes")}
            />
            Joyfully Accepts
          </label>
          <label
            className={`px-6 py-2 rounded-full cursor-pointer transition-colors text-sm ${
              attending === "no"
                ? "bg-[#1d1d1f] text-white"
                : "border border-[#1d1d1f]/30 text-[#1d1d1f]"
            }`}
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            <input
              type="radio"
              name="attending"
              value="no"
              className="hidden"
              onChange={() => setAttending("no")}
            />
            Regretfully Declines
          </label>
        </div>

        <div className="mb-8">
          <textarea
            rows={3}
            placeholder="A note for the couple (optional)"
            className={inputClass}
            style={{ color: "#1d1d1f", fontFamily: "var(--font-cormorant), serif", resize: "none" }}
          />
        </div>

        <button
          type="submit"
          className="mt-10 w-full py-4 rounded-full text-sm uppercase tracking-[0.2em] text-white transition-colors duration-300 bg-[#1d1d1f] hover:bg-[#C9A84C]"
          style={{ fontFamily: "var(--font-playfair), serif" }}
        >
          Send RSVP
        </button>
      </form>
    </section>
  );
}
