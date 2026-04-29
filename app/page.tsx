'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'

function FloralLeft() {
  return (
    <svg width="120" height="200" viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.15 }}>
      <path d="M60 190 C60 190 20 155 15 110 C10 65 40 45 60 65 C80 45 110 65 105 110 C100 155 60 190 60 190Z" fill="#C9A84C"/>
      <path d="M60 65 C60 65 30 35 35 12 C40 -3 60 8 60 25 C60 8 80 -3 85 12 C90 35 60 65 60 65Z" fill="#C9A84C"/>
      <path d="M15 110 C15 110 -8 88 8 68 C18 53 32 63 28 78" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
      <path d="M105 110 C105 110 128 88 112 68 C102 53 88 63 92 78" stroke="#C9A84C" strokeWidth="1.5" fill="none"/>
      <circle cx="60" cy="65" r="5" fill="#C9A84C"/>
      <circle cx="32" cy="100" r="3" fill="#C9A84C" opacity="0.6"/>
      <circle cx="88" cy="100" r="3" fill="#C9A84C" opacity="0.6"/>
      <circle cx="45" cy="145" r="3" fill="#C9A84C" opacity="0.4"/>
      <circle cx="75" cy="145" r="3" fill="#C9A84C" opacity="0.4"/>
      <circle cx="60" cy="170" r="4" fill="#C9A84C" opacity="0.3"/>
    </svg>
  )
}

function OrnamentDivider() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, margin: '24px 0' }}>
      <div style={{ width: 50, height: 1, background: 'linear-gradient(to right, transparent, #C9A84C)' }} />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 8 L20 8 L14.5 12 L16.5 18 L12 14 L7.5 18 L9.5 12 L4 8 L10.5 8 Z" fill="#C9A84C" opacity="0.8"/>
      </svg>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C', opacity: 0.5 }} />
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 8 L20 8 L14.5 12 L16.5 18 L12 14 L7.5 18 L9.5 12 L4 8 L10.5 8 Z" fill="#C9A84C"/>
      </svg>
      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C9A84C', opacity: 0.5 }} />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 8 L20 8 L14.5 12 L16.5 18 L12 14 L7.5 18 L9.5 12 L4 8 L10.5 8 Z" fill="#C9A84C" opacity="0.8"/>
      </svg>
      <div style={{ width: 50, height: 1, background: 'linear-gradient(to left, transparent, #C9A84C)' }} />
    </div>
  )
}

const templates = [
  { num: '01', name: 'Cinematic', label: 'Most Popular', desc: 'A layered parallax experience with envelope reveal, firefly particles, and cinematic scroll storytelling.', tags: ['Cinematic', 'Parallax', 'GSAP'], href: '/demo/cinematic', preview: 'Dark luxury · Layered parallax · Envelope reveal' },
  { num: '02', name: 'Beach', label: 'North Indian', desc: 'Elegant beach-inspired design with horizontal scroll events, warm ivory tones, and smooth GSAP animations.', tags: ['Beach', 'Elegant', 'Warm'], href: '/demo/beach', preview: 'Ivory & gold · Horizontal scroll · Warm tones' },
  { num: '03', name: 'Tamil', label: 'Traditional', desc: 'Dark luxury Tamil wedding invite with split-door hero, gold shimmer, lanterns, and bilingual content.', tags: ['Tamil', 'Bilingual', 'Dark Luxury'], href: '/demo/tamil', preview: 'Dark gold · Split-door hero · Tamil + English' },
  { num: '04', name: 'South Indian', label: 'New', desc: 'Illustrated South Indian wedding invite with temple scenes, marigold aesthetics, ceremony timeline, and live countdown.', tags: ['South Indian', 'Illustrated', 'Tamil'], href: '/demo/southindian', preview: 'Marigold & gold · Temple scenes · Ceremony timeline' }
]

const features = [
  { icon: '📱', title: 'Mobile First', desc: 'Looks stunning on every screen, from phone to desktop.' },
  { icon: '✨', title: 'GSAP Animations', desc: 'Cinematic scroll experiences that feel like a movie.' },
  { icon: '💌', title: 'WhatsApp RSVP', desc: 'One-tap RSVP — guests confirm in seconds.' },
  { icon: '🎨', title: '3 Themes', desc: 'Cinematic, Beach, and Tamil — more coming soon.' },
  { icon: '⚡', title: 'Instant Share', desc: 'One link. Share anywhere. No app needed.' },
  { icon: '🔒', title: 'Private & Secure', desc: 'Your invite, your guests, your privacy.' },
]

