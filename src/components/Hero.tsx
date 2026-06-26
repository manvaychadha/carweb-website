import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

interface HeroProps {
  menuOpen: boolean
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.96, ease: [0.22, 1, 0.36, 1] as const },
  },
}

const MARQUEE_TEXT = 'PRIVATE ACQUISITION · BESPOKE CONFIGURATION · FLEET MANAGEMENT · DRIVING ACADEMY · '

export default function Hero({ menuOpen }: HeroProps) {
  const [scrolled, setScrolled] = useState(false)
  const [primaryHover, setPrimaryHover] = useState(false)
  const [secondaryHover, setSecondaryHover] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Fixed video background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        <video
          src="/videos/hero-bg.mp4"
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
            objectPosition: 'center center',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to bottom, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.55) 100%)',
          }}
        />
      </div>

      {/* Hero text block */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 20,
          pointerEvents: 'none',
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            position: 'absolute',
            top: '50%',
            left: 'clamp(24px, 6vw, 96px)',
            transform: 'translateY(-52%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            textAlign: 'left',
            maxWidth: 'clamp(340px, 52vw, 700px)',
          }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={textVariants}
            style={{
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div style={{ width: 28, height: 1, background: 'rgba(255,255,255,0.5)' }} />
            <span
              style={{
                fontSize: 9,
                letterSpacing: '0.35em',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              INDIA'S INDEPENDENT CAR BUYING CONSULTANCY
            </span>
          </motion.div>

          {/* Headline — Cormorant Garamond */}
          {[
            { text: 'BUY THE RIGHT', italic: false },
            { text: 'CAR.', italic: true },
            { text: 'NOT THE MOST', italic: false },
            { text: 'MARKETED ONE.', italic: true },
          ].map((line) => (
            <div key={line.text} style={{ overflow: 'hidden' }}>
              <motion.div
                variants={textVariants}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(40px, 8.5vw, 118px)',
                  fontWeight: line.italic ? 300 : 600,
                  lineHeight: 0.91,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  color: 'white',
                  textShadow: '0 4px 32px rgba(0,0,0,0.35)',
                  fontStyle: line.italic ? 'italic' : 'normal',
                }}
              >
                {line.text}
              </motion.div>
            </div>
          ))}

          {/* Subtext */}
          <motion.div variants={textVariants} style={{ marginTop: 28 }}>
            <p
              style={{
                fontSize: 'clamp(10px, 1vw, 11px)',
                letterSpacing: '0.18em',
                maxWidth: 380,
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.65)',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                margin: 0,
              }}
            >
              INDEPENDENT CONSULTANCY HELPING INDIAN BUYERS CHOOSE, COMPARE,
              NEGOTIATE AND PURCHASE VEHICLES WITH CONFIDENCE.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={textVariants}
            style={{
              marginTop: 36,
              display: 'flex',
              gap: 12,
              pointerEvents: 'all',
              flexWrap: 'wrap',
            }}
          >
            <button
              onMouseEnter={() => setPrimaryHover(true)}
              onMouseLeave={() => setPrimaryHover(false)}
              style={{
                padding: 'clamp(12px,1.2vw,16px) clamp(24px,2.5vw,36px)',
                fontSize: 'clamp(10px,0.9vw,12px)',
                letterSpacing: '0.22em',
                color: primaryHover ? '#0c0c0e' : 'white',
                background: primaryHover ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.6)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                borderRadius: 2,
                backdropFilter: 'blur(16px)',
                transition: 'all 0.3s ease',
              }}
            >
              BOOK A CONSULTATION
            </button>
            <button
              onMouseEnter={() => setSecondaryHover(true)}
              onMouseLeave={() => setSecondaryHover(false)}
              style={{
                padding: 'clamp(12px,1.2vw,16px) clamp(24px,2.5vw,36px)',
                fontSize: 'clamp(10px,0.9vw,12px)',
                letterSpacing: '0.22em',
                color: 'rgba(255,255,255,0.8)',
                background: secondaryHover ? 'rgba(255,255,255,0.08)' : 'transparent',
                border: '1px solid rgba(255,255,255,0.25)',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                borderRadius: 2,
                transition: 'all 0.3s ease',
              }}
            >
              FIND MY PERFECT CAR
            </button>
          </motion.div>
        </motion.div>

        {/* Marquee strip — below hero content, near bottom */}
        <div
          style={{
            position: 'absolute',
            bottom: 96,
            left: 0,
            right: 0,
            overflow: 'hidden',
            pointerEvents: 'none',
          }}
        >
          <div className="marquee-track">
            <span className="marquee-item on-dark">{MARQUEE_TEXT}</span>
            <span className="marquee-item on-dark">{MARQUEE_TEXT}</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {!scrolled && (
        <div
          style={{
            position: 'fixed',
            bottom: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 10,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: 1,
              height: 48,
              background: 'rgba(255,255,255,0.2)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              className="scroll-dot"
              style={{
                width: 3,
                height: 3,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.6)',
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
              }}
            />
          </div>
          <span
            style={{
              fontSize: 9,
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.3)',
            }}
          >
            SCROLL
          </span>
        </div>
      )}

      {/* Sticky WhatsApp CTA */}
      <a
        href="https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20buying%20a%20car"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 50,
          transform: menuOpen ? 'translateX(calc(-1 * clamp(260px, 38vw, 420px)))' : 'none',
          transition: 'transform 0.6s cubic-bezier(0.19,1,0.22,1)',
          padding: 'clamp(12px,1.2vw,16px) clamp(20px,2.5vw,32px)',
          fontSize: 'clamp(10px,0.9vw,12px)',
          letterSpacing: '0.2em',
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'inherit',
          textTransform: 'uppercase',
          borderRadius: 4,
          textDecoration: 'none',
          display: 'inline-block',
        }}
        className="glass-mid"
      >
        WHATSAPP AN EXPERT
      </a>
    </>
  )
}
