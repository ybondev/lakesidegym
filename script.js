const sticky_nav = document.querySelector("header");

window.addEventListener("scroll", function () {
  sticky_nav.classList.toggle("sticky", scrollY > 100);
});
