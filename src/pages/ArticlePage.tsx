import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { articles } from '../data/articles'
import { siteInfo } from '../data/siteInfo'
import Footer from '../components/Footer'
import ArticleCard from '../components/ArticleCard'

const ease = [0.19, 1, 0.22, 1] as [number, number, number, number]
const PAGE = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.4, ease } }

const gradients: Record<string, string> = {
  REVIEWS:  'linear-gradient(135deg, #1a1208 0%, #2a1f0c 50%, #1c1408 100%)',
  ELECTRIC: 'linear-gradient(135deg, #0a1020 0%, #0d1a2e 50%, #081218 100%)',
  DRIVES:   'linear-gradient(135deg, #0e1408 0%, #1a2410 50%, #0c100a 100%)',
  NEWS:     'linear-gradient(135deg, #14100a 0%, #241c10 50%, #100c08 100%)',
  FEATURES: 'linear-gradient(135deg, #100c14 0%, #1c1424 50%, #0e0c12 100%)',
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = articles.find(a => a.slug === slug)
  const related = articles.filter(a => a.slug !== slug).slice(0, 3)

  if (!article) {
    return (
      <motion.div {...PAGE} style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--cream)', gap: 20 }}>
        <div className="gold-tag">404</div>
        <h1 className="heading-sm" style={{ color: 'var(--ink)' }}>Article not found</h1>
        <Link to="/blog" className="btn-outline-dark">← Back to blog</Link>
      </motion.div>
    )
  }

  const paragraphs = article.body ? article.body.split('\n\n').filter(Boolean) : []

  return (
    <motion.div {...PAGE}>
      <Helmet>
        <title>{article.title} — CARWEB.IN</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={`${article.title} — CARWEB.IN`} />
        <link rel="canonical" href={`${siteInfo.seo.siteUrl}/blog/${article.slug}`} />
      </Helmet>

      {/* Hero */}
      <div style={{ height: '65vh', minHeight: 380, background: gradients[article.category] ?? gradients.REVIEWS, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,12,14,0.85) 0%, rgba(12,12,14,0.2) 60%)' }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr min(680px,100%) 1fr', padding: '0 clamp(20px,5vw,80px) clamp(40px,6vw,72px)' }}>
          <div />
          <div>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20 }}>
              <Link to="/blog" className="label-sm" style={{ color: 'var(--chalk-faint)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--chalk-faint)')}>
                ← BLOG
              </Link>
              <span style={{ color: 'var(--chalk-faint)', fontSize: 10 }}>/</span>
              <span className="label-sm" style={{ color: 'var(--gold)' }}>{article.category}</span>
            </div>
            <h1 className="heading-lg" style={{ color: 'var(--chalk)', margin: '0 0 24px' }}>{article.title}</h1>
            <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
              <span className="label-sm" style={{ color: 'var(--chalk-faint)' }}>BY {siteInfo.founder.name.toUpperCase()}</span>
              <span className="label-sm" style={{ color: 'var(--chalk-faint)' }}>{article.date}</span>
              <span className="label-sm" style={{ color: 'var(--gold)' }}>{article.readTime} READ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ background: 'var(--cream)', padding: 'clamp(48px,7vw,88px) clamp(20px,5vw,80px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr min(680px,100%) 1fr' }}>
          <div />
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(16px,1.8vw,20px)', fontStyle: 'italic', color: 'var(--ink-muted)', lineHeight: 1.65, marginBottom: 40, borderLeft: '3px solid var(--gold)', paddingLeft: 24 }}>
              {article.excerpt}
            </p>
            <motion.div
              className="article-body"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.19, 1, 0.22, 1] }}
            >
              {paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="section-sm" style={{ background: 'var(--cream-surface)', borderTop: '1px solid var(--cream-border)' }}>
          <div style={{ maxWidth: 'min(1200px, 100%)', margin: '0 auto' }}>
            <div className="gold-tag" style={{ marginBottom: 32 }}>READ NEXT</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {related.map(a => (
                <ArticleCard key={a.slug} article={a} variant="light" />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </motion.div>
  )
}
