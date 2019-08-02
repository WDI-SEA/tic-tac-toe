//Global variables:
var scorePlayer1 = 1;
var scorePlayer2 = 1;
var gameOver = false;
var currentPlayer = 1;
var x ="X";
var o ="O";
var currentBoard = new Object();
currentBoard["a11"] = '-';
currentBoard["a12"] = '-';
currentBoard["a13"] = '-';
currentBoard["a21"] = '-';
currentBoard["a22"] = '-';
currentBoard["a23"] = '-';
currentBoard["a31"] = '-';
currentBoard["a32"] = '-';
currentBoard["a33"] = '-';
var winningConditions = [
  ["a11", "a12","a13"],
  ["a21", "a22","a23"],
  ["a31", "a32","a33"],
  ["a11", "a21","a31"],
  ["a12", "a22","a32"],
  ["a13", "a23","a33"],
  ["a11", "a22","a33"],
  ["a13", "a22","a31"]
];
var boxClicked = {
  a11: false,
  a12: false,
  a13: false,
  a21: false,
  a22: false,
  a23: false,
  a31: false,
  a32: false,
  a33: false
}
var newGameButton;
var resetGameButton;
var gridBox;
var gameMessage = document.getElementById("gamemessage");
var scorePl1 = document.getElementById("scoreplayer1");
var scorePl2 = document.getElementById("scoreplayer2");
document.addEventListener("DOMContentLoaded", function(e) {
  //console.log('LOADED!')
  newGameButton = document.getElementById("newgame");
  resetGameButton = document.getElementById("reset");
  gridBox = document.getElementById("gridbox");
  newGameButton.addEventListener("click", function(e) {
    console.log("clicked New Game Button");
    startNewGame();
  });
  resetGameButton.addEventListener("click", function(e) {
    console.log("clicked Reset Game Button");
    reset();
  });
  gridBox.addEventListener('click', function(e){
    if (!boxClicked[e.target.id] && !gameOver) {
      console.log(e.target.id + " Clicked");
      e.target.textContent = x;
      //e.target.src = "img/doggy.jpg";
      if (currentPlayer === 1) {
        e.target.textContent = x;
        //e.target.classList.add(x);
        currentBoard[e.target.id] = x;
        currentBoard[e.target.src] = "img/doggy.jpg";
        console.log(e.target.classList);
        currentPlayer++;
      } else {
        e.target.textContent = o;
        //e.target.classList.add(o);
        currentBoard[e.target.id] = o;
        currentBoard[e.target.src] = "img/kitty.jpg";
        currentPlayer--;
      }
    checkWin();
    }
  })
})
function checkWin() {
  
  var isWin = false;
  for (var i = 0; i < winningConditions.length; i++) {
    var matchCount = 0;
    var charToCheck = '';
    for (var j = 0; j < winningConditions[i].length; j++) {
      var id = winningConditions[i][j];
      if (currentBoard[id] !== 'X' && currentBoard[id] !== 'O') {
        break;
      } else if (j === 0) {
        charToCheck = currentBoard[id];
      }
      if (charToCheck === currentBoard[id]) {
        matchCount++;
      }
    }
    if (matchCount === 3) {
      isWin = true;
      break;
    }
  }
  if (currentPlayer === 1 && isWin) {
    console.log("Player2 Wins");
    document.getElementById("scoreplayer2").textContent = scorePlayer1;
    //scorePl2.textContent = scorePlayer1;
    scorePlayer1++;
    document.getElementById("gamemessage").textContent = "Player 2 Wins!";
    document.getElementById("gamemessage").style.background = "rgba(255,255,255,0.5)";
    document.getElementById("gamemessage").style.border = "1px solid black";
    //gameMessage.textContent = "Player 2 Wins!";
  } else if (currentPlayer === 2 && isWin) {
    console.log("Player1 wins");
    document.getElementById("scoreplayer1").textContent = scorePlayer2;
    //scorePl1.textContent = scorePlayer2;
    scorePlayer2++;
    document.getElementById("gamemessage").textContent = "Player 1 Wins!";
    document.getElementById("gamemessage").style.background = "rgba(255,255,255,0.5)";
    document.getElementById("gamemessage").style.border = "1px solid black";
    //gameMessage.textContent = "Player 1 Wins!";
  }
  checkForDraw();
}
function checkForDraw() {
  var cells = document.getElementsByClassName("cell");
  var counter = 0;
  while (counter < 9) {
    if (cells[counter].textContent === "X" || cells[counter].textContent === "O") {
      counter += 1;
      } else {
        return;
      }
    if (counter === 9) {
      document.getElementById("gamemessage").textContent = "It's a draw!";
    }
  }
};
function startNewGame() {
  currentPlayer = 1;
  currentBoard["a11"] = '-';
  currentBoard["a12"] = '-';
  currentBoard["a13"] = '-';
  currentBoard["a21"] = '-';
  currentBoard["a22"] = '-';
  currentBoard["a23"] = '-';
  currentBoard["a31"] = '-';
  currentBoard["a32"] = '-';
  currentBoard["a33"] = '-';
for (let box in boxClicked) {
  boxClicked[box] = false;
}
  document.getElementById("a11").textContent = '';
  document.getElementById("a12").textContent = '';
  document.getElementById("a13").textContent = '';
  document.getElementById("a21").textContent = '';
  document.getElementById("a22").textContent = '';
  document.getElementById("a23").textContent = '';
  document.getElementById("a31").textContent = '';
  document.getElementById("a32").textContent = '';
  document.getElementById("a33").textContent = '';
}
function reset() {
  gameOver = false;
  scorePlayer1 = 1;
  scorePlayer2 = 1;
  //scorePl1.textContent = "0";
  //scorePl2.textContent = "0";
  document.getElementById("scoreplayer1").textContent = "0";
  document.getElementById("scoreplayer1").textContent = "0";
  startNewGame();
}