import { useState } from 'react'

const CarIconWhite = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="5.5" cy="14.5" rx="2.2" ry="2.2" stroke="white" strokeWidth="1.5" fill="none" />
    <ellipse cx="14.5" cy="14.5" rx="2.2" ry="2.2" stroke="white" strokeWidth="1.5" fill="none" />
    <path d="M3.3 14.5 H1.5 V11 L4 7.5 H12 L16.5 10 H18.5 V14.5 H16.7" stroke="white" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M7.7 14.5 H12.3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const navLinks = ['SERVICES', 'HOW IT WORKS', 'PRICING', 'ABOUT', 'BLOG']
const serviceLinks = [
  'CAR RECOMMENDATIONS',
  'VEHICLE COMPARISON',
  'NEGOTIATION SUPPORT',
  'USED CAR SOURCING',
  'NRI BUYING SUPPORT',
  'CORPORATE FLEET',
]

const colHeaderStyle: React.CSSProperties = {
  fontSize: 8,
  letterSpacing: '0.35em',
  color: 'rgba(232,213,176,0.7)',
  marginBottom: 20,
  display: 'block',
}

const linkStyle: React.CSSProperties = {
  fontSize: 9,
  letterSpacing: '0.2em',
  color: 'rgba(255,255,255,0.4)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  display: 'block',
}

export default function Footer() {
  const [ctaHover, setCtaHover] = useState(false)

  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Footer CTA banner */}
      <div
        style={{
          backgroundColor: '#0c0c0e',
          padding: 'clamp(64px,8vw,100px) clamp(24px,6vw,96px)',
          textAlign: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div
          style={{
            fontSize: 9,
            letterSpacing: '0.35em',
            color: 'rgba(232,213,176,0.7)',
            marginBottom: 24,
          }}
        >
          STILL UNSURE WHICH CAR TO BUY?
        </div>
        <h2
          style={{
            fontSize: 'clamp(32px,5vw,72px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: 'white',
            margin: '0 0 32px 0',
          }}
        >
          BOOK A PRIVATE
          <br />
          <em>CONSULTATION WITH</em>
          <br />
          CARWEB TODAY.
        </h2>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.18em',
            color: 'rgba(255,255,255,0.45)',
            maxWidth: 420,
            margin: '0 auto 40px',
            lineHeight: 1.9,
          }}
        >
          INDIA'S INDEPENDENT CAR BUYING CONSULTANCY. FLAT FEE. NO COMMISSIONS.
          STARTING AT ₹999.
        </p>
        <button
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{
            padding: '16px 48px',
            background: ctaHover ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: 2,
            backdropFilter: 'blur(8px)',
            color: 'white',
            fontSize: 11,
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            fontFamily: 'inherit',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
          }}
        >
          SCHEDULE CONSULTATION
        </button>
      </div>

      {/* Footer links */}
      <div
        style={{
          backgroundColor: '#080808',
          padding: 'clamp(48px,6vw,80px) clamp(24px,6vw,96px)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr 1fr',
            gap: 80,
          }}
        >
          {/* Col 1 — logo + tagline */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <CarIconWhite />
              <span style={{ fontSize: 18, letterSpacing: '0.24em', color: 'white' }}>
                CARWEB.IN
              </span>
            </div>
            <p
              style={{
                fontSize: 9,
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.35)',
                marginTop: 16,
                margin: '16px 0 0 0',
                maxWidth: 220,
                lineHeight: 1.9,
              }}
            >
              INDIA'S INDEPENDENT CAR BUYING CONSULTANCY. WE HELP BUYERS CHOOSE THE RIGHT CAR,
              NEGOTIATE BETTER DEALS, AND AVOID EXPENSIVE MISTAKES.
            </p>
          </div>

          {/* Col 2 — navigation */}
          <div>
            <span style={colHeaderStyle}>NAVIGATE</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={linkStyle}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3 — services */}
          <div>
            <span style={colHeaderStyle}>SERVICES</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {serviceLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={linkStyle}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)' }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div
          style={{
            marginTop: 56,
            paddingTop: 24,
            borderTop: '1px solid rgba(255,255,255,0.06)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 12,
          }}
        >
          <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.15em' }}>
            © 2025 CARWEB.IN — INDIA'S INDEPENDENT CAR BUYING CONSULTANCY. ALL RIGHTS RESERVED.
          </span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['PRIVACY POLICY', 'TERMS', 'CONTACT'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontSize: 8,
                  color: 'rgba(255,255,255,0.22)',
                  textDecoration: 'none',
                  letterSpacing: '0.15em',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.22)' }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
