import { motion } from 'motion/react'
import { useState } from 'react'

export default function PressStrip() {
  const [hover, setHover] = useState(false)

  return (
    <section
      style={{
        position: 'relative',
        padding: 'clamp(48px,7vw,80px) clamp(24px,6vw,96px)',
        overflow: 'hidden',
      }}
    >
      <img
        src="/videos/performance.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(6,6,6,0.82)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          gap: 40,
          alignItems: 'center',
          maxWidth: 960,
          margin: '0 auto',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              fontSize: 9,
              letterSpacing: '0.3em',
              color: 'rgba(232,213,176,0.7)',
              marginBottom: 12,
            }}
          >
            NOT SURE WHERE TO START?
          </div>
          <h3
            style={{
              fontSize: 'clamp(22px,3vw,40px)',
              fontWeight: 400,
              color: 'white',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            TAKE THE 2-MINUTE
            <br />
            <em>CAR MATCH QUIZ.</em>
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              padding: '14px 36px',
              background: hover ? 'white' : 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.25)',
              borderRadius: 2,
              color: hover ? '#0c0c0e' : 'white',
              fontSize: 10,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            FIND MY PERFECT CAR
          </button>
        </motion.div>
      </div>
    </section>
  )
}
