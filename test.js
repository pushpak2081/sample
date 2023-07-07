document.addEventListener("DOMContentLoaded", function() {
    const slide = document.querySelector(".carousel-slide");
    const images = slide.getElementsByTagName("img");
    let currentSlide = 0;
    function showSlide() {
      for (let i = 0; i < images.length; i++) {
        images[i].style.display = "none";
      }
      images[currentSlide].style.display = "block";
    }
    function slideToNext() {
      currentSlide = (currentSlide + 1) % images.length;
      showSlide();
    }
    function startSlideShow() {
      timer = setInterval(slideToNext, 2000); // Slide every 2 seconds
    }
    showSlide();
    startSlideShow();
  });