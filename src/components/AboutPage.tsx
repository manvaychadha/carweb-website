import { AnimatePresence, motion } from 'motion/react'

interface AboutPageProps {
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

const values = [
  {
    label: 'DISCRETION',
    description: 'YOUR ACQUISITION REMAINS YOUR BUSINESS. OUR PROCESS, FROM SOURCING TO DELIVERY, IS CONDUCTED IN ABSOLUTE CONFIDENCE.',
  },
  {
    label: 'PRECISION',
    description: 'EVERY SPECIFICATION IS VERIFIED. EVERY VEHICLE INSPECTED. EVERY DETAIL CONFIRMED BEFORE WE BRING IT TO YOU.',
  },
  {
    label: 'HERITAGE',
    description: 'TWENTY YEARS OF RELATIONSHIPS WITH FACTORIES, MARQUE DIRECTORS, AND PRIVATE COLLECTORS WORLDWIDE.',
  },
  {
    label: 'PERFORMANCE',
    description: 'WE DO NOT ONLY SOURCE PERFORMANCE CARS — WE PERFORM FOR EVERY CLIENT, ON EVERY BRIEF, WITHOUT EXCEPTION.',
  },
]

const timeline = [
  { year: '2003', event: 'FOUNDED IN LONDON BY VIKRAM ANAND WITH A VISION TO TRANSFORM THE PRIVATE CAR ACQUISITION EXPERIENCE — BRINGING FACTORY ACCESS AND PERSONALISED SERVICE TO A SELECT CLIENTELE.' },
  { year: '2007', event: 'EXPANDED TO A FULL BESPOKE CONFIGURATION SERVICE, WITH DIRECT FACTORY LIAISON ACROSS TWELVE MARQUES. THE FIRST CLIENT SPECIFICATION SESSION TOOK PLACE AT THE PORSCHE FACTORY IN ZUFFENHAUSEN.' },
  { year: '2012', event: 'MIDDLE EAST AND ASIA-PACIFIC OPERATIONS LAUNCHED; OFFICES OPENED IN DUBAI AND SINGAPORE. THE CLIENT NETWORK REACHED 500 MEMBERS.' },
  { year: '2016', event: 'DRIVING ACADEMY PROGRAMME INTRODUCED, FORMALISING OUR PERFORMANCE DRIVER DEVELOPMENT OFFERING. THE INAUGURAL SESSION TOOK PLACE AT THE NÜRBURGRING.' },
  { year: '2020', event: 'FLEET MANAGEMENT DIVISION ESTABLISHED TO SERVE PRIVATE AND CORPORATE CLIENTS AT SCALE. STORAGE AND CHAUFFEUR SERVICES LAUNCHED ACROSS FIVE CITIES.' },
  { year: '2025', event: 'CELEBRATING TWENTY YEARS, CARWEB.IN CONTINUES TO DEFINE PRIVATE AUTOMOTIVE CONSULTANCY — SERVING CLIENTS ACROSS 40 COUNTRIES WITH THE SAME PRINCIPLES THAT BEGAN IT ALL.' },
]

export default function AboutPage({ isOpen, onClose }: AboutPageProps) {
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
                ABOUT
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

          {/* Section 1 — Intro */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '0.6fr 1fr',
              gap: 80,
              padding: 'clamp(48px,6vw,80px)',
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(32px,5vw,72px)',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  color: '#0c0c0e',
                  margin: '0 0 24px 0',
                }}
              >
                TWENTY YEARS
                <br />
                ON THE ROAD.
              </h2>
            </div>
            <div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 32,
                }}
              >
                {[
                  { num: '20+', label: 'YEARS' },
                  { num: '3', label: 'COLLECTIONS' },
                  { num: '40', label: 'COUNTRIES' },
                  { num: '3,200+', label: 'CLIENTS' },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(32px,4vw,56px)',
                        color: '#0c0c0e',
                        fontWeight: 400,
                        lineHeight: 1,
                        marginBottom: 6,
                      }}
                    >
                      {stat.num}
                    </div>
                    <div
                      style={{
                        fontSize: 9,
                        letterSpacing: '0.3em',
                        color: 'rgba(12,12,14,0.4)',
                      }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Section 2 — Values */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4,1fr)',
              gap: 32,
              padding: 'clamp(32px,4vw,48px)',
              borderTop: '1px solid rgba(12,12,14,0.07)',
            }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                style={{
                  borderTop: '2px solid var(--accent)',
                  paddingTop: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: '0.1em',
                    color: '#0c0c0e',
                    marginBottom: 12,
                  }}
                >
                  {v.label}
                </div>
                <p
                  style={{
                    fontSize: 10,
                    lineHeight: 1.8,
                    color: 'rgba(12,12,14,0.6)',
                    margin: 0,
                    letterSpacing: '0.08em',
                  }}
                >
                  {v.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Section 3 — Timeline */}
          <div
            style={{
              maxWidth: 720,
              padding: 'clamp(32px,4vw,48px)',
            }}
          >
            <div
              style={{
                fontSize: 9,
                letterSpacing: '0.35em',
                color: 'rgba(12,12,14,0.5)',
                marginBottom: 40,
              }}
            >
              OUR HISTORY
            </div>
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: 24,
                  borderBottom: '1px solid rgba(12,12,14,0.07)',
                  paddingTop: 20,
                  paddingBottom: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 13,
                    letterSpacing: '0.1em',
                    color: 'var(--accent)',
                    paddingTop: 2,
                  }}
                >
                  {item.year}
                </div>
                <p
                  style={{
                    fontSize: 11,
                    lineHeight: 1.8,
                    color: 'rgba(12,12,14,0.7)',
                    margin: 0,
                    letterSpacing: '0.08em',
                  }}
                >
                  {item.event}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
