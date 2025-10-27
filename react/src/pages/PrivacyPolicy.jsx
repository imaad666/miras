import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="policy-page">
      <div className="policy-intro">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Privacy Policy</span>
          </nav>
        </div>
        <div className="policy-container">
          <h1 className="policy-title">Privacy Policy</h1>
          <p className="policy-updated">Last Updated: October 2025</p>
        </div>
      </div>

      <section className="policy-news">
        <div className="policy-container">
          <div className="policy-columns">
            <article className="policy-article">
              <p>
                At Miras, your privacy matters to us. We value the trust you place in us and are committed to protecting your personal information.
                This policy explains how we collect, use, and safeguard your data when you interact with us online or in-store.
              </p>
            </article>

            <article className="policy-article">
              <h2>1. Information We Collect</h2>
              <p>We may collect the following details when you shop or contact us:</p>
              <ul>
                <li>Name, phone number, email address, and billing/shipping details</li>
                <li>Payment-related information (processed securely through trusted payment gateways)</li>
                <li>Device and browsing information (like IP address) to improve your shopping experience</li>
              </ul>
              <p>We do not store your card details or share your data for marketing without your consent.</p>
            </article>

            <article className="policy-article">
              <h2>2. How We Use Your Information</h2>
              <p>Your information is used to:</p>
              <ul>
                <li>Process and deliver your orders</li>
                <li>Provide customer support and updates</li>
                <li>Improve our website and services</li>
                <li>Send relevant updates or offers (only if you choose to receive them)</li>
              </ul>
              <p>You can opt out of promotional messages anytime by contacting us.</p>
            </article>

            <article className="policy-article">
              <h2>3. Sharing Your Information</h2>
              <p>We never sell your data. We may share limited details only with:</p>
              <ul>
                <li>Trusted partners (e.g., shipping and payment providers) to fulfill your order</li>
                <li>Legal authorities if required by law</li>
              </ul>
              <p>All our partners follow strict confidentiality and data protection standards.</p>
            </article>

            <article className="policy-article">
              <h2>4. Data Security</h2>
              <p>
                We use industry-standard security measures to protect your information from unauthorized access or misuse. If you notice any suspicious
                activity, please inform us immediately.
              </p>
            </article>

            <article className="policy-article">
              <h2>5. Cookies</h2>
              <p>
                Our website may use cookies to enhance user experience. You can disable cookies through your browser, but some features may not work as
                intended.
              </p>
            </article>

            <article className="policy-article">
              <h2>6. Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy occasionally. Any changes will be posted on this page with an updated date.
              </p>
            </article>

            <article className="policy-article">
              <h2>7. Contact Us</h2>
              <address>
                Miras<br />
                Srinagar, Jammu and Kashmir<br />
                Phone/WhatsApp: <a href="tel:+919682600183">+91-9682600183</a><br />
                Email: <a href="mailto:contact@miras.com">contact@miras.com</a>
              </address>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PrivacyPolicy


