import { useEffect, useMemo, useState, useRef } from 'react'
import QuickViewModal from '../shared/QuickViewModal'
import { Link } from 'react-router-dom'

// Product Image Carousel Component
function ProductImageCarousel({ images, alt, onImageClick, productId }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Find the parent product-card
    const productCard = container.closest('.product-card')
    if (!productCard) return

    const handleMouseEnter = () => {
      // Start auto-cycling through images
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
      setCurrentIndex(0) // Reset to first image
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
      }, 800) // Change image every 800ms for smooth swipe effect
    }

    const handleMouseLeave = () => {
      // Stop cycling and reset to first image
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
      setCurrentIndex(0)
    }

    productCard.addEventListener('mouseenter', handleMouseEnter)
    productCard.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      productCard.removeEventListener('mouseenter', handleMouseEnter)
      productCard.removeEventListener('mouseleave', handleMouseLeave)
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [images.length, productId])

  return (
    <div className="product-image-carousel" ref={containerRef}>
      <div 
        className="product-image-wrapper" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <img 
            key={index} 
            src={img} 
            alt={`${alt} - Image ${index + 1}`} 
            className="product-image-carousel-item" 
            onClick={onImageClick}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
    </div>
  )
}

const initialProducts = [
  {
    id: 'c1',
    name: 'Lime Ensemble from the Valley Collection',
    price: 32500,
    img: '/assets/Collection%201/DSC_1458.JPG',
    images: [
      '/assets/Collection%201/DSC_1458.JPG',
      '/assets/Collection%201/DSC_1459.JPG',
      '/assets/Collection%201/DSC_1478.JPG',
      '/assets/Collection%201/DSC_1487.JPG',
      '/assets/Collection%201/DSC_1512.JPG',
    ],
    categories: ['FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'c2',
    name: 'Black Kurta with Gold Embroidery',
    price: 28800,
    img: '/assets/Collection%202/DSC_1539.JPG',
    images: [
      '/assets/Collection%202/DSC_1539.JPG',
      '/assets/Collection%202/DSC_1550.JPG',
      '/assets/Collection%202/DSC_1577.JPG',
      '/assets/Collection%202/DSC_1616.JPG',
      '/assets/Collection%202/DSC_1618.JPG',
    ],
    categories: ['AB SHERUN NIKKAH', 'FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'c3',
    name: 'Artisan-Crafted Black Suit with Statement Neckline',
    price: 42000,
    img: '/assets/Collection%203/DSC_1649.JPG',
    images: [
      '/assets/Collection%203/DSC_1642.JPG',
      '/assets/Collection%203/DSC_1649.JPG',
      '/assets/Collection%203/DSC_1652.JPG',
      '/assets/Collection%203/DSC_1653.JPG',
      '/assets/Collection%203/DSC_1679.JPG',
    ],
    categories: ['AB SHERUN NIKKAH', 'FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'c4',
    name: 'Printed Kaftan from the Celebrity Closet Curation',
    price: 36500,
    img: '/assets/Collection%204/DSC_1700.JPG',
    images: [
      '/assets/Collection%204/DSC_1684.JPG',
      '/assets/Collection%204/DSC_1689.JPG',
      '/assets/Collection%204/DSC_1696.JPG',
      '/assets/Collection%204/DSC_1700.JPG',
      '/assets/Collection%204/DSC_1719.JPG',
    ],
    categories: ['FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'c5',
    name: 'Hand-Embroidered Rust Set',
    price: 38500,
    img: '/assets/Collection%205/DSC_1750.JPG',
    images: [
      '/assets/Collection%205/DSC_1738.JPG',
      '/assets/Collection%205/DSC_1750.JPG',
      '/assets/Collection%205/DSC_1770.JPG',
      '/assets/Collection%205/DSC_1783.JPG',
      '/assets/Collection%205/DSC_1798.JPG',
    ],
    categories: ['FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'c6',
    name: 'Olive-Toned Ensemble with Zari Work',
    price: 45000,
    img: '/assets/Collection%206/DSC_1828.JPG',
    images: [
      '/assets/Collection%206/DSC_1818.JPG',
      '/assets/Collection%206/DSC_1828.JPG',
      '/assets/Collection%206/DSC_1884.JPG',
      '/assets/Collection%206/DSC_1893.JPG',
      '/assets/Collection%206/DSC_1922.JPG',
    ],
    categories: ['AB SHERUN NIKKAH', 'FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'c7',
    name: 'Handcrafted Attire in Heritage Courtyard Collection',
    price: 39800,
    img: '/assets/Collection%207/DSC_1947.JPG',
    images: [
      '/assets/Collection%207/DSC_1938.JPG',
      '/assets/Collection%207/DSC_1940.JPG',
      '/assets/Collection%207/DSC_1947.JPG',
      '/assets/Collection%207/DSC_1952.JPG',
      '/assets/Collection%207/DSC_1960.JPG',
    ],
    categories: ['FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'c8',
    name: 'Silk Look with Hammered Metal Accessory',
    price: 43200,
    img: '/assets/Collection%208/DSC_2010.JPG',
    images: [
      '/assets/Collection%208/DSC_1987.JPG',
      '/assets/Collection%208/DSC_1995.JPG',
      '/assets/Collection%208/DSC_2010.JPG',
      '/assets/Collection%208/DSC_2019.JPG',
      '/assets/Collection%208/DSC_2052.JPG',
    ],
    categories: ['FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
]

function CatalogPage() {
  const [columns, setColumns] = useState(3)
  const [sortBy, setSortBy] = useState('latest')
  const [wishlist, setWishlist] = useState(() => new Set())
  const [quickView, setQuickView] = useState(null)

  const products = useMemo(() => {
    const arr = [...initialProducts]
    switch (sortBy) {
      case 'price-low':
        return arr.sort((a, b) => a.price - b.price)
      case 'price-high':
        return arr.sort((a, b) => b.price - a.price)
      case 'name':
        return arr.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return arr
    }
  }, [sortBy])

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  // Enable scroll reveal animations (needed for footer staggered content)
  useEffect(() => {
    const options = { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed')
          observer.unobserve(entry.target)
        }
      })
    }, options)
    document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="catalog-main">
      <nav className="breadcrumb">
        <div className="container">
          <Link to="/" className="breadcrumb-link">Home</Link>
          <span className="breadcrumb-separator">&gt;</span>
          <span className="breadcrumb-current">Women's Collection</span>
        </div>
      </nav>

      <header className="catalog-header">
        <div className="container">
          <h1 className="catalog-title">Women's Collection</h1>
          <div className="catalog-info">
            <span className="pagination-info">1 - {products.length} / {products.length}</span>
            <div className="catalog-controls">
              <div className="control-group">
                <label>SHOW</label>
                <select className="control-select" defaultValue="15">
                  <option value="15">15</option>
                  <option value="30">30</option>
                  <option value="60">60</option>
                </select>
              </div>
              <div className="control-group">
                <label>VIEW</label>
                <select className="control-select" value={columns} onChange={(e) => setColumns(parseInt(e.target.value))}>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div className="control-group">
                <label>SORT BY LATEST</label>
                <select className="control-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name A-Z</option>
                  <option value="latest">Latest</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="product-grid">
        <div className="container">
          <div className={`products-container grid-${columns}`} id="products-container">
            {products.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-image-container" onClick={() => setQuickView({ name: p.name, price: p.price, img: p.images[0], images: p.images })}>
                  <ProductImageCarousel 
                    images={p.images} 
                    alt={p.name}
                    productId={p.id}
                    onImageClick={() => setQuickView({ name: p.name, price: p.price, img: p.images[0], images: p.images })}
                  />
                  <div className="product-overlay">
                    <button className="quick-view-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuickView({ name: p.name, price: p.price, img: p.images[0], images: p.images }) }}>Quick View</button>
                    <button className={`wishlist-btn-card ${wishlist.has(p.id) ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleWishlist(p.id) }}>♡</button>
                  </div>
                </div>
                <div className="product-info">
                  <div className="product-categories">
                    {p.categories.map((c, i) => (
                      <span key={i} className="category-tag">{c}</span>
                    ))}
                  </div>
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-price">₹{p.price.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {quickView && (
        <QuickViewModal product={quickView} onClose={() => setQuickView(null)} />
      )}
    </main>
  )
}

export default CatalogPage


