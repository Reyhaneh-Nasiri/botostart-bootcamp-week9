const carouselItems = document.querySelectorAll(".carousel-item");
const carousel = document.querySelector(".carousel");
let currentIndex = 0;
const prevButton = document.querySelector(".carouselPrev");
const nextButton = document.querySelector(".carouselNext");
const showSlide = (index) => {
  for (let i = 0; i < carouselItems.length; i++) {
    carouselItems[i].classList.remove("active");
  }
  carouselItems[index].classList.add("active");
};
showSlide(currentIndex);
prevButton.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  showSlide(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex > carouselItems.length - 1) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
});

let sliderInterval = setInterval(() => {
  currentIndex++;
  if (currentIndex > carouselItems.length - 1) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}, 3000);

carousel.addEventListener("mouseenter", () => {
  clearInterval(sliderInterval);
});
carousel.addEventListener("mouseleave", () => {
  sliderInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex > carouselItems.length - 1) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }, 3000);
});