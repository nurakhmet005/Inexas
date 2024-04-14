let burgerButton = document.querySelector(".header__burger");
let headerNav = document.querySelector(".header__nav");

burgerButton.addEventListener("click", () => {
  if (!burgerButton.classList.contains("active")) {
    burgerButton.classList.add("active");
    headerNav.classList.add("active");
  } else {
    burgerButton.classList.remove("active");
    headerNav.classList.remove("active");
  }
});