const steps = [
  { n: '1', title: 'Pick a theme', desc: 'Browse our curated collection of premium wedding invite templates.' },
  { n: '2', title: 'Personalise', desc: 'Add your names, date, venue, photos, and love story.' },
  { n: '3', title: 'Share the link', desc: 'Send one beautiful link to all your guests via WhatsApp or email.' },
]

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 1s ease, transform 1s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <main style={{ background: '#FDFAF6', color: '#1a1a2e', minHeight: '100vh', fontFamily: 'var(--font-body)', overflowX: 'hidden' }}>

      <nav style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(253,250,246,0.94)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(201,168,76,0.18)', padding: '0 clamp(20px, 5vw, 80px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.9rem', color: '#C9A84C', lineHeight: 1 }}>WedFrames</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          <a href='#templates' style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#5a4a3a', textDecoration: 'none', letterSpacing: '0.04em' }}>Templates</a>
          <a href='#how' style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: '#5a4a3a', textDecoration: 'none', letterSpacing: '0.04em' }}>How it works</a>
          <Link href='/demo/cinematic' style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase', background: '#C9A84C', color: '#fff', padding: '9px 22px', borderRadius: 2, textDecoration: 'none', fontWeight: 500 }}>View Demo</Link>
        </div>
      </nav>

      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '80px clamp(20px, 5vw, 60px) 60px', position: 'relative', background: 'linear-gradient(160deg, #FDFAF6 0%, #FDF5EC 60%, #FDFAF6 100%)' }}>
        <div style={{ position: 'absolute', top: 40, left: 20, pointerEvents: 'none' }}><FloralLeft /></div>
        <div style={{ position: 'absolute', top: 40, right: 20, pointerEvents: 'none', transform: 'scaleX(-1)' }}><FloralLeft /></div>
        <div style={{ position: 'absolute', bottom: 40, left: 20, pointerEvents: 'none', transform: 'scaleY(-1)' }}><FloralLeft /></div>
        <div style={{ position: 'absolute', bottom: 40, right: 20, pointerEvents: 'none', transform: 'scale(-1,-1)' }}><FloralLeft /></div>
        <div style={{ position: 'absolute', top: '15%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div ref={heroRef} style={{ position: 'relative', zIndex: 1, maxWidth: 680 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: '1px solid rgba(201,168,76,0.45)', borderRadius: 2, padding: '7px 22px', marginBottom: 40, background: 'rgba(201,168,76,0.05)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#9a7a30', fontWeight: 500 }}>✦   Digital Wedding Invitations   ✦</span>
          </div>

          <div style={{ marginBottom: 4 }}>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(3.2rem, 9vw, 6rem)', color: '#C9A84C', lineHeight: 1.05, display: 'block' }}>Karthick</span>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, margin: '6px 0' }}>
              <div style={{ width: 48, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.6))' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.65rem', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#9a7a30' }}>weds</span>
              <div style={{ width: 48, height: 1, background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.6))' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-script)', fontSize: 'clamp(3.2rem, 9vw, 6rem)', color: '#C9A84C', lineHeight: 1.05, display: 'block' }}>Priya</span>
          </div>

          <OrnamentDivider />

          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(0.78rem, 1.4vw, 0.92rem)', fontWeight: 400, color: '#7a6040', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            June 21, 2026 · The Grand Palace, Mumbai
          </p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)', fontWeight: 300, color: '#5a5070', maxWidth: 460, margin: '20px auto 38px', lineHeight: 1.85 }}>
            Create stunning digital wedding invitations with cinematic animations, bilingual support, and one-tap WhatsApp RSVP.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href='#templates' style={{ display: 'inline-block', padding: '14px 38px', background: '#C9A84C', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.76rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2, fontWeight: 500, transition: 'all 0.25s ease', boxShadow: '0 4px 22px rgba(201,168,76,0.32)' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b8943e' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#C9A84C' }}>
              Browse Templates
            </a>
            <Link href='/demo/cinematic' style={{ display: 'inline-block', padding: '14px 38px', background: 'transparent', color: '#7a6040', border: '1px solid rgba(201,168,76,0.55)', fontFamily: 'var(--font-body)', fontSize: '0.76rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2, fontWeight: 400, transition: 'all 0.25s ease' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
              View Live Demo
            </Link>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: '#b0a080', marginTop: 30, letterSpacing: '0.08em' }}>3 premium themes · GSAP animations · WhatsApp RSVP</p>
        </div>

        <div style={{ position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#C9A84C', opacity: 0.5 }}>Scroll</span>
          <div style={{ width: 1, height: 30, background: 'linear-gradient(to bottom, rgba(201,168,76,0.5), transparent)' }} />
        </div>
      </section>

      <section id='templates' style={{ padding: '100px clamp(20px, 5vw, 80px)', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <OrnamentDivider />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12, fontWeight: 500 }}>Our Collection</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: '#2a1a0e' }}>Choose your style</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: '#7a6a5a', marginTop: 12, maxWidth: 460, margin: '12px auto 0', lineHeight: 1.7 }}>Three distinct themes, each crafted for a different wedding aesthetic.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
            {templates.map(t => (
              <div key={t.num} style={{ background: '#FDFAF6', border: '1px solid rgba(201,168,76,0.22)', borderRadius: 4, padding: '40px 36px', position: 'relative', transition: 'all 0.35s ease', cursor: 'pointer' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = 'rgba(201,168,76,0.15) 0px 20px 40px -8px'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.55)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.22)' }}>
                <span style={{ position: 'absolute', top: 18, right: 18, background: 'rgba(201,168,76,0.1)', color: '#9a7a30', fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 20, fontWeight: 500 }}>{t.label}</span>
                <span style={{ fontFamily: 'var(--font-script)', fontSize: '2.8rem', color: 'rgba(201,168,76,0.2)', display: 'block', lineHeight: 1, marginBottom: 16 }}>{t.num}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.7rem', fontWeight: 400, color: '#2a1a0e', marginBottom: 10 }}>{t.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.87rem', color: '#7a6a5a', lineHeight: 1.75, marginBottom: 16 }}>{t.desc}</p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: '#C9A84C', letterSpacing: '0.06em', marginBottom: 20, opacity: 0.85 }}>{t.preview}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 28 }}>
                  {t.tags.map(tag => (
                    <span key={tag} style={{ padding: '4px 12px', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 20, fontFamily: 'var(--font-body)', fontSize: '0.63rem', letterSpacing: '0.06em', color: '#9a7a30' }}>{tag}</span>
                  ))}
                </div>
                <Link href={t.href} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#7a6040', textDecoration: 'none', letterSpacing: '0.08em', fontWeight: 500, borderBottom: '1px solid rgba(201,168,76,0.4)', paddingBottom: 2, transition: 'color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#7a6040' }}>
                  View Demo
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id='how' style={{ padding: '100px clamp(20px, 5vw, 80px)', background: '#FDF5EC' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <OrnamentDivider />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12, fontWeight: 500 }}>Simple Process</p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#2a1a0e', marginBottom: 60 }}>Ready in minutes</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40 }}>
            {steps.map((s) => (
              <div key={s.n} style={{ textAlign: 'center' }}>
                <div style={{ width: 54, height: 54, borderRadius: '50%', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontFamily: 'var(--font-heading)', fontSize: '1.3rem', color: '#C9A84C' }}>{s.n}</div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.2rem', fontWeight: 400, color: '#2a1a0e', marginBottom: 10 }}>{s.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.87rem', color: '#7a6a5a', lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px clamp(20px, 5vw, 80px)', background: '#1a0e08' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <OrnamentDivider />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 12, fontWeight: 500 }}>Everything included</p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: '#FAF7F2' }}>Built for the big day</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {features.map((f, i) => (
              <div key={i} style={{ padding: '32px 28px', background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.14)', borderRadius: 4 }}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: 14 }}>{f.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 400, color: '#FAF7F2', marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.84rem', color: 'rgba(250,247,242,0.45)', lineHeight: 1.75 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px clamp(20px, 5vw, 80px)', background: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: 580, margin: '0 auto' }}>
          <OrnamentDivider />
          <p style={{ fontFamily: 'var(--font-script)', fontSize: '3.2rem', color: '#C9A84C', marginBottom: 16, lineHeight: 1.1 }}>Your story deserves this.</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem', color: '#7a6a5a', marginBottom: 36, lineHeight: 1.8 }}>Pick a theme, personalise it, and share one beautiful link with everyone you love.</p>
          <a href='#templates' style={{ display: 'inline-block', padding: '15px 50px', background: '#C9A84C', color: '#fff', fontFamily: 'var(--font-body)', fontSize: '0.78rem', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: 2, fontWeight: 500, boxShadow: '0 4px 22px rgba(201,168,76,0.32)' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b8943e' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#C9A84C' }}>
            Get Started
          </a>
        </div>
      </section>

      <footer style={{ padding: '44px clamp(20px, 5vw, 80px)', background: '#FDFAF6', borderTop: '1px solid rgba(201,168,76,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
        <span style={{ fontFamily: 'var(--font-script)', fontSize: '1.9rem', color: '#C9A84C' }}>WedFrames</span>
        <div style={{ display: 'flex', gap: 28 }}>
          <Link href='/demo/cinematic' style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#7a6a5a', textDecoration: 'none' }}>Cinematic</Link>
          <Link href='/demo/beach' style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#7a6a5a', textDecoration: 'none' }}>Beach</Link>
          <Link href='/demo/tamil' style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#7a6a5a', textDecoration: 'none' }}>Tamil</Link>
          <Link href='/demo/southindian' style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: '#7a6a5a', textDecoration: 'none' }}>South Indian</Link>
        </div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: '#b0a080', letterSpacing: '0.06em' }}>Crafted with love · 2026</p>
      </footer>

    </main>
  )
}
