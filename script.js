const body = document.querySelector("body");
const imgs = document.querySelectorAll(".img");
let activeImg = 0;

setImgAsBg();

function setImgAsBg() {
  body.style.backgroundImage = imgs[activeImg].style.backgroundImage;
}

function activateImg() {
  imgs.forEach((img) => {
    img.classList.remove("active");
    img.classList.remove("animateTransition");
  });
  imgs[activeImg].classList.add("active");
  imgs[activeImg].classList.add("animateTransition");
}

const arrowBtn = document.querySelectorAll(".arrow-btn");

arrowBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.className == "right-arrow") {
      activeImg++;
      if (activeImg > imgs.length - 1) {
        activeImg = 0;
      }
    } else {
      activeImg--;
      if (activeImg < 0) {
        activeImg = imgs.length - 1;
      }
    }
    setImgAsBg();
    activateImg();
  });
});
