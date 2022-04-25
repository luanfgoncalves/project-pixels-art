// elementos

const pixelBoard = document.getElementById('pixel-board');
/* const boardSize = document.getElementById('board-size'); */
const pixels = document.getElementsByClassName('pixel');

const colorPallet = document.getElementById('color-palette');
const colors = document.querySelectorAll('.color');
const paintBlack = document.getElementById('paint-black');
const paintRed = document.getElementById('paint-red');
const paintBlue = document.getElementById('paint-blue');
const paintGreen = document.getElementById('paint-green');
const selectedColor = document.querySelector('.selected');

const eraser = document.getElementById('clear-board');
/* const ereased = document.getElementsByClassName('pixel'); */

// eventos e funções

colorPallet.addEventListener('click', function cliqueNaPaleta(event) {
  console.log('clique na paleta reconhecido');
  for (let index = 0; index < 4; index += 1) {
    if (event.target === colors[index]) {
      event.target.classList.add('selected');
      console.log('cor selecionada');
    } else {
      colors[index].classList.remove('selected');
      console.log('cor desselecionada');
    }
  }
});

pixelBoard.addEventListener('click', function cliqueNoQuadro(event) {
  console.log('clique no quadro reconhecido');
  if (selectedColor === paintBlack) {
    const localEvent = event.target;
    localEvent.style.backgroundColor = 'black';
    console.log('cor preta aplicada');
  }
  if (selectedColor === paintRed) {
    const localEvent = event.target;
    localEvent.style.backgroundColor = 'red';
    console.log('cor vermelha aplicada');
  }
  if (selectedColor === paintBlue) {
    const localEvent = event.target;
    localEvent.style.backgroundColor = 'blue';
    console.log('cor azul aplicada');
  }
  if (selectedColor === paintGreen) {
    const localEvent = event.target;
    localEvent.style.backgroundColor = 'green';
    console.log('cor verde aplicada');
  }
});

eraser.addEventListener('click', function cliqueNoBotao() {
  console.log('clique no botão reconhecido');
  for (let index = 0; index < eraser.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});
