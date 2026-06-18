import { motion } from 'motion/react'

const inputStyle: React.CSSProperties = {
  background: 'rgba(12,12,14,0.04)',
  border: '1px solid rgba(12,12,14,0.1)',
  color: '#0c0c0e',
  fontSize: 11,
  letterSpacing: '0.12em',
  padding: '14px 16px',
  borderRadius: 2,
  width: '100%',
  fontFamily: 'inherit',
  textTransform: 'uppercase',
  outline: 'none',
  boxSizing: 'border-box',
}

const labelStyle: React.CSSProperties = {
  fontSize: 8,
  letterSpacing: '0.3em',
  color: 'rgba(12,12,14,0.5)',
  marginBottom: 6,
  display: 'block',
}

const selectArrow =
  'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 12 12\'%3E%3Cpath d=\'M2 4l4 4 4-4\' stroke=\'%230c0c0e\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")'

export default function ConciergeForm() {
  return (
    <section
      style={{
        backgroundColor: 'var(--bg-base)',
        padding: 'clamp(80px,10vw,140px) clamp(24px,6vw,96px)',
      }}
    >
      {/* Centered header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: 64 }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
          <span style={{ fontSize: 9, letterSpacing: '0.3em', color: 'rgba(12,12,14,0.5)' }}>
            BOOK A CONSULTATION
          </span>
          <div style={{ width: 24, height: 1, background: 'var(--accent)' }} />
        </div>
        <h2
          style={{
            fontSize: 'clamp(36px,5.5vw,72px)',
            fontWeight: 400,
            lineHeight: 0.95,
            color: '#0c0c0e',
            margin: 0,
          }}
        >
          LET'S FIND YOUR
          <br />
          <em>PERFECT CAR.</em>
        </h2>
        <p
          style={{
            fontSize: 11,
            letterSpacing: '0.15em',
            color: 'rgba(12,12,14,0.5)',
            marginTop: 20,
            maxWidth: 440,
            margin: '20px auto 0',
          }}
        >
          TELL US A BIT ABOUT WHAT YOU'RE LOOKING FOR. WE'LL GET BACK TO YOU WITHIN
          24 HOURS.
        </p>
      </motion.div>

      {/* Form card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        style={{
          maxWidth: 720,
          margin: '0 auto',
          background: 'white',
          border: '1px solid rgba(12,12,14,0.06)',
          boxShadow: '0 4px 40px rgba(0,0,0,0.06)',
          borderRadius: 4,
          padding: 'clamp(32px,5vw,56px)',
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Row 1 */}
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}
          >
            <div>
              <label style={labelStyle}>FULL NAME</label>
              <input type="text" placeholder="YOUR NAME" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>EMAIL ADDRESS</label>
              <input type="email" placeholder="YOUR EMAIL" style={inputStyle} />
            </div>
          </div>

          {/* Row 2 */}
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}
          >
            <div>
              <label style={labelStyle}>PHONE (WHATSAPP PREFERRED)</label>
              <input type="tel" placeholder="+91 00000 00000" style={inputStyle} />
            </div>
            <div>
              <label style={labelStyle}>SERVICE NEEDED</label>
              <select
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  cursor: 'pointer',
                  backgroundImage: selectArrow,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 14px center',
                  paddingRight: 36,
                }}
              >
                <option value="">SELECT A SERVICE</option>
                <option>CAR RECOMMENDATION</option>
                <option>VEHICLE COMPARISON REPORT</option>
                <option>DEALER NEGOTIATION SUPPORT</option>
                <option>USED CAR SOURCING</option>
                <option>LUXURY CAR SOURCING</option>
                <option>PDI ASSISTANCE</option>
                <option>NRI BUYING SUPPORT</option>
                <option>CORPORATE FLEET ADVISORY</option>
                <option>NOT SURE — HELP ME DECIDE</option>
              </select>
            </div>
          </div>

          {/* Row 3 */}
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}
          >
            <div>
              <label style={labelStyle}>BUDGET RANGE</label>
              <select
                style={{
                  ...inputStyle,
                  appearance: 'none',
                  cursor: 'pointer',
                  backgroundImage: selectArrow,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 14px center',
                  paddingRight: 36,
                }}
              >
                <option value="">SELECT BUDGET</option>
                <option>UNDER ₹5 LAKH</option>
                <option>₹5 – 10 LAKH</option>
                <option>₹10 – 15 LAKH</option>
                <option>₹15 – 20 LAKH</option>
                <option>₹20 – 40 LAKH</option>
                <option>ABOVE ₹40 LAKH</option>
              </select>
            </div>
            <div>
              <label style={labelStyle}>YOUR CITY</label>
              <input type="text" placeholder="E.G. MUMBAI, DELHI, BANGALORE" style={inputStyle} />
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>TELL US MORE (OPTIONAL)</label>
            <textarea
              rows={4}
              placeholder="VEHICLES YOU'RE CONSIDERING, QUESTIONS YOU HAVE, TIMELINE, ANYTHING ELSE..."
              style={{
                ...inputStyle,
                resize: 'vertical',
                lineHeight: 1.7,
              }}
            />
          </div>

          {/* Submit */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            style={{
              width: '100%',
              background: 'var(--accent)',
              color: 'white',
              padding: 16,
              fontSize: 10,
              letterSpacing: '0.25em',
              border: 'none',
              borderRadius: 2,
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            BOOK CONSULTATION
          </motion.button>

          <p
            style={{
              fontSize: 8,
              letterSpacing: '0.2em',
              color: 'rgba(12,12,14,0.35)',
              textAlign: 'center',
              margin: 0,
            }}
          >
            YOUR ENQUIRY IS CONFIDENTIAL. WE WILL NEVER SHARE YOUR DETAILS WITH DEALERS.
          </p>
        </form>
      </motion.div>
    </section>
  )
}
