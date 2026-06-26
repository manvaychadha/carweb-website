import { Helmet } from 'react-helmet-async'
import { motion } from 'motion/react'
import { siteInfo } from '../data/siteInfo'
import Footer from '../components/Footer'
import VideoBackground from '../components/VideoBackground'

const ease = [0.19, 1, 0.22, 1] as [number, number, number, number]
const PAGE = { initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -8 }, transition: { duration: 0.4, ease } }

const timeline = [
  { year: '2020', event: 'CARWEB.IN FOUNDED', detail: 'Manvay starts the blog at age 11. First articles published from Delhi.' },
  { year: '2021', event: 'FIRST 10,000 READERS', detail: 'Organic growth through Instagram and word of mouth. No paid promotion.' },
  { year: '2022', event: 'CONCIERGE LAUNCHES', detail: 'The first paying clients. Car sourcing and import advisory begins.' },
  { year: '2023', event: 'EXPANDED COVERAGE', detail: 'Electric vehicles, road trips, and long-form features added to the mix.' },
  { year: '2024', event: 'FULL REDESIGN', detail: 'New design, new structure, new ambition. The site grows up.' },
  { year: '2025', event: 'TODAY', detail: "India's most trusted independent automotive voice. Still independent. Still honest." },
]

export default function AboutPage() {
  const age = new Date().getFullYear() - siteInfo.founded

  return (
    <motion.div {...PAGE}>
      <Helmet>
        <title>About — CARWEB.IN</title>
        <meta name="description" content={`Founded in ${siteInfo.founded} by ${siteInfo.founder.name} at age ${siteInfo.founder.ageAtFounding}. India's most trusted independent automotive destination.`} />
        <link rel="canonical" href={`${siteInfo.seo.siteUrl}/about`} />
      </Helmet>

      {/* Hero */}
      <div style={{ height: '100vh', background: 'var(--dark)', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <VideoBackground src="/videos/about-hero-bg.mp4" overlay={0.55} />
        <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 40, padding: 'clamp(40px,6vw,88px)', paddingBottom: 'clamp(64px,9vw,120px)' }}>
          <div>
            <motion.div className="gold-tag" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7, ease: [0.19, 1, 0.22, 1] }} style={{ marginBottom: 24 }}>
              THE STORY
            </motion.div>
            <motion.h1 className="heading-xl" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1.0, ease: [0.19, 1, 0.22, 1] }} style={{ color: 'var(--chalk)', margin: 0 }}>
              Started at eleven.<br />Still going.
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }} style={{ textAlign: 'right', flexShrink: 0 }}>
            <span className="stat-number" style={{ color: 'rgba(201,168,76,0.18)', fontSize: 'clamp(72px,12vw,160px)' }}>{age}</span>
            <div className="label-sm" style={{ color: 'var(--chalk-faint)' }}>YEARS PUBLISHING</div>
          </motion.div>
        </div>
      </div>

      {/* Founder bio */}
      <section className="section" style={{ background: 'var(--cream)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,7vw,100px)', alignItems: 'start' }}>
          <div>
            <div className="gold-tag" style={{ marginBottom: 20 }}>FOUNDER</div>
            <h2 className="heading-md" style={{ color: 'var(--ink)', margin: '0 0 8px' }}>{siteInfo.founder.name}</h2>
            <p className="label" style={{ color: 'var(--ink-muted)', marginBottom: 28 }}>{siteInfo.founder.role}</p>
            <div style={{ height: 1, background: 'var(--cream-border)', marginBottom: 28 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="label-sm" style={{ color: 'var(--ink-muted)' }}>{siteInfo.contact.location}</span>
              <a href={`mailto:${siteInfo.contact.email}`} className="label-sm" style={{ color: 'var(--gold)', textDecoration: 'none' }}>{siteInfo.contact.email}</a>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}>
            <p className="body-text" style={{ color: 'var(--ink-muted)', margin: '0 0 24px' }}>
              {siteInfo.founder.fullBio}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Different */}
      <section className="section" style={{ background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
        <VideoBackground src="/videos/why-diff-bg.mp4" opacity={0.30} overlay={0.82} />
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 10 }}>
          <div className="gold-tag" style={{ justifyContent: 'center', marginBottom: 28 }}>WHY DIFFERENT</div>
          <h2 className="heading-md" style={{ color: 'var(--chalk)', margin: '0 0 24px' }}>One voice. One obsession. Zero compromises.</h2>
          <p className="body-text" style={{ color: 'var(--chalk-muted)', margin: '0 0 40px' }}>
            {siteInfo.founder.differentiator}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
            {['INDEPENDENCE', 'HONESTY', 'OBSESSION'].map((v, i) => (
              <motion.div key={v} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="card-dark" style={{ padding: 'clamp(24px,3vw,40px)', textAlign: 'left' }}>
                <h3 className="label" style={{ color: 'var(--gold)', marginBottom: 12 }}>{v}</h3>
                <p className="body-text" style={{ color: 'var(--chalk-muted)', margin: 0, fontSize: 13 }}>
                  {v === 'INDEPENDENCE' && 'Not affiliated with any dealership, manufacturer, or importer. Our advice is paid for by readers.'}
                  {v === 'HONESTY' && "We tell you what's wrong with a car, not just what's right. If a dealer is overcharging you, we'll say so."}
                  {v === 'OBSESSION' && 'We read the spec sheets. We track the prices. We know the grey market rates. This is not a job — it is a passion.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden' }}>
        <VideoBackground src="/videos/timeline-bg.mp4" opacity={0.06} overlay={0.97} overlayColor="245,240,232" />
        <div style={{ position: 'relative', zIndex: 10 }}>
        <div className="gold-tag" style={{ marginBottom: 40 }}>TIMELINE</div>
        <div>
          {timeline.map((item, i) => (
            <motion.div key={item.year}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: i * 0.07 }}
              style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: 32, padding: '24px 0', borderBottom: '1px solid var(--cream-border)', alignItems: 'start' }}>
              <span className="stat-number" style={{ color: 'var(--gold)', fontSize: 'clamp(20px,2.5vw,32px)' }}>{item.year}</span>
              <div>
                <div className="label" style={{ color: 'var(--ink)', marginBottom: 6 }}>{item.event}</div>
                <p className="body-text" style={{ color: 'var(--ink-muted)', margin: 0, fontSize: 13 }}>{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
