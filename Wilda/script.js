let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slider');
  const slideWidth = document.querySelector('.slider img').clientWidth;
  slides.style.transform = `translateX(-${slideWidth * index}px)`;
}

function nextSlide() {
  const slides = document.querySelectorAll('.slider img');
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll('.slider img');
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Initially show the first slide
showSlide(slideIndex);