function QuickViewModal({ product, onClose }) {
  return (
    <div className="quick-view-modal active" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <div className="modal-overlay" onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)' }}></div>
      <div className="modal-content" role="dialog" aria-modal="true" style={{ position: 'relative', background: 'white', borderRadius: 12, maxWidth: 800, width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
        <button className="modal-close" aria-label="Close" onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', fontSize: '2rem', color: '#666', cursor: 'pointer', width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>&times;</button>
        <div className="modal-body" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', padding: '2rem' }}>
          <div className="modal-image">
            <img src={product.img} alt={product.name} style={{ width: '100%', height: 400, objectFit: 'cover', borderRadius: 8 }} />
          </div>
          <div className="modal-info">
            <h3 className="modal-product-name" style={{ fontSize: '1.5rem', fontWeight: 600, color: '#2C2C2C', marginBottom: '1rem' }}>{product.name}</h3>
            <p className="modal-product-price" style={{ fontSize: '1.3rem', fontWeight: 600, color: '#2C2C2C', marginBottom: '1rem' }}>₹{product.price.toLocaleString('en-IN')}</p>
            <p className="modal-product-description" style={{ color: '#666', lineHeight: 1.6, marginBottom: '2rem' }}>
              Experience the elegance of traditional craftsmanship with this exquisite piece. Made with premium materials and intricate detailing.
            </p>
            <div className="modal-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button className="add-to-cart-btn" style={{ fontWeight: 600, padding: '0.8rem 1.5rem', border: '2px solid #2C2C2C', borderRadius: 4, cursor: 'pointer', background: '#2C2C2C', color: 'white' }}>Add to Cart</button>
              <button className="view-full-btn" style={{ fontWeight: 600, padding: '0.8rem 1.5rem', border: '2px solid #2C2C2C', borderRadius: 4, cursor: 'pointer', background: 'white', color: '#2C2C2C' }}>View Full Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuickViewModal


