import { useEffect, useMemo, useState } from 'react'
import QuickViewModal from '../shared/QuickViewModal'
import { Link } from 'react-router-dom'

const initialProducts = [
  {
    id: 'p1',
    name: 'Dark Blue Embroidered Pheran Farshi Salwar',
    price: 32500,
    img: '/assets/home_one.jpg',
    categories: ['FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'p2',
    name: 'Brown Tilla Embroidered Pheran Farshi Salwar Organza Mukaish Dupatta',
    price: 28800,
    img: '/assets/home_two.jpg',
    categories: ['AB SHERUN NIKKAH', 'FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
  },
  {
    id: 'p3',
    name: 'Green Tilla And Dabka Embroidered Kalidar Pheran Salwar Organza Mukaish Dupatta',
    price: 42000,
    img: '/assets/home_three.png',
    categories: ['AB SHERUN NIKKAH', 'FESTIVE WEAR', 'KHANDAR', 'SILK ROOTS', 'THE FESTIVE EDIT 2025/26'],
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
                <div className="product-image-container" onClick={() => setQuickView({ name: p.name, price: p.price, img: p.img })}>
                  <img src={p.img} alt={p.name} className="product-image" />
                  <div className="product-overlay">
                    <button className="quick-view-btn" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setQuickView({ name: p.name, price: p.price, img: p.img }) }}>Quick View</button>
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


