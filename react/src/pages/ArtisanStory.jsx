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
              <div className="worker-name">Creator</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ArtisanStory
