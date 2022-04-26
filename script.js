// elementos - colocar dentro das funções?

const pixelBoard = document.getElementById('pixel-board');
// const boardSize = document.getElementById('board-size'); - guardar para o gerador de pixels
const pixels = document.getElementsByClassName('pixel');
const colorPallet = document.getElementById('color-palette');
const colors = document.querySelectorAll('.color');
const eraser = document.getElementById('clear-board');

// seletor de cores - Funcionou!!
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

// botão de Limpar - Não funcionou
eraser.addEventListener('click', function cliqueNoBotao() {
  console.log('clique no botão reconhecido');
  for (let index = 0; index < eraser.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
});

// seletor de cores - funcionou porém colore tudo que é div
pixelBoard.addEventListener('click', function cliqueNoQuadro(evt) {
  const paintBlack = document.getElementById('paint-black');
  const paintRed = document.getElementById('paint-red');
  const paintBlue = document.getElementById('paint-blue');
  const paintGreen = document.getElementById('paint-green');
  const selectedColor = document.querySelector('.selected');
  console.log('clique no quadro reconhecido');
  if (selectedColor === paintBlack) {
    const clickedPixel = evt.target;
    clickedPixel.style.backgroundColor = 'black';
    console.log('cor preta aplicada');
  }
  if (selectedColor === paintRed) {
    const clickedPixel = evt.target;
    clickedPixel.style.backgroundColor = 'red';
    console.log('cor vermelha aplicada');
  }
  if (selectedColor === paintBlue) {
    const clickedPixel = evt.target;
    clickedPixel.style.backgroundColor = 'blue';
    console.log('cor azul aplicada');
  }
  if (selectedColor === paintGreen) {
    const clickedPixel = evt.target;
    clickedPixel.style.backgroundColor = 'green';
    console.log('cor verde aplicada');
  }
});

// gerador de pixeis - addicionar abaixo