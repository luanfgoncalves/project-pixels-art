// elementos

const pixelBoard = document.getElementById('pixel-board');
const boardSize = document.getElementById('board-size');
const pixels = document.getElementsByClassName('pixel');

const colorPallet = document.getElementById('color-palette');
const colors = document.getElementsByClassName('color');
const paintBlack = document.getElementById('paint-black');
const paintRed = document.getElementById('paint-red');
const paintBlue = document.getElementById('paint-blue');
const paintGreen = document.getElementById('paint-green');
const selectedColor = document.querySelector('.selected');

const eraser = document.getElementById('clear-board');
const ereased = document.getElementsByClassName('pixel');

// eventos e funções

colorPallet.addEventListener('click', function (event) {
  console.log('copiou');
  for (let index = 0; index < 4; index += 1) {
    if (event.target === colors[index]) {
      event.target.classList.add('selected');
    } else {
      colors[index].classList.remove('selected');
    }
  }
});

pixelBoard.addEventListener('click', function (event) {
  console.log('colou');
  if (selectedColor === paintBlack) {
    const localEvent = event.target;
    localEvent.style.backgroundColor = 'black';
  }
  if (selectedColor === paintRed) {
    const localEvent = event.target;
    localEvent.style.backgroundColor = 'red';
  }
  if (selectedColor === paintBlue) {
    const localEvent = event.target;
    localEvent.style.backgroundColor = 'blue';
  }
  if (selectedColor === paintGreen) {
    const localEvent = event.target;
    localEvent.style.backgroundColor = 'green';
  }
});

eraser.addEventListener('click', function () {
  console.log('apagou');
  for (let index = 0; index < eraser.length; index += 1) {
    eraser[index].style.backgroundColor = 'white';
  }
});
