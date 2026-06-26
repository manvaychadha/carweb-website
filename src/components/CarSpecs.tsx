import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

// ─── Car recommendation data ────────────────────────────────────────────────

interface CarRec {
  name: string
  segment: string
  priceRange: string
  verdict: string
  pros: [string, string, string]
  budgets: string[]
  fuels: string[]
  families: string[]
}

const carDatabase: CarRec[] = [
  {
    name: 'MARUTI SWIFT',
    segment: 'HATCHBACK',
    priceRange: '₹6.5 – 9.5 LAKH',
    verdict: 'BEST-IN-CLASS MILEAGE WITH LOW SERVICE COSTS. IDEAL CITY COMMUTER.',
    pros: ['24 KMPL MILEAGE', 'LOWEST SERVICE COST', 'WIDE SERVICE NETWORK'],
    budgets: ['5-10L'],
    fuels: ['PETROL', 'NO PREFERENCE'],
    families: ['JUST ME', 'COUPLE'],
  },
  {
    name: 'TATA NEXON',
    segment: 'COMPACT SUV',
    priceRange: '₹8.1 – 15.5 LAKH',
    verdict: 'INDIA\'S SAFEST CAR. 5-STAR GLOBAL NCAP. BEST VALUE IN ITS SEGMENT.',
    pros: ['5-STAR SAFETY RATING', 'STRONG RESALE VALUE', 'FEATURE-RICH'],
    budgets: ['10-15L', '5-10L'],
    fuels: ['PETROL', 'DIESEL', 'ELECTRIC/HYBRID', 'NO PREFERENCE'],
    families: ['COUPLE', 'SMALL FAMILY', 'LARGE FAMILY'],
  },
  {
    name: 'HYUNDAI CRETA',
    segment: 'MID-SIZE SUV',
    priceRange: '₹11.5 – 20 LAKH',
    verdict: 'BEST-SELLING SUV IN INDIA FOR A REASON. PREMIUM FEEL, SOLID RELIABILITY.',
    pros: ['SEGMENT-BEST FEATURES', 'PANORAMIC SUNROOF', 'STRONG BRAND SUPPORT'],
    budgets: ['15-20L', '10-15L'],
    fuels: ['PETROL', 'DIESEL', 'ELECTRIC/HYBRID', 'NO PREFERENCE'],
    families: ['COUPLE', 'SMALL FAMILY', 'LARGE FAMILY'],
  },
  {
    name: 'KIA SELTOS',
    segment: 'MID-SIZE SUV',
    priceRange: '₹11 – 20.5 LAKH',
    verdict: 'PREMIUM EXPERIENCE AT MID-SIZE PRICING. EXCELLENT FOR HIGHWAY DRIVING.',
    pros: ['BEST-IN-SEGMENT INTERIORS', 'SMOOTH HIGHWAY RIDE', 'ADAS SAFETY SUITE'],
    budgets: ['15-20L', '10-15L'],
    fuels: ['PETROL', 'DIESEL', 'NO PREFERENCE'],
    families: ['COUPLE', 'SMALL FAMILY'],
  },
  {
    name: 'TATA NEXON EV',
    segment: 'ELECTRIC SUV',
    priceRange: '₹14.5 – 19.5 LAKH',
    verdict: 'BEST-VALUE ELECTRIC SUV IN INDIA. LOW RUNNING COSTS. PROVEN RELIABILITY.',
    pros: ['₹1.5/KM RUNNING COST', '5-STAR SAFETY', 'LONGEST EV RANGE <20L'],
    budgets: ['15-20L', '10-15L'],
    fuels: ['ELECTRIC/HYBRID'],
    families: ['JUST ME', 'COUPLE', 'SMALL FAMILY'],
  },
  {
    name: 'MARUTI GRAND VITARA',
    segment: 'MID-SIZE SUV HYBRID',
    priceRange: '₹11 – 20 LAKH',
    verdict: 'INDIA\'S BEST STRONG HYBRID. 27 KMPL IN CITY. LOWEST RUNNING COSTS IN SEGMENT.',
    pros: ['27 KMPL CITY MILEAGE', 'STRONG HYBRID TECH', 'SUNROOF + ALLGRIP 4WD'],
    budgets: ['15-20L', '10-15L'],
    fuels: ['ELECTRIC/HYBRID', 'PETROL', 'NO PREFERENCE'],
    families: ['COUPLE', 'SMALL FAMILY'],
  },
  {
    name: 'TOYOTA FORTUNER',
    segment: 'FULL-SIZE SUV',
    priceRange: '₹34 – 50 LAKH',
    verdict: 'THE GOLD STANDARD FOR HIGHWAY AND OFF-ROAD. UNMATCHED RESALE VALUE.',
    pros: ['BEST RESALE IN SEGMENT', 'BULLET-PROOF RELIABILITY', 'TRUE OFF-ROAD CAPABLE'],
    budgets: ['20-40L', '40L+'],
    fuels: ['DIESEL', 'NO PREFERENCE'],
    families: ['SMALL FAMILY', 'LARGE FAMILY'],
  },
  {
    name: 'MG HECTOR',
    segment: 'FULL-SIZE SUV',
    priceRange: '₹14 – 23 LAKH',
    verdict: 'LARGEST SUNROOF, MOST SPACE, LOADED FEATURES. VALUE PLAY FOR LARGE FAMILIES.',
    pros: ['MOST BOOT SPACE', 'LARGEST CABIN', 'CONNECTED CAR FEATURES'],
    budgets: ['20-40L', '15-20L'],
    fuels: ['PETROL', 'DIESEL', 'NO PREFERENCE'],
    families: ['LARGE FAMILY'],
  },
  {
    name: 'MARUTI ALTO K10',
    segment: 'ENTRY HATCHBACK',
    priceRange: '₹3.9 – 5.9 LAKH',
    verdict: 'LOWEST OWNERSHIP COST IN INDIA. PERFECT FOR CITY AND FIRST VEHICLE.',
    pros: ['CHEAPEST TO OWN', 'UNDER 5 LAKH', 'WIDEST SERVICE NETWORK'],
    budgets: ['UNDER 5L'],
    fuels: ['PETROL', 'NO PREFERENCE'],
    families: ['JUST ME', 'COUPLE'],
  },
  {
    name: 'TATA TIAGO EV',
    segment: 'ELECTRIC HATCHBACK',
    priceRange: '₹8.7 – 11.5 LAKH',
    verdict: 'MOST AFFORDABLE EV IN INDIA. IDEAL CITY COMMUTER WITH ZERO FUEL COST.',
    pros: ['CHEAPEST EV IN INDIA', '₹0.5/KM RUNNING COST', '5-STAR SAFETY'],
    budgets: ['5-10L', '10-15L'],
    fuels: ['ELECTRIC/HYBRID'],
    families: ['JUST ME', 'COUPLE'],
  },
  {
    name: 'BMW 3 SERIES',
    segment: 'LUXURY SEDAN',
    priceRange: '₹46 – 65 LAKH',
    verdict: 'THE DEFINITIVE DRIVER\'S CAR. UNMATCHED DYNAMICS AND BRAND PRESTIGE.',
    pros: ['BEST DRIVING DYNAMICS', 'PREMIUM BRAND VALUE', 'SUPERIOR ADAS SUITE'],
    budgets: ['40L+'],
    fuels: ['PETROL', 'NO PREFERENCE'],
    families: ['JUST ME', 'COUPLE'],
  },
  {
    name: 'JEEP COMPASS',
    segment: 'PREMIUM SUV',
    priceRange: '₹20 – 30 LAKH',
    verdict: 'MOST CAPABLE AWD UNDER 30 LAKH. UNIQUE POSITIONING FOR WEEKEND EXPLORERS.',
    pros: ['BEST AWD UNDER 30L', 'DISTINCTIVE STYLING', 'STRONG HIGHWAY PRESENCE'],
    budgets: ['20-40L'],
    fuels: ['PETROL', 'DIESEL', 'NO PREFERENCE'],
    families: ['JUST ME', 'COUPLE', 'SMALL FAMILY'],
  },
]

