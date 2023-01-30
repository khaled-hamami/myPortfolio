var loader = document.querySelector(".loader");

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disspear");
}

////////////////////////////////SPLASH

setTimeout(function () {
  let animation = document.getElementById("splash");
  animation.style.transition = "opacity 2s, transform 20s";
  animation.style.transform = "translateX(-100%)";
  animation.style.opacity = 0;
  animation.parentNode.removeChild(animation);
}, 3500);

///////////////////////////////////////////NAV BAR
/////////FADE IN
const nav = document.getElementById("navbar");
function fadeIn(el) {
  el.style.opacity = 0;
  let tick = function () {
    el.style.opacity = +el.style.opacity + 0.01;
    if (+el.style.opacity < 1) {
      (window.requestAnimationFrame && requestAnimationFrame(tick)) ||
        setTimeout(tick, 16);
    }
  };
  tick();
}

//////////EVENTS
let i = 1;
const navbarDivs = document.querySelectorAll(".navbar div");
let arrow = document.getElementById("arrow");
document.getElementById("arrow").onclick = function () {
  i++;

  if (i % 2 == 0) {
    nav.style.opacity = "1";
    nav.style.visibility = "visible";
    arrow.style.transform = "rotate(180deg)";

    fadeIn(nav);
  }
  if (i % 2 == 1) {
    nav.style.visibility = "hidden";
    nav.style.opacity = "0";
    arrow.style.transform = "rotate(360deg)";
  }
};

/////////////////////////////////// AUTO TYPE

var typed = new Typed(".typed", {
  strings: ["developer", "designer"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
