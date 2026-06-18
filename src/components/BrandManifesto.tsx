import { useState } from 'react'
import { motion } from 'motion/react'

const pillars = [
  {
    label: 'INDEPENDENT ADVICE',
    desc: 'NO COMMISSIONS. NO KICKBACKS. PURE EXPERT GUIDANCE THAT SERVES YOUR INTEREST — NOT THE DEALER\'S MARGIN.',
  },
  {
    label: 'NO DEALER PRESSURE',
    desc: 'WE PREPARE YOU TO WALK INTO ANY SHOWROOM WITH CONFIDENCE. YOU NEGOTIATE FROM STRENGTH, NOT CONFUSION.',
  },
  {
    label: 'DATA-DRIVEN RECOMMENDATIONS',
    desc: 'EVERY SUGGESTION BACKED BY OWNERSHIP COST ANALYSIS, REAL MILEAGE FIGURES, AND LONG-TERM RELIABILITY DATA.',
  },
  {
    label: 'PAN-INDIA SUPPORT',
    desc: 'REMOTE CONSULTATIONS AVAILABLE ACROSS ALL CITIES. WHETHER YOU\'RE IN MUMBAI OR A TIER-2 TOWN, WE\'RE WITH YOU.',
  },
]

export default function BrandManifesto() {
  const [btnHover, setBtnHover] = useState(false)

  return (
    <section id="how-it-works" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/videos/manifesto-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.4) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          minHeight: '100vh',
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          gap: 80,
          alignContent: 'center',
        }}
      >
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 24, height: 1, background: 'rgba(232,213,176,0.6)' }} />
            <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(232,213,176,0.85)' }}>
              WHY BUYERS CHOOSE CARWEB
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px,4.5vw,72px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: 'white',
              margin: '0 0 32px 0',
            }}
          >
            WE WORK FOR
            <br />
            <em>THE BUYER.</em>
            <br />
            ALWAYS.
          </h2>
          <p
            style={{
              fontSize: 11,
              lineHeight: 1.9,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.55)',
              margin: '0 0 40px 0',
              maxWidth: 360,
            }}
          >
            THE CAR INDUSTRY IS BUILT TO SELL YOU THE CAR WITH THE HIGHEST MARGIN.
            CARWEB EXISTS TO GIVE YOU THE OTHER SIDE OF THE TABLE.
          </p>
          <button
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              padding: '14px 36px',
              background: btnHover ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 2,
              backdropFilter: 'blur(8px)',
              color: 'white',
              fontSize: 10,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            BOOK A CONSULTATION
          </button>
        </motion.div>

        {/* Right — pillars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.label}
              className="glass-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={{ padding: '24px 28px' }}
            >
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.35em',
                  color: 'rgba(232,213,176,0.85)',
                  marginBottom: 8,
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'white',
                  letterSpacing: '0.1em',
                  marginBottom: 10,
                }}
              >
                {pillar.label}
              </div>
              <div
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {pillar.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
