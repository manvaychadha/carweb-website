import { useEffect, useRef, useState } from 'react'

interface HeaderProps {
  menuOpen: boolean
  onConsultationOpen: () => void
}

const CarIcon = ({ stroke = '#1a1a1a' }: { stroke?: string }) => (
  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="5.5" cy="14.5" rx="2.2" ry="2.2" stroke={stroke} strokeWidth="1.5" fill="none" />
    <ellipse cx="14.5" cy="14.5" rx="2.2" ry="2.2" stroke={stroke} strokeWidth="1.5" fill="none" />
    <path d="M3.3 14.5 H1.5 V11 L4 7.5 H12 L16.5 10 H18.5 V14.5 H16.7" stroke={stroke} strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round" />
    <path d="M7.7 14.5 H12.3" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const navLinks = [
  { label: 'SERVICES', href: '#services' },
  { label: 'HOW IT WORKS', href: '#how-it-works' },
  { label: 'PRICING', href: '#pricing' },
  { label: 'ABOUT', href: '#about' },
]

export default function Header({ menuOpen, onConsultationOpen }: HeaderProps) {
  const pillRef = useRef<HTMLDivElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [ctaHover, setCtaHover] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      ref={pillRef}
      className={`navbar-pill${scrolled ? ' scrolled' : ''}`}
    >
      {/* Logo */}
      <div style={{
        borderRight: '1px solid rgba(12,12,14,0.08)',
        padding: '0 20px 0 14px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexShrink: 0,
      }}>
        <CarIcon />
        <span style={{ fontSize: 15, letterSpacing: '0.24em', color: '#0c0c0e' }}>
          CARWEB.IN
        </span>
      </div>

      {/* Nav links */}
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          style={{
            padding: '0 16px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            fontSize: '10px',
            letterSpacing: '0.18em',
            color: 'rgba(12,12,14,0.55)',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#0c0c0e' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(12,12,14,0.55)' }}
        >
          {link.label}
        </a>
      ))}

      {/* Book Consultation CTA */}
      <div style={{ padding: '0 6px', flexShrink: 0 }}>
        <button
          onClick={onConsultationOpen}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          style={{
            background: ctaHover ? '#333333' : '#1a1a1a',
            borderRadius: '100px',
            padding: '9px 22px',
            fontSize: '10px',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'inherit',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            transform: menuOpen ? 'translateX(calc(-1 * clamp(280px, 40vw, 440px)))' : 'none',
            transition: 'background 0.3s ease, transform 0.3s ease',
            whiteSpace: 'nowrap',
          }}
        >
          BOOK CONSULTATION
        </button>
      </div>
    </div>
  )
}
