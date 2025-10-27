import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ShippingDelivery() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="shipping-page">
      <div className="shipping-intro">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Shipping &amp; Delivery</span>
          </nav>
        </div>
        <div className="shipping-container">
          <h1 className="shipping-title">Shipping &amp; Delivery Policy</h1>
        </div>
      </div>

      <section className="shipping-news">
        <div className="shipping-container">
          <div className="shipping-columns">
            <article className="shipping-article">
              <h2>Shipping Timelines</h2>
              <p>Our delivery time depends on the type of product you order.</p>
              <ul>
                <li>All clothing items are shipped within 3 to 15 working days, depending on availability and design.</li>
                <li>(Exact timelines are mentioned in each product’s description section.)</li>
              </ul>
              <p>
                Please note that working days are Monday to Friday — weekends and public holidays are excluded from shipping timelines.
                Once your order is dispatched, you’ll receive an email with tracking details.
              </p>
              <p className="shipping-note">⚠️ Important: Please do not accept any parcel that appears tampered or damaged. Miras cannot be held responsible for such packages once accepted.</p>
            </article>

            <article className="shipping-article">
              <h2>Reverse Pickup for Exchanges</h2>
              <p>
                We provide reverse pickup for eligible exchange requests within India. In certain locations where this service isn’t available,
                you may be asked to ship the product back to us at your own cost and risk.
              </p>
            </article>

            <article className="shipping-article">
              <h2>Order Tracking</h2>
              <p>
                Once your order leaves our warehouse, you’ll receive a WhatsApp notification containing the tracking details and a link to monitor your shipment.
              </p>
            </article>

            <article className="shipping-article">
              <h2>Shipping Charges</h2>
              <p>Currently, shipping is free on all orders within India.</p>
            </article>

            <article className="shipping-article">
              <h2>Eco-Friendly Packaging</h2>
              <p>
                All Miras orders are packaged responsibly using paper-based materials — we avoid plastic wherever possible to minimize our environmental impact.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ShippingDelivery


