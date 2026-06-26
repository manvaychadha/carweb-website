import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import Footer from '../components/Footer'

const services = [
  {
    slug: 'acquisition',
    num: '01',
    title: 'PRIVATE ACQUISITION',
    category: 'SERVICE ONE',
    desc: 'GLOBAL SOURCING OF RARE AND SPECIFICATION-SENSITIVE VEHICLES. WE ACCESS THE PRIVATE MARKET AND FACTORY ALLOCATION THAT NEVER REACHES THE PUBLIC.',
    dark: true,
  },
  {
    slug: 'bespoke',
    num: '02',
    title: 'BESPOKE CONFIGURATION',
    category: 'SERVICE TWO',
    desc: 'FACTORY-DIRECT SPECIFICATION SESSIONS ACROSS TWELVE MARQUES. FROM LEATHER SELECTION TO BESPOKE PAINT, EVERY DETAIL CONSIDERED AND CONFIRMED.',
    dark: false,
  },
  {
    slug: 'fleet-management',
    num: '03',
    title: 'FLEET MANAGEMENT',
    category: 'SERVICE THREE',
    desc: 'END-TO-END MANAGEMENT FOR PRIVATE AND CORPORATE FLEETS. STORAGE, MAINTENANCE SCHEDULING, CHAUFFEUR COORDINATION, AND INSURANCE MANAGEMENT.',
    dark: true,
  },
  {
    slug: 'concierge',
    num: '04',
    title: 'CONCIERGE',
    category: 'SERVICE FOUR',
    desc: 'THE FULL CARWEB.IN EXPERIENCE. A DEDICATED CLIENT DIRECTOR FOR EVERY BRIEF — FROM INITIAL CONVERSATION TO DELIVERY AND BEYOND.',
    dark: false,
  },
]

const stats = [
  { num: '3,200+', label: 'CLIENTS' },
  { num: '40', label: 'COUNTRIES' },
  { num: '20', label: 'YEARS' },
  { num: '100%', label: 'DISCRETION' },
]

const steps = [
  { num: '01', title: 'THE BRIEF', desc: 'A SINGLE CONVERSATION TO UNDERSTAND YOUR REQUIREMENTS, TIMELINE, AND PARAMETERS. NO FORMS. NO PROCESS.' },
  { num: '02', title: 'THE SEARCH', desc: 'WE ACCESS THE PRIVATE MARKET, FACTORY ALLOCATION, AND OUR GLOBAL NETWORK TO BUILD YOUR SHORTLIST.' },
  { num: '03', title: 'THE SPECIFICATION', desc: 'EVERY DETAIL REVIEWED, VERIFIED, AND CONFIRMED BEFORE PRESENTATION. YOU SEE ONLY THE RIGHT OPTIONS.' },
  { num: '04', title: 'THE ACQUISITION', desc: 'NEGOTIATION, LOGISTICS, AND DELIVERY MANAGED IN FULL. YOUR INVOLVEMENT IS AS LIGHT OR AS DEEP AS YOU PREFER.' },
]

export default function ServicesPage() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Private Automotive Services — Acquisition, Bespoke, Concierge | CARWEB.IN</title>
        <meta name="description" content="From global vehicle sourcing to factory-order bespoke configuration and full fleet management. CARWEB.IN handles every detail." />
        <meta property="og:title" content="Private Automotive Services | CARWEB.IN" />
        <meta property="og:image" content="/og/services-og.jpg" />
        <link rel="canonical" href="https://carweb.in/services" />
      </Helmet>

      {/* Hero */}
      <div style={{ height: 320, background: '#0c0c0e', position: 'relative', overflow: 'hidden' }}>
        <span className="section-counter on-dark">02</span>
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '0 clamp(24px,6vw,96px)',
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(48px,8vw,120px)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 0.9,
              margin: 0,
            }}
          >
            OUR SERVICES
          </motion.h1>
          <p style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.35)', marginTop: 20 }}>
            PRECISION DELIVERED. EVERY TIME.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
        {services.map((svc, i) => (
          <motion.div
            key={svc.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: 480,
              position: 'relative',
              overflow: 'hidden',
              background: svc.dark
                ? 'linear-gradient(135deg, #0f0f0f 0%, #1c1c1c 100%)'
                : 'rgba(248,246,242,1)',
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.005 }}
            onClick={() => navigate(`/services/${svc.slug}`)}
          >
            {/* Decorative number */}
            <span
              style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: 200,
                position: 'absolute',
                top: -20,
                right: -20,
                lineHeight: 1,
                pointerEvents: 'none',
                userSelect: 'none',
                color: svc.dark ? 'rgba(255,255,255,0.04)' : 'rgba(12,12,14,0.04)',
              }}
            >
              {svc.num}
            </span>

            {svc.dark && (
              <div style={{ position: 'absolute', inset: 0, border: '1px solid rgba(255,255,255,0)', transition: 'border-color 0.3s ease' }} />
            )}

            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 48 }}>
              <div
                style={{
                  fontSize: 8,
                  letterSpacing: '0.3em',
                  color: svc.dark ? 'rgba(232,213,176,0.7)' : 'rgba(12,12,14,0.4)',
                  marginBottom: 12,
                }}
              >
                {svc.category}
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(32px,4vw,56px)',
                  fontWeight: 300,
                  color: svc.dark ? 'white' : '#0c0c0e',
                  lineHeight: 1.0,
                  margin: '0 0 16px 0',
                }}
              >
                {svc.title}
              </h2>
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 1.9,
                  letterSpacing: '0.1em',
                  color: svc.dark ? 'rgba(255,255,255,0.55)' : 'rgba(12,12,14,0.6)',
                  maxWidth: 340,
                  margin: '0 0 24px 0',
                }}
              >
                {svc.desc}
              </p>
              <span
                style={{
                  display: 'inline-block',
                  background: svc.dark ? 'rgba(255,255,255,0.1)' : 'var(--accent)',
                  backdropFilter: svc.dark ? 'blur(12px)' : undefined,
                  border: svc.dark ? '1px solid rgba(255,255,255,0.15)' : 'none',
                  borderRadius: 2,
                  padding: '10px 24px',
                  fontSize: 9,
                  letterSpacing: '0.2em',
                  color: 'white',
                }}
              >
                EXPLORE →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stat bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          padding: 'clamp(48px,6vw,80px)',
          borderTop: '1px solid rgba(12,12,14,0.07)',
          borderBottom: '1px solid rgba(12,12,14,0.07)',
          gap: 32,
        }}
      >
        {stats.map((s) => (
          <div key={s.label} className="stat-block">
            <span className="stat-block__number">{s.num}</span>
            <span className="stat-block__label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Process section */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: 'clamp(48px,6vw,80px)' }}>
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px,6vw,80px)',
            fontWeight: 300,
            color: '#0c0c0e',
            lineHeight: 0.95,
            margin: '0 0 64px 0',
          }}
        >
          HOW IT WORKS.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {steps.map((step) => (
            <div key={step.num}>
              <div
                style={{
                  fontFamily: 'var(--font-condensed)',
                  fontSize: 64,
                  color: 'var(--accent)',
                  lineHeight: 0.9,
                  marginBottom: 16,
                  letterSpacing: '0.05em',
                }}
              >
                {step.num}
              </div>
              <div style={{ fontSize: 11, letterSpacing: '0.15em', color: '#0c0c0e', marginBottom: 12 }}>
                {step.title}
              </div>
              <p style={{ fontSize: 10, lineHeight: 1.8, color: 'rgba(12,12,14,0.55)', margin: 0, letterSpacing: '0.08em' }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
