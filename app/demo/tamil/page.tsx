'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const config = {
  couple: {
    bride: { name: "Priya", tamilName: "பிரியா", star: "Rohini", rasi: "Rishaba", photo: "couple-1.jpg" },
    groom: { name: "Karthik", tamilName: "கார்த்திக்", star: "Uthiram", rasi: "Simha", photo: "couple-2.jpg" }
  },
  blessings: { tamil: "பிள்ளையார் துணை", sanskrit: "" },
  families: {
    groom: { father: "Thiru. Ramanathan", mother: "Thirumathi. Meenakshi", place: "Chennai" },
    bride: { father: "Thiru. Senthilkumar", mother: "Thirumathi. Lakshmi", place: "Madurai" }
  },
  muhurtham: {
    date: "Saturday, December 7th 2026", tamilDate: "மார்கழி 22, விகாரி வருடம்",
    time: "6:30 AM — 7:45 AM", nakshatra: "Uthiram", yogam: "Siddha Yogam",
    venue: "Sri Meenakshi Sundareswarar Temple", venueAddress: "Madurai, Tamil Nadu", mapLink: "#"
  },
  ceremonies: [
    { name: "Janavasam", tamil: "ஜனவாசம்", desc: "The groom's grand procession to the wedding venue", time: "Dec 6, 6:00 PM", icon: "🐘" },
    { name: "Oonjal", tamil: "ஊஞ்சல்", desc: "The couple is seated on a swing while elders bless them", time: "Dec 7, 5:30 AM", icon: "🎋" },
    { name: "Muhurtham", tamil: "முகூர்த்தம்", desc: "The sacred tying of the Thali", time: "Dec 7, 6:30 AM", icon: "🪔" },
    { name: "Nalungu", tamil: "நாலுங்கு", desc: "Playful post-wedding games between the couple and families", time: "Dec 7, 10:00 AM", icon: "🎭" },
    { name: "Sadhya", tamil: "சாத்யா விருந்து", desc: "Grand feast served on banana leaves for all guests", time: "Dec 7, 12:00 PM", icon: "🍌" },
    { name: "Reception", tamil: "வரவேற்பு", desc: "Evening celebration with music, dance, and blessings", time: "Dec 7, 6:00 PM", icon: "🎶" }
  ],
  gallery: [
    { photo: "couple-1.jpg", caption: "நட்சத்திரங்களில் எழுதப்பட்டது" },
    { photo: "couple-2.jpg", caption: "இரு உள்ளங்கள், ஒரு பயணம்" },
    { photo: "couple-3.jpg", caption: "என்றென்றும் இங்கே தொடங்குகிறது" }
  ],
  message: "இந்த புனிதமான தருணத்தை உங்களுடன் பகிர்ந்து கொள்வதில் நாங்கள் மிகவும் மகிழ்ச்சியடைகிறோம். We are overjoyed to share this sacred moment with you.",
  rsvp: { whatsapp: "919876543210", prefilledMessage: "வணக்கம்! நாங்கள் திருமணத்திற்கு மகிழ்ச்சியுடன் வருகிறோம்! 🙏" },
  countdown: { date: "2026-12-07T06:30:00", footerText: "இரு குடும்பங்களும் ஒன்றாக இணையும் புனித தருணம்" }
}

function img(filename: string) { return `/demo/tamil/images/${filename}` }

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Poppins:wght@300;400;500&family=Noto+Sans+Tamil:wght@400;600&display=swap');

