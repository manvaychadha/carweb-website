import { useState } from 'react'
import { motion } from 'motion/react'

const packages = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'QUICK CLARITY',
    price: '₹999',
    period: 'ONE-TIME',
    description: 'A 30-MINUTE CONSULTATION TO CUT THROUGH THE CONFUSION AND POINT YOU IN THE RIGHT DIRECTION.',
    features: [
      '30-MINUTE VIDEO OR CALL CONSULTATION',
      'TOP 2 VEHICLE RECOMMENDATIONS',
      'WHAT TO AVOID FOR YOUR BUDGET',
      'FOLLOW-UP SUMMARY NOTES',
    ],
    cta: 'BOOK STARTER',
    style: 'standard' as const,
    delay: 0,
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    tagline: 'MOST POPULAR',
    price: '₹4,999',
    period: 'ONE-TIME',
    description: 'FULL ADVISORY PACKAGE WITH WRITTEN REPORTS, COMPARISON ANALYSIS, AND NEGOTIATION STRATEGY.',
    features: [
      'FULL CAR RECOMMENDATION REPORT',
      'HEAD-TO-HEAD COMPARISON (2–3 CARS)',
      '5-YEAR OWNERSHIP COST BREAKDOWN',
      'DEALER NEGOTIATION GUIDE',
      'PDI CHECKLIST',
      '7-DAY EMAIL SUPPORT',
    ],
    cta: 'BOOK PREMIUM',
    style: 'accent' as const,
    delay: 0.08,
  },
  {
    id: 'concierge',
    name: 'CONCIERGE',
    tagline: 'HANDS-ON SUPPORT',
    price: '₹14,999–₹24,999',
    period: 'PER PURCHASE',
    description: 'END-TO-END ASSISTANCE FROM SHORTLIST TO DELIVERY. WE HANDLE EVERYTHING SO YOU DON\'T HAVE TO.',
    features: [
      'EVERYTHING IN PREMIUM',
      'DEALER COORDINATION',
      'PHYSICAL PDI SUPPORT (SELECT CITIES)',
      'LOAN & INSURANCE GUIDANCE',
      'DELIVERY DAY ASSISTANCE',
      'POST-PURCHASE FOLLOW-UP',
    ],
    cta: 'ENQUIRE',
    style: 'standard' as const,
    delay: 0.16,
  },
]

export default function Membership() {
  const [ctaHover, setCtaHover] = useState<string | null>(null)

  return (
    <section
      id="pricing"
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginBottom: 64 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
          <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.5)' }}>
            SERVICE PACKAGES
          </span>
        </div>
        <h2
          style={{
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#0c0c0e',
            margin: 0,
          }}
        >
          TRANSPARENT
          <br />
          PRICING.
        </h2>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            color: 'rgba(12,12,14,0.5)',
            marginTop: 20,
            maxWidth: 420,
          }}
        >
          FLAT FEES. NO HIDDEN COMMISSIONS. YOU PAY FOR EXPERT ADVICE — NOTHING ELSE.
        </p>
      </motion.div>

      {/* Package grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          alignItems: 'start',
        }}
      >
        {packages.map((pkg) => (
          <motion.div
            key={pkg.id}
            className={pkg.style === 'accent' ? 'card-accent' : 'card'}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: pkg.delay }}
            style={{ padding: 32 }}
          >
            {pkg.style === 'accent' && (
              <div
                style={{
                  display: 'inline-block',
                  background: 'var(--accent)',
                  color: 'white',
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  padding: '4px 12px',
                  borderRadius: 2,
                  marginBottom: 16,
                }}
              >
                MOST POPULAR
              </div>
            )}

            <div
              style={{
                fontSize: 8,
                letterSpacing: '0.3em',
                color: 'rgba(12,12,14,0.4)',
                marginBottom: 4,
              }}
            >
              {pkg.name}
            </div>
            <div
              style={{
                fontSize: 9,
                letterSpacing: '0.25em',
                color: 'var(--accent)',
                marginBottom: 20,
              }}
            >
              {pkg.tagline}
            </div>

            <div style={{ marginBottom: 4 }}>
              <span
                style={{
                  fontSize: pkg.id === 'concierge' ? 24 : 40,
                  color: '#0c0c0e',
                  fontWeight: 400,
                  letterSpacing: '-0.02em',
                }}
              >
                {pkg.price}
              </span>
            </div>
            <div
              style={{
                fontSize: 8,
                letterSpacing: '0.25em',
                color: 'rgba(12,12,14,0.35)',
                marginBottom: 4,
              }}
            >
              {pkg.period}
            </div>

            <p
              style={{
                fontSize: 10,
                lineHeight: 1.7,
                color: 'rgba(12,12,14,0.55)',
                margin: '16px 0 24px 0',
                letterSpacing: '0.08em',
              }}
            >
              {pkg.description}
            </p>

            <ul style={{ listStyle: 'none', margin: '0 0 28px 0', padding: 0 }}>
              {pkg.features.map((f) => (
                <li
                  key={f}
                  style={{
                    fontSize: 9,
                    letterSpacing: '0.12em',
                    color: 'rgba(12,12,14,0.6)',
                    padding: '7px 0',
                    borderBottom: '1px solid rgba(12,12,14,0.05)',
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                  }}
                >
                  <span style={{ color: 'var(--accent)', fontSize: 10, flexShrink: 0, marginTop: 1 }}>·</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              onMouseEnter={() => setCtaHover(pkg.id)}
              onMouseLeave={() => setCtaHover(null)}
              style={{
                width: '100%',
                background: ctaHover === pkg.id ? '#333' : 'var(--accent)',
                color: 'white',
                padding: 13,
                fontSize: 9,
                letterSpacing: '0.25em',
                border: 'none',
                borderRadius: 2,
                cursor: 'pointer',
                fontFamily: 'inherit',
                textTransform: 'uppercase',
                transition: 'background 0.3s ease',
              }}
            >
              {pkg.cta}
            </button>
          </motion.div>
        ))}
      </div>

      {/* Trust note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        style={{
          textAlign: 'center',
          marginTop: 40,
          fontSize: 9,
          letterSpacing: '0.25em',
          color: 'rgba(12,12,14,0.35)',
        }}
      >
        ALL CONSULTATIONS ARE CONFIDENTIAL · NO DEALER REFERRALS · NO HIDDEN FEES
      </motion.div>
    </section>
  )
}
