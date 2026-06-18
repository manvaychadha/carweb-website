import { AnimatePresence, motion } from 'motion/react'

interface DrivesPageProps {
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

const routes = [
  {
    region: 'FRENCH RIVIERA',
    title: 'CÔTE D\'AZUR',
    subtitle: 'MONACO TO CANNES VIA THE CORNICHE INFÉRIEURE',
    description: 'the most cinematic coastal road in Europe, connecting Monaco to Cannes along cliffs that fall directly into the Mediterranean. best driven before 7am, before the world remembers it exists.',
    duration: '3 DAYS',
    season: 'SPRING / SUMMER',
  },
  {
    region: 'ALPINE PASSES',
    title: 'SWISS ALPS',
    subtitle: 'ST. MORITZ THROUGH THE BERNINA AND JULIER PASSES',
    description: 'two of Switzerland\'s most demanding alpine crossings, with snowfields, hairpins, and views that redefine scale. the bernina has 55 curves. you will want more.',
    duration: '5 DAYS',
    season: 'SUMMER',
  },
  {
    region: 'AMERICAN HIGHWAY',
    title: 'PACIFIC COAST',
    subtitle: 'SAN FRANCISCO TO LOS ANGELES ON HIGHWAY ONE',
    description: 'five hundred miles of coastal California — redwoods, sea cliffs, and Big Sur\'s eternal golden light. the definition of the open road.',
    duration: '4 DAYS',
    season: 'YEAR-ROUND',
  },
  {
    region: 'ENGLISH COUNTRYSIDE',
    title: 'COTSWOLDS CIRCUIT',
    subtitle: 'OXFORD THROUGH THE COTSWOLDS TO THE VALE OF WHITE HORSE',
    description: 'honey stone villages, sunken lanes, and rolling farmland that changes colour with every season. a route where speed matters far less than the act of being there.',
    duration: '2 DAYS',
    season: 'AUTUMN',
  },
  {
    region: 'IBERIAN CIRCUIT',
    title: 'NORTHERN SPAIN',
    subtitle: 'BILBAO THROUGH THE BASQUE COUNTRY TO SAN SEBASTIÁN AND BACK',
    description: 'rugged coastline, mountain passes, and the world\'s finest food culture as a backdrop. a circuit that asks nothing of you but your full attention.',
    duration: '4 DAYS',
    season: 'SPRING',
  },
  {
    region: 'HIGHLAND ROADS',
    title: 'SCOTTISH NC500',
    subtitle: 'INVERNESS AROUND THE NORTH COAST 500 LOOP',
    description: 'five hundred miles of scottish highlands, single-track roads, and the kind of emptiness that recalibrates everything. best experienced without an itinerary.',
    duration: '7 DAYS',
    season: 'SUMMER',
  },
]

export default function DrivesPage({ isOpen, onClose }: DrivesPageProps) {
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
                DRIVES
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

          {/* Intro section */}
          <div
            style={{
              padding: 'clamp(48px,6vw,80px)',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(36px,5vw,72px)',
                  fontWeight: 400,
                  lineHeight: 0.95,
                  color: '#0c0c0e',
                  margin: '0 0 24px 0',
                }}
              >
                THE WORLD'S FINEST
                <br />
                ROADS.
                <br />
                <em>YOUR ITINERARY.</em>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <p
                style={{
                  fontSize: 11,
                  lineHeight: 1.9,
                  color: 'rgba(12,12,14,0.6)',
                  letterSpacing: '0.1em',
                  marginBottom: 32,
                }}
              >
                EVERY ROUTE IS RESEARCHED, ROAD-TESTED, AND CURATED FOR THE VEHICLE YOU
                CHOOSE TO BRING. WE HANDLE EVERYTHING — HOTELS, FUEL STOPS, SERVICING
                SUPPORT, AND THE MOMENTS IN BETWEEN.
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
                  alignSelf: 'flex-start',
                }}
              >
                REQUEST A CUSTOM DRIVE
              </button>
            </div>
          </div>

          {/* Route cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill,minmax(360px,1fr))',
              gap: 2,
            }}
          >
            {routes.map((route, i) => (
              <motion.div
                key={route.title}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.06,
                }}
                style={{ overflow: 'hidden', borderRadius: 0 }}
              >
                {/* Top dark panel */}
                <div
                  style={{
                    height: 200,
                    background: 'linear-gradient(135deg, #0f0f0f 0%, #2a2a2a 100%)',
                    position: 'relative',
                    padding: 28,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.35em',
                      color: 'rgba(232,213,176,0.85)',
                    }}
                  >
                    {route.region}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 'clamp(20px,3vw,32px)',
                        color: 'white',
                        letterSpacing: '-0.01em',
                        fontWeight: 400,
                        lineHeight: 1.0,
                      }}
                    >
                      {route.title}
                    </div>
                    <div
                      style={{
                        fontSize: 10,
                        color: 'rgba(255,255,255,0.6)',
                        letterSpacing: '0.1em',
                        marginTop: 6,
                      }}
                    >
                      {route.subtitle}
                    </div>
                  </div>
                </div>

                {/* Bottom panel */}
                <div style={{ padding: '28px 32px' }}>
                  <div
                    style={{
                      display: 'flex',
                      gap: 24,
                      marginBottom: 16,
                    }}
                  >
                    <div>
                      <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.35)', marginBottom: 4 }}>DURATION</div>
                      <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#0c0c0e' }}>{route.duration}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.35)', marginBottom: 4 }}>SEASON</div>
                      <div style={{ fontSize: 11, letterSpacing: '0.1em', color: '#0c0c0e' }}>{route.season}</div>
                    </div>
                  </div>
                  <p
                    style={{
                      fontSize: 11,
                      lineHeight: 1.9,
                      color: 'rgba(12,12,14,0.7)',
                      marginBottom: 24,
                      textTransform: 'lowercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {route.description}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.2em',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    REQUEST ROUTE →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
