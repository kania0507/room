
  var slider = simpleslider.getSlider({
    container: document.getElementById('myslider'),
    init: -100,
    show: 0,
    end: 100,
    unit: '%'
  });

  /* Open */
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}
  

///////////////////////////////////////////////////
let button = document.querySelector(".button");
let menu = document.querySelector(".activeMenu");
let mask = document.querySelector(".wrapper > .mask");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  menu.classList.toggle("active");
  mask.classList.toggle("active");
});

const sizeChangedToDesktop = () => {
  if (window.innerWidth > 800) {
    button.classList.remove("active");
    menu.classList.remove("active");
    mask.classList.remove("active");
  }
};

window.onresize = sizeChangedToDesktop;
