function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">MIRAS</h3>
            <p className="footer-tagline">Where tradition whispers luxury</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Shop</h4>
              <ul>
                <li><a href="#collections">Collections</a></li>
                <li><a href="#new-arrivals">New Arrivals</a></li>
                <li><a href="#bestsellers">Bestsellers</a></li>
                <li><a href="#sale">Sale</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>About</h4>
              <ul>
                <li><a href="#our-story">Our Story</a></li>
                <li><a href="#heritage">Heritage</a></li>
                <li><a href="#craftsmanship">Craftsmanship</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#shipping">Shipping Info</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#size-guide">Size Guide</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Connect</h4>
              <ul>
                <li><a href="#instagram">Instagram</a></li>
                <li><a href="#facebook">Facebook</a></li>
                <li><a href="#twitter">Twitter</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 MIRAS. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