#tamil-theme {
  --font-display: 'Cormorant Garamond', serif;
  --font-body: 'Poppins', sans-serif;
  --font-tamil: 'Noto Sans Tamil', sans-serif;
  --gold: #c9a55a;
  --gold-light: #e8d5a0;
  --bg: #0d0608;
  --text: #f5efe6;
  background: var(--bg);
  color: var(--text);
  overflow-x: hidden;
}
#tamil-theme * { box-sizing: border-box; margin: 0; padding: 0; }
#tamil-theme .glass {
  background: rgba(255,255,255,0.03);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(201,165,90,0.1);
}
#tamil-theme .gold-shimmer {
  background: linear-gradient(90deg, #c9a55a, #f5efe6, #c9a55a, #e8d5a0, #c9a55a);
  background-size: 300% 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 4s ease-in-out infinite;
}
@keyframes shimmer { 0%,100%{background-position:0% 50%} 50%{background-position:100% 50%} }
#tamil-theme .glow-pulse { animation: glowPulse 3s ease-in-out infinite; }
@keyframes glowPulse { 0%,100%{filter:drop-shadow(0 0 20px rgba(201,165,90,0.3))} 50%{filter:drop-shadow(0 0 40px rgba(201,165,90,0.6))} }
#tamil-theme .float-1 { animation: float1 5s ease-in-out infinite; }
#tamil-theme .float-2 { animation: float1 4s ease-in-out infinite 0.7s; }
#tamil-theme .float-3 { animation: float1 3.5s ease-in-out infinite 1.2s; }
@keyframes float1 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-15px) rotate(3deg)} }
#tamil-theme .particles { position:absolute; inset:0; overflow:hidden; pointer-events:none; }
#tamil-theme .particle { position:absolute; width:3px; height:3px; background:#c9a55a; border-radius:50%; opacity:0; animation:particleFloat linear infinite; }
@keyframes particleFloat { 0%{opacity:0;transform:translateY(100vh) scale(0)} 10%{opacity:0.8} 90%{opacity:0.3} 100%{opacity:0;transform:translateY(-20vh) scale(1)} }
#tamil-theme .ornate-line { height:1px; background:linear-gradient(90deg,transparent,#c9a55a,transparent); }
#tamil-theme .diamond-reveal { clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%); }
#tamil-theme .fade-up { opacity: 1; }
`

function Particles({ count = 20 }: { count?: number }) {
  return (
    <div className="particles">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="particle" style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${4 + Math.random() * 6}s`,
          animationDelay: `${Math.random() * 5}s`,
          width: `${2 + Math.random() * 3}px`,
          height: `${2 + Math.random() * 3}px`,
        }} />
      ))}
    </div>
  )
}

function Lantern({ className, style }: { className: string; style?: React.CSSProperties }) {
  return (
    <img src={img('lantern.avif')} alt="" className={className}
      style={{ width: 48, height: 'auto', position: 'absolute', opacity: 0.7, ...style }} />
  )
}

function Vinayagar() {
  return (
    <div style={{ background: '#0d0608', textAlign: 'center', padding: '90px 20px 70px', position: 'relative', overflow: 'hidden' }}>
      {/* subtle radial bg glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,165,90,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Ganesha image — no ring, just clean drop shadow */}
        <img
          src="/demo/tamil/images/vinayagar-gold.png"
          alt="Lord Ganesha"
          style={{ width: 140, height: 'auto', filter: 'drop-shadow(0 0 32px rgba(201,165,90,0.5))' }}
        />
        {/* thin rule above text */}
        <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(201,165,90,0.35),transparent)', width: 180, margin: '36px auto 28px' }} />
        {/* Tamil invocation — primary */}
        <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1.25rem', color: '#c9a55a', letterSpacing: '0.06em', margin: 0 }}>
          பிள்ளையார் துணை
        </p>
        {/* English — secondary, very quiet */}
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.58rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#c9a55a', opacity: 0.3, marginTop: 12 }}>
          With the blessings of Lord Ganesha
        </p>
      </div>
    </div>
  )
}

function SplitHero() {
  const ref = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const rightRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current || !leftRef.current || !rightRef.current) return
    const tl = gsap.timeline({
      scrollTrigger: { trigger: ref.current, start: 'top top', end: '+=180%', scrub: 2.5 }
    })
    tl.to(leftRef.current, { xPercent: -100, ease: 'power3.inOut' }, 0)
      .to(rightRef.current, { xPercent: 100, ease: 'power3.inOut' }, 0)
      .from(ref.current.querySelector('.hero-content'), { opacity: 0, scale: 0.9, duration: 0.8 }, 0.4)
  }, [])
  return (
    <section ref={ref} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#0d0608' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${img('hero-bg.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.35)', zIndex: 0 }} />
      <div ref={leftRef} style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', background: 'linear-gradient(135deg, rgba(26,21,16,0.85), rgba(13,6,8,0.85))', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRight: '1px solid rgba(201,165,90,0.2)' }}>
        <div style={{ textAlign: 'center', color: '#c9a55a' }}>
          <div style={{ width: 1, height: 60, background: 'linear-gradient(180deg, transparent, rgba(201,165,90,0.5))', margin: '0 auto 28px' }} />
          <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1.15rem', letterSpacing: '0.06em', margin: 0 }}>பிள்ளையார் துணை</p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.55rem', letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.35, marginTop: 10 }}>Vinayagar Thunai</p>
          <div style={{ width: 1, height: 60, background: 'linear-gradient(180deg, rgba(201,165,90,0.5), transparent)', margin: '28px auto 0' }} />
        </div>
      </div>
      <div ref={rightRef} style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', background: 'linear-gradient(225deg, rgba(26,21,16,0.85), rgba(13,6,8,0.85))', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(201,165,90,0.2)' }}>
        <div style={{ textAlign: 'center' }}>
          <Lantern className="float-1" style={{ top: '20%', right: '20%' }} />
          <Lantern className="float-2" style={{ bottom: '25%', left: '15%' }} />
          <Lantern className="float-3" style={{ top: '40%', left: '30%' }} />
        </div>
      </div>
      <div className="hero-content" style={{ position: 'absolute', inset: 0, zIndex: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <Particles count={25} />
        <h1 className="gold-shimmer" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 400, letterSpacing: '0.04em' }}>
          {config.couple.groom.name} & {config.couple.bride.name}
        </h1>
        <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1.1rem', color: '#c9a55a', marginTop: 12, opacity: 0.8 }}>
          {config.couple.groom.tamilName} & {config.couple.bride.tamilName}
        </p>
        <div className="ornate-line" style={{ width: 120, margin: '24px auto' }} />
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.85rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.6, marginTop: 8 }}>
          {config.muhurtham.date}
        </p>
        <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.85rem', color: '#c9a55a', opacity: 0.6, marginTop: 6 }}>
          {config.muhurtham.tamilDate}
        </p>
      </div>
    </section>
  )
}

