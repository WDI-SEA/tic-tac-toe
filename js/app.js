console.log('Hello tic-tac-toe');

/*
board:
col     co1     co1     dia
0:[00]  1:[01]  2:[02]  row
3:[10]  4:[11]  5:[12]  row
6:[20]  7:[21]  8:[22]  row
                        dia
*/

var dim = 3; // grid size of dim**2
//for potential future customizing

/* ELEMENT SETUP */
var squares = document.getElementsByClassName("square");
var scores = document.getElementsByClassName("score");
var message = document.getElementById("message");

// players[0] = "o", players[1] = "x"
// i decided that 0 should represent
// "o" due to their similar shapes
var players = ["o", "x"];
var player = 1; // "x" goes first
var moves = 0; // max moves is dim**2;

/* GAME INITIALIZATION */
// assuming static 3x3 grid
// maybe edit later for modular grid size
resetSquares();

function zeroedScores() {
  scores[0].textContent = 0;
  scores[1].textContent = 0;
  message.textContent =  "scores reset. player " + players[player] + " begins next game.";
  resetSquares();
}

function resetSquares() {
  moves = 0;
  for (var i=0; i<squares.length; i++) {
    squares[i].style = "";
    squares[i].textContent = "-";
    squares[i].addEventListener("click", claimSq);
  }
}

/* PLAYER TURN STATES */
// switch between players on function call
function nextTurn(p) {
  return 1 - p; // SWITCHES BETWEEN 0 AND 1
}

function claimSq() {
  this.removeEventListener("click", claimSq);
  this.style.color = "#000";
  this.textContent = players[player];
  message.textContent = "player " + players[nextTurn(player)] + "'s turn."
  moves += 1;
  var pts = checkWin(player, this);
  if (pts > 0) { // did player score points on turn?
    winState();
    markScore(player, pts);
  } else if (moves === dim**2) { // are there any moves left?
    tieState();
  } // if neither, keep going
  player = nextTurn(player); // bring into checkWin
}

/* CHECK WIN FUNCTIONS */
function checkRow(p, elem) {
  // 0:[00] 1:[01] 2:[02] row
  // 3:[10] 4:[11] 5:[12] row
  // 6:[20] 7:[21] 8:[22] row
  var mark = players[p]; // easier to type and it doesn't have to be updated yet anyway
  var row = parseInt(elem.id[0]); // 0, 1, 2 => 0, 3, 6
  // start iterating from squares[row*3]
  for (var i=0; i<dim; i++){
    // does each square from the row match
    if (squares[i + row*dim].textContent !== mark) { // it doesn't?
      return false; // welp.
    }
  }
  // if none of the marks differ from the last checked mark
  for (var i=0; i<dim; i++){
    // does each square from the row match
    highlight(squares[i + row*dim]);
  }
  return true;// it's a win!
}

function checkCol(p, elem) {
  // 0:[00] 3:[10] 6:[20] col
  // 1:[01] 4:[11] 7:[21] col
  // 2:[02] 5:[12] 8:[22] col
  var mark = players[p];
  var col = parseInt(elem.id[1]); // 0, 1, 2 => 0, 1, 2
  // start iterating from squares[i*3 + col]
  for (var i=0; i<dim; i++){
    // does the square match the last mark?
    if (squares[col + i*dim].textContent !== mark) { // it doesn't?
      return false; // welp.
    }
  }
  // if none of the marks differ from the last checked mark
  for (var i=0; i<dim; i++){
    highlight(squares[col + i*dim]);
  }
  return true; // it's a win!
}

function checkDia1(p, elem) {
  // 0:[00] 4:[11] 8:[22] dia
  var mark = players[p];
  var id = "";
  // from (0,0) to (n,n)
  for (var i=0; i<dim; i++) {
    id = i.toString() + i.toString();
    sq = document.getElementById(id);
    if (sq.textContent !== mark) {
      return false;
    }
  }
  // if none of the marks differ from the last checked mark
  for (var i=0; i<dim; i++){
    id = i.toString() + i.toString();
    sq = document.getElementById(id);
    highlight(sq);
  }
  return true;
}

function checkDia2(p, elem) {
  // 2:[02] 4:[11] 6:[20] dia
  var mark = players[p];
  var id = "";
  // from (0,n) to (n,0)
  for (var i=0; i<dim; i++) {
    id = i.toString() + (dim-1-i);
    sq = document.getElementById(id);
    if (sq.textContent !== mark) {
      return false;
    }
  }
  // if none of the marks differ from the last checked mark
  for (var i=0; i<dim; i++){
    id = i.toString() + (dim-1-i);
    sq = document.getElementById(id);
    highlight(sq);
  }
  return true;
}

function highlight(elem) {
    elem.style.backgroundColor = "gold";
}

function checkWin(p, elem) {
  row = checkRow(p, elem);
  col = checkCol(p, elem);
  dia1 = checkDia1(p, elem);
  dia2 = checkDia2(p, elem);
  // it's possible to get two wins simultaneously
  return row + col + dia1 + dia2;
}

function winState() {
  for (var i=0; i<squares.length; i++) {
    squares[i].removeEventListener("click", claimSq);
  }
  message.textContent = "player " + players[player] + " won. player " + players[nextTurn(player)] + " begins next game.";
}

function tieState() {
  for (var i=0; i<squares.length; i++) {
    squares[i].removeEventListener("click", claimSq);
  }
  message.textContent = "it's a draw. player " + players[nextTurn(player)] + " begins next game.";
}

function markScore(p, pt) {
  scores[p].textContent = parseInt(scores[p].textContent) + pt;
}
