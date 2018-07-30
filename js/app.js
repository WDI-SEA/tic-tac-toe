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

// TODO stupid AI
function aiTurn() {
  // ---begin while---
  // while a tile hasn't been marked
  // get a random number 1-9
  // check if that tile is available`
  // if available then set marked to true
  // ---while over---
  // mark tile
}

// TODO finish ticker and refractor mark()
function tick() {
  // if AI enabled && turn % 2 === 0
  // then aiTurn()
  // else do nothing
  turn++;
}


//
// restarts gameboard for play
//
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

// determine if game is over
// returns true if game is over, else false
function checkCond() {
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
  // check if a player has won
  else if (checkVictory('pX')) {
    // X won
    console.log('X has won');
    // increase X's score
    scoreX++;
    updateScore();
    // perform end game logic
    gameOver('X has won the game!');
    return true;
  }
  else if (checkVictory('pO')) {
    // O won
    console.log('O has won');
    // increase O's score
    scoreO++;
    updateScore();
    // perform end game logic
    gameOver('O has won the game!');
    return true;
  }
  // game continues
  return false;
}

// returns true if player has a triple along that path
function checkTriple(start, increment, end, player) {
  var count = 0;
  for (var i = start; i <= end; i += increment) {
    // get tile
    tile = document.getElementById('tile-' + (i - 1));
    // compare tile's marker to player
    if (tile.getAttribute('data-marker') === player) {
      count++;
    }
  }
  if (count === 3) {
    return true;
  }
  else {
    return false;
  }
}

// diagonals
// 1, 5, 9 start at 1, increment by 4
// 3, 5, 7 start at 3, increment by 2
// rows
// 1, 2, 3 start at 1, increment by 1
// 4, 5, 6 start at 4, increment by 1
// 7, 8, 9 start at 7, increment by 1
// columns
// 1, 4, 7 start at 1, increment by 3
// 2, 5, 8 start at 2, increment by 3
// 3, 6, 9 start at 3, increment by 3
function checkVictory(player) {
  victory = false;
  // check diagonals
  if (checkTriple(1, 4, 9, player)) {
    victory = true;
  }
  if (checkTriple(3, 2, 7, player)) {
    victory = true;
  }
  if (checkTriple(1, 1, 3, player)) {
    victory = true;
  }
  if (checkTriple(4, 1, 6, player)) {
    victory = true;
  }
  if (checkTriple(7, 1, 9, player)) {
    victory = true;
  }
  if (checkTriple(1, 3, 7, player)) {
    victory = true;
  }
  if (checkTriple(2, 3, 8, player)) {
    victory = true;
  }
  if (checkTriple(3, 3, 9, player)) {
    victory = true;
  }
  return victory;
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
// perform end game logic
function gameOver(message) {
  // remove board interaction
  for (var i = 0; i < numTiles; i++) {
    removeTileListener(i);
  }
  // display end game message
  alert(message);
}

//
// start game after DOM is loaded
//
document.addEventListener('DOMContentLoaded', function() {
  console.log('Begin Game');
  // start game
  init();
});
