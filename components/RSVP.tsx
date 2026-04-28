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
        <p className="font-display text-gold/70 text-xs tracking-[0.5em] uppercase mb-4">
          We Hope to See You
        </p>
        <h2 className="font-script text-dark mb-12" style={{ fontSize: "clamp(48px, 7vw, 72px)" }}>
          RSVP
        </h2>

        {submitted ? (
          <div className="py-12">
            <div className="shimmer-line w-32 h-px mx-auto mb-8" />
            <p className="font-script text-gold mb-3" style={{ fontSize: "clamp(32px, 5vw, 48px)" }}>
              Thank You!
            </p>
            <p className="font-display text-dark/60 text-base italic">
              We can&apos;t wait to celebrate with you.
            </p>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label className="block font-display text-dark/60 text-xs tracking-widest uppercase mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark text-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block font-display text-dark/60 text-xs tracking-widest uppercase mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark text-lg focus:border-gold focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block font-display text-dark/60 text-xs tracking-widest uppercase mb-2">
                  Attending?
                </label>
                <select
                  required
                  className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark text-lg focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select</option>
                  <option value="yes">Joyfully Accept</option>
                  <option value="no">Regretfully Decline</option>
                </select>
              </div>

              <div>
                <label className="block font-display text-dark/60 text-xs tracking-widest uppercase mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min={1}
                  max={5}
                  defaultValue={1}
                  className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark text-lg focus:border-gold focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-display text-dark/60 text-xs tracking-widest uppercase mb-2">
                  Message (Optional)
                </label>
                <textarea
                  rows={3}
                  className="w-full border-b border-dark/20 bg-transparent py-3 font-body text-dark text-lg focus:border-gold focus:outline-none transition-colors resize-none"
                  placeholder="A note for the couple..."
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-4 bg-gold text-ivory font-display text-sm tracking-[0.3em] uppercase hover:bg-gold/90 transition-colors"
              >
                Send RSVP
              </button>
            </form>

            <div className="mt-8">
              <p className="font-display text-dark/30 text-xs tracking-widest uppercase mb-5">or</p>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20RSVP%20for%20Karthick%20%26%20Priya%27s%20wedding"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 border border-green-600/30 text-green-700 font-display text-xs tracking-[0.3em] uppercase hover:bg-green-50 transition-colors"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                RSVP via WhatsApp
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
