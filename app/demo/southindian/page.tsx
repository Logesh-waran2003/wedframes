'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const config = {
  couple: {
    groom: { name: 'Karthick', tamilName: 'கார்த்திக்', star: 'Uthiram',  rasi: 'Simha'   },
    bride:  { name: 'Priya',   tamilName: 'பிரியா',    star: 'Rohini',   rasi: 'Rishaba' },
  },
  blessings: { text: 'பிள்ளையார் துணை', sub: 'Pillayar Thunai' },
  muhurtham: {
    date: 'Saturday, June 21st 2026',
    tamilDate: 'ஆனி 6, விகாரி வருடம்',
    time: '7:00 AM — 8:15 AM',
    nakshatra: 'Rohini Nakshatra',
    venue: 'Sri Kapaleeshwarar Temple Mandapam',
    venueAddress: 'Mylapore, Chennai, Tamil Nadu',
    mapLink: 'https://maps.google.com/?q=Kapaleeshwarar+Temple+Chennai',
  },
  families: {
    groom: { father: 'Thiru. Ramanathan',    mother: 'Thirumathi. Meenakshi', place: 'Chennai' },
    bride:  { father: 'Thiru. Senthilkumar', mother: 'Thirumathi. Lakshmi',   place: 'Madurai' },
  },
  ceremonies: [
    { num: 'I',   name: 'Janavasam',       tamil: 'ஜனவாசம்',         desc: 'Grand procession of the groom to the wedding venue',    time: 'June 20 · 6:00 PM'  },
    { num: 'II',  name: 'Nichayathartham', tamil: 'நிச்சயதார்த்தம்', desc: 'Formal engagement ceremony with exchange of gifts',      time: 'June 20 · 8:00 PM'  },
    { num: 'III', name: 'Oonjal',          tamil: 'ஊஞ்சல்',          desc: 'Couple seated on a swing, blessed by elders with song',  time: 'June 21 · 5:30 AM'  },
    { num: 'IV',  name: 'Muhurtham',       tamil: 'முகூர்த்தம்',     desc: 'The sacred tying of the Thali — the auspicious moment', time: 'June 21 · 7:00 AM'  },
    { num: 'V',   name: 'Sadhya',          tamil: 'விருந்து',         desc: 'Grand feast served on banana leaves for all guests',     time: 'June 21 · 12:00 PM' },
    { num: 'VI',  name: 'Reception',       tamil: 'வரவேற்பு',        desc: 'Evening celebration with music, dance, and blessings',   time: 'June 21 · 6:00 PM'  },
  ],
  reception: {
    date: '21st June 2026',
    time: '6:00 PM onwards',
    venue: 'The Grand Palace Banquet',
    address: 'Anna Salai, Chennai, Tamil Nadu',
    mapLink: 'https://maps.google.com/?q=Anna+Salai+Chennai',
  },
  rsvp: {
    whatsapp: '919876543210',
    message: 'Vanakkam! We are delighted to attend Karthick & Priya wedding! Seeking your blessings.',
  },
  countdown: { date: '2026-06-21T07:00:00' },
}

