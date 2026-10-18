const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});


/* CLOSE MOBILE MENU */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   ANIMATED STATS
========================= */

const stats = document.querySelectorAll(".stat h2");

let statsStarted = false;

const statsObserver = new IntersectionObserver(
    (entries) => {

        if (entries[0].isIntersecting && !statsStarted) {

            statsStarted = true;

            stats.forEach(stat => {

                const target = Number(stat.dataset.target);

                let current = 0;

                const increment = target / 80;

                const counter = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        current = target;

                        clearInterval(counter);

                    }

                    stat.textContent =
                        Math.floor(current).toLocaleString() + "+";

                }, 20);

            });

        }

    },
    {
        threshold: 0.5
    }
);

statsObserver.observe(document.querySelector(".stats"));


/* =========================
   TESTIMONIAL SLIDER
========================= */

const testimonials = [
    {
        text: `"IRONCORE completely changed the way I approach fitness. The trainers actually care about your progress."`,
        name: "— Rahul Sharma"
    },
    {
        text: `"The atmosphere is incredible. I have become stronger, healthier and much more confident."`,
        name: "— Arjun Mehta"
    },
    {
        text: `"The personalized training program helped me stay consistent and finally reach my goals."`,
        name: "— Neha Kapoor"
    }
];

let testimonialIndex = 0;

const testimonialText =
    document.getElementById("testimonialText");

const testimonialName =
    document.getElementById("testimonialName");

function showTestimonial(index) {

    testimonialText.style.opacity = "0";

    setTimeout(() => {

        testimonialText.textContent =
            testimonials[index].text;

        testimonialName.textContent =
            testimonials[index].name;

        testimonialText.style.opacity = "1";

    }, 200);

}

document.getElementById("next").addEventListener("click", () => {

    testimonialIndex++;

    if (testimonialIndex >= testimonials.length) {
        testimonialIndex = 0;
    }

    showTestimonial(testimonialIndex);

});


document.getElementById("prev").addEventListener("click", () => {

    testimonialIndex--;

    if (testimonialIndex < 0) {
        testimonialIndex = testimonials.length - 1;
    }

    showTestimonial(testimonialIndex);

});


/* =========================
   HERO PARALLAX
========================= */

const heroImage = document.querySelector(".hero-image img");

window.addEventListener("mousemove", (e) => {

    if (window.innerWidth > 900) {

        const x = (window.innerWidth / 2 - e.clientX) / 100;

        const y = (window.innerHeight / 2 - e.clientY) / 100;

        heroImage.style.transform =
            `scale(1.03) translate(${x}px, ${y}px)`;

    }

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,5,5,0.95)";

    } else {

        navbar.style.background =
            "rgba(8,8,8,0.75)";

    }

});