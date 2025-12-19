// ===== REGISTER GSAP =====
gsap.registerPlugin(ScrollTrigger);

// ===== SMOOTH SCROLL NAVBAR =====
document.querySelectorAll('.navbar nav a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

// ===== NAVBAR EFFECT =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
        navbar.style.background = 'rgba(0,0,0,0.85)';
        navbar.style.padding = '15px 60px';
    } else {
        navbar.style.background = 'rgba(0,0,0,0.6)';
        navbar.style.padding = '20px 60px';
    }
});

// ===== HERO TEXT ANIMATION =====
gsap.from(".hero-content h2", {
    opacity: 0,
    y: 50,
    duration: 1.5,
    ease: "power4.out"
});

gsap.from(".hero-content p", {
    opacity: 0,
    y: 30,
    delay: 0.5,
    duration: 1.2,
    ease: "power4.out"
});

// ===== ABOUT =====
gsap.from(".about h2, .about p", {
    scrollTrigger: {
        trigger: ".about",
        start: "top 80%"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    stagger: 0.2
});

// ===== MENU ITEMS =====
gsap.from(".menu-item", {
    scrollTrigger: {
        trigger: ".menu-grid",
        start: "top 80%"
    },
    opacity: 0,
    y: 60,
    duration: 1.2,
    stagger: 0.2
});

// ===== EXPERIENCE SECTION =====
gsap.from(".experience-text", {
    scrollTrigger: {
        trigger: ".experience",
        start: "top 75%"
    },
    opacity: 0,
    x: -60,
    duration: 1.2
});

gsap.from(".experience-image", {
    scrollTrigger: {
        trigger: ".experience",
        start: "top 75%"
    },
    opacity: 0,
    x: 60,
    duration: 1.2
});

// ===== RESERVATION =====
gsap.from(".reservation h2, .reservation form", {
    scrollTrigger: {
        trigger: ".reservation",
        start: "top 80%"
    },
    opacity: 0,
    y: 50,
    duration: 1.2,
    stagger: 0.2
});
