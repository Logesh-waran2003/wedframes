"use client";

import { useState } from "react";

export default function RSVP() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="bg-ivory py-24 px-6">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">We Hope to See You</p>
        <h2 className="font-heading text-dark text-4xl md:text-5xl mb-12">RSVP</h2>

        {submitted ? (
          <div className="py-12">
            <p className="font-heading text-gold text-2xl mb-2">Thank You!</p>
            <p className="font-body text-dark/70">We can&apos;t wait to celebrate with you.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div>
              <label className="block font-body text-dark/70 text-sm mb-1">Full Name</label>
              <input
                type="text"
                required
                className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark focus:border-gold focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block font-body text-dark/70 text-sm mb-1">Email</label>
              <input
                type="email"
                required
                className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark focus:border-gold focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block font-body text-dark/70 text-sm mb-1">Attending?</label>
              <select
                required
                className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark focus:border-gold focus:outline-none transition-colors"
              >
                <option value="">Select</option>
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
            </div>

            <div>
              <label className="block font-body text-dark/70 text-sm mb-1">Number of Guests</label>
              <input
                type="number"
                min={1}
                max={5}
                defaultValue={1}
                className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark focus:border-gold focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block font-body text-dark/70 text-sm mb-1">Message (Optional)</label>
              <textarea
                rows={3}
                className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark focus:border-gold focus:outline-none transition-colors resize-none"
                placeholder="A note for the couple..."
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-4 bg-gold text-ivory font-heading text-lg tracking-wider hover:bg-gold/90 transition-colors"
            >
              Send RSVP
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
