import { Link } from 'react-router-dom'
import type { Article } from '../data/articles'

interface ArticleCardProps {
  article: Article
  variant?: 'light' | 'dark'
}

export default function ArticleCard({ article, variant = 'light' }: ArticleCardProps) {
  const isDark = variant === 'dark'

  const gradients: Record<string, string> = {
    REVIEWS:  'linear-gradient(135deg, #1a1208 0%, #2a1f0c 40%, #1c1408 100%)',
    ELECTRIC: 'linear-gradient(135deg, #0a1020 0%, #0d1a2e 40%, #081218 100%)',
    DRIVES:   'linear-gradient(135deg, #0e1408 0%, #1a2410 40%, #0c100a 100%)',
    NEWS:     'linear-gradient(135deg, #14100a 0%, #241c10 40%, #100c08 100%)',
    FEATURES: 'linear-gradient(135deg, #100c14 0%, #1c1424 40%, #0e0c12 100%)',
  }
  const bg = gradients[article.category] ?? gradients.REVIEWS

  return (
    <Link to={`/blog/${article.slug}`} style={{ textDecoration: 'none' }}>
      <article
        className={isDark ? 'card-dark' : 'card'}
        style={{ height: '100%' }}
      >
        {/* Thumbnail */}
        <div
          style={{
            height: 220,
            background: bg,
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Cover image — sits on top of gradient fallback */}
          {article.coverImage && (
            <img
              src={article.coverImage}
              alt={article.title}
              onError={(e) => { e.currentTarget.style.display = 'none' }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                transition: 'transform 0.6s cubic-bezier(0.19,1,0.22,1)',
              }}
            />
          )}

          {/* Bottom vignette */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 80,
              background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Category pill */}
          <span
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              zIndex: 2,
              background: 'var(--gold)',
              color: 'var(--dark)',
              fontSize: 8,
              fontWeight: 700,
              letterSpacing: '0.18em',
              padding: '4px 10px',
              borderRadius: 2,
              textTransform: 'uppercase',
            }}
          >
            {article.category}
          </span>

          {/* Read time pill */}
          <span
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              zIndex: 2,
              background: 'rgba(0,0,0,0.55)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              color: 'rgba(255,255,255,0.75)',
              fontSize: 8,
              fontWeight: 500,
              letterSpacing: '0.12em',
              padding: '4px 10px',
              borderRadius: 2,
              textTransform: 'uppercase',
            }}
          >
            {article.readTime}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: '20px 20px 24px' }}>
          <p
            style={{
              fontSize: 9,
              fontWeight: 500,
              letterSpacing: '0.14em',
              color: isDark ? 'var(--chalk-faint)' : 'var(--ink-faint)',
              margin: '0 0 8px 0',
              textTransform: 'uppercase',
            }}
          >
            {article.date}
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 16,
              fontWeight: 600,
              letterSpacing: '-0.02em',
              color: isDark ? 'var(--chalk)' : 'var(--ink)',
              margin: '0 0 8px 0',
              lineHeight: 1.3,
            }}
          >
            {article.title}
          </h3>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 13,
              color: isDark ? 'var(--chalk-muted)' : 'var(--ink-muted)',
              lineHeight: 1.65,
              margin: '0 0 16px 0',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {article.excerpt}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(12,12,14,0.08)'}`,
              paddingTop: 12,
            }}
          >
            <span
              style={{
                fontSize: 9,
                letterSpacing: '0.12em',
                color: isDark ? 'var(--chalk-faint)' : 'var(--ink-faint)',
                textTransform: 'uppercase',
              }}
            >
              BY MANVAY CHADHA
            </span>
            <span
              style={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: 'var(--gold)',
                textTransform: 'uppercase',
              }}
            >
              READ →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

