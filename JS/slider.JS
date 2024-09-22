//codigo del slider de los comentarios
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
let currentIndex = 0;
const slideInterval = 10000;

function moveToNextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

let autoSlide = setInterval(moveToNextSlide, slideInterval);

track.addEventListener('mouseenter', () => {
    clearInterval(autoSlide);
});

track.addEventListener('mouseleave', () => {
    autoSlide = setInterval(moveToNextSlide, slideInterval);
});
