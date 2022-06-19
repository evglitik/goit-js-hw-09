import '../css/common.css';

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-start]'),
  btnStop: document.querySelector('button[data-stop]'),
};

onDisabled(refs.btnStop);

const CHANGE_COLOR_TIME = 1000;
let idInterval = null;

refs.btnStart.addEventListener('click', onChangeColor);
refs.btnStop.addEventListener('click', offChangeColor);

function onChangeColor(e) {
  onDisabled(e.target);
  offDisabled(refs.btnStop);

  idInterval = setInterval(() => {
    const color = getRandomHexColor();
    refs.body.style.backgroundColor = color;
  }, CHANGE_COLOR_TIME);
}

function offChangeColor(e) {
  offDisabled(refs.btnStart);
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
