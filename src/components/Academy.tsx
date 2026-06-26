import { motion } from 'motion/react'
import { useState } from 'react'

export default function Academy() {
  const [btnHover, setBtnHover] = useState(false)

  return (
    <section id="about" style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh' }}>
      <img
        src="/videos/luxury-1.jpg"
        alt=""
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(120deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 10,
          padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          minHeight: '90vh',
        }}
      >
        {/* Left — founder text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.96, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            style={{
              fontSize: 10,
              letterSpacing: '0.3em',
              color: 'rgba(232,213,176,0.85)',
              marginBottom: 24,
            }}
          >
            WHY I STARTED CARWEB
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(32px,4vw,60px)',
              fontWeight: 300,
              lineHeight: 1.0,
              color: 'white',
              maxWidth: 520,
              margin: '0 0 32px 0',
            }}
          >
            THE CAR BUYING PROCESS
            <br />
            IN INDIA IS
            <br />
            <em>BROKEN.</em>
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 24,
              maxWidth: 480,
            }}
          >
            {[
              {
                title: 'INFORMATION OVERLOAD',
                body: 'HUNDREDS OF VARIANTS. CONFUSING SPECS. CONFLICTING REVIEWS. MOST BUYERS SPEND WEEKS RESEARCHING AND STILL FEEL UNCERTAIN.',
              },
              {
                title: 'BIASED DEALER ADVICE',
                body: 'A DEALER\'S JOB IS TO SELL THE CAR WITH THE BEST MARGIN — NOT THE CAR THAT\'S BEST FOR YOU. WE\'VE SEEN BUYERS PUSHED INTO THE WRONG VARIANT REPEATEDLY.',
              },
              {
                title: 'HIDDEN COSTS',
                body: 'EX-SHOWROOM PRICE IS JUST THE BEGINNING. INSURANCE, ACCESSORIES, LOANS, AND RUNNING COSTS CHANGE THE PICTURE COMPLETELY.',
              },
            ].map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.25em',
                    color: 'rgba(232,213,176,0.8)',
                    marginBottom: 6,
                  }}
                >
                  {point.title}
                </div>
                <p
                  style={{
                    fontSize: 11,
                    lineHeight: 1.8,
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.55)',
                    margin: 0,
                  }}
                >
                  {point.body}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — glass card with mission statement */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.96, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="glass-card"
          style={{
            padding: 'clamp(36px,4vw,52px)',
            borderRadius: 4,
          }}
        >
          <div
            style={{
              fontSize: 8,
              letterSpacing: '0.35em',
              color: 'rgba(232,213,176,0.7)',
              marginBottom: 24,
            }}
          >
            THE CARWEB MISSION
          </div>

          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(22px,2.5vw,32px)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: 'white',
              margin: '0 0 24px 0',
            }}
          >
            WE HELP BUYERS
            <br />
            CHOOSE THE RIGHT CAR,
            <br />
            <em>NEGOTIATE BETTER DEALS,</em>
            <br />
            AND AVOID EXPENSIVE
            <br />
            MISTAKES.
          </h3>

          <p
            style={{
              fontSize: 11,
              lineHeight: 1.9,
              letterSpacing: '0.14em',
              color: 'rgba(255,255,255,0.5)',
              margin: '0 0 32px 0',
            }}
          >
            CARWEB IS INDIA'S INDEPENDENT CAR BUYING CONSULTANCY. WE DON'T SELL CARS.
            WE DON'T TAKE COMMISSIONS. WE CHARGE A FLAT FEE FOR HONEST EXPERT ADVICE —
            AND THAT'S IT.
          </p>

          <button
            onMouseEnter={() => setBtnHover(true)}
            onMouseLeave={() => setBtnHover(false)}
            style={{
              padding: '14px 32px',
              background: btnHover ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: 2,
              backdropFilter: 'blur(8px)',
              color: 'white',
              fontSize: 10,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              fontFamily: 'inherit',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
            }}
          >
            BOOK A CONSULTATION
          </button>
        </motion.div>
      </div>
    </section>
  )
}
