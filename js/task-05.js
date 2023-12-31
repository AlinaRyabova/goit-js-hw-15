function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector(`input`);
const createButton = document.querySelector(`[data-create]`);
const destroyButton = document.querySelector(`[data-destroy]`);
const boxesContainer = document.getElementById(`boxes`);

createButton.addEventListener(`click`, onCreateButtonClick);
destroyButton.addEventListener(`click`, onDestroyButtonClick);

function onCreateButtonClick(event) {
  console.log(event);
  const amount = input.value;
  createBoxes(amount);
}

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement(`div`);
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesContainer.append(...boxes);
}

function destroyBoxes() {
  boxesContainer.innerHTML = ``;
  input.value = ``;
}
function onDestroyButtonClick(event) {
  console.log(event);
  destroyBoxes();
}