function InviteCard() {
  return (
    <section className="fade-up" style={{ padding: '100px 20px', display: 'flex', justifyContent: 'center' }}>
      <div className="glass" style={{ maxWidth: 600, width: '100%', padding: '60px 40px', borderRadius: 16, textAlign: 'center' }}>
        <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1.1rem', color: '#c9a55a', marginBottom: 24 }}>{config.blessings.tamil}</p>
        <div className="ornate-line" style={{ width: '60%', margin: '0 auto 30px' }} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30, marginBottom: 30 }}>
          <div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.4, marginBottom: 8 }}>Groom&apos;s Family</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>{config.families.groom.father}</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>{config.families.groom.mother}</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', opacity: 0.5, marginTop: 4 }}>{config.families.groom.place}</p>
          </div>
          <div>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.4, marginBottom: 8 }}>Bride&apos;s Family</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>{config.families.bride.father}</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem' }}>{config.families.bride.mother}</p>
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', opacity: 0.5, marginTop: 4 }}>{config.families.bride.place}</p>
          </div>
        </div>
        <div className="ornate-line" style={{ width: '40%', margin: '0 auto 30px' }} />
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.4, marginBottom: 8 }}>Muhurtham</p>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.3rem', color: '#e8d5a0' }}>{config.muhurtham.date}</p>
        <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.9rem', color: '#c9a55a', opacity: 0.7, marginTop: 4 }}>{config.muhurtham.tamilDate}</p>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', marginTop: 12 }}>{config.muhurtham.time}</p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 16 }}>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', opacity: 0.5 }}>Nakshatra: {config.muhurtham.nakshatra}</span>
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.75rem', opacity: 0.5 }}>Yogam: {config.muhurtham.yogam}</span>
        </div>
      </div>
    </section>
  )
}

const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X']

