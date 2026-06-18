import { motion } from 'motion/react'

interface Spec {
  label: string
  value: string
}

interface CollectionVideoProps {
  videoSrc: string
  name: string
  specs: Spec[]
  delay: number
  isOpen: boolean
}

export default function CollectionVideo({ videoSrc, name, specs, delay, isOpen }: CollectionVideoProps) {
  return (
    <div
      style={{
        width: '33.333%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
      }}
    >
      <video
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Slide-in wipe */}
      <motion.div
        initial={{ y: '100%' }}
        animate={isOpen ? { y: '0%' } : { y: '100%' }}
        transition={{
          duration: 0.9 + delay,
          ease: [0.19, 1, 0.22, 1],
          delay: isOpen ? delay : 0,
        }}
        style={{
          position: 'absolute',
          inset: 0,
          background: '#0c0c0e',
          zIndex: 2,
        }}
      />

      {/* Bottom gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)',
          zIndex: 1,
        }}
      />

      {/* Info block */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: isOpen ? delay + 0.5 : 0,
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: 40,
          zIndex: 3,
        }}
      >
        <div
          style={{
            fontSize: 'clamp(28px,2.5vw,44px)',
            color: 'white',
            letterSpacing: '-0.01em',
            marginBottom: 20,
            fontWeight: 400,
          }}
        >
          {name}
        </div>

        {/* 2×2 spec grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px 24px',
          }}
        >
          {specs.map((spec) => (
            <div key={spec.label}>
              <div
                style={{
                  fontSize: 8,
                  color: 'rgba(255,255,255,0.4)',
                  letterSpacing: '0.3em',
                  marginBottom: 4,
                }}
              >
                {spec.label}
              </div>
              <div
                style={{
                  fontSize: 13,
                  color: 'white',
                  letterSpacing: '0.1em',
                }}
              >
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
