var topL = document.getElementById('topLeft');
var topM = document.getElementById('topMid');
var topR = document.getElementById('topRight');
var midL = document.getElementById('midLeft');
var midM = document.getElementById('midMid');
var midR = document.getElementById('midRight');
var botL = document.getElementById('botLeft');
var botM = document.getElementById('botMid');
var botR = document.getElementById('botRight');

winnerTextEl = document.getElementById('winnerText');

var house;

var counter = 0;

var whosTurn = function(){
  if (counter % 2 === 0){
    house = "Targaryan";
    return "X";
  } else {
    house = "Lannister";
    return "O";
  }
};

var displayWinner = function (){
  winnerTextEl.textContent = house + " wins!";
}

var clearBoard = function () {
  var clearSquares = document.getElementsByClassName('squares');
  for (var i=0; i < clearSquares.length; i++) {
        clearSquares[i].classList.remove('X');
        clearSquares[i].classList.remove('O');
        winnerTextEl.textContent = "The game is on";
        counter = 0;
      }
};

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearBoard);



var checkForWinner = function (){
  var winner = whosTurn();
  switch(true) {
    case topL.classList.contains(winner) && topM.classList.contains(winner) && topR.classList.contains(winner):
     displayWinner();
     setTimeout(clearBoard, 2000);
    break;
    case midL.classList.contains(winner) && midM.classList.contains(winner) && midR.classList.contains(winner):
     displayWinner();
     setTimeout(clearBoard, 2000);
    break;
    case botL.classList.contains(winner) && botM.classList.contains(winner) && botR.classList.contains(winner):
     displayWinner();
     setTimeout(clearBoard, 2000);
    break;
    case topL.classList.contains(winner) && midL.classList.contains(winner) && botL.classList.contains(winner):
     displayWinner();
     setTimeout(clearBoard, 2000);
    break;
    case topM.classList.contains(winner) && midM.classList.contains(winner) && botM.classList.contains(winner):
     displayWinner();
     setTimeout(clearBoard, 2000);
    break;
    case topR.classList.contains(winner) && midR.classList.contains(winner) && botR.classList.contains(winner):
     displayWinner();
     setTimeout(clearBoard, 2000);
    break;
    case topL.classList.contains(winner) && midM.classList.contains(winner) && botR.classList.contains(winner):
     displayWinner();
     setTimeout(clearBoard, 2000);
    break;
    case botL.classList.contains(winner) && midM.classList.contains(winner) && topR.classList.contains(winner):
     displayWinner();
     setTimeout(clearBoard, 2000);
    break;
  }
};


var playTurn = function() {
  if (!this.classList.contains("X") && !this.classList.contains("O")) {
    this.classList.add(whosTurn());
    checkForWinner();
    counter++;
  }
};


var startBoard = function() {
  var gameSquares = document.getElementsByClassName('squares');
    for (var i=0; i < gameSquares.length; i++) {
      gameSquares[i].addEventListener('click', playTurn);
    }
  };


startBoard();









