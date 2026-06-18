import { useEffect, useRef } from 'react'

interface Ripple {
  active: boolean
  x: number
  y: number
  age: number
  el: HTMLDivElement
}

export default function RippleTrail() {
  const containerRef = useRef<HTMLDivElement>(null)
  const ripplesRef = useRef<Ripple[]>([])
  const lastPosRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const POOL = 80
    const pool: Ripple[] = []

    for (let i = 0; i < POOL; i++) {
      const el = document.createElement('div')
      el.style.cssText = `
        position: absolute;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0;
        backdrop-filter: url(#liquid-trail) blur(1px);
        box-shadow: inset 0 0 30px rgba(255,255,255,0.1), 0 0 15px rgba(232,213,176,0.15);
        transform: translate(-50%, -50%);
      `
      container.appendChild(el)
      pool.push({ active: false, x: 0, y: 0, age: 0, el })
    }
    ripplesRef.current = pool

    let poolIdx = 0

    const onMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPosRef.current.x
      const dy = e.clientY - lastPosRef.current.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < 25) return

      lastPosRef.current = { x: e.clientX, y: e.clientY }

      const ripple = pool[poolIdx % POOL]
      poolIdx++
      ripple.active = true
      ripple.x = e.clientX
      ripple.y = e.clientY
      ripple.age = 0
    }

    const tick = () => {
      for (const r of pool) {
        if (!r.active) continue
        r.age += 0.012
        if (r.age >= 1) {
          r.active = false
          r.el.style.opacity = '0'
          continue
        }
        const size = 20 + r.age * (300 - 20)
        const opacity = 1 - Math.pow(r.age, 1.2)
        r.el.style.left = `${r.x}px`
        r.el.style.top = `${r.y}px`
        r.el.style.width = `${size}px`
        r.el.style.height = `${size}px`
        r.el.style.opacity = String(opacity)
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
      while (container.firstChild) container.removeChild(container.firstChild)
    }
  }, [])

  return (
    <>
      <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}>
        <defs>
          <filter id="liquid-trail" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
      <div
        ref={containerRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 30,
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
