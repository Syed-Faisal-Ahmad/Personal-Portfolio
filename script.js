// ================================
// LOADER
// ================================

window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.5s ease";
    }, 1000);
});

// ================================
// AOS INITIALIZATION
// ================================

AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// ================================
// MOBILE MENU
// ================================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Close menu on link click

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");

        menuBtn.innerHTML = `
            <i class="fas fa-bars"></i>
        `;
    });
});

// ================================
// TYPING ANIMATION
// ================================

const typingElement = document.querySelector(".typing");

const texts = [
    "Full-Stack Developer",
    "Web Developer",
    "React.js Developer",
    "Modern Web Designer",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();

// ================================
// SCROLL PROGRESS BAR
// ================================

window.addEventListener("scroll", () => {

    const progressBar =
        document.getElementById("progress-bar");

    const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrollPosition =
        document.documentElement.scrollTop;

    const progress =
        (scrollPosition / totalHeight) * 100;

    progressBar.style.width = progress + "%";
});

// ================================
// BACK TO TOP BUTTON
// ================================

const backToTop =
    document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.style.display = "flex";
        backToTop.style.alignItems = "center";
        backToTop.style.justifyContent = "center";
    } else {
        backToTop.style.display = "none";
    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ================================
// COUNTER ANIMATION
// ================================

const counters =
    document.querySelectorAll(".counter");

const speed = 200;

const startCounter = () => {

    counters.forEach(counter => {

        const updateCounter = () => {

            const target =
                +counter.getAttribute("data-target");

            const count =
                +counter.innerText;

            const increment =
                target / speed;

            if (count < target) {

                counter.innerText =
                    Math.ceil(count + increment);

                setTimeout(updateCounter, 15);

            } else {

                counter.innerText = target;
            }
        };

        updateCounter();
    });
};

const statsSection =
    document.querySelector(".stats");

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounter();

                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.5
    });

observer.observe(statsSection);

// ================================
// HEADER SCROLL EFFECT
// ================================

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        header.style.background =
            "rgba(15,23,42,0.95)";

        header.style.boxShadow =
            "0 10px 20px rgba(0,0,0,0.25)";

    } else {

        header.style.background =
            "rgba(15,23,42,0.8)";

        header.style.boxShadow = "none";
    }

});

// ================================
// ACTIVE NAV LINK
// ================================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
            &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {
            link.classList.add("active");
        }
    });

});

// ================================
// SMOOTH REVEAL EFFECT
// ================================

const revealElements =
    document.querySelectorAll(
        ".skill-card, .service-card, .project-card, .info-card, .timeline-card"
    );

const revealObserver =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    }, {
        threshold: 0.1
    });

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform =
        "translateY(40px)";
    element.style.transition =
        "all 0.6s ease";

    revealObserver.observe(element);

});

// ================================
// CONTACT FORM DEMO
// ================================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you for your message! I will get back to you soon."
        );

        contactForm.reset();
    });

}

// ================================
// PARALLAX HERO EFFECT
// ================================

window.addEventListener("scroll", () => {

    const heroImage =
        document.querySelector(".hero-image");

    if (heroImage) {

        const value =
            window.scrollY * 0.08;

        heroImage.style.transform =
            `translateY(${value}px)`;
    }

});

// ================================
// CONSOLE MESSAGE
// ================================

console.log(`
======================================
Portfolio Website
Designed for Faisal Ahmad
Full-Stack Developer
======================================
`);