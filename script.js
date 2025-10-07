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
    
    // Add scroll reveal animation for future sections
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll (for future sections)
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

// Video carousel functionality
const carouselVideos = document.querySelectorAll('.carousel-video');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentVideoIndex = 0;

function showVideo(index) {
    console.log(`Switching to video ${index + 1}`);

    carouselVideos.forEach((video, i) => {
        video.classList.remove('active');
        video.pause();
        // ❌ don't reset every video
        if (i !== index) {
            video.currentTime = 0; // reset only non-active videos
        }
    });

    const targetVideo = carouselVideos[index];

    // ensure preload + load
    if (targetVideo.preload === 'none') {
        targetVideo.preload = 'metadata';
        targetVideo.load();
    }

    targetVideo.classList.add('active');
    targetVideo.play(); // ✅ actually start playing active video
    console.log(`Video ${index + 1} is now active`);
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % carouselVideos.length;
    showVideo(currentVideoIndex);
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + carouselVideos.length) % carouselVideos.length;
    showVideo(currentVideoIndex);
}

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevVideo);
    nextBtn.addEventListener('click', nextVideo);
}

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') prevVideo();
    else if (e.key === 'ArrowRight') nextVideo();
});

// Touch/swipe support
let touchStartX = 0;
let touchEndX = 0;
const carouselFrame = document.querySelector('.carousel-frame');

if (carouselFrame) {
    carouselFrame.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    carouselFrame.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) nextVideo(); // left swipe
            else prevVideo();          // right swipe
        }
    }
    // Make the first video play by default
window.addEventListener('DOMContentLoaded', () => {
    if (carouselVideos.length > 0) {
        carouselVideos[0].classList.add('active');
        carouselVideos[0].play();
    }
});

}
});