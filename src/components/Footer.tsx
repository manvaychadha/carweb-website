import { useState } from 'react'
import { Link } from 'react-router-dom'
import { siteInfo } from '../data/siteInfo'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subbed, setSubbed] = useState(false)

  function handleNewsletter(e: React.FormEvent) {
    e.preventDefault()
    setSubbed(true)
  }

  return (
    <footer style={{ background: 'var(--dark)' }}>
      {/* CTA band */}
      <div
        style={{
          borderTop: '1px solid var(--gold-border)',
          borderBottom: '1px solid var(--dark-border)',
          padding: 'clamp(48px,7vw,88px) clamp(24px,6vw,80px)',
          display: 'grid',
          gridTemplateColumns: '1fr auto',
          alignItems: 'center',
          gap: 40,
        }}
      >
        <div>
          <div className="gold-tag" style={{ marginBottom: 16 }}>PRIVATE CONCIERGE</div>
          <h2
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(24px,3.5vw,48px)',
              fontWeight: 600,
              color: 'var(--chalk)',
              margin: 0,
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            Know what car you want?
            <br />
            <span style={{ color: 'var(--gold)' }}>Let's find it.</span>
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, minWidth: 200 }}>
          <a
            href={siteInfo.contact.whatsappLink}
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.122 1.515 5.861L.057 23.5l5.784-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.661-.516-5.176-1.414l-.37-.22-3.435.895.918-3.35-.241-.385A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
            WHATSAPP US
          </a>
          <Link to="/concierge" className="btn-outline-light" style={{ justifyContent: 'center' }}>
            START ENQUIRY
          </Link>
        </div>
      </div>

      {/* Main footer grid */}
      <div
        style={{
          padding: 'clamp(56px,7vw,88px) clamp(24px,6vw,80px)',
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1.2fr',
          gap: 'clamp(32px,5vw,64px)',
          borderBottom: '1px solid var(--dark-border)',
        }}
      >
        {/* Col 1 — brand */}
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 16, fontWeight: 700, letterSpacing: '0.12em', color: 'var(--chalk)' }}>
              CARWEB<span style={{ color: 'var(--gold)' }}>.IN</span>
            </span>
          </Link>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--chalk-muted)', lineHeight: 1.8, margin: '16px 0 20px', maxWidth: 260 }}>
            {siteInfo.description}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <a href={`mailto:${siteInfo.contact.email}`} style={{ fontSize: 11, color: 'var(--chalk-faint)', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--chalk-faint)')}>
              {siteInfo.contact.email}
            </a>
            <a href={siteInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: 11, color: 'var(--chalk-faint)', textDecoration: 'none', letterSpacing: '0.06em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#25D366')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--chalk-faint)')}>
              {siteInfo.contact.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Col 2 — Navigate */}
        <div>
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--gold)', display: 'block', marginBottom: 20 }}>NAVIGATE</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {siteInfo.nav.map(item => (
              <Link key={item.path} to={item.path}
                style={{ fontSize: 12, color: 'var(--chalk-muted)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--chalk)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--chalk-muted)')}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 3 — Categories */}
        <div>
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--gold)', display: 'block', marginBottom: 20 }}>CATEGORIES</span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['REVIEWS', 'NEWS', 'DRIVES', 'ELECTRIC', 'FEATURES'].map(cat => (
              <Link key={cat} to={`/blog?category=${cat}`}
                style={{ fontSize: 12, color: 'var(--chalk-muted)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--chalk)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--chalk-muted)')}>
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Col 4 — Newsletter */}
        <div>
          <span style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', color: 'var(--gold)', display: 'block', marginBottom: 20 }}>NEWSLETTER</span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--chalk-muted)', lineHeight: 1.7, margin: '0 0 16px' }}>
            Weekly dispatches on the finest cars in India.
          </p>
          {subbed ? (
            <p style={{ fontSize: 12, color: 'var(--gold)', letterSpacing: '0.06em' }}>You're in. ✓</p>
          ) : (
            <form onSubmit={handleNewsletter} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--dark-border)',
                  borderRadius: 4,
                  padding: '10px 14px',
                  color: 'var(--chalk)',
                  fontFamily: 'var(--font-body)',
                  fontSize: 13,
                  outline: 'none',
                }}
                onFocus={e => (e.currentTarget.style.borderColor = 'var(--gold-border)')}
                onBlur={e => (e.currentTarget.style.borderColor = 'var(--dark-border)')}
              />
              <button type="submit" className="btn-gold" style={{ justifyContent: 'center' }}>
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          padding: '20px clamp(24px,6vw,80px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <span style={{ fontSize: 10, color: 'var(--chalk-faint)', letterSpacing: '0.08em' }}>
          © {new Date().getFullYear()} carweb.in — {siteInfo.founder.name}. All rights reserved.
        </span>
        <div style={{ display: 'flex', gap: 20 }}>
          {['Privacy', 'Terms', 'Contact'].map(item => (
            <Link key={item} to={item === 'Contact' ? '/contact' : '#'}
              style={{ fontSize: 10, color: 'var(--chalk-faint)', textDecoration: 'none', letterSpacing: '0.08em', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--chalk-muted)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--chalk-faint)')}>
              {item}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
