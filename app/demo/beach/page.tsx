'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const config = {
  couple: {
    bride: { name: "Kanika", bio: "A free spirit with a love for the ocean, sunsets, and all things beautiful.", photo: "couple-1.jpg" },
    groom: { name: "Abhishek", bio: "An adventurer at heart who found his greatest adventure in love.", photo: "couple-2.jpg" }
  },
  blessings: {
    sanskrit: "ॐ श्री गणेशाय नमः",
    line: "With the heavenly blessings of",
    families: ["Smt. Lata Devi & Shri Kamal Kapoor", "Mrs. Reena & Mr. Rajiv Kapoor"],
    daughterOf: "Daughter of Mrs. Shalini & Mr. Aakash Mittal"
  },
  events: [
    { name: "Mehendi", photo: "mehndi.jpg", date: "Friday, March 9th 2026", venue: "Taj Exotica Resort, Goa", time: "6:00 PM" },
    { name: "Haldi", photo: "haldi.jpg", date: "Friday, March 9th 2026", venue: "Taj Exotica Resort, Goa", time: "6:00 PM" },
    { name: "Cocktail", photo: "beach-sunset.jpg", date: "Friday, March 9th 2026", venue: "JW Marriott, Mussoorie", time: "6:00 PM" },
    { name: "Shaadi", photo: "flowers.jpg", date: "Saturday, March 10th 2026", venue: "Taj Exotica Resort, Goa", time: "11:00 AM" },
    { name: "Reception", photo: "venue.jpg", date: "Saturday, March 10th 2026", venue: "Taj Exotica Resort, Goa", time: "7:00 PM" }
  ],
  gallery: [
    { photo: "couple-1.jpg", caption: "The first glance" },
    { photo: "couple-2-new.jpg", caption: "A promise forever" },
    { photo: "couple-3.jpg", caption: "Celebrating us" }
  ],
  message: "We are truly delighted that you can join us on our special day. Your love, blessings, and kindness since our roka have meant the world to us.",
  rsvp: { whatsapp: "919876543210", prefilledMessage: "Hi! I'd love to attend the wedding. Count me in! 🎉" },
  thingsToKnow: [
    { emoji: "📸", title: "#ForeverTogether", desc: "Use our wedding hashtag on all your photos and stories" },
    { emoji: "🌤️", title: "Weather", desc: "Expected 22°C with cloudy skies — light layers recommended" },
    { emoji: "🚗", title: "Parking", desc: "Complimentary valet parking available at the venue entrance" },
    { emoji: "👗", title: "Dress Code", desc: "Festive elegant — dress to celebrate in style" }
  ],
  countdown: { date: "2026-12-09T18:00:00", footerText: "Our families are excited to welcome you to this joyous celebration of love." },
  hero: { backgroundImage: "beach-hero.jpg" }
}

function img(filename: string) { return `/demo/beach/images/${filename}` }

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap');

#beach-theme {
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Montserrat', sans-serif;
  background: #faf8f5;
  color: #2d2d2d;
  overflow-x: hidden;
}
#beach-theme * { box-sizing: border-box; margin: 0; padding: 0; }
#beach-theme .grain-overlay {
  position: fixed; inset: 0; pointer-events: none; z-index: 9999; opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
