
var gameOver = false;
var space = document.getElementsByClassName("square");
var player = 1;
var checkForWin = null;
var resetSquares = null;

var gameboard = ["pos0", "pos1", "pos2", "pos3", "pos4", "pos5", "pos6", "pos7", "pos8"];
var movesX = [];
var movesO = [];

var checkForWin = function() {
  if (movesX.indexOf("pos0") !== -1 && movesX.indexOf("pos1") !== -1 && movesX.indexOf("pos2") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesX.indexOf("pos3") !== -1 && movesX.indexOf("pos4") !== -1 && movesX.indexOf("pos5") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesX.indexOf("pos6") !== -1 && movesX.indexOf("pos7") !== -1 && movesX.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesX.indexOf("pos0") !== -1 && movesX.indexOf("pos3") !== -1 && movesX.indexOf("pos6") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesX.indexOf("pos1") !== -1 && movesX.indexOf("pos4") !== -1 && movesX.indexOf("pos7") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesX.indexOf("pos2") !== -1 && movesX.indexOf("pos5") !== -1 && movesX.indexOf("pos7") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesX.indexOf("pos0") !== -1 && movesX.indexOf("pos4") !== -1 && movesX.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesX.indexOf("pos2") !== -1 && movesX.indexOf("pos4") !== -1 && movesX.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesO.indexOf("pos0") !== -1 && movesO.indexOf("pos1") !== -1 && movesO.indexOf("pos2") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesO.indexOf("pos3") !== -1 && movesO.indexOf("pos4") !== -1 && movesO.indexOf("pos5") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesO.indexOf("pos6") !== -1 && movesO.indexOf("pos7") !== -1 && movesO.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesO.indexOf("pos0") !== -1 && movesO.indexOf("pos3") !== -1 && movesO.indexOf("pos6") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesO.indexOf("pos1") !== -1 && movesO.indexOf("pos4") !== -1 && movesO.indexOf("pos7") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesO.indexOf("pos2") !== -1 && movesO.indexOf("pos5") !== -1 && movesO.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesO.indexOf("pos0") !== -1 && movesO.indexOf("pos4") !== -1 && movesO.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesO.indexOf("pos2") !== -1 && movesO.indexOf("pos4") !== -1 && movesO.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesX.length === 5) {
    document.getElementById("instructions").textContent = "It's A Draw";
    return true;
  }
}

var makeAMove = function() {
      if (player === 1) {
        this.classList.remove("square");
        this.classList.add("squareX");
        // this.textContent = "X";
        document.getElementById("instructions").textContent = "Make your move, Black!";
        movesX.push(this.id);
        checkForWin();
        player = 0;

      } else if (player !== 1) {
        this.classList.remove("square");
        this.classList.add("squareO");
        // this.textContent = "O";
        document.getElementById("instructions").textContent = "Make your move, Blue!";
        movesO.push(this.id);
        checkForWin();
        player = 1;
      };
      if (checkForWin(true)) {
        gameOver = true;
        for (var j = 0; j < space.length; j++) {
          space[j].removeEventListener("click", makeAMove);
        };
      } else if (movesX.length > 4 && checkForWin(false)) {
        gameOver = true;
        document.getElementById("instructions").textContent = "It's a draw!";
        for (var j = 0; j < space.length; j++) {
      }
    };
  };


var rematch = function() {
  document.getElementById("instructions").textContent = "Blue, you go first"
    var resetSquares = document.querySelectorAll(".square, .squareX, .squareO");
        for (var i = 0; i < resetSquares.length; i++){
        resetSquares[i].addEventListener("click", makeAMove);
        resetSquares[i].className = "square";
        movesX = [];
        movesO = [];
        player = 1;
      }
    };

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("pos0").addEventListener("click", makeAMove);
  document.getElementById("pos1").addEventListener("click", makeAMove);
  document.getElementById("pos2").addEventListener("click", makeAMove);
  document.getElementById("pos3").addEventListener("click", makeAMove);
  document.getElementById("pos4").addEventListener("click", makeAMove);
  document.getElementById("pos5").addEventListener("click", makeAMove);
  document.getElementById("pos6").addEventListener("click", makeAMove);
  document.getElementById("pos7").addEventListener("click", makeAMove);
  document.getElementById("pos8").addEventListener("click", makeAMove);
  document.getElementById("reset").addEventListener("click", rematch);


});
