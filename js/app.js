// definining global variables like player and turn
var player = null;
var turn = null;

// initiating new game/resetting game state
var initGame = function() {
  player = 1; // setting initial player
  turn = 1; // setting initial turn
  document.getElementById('player').textContent = player;
  document.getElementById('turn').textContent = turn;
  // making our squares listen for clicks
};
initGame();
// defining our win conditions
var boardState = [
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  []
];
var checkForWin = function() {
  console.log('checking for win');
  if ((boardState[0] === boardState[1] && boardState[0] === boardState[2]) || (boardState[3] === boardState[4] && boardState[3] === boardState[5]) ||
   (boardState[6] === boardState[7] && boardState[6] === boardState[8]) || (boardState[0] === boardState[3] && boardState[0] === boardState[6]) ||
   (boardState[1] === boardState[4] && boardState[1] === boardState[7]) || (boardState[2] === boardState[5] && boardState[2] === boardState[8]) || (boardState[0] === boardState[4] && boardState[0] === boardState[8]) || (boardState[2] === boardState[4] && boardState[2] === boardState[6])) {
    console.log('player ' + player + ' wins!');
  }

  var count = null;
  for (let i = 0; i < boardState.length; i++) {
    if (boardState[i] === 'x') {
      count++;
    } else if (boardState[i] === 'o') {
      count++;
    }
  }
  if (count === 9) {
    console.log('cat game');
    // other cat game effects
  }
};

// making a move
var makeMove = function() {
  if (!this.classList.contains('occupied')) {
    turn++;
    if (player === 1) {
      this.firstElementChild.textContent = 'X';
      console.log('player one moved');
      for (let i = 0; i < 9; i++) {
        if (this.classList.contains(i)) {
          boardState[i] = 'x';
          // console.log(bucket.classList);
        }
      }
      player++;
      // claimSquare();
    } else if (player === 2) {
      this.firstElementChild.textContent = 'O';
      console.log('player 2 moved');
      for (let i = 0; i < 9; i++) {
        if (this.classList.contains(i)) {
          boardState[i] = 'o';

          // console.log(bucket.classList);
        }
      }
      player--;
      // claimSquare();
    }
    if (turn > 5) {
      checkForWin();
    }

    this.classList.add('occupied');
    document.getElementById('player').textContent = player;
    document.getElementById('turn').textContent = turn;
    console.log('click!');
  }
};
var squares = document.getElementsByClassName('square');
console.log(squares);
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', makeMove);
}
