import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import RippleTrail from './components/RippleTrail'
import StaggeredMenu from './components/StaggeredMenu'
import BrandManifesto from './components/BrandManifesto'
import Experiences from './components/Experiences'
import CarSpecs from './components/CarSpecs'
import Testimonials from './components/Testimonials'
import Membership from './components/Membership'
import Academy from './components/Academy'
import ConciergeForm from './components/ConciergeForm'
import Faq from './components/Faq'
import PressStrip from './components/PressStrip'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function scrollToForm() {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Header
        menuOpen={menuOpen}
        onConsultationOpen={scrollToForm}
      />

      <Hero menuOpen={menuOpen} />

      <RippleTrail />

      <StaggeredMenu
        isOpen={menuOpen}
        onToggle={() => setMenuOpen((v) => !v)}
        onConsultationOpen={scrollToForm}
      />

      {/* Scrollable content layer */}
      <div style={{ position: 'relative', zIndex: 25 }}>
        {/* Spacer so fixed hero is visible on load */}
        <div style={{ height: '100vh' }} />

        <div style={{ backgroundColor: 'var(--bg-base)' }}>
          {/* Trust / Why Choose Us */}
          <BrandManifesto />

          {/* Car Match Tool */}
          <CarSpecs />

          {/* Services */}
          <Experiences />

          {/* Mid-page lead banner */}
          <PressStrip />

          {/* Service Packages / Pricing */}
          <Membership />

          {/* Founder Section */}
          <Academy />

          {/* Testimonials */}
          <Testimonials />

          {/* Consultation Form */}
          <div id="booking-form">
            <ConciergeForm />
          </div>

          {/* FAQ */}
          <Faq />

          <Footer />
        </div>
      </div>

      <CookieConsent />
    </>
  )
}
