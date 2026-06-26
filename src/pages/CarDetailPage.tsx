import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { AnimatePresence, motion } from 'motion/react'
import Footer from '../components/Footer'

interface CarData {
  name: string
  tagline: string
  specs: { category: string; items: { label: string; value: string }[] }[]
  quickSpecs: string[]
}

const carData: Record<string, CarData> = {
  'grand-tourer': {
    name: 'GRAND TOURER',
    tagline: 'THE ART OF THE LONG JOURNEY.',
    quickSpecs: ['V12 · 6.0L', '630 BHP', '0–100 IN 3.7S', 'TOP SPEED 330 KM/H', 'GT CLASS', 'FACTORY ORDER'],
    specs: [
      {
        category: 'POWERTRAIN',
        items: [
          { label: 'ENGINE', value: 'V12 NATURALLY ASPIRATED · 6.0L' },
          { label: 'OUTPUT', value: '630 BHP · 700 NM' },
          { label: 'TRANSMISSION', value: '8-SPEED ZF AUTOMATIC' },
          { label: 'DRIVETRAIN', value: 'REAR-WHEEL DRIVE' },
        ],
      },
      {
        category: 'PERFORMANCE',
        items: [
          { label: '0–100 KM/H', value: '3.7 SECONDS' },
          { label: '0–200 KM/H', value: '9.1 SECONDS' },
          { label: 'TOP SPEED', value: '330 KM/H' },
        ],
      },
      {
        category: 'DIMENSIONS',
        items: [
          { label: 'LENGTH', value: '4,730 MM' },
          { label: 'WIDTH', value: '1,960 MM' },
          { label: 'WHEELBASE', value: '2,870 MM' },
          { label: 'KERB WEIGHT', value: '1,710 KG' },
        ],
      },
      {
        category: 'CHASSIS',
        items: [
          { label: 'BODY', value: 'ALUMINIUM SUPERFORMED' },
          { label: 'SUSPENSION (F)', value: 'DOUBLE WISHBONE · ADAPTIVE DAMPERS' },
          { label: 'SUSPENSION (R)', value: 'MULTI-LINK · ADAPTIVE DAMPERS' },
          { label: 'BRAKES', value: 'CARBON-CERAMIC · 400MM FRONT' },
        ],
      },
      {
        category: 'INTERIOR',
        items: [
          { label: 'SEATING', value: '2+2 · FULL LEATHER' },
          { label: 'INFOTAINMENT', value: '10.25" TOUCHSCREEN · MERIDIAN AUDIO' },
          { label: 'CONNECTIVITY', value: 'APPLE CARPLAY · ANDROID AUTO' },
        ],
      },
    ],
  },
  'sport-coupe': {
    name: 'SPORT COUPÉ',
    tagline: 'PRECISION WITHOUT COMPROMISE.',
    quickSpecs: ['V8 · 4.0L TWIN-TURBO', '510 BHP', '0–100 IN 3.4S', 'TOP SPEED 310 KM/H', 'TRACK FOCUSED', 'FACTORY ORDER'],
    specs: [
      {
        category: 'POWERTRAIN',
        items: [
          { label: 'ENGINE', value: 'V8 TWIN-TURBOCHARGED · 4.0L' },
          { label: 'OUTPUT', value: '510 BHP · 620 NM' },
          { label: 'TRANSMISSION', value: '7-SPEED PDK DUAL-CLUTCH' },
          { label: 'DRIVETRAIN', value: 'REAR-WHEEL DRIVE' },
        ],
      },
      {
        category: 'PERFORMANCE',
        items: [
          { label: '0–100 KM/H', value: '3.4 SECONDS' },
          { label: '0–200 KM/H', value: '8.3 SECONDS' },
          { label: 'TOP SPEED', value: '310 KM/H' },
        ],
      },
      {
        category: 'DIMENSIONS',
        items: [
          { label: 'LENGTH', value: '4,523 MM' },
          { label: 'WIDTH', value: '1,900 MM' },
          { label: 'WHEELBASE', value: '2,457 MM' },
          { label: 'KERB WEIGHT', value: '1,530 KG' },
        ],
      },
      {
        category: 'CHASSIS',
        items: [
          { label: 'BODY', value: 'STEEL/ALUMINIUM COMPOSITE' },
          { label: 'SUSPENSION (F)', value: 'MACPHERSON STRUT · PASM' },
          { label: 'SUSPENSION (R)', value: 'MULTI-LINK · PASM' },
          { label: 'BRAKES', value: 'PCCB · 410MM FRONT' },
        ],
      },
      {
        category: 'INTERIOR',
        items: [
          { label: 'SEATING', value: '2 · SPORT BUCKET SEATS' },
          { label: 'INFOTAINMENT', value: 'PCM · BOSE SURROUND' },
          { label: 'CONNECTIVITY', value: 'APPLE CARPLAY · WIFI' },
        ],
      },
    ],
  },
  'luxury-suv': {
    name: 'LUXURY SUV',
    tagline: 'PRESENCE IN EVERY ENVIRONMENT.',
    quickSpecs: ['V8 · 4.4L TWIN-TURBO', '523 BHP', '0–100 IN 4.3S', 'TOP SPEED 250 KM/H', 'FULL-SIZE SUV', 'FACTORY ORDER'],
    specs: [
      {
        category: 'POWERTRAIN',
        items: [
          { label: 'ENGINE', value: 'V8 TWIN-TURBOCHARGED · 4.4L' },
          { label: 'OUTPUT', value: '523 BHP · 750 NM' },
          { label: 'TRANSMISSION', value: '8-SPEED STEPTRONIC' },
          { label: 'DRIVETRAIN', value: 'ALL-WHEEL DRIVE · XDRIVE' },
        ],
      },
      {
        category: 'PERFORMANCE',
        items: [
          { label: '0–100 KM/H', value: '4.3 SECONDS' },
          { label: 'TOP SPEED', value: '250 KM/H (LIMITED)' },
          { label: 'TORQUE PEAK', value: '1,800 RPM' },
        ],
      },
      {
        category: 'DIMENSIONS',
        items: [
          { label: 'LENGTH', value: '5,170 MM' },
          { label: 'WIDTH', value: '2,000 MM' },
          { label: 'WHEELBASE', value: '3,105 MM' },
          { label: 'KERB WEIGHT', value: '2,320 KG' },
        ],
      },
      {
        category: 'CHASSIS',
        items: [
          { label: 'BODY', value: 'STEEL/ALUMINIUM' },
          { label: 'SUSPENSION', value: 'AIR SUSPENSION · ADAPTIVE M DAMPERS' },
          { label: 'BRAKES', value: 'VENTILATED DISC · 395MM FRONT' },
          { label: 'GROUND CLEARANCE', value: '210 MM (MAX)' },
        ],
      },
      {
        category: 'INTERIOR',
        items: [
          { label: 'SEATING', value: '5 (7 OPTIONAL) · MERINO LEATHER' },
          { label: 'INFOTAINMENT', value: 'iDRIVE 8 · BOWERS & WILKINS' },
          { label: 'REAR ENTERTAINMENT', value: '11.1" REAR SCREENS' },
        ],
      },
    ],
  },
}

