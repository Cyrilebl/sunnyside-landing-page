const hamburger = document.querySelector(".nav__hamburger");
const navbar = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("nav__mobile");
  hamburger.style.opacity = hamburger.style.opacity === "1" ? "0.6" : "1";
});
