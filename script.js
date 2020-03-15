// Navigation
const navigationElement = document.querySelector("#navigation");
const navigationItemsElements = navigationElement.querySelectorAll(
  ".navigation__item"
);

navigationElement.addEventListener("click", event => {
  navigationItemsElements.forEach(navigationItem => {
    navigationItem.classList.remove("navigation__item_active");
  });
  event.target
    .closest(".navigation__item")
    .classList.add("navigation__item_active");
});

// Slider
const arrowLeftElement = document.querySelector(".arrow-left");
const arrowRightElement = document.querySelector(".arrow-right");
const slideElements = document.querySelectorAll(".slide");

let currentSlide = 0;

arrowLeftElement.addEventListener("click", () => {
  slideElements[currentSlide].classList.remove("slide_active");
  currentSlide =
    (currentSlide - 1 + slideElements.length) % slideElements.length;
  slideElements[currentSlide].classList.add("slide_active");
});

arrowRightElement.addEventListener("click", () => {
  slideElements[currentSlide].classList.remove("slide_active");
  currentSlide =
    (currentSlide + 1 + slideElements.length) % slideElements.length;
  slideElements[currentSlide].classList.add("slide_active");
});