const relatedVehicles = [
  { slug: 'grand-tourer', name: 'GRAND TOURER' },
  { slug: 'sport-coupe', name: 'SPORT COUPÉ' },
  { slug: 'luxury-suv', name: 'LUXURY SUV' },
]

export default function CarDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const car = carData[slug ?? '']
  const [openCategory, setOpenCategory] = useState<string | null>('POWERTRAIN')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  if (!car) {
    return (
      <div style={{ padding: '20vh clamp(24px,6vw,96px)', textAlign: 'center' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)' }}>VEHICLE NOT FOUND</p>
        <button onClick={() => navigate('/')} style={{ marginTop: 24, fontSize: 9, letterSpacing: '0.2em', cursor: 'pointer', background: 'none', border: '1px solid rgba(12,12,14,0.15)', padding: '10px 24px', fontFamily: 'inherit', textTransform: 'uppercase' }}>← RETURN HOME</button>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>{car.name} — Private Acquisition | CARWEB.IN</title>
        <meta name="description" content={`${car.tagline} Enquire about private acquisition through CARWEB.IN.`} />
        <meta property="og:title" content={`${car.name} | CARWEB.IN`} />
        <meta property="og:image" content={`/og/collection-${slug}-og.jpg`} />
        <link rel="canonical" href={`https://carweb.in/collection/${slug}`} />
      </Helmet>

      {/* Hero */}
      <div style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        <video
          src={`/videos/collection-${slug}.mp4`}
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)' }} />

        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 'clamp(64px,8vw,100px)' }}>
          <div className="editorial-rule" style={{ color: 'rgba(232,213,176,0.85)', marginBottom: 20 }}>
            <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(232,213,176,0.85)' }}>{car.tagline}</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(56px,10vw,140px)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 0.9,
              margin: '0 0 32px 0',
            }}
          >
            {car.name}
          </motion.h1>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {car.quickSpecs.map((spec) => (
              <span
                key={spec}
                className="glass-mid"
                style={{ fontSize: 8, letterSpacing: '0.25em', color: 'white', padding: '8px 20px', borderRadius: 2 }}
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Specs + enquiry */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          padding: 'clamp(64px,8vw,100px)',
          gap: 64,
          background: 'var(--bg-base)',
          alignItems: 'start',
        }}
      >
        {/* Accordion specs */}
        <div>
          {car.specs.map((cat) => (
            <div key={cat.category} style={{ borderBottom: '1px solid rgba(12,12,14,0.07)' }}>
              <button
                onClick={() => setOpenCategory(openCategory === cat.category ? null : cat.category)}
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: '#0c0c0e',
                  textTransform: 'uppercase',
                }}
              >
                {cat.category}
                <span style={{ fontSize: 16, transition: 'transform 0.3s ease', transform: openCategory === cat.category ? 'rotate(45deg)' : 'none' }}>+</span>
              </button>
              <AnimatePresence>
                {openCategory === cat.category && (
                  <motion.div
                    key={cat.category}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ paddingBottom: 20 }}>
                      {cat.items.map((item) => (
                        <div
                          key={item.label}
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '10px 0',
                            borderBottom: '1px solid rgba(12,12,14,0.04)',
                          }}
                        >
                          <span style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.4)' }}>{item.label}</span>
                          <span style={{ fontSize: 9, letterSpacing: '0.15em', color: '#0c0c0e' }}>{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Enquiry form */}
        <div className="card" style={{ padding: 32, position: 'sticky', top: 100 }}>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px,2.5vw,28px)',
              fontWeight: 300,
              color: '#0c0c0e',
              margin: '0 0 28px 0',
              lineHeight: 1.1,
            }}
          >
            ENQUIRE ABOUT THIS VEHICLE
          </h3>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '32px 0' }}>
              <div style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.5)', marginBottom: 12 }}>ENQUIRY RECEIVED</div>
              <p style={{ fontSize: 10, lineHeight: 1.8, color: 'rgba(12,12,14,0.55)', letterSpacing: '0.1em' }}>
                A CLIENT DIRECTOR WILL BE IN TOUCH WITHIN 24 HOURS.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}
              style={{ display: 'flex', flexDirection: 'column', gap: 16 }}
            >
              {[
                { id: 'name', label: 'YOUR NAME', type: 'text' },
                { id: 'email', label: 'EMAIL ADDRESS', type: 'email' },
              ].map((field) => (
                <div key={field.id}>
                  <label style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', display: 'block', marginBottom: 6 }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={formData[field.id as 'name' | 'email']}
                    onChange={(e) => setFormData((prev) => ({ ...prev, [field.id]: e.target.value }))}
                    style={{
                      width: '100%',
                      background: 'rgba(12,12,14,0.03)',
                      border: '1px solid rgba(12,12,14,0.1)',
                      color: '#0c0c0e',
                      fontSize: 11,
                      letterSpacing: '0.1em',
                      padding: '12px 14px',
                      borderRadius: 2,
                      fontFamily: 'inherit',
                      textTransform: 'uppercase',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)', display: 'block', marginBottom: 6 }}>
                  YOUR BRIEF
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                  style={{
                    width: '100%',
                    background: 'rgba(12,12,14,0.03)',
                    border: '1px solid rgba(12,12,14,0.1)',
                    color: '#0c0c0e',
                    fontSize: 11,
                    letterSpacing: '0.1em',
                    padding: '12px 14px',
                    borderRadius: 2,
                    fontFamily: 'inherit',
                    textTransform: 'uppercase',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <button
                type="submit"
                style={{
                  width: '100%',
                  background: 'var(--accent)',
                  color: 'white',
                  padding: 14,
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  border: 'none',
                  borderRadius: 2,
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  textTransform: 'uppercase',
                }}
              >
                SEND ENQUIRY
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Related vehicles */}
      <div style={{ padding: 'clamp(48px,6vw,80px)', borderTop: '1px solid rgba(12,12,14,0.07)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <div style={{ width: 32, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.4)' }}>RELATED VEHICLES</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
          {relatedVehicles.filter((v) => v.slug !== slug).map((v) => (
            <motion.div
              key={v.slug}
              onClick={() => navigate(`/collection/${v.slug}`)}
              whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.1)' }}
              style={{
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                height: 280,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 28 }}>
                <div style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(232,213,176,0.7)', marginBottom: 8 }}>
                  COLLECTION
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(20px,2.5vw,28px)',
                    fontWeight: 300,
                    color: 'white',
                    marginBottom: 16,
                  }}
                >
                  {v.name}
                </div>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.2em' }}>VIEW →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  )
}
