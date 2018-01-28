var squares = document.querySelectorAll('.square');
var resetButton = document.querySelector('#resetButton');
var gameBoard = document.getElementsByClassName('gameBoard')[0];
var gameOver = false;
var boxArr = [];
var xObject = [];
var oObject = [];
var xPlayed = [];
var oPlayed = [];

var boxesPlayed = {
  one: false,
  two: false,
  three: false,
  four: false,
  five: false,
  six: false,
  seven: false,
  eight: false,
  nine: false
};

var wins1 = ['1', '2', '3'];
var wins2 = ['4', '5', '6'];
var wins3 = ['7', '8', '9'];
var wins4 = ['1', '4', '7'];
var wins5 = ['2', '5', '8'];
var wins6 = ['3', '6', '9'];
var wins7 = ['1', '5', '9'];
var wins8 = ['3', '5', '7'];


//found this on Stack Overflow by Max Heiber
var isWin = function(arr1, arr2) {
  return arr2.every(function(arr2Item){
    return arr1.includes(arr2Item);
  });
};

var allNum = Object.keys(boxesPlayed);

var nextSymbol = function() {
  //find next symbol
  if (xSymbol.checked) {
    return boxArr.length % 2 !== 0 ? 'x' : 'o';
  }
  if (oSymbol.checked) {
    return boxArr.length % 2 !== 0 ? 'o' : 'x';
  }
};

var insetBox = function() {
  var num = this.getAttribute('data-id');
  this.setAttribute('id', num);
  this.removeAttribute('data-id');
};

var endGame = function(status) {
  if (status === 'x') {
    //code for x win
    console.log('x won');
  } else if (status === 'o') {
    //code for o win
    console.log('o won');
  } else if (status) {
    //code for tie
    console.log('tie');
  }
};

var checkForGameOver = function() {
  var xHold = null;
  var oHold = null;
  for (var i = 0; i < xObject.length; i++) {
   xHold = xObject[i].getAttribute('data-win');
   if (!xPlayed.includes(xHold)) {
       xPlayed.push(xHold);
   }
  }
  for (var i = 0; i < oObject.length; i++) {
   oHold = oObject[i].getAttribute('data-win');
   if (!oPlayed.includes(oHold)) {
       oPlayed.push(oHold);
   }
  }

switch (true) {
  case isWin(xPlayed, wins1):
  case isWin(xPlayed, wins2):
  case isWin(xPlayed, wins3):
  case isWin(xPlayed, wins4):
  case isWin(xPlayed, wins5):
  case isWin(xPlayed, wins6):
  case isWin(xPlayed, wins7):
  case isWin(xPlayed, wins8):
    gameOver = 'x';
    break;
  case isWin(oPlayed, wins1):
  case isWin(oPlayed, wins2):
  case isWin(oPlayed, wins3):
  case isWin(oPlayed, wins4):
  case isWin(oPlayed, wins5):
  case isWin(oPlayed, wins6):
  case isWin(oPlayed, wins7):
  case isWin(oPlayed, wins8):
    gameOver = 'o';
    break;
  case xPlayed.length === 5:
    gameOver = true;
    break;
  case oPlayed.length === 5:
    gameOver = true;
    break;
  default: 
    gameOver = false;
}

};

var playBox = function() {
  var radioButtonXOff = function() {
    document.getElementById("xSymbol").disabled = true;
  }
  var radioButtonOOff = function() {
    document.getElementById("oSymbol").disabled = true;
  }
  radioButtonXOff();
  radioButtonOOff();
  if (!boxesPlayed[this.id] && !gameOver) {
    boxesPlayed[this.id] = true;
    boxArr.push(this);
    var newP = document.createElement('p');
    this.appendChild(newP);
    this.children[0].textContent = nextSymbol();
    nextSymbol() === 'x' ? xObject.push(this) : oObject.push(this);
    checkForGameOver();
    endGame(gameOver);
  }
};

var reset = function () {
  gameOver = false;
  boxArr = [];
  xObject = [];
  oObject = [];
  xPlayed = [];
  oPlayed = [];
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = ' ';
    squares[i].removeAttribute('id');
  }
  for (num in boxesPlayed) {
    boxesPlayed[num] = false;
  }
  var radioButtonXOn = function() {
    document.getElementById("xSymbol").disabled = false;
  }
  var radioButtonOOn = function() {
    document.getElementById("oSymbol").disabled = false;
  }
  radioButtonXOn();
  radioButtonOOn();
};

document.addEventListener("DOMContentLoaded", function() {
  var spinBoard = function() {
    gameBoard.setAttribute('id', 'gameBoardClicked');
    for (var i = 0; i < squares.length; i++) {
    squares[i].setAttribute("data-id", allNum[i]);
    squares[i].addEventListener('click', insetBox);
    squares[i].addEventListener('click', playBox);
    }
  };
  resetButton.addEventListener('click', reset);
  gameBoard.addEventListener('click', spinBoard);
  boxArr = [];
  xObject = [];
  oObject = [];
  xPlayed = [];
  oPlayed = [];
});

//MY NOTES - TO DO
//Start game
//reset game
//determine winner
//come up with winning combos
//push img to clicked box
//check for win after each turn

//Bonus - make board move on mouseenter so you can't win


//FROM CLASS
//add multiple classes to each win solution
//add a class for row 1, etc.
//add a class for column 1, etc.
//add a class for diagonal1, etc.
//gameboard with divs...can line up with inline-block

//FROM GITHUB
//click on different squares to make a move.
//Every click will alternate between  an X and O
//when clicked, add class to box to display separate colors
//box can't be replayed once marked
//Add reset button that clears board contents
//Display message to show which turn is about to be played
//stop game and alert the winner - 3 in a row/diagonal
//Determine all winning combos & Check those combos after every move

//Bonuses
//Add a simple AI to support one player vs computer mode
//Note that randomly selecting a space would count as "simple"