function frame(n: number) {
  return `/demo/southindian/frames/frame_${String(n).padStart(3, '0')}.jpg`
}

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Noto+Sans+Tamil:wght@400;600&family=Great+Vibes&display=swap');
#si-theme {
  --gold:#c9a84c;--gold-lt:#e8d5a0;--marigold:#e07b1a;
  --cream:#fdf6e3;--bg:#120800;--text:#fdf6e3;
  --font-d:'Cormorant Garamond',serif;
  --font-t:'Noto Sans Tamil',sans-serif;
  --font-s:'Great Vibes',cursive;
  background:var(--bg);color:var(--text);overflow-x:hidden;font-family:var(--font-d);
}
#si-theme *{box-sizing:border-box;margin:0;padding:0;}
.si-scene{position:relative;width:100%;height:100vh;min-height:600px;overflow:hidden;display:flex;align-items:center;justify-content:center;}
.si-bg{position:absolute;inset:0;background-size:cover;background-position:center;transform-origin:center;will-change:transform;filter:blur(8px) brightness(0.7);transform:scale(1.08);}
.si-overlay{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(10,4,0,.82) 0%,rgba(10,4,0,.65) 45%,rgba(10,4,0,.90) 100%);}
.si-content{position:relative;z-index:10;text-align:center;padding:2rem;max-width:680px;width:100%;}
.si-label{font-family:var(--font-t);font-size:.7rem;letter-spacing:.25em;text-transform:uppercase;color:var(--gold);opacity:.85;margin-bottom:1rem;}
.si-script{font-family:var(--font-s);font-size:clamp(3rem,8vw,5.5rem);color:var(--cream);line-height:1.1;text-shadow:0 2px 24px rgba(201,168,76,.45);}
.si-heading{font-family:var(--font-d);font-size:clamp(1.8rem,5vw,3.2rem);font-weight:300;letter-spacing:.08em;color:var(--cream);line-height:1.3;}
.si-sub{font-family:var(--font-d);font-size:clamp(.95rem,2vw,1.15rem);font-weight:300;color:rgba(253,246,227,.72);letter-spacing:.05em;line-height:1.8;margin-top:.75rem;}
.si-tamil{font-family:var(--font-t);font-size:.9rem;color:var(--gold-lt);opacity:.7;margin-top:.4rem;}
.si-divider{width:60px;height:1px;background:var(--gold);margin:1.2rem auto;opacity:.45;}
.si-deity-ring{width:110px;height:110px;border-radius:50%;border:1.5px solid rgba(201,168,76,.5);margin:0 auto 1.5rem;display:flex;align-items:center;justify-content:center;background:rgba(201,168,76,.07);box-shadow:0 0 40px rgba(201,168,76,.2),inset 0 0 20px rgba(201,168,76,.05);}
.si-deity-text{font-family:var(--font-t);font-size:2.4rem;color:var(--gold);}
.si-card{background:rgba(18,8,0,.78);border:1px solid rgba(201,168,76,.2);backdrop-filter:blur(16px);border-radius:2px;padding:2.5rem 2rem;max-width:460px;margin:0 auto;}
.si-card-row{display:flex;justify-content:space-between;align-items:baseline;padding:.9rem 0;border-bottom:1px solid rgba(201,168,76,.1);gap:1rem;}
.si-card-row:last-child{border-bottom:none;}
.si-card-label{font-family:var(--font-d);font-size:.72rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);opacity:.8;white-space:nowrap;}
.si-card-value{font-family:var(--font-d);font-size:1rem;font-weight:400;color:var(--cream);text-align:right;}
.si-ceremonies{background:var(--bg);padding:5rem 2rem;}
.si-cer-grid{max-width:680px;margin:0 auto;}
.si-cer-row{display:grid;grid-template-columns:2.5rem 1fr auto;gap:0 1.5rem;align-items:start;padding:1.4rem 0;border-bottom:1px solid rgba(201,168,76,.1);}
.si-cer-row:last-child{border-bottom:none;}
.si-cer-num{font-family:var(--font-d);font-size:.72rem;letter-spacing:.15em;color:var(--gold);opacity:.55;padding-top:.2rem;}
.si-cer-name{font-family:var(--font-d);font-size:1.15rem;font-weight:400;color:var(--cream);letter-spacing:.04em;}
.si-cer-name span{font-family:var(--font-t);font-size:.72rem;color:var(--gold-lt);opacity:.55;margin-left:.6rem;}
.si-cer-desc{font-family:var(--font-d);font-size:.85rem;font-weight:300;color:rgba(253,246,227,.5);margin-top:.3rem;line-height:1.6;}
.si-cer-time{font-family:var(--font-d);font-size:.72rem;letter-spacing:.08em;color:var(--gold);opacity:.65;white-space:nowrap;padding-top:.25rem;text-align:right;}
.si-families{display:flex;gap:2rem;justify-content:center;flex-wrap:wrap;margin-top:1.5rem;}
.si-family-block{text-align:center;}
.si-family-name{font-family:var(--font-d);font-size:.95rem;font-weight:400;color:var(--cream);line-height:1.8;}
.si-family-place{font-family:var(--font-d);font-size:.72rem;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);opacity:.55;margin-top:.3rem;}
.si-countdown{display:flex;gap:1.5rem;justify-content:center;margin:1.5rem 0;flex-wrap:wrap;}
.si-count-block{text-align:center;min-width:60px;}
.si-count-num{font-family:var(--font-d);font-size:2.5rem;font-weight:300;color:var(--gold);line-height:1;}
.si-count-label{font-family:var(--font-d);font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:rgba(253,246,227,.45);margin-top:.3rem;}
.si-btn{display:inline-flex;align-items:center;gap:.6rem;padding:.85rem 2rem;border:1px solid var(--gold);color:var(--gold);font-family:var(--font-d);font-size:.85rem;letter-spacing:.15em;text-transform:uppercase;text-decoration:none;background:transparent;cursor:pointer;transition:background .3s,color .3s;margin-top:1.2rem;}
.si-btn:hover{background:var(--gold);color:var(--bg);}
.si-btn-wa{background:rgba(37,211,102,.1);border-color:rgba(37,211,102,.45);color:#25d366;}
.si-btn-wa:hover{background:#25d366;color:#fff;}
.si-scroll-hint{position:absolute;bottom:2rem;left:50%;transform:translateX(-50%);z-index:20;display:flex;flex-direction:column;align-items:center;gap:.4rem;opacity:.45;animation:si-bounce 2s ease-in-out infinite;}
.si-scroll-hint span{font-family:var(--font-d);font-size:.62rem;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);}
.si-scroll-arrow{width:1px;height:28px;background:linear-gradient(to bottom,var(--gold),transparent);}
@keyframes si-bounce{0%,100%{transform:translateX(-50%) translateY(0);}50%{transform:translateX(-50%) translateY(6px);}}
.si-section-head{text-align:center;margin-bottom:3rem;}
.si-section-head h2{font-family:var(--font-d);font-size:clamp(1.6rem,4vw,2.4rem);font-weight:300;letter-spacing:.1em;color:var(--gold-lt);}
.si-section-head p{font-family:var(--font-t);font-size:.75rem;letter-spacing:.2em;color:var(--gold);opacity:.6;margin-top:.5rem;}
.si-reception-card{background:rgba(18,8,0,.82);border:1px solid rgba(201,168,76,.25);backdrop-filter:blur(20px);border-radius:2px;padding:2.5rem 2rem;max-width:420px;margin:0 auto;text-align:center;}
.si-reception-date{font-family:var(--font-s);font-size:2.2rem;color:var(--gold);margin:.5rem 0;}
.si-reception-venue{font-family:var(--font-d);font-size:1.1rem;font-weight:400;color:var(--cream);margin-top:.8rem;}
.si-reception-addr{font-family:var(--font-d);font-size:.85rem;font-weight:300;color:rgba(253,246,227,.55);margin-top:.3rem;}
@media(max-width:640px){
  .si-card{padding:1.5rem 1rem;}
  .si-cer-row{grid-template-columns:2rem 1fr;}
  .si-cer-time{display:none;}
  .si-families{flex-direction:column;gap:1rem;}
}
`

// ─── Countdown hook ───────────────────────────────────────────────────────────
function useCountdown(target: string) {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 })
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now()
      if (diff <= 0) return
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff % 86400000) / 3600000),
        m: Math.floor((diff % 3600000) / 60000),
        s: Math.floor((diff % 60000) / 1000),
      })
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [target])
  return t
}

// ─── Scene component ──────────────────────────────────────────────────────────
function Scene({
  frameNum, children, overlayDark = false,
}: {
  frameNum: number
  children: React.ReactNode
  overlayDark?: boolean
}) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !bgRef.current || !contentRef.current) return
    gsap.registerPlugin(ScrollTrigger)

    // bg parallax + slow zoom
    gsap.fromTo(bgRef.current,
      { scale: 1.05, y: 0 },
      {
        scale: 1.15, y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    )

    // content fade in
    const lines = contentRef.current.querySelectorAll('.si-line')
    if (lines.length) {
      gsap.fromTo(lines,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0,
          duration: 1.4,
          stagger: 0.18,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }

    return () => { ScrollTrigger.getAll().forEach(t => t.kill()) }
  }, [])

  return (
    <section ref={sectionRef} className="si-scene">
      <div
        ref={bgRef}
        className="si-bg"
        style={{ backgroundImage: `url(${frame(frameNum)})` }}
      />
      <div
        className="si-overlay"
        style={overlayDark ? { background: 'rgba(10,4,0,.92)' } : undefined}
      />
      <div ref={contentRef} className="si-content">
        {children}
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SouthIndianPage() {
  const countdown = useCountdown(config.countdown.date)
  const cerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Ceremonies stagger
    if (cerRef.current) {
      const rows = cerRef.current.querySelectorAll('.si-cer-row')
      gsap.fromTo(rows,
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    }
  }, [])

  const wa = `https://wa.me/${config.rsvp.whatsapp}?text=${encodeURIComponent(config.rsvp.message)}`

  return (
    <div id="si-theme">
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      {/* 1 ── Opening */}
      <Scene frameNum={1}>
        <div className="si-line">
          <div className="si-deity-ring">
            <span className="si-deity-text">ஓம்</span>
          </div>
        </div>
        <p className="si-label si-line">{config.blessings.text}</p>
        <div className="si-divider si-line" />
        <p className="si-sub si-line" style={{ fontSize: '1rem', opacity: 0.6 }}>
          {config.blessings.sub}
        </p>
        <div className="si-scroll-hint">
          <span>Scroll</span>
          <div className="si-scroll-arrow" />
        </div>
      </Scene>

      {/* 2 ── Procession */}
      <Scene frameNum={3}>
        <p className="si-label si-line">With the blessings of God & our families</p>
        <div className="si-divider si-line" />
        <h1 className="si-heading si-line" style={{ fontSize: 'clamp(1.2rem,3vw,1.8rem)', fontWeight: 300, letterSpacing: '.2em' }}>
          WE JOYFULLY ANNOUNCE
        </h1>
        <p className="si-sub si-line" style={{ marginTop: '1rem' }}>
          The auspicious wedding of
        </p>
      </Scene>

      {/* 3 ── Couple reveal */}
      <Scene frameNum={9} overlayDark>
        <p className="si-label si-line">
          {config.couple.groom.tamilName} &amp; {config.couple.bride.tamilName}
        </p>
        <div className="si-divider si-line" />
        <h1 className="si-script si-line">{config.couple.groom.name}</h1>
        <p className="si-sub si-line" style={{ fontSize: '1.1rem', opacity: 0.55, letterSpacing: '.3em', margin: '.3rem 0' }}>
          &amp;
        </p>
        <h1 className="si-script si-line">{config.couple.bride.name}</h1>
        <p className="si-sub si-line" style={{ marginTop: '1.2rem', fontSize: '1rem' }}>
          are getting married
        </p>
      </Scene>

      {/* 4 ── Muhurtham card */}
      <Scene frameNum={5} overlayDark>
        <p className="si-label si-line">{config.muhurtham.tamilDate}</p>
        <div className="si-card si-line">
          <div className="si-card-row">
            <span className="si-card-label">Date</span>
            <span className="si-card-value">{config.muhurtham.date}</span>
          </div>
          <div className="si-card-row">
            <span className="si-card-label">Muhurtham</span>
            <span className="si-card-value">{config.muhurtham.time}</span>
          </div>
          <div className="si-card-row">
            <span className="si-card-label">Nakshatra</span>
            <span className="si-card-value">{config.muhurtham.nakshatra}</span>
          </div>
          <div className="si-card-row">
            <span className="si-card-label">Venue</span>
            <span className="si-card-value">{config.muhurtham.venue}</span>
          </div>
          <div className="si-card-row">
            <span className="si-card-label">Address</span>
            <span className="si-card-value">{config.muhurtham.venueAddress}</span>
          </div>
        </div>
        <a
          href={config.muhurtham.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="si-btn si-line"
        >
          ↗ View on Maps
        </a>
      </Scene>

      {/* 5 ── Ceremonies */}
      <section className="si-ceremonies" style={{
        backgroundImage: `url(${frame(5)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(10,4,0,.88)',
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="si-section-head">
          <h2>Wedding Ceremonies</h2>
          <p>திருமண நிகழ்வுகள்</p>
        </div>
        <div className="si-cer-grid" ref={cerRef}>
          {config.ceremonies.map((c) => (
            <div key={c.num} className="si-cer-row">
              <span className="si-cer-num">{c.num}</span>
              <div>
                <div className="si-cer-name">
                  {c.name}
                  <span>{c.tamil}</span>
                </div>
                <div className="si-cer-desc">{c.desc}</div>
              </div>
              <span className="si-cer-time">{c.time}</span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* 6 ── Families */}
      <Scene frameNum={13}>
        <p className="si-label si-line">With the blessings of</p>
        <div className="si-divider si-line" />
        <div className="si-families si-line">
          <div className="si-family-block">
            <p className="si-family-name">
              {config.families.groom.father}<br />
              {config.families.groom.mother}
            </p>
            <p className="si-family-place">{config.families.groom.place}</p>
          </div>
          <div style={{ width: 1, background: 'rgba(201,168,76,.25)', alignSelf: 'stretch' }} />
          <div className="si-family-block">
            <p className="si-family-name">
              {config.families.bride.father}<br />
              {config.families.bride.mother}
            </p>
            <p className="si-family-place">{config.families.bride.place}</p>
          </div>
        </div>
        <p className="si-sub si-line" style={{ marginTop: '1.5rem', fontSize: '.9rem', opacity: 0.55 }}>
          Two families. One beautiful beginning.
        </p>
      </Scene>

      {/* 7 ── Reception */}
      <Scene frameNum={17} overlayDark>
        <p className="si-label si-line">You are cordially invited to</p>
        <div className="si-reception-card si-line">
          <p style={{ fontFamily: 'var(--font-t)', fontSize: '.7rem', letterSpacing: '.2em', color: 'var(--gold)', opacity: .7, textTransform: 'uppercase' }}>
            Reception
          </p>
          <div className="si-reception-date">{config.reception.date}</div>
          <p style={{ fontFamily: 'var(--font-d)', fontSize: '.85rem', color: 'rgba(253,246,227,.6)', letterSpacing: '.1em' }}>
            {config.reception.time}
          </p>
          <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '1rem auto', opacity: .4 }} />
          <p className="si-reception-venue">{config.reception.venue}</p>
          <p className="si-reception-addr">{config.reception.address}</p>
        </div>
        <a
          href={config.reception.mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="si-btn si-line"
        >
          ↗ View Venue
        </a>
      </Scene>

      {/* 8 ── RSVP + Countdown */}
      <Scene frameNum={15} overlayDark>
        <p className="si-label si-line">Awaiting your presence</p>
        <div className="si-divider si-line" />
        <h2 className="si-heading si-line" style={{ fontSize: 'clamp(1.4rem,4vw,2.2rem)' }}>
          {config.couple.groom.name} &amp; {config.couple.bride.name}
        </h2>
        <p className="si-tamil si-line" style={{ marginTop: '.5rem' }}>
          {config.couple.groom.tamilName} &amp; {config.couple.bride.tamilName}
        </p>
        <div className="si-countdown si-line">
          {[
            { n: countdown.d, l: 'Days' },
            { n: countdown.h, l: 'Hours' },
            { n: countdown.m, l: 'Mins' },
            { n: countdown.s, l: 'Secs' },
          ].map(({ n, l }) => (
            <div key={l} className="si-count-block">
              <div className="si-count-num">{String(n).padStart(2, '0')}</div>
              <div className="si-count-label">{l}</div>
            </div>
          ))}
        </div>
        <div className="si-line" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="si-btn si-btn-wa">
            ✓ RSVP via WhatsApp
          </a>
          <a href={config.muhurtham.mapLink} target="_blank" rel="noopener noreferrer" className="si-btn">
            ↗ Get Directions
          </a>
        </div>
      </Scene>

      {/* 9 ── Closing */}
      <Scene frameNum={27} overlayDark>
        <div className="si-line">
          <div className="si-deity-ring">
            <span className="si-deity-text">ஓம்</span>
          </div>
        </div>
        <h1 className="si-script si-line" style={{ fontSize: 'clamp(2.5rem,7vw,4.5rem)' }}>
          {config.couple.groom.name} &amp; {config.couple.bride.name}
        </h1>
        <div className="si-divider si-line" />
        <p className="si-sub si-line" style={{ fontSize: '1rem', opacity: 0.6 }}>
          {config.muhurtham.date}
        </p>
        <p className="si-sub si-line" style={{ fontSize: '.85rem', opacity: 0.45, marginTop: '.5rem', letterSpacing: '.15em' }}>
          {config.muhurtham.venue}
        </p>
        <p className="si-tamil si-line" style={{ marginTop: '2rem', fontSize: '.8rem', opacity: 0.4 }}>
          வாழ்க வளமுடன்
        </p>
      </Scene>
    </div>
  )
}
