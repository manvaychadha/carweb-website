import { AnimatePresence, motion } from 'motion/react'
import CollectionVideo from './CollectionVideo'

interface CollectionOverlayProps {
  isOpen: boolean
  onClose: () => void
}

const collectionItems = [
  {
    name: 'GRAND TOURER',
    videoSrc: '/videos/collection-grand-tourer.mp4',
    delay: 0,
    specs: [
      { label: 'ENGINE', value: 'V12 6.0L' },
      { label: 'POWER', value: '630 BHP' },
      { label: 'SEATS', value: '2+2' },
      { label: '0–100', value: '3.8 SECONDS' },
    ],
  },
  {
    name: 'SPORT COUPE',
    videoSrc: '/videos/collection-sport-coupe.mp4',
    delay: 0.12,
    specs: [
      { label: 'ENGINE', value: 'FLAT-SIX 4.0L' },
      { label: 'POWER', value: '650 BHP' },
      { label: 'WEIGHT', value: '1490 KG' },
      { label: 'TOP SPEED', value: '340 KM/H' },
    ],
  },
  {
    name: 'LUXURY SUV',
    videoSrc: '/videos/collection-luxury-suv.mp4',
    delay: 0.24,
    specs: [
      { label: 'ENGINE', value: 'V8 4.4L' },
      { label: 'POWER', value: '530 BHP' },
      { label: 'DRIVE', value: 'ALL-WHEEL' },
      { label: 'BUILD YEAR', value: '2024' },
    ],
  },
]

export default function CollectionOverlay({ isOpen, onClose }: CollectionOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.3 } }}
          exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.3 } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 110,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {collectionItems.map((item) => (
            <CollectionVideo
              key={item.name}
              videoSrc={item.videoSrc}
              name={item.name}
              specs={item.specs}
              delay={item.delay}
              isOpen={isOpen}
            />
          ))}

          {/* Close button */}
          <motion.button
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.4 } }}
            onClick={onClose}
            style={{
              position: 'fixed',
              top: 32,
              right: 32,
              zIndex: 120,
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 100,
              padding: '12px 28px',
              color: 'white',
              background: 'transparent',
              fontSize: 10,
              letterSpacing: '0.22em',
              cursor: 'pointer',
              fontFamily: 'inherit',
              textTransform: 'uppercase',
            }}
          >
            × CLOSE
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
