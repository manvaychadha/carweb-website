import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { siteInfo } from '../data/siteInfo'

interface DreamCarQuizProps {
  onClose: () => void
}

const questions = [
  {
    q: 'What matters most to you in a car?',
    options: ['Luxury & long-distance comfort', 'Speed & driving excitement', 'Versatility & family space'],
  },
  {
    q: 'How far do you typically drive in a day?',
    options: ['Under 50 km — city only', '50–150 km — city and highway', 'Over 150 km — mostly highway'],
  },
  {
    q: 'Where do you drive most?',
    options: ['City streets and traffic', 'Long highway stretches', 'Mixed terrain including hills'],
  },
  {
    q: 'How many seats do you need?',
    options: ['2–3 seats (driver-focused)', '4–5 seats (standard family)', '6–7 seats (large family / SUV)'],
  },
  {
    q: 'What is your approximate budget?',
    options: ['Under ₹50 lakh', '₹50 lakh – ₹1.5 crore', 'Above ₹1.5 crore'],
  },
]

const results = [
  {
    range: [0, 4],
    type: 'GRAND TOURER',
    sub: 'Built for distance. Built for comfort.',
    desc: 'You value elegant long-haul capability over track-day heroics. Cars like the BMW 5 Series, Mercedes E-Class, or Porsche Panamera sit in your wheelhouse — refined, fast, and effortlessly composed on a long highway.',
  },
  {
    range: [5, 7],
    type: 'SPORT COUPE',
    sub: 'Performance over practicality.',
    desc: 'You want to feel the road. City agility, sharp steering, and an engine that rewards you at every rev — the Porsche 911, AMG GT, or a well-specced M4 would make perfect sense in your garage.',
  },
  {
    range: [8, 10],
    type: 'LUXURY SUV',
    sub: 'Space, presence, and capability.',
    desc: 'Practicality without compromise. You need room, ground clearance, and real road presence — but you refuse to drive something boring. The Lamborghini Urus, BMW X5 M, or Mercedes GLS is your territory.',
  },
]

export default function DreamCarQuiz({ onClose }: DreamCarQuizProps) {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null)

  function handleAnswer(idx: number) {
    setSelectedIdx(idx)
    setTimeout(() => {
      const newScore = score + idx
      setScore(newScore)
      setSelectedIdx(null)
      if (step === questions.length - 1) {
        setDone(true)
      } else {
        setStep(s => s + 1)
      }
    }, 320)
  }

  function handleClose() {
    setStep(0); setScore(0); setDone(false); setSelectedIdx(null)
    onClose()
  }

  function handleFindCar() {
    handleClose()
    navigate('/concierge')
  }

  const result = results.find(r => score >= r.range[0] && score <= r.range[1]) ?? results[2]
  const progress = ((step + (done ? 1 : 0)) / questions.length) * 100

  return (
    <motion.div
      className="quiz-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => { if (e.target === e.currentTarget) handleClose() }}
    >
      <motion.div
        className="quiz-panel"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
      >
        <button className="quiz-close" onClick={handleClose} aria-label="Close">×</button>

        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <AnimatePresence mode="wait">
          {!done ? (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.22 }}
            >
              <div className="quiz-step-label">QUESTION {step + 1} OF {questions.length}</div>
              <h3 className="quiz-question">{questions[step].q}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {questions[step].options.map((opt, i) => (
                  <button
                    key={opt}
                    className={`quiz-option${selectedIdx === i ? ' selected' : ''}`}
                    onClick={() => handleAnswer(i)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className="quiz-step-label">YOUR RESULT</div>
              <div className="quiz-result-type">{result.type}</div>
              <div className="quiz-result-sub">{result.sub}</div>
              <p className="quiz-result-desc">{result.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button className="btn-gold" style={{ width: '100%', justifyContent: 'center' }} onClick={handleFindCar}>
                  FIND MY CAR
                </button>
                <a
                  href={siteInfo.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{ justifyContent: 'center' }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.55 4.122 1.515 5.861L.057 23.5l5.784-1.508A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.661-.516-5.176-1.414l-.37-.22-3.435.895.918-3.35-.241-.385A9.944 9.944 0 012 12c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10z"/></svg>
                  TALK ON WHATSAPP
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
