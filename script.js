// elementos - colocar dentro das funções?

const pixelBoard = document.getElementById('pixel-board');
// const boardSize = document.getElementById('board-size'); - guardar para o gerador de pixels

const colorPallet = document.getElementById('color-palette');
const colors = document.querySelectorAll('.color');
const eraser = document.getElementById('clear-board');

// seletor de cores - Funcionou!!
colorPallet.addEventListener('click', function cliqueNaPaleta(event) {
  for (let index = 0; index < 4; index += 1) {
    if (event.target === colors[index]) {
      event.target.classList.add('selected');
      console.log('cor selecionada');
    } else {
      colors[index].classList.remove('selected');
    }
  }
});

// botão de Limpar - funcionou
eraser.addEventListener('click', function cliqueNoBotao() {
  const pixels = document.getElementsByClassName('pixel');
  console.log('clique no botão reconhecido');
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// seletor de cores - funcionou VQV
pixelBoard.addEventListener('click', function cliqueNoQuadro(evt) {
  const paintBlack = document.getElementById('paint-black');
  const paintRed = document.getElementById('paint-red');
  const paintBlue = document.getElementById('paint-blue');
  const paintGreen = document.getElementById('paint-green');
  const selectedColor = document.querySelector('.selected');
  const clickedPixel = evt.target;
  const classChecker = evt.target.classList.contains('pixel');
  if (selectedColor === paintBlack && classChecker === true) {
    clickedPixel.style.backgroundColor = 'black';
  }
  if (selectedColor === paintRed && classChecker === true) {
    clickedPixel.style.backgroundColor = 'red';
  }
  if (selectedColor === paintBlue && classChecker === true) {
    clickedPixel.style.backgroundColor = 'blue';
  }
  if (selectedColor === paintGreen && classChecker === true) {
    clickedPixel.style.backgroundColor = 'green';
    console.log('cor verde aplicada');
  }
});

// gerador de pixeis - addicionar abaixo

// Referencias: https://bobbyhadz.com/blog/javascript-check-if-event-target-has-class#:~:text=To%20check%20if%20event.,target.
