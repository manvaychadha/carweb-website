import { AnimatePresence, motion } from 'motion/react'

interface MembershipPageProps {
  isOpen: boolean
  onClose: () => void
}

const CarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="5.5" cy="14.5" rx="2.2" ry="2.2" stroke="#0c0c0e" strokeWidth="1.5" fill="none" />
    <ellipse cx="14.5" cy="14.5" rx="2.2" ry="2.2" stroke="#0c0c0e" strokeWidth="1.5" fill="none" />
    <path d="M3.3 14.5 H1.5 V11 L4 7.5 H12 L16.5 10 H18.5 V14.5 H16.7" stroke="#0c0c0e" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M7.7 14.5 H12.3" stroke="#0c0c0e" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const perks = [
  {
    label: 'FACTORY ACCESS',
    description: 'PRIVATE VISITS TO MANUFACTURING FACILITIES AND DESIGN STUDIOS NOT OPEN TO THE PUBLIC.',
  },
  {
    label: 'PERSONAL SPECIALIST',
    description: 'A DEDICATED ACQUISITION AND CONFIGURATION SPECIALIST ASSIGNED TO YOUR ACCOUNT.',
  },
  {
    label: 'TRACK INVITATIONS',
    description: 'EXCLUSIVE TRACK DAY EVENTS AT CIRCUITS ACROSS EUROPE AND THE MIDDLE EAST.',
  },
  {
    label: 'FLEET MANAGEMENT',
    description: 'END-TO-END MANAGEMENT OF YOUR PERSONAL OR CORPORATE VEHICLE COLLECTION.',
  },
]

