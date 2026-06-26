import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { articles } from '../data/articles'
import { siteInfo } from '../data/siteInfo'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import VideoBackground from '../components/VideoBackground'

const ease = [0.19, 1, 0.22, 1] as [number, number, number, number]
const PAGE = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.4, ease } }

const MARQUEE = 'REVIEWS · DRIVES · INDUSTRY NEWS · CONCIERGE · IMPORT ADVISORY · '

const stats = [
  { num: '5', label: 'Years publishing' },
  { num: '100', label: 'Cars covered' },
  { num: '50', label: 'Clients served' },
  { num: '11', label: 'Age at founding' },
]

export default function HomePage() {
  const featured = articles[0]
  const grid = articles.slice(1, 4)

  return (
    <motion.div {...PAGE}>
      <Helmet>
        <title>CARWEB.IN — {siteInfo.tagline}</title>
        <meta name="description" content={siteInfo.description} />
        <link rel="canonical" href={siteInfo.seo.siteUrl} />
      </Helmet>

      {/* ── HERO ── */}
      <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: 'var(--dark)' }}>
        <video src="/videos/hero-bg.mp4" autoPlay loop muted playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,12,14,0.25) 0%, rgba(12,12,14,0.72) 100%)' }} />

        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(32px,6vw,80px)', paddingBottom: 'clamp(72px,10vw,120px)' }}>
          <motion.div className="gold-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15, ease: [0.19, 1, 0.22, 1] }} style={{ marginBottom: 24 }}>
            EST. {siteInfo.founded} · {siteInfo.contact.location}
          </motion.div>

          <motion.h1
            className="heading-xl"
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3, ease: [0.19, 1, 0.22, 1] }}
            style={{ color: 'var(--chalk)', margin: '0 0 36px', maxWidth: '14ch' }}
          >
            {siteInfo.tagline}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.56, ease: [0.19, 1, 0.22, 1] }}
            style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}
          >
            <a href={siteInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.122 1.515 5.861L.057 23.5l5.784-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.661-.516-5.176-1.414l-.37-.22-3.435.895.918-3.35-.241-.385A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
              TALK TO US
            </a>
            <Link to="/blog" className="btn-outline-light">EXPLORE THE BLOG</Link>
          </motion.div>
        </div>

        {/* Marquee strip */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 52, background: 'rgba(12,12,14,0.7)', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
          <div className="marquee-track">
            <span className="marquee-item on-dark">{MARQUEE}</span>
            <span className="marquee-item on-dark">{MARQUEE}</span>
          </div>
        </div>
      </div>

      {/* ── FEATURED ARTICLE ── */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <div className="gold-tag" style={{ marginBottom: 12, color: 'var(--ink-muted)' }}>LATEST</div>
            <h2 className="heading-md" style={{ margin: 0, color: 'var(--ink)' }}>From the blog</h2>
          </div>
          <Link to="/blog" className="label" style={{ color: 'var(--ink-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink-muted)')}>
            ALL ARTICLES →
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
        >
          <Link to={`/blog/${featured.slug}`} style={{ textDecoration: 'none' }}>
            <div
              style={{
                display: 'grid', gridTemplateColumns: '1.4fr 0.6fr',
                height: 480, background: 'var(--dark)', borderRadius: 6, overflow: 'hidden',
                transition: 'transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out)',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 24px 56px rgba(0,0,0,0.18)' }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = '' }}
            >
              <div style={{ padding: 'clamp(32px,4vw,56px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--gold)', display: 'block', marginBottom: 20 }}>{featured.category}</span>
                  <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(22px,3vw,40px)', fontWeight: 600, color: 'var(--chalk)', margin: '0 0 16px', lineHeight: 1.1, letterSpacing: '-0.02em' }}>{featured.title}</h3>
                  <p className="body-text" style={{ color: 'var(--chalk-muted)', margin: 0 }}>{featured.excerpt}</p>
                </div>
                <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
                  <span className="label-sm" style={{ color: 'var(--chalk-faint)' }}>{featured.date}</span>
                  <span className="label-sm" style={{ color: 'var(--chalk-faint)' }}>{featured.readTime} read</span>
                </div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #1a1208 0%, #2a1f0c 50%, #1c1408 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className="stat-number" style={{ color: 'rgba(201,168,76,0.10)', fontSize: 'clamp(80px,14vw,180px)' }}>01</span>
              </div>
            </div>
          </Link>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 20 }}>
          {grid.map((article, i) => (
            <motion.div key={article.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.1 }}>
              <ArticleCard article={article} variant="light" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONCIERGE CTA ── */}
      <section style={{ background: 'var(--dark)', padding: 'clamp(72px,10vw,120px) clamp(24px,6vw,80px)', position: 'relative', overflow: 'hidden' }}>
        <VideoBackground src="/videos/concierge-cta-bg.mp4" overlay={0.55} />
        <div style={{ position: 'relative', zIndex: 10, maxWidth: 680 }}>
          <div className="gold-tag" style={{ marginBottom: 24 }}>PRIVATE CONCIERGE</div>
          <h2 className="heading-lg" style={{ color: 'var(--chalk)', margin: '0 0 20px' }}>
            Can't find the right car?<br />
            <span style={{ color: 'var(--gold)' }}>We'll find it.</span>
          </h2>
          <p className="body-text" style={{ color: 'var(--chalk-muted)', margin: '0 0 36px', maxWidth: 480 }}>
            Importing, sourcing, negotiating, inspecting. We handle every step so you drive the right car.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/concierge" className="btn-gold">START YOUR SEARCH</Link>
            <a href={siteInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-outline-light">WHATSAPP</a>
          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="section" style={{ background: 'var(--dark)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,7vw,100px)', alignItems: 'center' }}>
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}>
            <div className="gold-tag" style={{ marginBottom: 20 }}>THE STORY</div>
            <h2 className="heading-md" style={{ color: 'var(--chalk)', margin: '0 0 20px' }}>
              Founded at eleven.<br />Still obsessed.
            </h2>
            <p className="body-text" style={{ color: 'var(--chalk-muted)', margin: '0 0 28px' }}>
              {siteInfo.founder.shortBio} What started as a passion project became India's most trusted independent automotive voice.
            </p>
            <Link to="/about" className="label" style={{ color: 'var(--gold)', textDecoration: 'none', borderBottom: '1px solid var(--gold-border)', paddingBottom: 3 }}>
              READ OUR STORY →
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.12, ease: [0.19, 1, 0.22, 1] }}>
            <div style={{ background: 'var(--dark-elevated)', borderRadius: 6, padding: 'clamp(28px,4vw,48px)', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(15px,2vw,20px)', fontStyle: 'italic', color: 'var(--chalk-muted)', lineHeight: 1.7, margin: '0 0 24px' }}>
                "We write about cars the way people actually feel about them."
              </p>
              <div className="label-sm" style={{ color: 'var(--gold)', letterSpacing: '0.18em' }}>
                {siteInfo.founder.name.toUpperCase()} · FOUNDER · {siteInfo.contact.location.toUpperCase()}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div style={{ background: 'var(--dark)', borderTop: '1px solid var(--dark-border)', borderBottom: '1px solid var(--dark-border)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{ padding: 'clamp(28px,4vw,48px) clamp(20px,3vw,36px)', borderRight: i < 3 ? '1px solid var(--dark-border)' : 'none' }}>
            <div className="stat-number" style={{ color: 'var(--gold)', lineHeight: 1 }}>{s.num}</div>
            <div className="label-sm" style={{ color: 'var(--chalk-muted)', marginTop: 8 }}>{s.label}</div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </motion.div>
  )
}
