//
// global variables
//
var turn = 0;
var numTiles = 9;

//
// scores
//
// store scores
// display scores

//
// player options
//
// get player options
// turn AI on or off
// TODO reset function instead of clear

//
// game turns
//
// display turn
function displayTurn() {
  ele = document.getElementById('player-turn');
  if (turn % 2 === 0) {
    ele.textContent = 'X player\'s turn';
    ele.style.background = 'linear-gradient(to bottom right, cyan, teal)';
  }
  else {
    ele.textContent = 'O player\'s turn';
    ele.style.background = 'linear-gradient(to bottom right, yellow, red)';
  }
}

//
// gameboard
//

// id must be of the format tile-i, where i is an int
function addTileListener(i) {
  tile = document.getElementById('tile-' + i);
  tile.addEventListener('click', mark);
}

// id must be of the format tile-i, where i is an int
function removeTileListener(i) {
  tile = document.getElementById('tile-' + i);
  tile.removeEventListener('click', mark);
}


// function to code for players picking a tile
function mark() {
  // if it is X's turn
  if (turn % 2 === 0) {
    this.style.background = 'linear-gradient(to bottom right, cyan, teal)';
  }
  // otherwise it's O's move
  else {
    this.style.background = 'linear-gradient(to bottom right, yellow, red)';
  }
  // remove ability to play this tile again
  this.removeEventListener('click', mark);
  // move over, so next turn begins
  turn++;
  displayTurn();
}
// check board conditions
// store gameboard conditions

//
// make the game ready for play
//
function init() {
  turn = 0;
  // clear all tiles of marks
  // add event listeners to tiles
  for (var i = 0; i < numTiles; i++) {
    addTileListener(i);
  }
  // add event listener to reset button
  // TODO change reset functionality to reset instead of clear
  resetBtn = document.getElementById('reset-button');
  resetBtn.addEventListener('click', clear);
}

// remove event listeners
function clear() {
  for (var i = 0; i < numTiles; i++) {
    removeTileListener(i);
  }
}



//
// game over
//
// cleanup (remove event listeners)
// draw
// X xor O victory

// TODO JS wrapper for DOM loading
// begin game after loading JS
init();
