//
// global variables will refresh on page refresh
//
var turn = 0;
var numTiles = 9;
var scoreX = 0;
var scoreO = 0;

// display updated scores
function updateScore() {
  document.getElementById('x-score').textContent = 'Points: ' + scoreX;
  document.getElementById('y-score').textContent = 'Points: ' + scoreO;
}

//
// player options
//
// get player options
// turn AI on or off
// reset score when switching player select?


// restarts gameboard for play
function reset() {
  clear();
  init();
}

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

// TODO determine if game is over
// returns true if game is over, else false
function checkCond() {
  // brute force: 8 checks, over 3 elements, per turn
  // rows
  // 1, 2, 3
  // 4, 5, 6
  // 7, 8, 9
  // columns
  // 1, 4, 7
  // 2, 5, 8
  // 3, 6, 9
  // diagonals
  // 1, 5, 9
  // 7, 5, 3
  // check for draw
  if (turn !== 0 && turn % 8 === 0) {
    // it's a draw
    console.log('draw detected');
    // give both players +1 score, just to show off scoreboard
    scoreX++;
    scoreO++;
    updateScore();
    // perform end game logic
    gameOver('It\'s a draw!');
    return true;
  }
  // TODO one player wins
  else if (false) {
    updateScore();
    return true;
  }
  // game continues
  return false;
}

// function to code for players picking a tile
function mark() {
  // if it is X's turn
  if (turn % 2 === 0) {
    this.style.background = 'linear-gradient(to bottom right, cyan, teal)';
    this.setAttribute('data-marker', 'pX');
  }
  // otherwise it's O's move
  else {
    this.style.background = 'linear-gradient(to bottom right, yellow, red)';
    this.setAttribute('data-marker', 'pO');
  }
  // check if the game is over
  if (checkCond()) {
    // game cleanup is performed by checkCond()
  }
  else {
    // remove ability to play this tile again
    this.removeEventListener('click', mark);
    // move over, so next turn begins
    turn++;
    displayTurn();
  }
}

// remove player graphic on tile
// remove player's data attrribute on tile
function removeMarks(i) {
  // get tile element
  tile = document.getElementById('tile-' + i);
  // clear tile's graphic
  tile.style.background = 'linear-gradient(to bottom right, blue, purple)';
  // clear tile's data marker
  tile.setAttribute('data-marker', '');
}

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
  resetBtn = document.getElementById('reset-button');
  resetBtn.addEventListener('click', reset);
}

// clear all tiles
function clear() {
  for (var i = 0; i < numTiles; i++) {
    removeTileListener(i);
    removeMarks(i);
  }
}



//
// game over
//
function gameOver(message) {
}
// cleanup (remove event listeners)
// draw
// X xor O victory

// TODO JS wrapper for DOM loading
// begin game after loading JS
init();
