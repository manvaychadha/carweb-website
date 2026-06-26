import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="card"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
          style={{
            position: 'fixed',
            bottom: 24,
            right: 24,
            zIndex: 998,
            padding: '20px 24px',
            maxWidth: 300,
            boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 12,
              color: 'var(--ink-muted)',
              margin: '0 0 14px 0',
              lineHeight: 1.65,
            }}
          >
            We use cookies to improve your experience on carweb.in.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            <button
              className="btn-gold"
              onClick={() => setVisible(false)}
              style={{ fontSize: 9, padding: '8px 18px' }}
            >
              ACCEPT
            </button>
            <button
              onClick={() => setVisible(false)}
              style={{
                background: 'transparent',
                border: '1.5px solid var(--cream-border)',
                borderRadius: 4,
                color: 'var(--ink-muted)',
                fontSize: 9,
                padding: '8px 18px',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--ink)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--cream-border)')}
            >
              DECLINE
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
