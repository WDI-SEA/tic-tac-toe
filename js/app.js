var x = "X";
var o = "O";
var currentPlayer = x;
var moves = 0;

console.log("started");

var resetBoard = function () {
  var clearSquares = document.getElementsByClassName('cell');
  for (var i=0; i < clearSquares.length; i++) {
        clearSquares[i].classList.remove('x');
        clearSquares[i].classList.remove('o');
        moves = 0;
        console.log("did something");
      }
};
var clearButton = document.getElementById('reset');
console.log(clearButton);
clearButton.addEventListener('click', resetBoard);


 var switchUser = function () {
  if (currentPlayer === x) currentPlayer = o;
  else currentPlayer = x;
} 

var divClick = function () {
  if(this.innerHTML === "") {
    moves++;
    this.innerHTML=currentPlayer;
  }
  else return;
  if (checkForWinner()) {
    announceWinner();
    gameOver();
  }
 
  switchUser();
} 

var cells = document.getElementsByClassName("cell");

for(var i = 0; i < cells.length; i++){
  cells[i].addEventListener("click", divClick);
  
}

var checkForWinner = function() {
  var cases = ["row1" , "row2", "row3", "col1", "col2", "col3", "diag1", "diag2"];
  for(var c = 0; c < cases.length; c++){
    var set = document.getElementsByClassName(cases[c]);
    var count = 0;
    
    for(var i = 0; i < 3; i++){
      if (set[i].innerHTML == currentPlayer)
      count++;
    }
    if (count == 3) return true;
  }

  return false;
}

var announceWinner = function() {
  alert(currentPlayer + " has WON!!!");
}