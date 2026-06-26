import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import Footer from '../components/Footer'

const drives = [
  {
    slug: 'french-riviera',
    region: 'FRANCE',
    title: 'FRENCH RIVIERA',
    desc: 'THE CORNICHE INFÉRIEURE AT DAWN. THE MOST CIVILISED DRIVING ROAD IN THE WORLD.',
    duration: '3 DAYS',
    season: 'APR – OCT',
    tall: true,
  },
  {
    slug: 'swiss-alps',
    region: 'SWITZERLAND',
    title: 'THREE-PASS ROUTE',
    desc: "FURKA, GRIMSEL, AND SUSTEN. SWITZERLAND'S FINEST IN A SINGLE DAY.",
    duration: '2 DAYS',
    season: 'JUN – SEP',
    tall: false,
  },
  {
    slug: 'cotswolds',
    region: 'ENGLAND',
    title: 'THE COTSWOLDS',
    desc: 'STONE VILLAGES, EMPTY LANES, AND A PACE THAT REDEFINES THE CONCEPT OF A DRIVE.',
    duration: '2 DAYS',
    season: 'MAR – NOV',
    tall: false,
  },
  {
    slug: 'nc500',
    region: 'SCOTLAND',
    title: 'NC500',
    desc: "FIVE HUNDRED MILES OF HIGHLAND ROAD THAT CHANGES EVERYTHING YOU THOUGHT YOU KNEW ABOUT DRIVING.",
    duration: '5 DAYS',
    season: 'MAY – SEP',
    tall: true,
  },
  {
    slug: 'northern-spain',
    region: 'SPAIN',
    title: 'NORTHERN SPAIN',
    desc: "THE BASQUE COAST TO THE PYRENEES. FOOD, PASSES, AND EMPTY ROADS.",
    duration: '4 DAYS',
    season: 'APR – OCT',
    tall: false,
  },
  {
    slug: 'pacific-coast',
    region: 'USA',
    title: 'PACIFIC COAST HIGHWAY',
    desc: "BIG SUR TO MALIBU. THE ORIGINAL GRAND TOURER'S ROAD.",
    duration: '3 DAYS',
    season: 'MAY – OCT',
    tall: false,
  },
]

const MARQUEE_TEXT = 'FRENCH RIVIERA · SWISS ALPS · PACIFIC COAST · COTSWOLDS · NORTHERN SPAIN · NC500 · '

export default function DrivesIndexPage() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Curated Driving Routes — Riviera, Alps, Highlands | CARWEB.IN</title>
        <meta name="description" content="Six of the world's most extraordinary driving roads, curated for private clients. From the Côte d'Azur to the Scottish NC500." />
        <meta property="og:title" content="Curated Driving Routes | CARWEB.IN" />
        <meta property="og:image" content="/og/drives-og.jpg" />
        <link rel="canonical" href="https://carweb.in/drives" />
      </Helmet>

      {/* Hero */}
      <div style={{ height: '90vh', position: 'relative', overflow: 'hidden' }}>
        <video
          src="/videos/experiences-bg.mp4"
          autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)' }} />
        <span className="section-counter on-dark">03</span>

        <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 'clamp(64px,8vw,100px)' }}>
          <div className="editorial-rule" style={{ color: 'rgba(232,213,176,0.85)', marginBottom: 20 }}>
            <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(232,213,176,0.85)' }}>CURATED DRIVES</span>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(64px,10vw,140px)',
              fontWeight: 300,
              color: 'white',
              lineHeight: 0.9,
              margin: '0 0 24px 0',
            }}
            dangerouslySetInnerHTML={{ __html: "THE WORLD'S<br/>FINEST ROADS." }}
          />
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.9, maxWidth: 420, letterSpacing: '0.12em' }}>
            SIX ROUTES. SELECTED FOR THEIR CAPACITY TO TRANSFORM. AVAILABLE TO PRIVATE CLIENTS WITH FULL VEHICLE AND LOGISTICS SUPPORT.
          </p>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{ height: 80, background: '#0c0c0e', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div className="marquee-track">
          <span className="marquee-item on-dark">{MARQUEE_TEXT}</span>
          <span className="marquee-item on-dark">{MARQUEE_TEXT}</span>
        </div>
      </div>

      {/* Drives masonry */}
      <div
        style={{
          padding: 'clamp(48px,6vw,80px) 0',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 2,
        }}
      >
        {drives.map((drive, i) => (
          <motion.div
            key={drive.slug}
            onClick={() => navigate(`/drives/${drive.slug}`)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              minHeight: drive.tall ? 600 : 380,
              gridRow: drive.tall ? 'span 2' : undefined,
              background: `linear-gradient(135deg, #0f0f0f 0%, #${(i * 13 + 20).toString(16).padStart(2, '0')}${(i * 8 + 22).toString(16).padStart(2, '0')}${(i * 5 + 22).toString(16).padStart(2, '0')} 100%)`,
              cursor: 'pointer',
            }}
            whileHover={{ scale: 1.01 }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 32 }}>
              <div style={{ fontSize: 8, letterSpacing: '0.35em', color: 'rgba(232,213,176,0.8)', marginBottom: 8 }}>
                {drive.region}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(22px,3vw,36px)',
                  fontWeight: 300,
                  color: 'white',
                  lineHeight: 1.0,
                  margin: '0 0 12px 0',
                }}
              >
                {drive.title}
              </h3>
              <p style={{ fontSize: 10, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', margin: '0 0 16px 0', letterSpacing: '0.08em', maxWidth: 260 }}>
                {drive.desc}
              </p>
              <div style={{ display: 'flex', gap: 20, marginBottom: 16 }}>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>
                  {drive.duration}
                </span>
                <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em' }}>
                  {drive.season}
                </span>
              </div>
              <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.2em', transition: 'color 0.2s ease' }}>
                REQUEST ROUTE →
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </>
  )
}
