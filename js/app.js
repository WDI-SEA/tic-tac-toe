var squares = document.querySelectorAll('.square');
var resetButton = document.querySelector('#resetButton');
var gameBoard = document.getElementsByClassName('gameBoard')[0];
var winSign = document.getElementsByClassName('winSign')[0];
var tieSign = document.getElementsByClassName('tieSign')[0];
var loseSign = document.getElementsByClassName('loseSign')[0];
var winPId = document.getElementById('winPId');
var tiePId = document.getElementById('tiePId');
var losePId = document.getElementById('losePId');
var nameInput1 = document.getElementById('nameInput1');
var nameInput2 = document.getElementById('nameInput2');
var nameButton = document.getElementById('nameButton');
var turnP = document.getElementById('turnP');
var xName = null;
var oName = null;
var onePlayerCheckBox = document.getElementById('onePlayerCheckBox');
var computerButton = document.getElementById('computerButton');
var impossibleCheckBoxId = document.getElementById('impossibleCheckBoxId');
var delay = null;
var winHashOne = document.getElementsByClassName('winHashOne')[0];
var winHashTwo = document.getElementsByClassName('winHashTwo')[0];
var winHashThree = document.getElementsByClassName('winHashThree')[0];
var winHashFour = document.getElementsByClassName('winHashFour')[0];
var winHashFive = document.getElementsByClassName('winHashFive')[0];
var winHashSix = document.getElementsByClassName('winHashSix')[0];
var winHashSeven = document.getElementsByClassName('winHashSeven')[0];
var winHashEight = document.getElementsByClassName('winHashEight')[0];

var numWords = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

var gameOver = false;
var boxArr = [];
var xObject = [];
var oObject = [];
var xPlayed = [];
var oPlayed = [];

var allBoxes = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var availableBoxes = [];

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

var allNum = Object.keys(boxesPlayed);

var wins1 = ['1', '2', '3'];
var wins2 = ['4', '5', '6'];
var wins3 = ['7', '8', '9'];
var wins4 = ['1', '4', '7'];
var wins5 = ['2', '5', '8'];
var wins6 = ['3', '6', '9'];
var wins7 = ['1', '5', '9'];
var wins8 = ['3', '5', '7'];

// var impossibleMode = function() {
//   if (impossibleCheckBoxId.checked) {
//     gameBoardHolder.setAttribute('id', 'gameBoardImpossible');
//   }
// };

// impossibleMode();

var changeName = function() {
  if (xSymbol.checked) {
    xName = nameInput1.value;
    oName = nameInput2.value;
  } else if (oSymbol.checked) {
    oName = nameInput1.value;
    xName = nameInput2.value;
  }
};

//found this on Stack Overflow by Max Heiber
var isWin = function(arr1, arr2) {
  return arr2.every(function(arr2Item){
    return arr1.includes(arr2Item);
  });
};

var insetBox = function() {
  var num = this.getAttribute('data-id');
  if (!boxesPlayed[this.id] && !gameOver) {
    this.setAttribute('id', num);
    this.removeAttribute('data-id');
  }
};

var insetBoxComputer = function(item) {
  var num = item.getAttribute('data-id');
  if (!boxesPlayed[item.id] && !gameOver) {
    item.setAttribute('id', num);
    item.removeAttribute('data-id');
  }
};

