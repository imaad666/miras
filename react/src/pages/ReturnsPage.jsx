import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function ReturnsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="returns-page">
      <div className="returns-intro">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">Returns &amp; Exchanges</span>
          </nav>
        </div>
        <div className="returns-container">
          <h1 className="returns-title">Returns & Exchanges</h1>
        </div>
      </div>

      <section className="returns-flow">
        <div className="returns-container">
          <div className="flow-track" aria-label="Returns process">
            <div className="flow-step">
              <img className="flow-icon" src="/assets/return-page-icons/return-request.png" alt="Return Request" />
              <div className="flow-label">Return Request</div>
            </div>
            <div className="flow-arrow" aria-hidden="true" />
            <div className="flow-step">
              <img className="flow-icon" src="/assets/return-page-icons/pickup.png" alt="Pickup" />
              <div className="flow-label">Pickup</div>
            </div>
            <div className="flow-arrow" aria-hidden="true" />
            <div className="flow-step">
              <img className="flow-icon" src="/assets/return-page-icons/delivered.png" alt="Delivered" />
              <div className="flow-label">Delivered</div>
            </div>
            <div className="flow-arrow" aria-hidden="true" />
            <div className="flow-step">
              <img className="flow-icon" src="/assets/return-page-icons/quality.png" alt="Quality Check" />
              <div className="flow-label">Quality Check</div>
            </div>
            <div className="flow-arrow" aria-hidden="true" />
            <div className="flow-step">
              <img className="flow-icon" src="/assets/return-page-icons/refund.png" alt="Refund" />
              <div className="flow-label">Refund</div>
            </div>
          </div>
        </div>
      </section>

      <section className="returns-news">
        <div className="returns-container">
          <div className="news-columns">
            <article className="news-article">
              <h2>Our Commitment</h2>
              <p>
                At Miras we aim to make every purchase a delight. If an item doesn&rsquo;t meet your expectations, we&rsquo;ll work with you to find a fair and easy resolution.
              </p>
            </article>

            <article className="news-article">
              <h2>Cancellations</h2>
              <p>
                You may cancel an order within 5 days of the order date. To request a cancellation, message us on WhatsApp/Phone:&nbsp;
                <a href="tel:+919682600183">+91-9682600183</a> or email <a href="mailto:contact@miras.com">contact@miras.com</a>. Please include your order number, full name, billing address, and a contact number so we can process your request quickly.
              </p>
            </article>

            <article className="news-article">
              <h2>Returns (When Eligible)</h2>
              <p>
                We only accept returns in certain cases. If you believe your order qualifies for a return, contact us within 5 days of delivery at&nbsp;
                <a href="tel:+919682600183">+91-9682600183</a> (WhatsApp/Phone) or <a href="mailto:contact@miras.com">contact@miras.com</a>. Returned items must be:
              </p>
              <ul>
                <li>Unused and unworn</li>
                <li>In their original condition</li>
                <li>Returned with all original packaging and tags</li>
              </ul>
              <p>We&rsquo;ll confirm whether your item is eligible and provide next steps.</p>
            </article>

            <article className="news-article">
              <h2>Refunds (When Eligible)</h2>
              <p>
                Refund requests should be made within 5 days of receiving the order via <a href="tel:+919682600183">+91-9682600183</a> or
                <a href="mailto:contact@miras.com"> contact@miras.com</a>. Approved refunds will be issued to the original payment method and typically take up to two business weeks to process. Shipping charges are non-refundable.
              </p>
            </article>

            <article className="news-article">
              <h2>Alterations &amp; After-Sale Services</h2>
              <p>
                We offer alteration services for purchases for up to 10 business days from the purchase date. For international orders, please plan alterations carefully — the recipient is responsible for any return shipping costs. To request alterations, contact us on
                <a href="tel:+919682600183"> +91-9682600183</a> (WhatsApp/Phone) or visit our store.
              </p>
            </article>

            <article className="news-article">
              <h2>Exchanges</h2>
              <p>
                If an item is defective or damaged due to manufacturing, we&rsquo;ll exchange it for the same product where possible. To initiate an exchange, reach out to <a href="tel:+919682600183">+91-9682600183</a> or <a href="mailto:contact@miras.com">contact@miras.com</a> with your order details and a description (and photos, if applicable) of the issue.
              </p>
            </article>

            <article className="news-article">
              <h2>Where to Send Items</h2>
              <p>If you need to ship an item back or send an exchange, use the following address:</p>
              <address>
                Miras<br />
                Srinagar, Jammu and Kashmir
              </address>
              <p>(Please include your order number and contact details inside the package.)</p>
            </article>

            <article className="news-article">
              <h2>Contact</h2>
              <p>Phone / WhatsApp: <a href="tel:+919682600183">+91-9682600183</a></p>
              <p>Media &amp; general inquiries: <a href="mailto:contact@miras.com">contact@miras.com</a></p>
            </article>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ReturnsPage