function Ceremonies() {
  return (
    <section className="fade-up" style={{ padding: '100px 20px', maxWidth: 860, margin: '0 auto' }}>
      <p style={{ textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: '0.6rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a55a', opacity: 0.45, marginBottom: 14 }}>The Sacred Rituals</p>
      <h2 style={{ textAlign: 'center', fontFamily: "'Cormorant Garamond', serif", color: '#e8d5a0', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 400, marginBottom: 6 }}>Ceremonies</h2>
      <p style={{ textAlign: 'center', fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.85rem', color: '#c9a55a', opacity: 0.4, marginBottom: 70 }}>நிகழ்ச்சிகள்</p>

      <div style={{ position: 'relative' }}>
        {config.ceremonies.map((c, i) => (
          <div key={i}>
            <div style={{ display: 'grid', gridTemplateColumns: '48px 1fr auto', gap: '0 28px', alignItems: 'start', padding: '32px 0' }}>
              {/* Roman numeral */}
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.75rem', color: '#c9a55a', opacity: 0.35, letterSpacing: '0.1em', paddingTop: 4, textAlign: 'right' }}>
                {ROMAN[i]}
              </div>
              {/* Name + desc */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap', marginBottom: 8 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)', fontWeight: 400, color: '#e8d5a0', margin: 0 }}>{c.name}</h3>
                  <span style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.82rem', color: '#c9a55a', opacity: 0.55 }}>{c.tamil}</span>
                </div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.78rem', color: '#fff', opacity: 0.45, lineHeight: 1.75, margin: 0, maxWidth: 480 }}>{c.desc}</p>
              </div>
              {/* Time */}
              <div style={{ textAlign: 'right', paddingTop: 4 }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.68rem', color: '#c9a55a', opacity: 0.6, letterSpacing: '0.08em', whiteSpace: 'nowrap', margin: 0 }}>{c.time}</p>
              </div>
            </div>
            {i < config.ceremonies.length - 1 && (
              <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,165,90,0.18) 20%, rgba(201,165,90,0.18) 80%, transparent)' }} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

function CoupleSection() {
  return (
    <section className="fade-up" style={{ padding: '100px 20px', maxWidth: 900, margin: '0 auto' }}>
      <p style={{ textAlign: 'center', fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a55a', opacity: 0.5, marginBottom: 12 }}>The Ones Getting Married</p>
      <h2 style={{ textAlign: 'center', fontFamily: "'Cormorant Garamond', serif", color: '#e8d5a0', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 8 }}>The Couple</h2>
      <p style={{ textAlign: 'center', fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.9rem', color: '#c9a55a', opacity: 0.5, marginBottom: 70 }}>தம்பதியர்</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60, justifyItems: 'center' }}>
        {[config.couple.groom, config.couple.bride].map((person, i) => (
          <div key={i} style={{ textAlign: 'center', width: '100%', maxWidth: 340 }}>
            <div style={{ position: 'relative', width: 240, height: 240, margin: '0 auto 32px' }}>
              <div style={{ position: 'absolute', inset: -8, background: 'linear-gradient(135deg, rgba(201,165,90,0.4), transparent, rgba(201,165,90,0.2))', clipPath: 'polygon(50% 0%,100% 50%,50% 100%,0% 50%)', borderRadius: 4 }} />
              <div className="diamond-reveal" style={{ width: '100%', height: '100%', overflow: 'hidden', border: '1px solid rgba(201,165,90,0.25)' }}>
                <img src={img(person.photo)} alt={person.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#e8d5a0', marginBottom: 6, fontWeight: 400 }}>{person.name}</h3>
            <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1.1rem', color: '#c9a55a', opacity: 0.8, marginBottom: 20 }}>{person.tamilName}</p>
            <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(201,165,90,0.3),transparent)', marginBottom: 20 }} />
            <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a55a', opacity: 0.45, marginBottom: 4 }}>Star</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', color: '#e8d5a0' }}>{person.star}</p>
              </div>
              <div style={{ width: 1, background: 'rgba(201,165,90,0.2)' }} />
              <div style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#c9a55a', opacity: 0.45, marginBottom: 4 }}>Rasi</p>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', color: '#e8d5a0' }}>{person.rasi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Venue() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!ref.current) return
    gsap.to(ref.current.querySelector('.venue-bg'), {
      yPercent: 15, ease: 'none',
      scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: true }
    })
  }, [])
  return (
    <section ref={ref} style={{ position: 'relative', height: '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="venue-bg" style={{ position: 'absolute', inset: '-15% 0', backgroundImage: `url(${img('temple-gopuram.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.35)' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,6,8,0.85) 0%, rgba(13,6,8,0.3) 50%, rgba(13,6,8,0.6) 100%)' }} />
      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: 40 }}>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a55a', opacity: 0.6, marginBottom: 16 }}>Venue</p>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', color: '#e8d5a0', marginBottom: 12, fontWeight: 400 }}>{config.muhurtham.venue}</h2>
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.95rem', opacity: 0.75, marginBottom: 8 }}>{config.muhurtham.venueAddress}</p>
        <div className="ornate-line" style={{ width: 80, margin: '20px auto' }} />
        <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.9rem', opacity: 0.65, letterSpacing: '0.05em' }}>{config.muhurtham.time}</p>
        <a href={config.muhurtham.mapLink} target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', marginTop: 24, padding: '10px 28px', border: '1px solid rgba(201,165,90,0.5)', color: '#c9a55a', fontFamily: "'Poppins', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 4, transition: 'all 0.3s ease' }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,165,90,0.15)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
          Get Directions →
        </a>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section style={{ padding: '80px 20px', maxWidth: 1000, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', fontFamily: "'Cormorant Garamond', serif", color: '#e8d5a0', fontSize: '2.5rem', marginBottom: 16 }}>Our Moments</h2>
      <p style={{ textAlign: 'center', fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.85rem', color: '#c9a55a', opacity: 0.6, marginBottom: 48 }}>நம் நினைவுகள்</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          { src: 'couple-1.jpg', span: '1 / span 2', rowSpan: 'span 2' },
          { src: 'flowers.jpg', span: undefined, rowSpan: undefined },
          { src: 'kolam.jpg', span: undefined, rowSpan: undefined },
          { src: 'couple-2.jpg', span: undefined, rowSpan: undefined },
          { src: 'mehndi.jpg', span: undefined, rowSpan: undefined },
          { src: 'couple-3.jpg', span: '1 / span 2', rowSpan: undefined },
          { src: 'haldi.jpg', span: undefined, rowSpan: undefined },
        ].map((item, i) => (
          <div key={i} style={{
            gridColumn: item.span,
            gridRow: item.rowSpan,
            aspectRatio: item.rowSpan ? '1/2' : '1/1',
            overflow: 'hidden',
            borderRadius: 8,
            border: '1px solid rgba(201,165,90,0.15)',
          }}>
            <img src={`/demo/tamil/images/${item.src}`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
              onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

function RSVPSection() {
  return (
    <section style={{ position: 'relative', padding: '100px 20px', textAlign: 'center', overflow: 'hidden' }}>
      <Particles count={15} />
      <img src={img('lantern.avif')} alt="" className="float-1" style={{ position: 'absolute', top: '10%', left: '10%', width: 48, opacity: 0.4 }} />
      <img src={img('lantern.avif')} alt="" className="float-2" style={{ position: 'absolute', top: '20%', right: '12%', width: 48, opacity: 0.3 }} />
      <img src={img('lantern.avif')} alt="" className="float-3" style={{ position: 'absolute', bottom: '15%', left: '20%', width: 48, opacity: 0.35 }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#e8d5a0', fontSize: '2.5rem', marginBottom: 16 }}>Join Us</h2>
        <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '1.1rem', color: '#c9a55a', opacity: 0.85, marginBottom: 8 }}>{config.message}</p>
        <div className="ornate-line" style={{ width: 80, margin: '24px auto' }} />
        <a href={`https://wa.me/${config.rsvp.whatsapp}?text=${encodeURIComponent(config.rsvp.prefilledMessage)}`}
          target="_blank" rel="noopener noreferrer"
          style={{ display: 'inline-block', padding: '14px 40px', border: '1px solid #c9a55a', color: '#c9a55a', fontFamily: "'Poppins', sans-serif", fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 4, transition: 'all 0.3s ease', marginTop: 16 }}
          onMouseEnter={e => { e.currentTarget.style.background = '#c9a55a'; e.currentTarget.style.color = '#0a0a0a' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a55a' }}>
          RSVP on WhatsApp
        </a>
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
    { label: 'நாட்கள்', en: 'Days', value: timeLeft.days },
    { label: 'மணி', en: 'Hours', value: timeLeft.hours },
    { label: 'நிமிடம்', en: 'Min', value: timeLeft.minutes },
    { label: 'வினாடி', en: 'Sec', value: timeLeft.seconds }
  ]
  return (
    <section style={{ padding: '80px 20px', textAlign: 'center' }}>
      <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.65rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#c9a55a', opacity: 0.5, marginBottom: 12 }}>Time Remaining</p>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", color: '#e8d5a0', fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: 8 }}>Counting Down</h2>
      <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.9rem', color: '#c9a55a', opacity: 0.5, marginBottom: 48 }}>நேரம் எண்ணுகிறோம்</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap' }}>
        {units.map((u, i) => (
          <div key={i} className="glass" style={{ padding: '28px 24px', borderRadius: 16, minWidth: 100, textAlign: 'center' }}>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 400, color: '#e8d5a0', display: 'block', lineHeight: 1 }}>{String(u.value).padStart(2, '0')}</span>
            <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(201,165,90,0.3),transparent)', margin: '12px 0 10px' }} />
            <span style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.8rem', color: '#c9a55a', display: 'block' }}>{u.label}</span>
            <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '0.6rem', color: '#c9a55a', opacity: 0.4, display: 'block', marginTop: 2, letterSpacing: '0.1em' }}>{u.en}</span>
          </div>
        ))}
      </div>
      <p style={{ fontFamily: "'Noto Sans Tamil', sans-serif", fontSize: '0.95rem', color: '#c9a55a', opacity: 0.6, marginTop: 48 }}>{config.countdown.footerText}</p>
    </section>
  )
}

export default function TamilTheme() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray<HTMLElement>('#tamil-theme .fade-up').forEach(el => {
      gsap.from(el, {
        opacity: 0, y: 40, duration: 1.2, ease: 'power2.out',
        immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      })
    })
    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])
  return (
    <div id="tamil-theme">
      <style>{CSS}</style>
      <Vinayagar />
      <SplitHero />
      <InviteCard />
      <Ceremonies />
      <CoupleSection />
      <Venue />
      <Gallery />
      <CountdownSection />
      <RSVPSection />
    </div>
  )
}
