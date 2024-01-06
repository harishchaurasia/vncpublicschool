let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slides img');
const totalSlides = slides.length;

function updateSlides() {
    slides.forEach((slide, index) => {
        let position = index - slideIndex;

        // Continuous loop adjustment
        if (position < 0) position += totalSlides;

        // Update transform for continuous scrolling
        slide.style.transform = `translateX(${position * 100}%)`;
    });
}

function moveSlide() {
    slideIndex++;
    if (slideIndex === totalSlides) slideIndex = 0;
    updateSlides();
}

// Initial setup
updateSlides();

// Automatic scroll
setInterval(moveSlide, 3000); // Scrolls every 3 seconds
