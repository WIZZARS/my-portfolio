// Navbar scroll effect
const navbar = document.querySelector('nav');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (window.scrollY > heroSection.offsetHeight * 0.2) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - navbar.offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for section animations
const sections = document.querySelectorAll('section');
const sectionObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    sectionObserver.observe(section);
});

// Skills hover effect
const skillItems = document.querySelectorAll('.skills-grid div');

skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});