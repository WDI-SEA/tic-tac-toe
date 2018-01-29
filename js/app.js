// document.addEventListener("DOMContentLoaded", function() {

console.log('Hello javascript');

var box1 = document.getElementById("box1");  //box ids for each square
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

var player = 0;
var gameOver = false;
var marker;
// var winner = document.getElementById("winner");


var reset = function() {    //clear the game board
  var resetBoard = document.getElementsByClassName("box");
  for (var i = 0; i < resetBoard.length; i++) {
    player = 0;
    gameOver = false;
    this.innerText = " ";
    // resetBoard.classList.remove("X");
    // resetBoard.classList.remove("O");
  }
  startGame();
};

var winGame = function() {  //switch gameOver to true, display winner message
  if (player % 2 === 0) {
    alert("X is the winner!")
  } else {
    alert("O is the winner!")
  }
  gameOver = true;
};

var turn = function() {  //check whose turn it is
    if (player % 2 === 0) {
        // nextplayer.textContent = "O";
        // console.log("hi");
        this.innerText = "X";// marker = "X";
        // return "X";
    } else {
        // console.log("sup");
        // nextplayer.textContent = "X";
        this.innerText = "O";// marker = "O";
        // return "O";
    }
};

var checkForWinner = function() {  //check the 8 win condition combos
  // var markBox = turn();
  switch() {
    case box1.innerText = "X" && box2.innerText = "X" && box3.innerText = "X":
    winGame();
    break;
    case box4.innerText = "X" && box5.innerText = "X" && box6.innerText = "X":
    winGame();
    break;
    case box7.innerText = "X" && box8.innerText = "X" && box9.innerText = "X":
    winGame();
    break;
    case box1.innerText = "X" && box4.innerText = "X" && box7.innerText = "X":
    winGame();
    break;
    case box2.innerText = "X" && box5.innerText = "X" && box8.innerText = "X":
    winGame();
    break;
    case box3.innerText = "X" && box6.innerText = "X" && box9.innerText = "X":
    winGame();
    break;
    case box1.innerText = "X" && box5.innerText = "X" && box9.innerText = "X":
    winGame();
    break;
    case box3.innerText = "X" && box5.innerText = "X" && box7.innerText = "X":
    winGame();
    break;
    case box1.innerText = "O" && box2.innerText = "O" && box3.innerText = "O":
    winGame();
    break;
    case box4.innerText = "O" && box5.innerText = "O" && box6.innerText = "O":
    winGame();
    break;
    case box7.innerText = "O" && box8.innerText = "O" && box9.innerText = "O":
    winGame();
    break;
    case box1.innerText = "O" && box4.innerText = "O" && box7.innerText = "O":
    winGame();
    break;
    case box2.innerText = "O" && box5.innerText = "O" && box8.innerText = "O":
    winGame();
    break;
    case box3.innerText = "O" && box6.innerText = "O" && box9.innerText = "O":
    winGame();
    break;
    case box1.innerText = "O" && box5.innerText = "O" && box9.innerText = "O":
    winGame();
    break;
    case box3.innerText = "O" && box5.innerText = "O" && box7.innerText = "O":
    winGame();
    break;
  }
};

var play = function() {

  if ((this.innerText !== "X") && (this.innerText !== "O") && (gameOver === false)) {
    turn();
    // console.log(this);
    checkForWinner();
    player++;
  }
};

var startGame = function() {    //start the game
  var gameBoxes = document.getElementsByClassName("box");
  for (var i = 0; i < gameBoxes.length; i++) {
    gameBoxes[i].addEventListener("click", play);
  }
}
document.getElementById("reset").addEventListener("click", reset);
// document.getElementById("box1").addEventListener("click", play);

startGame();

// });
