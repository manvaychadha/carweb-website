import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="glass-mid"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            position: 'fixed',
            bottom: 24,
            left: 24,
            zIndex: 999,
            borderRadius: 4,
            padding: '20px 24px',
            maxWidth: 320,
          }}
        >
          <p
            style={{
              fontSize: 9,
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.7)',
              margin: '0 0 16px 0',
              lineHeight: 1.7,
            }}
          >
            THIS SITE USES COOKIES TO IMPROVE YOUR EXPERIENCE.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'var(--accent)',
                color: 'white',
                fontSize: 8,
                padding: '8px 16px',
                border: 'none',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              ACCEPT
            </button>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'rgba(255,255,255,0.6)',
                fontSize: 8,
                padding: '8px 16px',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: 'inherit',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              DECLINE
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
