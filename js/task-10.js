const controlsEl = document.querySelector("#controls");
const inputEl = controlsEl.firstElementChild;
const buttonCreate = controlsEl.querySelector("[data-create]");
const buttonDestroy = controlsEl.lastElementChild;
const boxesWrap = document.querySelector("#boxes");
const initialHeight = 30;
const initialWidth = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
    for( let i = 0; i < amount; i += 1) {
    const boxesItem = document.createElement("div")
    boxesItem.style.width = initialWidth + 10 * i + "px";
    boxesItem.style.height = initialHeight + 10 * i + "px";
    boxesItem.style.backgroundColor = getRandomHexColor();
    boxesWrap.append(boxesItem);
    console.log(boxesItem);
  }
}

function destroyBoxes() {
  boxesWrap.innerHTML = "";
}

buttonCreate.addEventListener( "click", () => {createBoxes(inputEl.value)} );
buttonDestroy.addEventListener("click", destroyBoxes);