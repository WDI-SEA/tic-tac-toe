console.log('Hello frontend');

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");

var boardPosition = ["tl", "tm", "tr", "ml", "mm", "mr", "bl", "bm", "br"];
var status = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
var boardSize = 9;
var x = 'X';
var o = 'O';
var emptySquare = ' ';
var squares = [];
var currentPlayer = x;
var catsGame = false;
var win;


for(var i = 0; i < boardSize; i++){
    squares.push({ Square_order: boardPosition[i], status: emptySquare});
  }

console.log("Board with squares created:", boardPosition[0], boardPosition[1], boardPosition[2], boardPosition[3], boardPosition[4], boardPosition[5], boardPosition[6], boardPosition[7], boardPosition[8]);

// //Add an event listener to each box
var board = document.getElementById("board");
  console.log('Attaching event listeners to squares');
  for(var j = 0; j < board.children.length; j++){
    board.children[j].addEventListener("click", squareClicked);
  }
resetButton.addEventListener('click', function(){
  //var resetButton = document.getElementById('resetButton');
  for(var i=0; i < status.length; i++){
    status[i] = ' ';
  }
  for(var i = 0; i < boardSize; i++){
        squares.pop();
  }

  for(i = 0; i < boardSize; i++){
        squares.push({ Square_order: boardPosition[i], status: emptySquare});
  }

});

  // 1,/ckear content
  //    - Status array to ' '
  //    - win to false. catsgame to false
  // 2.Re-attach the event listeners to used squares.
  // 3, Draw a clean board.


function squareClicked(){
  console.log("Square Clicked, " + this.id);

  for (var i=0; i < status.length; i++){
    if (boardPosition[i] == this.id) {
      status[i] = currentPlayer;
      break;
    }
  }
  this.textContent = currentPlayer;

  win = checkForWin(currentPlayer);
  if (win === true) {
    endOfGame();
  }

  catsGame = checkForCatsGame();
  if (catsGame === true) {
    document.body.style.background = "url('img/cat.jpeg')";
  }

// remove event listener below so square can only be played once
  console.log('Removing event listener ' + this.id);
  console.log('Square: ' + this.id + " " + "Value: " + this.textContent);
  this.removeEventListener("click", squareClicked);
  currentPlayer = switchPlayer(currentPlayer);
}
function switchPlayer(currentPlayer) {
  // switches player turns
    currentPlayer = ( currentPlayer === x ) ? o : x;
    console.log( 'Current Player: ' + currentPlayer );
    // actual line of code that chooses the player who's turn it is
    return currentPlayer;
  }

  function checkForWin(param1) {
    var player = param1;
    if(player === status[0] && player === status[1] && player === status[2]){
      console.log('Checking boxes 0,1,2 for win');
      return true;}
    else if (player === status[0] && player === status[3] && player === status[6]){
        console.log('Checking boxes 0,3,6 for win');
        return true;
    }
    else if (player === status[0] && player === status[4] && player === status[8]){
        console.log('Checking boxes 0,4,8 for win');
        return true;
    }
    else if (player === status[1] && player === status[4] && player === status[7]){
        console.log('Checking boxes 1,4,7 for win');
        return true;
    }
    else if (player === status[2] && player === status[4] && player === status[6]){
        console.log('Checking boxes 2,4,6 for win');
        return true;
    }
    else if (player === status[2] && player === status[5] && player === status[8]){
        console.log('Checking boxes 2,5,8 for win');
        return true;
    }
    else if (player === status[3] && player === status[4] && player === status[5]){
        console.log('Checking boxes 3,4,5 for win');
        return true;
    }
    else if (player === status[6] && player === status[7] && player === status[8]){
        console.log('Checking boxes 6,7,8 for win');
        return true;
    }
    else
    console.log('Checking for win: Not a winner');
    return false;
  }

function endOfGame() {
  if(checkForWin(currentPlayer) === true) {
    document.body.style.background = "url('img/winning.jpeg')";
  }
}

function checkForCatsGame() {
  var temp = true;
  for (var i=0; i < status.length; i++){
    if(status[i] === " ") {
      temp = false;
        break;
    }

}
  return temp;
}
});
