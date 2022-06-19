import '../css/common.css';

const body = document.querySelector('body');
const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');

onDisabled(btnStop);

const CHANGE_COLOR_TIME = 1000;
let idInterval = null;

btnStart.addEventListener('click', onChangeColor);
btnStop.addEventListener('click', offChangeColor);

function onChangeColor(e) {
  onDisabled(e.target);
  offDisabled(btnStop);

  idInterval = setInterval(() => {
    const color = getRandomHexColor();
    body.style.backgroundColor = color;
  }, CHANGE_COLOR_TIME);
}

function offChangeColor(e) {
  offDisabled(btnStart);
  onDisabled(e.target);
  clearInterval(idInterval);
}

function onDisabled(element) {
  element.setAttribute('disabled', true);
}

function offDisabled(element) {
  element.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
