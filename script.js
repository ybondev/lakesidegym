const sticky_nav = document.querySelector("header");

window.addEventListener("scroll", function () {
  sticky_nav.classList.toggle("sticky", scrollY > 100);
});

AOS.init({
  delay: 500,
  duration: 1000, // values from 0 to 3000, with step 50ms
});
