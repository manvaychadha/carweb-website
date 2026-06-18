import { motion } from 'motion/react'

const services = [
  {
    num: '01',
    category: 'CAR RECOMMENDATIONS',
    title: 'THE RIGHT CAR FOR YOU',
    description:
      'PERSONALISED SHORTLIST BASED ON YOUR BUDGET, LIFESTYLE, CITY AND USAGE — NOT THE CAR THE DEALER WANTS TO SELL.',
  },
  {
    num: '02',
    category: 'VEHICLE COMPARISON REPORTS',
    title: 'SIDE BY SIDE, CLEARLY',
    description:
      'DETAILED WRITTEN REPORTS COMPARING 2-3 VEHICLES ON OWNERSHIP COST, SAFETY, FEATURES, AND LONG-TERM VALUE.',
  },
  {
    num: '03',
    category: 'DEALER NEGOTIATION SUPPORT',
    title: 'NEGOTIATE FROM STRENGTH',
    description:
      'WE TELL YOU EXACTLY WHAT DISCOUNTS ARE AVAILABLE, WHAT TO SKIP, AND HOW TO CLOSE AT THE RIGHT PRICE.',
  },
  {
    num: '04',
    category: 'USED CAR SOURCING',
    title: 'PRE-OWNED, DE-RISKED',
    description:
      'WE SOURCE AND VERIFY USED CARS INDEPENDENTLY — HISTORY CHECK, MECHANICAL INSPECTION GUIDANCE, FAIR VALUATION.',
  },
  {
    num: '05',
    category: 'LUXURY CAR SOURCING',
    title: 'BEYOND THE SHOWROOM',
    description:
      'SOURCING SUPPORT FOR PREMIUM AND LUXURY VEHICLES INCLUDING GREY IMPORTS, PARALLEL IMPORTS, AND RARE VARIANTS.',
  },
  {
    num: '06',
    category: 'PDI ASSISTANCE',
    title: 'INSPECT BEFORE YOU ACCEPT',
    description:
      'STEP-BY-STEP PRE-DELIVERY INSPECTION CHECKLIST AND GUIDANCE SO YOU NEVER SIGN FOR A CAR WITH HIDDEN DEFECTS.',
  },
  {
    num: '07',
    category: 'INSURANCE CONSULTATION',
    title: 'COVER THAT MAKES SENSE',
    description:
      'INDEPENDENT ADVICE ON WHICH INSURANCE ADD-ONS ARE WORTH IT AND WHICH ARE PURE DEALER MARGIN.',
  },
  {
    num: '08',
    category: 'FINANCING CONSULTATION',
    title: 'BORROW SMARTER',
    description:
      'WE HELP YOU COMPARE LOAN OPTIONS, UNDERSTAND THE REAL INTEREST COST, AND AVOID OVERPRICED DEALERSHIP FINANCE.',
  },
  {
    num: '09',
    category: 'NRI BUYING SUPPORT',
    title: 'BUY FOR YOUR FAMILY',
    description:
      'REMOTE END-TO-END SUPPORT FOR NRI CLIENTS PURCHASING VEHICLES IN INDIA — SHORTLISTING, VERIFICATION, DELIVERY.',
  },
  {
    num: '10',
    category: 'CORPORATE FLEET ADVISORY',
    title: 'FLEET DECISIONS, SIMPLIFIED',
    description:
      'VEHICLE SELECTION, OWNERSHIP COST MODELLING, AND NEGOTIATION SUPPORT FOR COMPANIES SOURCING MULTIPLE VEHICLES.',
  },
]

export default function Experiences() {
  return (
    <section id="services" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <video
        src="/videos/services-bg.mp4"
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
          opacity: 1,
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
        }}
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 60 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 24, height: 1, background: 'rgba(232,213,176,0.6)' }} />
            <span style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(232,213,176,0.85)' }}>
              WHAT WE DO
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(36px,4.5vw,72px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: 'white',
              margin: 0,
              maxWidth: 480,
            }}
          >
            10 SERVICES.
            <br />
            <em>ONE MISSION.</em>
          </h2>
        </motion.div>

        {/* Services grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
            gap: 16,
          }}
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.num}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 4) * 0.08 }}
              style={{ padding: '24px 28px' }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 8,
                }}
              >
                <div
                  style={{
                    fontSize: 8,
                    letterSpacing: '0.3em',
                    color: 'rgba(232,213,176,0.7)',
                  }}
                >
                  {svc.category}
                </div>
                <div
                  style={{
                    fontSize: 32,
                    color: 'rgba(255,255,255,0.06)',
                    lineHeight: 1,
                  }}
                >
                  {svc.num}
                </div>
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: 'white',
                  letterSpacing: '0.06em',
                  marginBottom: 10,
                  lineHeight: 1.2,
                }}
              >
                {svc.title}
              </div>
              <div
                style={{
                  fontSize: 10,
                  lineHeight: 1.8,
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {svc.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <button
            className="glass-mid"
            style={{
              padding: '16px 48px',
              color: 'white',
              fontSize: 11,
              letterSpacing: '0.25em',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              borderRadius: 2,
            }}
          >
            GET PERSONALISED RECOMMENDATION
          </button>
        </motion.div>
      </div>
    </section>
  )
}
