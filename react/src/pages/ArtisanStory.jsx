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
              <img className="worker-avatar" src="https://i.pravatar.cc/300?img=11" alt="Worker Ayaan" />
              <div className="worker-name">Ayaan</div>
            </div>
            <div className="worker-card">
              <img className="worker-avatar" src="https://i.pravatar.cc/300?img=12" alt="Worker Zara" />
              <div className="worker-name">Zara</div>
            </div>
            <div className="worker-card">
              <img className="worker-avatar" src="https://i.pravatar.cc/300?img=13" alt="Worker Imran" />
              <div className="worker-name">Imran</div>
            </div>
            <div className="worker-card">
              <img className="worker-avatar" src="https://i.pravatar.cc/300?img=14" alt="Worker Meera" />
              <div className="worker-name">Meera</div>
            </div>
            <div className="worker-card">
              <img className="worker-avatar" src="https://i.pravatar.cc/300?img=15" alt="Worker Yusuf" />
              <div className="worker-name">Yusuf</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ArtisanStory
