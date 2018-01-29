var topL = document.getElementById('topLeft');
var topM = document.getElementById('topMid');
var topR = document.getElementById('topRight');
var midL = document.getElementById('midLeft');
var midM = document.getElementById('midMid');
var midR = document.getElementById('midRight');
var botL = document.getElementById('botLeft');
var botM = document.getElementById('botMid');
var botR = document.getElementById('botRight');

var winnerTextEl = document.getElementById('winnerText');
var turnText = document.getElementById('turnText');
var house;
var counter = 0;
var keepPlaying = true;

var whosTurn = function(){
  if (counter % 2 === 0){
    house = "Targaryan";
    turnText.textContent = "Lannister";
    return "X";
  } else {
    house = "Lannister";
    turnText.textContent = "Targaryen";
    return "O";
  }
};

var displayWinner = function (){
  winnerTextEl.textContent = house;
  turnText.textContent = " ";
  keepPlaying = false;
};

var clearBoard = function () {
  var clearSquares = document.getElementsByClassName('squares');
  for (var i=0; i < clearSquares.length; i++) {
        clearSquares[i].classList.remove('X');
        clearSquares[i].classList.remove('O');
        winnerTextEl.textContent = " ";
        counter = 0;
        keepPlaying = true;
      }
};

var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearBoard);

var checkForWinner = function (){
  var player = whosTurn();
  switch(true) {
    case topL.classList.contains(player) && topM.classList.contains(player) && topR.classList.contains(player):
     displayWinner();
    break;
    case midL.classList.contains(player) && midM.classList.contains(player) && midR.classList.contains(player):
     displayWinner();
    break;
    case botL.classList.contains(player) && botM.classList.contains(player) && botR.classList.contains(player):
     displayWinner();
    break;
    case topL.classList.contains(player) && midL.classList.contains(player) && botL.classList.contains(player):
     displayWinner();
    break;
    case topM.classList.contains(player) && midM.classList.contains(player) && botM.classList.contains(player):
     displayWinner();
    break;
    case topR.classList.contains(player) && midR.classList.contains(player) && botR.classList.contains(player):
     displayWinner();
    break;
    case topL.classList.contains(player) && midM.classList.contains(player) && botR.classList.contains(player):
     displayWinner();
    break;
    case botL.classList.contains(player) && midM.classList.contains(player) && topR.classList.contains(player):
     displayWinner();
    break;
  }
};

var playTurn = function() {
  if (!this.classList.contains("X") && !this.classList.contains("O") && keepPlaying) {
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



