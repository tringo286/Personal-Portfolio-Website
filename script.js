// Hamburger menu
function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu-links');
    const icon = document.querySelector('.hamburger-menu-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// Dark modoe
function darkModetoggle() {    
    document.body.classList.toggle('dark-mode');   
}

// Carousel with bullet navigation
let currentSlide = 0;

function createBullets() {
    const slides = document.querySelectorAll('#projects .detail-container');
    const bulletNav = document.querySelector('.bullet-nav');
    bulletNav.innerHTML = ''; // Clear existing bullets

    slides.forEach((slide, index) => {
        const bullet = document.createElement('span');
        bullet.classList.add('bullet');
        if (index === currentSlide) {
            bullet.classList.add('active');
        }
        bullet.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
        bulletNav.appendChild(bullet);
    });
}

function showSlide(index) {
    const slides = document.querySelectorAll('#projects .detail-container'); 
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
    
    const bullets = document.querySelectorAll('.bullet');
    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('#projects .detail-container'); 
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    const slides = document.querySelectorAll('#projects .detail-container'); 
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

createBullets();
showSlide(currentSlide);

// Typing text 
const typingText = document.querySelector('.typing-text');
const textArray = ["Frontend Developer", "Software Engineer"];
let arrayIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < textArray[arrayIndex].length) {
        typingText.innerHTML += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 300);
    } else {
        setTimeout(eraseText, 2000);
    }
}

function eraseText() {
    if (charIndex > 0) {
        typingText.innerHTML = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 200);
    } else {
        arrayIndex = (arrayIndex + 1) % textArray.length;
        setTimeout(typeText, 500);
    }
}

typeText();

