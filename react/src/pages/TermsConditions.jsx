import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function TermsConditions() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="terms-page">
      <div className="terms-intro">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Terms &amp; Conditions</span>
          </nav>
        </div>
        <div className="terms-container">
          <h1 className="terms-title">Terms &amp; Conditions</h1>
          <p className="terms-updated">Last Updated: October 2025</p>
        </div>
      </div>

      <section className="terms-news">
        <div className="terms-container">
          <div className="terms-columns">
            <article className="terms-article">
              <p>
                Welcome to Miras. By using our website or placing an order, you agree to the following Terms &amp; Conditions. Please read them carefully
                before shopping with us.
              </p>
            </article>

            <article className="terms-article">
              <h2>1. General Terms</h2>
              <p>
                By visiting or purchasing from Miras you agree to comply with these Terms &amp; Conditions. Miras may update or modify these terms at any
                time, and continued use of the website means you accept the latest version.
              </p>
              <p>
                All products and information on this site are an invitation to offer. Once you place an order, it becomes your offer to purchase, which
                Miras may accept or decline. An order is considered confirmed only when it is dispatched and you receive a confirmation email or message.
              </p>
            </article>

            <article className="terms-article">
              <h2>2. Account Responsibility</h2>
              <p>
                When creating an account, you must provide accurate and complete details. You are responsible for keeping your account credentials
                confidential and for all activities that occur under your account. If you suspect unauthorized access, please contact us immediately at
                <a href="mailto:contact@miras.com"> contact@miras.com</a>.
              </p>
            </article>

            <article className="terms-article">
              <h2>3. Pricing and Payment</h2>
              <p>
                We strive to ensure all prices are accurate. In rare cases of typographical or pricing errors, we may cancel or modify your order and
                notify you accordingly. Payments are processed securely through trusted payment gateways. Miras does not store your credit or debit card
                information.
              </p>
            </article>

            <article className="terms-article">
              <h2>4. Cancellations</h2>
              <p>
                Miras reserves the right to cancel any order due to product unavailability, pricing errors, or payment verification issues. If payment has
                already been made, the full amount will be refunded to your original payment method.
              </p>
            </article>

            <article className="terms-article">
              <h2>5. User Conduct</h2>
              <p>By using this website, you agree not to:</p>
              <ul>
                <li>Upload, post, or share unlawful, abusive, or misleading content</li>
                <li>Interfere with other users’ access or disrupt site functionality</li>
                <li>Attempt to hack, damage, or misuse any part of the site</li>
              </ul>
            </article>

            <article className="terms-article">
              <h2>6. Intellectual Property</h2>
              <p>
                All images, designs, text, and content are the exclusive property of Miras. You may not copy, reproduce, distribute, or use any materials
                from this website for commercial purposes without prior written permission.
              </p>
            </article>

            <article className="terms-article">
              <h2>7. Reviews and Feedback</h2>
              <p>
                Any feedback, suggestions, or reviews submitted to Miras may be used for promotional or service improvement purposes. By submitting them,
                you grant Miras the right to use the content without further notice or compensation.
              </p>
            </article>

            <article className="terms-article">
              <h2>8. Limitation of Liability</h2>
              <p>
                Miras is not responsible for any indirect, incidental, or consequential damages arising from the use or inability to use our website or
                products. Our total liability, if any, will not exceed the value of the product purchased.
              </p>
            </article>

            <article className="terms-article">
              <h2>9. Force Majeure</h2>
              <p>
                Miras will not be held responsible for delays or failure to deliver due to circumstances beyond our control — including natural disasters,
                strikes, transport delays, internet outages, or unforeseen events. This includes late deliveries caused by such situations.
              </p>
            </article>

            <article className="terms-article">
              <h2>10. Governing Law</h2>
              <p>
                These Terms &amp; Conditions are governed by the laws of India, and any disputes will be subject to the jurisdiction of the courts in Srinagar,
                Jammu and Kashmir.
              </p>
            </article>

            <article className="terms-article">
              <h2>11. Contact Us</h2>
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

export default TermsConditions


