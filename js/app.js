//
// global variables
//
var turn = 0;
var numTiles = 9;

//
// scores
//
// store scores
// dispplay scores

//
// player options
//
// get player options
// turn AI on or off
// TODO reset function instead of clear

//
// game turns
//
// next turn
// store turn count
// display turn

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


// TODO mark based upon turn
function mark() {
  this.style.background = 'linear-gradient(to bottom right, cyan, teal)';
}
// check board conditions
// store gameboard conditions

//
// get the game ready for play
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
