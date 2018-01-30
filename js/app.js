// document.addEventListener("DOMContentLoaded", function() {

// console.log('Hello javascript');

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


var reset = function() {    //clear the game board
  var resetBoard = document.getElementsByClassName("box");
  for (var i = 0; i < resetBoard.length; i++) {
    player = 0;
    gameOver = false;
    resetBoard[i].classList.remove("X");
    resetBoard[i].classList.remove("O");
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

var turn = function(elm) {  //check whose turn it is

    if (player % 2 === 0) {
        nextplayer.textContent = "O";
        //console.log(elm);
        return "X";
    } else {
        //console.log(elm);
        nextplayer.textContent = "X";
        return "O";
    }
};

var checkForWinner = function() {  //check the 8 win condition combos
  var markBox = turn();
  switch(true) {
    case box1.classList.contains("X") && box2.classList.contains("X") && box3.classList.contains("X"):
    winGame();
    break;
    case box4.classList.contains("X") && box5.classList.contains("X") && box6.classList.contains("X"):
    winGame();
    break;
    case box7.classList.contains("X") && box8.classList.contains("X") && box9.classList.contains("X"):
    winGame();
    break;
    case box1.classList.contains("X") && box4.classList.contains("X") && box7.classList.contains("X"):
    winGame();
    break;
    case box2.classList.contains("X") && box5.classList.contains("X") && box8.classList.contains("X"):
    winGame();
    break;
    case box3.classList.contains("X") && box6.classList.contains("X") && box9.classList.contains("X"):
    winGame();
    break;
    case box1.classList.contains("X") && box5.classList.contains("X") && box9.classList.contains("X"):
    winGame();
    break;
    case box3.classList.contains("X") && box5.classList.contains("X") && box7.classList.contains("X"):
    winGame();
    break;
    case box1.classList.contains("O") && box2.classList.contains("O") && box3.classList.contains("O"):
    winGame();
    break;
    case box4.classList.contains("O") && box5.classList.contains("O") && box6.classList.contains("O"):
    winGame();
    break;
    case box7.classList.contains("O") && box8.classList.contains("O") && box9.classList.contains("O"):
    winGame();
    break;
    case box1.classList.contains("O") && box4.classList.contains("O") && box7.classList.contains("O"):
    winGame();
    break;
    case box2.classList.contains("O") && box5.classList.contains("O") && box8.classList.contains("O"):
    winGame();
    break;
    case box3.classList.contains("O") && box6.classList.contains("O") && box9.classList.contains("O"):
    winGame();
    break;
    case box1.classList.contains("O") && box5.classList.contains("O") && box9.classList.contains("O"):
    winGame();
    break;
    case box3.classList.contains("O") && box5.classList.contains("O") && box7.classList.contains("O"):
    winGame();
    break;
  }
};

var play = function() {

  if ((!this.classList.contains("X")) && (!this.classList.contains("O")) && (gameOver === false)) {
    this.classList.add(turn(this));
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
