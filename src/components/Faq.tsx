import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

const faqs = [
  {
    q: 'WHAT EXACTLY DOES CARWEB DO?',
    a: 'WE ARE AN INDEPENDENT CAR BUYING CONSULTANCY. WE HELP INDIAN BUYERS CHOOSE THE RIGHT VEHICLE, COMPARE OPTIONS OBJECTIVELY, NEGOTIATE BETTER DEALS, AND NAVIGATE THE ENTIRE PURCHASE PROCESS — FOR A FLAT FEE, WITH NO DEALER COMMISSIONS.',
  },
  {
    q: 'HOW IS CARWEB DIFFERENT FROM A DEALER OR A REVIEW WEBSITE?',
    a: 'DEALERS ARE PAID TO SELL YOU A CAR. REVIEW WEBSITES ARE PAID BY ADVERTISERS. CARWEB IS PAID BY YOU — THE BUYER. WE HAVE NO FINANCIAL RELATIONSHIP WITH ANY MANUFACTURER OR DEALER, WHICH MEANS OUR ADVICE IS 100% IN YOUR INTEREST.',
  },
  {
    q: 'HOW DOES THE CONSULTATION WORK?',
    a: 'AFTER BOOKING, YOU\'LL SHARE YOUR REQUIREMENTS VIA A BRIEF FORM. WE THEN SCHEDULE A VIDEO OR PHONE CALL (DEPENDING ON THE PACKAGE) WHERE WE DISCUSS YOUR NEEDS IN DETAIL. YOU RECEIVE A WRITTEN SUMMARY WITH RECOMMENDATIONS WITHIN 24–48 HOURS.',
  },
  {
    q: 'CAN CARWEB HELP ME NEGOTIATE WITH A DEALER?',
    a: 'YES. OUR PREMIUM AND CONCIERGE PACKAGES INCLUDE A NEGOTIATION STRATEGY GUIDE — EXACTLY WHAT DISCOUNTS ARE AVAILABLE FOR YOUR MODEL, WHAT ADD-ONS TO SKIP, AND HOW TO CLOSE AT THE BEST PRICE. OUR CONCIERGE PACKAGE INCLUDES DIRECT SUPPORT DURING THE NEGOTIATION.',
  },
  {
    q: 'DO YOU SUPPORT USED CAR PURCHASES?',
    a: 'YES. WE HELP WITH SOURCING, INDEPENDENT VALUATION, HISTORY VERIFICATION GUIDANCE, AND PRE-PURCHASE INSPECTION CHECKLISTS FOR PRE-OWNED VEHICLES ACROSS PRICE RANGES.',
  },
  {
    q: 'I AM AN NRI BUYING A CAR FOR MY FAMILY IN INDIA. CAN YOU HELP?',
    a: 'ABSOLUTELY. NRI SUPPORT IS ONE OF OUR SPECIALISED SERVICES. WE CAN MANAGE THE ENTIRE PROCESS REMOTELY — FROM SHORTLISTING TO DEALER COORDINATION, PDI, AND DELIVERY CONFIRMATION — SO YOU DON\'T NEED TO TRAVEL.',
  },
  {
    q: 'DO YOU OPERATE PAN-INDIA?',
    a: 'YES. OUR CONSULTATIONS ARE REMOTE AND AVAILABLE ACROSS ALL CITIES AND STATES. PHYSICAL PDI SUPPORT IS CURRENTLY AVAILABLE IN SELECT METRO CITIES. WE\'RE EXPANDING COVERAGE — CONTACT US FOR AVAILABILITY IN YOUR CITY.',
  },
  {
    q: 'WHAT IF I\'M UNHAPPY WITH THE RECOMMENDATIONS?',
    a: 'WE STAND BEHIND OUR WORK. IF YOU FEEL THE RECOMMENDATIONS DON\'T REFLECT YOUR REQUIREMENTS, CONTACT US AND WE WILL REVISE THE REPORT. YOUR SATISFACTION IS WHAT DRIVES OUR REPUTATION.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 64 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
            <div style={{ width: 40, height: 1, background: 'var(--accent)' }} />
            <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.5)' }}>
              FREQUENTLY ASKED
            </span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(40px,6vw,80px)',
              fontWeight: 400,
              lineHeight: 0.95,
              color: '#0c0c0e',
              margin: 0,
            }}
          >
            QUESTIONS
            <br />
            <em>ANSWERED.</em>
          </h2>
        </motion.div>

        {/* FAQ items */}
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
            style={{ borderBottom: '1px solid rgba(12,12,14,0.08)' }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '24px 0',
                cursor: 'pointer',
                fontFamily: 'inherit',
                textAlign: 'left',
              }}
            >
              <span
                style={{
                  fontSize: 13,
                  letterSpacing: '0.06em',
                  color: '#0c0c0e',
                  textTransform: 'uppercase',
                  paddingRight: 16,
                }}
              >
                {faq.q}
              </span>
              <motion.span
                animate={{ rotate: openIndex === i ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: 20,
                  color: 'rgba(12,12,14,0.4)',
                  flexShrink: 0,
                  lineHeight: 1,
                }}
              >
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      lineHeight: 1.9,
                      letterSpacing: '0.12em',
                      color: 'rgba(12,12,14,0.6)',
                      margin: '0 0 24px 0',
                      paddingRight: 40,
                    }}
                  >
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginTop: 56 }}
        >
          <p
            style={{
              fontSize: 10,
              letterSpacing: '0.2em',
              color: 'rgba(12,12,14,0.5)',
              marginBottom: 24,
            }}
          >
            STILL HAVE A QUESTION?
          </p>
          <button
            style={{
              background: 'var(--accent)',
              color: 'white',
              padding: '14px 40px',
              fontSize: 10,
              letterSpacing: '0.22em',
              border: 'none',
              borderRadius: 2,
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
            }}
          >
            WHATSAPP AN EXPERT
          </button>
        </motion.div>
      </div>
    </section>
  )
}
