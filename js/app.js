//Need to prompt a click First, Call all the "squares"
var square = document.getElementsByClassName('square');
var j = 0
console.log(square);
// This function will allow me to reset the DOM
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('reset').addEventListener('click', boxSelector)
  console.log('sanity');
});
//this will allow divs to be clicked
function boxSelector() {
  //here I want to allow boxes top be clicked.
  for (var i = 0; i < square.length; i++) {
    square[i].addEventListener('click', placePieces);
    square[i].setAttribute('data-x', 'false');
    square[i].setAttribute('data-o', 'false')
    if (square[i].getAttribute('data-board') === 'true') {
      square[i].removeChild(square[i].firstChild);
    }
  }
  removeBoard();
  document.getElementById('reset').textContent = 'Reset Board';

}

//Creating an overall function to alternate o and x
function placePieces() {
    if (j === 0 || j % 2 === 0){
      var pieceX = document.createElement('p');
      pieceX.innerText = "X";
      pieceX.alignText = 'center';
      pieceX.style.color = 'white';
      this.append(pieceX);
      //remove the ability to add to the boxes
      this.removeEventListener('click', placePieces);
      //set boolean for endgame logic
      this.setAttribute('data-x', 'true');
      this.setAttribute('data-board', 'true');
      j++;
      //I want to check to win after each piece is placed.
      checkWin();
      //checkDraw();
    }
    else {
      //placePieceO();
      var pieceO = document.createElement('p')
      pieceO.innerText = "O";
      pieceO.style.color = 'white';
      this.append(pieceO);
      this.setAttribute('data-o', 'true')
      //This is telling the draw function that a board slot is full.
      this.setAttribute('data-board', 'true')
      this.removeEventListener('click', placePieces);
      j++
      //I want to check to win after each piece is placed.
      checkWin();
    }
}
function removePiecePlacement() {
  for (var k = 0; k < square.length; k++) {
    square[k].removeEventListener('click', placePieces)
  }
}
function removeBoard() {
  for (var k = 0; k < square.length; k++) {
    square[k].setAttribute('data-board', 'false');
  }
}
// GAME LOGIC
function checkWin() {
  //A player wins if there are 3 of the same choice in a line.
  var topCheck = document.getElementsByClassName('top');
  var midCheck = document.getElementsByClassName('mid');
  var bottomCheck = document.getElementsByClassName('bottom');
  var leftCCheck = document.getElementsByClassName('leftC');
  var rightCCheck = document.getElementsByClassName('rightC');
  var lDiagonalCheck = document.getElementsByClassName('lDiagonal');
  var rDiagonalCheck = document.getElementsByClassName('rDiagonal');
  var midVertCheck = document.getElementsByClassName('midVert');

    if ((topCheck[0].getAttribute('data-x') === 'true' && topCheck[1].getAttribute('data-x') === 'true' && topCheck[2].getAttribute('data-x') === 'true' ) ||
        (midCheck[0].getAttribute('data-x') === 'true' && midCheck[1].getAttribute('data-x') === 'true' && midCheck[2].getAttribute('data-x') === 'true' )||
        (bottomCheck[0].getAttribute('data-x') === 'true' && bottomCheck[1].getAttribute('data-x') === 'true' && bottomCheck[2].getAttribute('data-x') === 'true' )||
        (midVertCheck[0].getAttribute('data-x') === 'true' && midVertCheck[1].getAttribute('data-x') === 'true' && midVertCheck[2].getAttribute('data-x') === 'true' )||
        (leftCCheck[0].getAttribute('data-x') === 'true' && leftCCheck[1].getAttribute('data-x') === 'true' && leftCCheck[2].getAttribute('data-x') === 'true' )||
        (rightCCheck[0].getAttribute('data-x') === 'true' && rightCCheck[1].getAttribute('data-x') === 'true' && rightCCheck[2].getAttribute('data-x') === 'true' )||
        (lDiagonalCheck[0].getAttribute('data-x') === 'true' && lDiagonalCheck[1].getAttribute('data-x') === 'true' && lDiagonalCheck[2].getAttribute('data-x') === 'true' )||
        (rDiagonalCheck[0].getAttribute('data-x') === 'true' && rDiagonalCheck[1].getAttribute('data-x') === 'true' && rDiagonalCheck[2].getAttribute('data-x') === 'true')) {
    document.getElementById('reset').textContent = 'Play Again';
    document.getElementById('message').textContent = 'X WINS';

    console.log('x')

    removePiecePlacement();
    }
    else if ((topCheck[0].getAttribute('data-o') === 'true' && topCheck[1].getAttribute('data-o') === 'true' && topCheck[2].getAttribute('data-o') === 'true' ) ||
        (midCheck[0].getAttribute('data-o') === 'true' && midCheck[1].getAttribute('data-o') === 'true' && midCheck[2].getAttribute('data-o') === 'true' )||
        (bottomCheck[0].getAttribute('data-o') === 'true' && bottomCheck[1].getAttribute('data-o') === 'true' && bottomCheck[2].getAttribute('data-o') === 'true' )||
        (midVertCheck[0].getAttribute('data-o') === 'true' && midVertCheck[1].getAttribute('data-o') === 'true' && midVertCheck[2].getAttribute('data-o') === 'true' )||
        (leftCCheck[0].getAttribute('data-o') === 'true' && leftCCheck[1].getAttribute('data-o') === 'true' && leftCCheck[2].getAttribute('data-o') === 'true' )||
        (rightCCheck[0].getAttribute('data-o') === 'true' && rightCCheck[1].getAttribute('data-o') === 'true' && rightCCheck[2].getAttribute('data-o') === 'true' )||
        (lDiagonalCheck[0].getAttribute('data-o') === 'true' && lDiagonalCheck[1].getAttribute('data-o') === 'true' && lDiagonalCheck[2].getAttribute('data-o') === 'true' )||
        (rDiagonalCheck[0].getAttribute('data-o') === 'true' && rDiagonalCheck[1].getAttribute('data-o') === 'true' && rDiagonalCheck[2].getAttribute('data-o') === 'true')) {
    document.getElementById('reset').textContent = 'Play Again';
    document.getElementById('message').textContent = 'O WINS';
    console.log('o')
    removePiecePlacement();
  }

}

function checkDraw() {
  for (var i = 0; i < square.length; i++)
  if (square[i].getAttribute('data-board') === 'false') {
    return
  }
  else {
    document.getElementById('message').textContent = 'DRAW';
    console.log('draw')
    document.getElementById('reset').textContent = 'Play Again';

  }
}
