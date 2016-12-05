console.log('Hello frontend');
var X = 'X', O = 'O', BLANK = '', NO_WINNER = 'NO';
var winner;
var curPlayer;
var board;
var moves;
var computer = BLANK;

var switchPlayer = function() {
  curPlayer = ( curPlayer === X ) ? O : X;
  document.getElementById('curPlayer').textContent='Current Player: '+ curPlayer;
};

var canMove = function(board, i, j) {
  if ( board[i][j] === BLANK ) {
    return true;
  } else {
    document.getElementById('curPlayer').textContent='Select a blank cell for ' + curPlayer;
    return false;
  }
};

// State of the game: 1) board: 3x3 array, 2) current player
// Event listener: 1) Click on cell, 2) Click on reset button
//
// Reset: clear board, reset current player to X
//
// Click: find out which cell,
//        check if this move is possible,
//        fill in cell
//        decide if game has a winner,
//        update current player

var getPos = function(id) {
  var arr = id.split('_');

  return {
    i: parseInt(arr[1]),
    j: parseInt(arr[2])
  };
}

var isValidPos = function(i, j) {
  return i >=0 && i <= 2 && j >= 0 && j <= 2;
}

var hasWonDirection = function(board, player, i, j, iDelta, jDelta) {
  var count = 0;

  for (var delta = -2; delta <= 2; delta++) {
    var x = i + iDelta * delta;
    var y = j + jDelta * delta;

    if (isValidPos(x, y) && board[x][y] === player) {
      count++;
    }
  }

  return count === 3;
}

var hasWon = function(board, player, i, j) {
  var directions = [
    [0, 1],  // row
    [1, 0],  // column
    [1, 1],  // backslash
    [1, -1]  // slash
  ];

  for (var k = 0; k < directions.length; k++) {
    var direction = directions[k];

    if (hasWonDirection(board, player, i, j, direction[0], direction[1])) {
      return true;
    }
  }

  return false;
}

var getComputerPos = function() {
  var values = [0,1,2,3,4,5,6,7,8];
  while (values.length > 0) {
    var index = Math.floor(Math.random() * values.length);
    var value = values[index];
    var x = Math.floor(value / 3);
    var y = value % 3;
    if (board[x][y] === BLANK) {
      return {
        i: x,
        j: y
      };
    }

    values.splice(index, 1);
  }

  return {
    i: 0,
    j: 0
  };
}

var makeComputerMove = function() {
  if (winner !== BLANK) {
    return;
  }

  if (curPlayer !== computer) {
    return;
  }

  var pos = getComputerPos();

  makeMove(pos.i, pos.j);
}

var makeMove = function(i, j) {
  if (!canMove(board, i, j)) {
    return;
  }

  moves++;
  board[i][j] = curPlayer;
  element = document.getElementById('a_' + i + '_' + j);
  element.textContent = curPlayer;
  element.className = 'cell cell' + curPlayer;

  if (hasWon(board, curPlayer, i, j)) {
    winner = curPlayer;
    document.getElementById('curPlayer').textContent = winner + ' won!';
    return;
  } else if (moves === 9) {
    winner = NO_WINNER;
    document.getElementById('curPlayer').textContent = 'It is a draw!';
    return;
  }

  switchPlayer();

  makeComputerMove();
}

var onCellClick = function() {
  // console.log("click cell " + this.id);
  if (winner !== BLANK) {
    return;
  }

  var pos = getPos(this.id);

  makeMove(pos.i, pos.j);
}

var cells = document.getElementsByClassName('cell');
// console.log(cells);
for (var i = 0; i < cells.length; i++) {
  // console.log("add click cell " + cells[i].id);
  cells[i].addEventListener('click', onCellClick);
}

var onRadioClick = function() {
  // console.log(this.id);
  computer = this.id.substring(2);
  // console.log(computer);
  makeComputerMove();
}

var radios = document.getElementsByClassName('radio');
// console.log(cells);
for (var i = 0; i < radios.length; i++) {
  // console.log("add click cell " + cells[i].id);
  radios[i].addEventListener('click', onRadioClick);
}

var onResetClick = function() {
  winner = BLANK;
  curPlayer = O;
  moves = 0;
  board = [
    [BLANK, BLANK, BLANK],
    [BLANK, BLANK, BLANK],
    [BLANK, BLANK, BLANK]
  ];

  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = BLANK;
    cells[i].className = 'cell';
  }

  switchPlayer();
  makeComputerMove();
}

document.getElementById('reset').addEventListener('click', onResetClick);
onResetClick();
