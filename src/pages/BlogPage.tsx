import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { articles } from '../data/articles'
import { siteInfo } from '../data/siteInfo'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'
import VideoBackground from '../components/VideoBackground'

const ease = [0.19, 1, 0.22, 1] as [number, number, number, number]
const PAGE = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.4, ease } }

const categories = ['ALL', 'REVIEWS', 'DRIVES', 'ELECTRIC', 'NEWS', 'FEATURES']

export default function BlogPage() {
  const [active, setActive] = useState('ALL')
  const filtered = active === 'ALL' ? articles : articles.filter(a => a.category === active)

  return (
    <motion.div {...PAGE}>
      <Helmet>
        <title>Blog — CARWEB.IN</title>
        <meta name="description" content="In-depth car reviews, road trip diaries, buying guides and automotive news from India's most passionate car blog." />
        <link rel="canonical" href={`${siteInfo.seo.siteUrl}/blog`} />
      </Helmet>

      {/* Hero */}
      <div style={{ height: 320, background: 'var(--dark)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
        <VideoBackground src="/videos/blog-hero-bg.mp4" overlay={0.55} />
        <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(32px,6vw,80px)', paddingBottom: 'clamp(36px,5vw,56px)' }}>
          <div className="gold-tag" style={{ marginBottom: 16 }}>THE BLOG</div>
          <h1 className="heading-lg" style={{ color: 'var(--chalk)', margin: 0 }}>
            Every car.<br />Every road. Every opinion.
          </h1>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ position: 'sticky', top: 68, zIndex: 50, background: 'var(--cream)', borderBottom: '1px solid var(--cream-border)', padding: '14px clamp(20px,5vw,80px)', display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="label"
            style={{
              background: active === cat ? 'var(--dark)' : 'transparent',
              color: active === cat ? 'var(--chalk)' : 'var(--ink-muted)',
              border: `1.5px solid ${active === cat ? 'var(--dark)' : 'var(--cream-border)'}`,
              borderRadius: 4,
              padding: '7px 16px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={e => { if (active !== cat) { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--ink)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink)' } }}
            onMouseLeave={e => { if (active !== cat) { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--cream-border)'; (e.currentTarget as HTMLButtonElement).style.color = 'var(--ink-muted)' } }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Articles grid */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
          {filtered.map((article, i) => (
            <motion.div key={article.slug} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.06 }}>
              <ArticleCard article={article} variant="light" />
            </motion.div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <p className="body-text" style={{ color: 'var(--ink-muted)' }}>No articles in this category yet.</p>
          </div>
        )}
      </section>

      <Footer />
    </motion.div>
  )
}
