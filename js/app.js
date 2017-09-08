document.addEventListener('DOMContentLoaded', function() {

var harry = document.getElementsByClassName("harry");
var draco = document.getElementsByClassName("draco");
var resetButton = document.getElementById("reset");
var squares = document.getElementsByClassName("squares");
var square1 = document.getElementById("square1");
var square2 = document.getElementById("square2");
var square3 = document.getElementById("square3");
var square4 = document.getElementById("square4");
var square5 = document.getElementById("square5");
var square6 = document.getElementById("square6");
var square7 = document.getElementById("square7");
var square8 = document.getElementById("square8");
var square9 = document.getElementById("square9");


var player = "";
var winner = "";

function startGame() {
  // clearBox();
  if(Math.random() < 0.5) {
    player = 'harry';
    }else{
    player = 'draco';
  }
  winner = null;
  setMessage(player + " is chasing after the Snitch!");
}

function setMessage(msg) {
  document.getElementById("message").innerText = msg;
}

function nextMove(square) {
  if (player==='harry'){
      square.classList.add('harry');
      checkForWinner();
  }else if (player==='draco'){
      square.classList.add('draco');
      checkForWinner();
  }else{
      setMessage("Hey now, you can't pick that one.");
  }
  switchTurn();
}



function switchTurn() {
  if(checkForWinner(move)) {
   winner = player;
   setMessage(winner + " has caught the Snitch!");
  }else if(player === 'harry') {
    player = 'draco';
    setMessage("Now " + player + " is going after the Snitch!");
  }else{
    player = "harry";
    setMessage("Now " + player + " is going after the Snitch!");
  }
}



//new checkForWinner:
function checkForWinner(move) {
  //var result=false;
  if(square1===square2 && square1===square3 & square2===square3){
    declareWinner();
  }else if(square4===square5 && square4===square6 && square5===square6){
    declareWinner();
  }else if(square7===square8 && square7===square9 && square8===square9){
    declareWinner();
  }else if(square1===square4 && square1===square7 && square4===square7){
    declareWinner();
  }else if(square2===square5 && square2===square6 && square5===square6){
    declareWinner();
  }else if(square3===square6 && square3===square9 && square6===square9){
    declareWinner();
  }else if(square1===square5 && square1===square9 && square5===square9){
    declareWinner();
  }else if(square3===square5 && square3===square7 && square5===square7){
    declareWinner();
  }else{
    setMessage("Oh blimey, the Snitch flew away into the distance!");
  }
}


function declareWinner(){
  winner=player;
  setMessage(winner + " has caught the Snitch!");
  //insert snitch animation once rest of game is working
}
   


//old checkForWinner:

// function checkForWinner(move) {
//   var result = false;
//   if (checkRow(1, 2, 3, move) || 
//       checkRow(4, 5, 6, move) ||
//       checkRow(7, 8, 9, move) ||
//       checkRow(1, 4, 7, move) ||
//       checkRow(2, 5, 8, move) ||
//       checkRow(3, 6, 9, move) ||
//       checkRow(1, 5, 9, move) ||
//       checkRow(3, 5, 7, move)) {

//       result = true;
//   }
//   return result;
// }


function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) === move && getBox(b) === move && getBox(c) === move) {
    result = true;
  } return result;
}

function getBox(number) {
  return document.getElementById("square" + number);
}


function clearBox() {
  for (var i = 1; i <= 9; i++) {
    document.getElementById("square" + (i)).style.backgroundImage="none";
    document.getElementById("square" + (i)).style.background="rgba(255,255,255,0.5);";
  } 
}

resetButton.addEventListener("click", clearBox);

for (var i = 1; i < 10; i++) {
  // console.log(getBox(i));
  getBox(i).addEventListener("click", function() {
    nextMove(this);
  });
}

startGame();

});