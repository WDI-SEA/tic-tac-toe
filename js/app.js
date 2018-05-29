var player = null;
var turn = null;
var lastMove = null;
var gameOver = false;
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
// initiating new game/resetting game state
var initGame = function() {
  player = 1; // setting initial player
  turn = 1; // setting initial turn
  gameOver = false;
  boardState = [
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
  document.getElementsByClassName('banner')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
  document.getElementsByClassName('banner')[0].textContent = ' ';
  document.getElementById('player').textContent = player;
  document.getElementById('turn').textContent = turn;
  let squares = document.getElementsByClassName('square');
  for (let i = 0; i < squares.length; i++) {
    squares[i].firstElementChild.textContent = ' ';
    squares[i].classList.remove('occupied');
    squares[i].classList.remove('o');
    squares[i].classList.remove('x');
  }
};

initGame();
// defining our win conditions

var checkForWin = function() {
  console.log('checking for win');
  if ((boardState[0] === boardState[1] && boardState[0] === boardState[2]) ||
    (boardState[3] === boardState[4] && boardState[3] === boardState[5]) ||
    (boardState[6] === boardState[7] && boardState[6] === boardState[8]) ||
    (boardState[0] === boardState[3] && boardState[0] === boardState[6]) ||
    (boardState[1] === boardState[4] && boardState[1] === boardState[7]) ||
    (boardState[2] === boardState[5] && boardState[2] === boardState[8]) ||
    (boardState[0] === boardState[4] && boardState[0] === boardState[8]) ||
    (boardState[2] === boardState[4] && boardState[2] === boardState[6])) {
    gameOver = true;
    document.getElementsByClassName('banner')[0].style.backgroundColor = '#3a3a32';
    if (lastMove === 'x') {
      document.getElementsByClassName('banner')[0].textContent = 'X Wins!';
      console.log('player 1 wins!');
    } else if (lastMove === 'o') {
      document.getElementsByClassName('banner')[0].textContent = '0 Wins!';
      console.log('player 2 wins!');
    }
    var count = null;
    for (let i = 0; i < boardState.length; i++) {
      if (boardState[i] === 'x') {
        count++;
      } else if (boardState[i] === 'o') {
        count++;
      }
    }
  }
  if (turn > 9 && !gameOver) {
    gameOver = true;
    document.getElementsByClassName('banner')[0].style.backgroundColor = '#3a3a32';
    document.getElementsByClassName('banner')[0].textContent = 'Cat Game!';
    // other cat game effects
  }
};

// making a move
var makeMove = function() {
  if (!this.classList.contains('occupied') && !gameOver) {
    turn++;
    if (player === 1) {
      this.firstElementChild.textContent = 'X';
      console.log('player one moved');
      for (let i = 0; i < 9; i++) {
        if (this.classList.contains(i)) {
          boardState[i] = 'x';
          this.classList.add('x');
          lastMove = 'x';
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
          this.classList.add('o');
          lastMove = 'o';
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
  }
};
var squares = document.getElementsByClassName('square');
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', makeMove);
}
document.getElementsByTagName('button')[0].addEventListener('click', initGame);
