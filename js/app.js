var N_SIZE = 3;
var EMPTY = '&nbsp;';
var boxes = [];
var turn = 'X';
var score;
var moves;

//Sets the board
function init() {
  var board = document.createElement('table');
  board.setAttribute('border', 0);
  board.setAttribute('cellspacing', 5);

  var identifier = 1;
  for (var i = 0; i < N_SIZE; i++) {
    var row = document.createElement('tr');
    board.appendChild(row);
    for (var j = 0; j < N_SIZE; j++) {
      var cell = document.createElement('td');
      cell.setAttribute('height', 200);
      cell.setAttribute('width', 200);
      cell.setAttribute('align', 'center');
      cell.setAttribute('valign', 'center');
      cell.classList.add('col' + j, 'row' + i);
      if (i == j) {
        cell.classList.add('diagonal0');
      }
      if (j == N_SIZE - i - 1) {
        cell.classList.add('diagonal1');
      }
      cell.identifier = identifier;
      cell.addEventListener('click', set);
      row.appendChild(cell);
      boxes.push(cell);
      identifier += identifier;
    }
  }

  document.getElementById('game').appendChild(board);
  startNewGame();
}

//Starts new game
function startNewGame() {
  score = {
    'X': 0,
    'O': 0
  };
  moves = 0;
  turn = 'X';
  document.getElementById('turn').textContent = 'Player ' + turn;
  boxes.forEach(function (square) {
    square.innerHTML = EMPTY;
  });
}

//Checks for a win
function win(clicked) {
  //Get all cell classes
  var memberOf = clicked.className.split(/\s+/);
  for (var i = 0; i < memberOf.length; i++) {
    var testClass = '.' + memberOf[i];
    var items = contains('#game ' + testClass, turn);
    //winning condition: turn == N_SIZE
    if (items.length == N_SIZE) {
      return true;
    }
  }
  return false;
}


//Helper function to check if NodeList from selector has a particular text
function contains(selector, text) {
  var elements = document.querySelectorAll(selector);
  return [].filter.call(elements, function (element) {
    return RegExp(text).test(element.textContent);
  });
}


//Sets clicked square and also updates the turn.
function set() {
  if (this.innerHTML !== EMPTY) {
    return;
  }
  this.innerHTML = turn;
  moves += 1;
  score[turn] += this.identifier;
  if (win(this)) {
    alert('Winner: Player ' + turn);
    startNewGame();
  } else if (moves === N_SIZE * N_SIZE) {
    alert('Draw');
    startNewGame();
  } else {
  	if (turn === 'O') {
  		this.style.color = 'blue';
  	} else {
  		this.style.color = 'red';
  	}
	turn = turn === 'X' ? 'O' : 'X';
    document.getElementById('turn').textContent = 'Player ' + turn;
  }
}

init();