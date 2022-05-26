function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyColor () {
  bodyEl.style.backgroundColor = getRandomHexColor();
  bodyElColorTitle.textContent = bodyEl.style.backgroundColor;
}

const bodyEl = document.body;
const buttonEl = document.querySelector(".change-color");
const bodyElColorTitle = document.querySelector("span.color");

buttonEl.addEventListener("click", changeBodyColor);
