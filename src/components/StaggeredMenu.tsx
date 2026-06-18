import { useEffect, useRef } from 'react'
import gsap from 'gsap'

interface StaggeredMenuProps {
  isOpen: boolean
  onToggle: () => void
  onConsultationOpen: () => void
}

export default function StaggeredMenu({ isOpen, onToggle, onConsultationOpen }: StaggeredMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const prelayer1Ref = useRef<HTMLDivElement>(null)
  const prelayer2Ref = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const socialsRef = useRef<HTMLDivElement>(null)
  const menuLabelRef = useRef<HTMLSpanElement>(null)
  const closeLabelRef = useRef<HTMLSpanElement>(null)
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  const navItems = [
    { label: 'HOME', handler: () => { onToggle() } },
    { label: 'SERVICES', handler: () => { onToggle() } },
    { label: 'HOW IT WORKS', handler: () => { onToggle() } },
    { label: 'PRICING', handler: () => { onToggle() } },
    { label: 'ABOUT', handler: () => { onToggle() } },
    { label: 'BOOK CONSULTATION', handler: () => { onConsultationOpen(); onToggle() } },
  ]

  useEffect(() => {
    if (tlRef.current) {
      tlRef.current.kill()
    }

    const tl = gsap.timeline()
    tlRef.current = tl

    if (isOpen) {
      // Cycle label: MENU → CLOSE
      if (menuLabelRef.current && closeLabelRef.current) {
        tl.to(menuLabelRef.current, { y: '-100%', duration: 0.4, ease: 'power3.inOut' }, 0)
        tl.fromTo(
          closeLabelRef.current,
          { y: '100%' },
          { y: '0%', duration: 0.4, ease: 'power3.inOut' },
          0
        )
      }

      // Prelayer 1 slides in
      tl.fromTo(
        prelayer1Ref.current,
        { x: '100%' },
        { x: '0%', duration: 0.6, ease: 'power4.out' },
        0
      )
      // Prelayer 2 slides in
      tl.fromTo(
        prelayer2Ref.current,
        { x: '100%' },
        { x: '0%', duration: 0.6, ease: 'power4.out' },
        0.08
      )
      // Panel slides in
      tl.fromTo(
        panelRef.current,
        { x: '100%' },
        { x: '0%', duration: 0.8, ease: 'power4.out' },
        0.15
      )
      // Prelayers slide out (wipe effect)
      tl.to(prelayer1Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)
      tl.to(prelayer2Ref.current, { x: '-100%', duration: 0.5, ease: 'power3.in' }, 0.5)

      // Nav items stagger in
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
      // Close sequence
      const items = navItemsRef.current.filter(Boolean)
      tl.to(items, { x: 40, opacity: 0, duration: 0.3, ease: 'power3.in', stagger: 0.04 }, 0)
      if (socialsRef.current) {
        tl.to(socialsRef.current, { opacity: 0, duration: 0.2 }, 0)
      }
      tl.to(panelRef.current, { x: '100%', duration: 0.6, ease: 'power4.in' }, 0.2)

      // Cycle label back: CLOSE → MENU
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
      {/* Toggle button */}
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

      {/* Prelayers */}
      <div ref={prelayer1Ref} className="menu-prelayer menu-prelayer-1" />
      <div ref={prelayer2Ref} className="menu-prelayer menu-prelayer-2" />

      {/* Menu panel */}
      <div ref={panelRef} className="menu-panel">
        <nav>
          <ul className="menu-nav">
            {navItems.map((item, i) => (
              <li key={item.label}>
                <a
                  ref={(el) => { navItemsRef.current[i] = el }}
                  onClick={(e) => { e.preventDefault(); item.handler() }}
                  href="#"
                >
                  <span
                    style={{
                      fontSize: 'clamp(0.5rem, 1vw, 0.65rem)',
                      letterSpacing: '0.25em',
                      color: 'rgba(12,12,14,0.3)',
                      minWidth: '2ch',
                    }}
                  >
                    0{i + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div ref={socialsRef} className="menu-socials">
          <span className="menu-socials-title">FOLLOW</span>
          <div className="menu-socials-links">
            {['INSTAGRAM', 'YOUTUBE', 'LINKEDIN'].map((s) => (
              <a key={s} href="#">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
