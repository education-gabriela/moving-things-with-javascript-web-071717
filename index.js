let dodger = document.getElementById("dodger");

let moveDodger = function (pixels) {
  let positionNumbers = dodger.style.left.replace("px", "");
  let position = parseInt(positionNumbers, 10);

  dodger.style.left = `${position + pixels}px`;
};

document.addEventListener("keydown", function (event) {
  let position = parseInt(dodger.style.left.replace("px", ""));
  let availableArea = dodger.parentNode.offsetWidth - dodger.offsetWidth;
  if (event.which === 37 && position > 0) {
    moveDodger(-1);
  } else if (event.which === 39 && position < availableArea) {
    moveDodger(1);
  }
});
