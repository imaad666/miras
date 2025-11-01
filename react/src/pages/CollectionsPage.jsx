import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function CollectionsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="collections-page">
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">Collections</span>
        </div>
      </nav>
      <section className="collections-hero">
        <div className="collections-grid">
          <figure className="collection-photo photo-one">
            <img src="/assets/Collection%201/DSC_1458.JPG" alt="Lime ensemble from the valley collection" loading="lazy" />
          </figure>

          <figure className="collection-photo photo-two">
            <img src="/assets/Collection%202/DSC_1539.JPG" alt="Black kurta with gold embroidery from Collection 2" loading="lazy" />
          </figure>

          <figure className="collection-photo photo-three">
            <img src="/assets/Collection%203/DSC_1649.JPG" alt="Artisan-crafted black suit with statement neckline from Collection 3" loading="lazy" />
          </figure>

          <figure className="collection-photo photo-four">
            <img src="/assets/Collection%204/DSC_1700.JPG" alt="Printed kaftan from the celebrity closet curation" loading="lazy" />
          </figure>

          <div className="collections-copy">
            <p className="collections-lede">The valley was our beginning The world is our canvas</p>
            <p className="collections-sublede">explore pieces inspired by the valley,</p>
            <Link className="collections-cta" to="/catalog">View Collection</Link>
          </div>

          <figure className="collection-photo photo-five">
            <img src="/assets/Collection%205/DSC_1750.JPG" alt="Hand-embroidered rust set from Collection 5" loading="lazy" />
          </figure>

          <figure className="collection-photo photo-six">
            <img src="/assets/Collection%206/DSC_1828.JPG" alt="Olive-toned ensemble with zari work from Collection 6" loading="lazy" />
          </figure>

          <figure className="collection-photo photo-seven">
            <img src="/assets/Collection%207/DSC_1947.JPG" alt="Model styling handcrafted attire in a heritage courtyard" loading="lazy" />
          </figure>

          <figure className="collection-photo photo-eight">
            <img src="/assets/Collection%208/DSC_2010.JPG" alt="Silk look with hammered metal accessory from Collection 8" loading="lazy" />
          </figure>
        </div>
      </section>
    </main>
  )
}

export default CollectionsPage