var endGame = function(status) {
  switch (true) {
    case status === 'x' && !onePlayerCheckBox.checked:
    case status === 'x' && onePlayerCheckBox.checked && xSymbol.checked:
      winPId.textContent = xName + ' wins!!';
      winSign.setAttribute('id', 'flipSign');
      break;
    case status === 'o' && !onePlayerCheckBox.checked:
    case status === 'o' && onePlayerCheckBox.checked && oSymbol.checked:
      winPId.textContent = oName + ' wins!!';
      winSign.setAttribute('id', 'flipSign');
      break;
    case status === 'x' && onePlayerCheckBox.checked && oSymbol.checked:
    case status === 'o' && onePlayerCheckBox.checked && xSymbol.checked:
      loseSign.setAttribute('id', 'flipSign');
      break
    case status:
      tieSign.setAttribute('id', 'flipSign');
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
    winHashOne.setAttribute('id', 'winHashOneBoard');
    gameOver = 'x';
    break;
  case isWin(xPlayed, wins2):
    winHashTwo.setAttribute('id', 'winHashTwoBoard');
    gameOver = 'x';
    break;
  case isWin(xPlayed, wins3):
    winHashThree.setAttribute('id', 'winHashThreeBoard');
    gameOver = 'x';
    break;
  case isWin(xPlayed, wins4):
    winHashFour.setAttribute('id', 'winHashFourBoard');
    gameOver = 'x';
    break;
  case isWin(xPlayed, wins5):
    winHashFive.setAttribute('id', 'winHashFiveBoard');
    gameOver = 'x';
    break;
  case isWin(xPlayed, wins6):
    winHashSix.setAttribute('id', 'winHashSixBoard');
    gameOver = 'x';
    break;
  case isWin(xPlayed, wins7):
    winHashSeven.setAttribute('id', 'winHashSevenBoard');
    gameOver = 'x';
    break;
  case isWin(xPlayed, wins8):
    winHashEight.setAttribute('id', 'winHashEightBoard');
    gameOver = 'x';
    break;
  case isWin(oPlayed, wins1):
    winHashOne.setAttribute('id', 'winHashOneBoard');
    gameOver = 'o';
    break;
  case isWin(oPlayed, wins2):
    winHashTwo.setAttribute('id', 'winHashTwoBoard');
    gameOver = 'o';
    break;
  case isWin(oPlayed, wins3):
    winHashThree.setAttribute('id', 'winHashThreeBoard');
    gameOver = 'o';
    break;
  case isWin(oPlayed, wins4):
    winHashFour.setAttribute('id', 'winHashFourBoard');
    gameOver = 'o';
    break;
  case isWin(oPlayed, wins5):
    winHashFive.setAttribute('id', 'winHashFiveBoard');
    gameOver = 'o';
    break;
  case isWin(oPlayed, wins6):
    winHashSix.setAttribute('id', 'winHashSixBoard');
    gameOver = 'o';
    break;
  case isWin(oPlayed, wins7):
    winHashSeven.setAttribute('id', 'winHashSevenBoard');
    gameOver = 'o';
    break;
  case isWin(oPlayed, wins8):
    winHashEight.setAttribute('id', 'winHashEightBoard');
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

// var nextSymbol = function() {
//   if (xSymbol.checked) {
//     if (boxArr.length % 2 !== 0 && !onePlayerCheckBox.checked) {
//       turnP.textcontent = xName;
//       return 'x';
//     } else if (boxArr.length % 2 === 0 && !onePlayerCheckBox.checked) {
//       turnP.textcontent = oName;
//       return 'o';
//     } else if (boxArr.length % 2 !== 0 && onePlayerCheckBox.checked) {
//       turnP.textcontent = xName;
//       return 'x';
//     }
//   }
//   if (oSymbol.checked) {
//     if (boxArr.length % 2 !== 0 && !onePlayerCheckBox.checked) {
//       turnP.textcontent = oName;
//       return 'o';
//     } else if (boxArr.length % 2 === 0 && !onePlayerCheckBox.checked) {
//       turnP.textcontent = xName;
//       return 'o';
//     } else if (boxArr.length % 2 !== 0 && onePlayerCheckBox.checked) {
//       turnP.textcontent = oName;
//       return 'x';
//     }
//   }
// };

var nextSymbol = function() {
  if (xSymbol.checked) {
    return boxArr.length % 2 !== 0 ? 'x' : 'o';
  }
  if (oSymbol.checked) {
    return boxArr.length % 2 !== 0 ? 'o' : 'x';
  }
};

var computerTurn = function() {
  if (xSymbol.checked && nextSymbol() === 'o' && onePlayerCheckBox.checked) {
    return true;
  } else if (oSymbol.checked && nextSymbol() === 'x' && onePlayerCheckBox.checked) {
    return true;
  } else {
    return false;
  }
};

var computerPlay = function() {
  if (computerTurn) {
    var computerBoxPlayed = null;
    var randNumKey = null;
    for (var i = 0; i < 1; i++) {
      var randNum = Math.floor(Math.random() * 9);
      randNumKey = numWords[randNum];
      if (!boxesPlayed[randNumKey] && !gameOver) {
        boxesPlayed[randNumKey] = true;
        computerBoxPlayed = document.querySelector('.' + randNumKey);
        insetBoxComputer(computerBoxPlayed);
        boxArr.push(computerBoxPlayed);
        var newP = document.createElement('p');
        computerBoxPlayed.appendChild(newP);
        computerBoxPlayed.children[0].textContent = nextSymbol();
        nextSymbol() === 'x' ? xObject.push(computerBoxPlayed) : oObject.push(computerBoxPlayed);
      } else {
        i--;
      }
    }
    checkForGameOver();
    endGame(gameOver);
  }
  
};

var playBox = function() {
  var radioButtonXOff = function() {
    document.getElementById("xSymbol").disabled = true;
  };
  var radioButtonOOff = function() {
    document.getElementById("oSymbol").disabled = true;
  };

  //DOESNT WORK AFTER HITTING SUBMIT BUTTON...WHY???
  var nameInputOff = function() {
    nameInput1.disabled = true;
    nameInput2.disabled = true;
  };
  radioButtonXOff();
  radioButtonOOff();
  nameInputOff();

  //LOGS FALSE BUT STILL PLAYS COMPUTER MOVE...WHY???
  console.log(computerTurn());
  //RUNNING COMPUTER PLAY STILL FREEZES BROWSER AFTER GAME OVER
  if (computerTurn()) {
      delay = setTimeout(computerPlay, 1000);
    }
  if (!boxesPlayed[this.id] && computerTurn && !gameOver) {
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
  availableBoxes = Array.from(allBoxes);
  winSign.removeAttribute('id');
  tieSign.removeAttribute('id');
  loseSign.removeAttribute('id');
  winHashOne.removeAttribute('id');
  winHashTwo.removeAttribute('id');
  winHashThree.removeAttribute('id');
  winHashFour.removeAttribute('id');
  winHashFive.removeAttribute('id');
  winHashSix.removeAttribute('id');
  winHashSeven.removeAttribute('id');
  winHashEight.removeAttribute('id');
  for (var i = 0; i < squares.length; i++) {
    squares[i].textContent = ' ';
    squares[i].removeAttribute('id');
  }
  for (var i = 0; i < numWords.length; i++) {
    squares[i].setAttribute('id', numWords[i] + 'Flip');
  }
  for (num in boxesPlayed) {
    boxesPlayed[num] = false;
  }
  var radioButtonXOn = function() {
    document.getElementById("xSymbol").disabled = false;
  };
  var radioButtonOOn = function() {
    document.getElementById("oSymbol").disabled = false;
  };
  var nameInputOn = function() {
    nameInput1.disabled = false;
    nameInput2.disabled = false;
  };
  radioButtonXOn();
  radioButtonOOn();
  nameInputOn();
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
  nameButton.addEventListener('click', changeName);
  computerButton.addEventListener('click', computerPlay);
  resetButton.addEventListener('click', reset);
  gameBoard.addEventListener('click', spinBoard);
  boxArr = [];
  availableBoxes = Array.from(allBoxes);
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
