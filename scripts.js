let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slides img');
const totalSlides = slides.length;

function updateSlides() {
    // Determine the index of the central image
    const middleIndex = Math.floor((slides.length - 1) / 2);
    slides.forEach((slide, index) => {
        let position = index - slideIndex;
        
        // Adjust position for looping
        if (position < -middleIndex) position += totalSlides;
        if (position > middleIndex) position -= totalSlides;

        // Update transform and opacity
        slide.style.transform = `translateX(${position * 100}%)`;
        slide.style.opacity = position === 0 ? 1 : 0.5; // Central image full opacity, others less

        // Add 'active' class to the central image
        if (position === 0) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex >= totalSlides) slideIndex = 0;
    if (slideIndex < 0) slideIndex = totalSlides - 1;
    updateSlides();
}

// Initial setup
updateSlides();

// Automatic scroll
setInterval(() => {
    moveSlide(1);
}, 3000); // Scrolls every 3 seconds
