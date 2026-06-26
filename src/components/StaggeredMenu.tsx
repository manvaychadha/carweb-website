import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { siteInfo } from '../data/siteInfo'

interface StaggeredMenuProps {
  isOpen: boolean
  onToggle: () => void
  onNavigate: () => void
}

const navItems = [
  { num: '01', label: 'HOME',      path: '/' },
  { num: '02', label: 'BLOG',      path: '/blog' },
  { num: '03', label: 'CONCIERGE', path: '/concierge' },
  { num: '04', label: 'ABOUT',     path: '/about' },
  { num: '05', label: 'CONTACT',   path: '/contact' },
  { num: '06', label: 'FIND YOUR CAR', path: '/', cta: true },
]

export default function StaggeredMenu({ isOpen, onToggle, onNavigate }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const prelayer1Ref = useRef<HTMLDivElement>(null)
  const prelayer2Ref = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const socialsRef = useRef<HTMLDivElement>(null)
  const menuLabelRef = useRef<HTMLSpanElement>(null)
  const closeLabelRef = useRef<HTMLSpanElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  useEffect(() => {
    if (tlRef.current) {
      tlRef.current.kill()
    }

    const tl = gsap.timeline()
    tlRef.current = tl

    if (isOpen) {
      if (menuLabelRef.current && closeLabelRef.current) {
        tl.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0)
        tl.fromTo(
          closeLabelRef.current,
          { y: '100%' },
          { y: '0%', duration: 0.4, ease: 'power3.inOut' },
          0
        )
      }

      tl.fromTo(
        prelayer1Ref.current,
        { x: '100%' },
        { x: '0%', duration: 0.6, ease: 'power4.out' },
        0
      )
      tl.fromTo(
        prelayer2Ref.current,
        { x: '100%' },
        { x: '0%', duration: 0.6, ease: 'power4.out' },
        0.08
      )
      tl.fromTo(
        panelRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.8, ease: 'power4.out' },
        0.15
      )
      tl.to(prelayer1Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)
      tl.to(prelayer2Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)

      const items = navItemsRef.current.filter(Boolean)
      tl.fromTo(
        items,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: 'power3.out', stagger: 0.06 },
        0.6
      )
      if (socialsRef.current) {
        tl.fromTo(
          socialsRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
          0.75
        )
      }
    } else {
      const items = navItemsRef.current.filter(Boolean)
      tl.to(items, { x: 40, opacity: 0, duration: 0.3, ease: 'power3.in', stagger: 0.04 }, 0)
      if (socialsRef.current) {
        tl.to(socialsRef.current, { opacity: 0, duration: 0.2 }, 0)
      }
      tl.to(panelRef.current, { x: '100%', duration: 0.6, ease: 'power4.in' }, 0.2)

      if (menuLabelRef.current && closeLabelRef.current) {
        tl.to(closeLabelRef.current, { y: '100%', duration: 0.4, ease: 'power3.inOut' }, 0)
        tl.fromTo(
          menuLabelRef.current,
          { y: '-100%' },
          { y: '0%', duration: 0.4, ease: 'power3.inOut' },
          0
        )
      }
    }
  }, [isOpen])

  return (
    <div className="staggered-menu">
      <button
        className={`menu-toggle${isOpen ? ' is-open' : ''}`}
        onClick={onToggle}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="menu-toggle-label">
          <span ref={menuLabelRef} style={{ top: 0 }}>MENU</span>
          <span ref={closeLabelRef} style={{ top: 0, transform: 'translateY(100%)' }}>CLOSE</span>
        </div>
        <span className="menu-toggle-icon">+</span>
      </button>

      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      <div ref={panelRef} className="menu-panel">
        <nav>
          <ul className="menu-nav">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <Link
                  ref={(el) => { navItemsRef.current[i] = el as HTMLAnchorElement }}
                  to={item.path}
                  onClick={onNavigate}
                  className={item.cta ? 'menu-nav-cta' : undefined}
                >
                  <span
                    style={{
                      fontSize: 'clamp(0.5rem, 1vw, 0.65rem)',
                      letterSpacing: '0.25em',
                      color: item.cta ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.2)',
                      minWidth: '2ch',
                    }}
                  >
                    {item.num}
                  </span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div ref={socialsRef} className="menu-socials">
          <span className="menu-socials-title">CONTACT</span>
          <div style={{ marginBottom: 16 }}>
            <a
              href={siteInfo.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                marginBottom: 6,
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
            >
              {siteInfo.contact.phone}
            </a>
            <a
              href={`mailto:${siteInfo.contact.email}`}
              style={{
                display: 'block',
                fontSize: '0.7rem',
                letterSpacing: '0.2em',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 0.3s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#c9a84c' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)' }}
            >
              {siteInfo.contact.email}
            </a>
          </div>
          <div className="menu-socials-links">
            <a
              href={siteInfo.social.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: '0.55rem',
              letterSpacing: '0.3em',
              color: 'rgba(255,255,255,0.2)',
            }}
          >
            EST. {siteInfo.founded}
          </div>
        </div>
      </div>
    </div>
  )
}
