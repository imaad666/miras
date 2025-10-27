import { useEffect, useMemo, useRef, useState } from 'react'

function Hero() {
  const slides = useMemo(() => [
    { src: '/assets/hero_banner.jpg', alt: 'MIRAS Hero Banner 1' },
    { src: '/assets/hero_banner_2.JPG', alt: 'MIRAS Hero Banner 2' },
    { src: '/assets/hero_banner_3.JPG', alt: 'MIRAS Hero Banner 3' },
  ], [])

  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [progress, setProgress] = useState(0)
  const durationMs = 5000
  const rafIdRef = useRef(0)
  const startRef = useRef(performance.now())

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (slides.length < 1) return
    cancelAnimationFrame(rafIdRef.current)
    startRef.current = performance.now()
    const tick = (now) => {
      const elapsed = now - startRef.current
      const pct = Math.min(100, (elapsed / durationMs) * 100)
      setProgress(pct)
      if (elapsed >= durationMs) {
        setCurrent(c => (c + 1) % slides.length)
        startRef.current = performance.now()
        setProgress(0)
      }
      rafIdRef.current = requestAnimationFrame(tick)
    }
    rafIdRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafIdRef.current)
  }, [current, slides.length])

  return (
    <section className="hero">
      <div className="hero-carousel" style={{ transform: `translateX(${-current * 100}%)` }}>
        {slides.map((s, i) => (
          <div key={i} className={`hero-slide ${i === current ? 'active' : ''}`}>
            <img src={s.src} alt={s.alt} className="hero-image" />
            <div className="hero-overlay"></div>
          </div>
        ))}
      </div>
      <div className={`hero-content ${loaded ? 'loaded' : ''}`}>
        <h1 className="hero-title">MIRAS</h1>
        <p className="hero-subtext">Where tradition whispers luxury</p>
        <a href="/catalog" className="hero-btn" aria-label="Shop catalog">Shop Now</a>
      </div>
      <div className="hero-progress-multi">
        {slides.map((_, i) => (
          <div key={i} className="hero-progress-track" onClick={() => setCurrent(i)} role="button" aria-label={`Go to slide ${i + 1}`}>
            <div className="hero-progress-fill" style={{ width: `${i < current ? 100 : i === current ? progress : 0}%` }}></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero


