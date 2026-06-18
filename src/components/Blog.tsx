import { AnimatePresence, motion } from 'motion/react'

interface BlogProps {
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

const articles = [
  {
    title: 'THE CÔTE D\'AZUR RUN',
    excerpt: 'Monaco to Cannes at dawn in the Grand Tourer. On the road before the tourists, alone with the asphalt and the sea.',
    date: 'MARCH 2025',
    category: 'ROAD JOURNALS',
    num: '01',
  },
  {
    title: 'ON STILL TARMAC',
    excerpt: 'What happens when you take a track-tuned Sport Coupe to the emptiest roads in southern Europe? Everything.',
    date: 'FEBRUARY 2025',
    category: 'TRACK ESSAYS',
    num: '02',
  },
  {
    title: 'THE ALPINE REWRITTEN',
    excerpt: 'St. Moritz through the Bernina in December. Cold air, precision tyres, and a V12 that speaks a language tarmac understands.',
    date: 'JANUARY 2025',
    category: 'WINTER DRIVES',
    num: '03',
  },
  {
    title: 'BESPOKE INTERIORS IN THE AGE OF SILENCE',
    excerpt: 'On the obsession with acoustic engineering in ultra-luxury cabins — and why silence is now the rarest material.',
    date: 'DECEMBER 2024',
    category: 'DESIGN',
    num: '04',
  },
]

export default function Blog({ isOpen, onClose }: BlogProps) {
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
              <span
                style={{
                  fontSize: 'clamp(14px,1.5vw,16px)',
                  letterSpacing: '0.28em',
                  color: '#0c0c0e',
                }}
              >
                CARWEB.IN
              </span>
              <span style={{ color: 'rgba(12,12,14,0.3)', fontSize: 12 }}>/</span>
              <span style={{ fontSize: 10, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)' }}>
                JOURNAL
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
                transition: 'all 0.3s ease',
              }}
            >
              × CLOSE
            </button>
          </div>

          {/* Featured article */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              height: 480,
            }}
          >
            {/* Left dark panel */}
            <div
              style={{
                background: 'linear-gradient(135deg, #0f0f0f, #1c1c1c)',
                padding: 'clamp(48px,6vw,80px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-block',
                    border: '1px solid rgba(232,213,176,0.3)',
                    padding: '4px 12px',
                    fontSize: 8,
                    letterSpacing: '0.3em',
                    color: 'rgba(232,213,176,0.85)',
                    borderRadius: 1,
                    marginBottom: 24,
                  }}
                >
                  FEATURED
                </div>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.25em',
                    color: 'rgba(255,255,255,0.35)',
                    marginBottom: 16,
                  }}
                >
                  MARCH 2025
                </div>
                <div style={{ height: 1, width: 40, background: 'rgba(232,213,176,0.4)', marginBottom: 20 }} />
                <h2
                  style={{
                    fontSize: 'clamp(24px,3vw,42px)',
                    fontWeight: 400,
                    color: 'white',
                    lineHeight: 1.0,
                    letterSpacing: '-0.01em',
                    margin: 0,
                  }}
                >
                  THE CÔTE D'AZUR
                  <br />
                  <em>RUN</em>
                </h2>
              </div>
              <p
                style={{
                  fontSize: 11,
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.5)',
                  margin: 0,
                  letterSpacing: '0.1em',
                  maxWidth: 400,
                }}
              >
                MONACO TO CANNES AT DAWN IN THE GRAND TOURER. ON THE ROAD BEFORE THE
                TOURISTS, ALONE WITH THE ASPHALT AND THE SEA.
              </p>
            </div>

            {/* Right white panel */}
            <div
              style={{
                background: 'white',
                padding: 'clamp(48px,6vw,80px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.25em',
                    color: 'rgba(12,12,14,0.35)',
                    marginBottom: 20,
                  }}
                >
                  ROAD JOURNALS · MARCH 2025
                </div>
                <blockquote
                  style={{
                    fontStyle: 'italic',
                    fontSize: 'clamp(16px,2vw,24px)',
                    lineHeight: 1.4,
                    color: '#0c0c0e',
                    margin: '0 0 32px 0',
                    letterSpacing: '-0.01em',
                  }}
                >
                  "THE ROAD HAS A RHYTHM, AND THE GRAND TOURER KNOWS EVERY BEAT."
                </blockquote>
              </div>
              <div>
                <p
                  style={{
                    fontSize: 11,
                    lineHeight: 1.8,
                    color: 'rgba(12,12,14,0.6)',
                    marginBottom: 24,
                    letterSpacing: '0.1em',
                  }}
                >
                  BEFORE THE CITY WAKES, BEFORE THE ROADS FILL, THERE IS A WINDOW —
                  AND WE DROVE IT FROM ONE END TO THE OTHER.
                </p>
                <a
                  href="#"
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.22em',
                    color: '#0c0c0e',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(12,12,14,0.3)',
                    paddingBottom: 2,
                  }}
                  onClick={(e) => e.preventDefault()}
                >
                  CONTINUE READING →
                </a>
              </div>
            </div>
          </div>

          {/* Article grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3,1fr)',
              gap: 24,
              padding: 'clamp(40px,5vw,64px)',
            }}
          >
            {articles.map((article, i) => (
              <motion.div
                key={article.num}
                className="card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.08,
                }}
                style={{ overflow: 'hidden' }}
              >
                {/* Top dark panel */}
                <div
                  style={{
                    height: 180,
                    background: 'linear-gradient(135deg, #0f0f0f 0%, #2a2a2a 100%)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.3em',
                      color: 'rgba(232,213,176,0.7)',
                    }}
                  >
                    {article.category}
                  </div>
                  <div
                    style={{
                      fontSize: 'clamp(11px,1.5vw,16px)',
                      color: 'rgba(255,255,255,0.2)',
                      position: 'absolute',
                      top: 20,
                      right: 20,
                      letterSpacing: '0.1em',
                    }}
                  >
                    {article.num}
                  </div>
                </div>

                {/* Bottom white panel */}
                <div style={{ background: 'white', padding: 24 }}>
                  <div
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.25em',
                      color: 'rgba(12,12,14,0.35)',
                      marginBottom: 10,
                    }}
                  >
                    {article.date}
                  </div>
                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 400,
                      color: '#0c0c0e',
                      margin: '0 0 12px 0',
                      lineHeight: 1.2,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 10,
                      lineHeight: 1.8,
                      color: 'rgba(12,12,14,0.55)',
                      margin: '0 0 16px 0',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {article.excerpt}
                  </p>
                  <a
                    href="#"
                    style={{
                      fontSize: 9,
                      letterSpacing: '0.22em',
                      color: 'var(--accent)',
                      textDecoration: 'none',
                    }}
                    onClick={(e) => e.preventDefault()}
                  >
                    READ MORE →
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
