// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.experience-item, .education-item, .project-item, .skill-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
    
    // Header animations
    const logo = document.querySelector('.logo');
    const headerText = document.querySelector('header h1');
    const headerSubtext = document.querySelector('header p');
    
    setTimeout(() => {
        logo.style.animation = 'fadeIn 1s ease forwards';
    }, 200);
    
    setTimeout(() => {
        headerText.style.animation = 'slideIn 1s ease forwards';
    }, 400);
    
    setTimeout(() => {
        headerSubtext.style.animation = 'slideIn 1.2s ease forwards';
    }, 600);
});
