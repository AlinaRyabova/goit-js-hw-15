const fontSizeControl = document.getElementById(`font-size-control`);
const textElement = document.getElementById(`text`);
textElement.style.fontSize = fontSizeControl.value + `px`;
fontSizeControl.addEventListener(`input`, onInput);

function onInput() {
  const fontSize = fontSizeControl.value + `px`;
  textElement.style.fontSize = fontSize;
}
