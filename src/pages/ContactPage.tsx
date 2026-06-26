import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { siteInfo } from '../data/siteInfo'
import Footer from '../components/Footer'
import VideoBackground from '../components/VideoBackground'

const ease = [0.19, 1, 0.22, 1] as [number, number, number, number]
const PAGE = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.4, ease } }
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL ?? ''

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  function set(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true); setError(false)
    try {
      if (WEBHOOK_URL) await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source: 'contact-page' }) })
      setSent(true)
    } catch { setError(true) }
    finally { setSending(false) }
  }

  return (
    <motion.div {...PAGE}>
      <Helmet>
        <title>Contact — CARWEB.IN</title>
        <meta name="description" content={`Get in touch with carweb.in — ${siteInfo.contact.phoneDisplay}, ${siteInfo.contact.email}`} />
        <link rel="canonical" href={`${siteInfo.seo.siteUrl}/contact`} />
      </Helmet>

      {/* Hero */}
      <div style={{ height: 360, background: 'var(--dark)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <VideoBackground src="/videos/contact-hero-bg.mp4" overlay={0.55} />
        <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(32px,6vw,80px)', paddingBottom: 'clamp(40px,6vw,64px)' }}>
          <div className="gold-tag" style={{ marginBottom: 16 }}>GET IN TOUCH</div>
          <h1 className="heading-lg" style={{ color: 'var(--chalk)', margin: 0 }}>
            We'd love<br />to hear from you.
          </h1>
        </div>
      </div>

      {/* Content */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.7fr 1fr', gap: 'clamp(40px,7vw,100px)', alignItems: 'start' }}>
          {/* Info */}
          <div>
            <div style={{ marginBottom: 40 }}>
              <div className="label-sm" style={{ color: 'var(--ink-muted)', marginBottom: 16 }}>FASTEST RESPONSE</div>
              <a href={siteInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ display: 'flex', marginBottom: 8 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.122 1.515 5.861L.057 23.5l5.784-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.661-.516-5.176-1.414l-.37-.22-3.435.895.918-3.35-.241-.385A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
                {siteInfo.contact.phoneDisplay}
              </a>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <div className="label-sm" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>EMAIL</div>
                <a href={`mailto:${siteInfo.contact.email}`} className="body-text" style={{ color: 'var(--ink)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}>
                  {siteInfo.contact.email}
                </a>
              </div>
              <div>
                <div className="label-sm" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>INSTAGRAM</div>
                <a href={siteInfo.social.instagram.url} target="_blank" rel="noopener noreferrer" className="body-text"
                  style={{ color: 'var(--ink)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--gold)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--ink)')}>
                  {siteInfo.social.instagram.handle}
                </a>
              </div>
              <div>
                <div className="label-sm" style={{ color: 'var(--ink-muted)', marginBottom: 8 }}>LOCATION</div>
                <span className="body-text" style={{ color: 'var(--ink-muted)' }}>{siteInfo.contact.location}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}>
            {sent ? (
              <div className="card" style={{ padding: 48, textAlign: 'center' }}>
                <div className="gold-tag" style={{ justifyContent: 'center', marginBottom: 16 }}>THANK YOU</div>
                <p className="body-text" style={{ color: 'var(--ink-muted)', margin: 0 }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div className="form-group">
                  <label className="form-label">YOUR NAME</label>
                  <input className="form-input" type="text" value={form.name} onChange={set('name')} required placeholder="Enter your name" />
                </div>
                <div className="form-group">
                  <label className="form-label">EMAIL ADDRESS</label>
                  <input className="form-input" type="email" value={form.email} onChange={set('email')} required placeholder="you@example.com" />
                </div>
                <div className="form-group">
                  <label className="form-label">MESSAGE</label>
                  <textarea className="form-input" value={form.message} onChange={set('message')} required placeholder="How can we help?" style={{ minHeight: 120, resize: 'vertical' }} />
                </div>
                {error && <p className="label-sm" style={{ color: 'rgba(200,50,50,0.9)', margin: 0 }}>Something went wrong. Please try WhatsApp instead.</p>}
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  <button type="submit" className="btn-gold" disabled={sending} style={{ opacity: sending ? 0.6 : 1 }}>
                    {sending ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                  <a href={siteInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                    WHATSAPP INSTEAD
                  </a>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
