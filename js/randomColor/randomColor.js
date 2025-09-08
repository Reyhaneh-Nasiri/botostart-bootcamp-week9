import { getRandomColor } from "../../src/utils/color.js";
import { addClass, createElement } from "../../src/utils/dom.js";

const carousel = document.querySelector(".carousel");
const numberOfItems = 5;
carousel.style.gridTemplateColumns = `repeat(${numberOfItems}, 1fr)`;

for (let i = 1; i <= numberOfItems; i++) {
  const carouselItem = createElement("div");
  addClass(carouselItem, "carousel-item");
  addClass(carouselItem, `item${i}`);
  const showColorElement = createElement("div");
  addClass(showColorElement, "show-color");
  const showHexElement = createElement("span");
  addClass(showHexElement, "hex");
  carousel.appendChild(carouselItem);
  carouselItem.appendChild(showColorElement);
  carouselItem.appendChild(showHexElement);
  const color = getRandomColor();
  showColorElement.style.backgroundColor = color;
  showHexElement.innerText = color;
}

const items = document.querySelectorAll(".carousel-item");
items.forEach((item) => {
  item.addEventListener("click", (e) => {
    const colorCode = getRandomColor();
    const className = e.target.className;
    if (className === "show-color") {
      e.target.style.backgroundColor = colorCode;
      e.target.nextElementSibling.innerText = colorCode;
    }
  });
});

// carousel
const carouselItems = document.querySelectorAll(".carousel-item");
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
