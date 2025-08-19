// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Show/hide floating CTA based on scroll position
window.addEventListener('scroll', function() {
    const floatingCTA = document.querySelector('.floating-cta');
    const offerSection = document.querySelector('#oferta');
    
    if (window.innerWidth <= 768) {
        const offerSectionTop = offerSection.offsetTop;
        const scrollPosition = window.pageYOffset + window.innerHeight;
        
        if (scrollPosition < offerSectionTop) {
            floatingCTA.style.display = 'block';
        } else {
            floatingCTA.style.display = 'none';
        }
    }
});

// Animate elements on scroll
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

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.problem-item, .benefit-item, .solution-content, .offer-box');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Handle purchase button click
function handlePurchase() {
    // This is where you would integrate with your payment processor
    // For now, we'll show an alert
    alert('Redirecionando para o pagamento seguro...\n\nEm uma implementação real, aqui seria integrado com um processador de pagamentos como PayPal, Stripe, ou sistema local de pagamentos.');
    
    // Example of what you might do:
    // window.location.href = 'https://your-payment-processor.com/checkout?product=ebook&price=399';
}

// Add some interactive effects
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effect to problem items
    const problemItems = document.querySelectorAll('.problem-item');
    problemItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click tracking for analytics (placeholder)
    const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Here you would send analytics data
            console.log('CTA clicked:', this.textContent.trim());
        });
    });
});

// Simple form validation if you add a contact form later
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading state to buttons
function addLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Processando...';
    button.disabled = true;
    
    // Simulate processing time
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

