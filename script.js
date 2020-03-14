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
