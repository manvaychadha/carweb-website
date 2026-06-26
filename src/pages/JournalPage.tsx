import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { articles } from '../data/articles'
import Footer from '../components/Footer'

const FILTERS = ['ALL', 'ACQUISITION', 'BESPOKE', 'DRIVES', 'PERFORMANCE', 'INDUSTRY']

export default function JournalPage() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const navigate = useNavigate()

  const filtered = activeFilter === 'ALL'
    ? articles
    : articles.filter((a) => a.category === activeFilter)

  const featured = articles[0]
  const grid = articles.slice(1)

  return (
    <>
      <Helmet>
        <title>The Journal — Automotive Intelligence | CARWEB.IN</title>
        <meta name="description" content="Expert editorial on acquisition, bespoke configuration, luxury driving routes and the world's finest automobiles." />
        <meta property="og:title" content="The Journal — Automotive Intelligence | CARWEB.IN" />
        <meta property="og:image" content="/og/journal-og.jpg" />
        <link rel="canonical" href="https://carweb.in/journal" />
      </Helmet>

      {/* Hero strip */}
      <div style={{ height: 280, background: '#0c0c0e', position: 'relative', overflow: 'hidden' }}>
        <span className="section-counter on-dark">01</span>
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
            THE JOURNAL
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            style={{ fontSize: 10, letterSpacing: '0.3em', color: 'rgba(255,255,255,0.4)', marginTop: 16 }}
          >
            DISPATCHES FROM THE ROAD
          </motion.p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Featured article */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', height: 600 }}>
        <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }} onClick={() => navigate(`/journal/${featured.slug}`)}>
          <div
            style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
              backgroundImage: featured.coverImage ? `url(${featured.coverImage})` : undefined,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, padding: 48 }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.2)',
                fontSize: 8,
                letterSpacing: '0.3em',
                color: 'rgba(232,213,176,0.9)',
                padding: '5px 14px',
                borderRadius: 2,
                marginBottom: 16,
              }}
            >
              FEATURED
            </span>
            <div style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(232,213,176,0.7)', marginBottom: 12 }}>
              {featured.category}
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(28px,4vw,56px)',
                fontWeight: 300,
                color: 'white',
                lineHeight: 1.05,
                margin: 0,
                maxWidth: 520,
              }}
            >
              {featured.title}
            </h2>
          </div>
        </div>

        <div
          style={{
            background: 'white',
            padding: 'clamp(48px,6vw,80px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontSize: 9, letterSpacing: '0.25em', color: 'rgba(12,12,14,0.4)', marginBottom: 8 }}>
            {featured.category}
          </div>
          <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.35)', marginBottom: 24 }}>
            {featured.date}
          </div>
          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(20px,2.5vw,32px)',
              lineHeight: 1.25,
              color: '#0c0c0e',
              margin: '0 0 28px 0',
            }}
          >
            {featured.excerpt}
          </p>
          <div style={{ fontSize: 9, letterSpacing: '0.2em', color: 'rgba(12,12,14,0.5)', marginBottom: 24 }}>
            {featured.readTime} READ
          </div>
          <button
            onClick={() => navigate(`/journal/${featured.slug}`)}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              fontSize: 9,
              letterSpacing: '0.22em',
              color: 'var(--accent)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textAlign: 'left',
            }}
          >
            READ THE FULL PIECE →
          </button>
        </div>
      </div>

      {/* Filter bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          background: 'rgba(248,246,242,0.92)',
          backdropFilter: 'blur(24px)',
          borderBottom: '1px solid rgba(12,12,14,0.07)',
          padding: '0 clamp(24px,6vw,96px)',
          height: 52,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            style={{
              background: activeFilter === f ? 'var(--accent)' : 'transparent',
              color: activeFilter === f ? 'white' : 'rgba(12,12,14,0.5)',
              border: activeFilter === f ? 'none' : '1px solid rgba(12,12,14,0.12)',
              borderRadius: 100,
              padding: '6px 18px',
              fontSize: 8,
              letterSpacing: '0.22em',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              transition: 'all 0.2s ease',
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Article grid */}
      <div
        style={{
          padding: 'clamp(48px,6vw,80px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: 2,
        }}
      >
        {(activeFilter === 'ALL' ? grid : filtered).map((article, i) => (
          <motion.div
            key={article.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => navigate(`/journal/${article.slug}`)}
            style={{
              background: 'white',
              border: '1px solid rgba(12,12,14,0.05)',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.4s cubic-bezier(0.19,1,0.22,1), box-shadow 0.4s ease',
            }}
            whileHover={{ y: -4, boxShadow: '0 12px 48px rgba(0,0,0,0.1)' }}
          >
            {/* Thumbnail */}
            <div
              style={{
                height: 220,
                background: `linear-gradient(135deg, #${(i * 17 + 15).toString(16).padStart(2, '0')}${(i * 11 + 10).toString(16).padStart(2, '0')}0f 0%, #2a2a2a 100%)`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: 16, left: 16 }}>
                <span
                  className="glass-mid"
                  style={{
                    fontSize: 8,
                    letterSpacing: '0.25em',
                    color: 'rgba(232,213,176,0.9)',
                    padding: '4px 12px',
                    borderRadius: 2,
                  }}
                >
                  {article.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div style={{ padding: 28 }}>
              <div style={{ fontSize: 8, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.35)', marginBottom: 8 }}>
                {article.date}
              </div>
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(20px,2.5vw,28px)',
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: '#0c0c0e',
                  margin: '0 0 12px 0',
                }}
              >
                {article.title}
              </h3>
              <p
                style={{
                  fontSize: 10,
                  lineHeight: 1.9,
                  color: 'rgba(12,12,14,0.55)',
                  margin: '0 0 20px 0',
                  letterSpacing: '0.08em',
                }}
              >
                {article.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: 8, color: 'rgba(12,12,14,0.35)', letterSpacing: '0.2em' }}>
                  {article.readTime} READ
                </span>
                <span style={{ fontSize: 9, color: 'var(--accent)', letterSpacing: '0.2em' }}>
                  READ →
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </>
  )
}
