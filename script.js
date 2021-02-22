const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const navs = document.querySelectorAll("li");

function toggleNav() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-slide-right");
  navs.forEach((nav, i) => {
    nav.classList.toggle(`slide-${i}`); //classlist.replace may be used
    nav.classList.toggle(`unslide-${i}`);
  });
}

//event listener
menuBars.addEventListener("click", toggleNav);
navs.forEach(nav => nav.addEventListener("click", toggleNav));
