const button = document.querySelector(".change-color");
const span = document.querySelector(".color");
const body = document.querySelector("body");
button.addEventListener("click", function () {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  span.textContent = randomColor;
});
