// Hamburger menu
function toggleMenu() {
    const menu = document.querySelector('.hamburger-menu-links');
    const icon = document.querySelector('.hamburger-menu-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function darkModetoggle() {
    const element = document.body;


    
}

// Carousel to display projects 
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('#projects .detail-container'); 
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
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

showSlide(currentSlide);

//Typing effect
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

