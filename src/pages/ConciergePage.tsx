import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { siteInfo } from '../data/siteInfo'
import Footer from '../components/Footer'
import VideoBackground from '../components/VideoBackground'

const ease = [0.19, 1, 0.22, 1] as [number, number, number, number]
const PAGE = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.4, ease } }
const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL ?? ''

const steps = [
  { num: '01', title: 'BRIEF US', detail: 'Tell us what you want — make, model, budget, timeline, condition.' },
  { num: '02', title: 'WE RESEARCH', detail: 'We map the market, check grey and official channels, and identify your best options.' },
  { num: '03', title: 'SHORTLIST', detail: 'You receive a curated shortlist with our full analysis and our recommendation.' },
]

export default function ConciergePage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', city: '', dreamCar: '', budget: '', condition: '', timeline: '', notes: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(false)

  function set(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(f => ({ ...f, [k]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true); setError(false)
    try {
      if (WEBHOOK_URL) await fetch(WEBHOOK_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, source: 'concierge-page' }) })
      setSent(true)
    } catch { setError(true) }
    finally { setSending(false) }
  }

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255,255,255,0.06)', border: '1.5px solid rgba(255,255,255,0.10)', borderRadius: 4,
    color: 'var(--chalk)', fontFamily: 'var(--font-body)', fontSize: 14, padding: '12px 16px',
    outline: 'none', width: '100%', transition: 'border-color 0.25s ease',
  }

  return (
    <motion.div {...PAGE}>
      <Helmet>
        <title>Private Concierge — CARWEB.IN</title>
        <meta name="description" content="India's most trusted private car concierge. Sourcing, importing, negotiating — we handle everything so you drive the right car." />
        <link rel="canonical" href={`${siteInfo.seo.siteUrl}/concierge`} />
      </Helmet>

      {/* Hero */}
      <div style={{ height: '100vh', background: 'var(--dark)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <VideoBackground src="/videos/concierge-hero-bg.mp4" overlay={0.55} />
        <div style={{ position: 'relative', zIndex: 10, padding: 'clamp(40px,6vw,88px)', paddingBottom: 'clamp(64px,9vw,120px)' }}>
          <motion.div className="gold-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.19, 1, 0.22, 1] }} style={{ marginBottom: 24 }}>
            PRIVATE CONCIERGE
          </motion.div>
          <motion.h1 className="heading-xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1.0, ease: [0.19, 1, 0.22, 1] }} style={{ color: 'var(--chalk)', margin: '0 0 28px', maxWidth: '16ch' }}>
            We find the car.<br />You enjoy the drive.
          </motion.h1>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, duration: 0.7 }} style={{ display: 'flex', gap: 14 }}>
            <a href="#enquiry" className="btn-gold" onClick={e => { e.preventDefault(); document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth' }) }}>
              START MY ENQUIRY
            </a>
            <a href={siteInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-outline-light">
              WHATSAPP US
            </a>
          </motion.div>
        </div>
      </div>

      {/* Process steps */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <VideoBackground src="/videos/process-bg.mp4" opacity={0.12} overlay={0.92} overlayColor="245,240,232" />
        <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="gold-tag" style={{ marginBottom: 32 }}>HOW IT WORKS</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'clamp(24px,4vw,56px)' }}>
          {steps.map((s, i) => (
            <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}>
              <span className="stat-number" style={{ color: 'rgba(201,168,76,0.18)', display: 'block', marginBottom: 16 }}>{s.num}</span>
              <h3 className="label" style={{ color: 'var(--gold)', marginBottom: 10 }}>{s.title}</h3>
              <p className="body-text" style={{ color: 'var(--ink-muted)', margin: 0 }}>{s.detail}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* Enquiry form */}
      <section id="enquiry" className="section" style={{ background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
        <VideoBackground src="/videos/form-bg.mp4" opacity={0.20} overlay={0.88} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,7vw,100px)', alignItems: 'start', position: 'relative', zIndex: 10 }}>
          <div>
            <div className="gold-tag" style={{ marginBottom: 24 }}>START YOUR SEARCH</div>
            <h2 className="heading-md" style={{ color: 'var(--chalk)', margin: '0 0 16px' }}>
              Tell us what you're looking for.
            </h2>
            <p className="body-text" style={{ color: 'var(--chalk-muted)', margin: '0 0 32px' }}>
              Share the details and we'll get back within 24 hours with an initial assessment.
            </p>
            <a href={siteInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.122 1.515 5.861L.057 23.5l5.784-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.661-.516-5.176-1.414l-.37-.22-3.435.895.918-3.35-.241-.385A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
              PREFER WHATSAPP?
            </a>
          </div>

          <div>
            {sent ? (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="card-dark" style={{ padding: 48, textAlign: 'center', borderColor: 'var(--gold-border)' }}>
                <div className="gold-tag" style={{ justifyContent: 'center', marginBottom: 16 }}>MESSAGE RECEIVED</div>
                <p className="body-text" style={{ color: 'var(--chalk-muted)', margin: '0 0 24px' }}>We'll be in touch within 24 hours.</p>
                <a href={siteInfo.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">URGENT? WHATSAPP US</a>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>NAME *</label>
                    <input style={inputStyle} type="text" value={form.name} onChange={set('name')} required placeholder="Your name"
                      onFocus={e => (e.target.style.borderColor = 'var(--gold-border)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>PHONE / WHATSAPP *</label>
                    <input style={inputStyle} type="tel" value={form.phone} onChange={set('phone')} required placeholder="+91 9XXXXXXXXX"
                      onFocus={e => (e.target.style.borderColor = 'var(--gold-border)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')} />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>EMAIL</label>
                    <input style={inputStyle} type="email" value={form.email} onChange={set('email')} placeholder="you@example.com"
                      onFocus={e => (e.target.style.borderColor = 'var(--gold-border)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>CITY</label>
                    <input style={inputStyle} type="text" value={form.city} onChange={set('city')} placeholder="Delhi, Mumbai..."
                      onFocus={e => (e.target.style.borderColor = 'var(--gold-border)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>DREAM CAR *</label>
                  <input style={inputStyle} type="text" value={form.dreamCar} onChange={set('dreamCar')} required placeholder="Make, model, or describe what you want"
                    onFocus={e => (e.target.style.borderColor = 'var(--gold-border)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')} />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>BUDGET</label>
                    <input style={inputStyle} type="text" value={form.budget} onChange={set('budget')} placeholder="e.g. ₹50L – ₹1.5Cr"
                      onFocus={e => (e.target.style.borderColor = 'var(--gold-border)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>CONDITION</label>
                    <select style={{ ...inputStyle, appearance: 'none' }} value={form.condition} onChange={set('condition')}>
                      <option value="">Any condition</option>
                      <option value="new">New only</option>
                      <option value="used">Pre-owned</option>
                      <option value="either">Either</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>TIMELINE</label>
                  <input style={inputStyle} type="text" value={form.timeline} onChange={set('timeline')} placeholder="e.g. Within 3 months, no rush"
                    onFocus={e => (e.target.style.borderColor = 'var(--gold-border)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')} />
                </div>
                <div className="form-group">
                  <label className="form-label" style={{ color: 'var(--chalk-faint)' }}>ADDITIONAL NOTES</label>
                  <textarea style={{ ...inputStyle, minHeight: 100, resize: 'vertical' }} value={form.notes} onChange={set('notes')} placeholder="Anything else we should know..."
                    onFocus={e => (e.target.style.borderColor = 'var(--gold-border)')} onBlur={e => (e.target.style.borderColor = 'rgba(255,255,255,0.10)')} />
                </div>
                {error && <p className="label-sm" style={{ color: 'rgba(255,80,80,0.9)', margin: 0 }}>Something went wrong. Please try WhatsApp instead.</p>}
                <button type="submit" className="btn-gold" disabled={sending} style={{ justifyContent: 'center', opacity: sending ? 0.6 : 1 }}>
                  {sending ? 'SENDING...' : 'SEND ENQUIRY'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
