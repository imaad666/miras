// Catalog Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize catalog functionality
    initCatalogControls();
    initProductInteractions();
    initFilterPanel();
    initWishlistFunctionality();
});

// Catalog Controls Functionality
function initCatalogControls() {
    const showSelect = document.querySelector('.control-group:nth-child(1) .control-select');
    const viewSelect = document.querySelector('.control-group:nth-child(2) .control-select');
    const sortSelect = document.querySelector('.control-group:nth-child(3) .control-select');
    const productsContainer = document.getElementById('products-container');
    
    // Show items per page
    if (showSelect) {
        showSelect.addEventListener('change', function() {
            const itemsPerPage = parseInt(this.value);
            console.log(`Show ${itemsPerPage} items per page`);
            // Here you would typically make an API call to fetch more products
            // For now, we'll just log the change
        });
    }
    
    // Change grid view
    if (viewSelect) {
        viewSelect.addEventListener('change', function() {
            const columns = parseInt(this.value);
            console.log('View select changed to:', columns);
            updateGridLayout(columns);
        });
        
        console.log('View select event listener attached');
    } else {
        console.error('View select element not found');
    }
    
    // Sort products
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            const sortBy = this.value;
            sortProducts(sortBy);
        });
    }
}

// Update grid layout based on selected columns
function updateGridLayout(columns) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    // Remove existing column classes
    productsContainer.classList.remove('grid-2', 'grid-3', 'grid-4');
    
    // Add new column class
    productsContainer.classList.add(`grid-${columns}`);
    
    // Add smooth transition effect
    productsContainer.style.opacity = '0.7';
    setTimeout(() => {
        productsContainer.style.opacity = '1';
    }, 150);
    
    console.log(`Grid layout updated to ${columns} columns`);
}

// Sort products based on selected criteria
function sortProducts(sortBy) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;
    
    const products = Array.from(productsContainer.children);
    
    products.sort((a, b) => {
        switch (sortBy) {
            case 'price-low':
                const priceA = parseFloat(a.querySelector('.product-price').textContent.replace(/[₹,]/g, ''));
                const priceB = parseFloat(b.querySelector('.product-price').textContent.replace(/[₹,]/g, ''));
                return priceA - priceB;
                
            case 'price-high':
                const priceAHigh = parseFloat(a.querySelector('.product-price').textContent.replace(/[₹,]/g, ''));
                const priceBHigh = parseFloat(b.querySelector('.product-price').textContent.replace(/[₹,]/g, ''));
                return priceBHigh - priceAHigh;
                
            case 'name':
                const nameA = a.querySelector('.product-name').textContent.toLowerCase();
                const nameB = b.querySelector('.product-name').textContent.toLowerCase();
                return nameA.localeCompare(nameB);
                
            case 'latest':
            default:
                // For latest, we'll keep the original order
                return 0;
        }
    });
    
    // Re-append sorted products
    products.forEach(product => productsContainer.appendChild(product));
    
    // Add smooth transition effect
    productsContainer.style.opacity = '0.7';
    setTimeout(() => {
        productsContainer.style.opacity = '1';
    }, 300);
}

// Product Interactions
function initProductInteractions() {
    // Quick view functionality
    const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    quickViewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            const productPrice = productCard.querySelector('.product-price').textContent;
            
            showQuickViewModal(productName, productPrice);
        });
    });
    
    // Product card click to navigate to product page
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't navigate if clicking on overlay buttons
            if (e.target.closest('.product-overlay')) return;
            
            const productName = this.querySelector('.product-name').textContent;
            console.log(`Navigate to product: ${productName}`);
            // Here you would typically navigate to the product detail page
            // window.location.href = `/product/${productSlug}`;
        });
    });
}

// Show quick view modal
function showQuickViewModal(productName, productPrice) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('quick-view-modal');
    if (!modal) {
        modal = createQuickViewModal();
        document.body.appendChild(modal);
    }
    
    // Update modal content
    modal.querySelector('.modal-product-name').textContent = productName;
    modal.querySelector('.modal-product-price').textContent = productPrice;
    
    // Show modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Create quick view modal
