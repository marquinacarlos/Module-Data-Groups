const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


let currentIndex = 0;
let timer = null;

const img = document.getElementById("carousel-img");
const forwardBtn = document.getElementById("forward-btn");
const backwardBtn = document.getElementById("backward-btn");
const autoForwardBtn = document.getElementById("auto-forward");
const autoBackwardBtn = document.getElementById("auto-backward");
const stopBtn = document.getElementById("stop");

function showImage() {
  img.src = images[currentIndex];
}

function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}

function startAuto(direction) {
  autoForwardBtn.disabled = true;
  autoBackwardBtn.disabled = true;
  timer = setInterval(direction, 2000);
}

function stopAuto() {
  clearInterval(timer);
  timer = null;
  autoForwardBtn.disabled = false;
  autoBackwardBtn.disabled = false;
}

forwardBtn.addEventListener("click", moveForward);
backwardBtn.addEventListener("click", moveBackward);
autoForwardBtn.addEventListener("click", function () { startAuto(moveForward); });
autoBackwardBtn.addEventListener("click", function () { startAuto(moveBackward); });
stopBtn.addEventListener("click", stopAuto);