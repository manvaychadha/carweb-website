import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import Navbar from './components/Navbar'
import SideMenu from './components/SideMenu'
import DreamCarQuiz from './components/DreamCarQuiz'
import CookieConsent from './components/CookieConsent'
import { articles } from './data/articles'
import { HomePage, BlogPage, ArticlePage, ConciergePage, AboutPage, ContactPage } from './pages'

const darkRoutes = ['/']

export default function App() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [quizOpen, setQuizOpen] = useState(false)
  const isDarkPage = darkRoutes.includes(location.pathname)

  return (
    <>
      <Navbar
        isDark={isDarkPage}
        menuOpen={menuOpen}
        onToggle={() => setMenuOpen(o => !o)}
      />

      <AnimatePresence>
        {menuOpen && (
          <SideMenu
            onClose={() => setMenuOpen(false)}
            latestPost={articles[0]}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {quizOpen && <DreamCarQuiz onClose={() => setQuizOpen(false)} />}
      </AnimatePresence>

      <button className="quiz-float" onClick={() => setQuizOpen(true)}>
        <span className="spark">✨</span>
        FIND YOUR CAR
      </button>

      <CookieConsent />

      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/concierge" element={<ConciergePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}
