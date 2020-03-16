// Navigation
const navigationElement = document.querySelector("#navigation");

navigationElement.addEventListener("click", event => {
  setActive("navigation__link", "navigation__link_active", event);
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

// Screen switcher
const slide1Element = document.querySelector(".slide-1");

slide1Element.addEventListener("click", event => {
  let phoneSelectedElement = event.target.closest(".base");
  changeScreenMode(phoneSelectedElement);
});

function changeScreenMode(phoneSelected) {
  const screenSelectedElement = phoneSelected.querySelector(".screen");

  let currentMode;
  let newMode;

  if (screenSelectedElement.classList.contains("screen_on")) {
    currentMode = "screen_on";
    newMode = "screen_off";
  } else {
    currentMode = "screen_off";
    newMode = "screen_on";
  }

  screenSelectedElement.classList.remove(`${currentMode}`);
  screenSelectedElement.classList.add(`${newMode}`);
}

//Portfolio
const portfolioButtonsElements = document.querySelector(".portfolio__buttons");
const galleryElement = document.querySelector(".gallery");

portfolioButtonsElements.addEventListener("click", event => {
  if (event.target.classList.contains("portfolio__button")) {
    reorderPictures();
  }
  setActive("portfolio__button", "button_bordered", event);
});

function reorderPictures() {
  const firstPicture = galleryElement.children[0];
  const firstPictureCopy = firstPicture.cloneNode();
  firstPicture.remove();
  galleryElement.append(firstPictureCopy);
}

galleryElement.addEventListener("click", event => {
  setActive(`gallery__picture`, `gallery__picture_active`, event);
});

function setActive(elementsClass, activeClass, event) {
  if (event.target.classList.contains(`${elementsClass}`)) {
    const elements = document.querySelectorAll(`.${elementsClass}`);
    elements.forEach(element => {
      element.classList.remove(`${activeClass}`);
    });
    event.target.closest(`.${elementsClass}`).classList.add(`${activeClass}`);
  }
}

// Form submit
const formElement = document.querySelector("#form");
const submitFormButton = document.querySelector("#contact-form-submit");
const modalWrapperElement = document.querySelector(".modal-wrapper");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const textareaInput = document.querySelector("#textarea");
const modalSubjectElement = document.querySelector("#modal-subject");
const modalDescriptionElement = document.querySelector("#modal-description");
const modalCloseButton = document.querySelector("#modal-close-button");

submitFormButton.addEventListener("click", event => {
  event.preventDefault();

  if (!nameInput.value) {
    nameInput.classList.add("invalid");
  }

  if (!emailInput.value) {
    emailInput.classList.add("invalid");
  }

  if (nameInput.value && emailInput.value) {
    modalWrapperElement.classList.remove("visually-hidden");
    modalSubjectElement.innerText = subjectInput.value
      ? `Subject: ${subjectInput.value}`
      : "Without subject";
    modalDescriptionElement.innerText = textareaInput.value
      ? `Description: ${textareaInput.value}`
      : "Without description";
  }
});

modalCloseButton.addEventListener("click", () => {
  modalWrapperElement.classList.add("visually-hidden");
  formElement.reset();
});

nameInput.addEventListener("focus", () => {
  nameInput.classList.remove("invalid");
});

emailInput.addEventListener("focus", () => {
  emailInput.classList.remove("invalid");
})