function createQuickViewModal() {
    const modal = document.createElement('div');
    modal.id = 'quick-view-modal';
    modal.className = 'quick-view-modal';
    modal.innerHTML = `
        <div class="modal-overlay"></div>
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="" alt="Product Image">
                </div>
                <div class="modal-info">
                    <h3 class="modal-product-name"></h3>
                    <p class="modal-product-price"></p>
                    <p class="modal-product-description">
                        Experience the elegance of traditional craftsmanship with this exquisite piece. 
                        Made with premium materials and intricate detailing.
                    </p>
                    <div class="modal-actions">
                        <button class="add-to-cart-btn">Add to Cart</button>
                        <button class="view-full-btn">View Full Details</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add modal styles
    const style = document.createElement('style');
    style.textContent = `
        .quick-view-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        
        .quick-view-modal.active {
            display: flex;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
        }
        
        .modal-content {
            position: relative;
            background: white;
            border-radius: 12px;
            max-width: 800px;
            width: 100%;
            max-height: 90vh;
            overflow-y: auto;
            animation: modalSlideIn 0.3s ease;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: translateY(-50px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 2rem;
            color: #666;
            cursor: pointer;
            z-index: 1;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.3s ease;
        }
        
        .modal-close:hover {
            background: #f0f0f0;
            color: #333;
        }
        
        .modal-body {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            padding: 2rem;
        }
        
        .modal-image img {
            width: 100%;
            height: 400px;
            object-fit: cover;
            border-radius: 8px;
        }
        
        .modal-info h3 {
            font-family: 'Tilda Sans', sans-serif;
            font-size: 1.5rem;
            font-weight: 600;
            color: #2C2C2C;
            margin-bottom: 1rem;
        }
        
        .modal-info .modal-product-price {
            font-family: 'Tilda Sans', sans-serif;
            font-size: 1.3rem;
            font-weight: 600;
            color: #2C2C2C;
            margin-bottom: 1rem;
        }
        
        .modal-product-description {
            font-family: 'Tilda Sans', sans-serif;
            color: #666;
            line-height: 1.6;
            margin-bottom: 2rem;
        }
        
        .modal-actions {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .add-to-cart-btn,
        .view-full-btn {
            font-family: 'Tilda Sans', sans-serif;
            font-size: 0.9rem;
            font-weight: 600;
            padding: 0.8rem 1.5rem;
            border: 2px solid #2C2C2C;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        
        .add-to-cart-btn {
            background: #2C2C2C;
            color: white;
        }
        
        .add-to-cart-btn:hover {
            background: white;
            color: #2C2C2C;
        }
        
        .view-full-btn {
            background: white;
            color: #2C2C2C;
        }
        
        .view-full-btn:hover {
            background: #2C2C2C;
            color: white;
        }
        
        @media (max-width: 768px) {
            .modal-body {
                grid-template-columns: 1fr;
                gap: 1rem;
                padding: 1rem;
            }
            
            .modal-image img {
                height: 300px;
            }
            
            .modal-actions {
                flex-direction: column;
            }
            
            .add-to-cart-btn,
            .view-full-btn {
                width: 100%;
                text-align: center;
            }
        }
    `;
    
    document.head.appendChild(style);
    
    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', closeModal);
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    return modal;
}

// Filter Panel Functionality
function initFilterPanel() {
    const filterBtn = document.querySelector('.filter-btn');
    const filterPanel = document.querySelector('.filter-panel');
    
    if (filterBtn && filterPanel) {
        filterBtn.addEventListener('click', function() {
            filterPanel.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Filter options
    const filterOptions = document.querySelectorAll('.filter-option');
    filterOptions.forEach(option => {
        option.addEventListener('click', function() {
            this.classList.toggle('active');
            applyFilters();
        });
    });
}

// Apply active filters
function applyFilters() {
    const activeFilters = document.querySelectorAll('.filter-option.active');
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        let shouldShow = true;
        
        // Check each active filter
        activeFilters.forEach(filter => {
            const filterValue = filter.textContent.toLowerCase();
            const productName = product.querySelector('.product-name').textContent.toLowerCase();
            const categories = Array.from(product.querySelectorAll('.category-tag')).map(tag => tag.textContent.toLowerCase());
            
            // Simple filter logic - you can make this more sophisticated
            if (!productName.includes(filterValue) && !categories.some(cat => cat.includes(filterValue))) {
                shouldShow = false;
            }
        });
        
        product.style.display = shouldShow ? 'block' : 'none';
    });
}

// Wishlist Functionality
function initWishlistFunctionality() {
    const wishlistBtns = document.querySelectorAll('.wishlist-btn-card');
    
    wishlistBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            this.classList.toggle('active');
            
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('.product-name').textContent;
            
            if (this.classList.contains('active')) {
                console.log(`Added ${productName} to wishlist`);
                // Here you would typically make an API call to add to wishlist
                showWishlistNotification(`${productName} added to wishlist`);
            } else {
                console.log(`Removed ${productName} from wishlist`);
                // Here you would typically make an API call to remove from wishlist
                showWishlistNotification(`${productName} removed from wishlist`);
            }
        });
    });
}

// Show wishlist notification
function showWishlistNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'wishlist-notification';
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 2rem;
        background: #2C2C2C;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-family: 'Tilda Sans', sans-serif;
        font-size: 0.9rem;
        font-weight: 500;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    // Add animation keyframes if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
            
            @keyframes slideOutRight {
                from {
                    transform: translateX(0);
                    opacity: 1;
                }
                to {
                    transform: translateX(100%);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Utility function to debounce function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add scroll reveal animation for product cards
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.classList.add('scroll-reveal');
        observer.observe(card);
    });
}

// Initialize scroll reveal when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initScrollReveal();
});
