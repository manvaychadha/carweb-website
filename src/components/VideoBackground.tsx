/**
 * VideoBackground
 * Drop inside any section that needs a video background.
 *
 * Usage:
 *   <section style={{ position: 'relative', overflow: 'hidden' }}>
 *     <VideoBackground src="/videos/concierge-cta-bg.mp4" overlay={0.55} />
 *     <div style={{ position: 'relative', zIndex: 10 }}>...your content...</div>
 *   </section>
 *
 * Props:
 *   src         — path to video file e.g. "/videos/footer-bg.mp4"
 *   opacity     — video opacity 0–1, default 1
 *   overlay     — dark overlay strength 0–1, default 0.55
 *   overlayColor — overlay colour, default black. Use 'rgba(245,240,232,X)' for cream sections.
 */

interface VideoBackgroundProps {
  src: string
  opacity?: number
  overlay?: number
  overlayColor?: string
}

export default function VideoBackground({
  src,
  opacity = 1,
  overlay = 0.55,
  overlayColor = '0,0,0',
}: VideoBackgroundProps) {
  return (
    <>
      {/* Video layer */}
      <video
        src={src}
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
          objectPosition: 'center',
          opacity,
          zIndex: 0,
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `rgba(${overlayColor},${overlay})`,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </>
  )
}
