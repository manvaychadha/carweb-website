import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { siteInfo } from '../data/siteInfo'

interface NavbarProps {
  isDark: boolean
  menuOpen: boolean
  onToggle: () => void
}

export default function Navbar({ isDark, menuOpen, onToggle }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const cls = ['navbar', isDark ? 'on-dark' : 'on-light', isDark && scrolled ? 'scrolled' : '']
    .filter(Boolean).join(' ')

  return (
    <nav className={cls}>
      <Link to="/" className="navbar-logo">
        <span className="navbar-wordmark">
          CARWEB<span style={{ color: 'var(--gold)' }}>.IN</span>
        </span>
      </Link>

      <div className="navbar-links" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {siteInfo.nav.filter(n => n.path !== '/').map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `navbar-link${isActive ? ' active' : ''}`}
          >
            {item.label}
          </NavLink>
        ))}
      </div>

      <div className="navbar-right">
        <Link
          to="/concierge"
          className={isDark ? 'btn-outline-light' : 'btn-gold'}
          style={{ fontSize: 10, padding: '10px 20px' }}
        >
          ENQUIRE
        </Link>
        <button
          className={`menu-btn${menuOpen ? ' is-open' : ''}`}
          onClick={onToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <div className="menu-btn-icon">
            <span /><span /><span />
          </div>
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span>
        </button>
      </div>
    </nav>
  )
}