function getRecommendations(answers: Record<string, string>): CarRec[] {
  const { budget, family, fuel } = answers
  let matches = carDatabase.filter((car) => {
    const budgetMatch = car.budgets.includes(budget)
    const fuelMatch = fuel === 'NO PREFERENCE' || car.fuels.includes(fuel) || car.fuels.includes('NO PREFERENCE')
    const familyMatch = car.families.includes(family)
    return budgetMatch && fuelMatch && familyMatch
  })

  if (matches.length < 3) {
    const extra = carDatabase.filter(
      (car) =>
        !matches.includes(car) &&
        (car.budgets.includes(budget) || car.families.includes(family))
    )
    matches = [...matches, ...extra].slice(0, 3)
  }

  return matches.slice(0, 3)
}

// ─── Step definitions ────────────────────────────────────────────────────────

const steps = [
  {
    id: 'budget',
    question: 'WHAT IS YOUR BUDGET?',
    options: ['UNDER 5L', '5-10L', '10-15L', '15-20L', '20-40L', '40L+'],
  },
  {
    id: 'family',
    question: 'WHO WILL BE DRIVING THIS CAR?',
    options: ['JUST ME', 'COUPLE', 'SMALL FAMILY (3-4)', 'LARGE FAMILY (5+)'],
  },
  {
    id: 'usage',
    question: 'HOW WILL YOU PRIMARILY USE IT?',
    options: ['CITY COMMUTE', 'HIGHWAY DRIVING', 'MIXED USE', 'OFF-ROAD / ADVENTURE'],
  },
  {
    id: 'fuel',
    question: 'FUEL PREFERENCE?',
    options: ['PETROL', 'DIESEL', 'ELECTRIC / HYBRID', 'NO PREFERENCE'],
  },
  {
    id: 'city',
    question: 'WHERE ARE YOU BASED?',
    options: ['METRO CITY', 'TIER 2 / 3 CITY', 'TOWN / RURAL'],
  },
]

