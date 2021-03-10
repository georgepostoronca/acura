import SlimSelect from 'slim-select';
import debounce from "lodash.debounce";


// Custom Select
let selects = [].slice.call(document.querySelectorAll("select"));

selects.forEach((item) => {
  new SlimSelect({
    select: item
  });
})

// Fixed Scroll
let menu = document.querySelector(".menu");

function toggleMenuFixed() {
  if(window.scrollY > 10) {
    menu.classList.add("--fixed");
  } else {
    menu.classList.remove("--fixed");
  }
}
toggleMenuFixed();

if(menu) {
  document.addEventListener("scroll", debounce(toggleMenuFixed, 10));
}

// Toggle Menu
let navEl = document.querySelector(".js-nav");
let navBtnEl = document.querySelector(".js-toggle-nav");

if(navBtnEl) {
  navBtnEl.addEventListener("click", (e) => {
    e.target.classList.toggle("--active")
    navEl.classList.toggle("--active");
  });
}
