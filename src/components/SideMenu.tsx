import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { siteInfo } from '../data/siteInfo'
import type { Article } from '../data/articles'

interface SideMenuProps {
  onClose: () => void
  latestPost: Article
}

function IconWA() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.122 1.515 5.861L.057 23.5l5.784-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.661-.516-5.176-1.414l-.37-.22-3.435.895.918-3.35-.241-.385A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
  )
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  )
}
function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
  )
}

export default function SideMenu({ onClose, latestPost }: SideMenuProps) {
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([])
  const blogPreviewRef = useRef<HTMLAnchorElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const items = navItemsRef.current.filter(Boolean) as HTMLLIElement[]
    if (items.length) {
      gsap.fromTo(items,
        { x: 28, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.07, ease: 'power3.out', delay: 0.3 }
      )
    }
    if (blogPreviewRef.current) {
      gsap.fromTo(blogPreviewRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', delay: 0.55 }
      )
    }
    if (footerRef.current) {
      gsap.fromTo(footerRef.current,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, ease: 'power3.out', delay: 0.62 }
      )
    }

    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <>
      <motion.div
        className="menu-overlay-bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      />
      <motion.div
        className="menu-panel"
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 0.55, ease: [0.19, 1, 0.22, 1] }}
      >
        <div className="menu-panel-bg" />

        <div className="menu-nav-section">
          <nav style={{ marginBottom: 20 }}>
            <ul className="menu-nav-list">
              {siteInfo.nav.map((item, i) => (
                <li
                  key={item.path}
                  className="menu-nav-item"
                  ref={el => { navItemsRef.current[i] = el }}
                >
                  <Link to={item.path} className="menu-nav-link" onClick={onClose}>
                    {item.label}
                    <span className="arrow">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            to={`/blog/${latestPost.slug}`}
            className="menu-blog-preview"
            ref={blogPreviewRef}
            onClick={onClose}
          >
            <div className="menu-blog-label">LATEST POST</div>
            <div className="menu-blog-title">{latestPost.title}</div>
            <div style={{ fontSize: 10, color: 'rgba(245,240,232,0.3)', marginTop: 6, letterSpacing: '0.08em' }}>
              {latestPost.category} · {latestPost.readTime}
            </div>
          </Link>
        </div>

        <div className="menu-footer" ref={footerRef}>
          <a
            href={siteInfo.contact.whatsappLink}
            className="menu-contact-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWA />
            {siteInfo.contact.phoneDisplay}
          </a>
          <a href={`mailto:${siteInfo.contact.email}`} className="menu-contact-item">
            <IconMail />
            {siteInfo.contact.email}
          </a>
          <span className="menu-contact-item">
            <IconPin />
            {siteInfo.contact.location}
          </span>
          <div className="menu-socials">
            <a href={siteInfo.social.instagram.url} target="_blank" rel="noopener noreferrer">
              INSTAGRAM
            </a>
          </div>
        </div>
      </motion.div>
    </>
  )
}
