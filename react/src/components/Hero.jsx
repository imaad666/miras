import { useEffect, useMemo, useState } from 'react'

function Hero() {
  const slides = useMemo(() => [
    { src: '/assets/hero_banner.jpg', alt: 'MIRAS Hero Banner 1' },
    { src: '/assets/hero_banner_2.JPG', alt: 'MIRAS Hero Banner 2' },
  ], [])

  const [current, setCurrent] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (slides.length < 2) return
    const id = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [slides.length])

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
        <a href="/catalog" className="hero-btn">Shop Now</a>
      </div>
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button key={i} className={`dot ${i === current ? 'active' : ''}`} aria-label={`Go to slide ${i + 1}`} onClick={() => setCurrent(i)}></button>
        ))}
      </div>
    </section>
  )
}

export default Hero


