import Hero from '../components/Hero'
import { Link } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const options = { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed')
          obs.unobserve(e.target)
        }
      })
    }, options)
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

function HomePage() {
  useScrollReveal()
  return (
    <>
      <Hero />
      <section className="product-showcase">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="text-content scroll-reveal">
              <h2 className="product-title">MEHZAR</h2>
              <p className="product-subtext">A glimpse of eternity</p>
              <p className="product-description">
                A soft whisper of the 90s – this sunshine yellow set brings back the charm of short kurtas paired with flowing bell-bottom salwars. Designed with cut-sleeves, it carries the ease of vintage silhouettes while embracing modern finesse. The look is completed with a half-pure dupatta – featherlight, flowing like poetry in motion.
              </p>
            </div>
            <div className="image-content scroll-reveal-stagger">
              <div className="image-stack">
                <div className="image-item top-image">
                  <img src="/assets/home_one.jpg" alt="MEHZAR Collection - Close-up" className="product-image" />
                </div>
                <div className="image-item bottom-image">
                  <img src="/assets/home_two.jpg" alt="MEHZAR Collection - Full Look" className="product-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product-showcase shehnoor-section">
        <div className="showcase-container">
          <div className="showcase-content">
            <div className="image-content scroll-reveal-stagger">
              <div className="image-stack">
                <div className="image-item top-image">
                  <img src="/assets/home_four.png" alt="Shehnoor sleeve details" className="product-image" />
                </div>
                <div className="image-item bottom-image">
                  <img src="/assets/home_three.png" alt="Shehnoor full look" className="product-image" />
                </div>
              </div>
            </div>
            <div className="text-content scroll-reveal">
              <h2 className="product-title">SHEHNOOR</h2>
              <p className="product-subtext">Grace stitched into every fold.</p>
              <p className="product-description">
                Our muse, carries this timeless piece with effortless charm. Designed to fall just below the knees, this ensemble speaks of quiet sophistication.
              </p>
              <p className="product-description">
                The pure organza dupatta is adorned with delicate handwork, adding fluid elegance to the silhouette. Paired with intricately detailed sleeves, touched with zari and embellishments, this suit is crafted for those who believe in understated grandeur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="product-showcase new-arrivals-section">
        <div className="showcase-container">
          {(() => {
            const pool = [
              {
                img: '/assets/new_arrival_1.JPG',
                label: 'NEW ARRIVALS',
                title: 'Mehzar',
                desc: 'A revival of the golden era, it’s an ode to timeless elegance with a modern twist.'
              },
              {
                img: '/assets/new_arrival_2.JPG',
                label: 'NEW ARRIVALS',
                title: 'Grace in Whispers',
                desc: 'The gentle flow of crepe, kissed with intricate hand-embroidered pearls, speaks of devotion and artistry.'
              },
              {
                img: '/assets/new_arrival_3.JPG',
                label: 'NEW ARRIVALS',
                title: 'Shahnoor',
                desc: 'Timeless red, reimagined. With delicate cut-dana work and the fluid charm of pure silk.'
              },
            ]
            const shuffled = useMemo(() => {
              const arr = [...pool]
              for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1))
                ;[arr[i], arr[j]] = [arr[j], arr[i]]
              }
              return arr
            // eslint-disable-next-line react-hooks/exhaustive-deps
            }, [])
            const [idx, setIdx] = useState(0)
            const current = shuffled[idx]

            const prev = () => setIdx((i) => (i - 1 + shuffled.length) % shuffled.length)
            const next = () => setIdx((i) => (i + 1) % shuffled.length)

            return (
              <div className="showcase-content new-arrivals-content">
                <div className="new-arrivals-text scroll-reveal">
                  <div className="new-arrivals-pagination">
                    <span className="current">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="divider" aria-hidden="true"></span>
                    <span className="total">{String(shuffled.length).padStart(2, '0')}</span>
                  </div>
                  <span className="new-arrivals-label">{current.label}</span>
                  <h2 className="new-arrivals-title">{current.title}</h2>
                  <p className="new-arrivals-description">{current.desc}</p>
                  <Link className="new-arrivals-link" to="/catalog">EXPLORE</Link>
                </div>
                <div className="new-arrivals-visual scroll-reveal-stagger">
                  <div className="new-arrivals-image">
                    <img src={current.img} alt={current.title} className="new-arrivals-photo" />
                  </div>
                  <div className="new-arrivals-arrows">
                    <button className="new-arrivals-arrow up" aria-label="Previous" onClick={prev}></button>
                    <button className="new-arrivals-arrow down" aria-label="Next" onClick={next}></button>
                  </div>
                </div>
              </div>
            )
          })()}
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="about-container">
          <div className="about-header scroll-reveal">
            <h2 className="about-title">Elegance Begins at the Fingertips</h2>
            <p className="about-subtitle">Because true luxury is felt, not just seen</p>
          </div>
        </div>
        <div className="about-video-full scroll-reveal">
          <video className="artisan-video-full" autoPlay muted loop playsInline>
            <source src="/assets/artisans.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="about-container">
          <div className="about-text-box scroll-reveal scroll-reveal-stagger">
            <div className="featured-label scroll-reveal">FEATURED</div>
            <h3 className="about-heading scroll-reveal">Where Heritage Breathes Through Every Thread</h3>
            <p className="about-description scroll-reveal">
              At Miras, every thread is touched by tradition and brought to life by hand. Watch Amaan breathe soul into fabric where craft meets culture, and heritage becomes wearable art.
            </p>
            <Link to="/our-story" className="shop-now-link">READ MORE</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
