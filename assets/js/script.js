const hamburger = document.querySelector(".nav__hamburger");
const navbar = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("nav__mobile");
});