export default function MembershipPage({ isOpen, onClose }: MembershipPageProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            backgroundColor: 'var(--bg-base)',
            overflowY: 'auto',
          }}
        >
          {/* Sticky header */}
          <div
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 10,
              height: 72,
              backgroundColor: 'rgba(248,246,242,0.92)',
              backdropFilter: 'blur(24px) saturate(180%)',
              borderBottom: '1px solid rgba(12,12,14,0.07)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 clamp(24px,6vw,80px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <CarIcon />
              <span style={{ fontSize: 'clamp(14px,1.5vw,16px)', letterSpacing: '0.28em', color: '#0c0c0e' }}>
                CARWEB.IN
              </span>
              <span style={{ color: 'rgba(12,12,14,0.3)', fontSize: 12 }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>
                MEMBERSHIP
              </span>
            </div>
            <button
              onClick={onClose}
              style={{
                padding: '9px 22px',
                fontSize: 10,
                letterSpacing: '0.2em',
                color: 'rgba(12,12,14,0.6)',
                background: 'transparent',
                border: '1px solid rgba(12,12,14,0.1)',
                borderRadius: 100,
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
              }}
            >
              × CLOSE
            </button>
          </div>

          {/* Intro */}
          <div style={{ padding: 'clamp(48px,6vw,80px)', paddingBottom: 'clamp(32px,4vw,48px)' }}>
            <h2
              style={{
                fontSize: 'clamp(36px,5vw,72px)',
                fontWeight: 400,
                lineHeight: 0.95,
                color: '#0c0c0e',
                margin: '0 0 24px 0',
              }}
            >
              JOIN THE CARWEB
              <br />
              <em>INNER CIRCLE.</em>
            </h2>
            <p
              style={{
                fontSize: 11,
                lineHeight: 1.9,
                color: 'rgba(12,12,14,0.6)',
                letterSpacing: '0.1em',
                maxWidth: 560,
                marginBottom: 32,
              }}
            >
              THREE TIERS. ONE COMMITMENT TO EXCELLENCE. SELECT THE MEMBERSHIP THAT
              REFLECTS YOUR REQUIREMENTS AND BEGIN YOUR RELATIONSHIP WITH THE CARWEB NETWORK.
            </p>
            <button
              style={{
                background: 'var(--accent)',
                color: 'white',
                padding: '14px 32px',
                fontSize: 10,
                letterSpacing: '0.22em',
                border: 'none',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
              }}
            >
              APPLY NOW
            </button>
          </div>

          {/* Tier cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
              gap: 24,
              padding: 'clamp(32px,4vw,48px)',
            }}
          >
            {/* ENTHUSIAST */}
            <div className="card" style={{ padding: 40 }}>
              <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: 6 }}>
                ENTHUSIAST
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: 20 }}>
                ENTRY LEVEL
              </div>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 40, color: '#0c0c0e', fontWeight: 400 }}>£18,000</span>
                <span style={{ fontSize: 9, color: 'rgba(12,12,14,0.4)', marginLeft: 6 }}>/ YEAR</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {['PRIORITY SOURCING ACCESS', 'FACTORY ORDER ASSISTANCE', 'CONCIERGE HOTLINE', '2 TEST DRIVE EVENTS / YEAR'].map((f) => (
                  <li key={f} style={{ fontSize: 9, letterSpacing: '0.15em', color: 'rgba(12,12,14,0.6)', padding: '8px 0', borderBottom: '1px solid rgba(12,12,14,0.05)', display: 'flex', gap: 10 }}>
                    <span style={{ color: 'var(--accent)' }}>·</span>{f}
                  </li>
                ))}
              </ul>
              <button style={{ width: '100%', background: 'var(--accent)', color: 'white', padding: 12, fontSize: 9, letterSpacing: '0.25em', border: 'none', borderRadius: 2, cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase' }}>
                APPLY
              </button>
            </div>

            {/* PINNACLE */}
            <div
              style={{
                background: '#1a1a1a',
                color: 'white',
                padding: 40,
                borderRadius: 3,
                boxShadow: '0 8px 48px rgba(0,0,0,0.3)',
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(232,213,176,0.2)',
                  border: '1px solid rgba(232,213,176,0.4)',
                  color: 'rgba(232,213,176,0.9)',
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  padding: '4px 12px',
                  borderRadius: 2,
                  marginBottom: 20,
                }}
              >
                MOST POPULAR
              </div>
              <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
                PINNACLE
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(232,213,176,0.85)', marginBottom: 20 }}>
                FULL ACCESS
              </div>
              <div style={{ marginBottom: 16 }}>
                <span style={{ fontSize: 40, color: 'white', fontWeight: 400 }}>£42,000</span>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginLeft: 6 }}>/ YEAR</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {['DEDICATED ACQUISITION SPECIALIST', 'BESPOKE CONFIGURATION SESSIONS', 'GLOBAL SOURCING NETWORK', 'FLEET MANAGEMENT INCLUDED', '4 TRACK DAY INVITATIONS / YEAR'].map((f) => (
                  <li key={f} style={{ fontSize: 9, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.6)', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: 10 }}>
                    <span style={{ color: 'rgba(232,213,176,0.7)' }}>·</span>{f}
                  </li>
                ))}
              </ul>
              <button style={{ width: '100%', background: 'transparent', color: 'white', padding: 12, fontSize: 9, letterSpacing: '0.25em', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 2, cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase' }}>
                APPLY
              </button>
            </div>

            {/* ATELIER */}
            <div className="card" style={{ padding: 40 }}>
              <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', marginBottom: 6 }}>
                ATELIER CIRCLE
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.25em', color: 'var(--accent)', marginBottom: 20 }}>
                INVITATION ONLY
              </div>
              <div style={{ fontSize: 16, color: '#0c0c0e', letterSpacing: '0.08em', marginBottom: 16 }}>
                BY INVITATION ONLY
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                {['FACTORY LIAISON ACCESS', 'MARQUE DIRECTOR INTRODUCTIONS', 'UNLIMITED BESPOKE ORDERS', 'PRIVATE COLLECTION STORAGE', 'PERSONAL CHAUFFEUR ON DEMAND'].map((f) => (
                  <li key={f} style={{ fontSize: 9, letterSpacing: '0.15em', color: 'rgba(12,12,14,0.6)', padding: '8px 0', borderBottom: '1px solid rgba(12,12,14,0.05)', display: 'flex', gap: 10 }}>
                    <span style={{ color: 'var(--accent)' }}>·</span>{f}
                  </li>
                ))}
              </ul>
              <button style={{ width: '100%', background: 'transparent', color: 'var(--accent)', padding: 12, fontSize: 9, letterSpacing: '0.25em', border: '1px solid rgba(12,12,14,0.4)', borderRadius: 2, cursor: 'pointer', fontFamily: 'inherit', textTransform: 'uppercase' }}>
                ENQUIRE
              </button>
            </div>
          </div>

          {/* Perks strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 32,
              padding: 'clamp(32px,4vw,48px)',
              borderTop: '1px solid rgba(12,12,14,0.07)',
            }}
          >
            {perks.map((perk) => (
              <div key={perk.label}>
                <div style={{ fontSize: 16, color: 'rgba(12,12,14,0.2)', marginBottom: 12 }}>·</div>
                <div style={{ fontSize: 10, letterSpacing: '0.2em', color: '#0c0c0e', marginBottom: 10 }}>
                  {perk.label}
                </div>
                <p style={{ fontSize: 10, lineHeight: 1.7, color: 'rgba(12,12,14,0.5)', margin: 0, letterSpacing: '0.08em' }}>
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
