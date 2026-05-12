// =========================
// MOBILE MENU
// =========================

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger?.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        hamburger.classList.remove("open");
    });
});


// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    });

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if(!entry.isIntersecting) return;

        entry.target.classList.add("show");
        observer.unobserve(entry.target);

    });

}, {
    threshold: 0.15
});

faders.forEach((fader, index) => {

    fader.style.transitionDelay = `${index * 100}ms`;
    appearOnScroll.observe(fader);

});


// =========================
// NAVBAR EFFECT
// =========================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


// =========================
// ACTIVE NAV LINK
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(scrollY >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active-link");
        }

    });

});


// =========================
// PREMIUM TOAST NOTIFICATION
// =========================

function showToast(message){

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.innerText = message;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("show");
    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {
            toast.remove();
        }, 300);

    }, 3000);

}


// =========================
// BOOKING FORM
// =========================

const bookingForm = document.getElementById("bookingForm");

bookingForm?.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;

    showToast(`Thank you ${name}! ${service} booked successfully.`);

    bookingForm.reset();

});


// =========================
// PARTNER FORM
// =========================

const partnerForm = document.getElementById("partnerForm");

partnerForm?.addEventListener("submit", function(e){

    e.preventDefault();

    showToast("Thank you for joining Sevigo!");

    partnerForm.reset();

});


// =========================
// TESTIMONIAL ANIMATION
// =========================

const testimonialCards = document.querySelectorAll(".testimonial-card");

const testimonialObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

testimonialCards.forEach(card => {
    testimonialObserver.observe(card);
});


// =========================
// DARK MODE
// =========================

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

}

themeToggle?.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("dark-mode")){

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

        localStorage.setItem("theme", "dark");

    }else{

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

        localStorage.setItem("theme", "light");
    }

});


// =========================
// POPUP SYSTEM
// =========================

function openPopup(id){

    const popup = document.getElementById(id);

    if(popup){

        popup.classList.add("show-popup");
        popup.style.display = "flex";

        document.body.style.overflow = "hidden";
    }

}

function closePopup(id){

    const popup = document.getElementById(id);

    if(popup){

        popup.classList.remove("show-popup");

        setTimeout(() => {
            popup.style.display = "none";
        }, 300);

        document.body.style.overflow = "auto";
    }

}


// =========================
// ESC CLOSE
// =========================

document.addEventListener("keydown", (e) => {

    if(e.key === "Escape"){

        document.querySelectorAll(".popup").forEach(popup => {

            popup.style.display = "none";

        });

        document.body.style.overflow = "auto";
    }

});


// =========================
// CLOSE POPUP OUTSIDE CLICK
// =========================

document.querySelectorAll(".popup").forEach(popup => {

    popup.addEventListener("click", (e) => {

        if(e.target === popup){

            popup.style.display = "none";
            document.body.style.overflow = "auto";
        }

    });

});


// =========================
// BUTTON RIPPLE EFFECT
// =========================

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(e){

        const ripple = document.createElement("span");

        ripple.classList.add("ripple");

        const rect = button.getBoundingClientRect();

        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


// =========================
// PAGE LOADER
// =========================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        loader.classList.add("loader-hide");

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);

    }

});