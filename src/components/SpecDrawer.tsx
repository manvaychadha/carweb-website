import { AnimatePresence, motion } from 'motion/react'
import { cars } from '../data/cars'

interface SpecDrawerProps {
  carId: string | null
  onClose: () => void
}

export default function SpecDrawer({ carId, onClose }: SpecDrawerProps) {
  const car = carId ? cars.find((c) => c.id === carId) : null

  return (
    <AnimatePresence>
      {car && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 199,
              background: 'rgba(0,0,0,0.4)',
            }}
          />

          {/* Drawer */}
          <motion.div
            className="spec-drawer"
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: 440,
              height: '100vh',
              zIndex: 200,
              overflowY: 'auto',
            }}
          >
            <div style={{ padding: 40 }}>
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 40,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.35em',
                      color: 'rgba(12,12,14,0.4)',
                      marginBottom: 6,
                    }}
                  >
                    FULL SPECIFICATION
                  </div>
                  <div
                    style={{
                      fontSize: 22,
                      letterSpacing: '0.06em',
                      color: '#0c0c0e',
                    }}
                  >
                    {car.name}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  style={{
                    background: 'none',
                    border: '1px solid rgba(12,12,14,0.15)',
                    borderRadius: 2,
                    padding: '8px 14px',
                    fontSize: 14,
                    cursor: 'pointer',
                    color: '#0c0c0e',
                    fontFamily: 'inherit',
                    flexShrink: 0,
                    marginTop: 4,
                  }}
                >
                  ×
                </button>
              </div>

              {/* Tagline */}
              <p
                style={{
                  fontSize: 9,
                  letterSpacing: '0.25em',
                  color: 'rgba(12,12,14,0.5)',
                  marginBottom: 40,
                  margin: '0 0 40px 0',
                }}
              >
                {car.tagline}
              </p>

              {/* Spec categories */}
              {car.fullSpecs.map((cat) => (
                <div key={cat.category} style={{ marginBottom: 36 }}>
                  <div
                    style={{
                      fontSize: 8,
                      letterSpacing: '0.35em',
                      color: 'var(--accent)',
                      marginBottom: 16,
                      paddingBottom: 10,
                      borderBottom: '1px solid rgba(12,12,14,0.08)',
                    }}
                  >
                    {cat.category}
                  </div>
                  {cat.specs.map((spec) => (
                    <div
                      key={spec.label}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '10px 0',
                        borderBottom: '1px solid rgba(12,12,14,0.04)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 9,
                          letterSpacing: '0.2em',
                          color: 'rgba(12,12,14,0.45)',
                        }}
                      >
                        {spec.label}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          letterSpacing: '0.12em',
                          color: '#0c0c0e',
                          textAlign: 'right',
                          maxWidth: '55%',
                        }}
                      >
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