#beach-theme .fade-section { opacity: 0; transform: translateY(40px); }
#beach-theme h1, #beach-theme h2, #beach-theme h3 { font-family: var(--font-display); }
#beach-theme p, #beach-theme span, #beach-theme a { font-family: var(--font-body); }
#beach-theme .ornate-line { height: 1px; background: linear-gradient(90deg, transparent, #c4a265, transparent); margin: 20px auto; width: 60%; }
#beach-theme section { position: relative; }
`

function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    const tl = gsap.timeline()
    tl.from(ref.current.querySelector('.hero-title'), { y: 60, opacity: 0, duration: 1.2, ease: 'power3.out' })
      .from(ref.current.querySelector('.hero-sub'), { y: 40, opacity: 0, duration: 1, ease: 'power3.out' }, '-=0.6')
      .from(ref.current.querySelector('.hero-date'), { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    gsap.to(ref.current.querySelector('.hero-bg'), {
      yPercent: 20, ease: 'none',
      scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true }
    })
  }, [])
  return (
    <section ref={ref} style={{ height: '100vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="hero-bg" style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img(config.hero.backgroundImage)})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.6)' }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: '0 20px' }}>
        <h1 className="hero-title" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 300, letterSpacing: '0.05em', color: '#f5efe6' }}>
          {config.couple.bride.name} <span style={{ fontStyle: 'italic', fontWeight: 300, fontSize: '0.6em', opacity: 0.7 }}>&</span> {config.couple.groom.name}
        </h1>
        <p className="hero-sub" style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 16, opacity: 0.8 }}>
          Request the pleasure of your company
        </p>
        <p className="hero-date" style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', marginTop: 12, color: '#e8d5a0' }}>
          {config.events[3].date}
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: '50%', transform: 'translateX(-50%)', color: '#fff', opacity: 0.5, fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}>
        Scroll Down ↓
      </div>
    </section>
  )
}

function Invitation() {
  return (
    <section className="fade-section" style={{ padding: '100px 20px', textAlign: 'center', maxWidth: 700, margin: '0 auto' }}>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontStyle: 'italic', color: '#c4a265', marginBottom: 8 }}>{config.blessings.sanskrit}</p>
      <div className="ornate-line" />
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24, opacity: 0.6 }}>{config.blessings.line}</p>
      {config.blessings.families.map((f, i) => (
        <p key={i} style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: 6 }}>{f}</p>
      ))}
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', marginTop: 16, opacity: 0.6 }}>{config.blessings.daughterOf}</p>
      <div className="ornate-line" />
      <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 30, opacity: 0.5 }}>Cordially invite you to the wedding of</p>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 300, margin: '16px 0', color: '#2d2d2d' }}>
        {config.couple.bride.name} & {config.couple.groom.name}
      </h2>
    </section>
  )
}

function Events() {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return
    const totalScroll = trackRef.current.scrollWidth - window.innerWidth
    gsap.to(trackRef.current, {
      x: -totalScroll, ease: 'none',
      scrollTrigger: { trigger: containerRef.current, start: 'top top', end: () => `+=${totalScroll}`, scrub: 1, pin: true }
    })
  }, [])
  return (
    <section ref={containerRef} style={{ height: '100vh', overflow: 'hidden' }}>
      <div ref={trackRef} style={{ display: 'flex', height: '100%', gap: 0 }}>
        {config.events.map((evt, i) => (
          <div key={i} style={{ minWidth: '100vw', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img(evt.photo)})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4)' }} />
            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff', padding: 40 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 12 }}>0{i + 1}</p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, marginBottom: 20, color: '#f5efe6' }}>{evt.name}</h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', opacity: 0.8, marginBottom: 6 }}>{evt.date}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', opacity: 0.8, marginBottom: 6 }}>{evt.time}</p>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontStyle: 'italic', opacity: 0.7, marginTop: 8 }}>{evt.venue}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Couple() {
  return (
    <section className="fade-section" style={{ padding: '100px 20px', maxWidth: 900, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, marginBottom: 60, color: '#2d2d2d' }}>The Couple</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
        {[config.couple.bride, config.couple.groom].map((person, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ width: 220, height: 220, borderRadius: '50%', overflow: 'hidden', margin: '0 auto 24px', border: '3px solid #e8d5a0' }}>
              <img src={img(person.photo)} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, marginBottom: 8 }}>{person.name}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', opacity: 0.6, lineHeight: 1.6, maxWidth: 280, margin: '0 auto' }}>{person.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function GallerySection() {
  return (
    <section className="fade-section" style={{ padding: '100px 20px', maxWidth: 1000, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, marginBottom: 60 }}>Our Moments</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {config.gallery.map((item, i) => (
          <div key={i} style={{ position: 'relative', overflow: 'hidden', borderRadius: 8, aspectRatio: '3/4', cursor: 'pointer' }}>
            <img src={img(item.photo)} alt={item.caption} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 16px 16px', background: 'linear-gradient(transparent, rgba(0,0,0,0.6))', color: '#fff' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontStyle: 'italic' }}>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Message() {
  return (
    <section className="fade-section" style={{ padding: '100px 20px', textAlign: 'center', maxWidth: 600, margin: '0 auto' }}>
      <div className="ornate-line" />
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontStyle: 'italic', lineHeight: 1.8, color: '#4a4a4a', margin: '30px 0' }}>
        &ldquo;{config.message}&rdquo;
      </p>
      <div className="ornate-line" />
    </section>
  )
}

function RSVPSection() {
  return (
    <section style={{ position: 'relative', height: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img('beach-sunset.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.4)' }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, marginBottom: 16 }}>Will you join us?</h2>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', opacity: 0.7, marginBottom: 30 }}>Let us know via WhatsApp</p>
        <a href={`https://wa.me/${config.rsvp.whatsapp}?text=${encodeURIComponent(config.rsvp.prefilledMessage)}`}
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '14px 40px', border: '1px solid #e8d5a0', color: '#e8d5a0', fontFamily: 'var(--font-body)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#e8d5a0'; e.currentTarget.style.color = '#1a1a1a' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#e8d5a0' }}>
          RSVP on WhatsApp
        </a>
      </div>
    </section>
  )
}

function ThingsToKnow() {
  return (
    <section className="fade-section" style={{ padding: '100px 20px', maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 300, marginBottom: 60 }}>Things to Know</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
        {config.thingsToKnow.map((item, i) => (
          <div key={i} style={{ padding: 30, border: '1px solid #e8e4dc', borderRadius: 8, textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: 12 }}>{item.emoji}</span>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 400, marginBottom: 8 }}>{item.title}</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', opacity: 0.6, lineHeight: 1.6 }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  useEffect(() => {
    const target = new Date(config.countdown.date).getTime()
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000)
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [])
  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ]
  return (
    <section style={{ padding: '80px 20px', background: '#1a1a1a', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 300, color: '#f5efe6', marginBottom: 40 }}>Counting Down</h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 30 }}>
        {units.map((u, i) => (
          <div key={i}>
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 300, color: '#e8d5a0', display: 'block' }}>{String(u.value).padStart(2, '0')}</span>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#999' }}>{u.label}</span>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontStyle: 'italic', color: '#888', marginTop: 40 }}>{config.countdown.footerText}</p>
    </section>
  )
}

export default function BeachTheme() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray<HTMLElement>('#beach-theme .fade-section').forEach(el => {
      gsap.to(el, {
        opacity: 1, y: 0, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none none' }
      })
    })
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])
  return (
    <div id="beach-theme">
      <style>{CSS}</style>
      <div className="grain-overlay" />
      <Hero />
      <Invitation />
      <Events />
      <Couple />
      <GallerySection />
      <Message />
      <RSVPSection />
      <ThingsToKnow />
      <CountdownSection />
    </div>
  )
}
