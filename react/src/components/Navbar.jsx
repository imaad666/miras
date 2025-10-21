import { useState, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const spanStyles = useMemo(() => {
    if (!isMenuOpen) {
      return [{}, {}, {}]
    }
    return [
      { transform: 'rotate(45deg) translate(0, 7px)' },
      { opacity: 0 },
      { transform: 'rotate(-45deg) translate(0, -7px)' },
    ]
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} onClick={closeMenu}>
            <h1>MIRAS</h1>
          </Link>
        </div>
        <nav className="navbar-nav">
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <Link to="/catalog" onClick={closeMenu} aria-current={location.pathname === '/catalog' ? 'page' : undefined}>Shop</Link>
            </li>
            <li>
              <a href="#collections" onClick={closeMenu}>Collections</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
          </ul>
        </nav>
        <div className="navbar-icons">
          <button className="icon-btn wishlist-btn" aria-label="Wishlist">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/>
            </svg>
          </button>
          <button className="icon-btn cart-btn" aria-label="Shopping Cart">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
            </svg>
          </button>
          <button className="icon-btn account-btn" aria-label="Account">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
            </svg>
          </button>
        </div>
        <div className="mobile-menu-toggle" onClick={() => setIsMenuOpen(v => !v)} role="button" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
          <span style={spanStyles[0]}></span>
          <span style={spanStyles[1]}></span>
          <span style={spanStyles[2]}></span>
        </div>
      </div>
    </header>
  )
}

export default Navbar


