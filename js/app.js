var player = null; // player whose turn it is
var turn = null; // turn counter
var lastMove = null; // the player who moved last, used to determine winner
var gameOver = true; // is the game over? don't allow clicks if it is.
var vsComputer = false; // is cpu mode on?
// this array represents the 9 squares
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
// this array represents squares the AI player can pick
var computerSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// initiating new game/resetting game state
var initGame = function() {
  player = 1; // setting initial player
  turn = 1; // setting initial turn
  gameOver = false; // the game is on!
  // resetting initial board state — no x's or o's marked
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
  // resetting the squares the AI can pick
  computerSquares = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  document.getElementsByClassName('banner')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
  document.getElementsByClassName('banner')[0].textContent = ' ';
  document.getElementsByClassName('banner')[0].classList.remove('blink');
  document.getElementsByTagName('button')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
  document.getElementsByTagName('button')[0].style.color = '#2e9a56';
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
var changeOpponent = function() {
  if (gameOver) {
    if (vsComputer === false) {
      vsComputer = true;
      document.getElementById('cpu').classList.add('x');
      document.getElementById('human').classList.remove('x');
    } else if (vsComputer === true) {
      vsComputer = false;
      document.getElementById('human').classList.add('x');
      document.getElementById('cpu').classList.remove('x');
    }
  }
};
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
    document.getElementsByClassName('banner')[0].classList.add('blink');
    document.getElementsByTagName('button')[0].style.backgroundColor = 'rgba(46, 154, 86, .5)';
    document.getElementsByTagName('button')[0].style.color = '#3a3a32';
    if (lastMove === 'x') {
      document.getElementsByClassName('banner')[0].textContent = 'X Wins!';
    } else if (lastMove === 'o') {
      document.getElementsByClassName('banner')[0].textContent = '0 Wins!';
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
    document.getElementsByClassName('banner')[0].classList.add('blink');
    document.getElementsByTagName('button')[0].style.backgroundColor = 'rgba(46, 154, 86, .5)';
    document.getElementsByTagName('button')[0].style.color = '#3a3a32';
    document.getElementsByClassName('banner')[0].textContent = 'Cat Game!';
    // other cat game effects
  }
};
// the cpu is making a move.
var cpuMove = function() {
  turn++;
  var rand = computerSquares[Math.floor(Math.random() * computerSquares.length)];
  console.log('cpu moving to ' + rand);
  boardState[rand] = 'o';
  squares[rand].classList.add('o');
  squares[rand].classList.add('occupied');
  squares[rand].firstElementChild.textContent = 'O';
  lastMove = 'o';

  var index = computerSquares.indexOf(rand);
  console.log(index);
  if (index !== -1) computerSquares.splice(index, 1);
  console.log('remaining: ' + computerSquares);
  player = 1;
  if (turn > 5) {
    checkForWin();
  }
};
// making a move
var makeMove = function() {
  if (!this.classList.contains('occupied') && !gameOver) { // before we do anything, check if square is already occupied
    turn++;
    if (player === 1 && vsComputer === false) {
      this.firstElementChild.textContent = 'X';
      for (let i = 0; i < 9; i++) {
        if (this.classList.contains(i)) {
          boardState[i] = 'x';
          this.classList.add('x');
          lastMove = 'x';
        }
        player = 2;
      }
    } else if (player === 1 && vsComputer === true) {
      this.firstElementChild.textContent = 'X';
      for (let i = 0; i < 9; i++) {
        if (this.classList.contains(i)) {
          boardState[i] = 'x';
          var index = computerSquares.indexOf(i);
          if (index !== -1) computerSquares.splice(index, 1);
          console.log('p1 removed ' + index);
          console.log('remaining: ' + computerSquares);
          this.classList.add('x');
          lastMove = 'x';
          player = 2;
          if (turn > 5) {
            checkForWin();
          }
          if (!gameOver) cpuMove();
          // console.log(bucket.classList);
        }
      }
    } else if (player === 2) {
      this.firstElementChild.textContent = 'O';
      console.log('player 2 moved');
      for (let i = 0; i < 9; i++) {
        if (this.classList.contains(i)) {
          boardState[i] = 'o';
          this.classList.add('o');
          lastMove = 'o';
        }
      }
      player = 1;
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
document.getElementById('cpu').addEventListener('click', changeOpponent);
document.getElementById('human').addEventListener('click', changeOpponent);
