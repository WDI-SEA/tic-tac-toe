
var harry = document.getElementById("harry");
var draco = document.getElementById("draco");

function startGame() {
  for (var i = 1; i <= 9; i = i +1) {
    clearBox(i);
  }
  if(Math.random() < 0.5) {
    document.turn = harry;
  }
  document.winner = null;
  setMessage(document.turn + " is chasing after the Snitch!");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
 if (document.turn !== null) {
  setMessage(document.turn + " already caught the Snitch.");
  if(square.innerText === "") {
    square.innerText = document.turn;
    switchTurn();
  }else{
    setMessage("Hey now, you can't pick that one.");
  }
}


function switchTurn() {
  if(checkForWinner(document.turn)) {
    document.winner = document.turn;
    setMessage(document.winner + " has caught the Snitch!");
  }else if(document.turn === harry) {
    document.turn = draco;
    setMessage("Now " + document.turn + " is going after the Snitch!");
  }else{
    document.turn = "harry";
    setMessage("Now " + document.turn + " is going after the Snitch!");
  }
}


function checkForWinner(move) {
  var result = false;
  if (checkRow(1, 2, 3, move) || 
      checkRow(4, 5, 6, move) ||
      checkRow(7, 8, 9, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(3, 6, 9, move) ||
      checkRow(1, 5, 9, move) ||
      checkRow(3, 5, 7, move)) {

      result = true;
  }
  return result;
}


function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true;
  } return result;
}

function getBox(number) {
  return document.getElementById("square" + number);
}


function clearBox(number) {
  document.getElementById("square" + number).innerText = "";
}
