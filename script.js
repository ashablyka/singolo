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
let isEnable = true;

arrowLeftElement.addEventListener("click", () => {
  if (isEnable) {
    showPreviousSlide(currentSlide);
  }
});

arrowRightElement.addEventListener("click", () => {
  if (isEnable) {
    showNextSlide(currentSlide);
  }
});

function showPreviousSlide(currentSlide) {
  hideSlide("to-right");
  changeCurrentSlide(currentSlide - 1);
  showSlide("from-left");
}

function showNextSlide(currentSlide) {
  hideSlide("to-left");
  changeCurrentSlide(currentSlide + 1);
  showSlide("from-right");
}

function hideSlide(direction) {
  isEnable = false;
  slideElements[currentSlide].classList.add(direction);
  slideElements[currentSlide].addEventListener("animationend", function() {
    this.classList.remove("slide_active", direction);
  });
}

function changeCurrentSlide(newSlide) {
  currentSlide = (slideElements.length + newSlide) % slideElements.length;
}

function showSlide(direction) {
  slideElements[currentSlide].classList.add("next-slide", direction);
  slideElements[currentSlide].addEventListener("animationend", function() {
    this.classList.remove("next-slide", direction);
    this.classList.add("slide_active");
    isEnable = true;
  });
}

// Screen switcher
const slide1Element = document.querySelector(".slide-1");

slide1Element.addEventListener("click", event => {
  let phoneSelectedElement = event.target.closest(".base");

  if (phoneSelectedElement) {
    changeScreenMode(phoneSelectedElement);
  }
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
});
