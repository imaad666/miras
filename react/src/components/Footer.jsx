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
              </ul>
            </div>
            <div className="footer-column">
              <h4>Info</h4>
              <ul>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#returns-exchanges">Returns and Exchanges</a></li>
                <li><a href="#shipping-delivery">Shipping & Delivery</a></li>
                <li><a href="#terms-conditions">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Follow Us</h4>
              <div className="footer-socials">
                <a href="https://www.instagram.com/wearmiras/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                </a>
                <a href="https://www.facebook.com/Wearmiras?mibextid=wwXIfr&rdid=wVEXUY09wLhfRmiK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17BxHf8bxt%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.87h2.76l-.44 2.9h-2.32v7.03C18.34 21.24 22 17.08 22 12.06Z"/></svg>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h4>Store Location</h4>
              <ul>
                <li>
                  <address style={{ fontStyle: 'normal' }}>
                    Srinagar, Jammu and Kashmir
                  </address>
                </li>
                <li><a href="tel:+919682600183">Phone/WhatsApp: +91-9682600183</a></li>
                <li><a href="mailto:contact@miras.com">Media Queries: contact@miras.com</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2025 MIRAS. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

