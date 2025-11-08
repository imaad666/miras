import { useEffect } from 'react'
import '../styles/story.css'

function ArtisanStory() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="artisan-story-page">
      <section className="story-hero-section">
        <div className="story-hero-grid">
          <div className="story-panel story-panel-crimson">
            <div className="story-verse-pair">
              <p className="story-verse">
                Hands dipped in madder and saffron breathe colour into every warp.
                Threads hum with folk songs, pulled tight, released softly.
              </p>
              <p className="story-verse">
                Each shuttle glide is a promise to the valley—
                patterns kept alive in quiet devotion.
              </p>
            </div>
          </div>
          <div className="story-panel story-panel-ivory">
            <div className="story-verse-pair">
              <p className="story-verse">
                Morning light frames the loom; artisans follow shadows, not clocks.
                Fingertips map motifs before a single stitch is set.
              </p>
              <p className="story-verse">
                The cloth remembers every gesture, every pause;
                a narrative whispered from elder to apprentice.
              </p>
            </div>
          </div>
        </div>
        <div className="story-hero-headline" aria-hidden="true">
          <span className="headline-left">Craft</span>
          <span className="headline-right">Soul</span>
        </div>
      </section>

      <section className="story-intro">
        <div className="story-container">
          <h1 className="story-title">Elegance Begins at the Fingertips</h1>
          <p className="story-lead">
            Our ateliers in the valley nurture textiles that carry the hush of Kashmiri winters and the warmth of summer bazaars.
            Every piece is guided by touch—patterned slowly, bathed in heritage dyes, and lifted from the loom only when it sings in harmony.
          </p>
        </div>
      </section>

      <section className="story-process">
        <div className="story-container">
          <div className="process-grid">
            <article className="process-card">
              <span className="process-counter">01</span>
              <h2 className="process-title">Sketching in Thread</h2>
              <p className="process-copy">
                Motifs begin as whispers on handmade paper—chinar leaves, paisley vines, and lattice windows.
                The design is hand-transferred onto the warp, stitch by stitch, so the loom becomes a living sketchbook.
              </p>
            </article>
            <article className="process-card">
              <span className="process-counter">02</span>
              <h2 className="process-title">Dyeing with Memory</h2>
              <p className="process-copy">
                Strands are dipped into vats of walnut bark, indigo, and freshly ground saffron.
                Artisans pace each soak to the rhythm of folk verses, ensuring tones settle with gentle gradients.
              </p>
            </article>
            <article className="process-card">
              <span className="process-counter">03</span>
              <h2 className="process-title">Weaving the Story</h2>
              <p className="process-copy">
                Looms creak softly as the textile forms; palms guide the shuttle across thousands of crossings.
                Metallic tilla and silk threads are couched by hand to frame the fabric with heirloom brilliance.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="story-gallery">
        <div className="story-container">
          <h2 className="workers-heading">Meet the Artisans</h2>
          <div className="workers-grid">
            <div className="worker-card">
              <img className="worker-avatar" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Artisan silhouette" />
              <div className="worker-name">Artisan</div>
            </div>
          </div>
        </div>
      </section>

      <section className="story-gallery">
        <div className="story-container">
          <h2 className="workers-heading">Meet the Creator</h2>
          <div className="workers-grid">
            <div className="worker-card">
              <img className="worker-avatar" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="Creator silhouette" />
              <div className="worker-name">Sahil Riaz</div>
              <div className="worker-socials">
                <a
                  className="worker-social-link"
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0V8zm7.5 0h4.8v2.05h.07c.67-1.27 2.3-2.6 4.74-2.6 5.06 0 6 3.33 6 7.66V23H17v-6.73c0-1.6-.03-3.65-2.23-3.65-2.23 0-2.57 1.74-2.57 3.54V23H7.5V8z" />
                  </svg>
                </a>
                <a
                  className="worker-social-link"
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only">Instagram</span>
                  <svg aria-hidden="true" viewBox="0 0 24 24" focusable="false">
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.4.61.21 1.05.46 1.51.92.46.46.71.9.92 1.51.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43-.21.61-.46 1.05-.92 1.51-.46.46-.9.71-1.51.92-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4-.61-.21-1.05-.46-1.51-.92-.46-.46-.71-.9-.92-1.51-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43.21-.61.46-1.05.92-1.51.46-.46.9-.71 1.51-.92.46-.16 1.26-.35 2.43-.4C8.42 2.21 8.8 2.2 12 2.2m0-2.2C8.74 0 8.33.01 7.05.07 5.77.13 4.9.33 4.18.59c-.78.3-1.44.7-2.1 1.36-.67.66-1.06 1.32-1.37 2.1-.26.72-.46 1.59-.52 2.87C.02 8.17 0 8.58 0 12c0 3.42.02 3.83.07 5.11.06 1.28.26 2.15.52 2.87.3.78.7 1.44 1.37 2.1.66.66 1.32 1.06 2.1 1.36.72.26 1.59.46 2.87.52C8.17 23.98 8.58 24 12 24s3.83-.02 5.11-.07c1.28-.06 2.15-.26 2.87-.52.78-.3 1.44-.7 2.1-1.36.66-.66 1.06-1.32 1.36-2.1.26-.72.46-1.59.52-2.87.05-1.28.07-1.69.07-5.11s-.02-3.83-.07-5.11c-.06-1.28-.26-2.15-.52-2.87-.3-.78-.7-1.44-1.36-2.1-.66-.66-1.32-1.06-2.1-1.36-.72-.26-1.59-.46-2.87-.52C15.83.02 15.42 0 12 0z" />
                    <path d="M12 5.84A6.16 6.16 0 0 0 5.84 12 6.16 6.16 0 0 0 12 18.16 6.16 6.16 0 0 0 18.16 12 6.16 6.16 0 0 0 12 5.84m0 10.16A4 4 0 1 1 16 12a4 4 0 0 1-4 4z" />
                    <circle cx="18.4" cy="5.6" r="1.44" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ArtisanStory
