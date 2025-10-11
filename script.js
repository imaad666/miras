// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.transform = navLinks.classList.contains('active') 
                    ? `rotate(${index === 0 ? 45 : index === 2 ? -45 : 0}deg) translate(${index === 1 ? '0, 0' : index === 0 ? '0, 7px' : '0, -7px'})`
                    : 'none';
                    
                    
                    span.style.opacity = index === 1 && navLinks.classList.contains('active') ? '0' : '1';
                
            });
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinkItems = document.querySelectorAll('.nav-links a');
    navLinkItems.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            
            // Reset hamburger menu
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = 'none';
                span.style.opacity = '1';
            });
        });
    });
    
    // Hero section animations
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        // Add loaded class after a short delay to trigger animations
        setTimeout(() => {
            heroContent.classList.add('loaded');
        }, 500);
    }
    
    // Hero Carousel Functionality
    const heroCarousel = document.querySelector('.hero-carousel');
    const heroSlides = document.querySelectorAll('.hero-slide');
    const heroDots = document.querySelectorAll('.hero-dots .dot');
    let currentSlide = 0;
    let heroCarouselInterval;
    
    function showHeroSlide(index) {
        // Update carousel position for sliding effect
        const offset = -index * 100;
        heroCarousel.style.transform = `translateX(${offset}%)`;
        
        // Update active dot
        heroDots.forEach(dot => dot.classList.remove('active'));
        heroDots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextHeroSlide() {
        currentSlide = (currentSlide + 1) % heroSlides.length;
        showHeroSlide(currentSlide);
    }
    
    // Auto-rotate carousel every 5 seconds
    function startHeroCarousel() {
        heroCarouselInterval = setInterval(nextHeroSlide, 5000);
    }
    
    function stopHeroCarousel() {
        clearInterval(heroCarouselInterval);
    }
    
    // Dot click functionality
    heroDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopHeroCarousel();
            showHeroSlide(index);
            startHeroCarousel(); // Restart auto-rotation after manual click
        });
    });
    
    // Start the carousel if slides exist
    if (heroSlides.length > 1) {
        startHeroCarousel();
    }
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', function() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            navbar.style.background = 'rgba(92, 63, 43, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(92, 63, 43, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Scroll Reveal Animation
    const scrollRevealOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const scrollRevealObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optional: stop observing after revealing (one-time animation)
                scrollRevealObserver.unobserve(entry.target);
            }
        });
    }, scrollRevealOptions);
    
    // Observe all scroll-reveal elements
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-stagger');
    scrollRevealElements.forEach(el => {
        scrollRevealObserver.observe(el);
    });
});