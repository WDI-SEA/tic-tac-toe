
var gameOver = false;
var space = document.getElementsByClassName("square");
var player = 1;
var checkForWin = null;
var resetSquares = null;
var movesBlue = [];
var movesBlack = [];

var checkForWin = function() {
  if (movesBlue.indexOf("pos0") !== -1 && movesBlue.indexOf("pos1") !== -1 && movesBlue.indexOf("pos2") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesBlue.indexOf("pos3") !== -1 && movesBlue.indexOf("pos4") !== -1 && movesBlue.indexOf("pos5") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesBlue.indexOf("pos6") !== -1 && movesBlue.indexOf("pos7") !== -1 && movesBlue.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesBlue.indexOf("pos0") !== -1 && movesBlue.indexOf("pos3") !== -1 && movesBlue.indexOf("pos6") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesBlue.indexOf("pos1") !== -1 && movesBlue.indexOf("pos4") !== -1 && movesBlue.indexOf("pos7") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesBlue.indexOf("pos2") !== -1 && movesBlue.indexOf("pos5") !== -1 && movesBlue.indexOf("pos7") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesBlue.indexOf("pos0") !== -1 && movesBlue.indexOf("pos4") !== -1 && movesBlue.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesBlue.indexOf("pos2") !== -1 && movesBlue.indexOf("pos4") !== -1 && movesBlue.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Blue Wins!";
    return true;
  }
  if (movesBlack.indexOf("pos0") !== -1 && movesBlack.indexOf("pos1") !== -1 && movesBlack.indexOf("pos2") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesBlack.indexOf("pos3") !== -1 && movesBlack.indexOf("pos4") !== -1 && movesBlack.indexOf("pos5") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesBlack.indexOf("pos6") !== -1 && movesBlack.indexOf("pos7") !== -1 && movesBlack.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesBlack.indexOf("pos0") !== -1 && movesBlack.indexOf("pos3") !== -1 && movesBlack.indexOf("pos6") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesBlack.indexOf("pos1") !== -1 && movesBlack.indexOf("pos4") !== -1 && movesBlack.indexOf("pos7") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesBlack.indexOf("pos2") !== -1 && movesBlack.indexOf("pos5") !== -1 && movesBlack.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesBlack.indexOf("pos0") !== -1 && movesBlack.indexOf("pos4") !== -1 && movesBlack.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesBlack.indexOf("pos2") !== -1 && movesBlack.indexOf("pos4") !== -1 && movesBlack.indexOf("pos8") !== -1) {
    document.getElementById("instructions").textContent = "Black Wins!";
    return true;
  }
  if (movesBlue.length === 5) {
    document.getElementById("instructions").textContent = "It's a Draw";
    return true;
  }
}

var makeAMove = function() {
      if (player === 1) {
        this.classList.remove("square");
        this.classList.add("squareBlue");
        document.getElementById("instructions").textContent = "Make your move, Black!";
        movesBlue.push(this.id);
        checkForWin();
        player = 0;

      } else if (player !== 1) {
        this.classList.remove("square");
        this.classList.add("squareBlack");
        document.getElementById("instructions").textContent = "Make your move, Blue!";
        movesBlack.push(this.id);
        checkForWin();
        player = 1;
      };
      if (checkForWin(true)) {
        gameOver = true;
        for (var j = 0; j < space.length; j++) {
          space[j].removeEventListener("click", makeAMove);
        };
    };
  };


var rematch = function() {
  document.getElementById("instructions").textContent = "Blue, you go first"
    var resetSquares = document.querySelectorAll(".square, .squareBlue, .squareBlack");
        for (var i = 0; i < resetSquares.length; i++){
        resetSquares[i].addEventListener("click", makeAMove);
        resetSquares[i].className = "square";
        movesBlue = [];
        movesBlack = [];
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