const inputStyle: React.CSSProperties = {
  background: 'rgba(12,12,14,0.04)',
  border: '1px solid rgba(12,12,14,0.12)',
  color: '#0c0c0e',
  fontSize: 12,
  letterSpacing: '0.12em',
  padding: '14px 16px',
  borderRadius: 2,
  width: '100%',
  fontFamily: 'inherit',
  textTransform: 'uppercase',
  outline: 'none',
  boxSizing: 'border-box',
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function CarSpecs() {
  const [stepIndex, setStepIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [email, setEmail] = useState('')
  const [phase, setPhase] = useState<'quiz' | 'email' | 'results'>('quiz')
  const [recommendations, setRecommendations] = useState<CarRec[]>([])

  const currentStep = steps[stepIndex]

  function handleOption(value: string) {
    const normalizedValue = value.replace(' (3-4)', '').replace(' (5+)', '').replace(' / HYBRID', '/HYBRID').replace('ELECTRIC / HYBRID', 'ELECTRIC/HYBRID').replace(' COMMUTE', '').replace(' DRIVING', '').replace(' USE', '').replace(' / ADVENTURE', '').replace('CITY ', '').replace('HIGHWAY ', '').replace('MIXED ', '').replace('TOWN / RURAL', 'TIER 2/3').replace('TIER 2 / 3 CITY', 'TIER 2/3').replace('METRO CITY', 'METRO').replace('OFF-ROAD', 'OFF-ROAD')
    const newAnswers = { ...answers, [currentStep.id]: normalizedValue }
    setAnswers(newAnswers)

    if (stepIndex < steps.length - 1) {
      setStepIndex(stepIndex + 1)
    } else {
      setPhase('email')
    }
  }

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    const recs = getRecommendations(answers)
    setRecommendations(recs)
    setPhase('results')
  }

  function handleReset() {
    setStepIndex(0)
    setAnswers({})
    setEmail('')
    setPhase('quiz')
    setRecommendations([])
  }

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <span className="section-counter">01</span>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: 64, textAlign: 'center' }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.5)' }}>
            CAR MATCH TOOL
          </span>
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px,5.5vw,72px)',
            fontWeight: 300,
            lineHeight: 0.95,
            color: '#0c0c0e',
            margin: 0,
            position: 'relative',
            zIndex: 1,
          }}
        >
          FIND YOUR
          <br />
          <em>PERFECT CAR.</em>
        </h2>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            color: 'rgba(12,12,14,0.5)',
            marginTop: 20,
          }}
        >
          5 QUESTIONS. DATA-DRIVEN RECOMMENDATIONS. FREE.
        </p>
      </motion.div>

      {/* Tool container — split layout */}
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 420px',
          gap: 40,
          alignItems: 'start',
        }}
      >
        {/* Photo accent */}
        <div
          style={{
            borderRadius: 4,
            overflow: 'hidden',
            height: 480,
            position: 'sticky',
            top: 120,
          }}
        >
          <img
            src="/videos/design.jpg"
            alt="Car interior design"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 28,
              left: 28,
            }}
          >
            <div style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>
              EVERY ANSWER SHAPES YOUR SHORTLIST
            </div>
            <div style={{ fontSize: 16, color: 'white', letterSpacing: '0.06em' }}>
              DATA-DRIVEN.
              <br />
              <em>PERSONALISED.</em>
            </div>
          </div>
        </div>

      <div
        style={{
          background: 'white',
          border: '1px solid rgba(12,12,14,0.06)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          borderRadius: 4,
          padding: 'clamp(32px,5vw,56px)',
          minHeight: 320,
        }}
      >
        <AnimatePresence mode="wait">

          {/* ── QUIZ PHASE ── */}
          {phase === 'quiz' && (
            <motion.div
              key={`step-${stepIndex}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Progress */}
              <div style={{ marginBottom: 36 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.3em',
                      color: 'rgba(12,12,14,0.4)',
                    }}
                  >
                    QUESTION {stepIndex + 1} OF {steps.length}
                  </span>
                  <span
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.3em',
                      color: 'rgba(12,12,14,0.4)',
                    }}
                  >
                    {Math.round(((stepIndex) / steps.length) * 100)}% COMPLETE
                  </span>
                </div>
                <div
                  style={{
                    height: 2,
                    background: 'rgba(12,12,14,0.08)',
                    borderRadius: 1,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      height: '100%',
                      width: `${(stepIndex / steps.length) * 100}%`,
                      background: 'var(--accent)',
                      borderRadius: 1,
                      transition: 'width 0.4s ease',
                    }}
                  />
                </div>
              </div>

              {/* Question */}
              <h3
                style={{
                  fontSize: 'clamp(18px,2.5vw,26px)',
                  fontWeight: 400,
                  color: '#0c0c0e',
                  margin: '0 0 32px 0',
                  letterSpacing: '0.05em',
                }}
              >
                {currentStep.question}
              </h3>

              {/* Options */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: currentStep.options.length > 4 ? 'repeat(3,1fr)' : 'repeat(2,1fr)',
                  gap: 10,
                }}
              >
                {currentStep.options.map((opt) => (
                  <OptionButton key={opt} label={opt} onClick={() => handleOption(opt)} />
                ))}
              </div>
            </motion.div>
          )}

          {/* ── EMAIL GATE PHASE ── */}
          {phase === 'email' && (
            <motion.div
              key="email"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ textAlign: 'center', marginBottom: 36 }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background: 'rgba(12,12,14,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    fontSize: 20,
                  }}
                >
                  ✓
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(20px,2.5vw,28px)',
                    fontWeight: 400,
                    color: '#0c0c0e',
                    margin: '0 0 12px 0',
                    letterSpacing: '0.04em',
                  }}
                >
                  YOUR RECOMMENDATIONS ARE READY.
                </h3>
                <p
                  style={{
                    fontSize: 11,
                    letterSpacing: '0.15em',
                    color: 'rgba(12,12,14,0.5)',
                    margin: 0,
                  }}
                >
                  ENTER YOUR EMAIL TO VIEW YOUR TOP 3 MATCHED VEHICLES.
                </p>
              </div>

              <form onSubmit={handleEmailSubmit}>
                <div style={{ marginBottom: 16 }}>
                  <label
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.3em',
                      color: 'rgba(12,12,14,0.5)',
                      marginBottom: 6,
                      display: 'block',
                    }}
                  >
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="YOUR EMAIL"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={inputStyle}
                  />
                </div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    background: 'var(--accent)',
                    color: 'white',
                    padding: 16,
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    border: 'none',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                  }}
                >
                  SHOW MY RECOMMENDATIONS
                </button>
                <p
                  style={{
                    fontSize: 8,
                    letterSpacing: '0.2em',
                    color: 'rgba(12,12,14,0.3)',
                    textAlign: 'center',
                    margin: '12px 0 0 0',
                  }}
                >
                  NO SPAM. NO DEALER CALLS. JUST YOUR REPORT.
                </p>
              </form>
            </motion.div>
          )}

          {/* ── RESULTS PHASE ── */}
          {phase === 'results' && (
            <motion.div
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div style={{ marginBottom: 32 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                  <div style={{ width: 32, height: 1, background: 'var(--accent)' }} />
                  <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.5)' }}>
                    TOP RECOMMENDED VEHICLES
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 'clamp(20px,2.5vw,28px)',
                    fontWeight: 400,
                    color: '#0c0c0e',
                    margin: 0,
                    letterSpacing: '0.04em',
                  }}
                >
                  YOUR CARWEB SHORTLIST
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
                {recommendations.map((car, i) => (
                  <motion.div
                    key={car.name}
                    className="card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ padding: '20px 24px' }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: 8,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontSize: 8,
                            letterSpacing: '0.3em',
                            color: 'rgba(12,12,14,0.4)',
                            marginBottom: 4,
                          }}
                        >
                          {car.segment}
                        </div>
                        <div
                          style={{
                            fontSize: 16,
                            color: '#0c0c0e',
                            letterSpacing: '0.06em',
                          }}
                        >
                          {car.name}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: 9,
                          letterSpacing: '0.15em',
                          color: 'var(--accent)',
                          textAlign: 'right',
                          flexShrink: 0,
                        }}
                      >
                        {car.priceRange}
                      </div>
                    </div>
                    <p
                      style={{
                        fontSize: 10,
                        lineHeight: 1.7,
                        color: 'rgba(12,12,14,0.55)',
                        margin: '0 0 12px 0',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {car.verdict}
                    </p>
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                      {car.pros.map((pro) => (
                        <span
                          key={pro}
                          style={{
                            fontSize: 8,
                            letterSpacing: '0.2em',
                            color: 'rgba(12,12,14,0.5)',
                            background: 'rgba(12,12,14,0.04)',
                            border: '1px solid rgba(12,12,14,0.08)',
                            borderRadius: 2,
                            padding: '4px 10px',
                          }}
                        >
                          {pro}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  style={{
                    flex: 1,
                    background: 'var(--accent)',
                    color: 'white',
                    padding: 14,
                    fontSize: 9,
                    letterSpacing: '0.22em',
                    border: 'none',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                  }}
                >
                  BOOK CONSULTATION
                </button>
                <button
                  onClick={handleReset}
                  style={{
                    flex: 1,
                    background: 'transparent',
                    border: '1px solid rgba(12,12,14,0.15)',
                    color: 'rgba(12,12,14,0.5)',
                    padding: 14,
                    fontSize: 9,
                    letterSpacing: '0.22em',
                    borderRadius: 2,
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                  }}
                >
                  START OVER
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      </div>
    </section>
  )
}

function OptionButton({ label, onClick }: { label: string; onClick: () => void }) {
  const [hover, setHover] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: '12px 16px',
        background: hover ? '#0c0c0e' : 'transparent',
        color: hover ? 'white' : 'rgba(12,12,14,0.6)',
        border: `1px solid ${hover ? '#0c0c0e' : 'rgba(12,12,14,0.15)'}`,
        borderRadius: 2,
        fontSize: 9,
        letterSpacing: '0.2em',
        cursor: 'pointer',
        fontFamily: 'inherit',
        textTransform: 'uppercase',
        transition: 'all 0.2s ease',
        textAlign: 'left',
      }}
    >
      {label}
    </button>
  )
}
