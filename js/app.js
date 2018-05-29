

// used const b/c we do not want to change var one, two..etc
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");

const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const button = document.getElementById("button");

const playerOne = document.getElementById("player-one");
const playerTwo = document.getElementById("player-two");

const youWinText = document.getElementById("you-win-text");


var gamePiece = "X";

var boxStatus = {
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

var playersTurn = function () {
  if (gamePiece === "X") {
    playerOne.style.fontWeight = "bold";
    playerOne.style.transform = "scale(1.5)";
    playerTwo.style.fontWeight = "normal";
    playerTwo.style.transform = "scale(1)";
  } else if (gamePiece === "O") {
    playerOne.style.fontWeight = "normal";
    playerOne.style.transform = "scale(1)";
    playerTwo.style.fontWeight = "bold";
    playerTwo.style.transform = "scale(1.5)";
  };
};

var endGame = function(){
  one.removeEventListener("click", fillBoxOne);
  two.removeEventListener("click", fillBoxTwo);
  three.removeEventListener("click", fillBoxThree);
  four.removeEventListener("click", fillBoxFour);
  five.removeEventListener("click", fillBoxFive);
  six.removeEventListener("click", fillBoxSix);
  seven.removeEventListener("click", fillBoxSeven);
  eight.removeEventListener("click", fillBoxEight);
  nine.removeEventListener("click", fillBoxNine);
};


var checkEndGame = function(){
  var b = boxStatus;
// check box 1 2 3 checking to see if box status one is not false
  if (b.one !== false && b.one === b.two && b.two === b.three){
    if (b.one === "X") {
      youWinText.textContent = "PLAYER ONE WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    } else if (b.one === "O") {
      youWinText.textContent = "PLAYER TWO WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    };
    // check box 4 5 6 checking to see if box status four is not false
  } else if (b.four !== false && b.four === b.five && b.five === b.six){
    if (b.four === "X") {
      youWinText.textContent = "PLAYER ONE WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    } else if (b.four === "O") {
      youWinText.textContent = "PLAYER TWO WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    };
    // check box 7 8 9 chuecking to see if box status seven is not false
  } else if (b.seven !== false && b.seven === b.eight && b.eight === b.nine){
    if (b.seven === "X") {
      youWinText.textContent = "PLAYER ONE WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    } else if (b.seven === "O") {
      youWinText.textContent = "PLAYER TWO WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    };
  // check box 1 4 7 checking to see if box status one is not false
} else if (b.one !== false && b.one === b.four && b.four === b.seven){
    if (b.one === "X") {
      youWinText.textContent = "PLAYER ONE WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    } else if (b.one === "O") {
      youWinText.textContent = "PLAYER TWO WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    };
  // check box 2 5 8 checking to see if box status two is not false
} else if (b.two !== false  && b.two === b.five && b.five === b.eight){
    if (b.two === "X") {
      youWinText.textContent = "PLAYER ONE WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    } else if (b.two === "O") {
      youWinText.textContent = "PLAYER TWO WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    };
  // check box 3 6 9 checking to see if box status three is not false
} else if (b.three !== false && b.three === b.six && b.six === b.nine){
    if (b.three === "X") {
      youWinText.textContent = "PLAYER ONE WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    } else if (b.three === "O") {
      youWinText.textContent = "PLAYER TWO WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    };
  // check box 1 5 9 checking to see if box status one is not false
} else if (b.one !== false && b.one === b.five && b.five === b.nine){
    if (b.one === "X") {
      youWinText.textContent = "PLAYER ONE WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    } else if (b.one === "O") {
      youWinText.textContent = "PLAYER TWO WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    };
  // check box 3 5 7 checking to see if box status three is not false
} else if (b.three !== false && b.three === b.five && b.five === b.seven){
    if (b.three === "X") {
      youWinText.textContent = "PLAYER ONE WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    } else if (b.three === "O") {
      youWinText.textContent = "PLAYER TWO WINS!"
      youWinText.style.fontWeight = "bold";
      youWinText.style.transform = "scale(1)";
      endGame();
    };
    // Tie
  } else if (b.one !== false && b.two !== false && b.three !== false && b.four !== false && b.five !== false && b.six !== false && b.seven !== false && b.eight !== false && b.nine !== false) {
    youWinText.textContent = "Sorry, there is no winner. Try Again."
    youWinText.style.transform = "scale(1)";
    endGame();
  } else {
    playersTurn();
  }
};

var changeGamePiece = function() {
  if (gamePiece === "X") {
    gamePiece = "O";
  } else {
    gamePiece = "X";
  }
  checkEndGame();
};

var fillBoxOne = function(){
  if (!boxStatus.one) {
    one.textContent = gamePiece;
    boxStatus.one = gamePiece;
    if (gamePiece === "X") {
      one.style.backgroundColor = "plum";
    } else {
      one.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};
var fillBoxTwo = function(){
  if (!boxStatus.two) {
    two.textContent = gamePiece;
    boxStatus.two = gamePiece;
    if (gamePiece === "X") {
      two.style.backgroundColor = "plum";
    } else {
      two.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};
var fillBoxThree = function(){
  if (!boxStatus.three) {
    three.textContent = gamePiece;
    boxStatus.three = gamePiece;
    if (gamePiece === "X") {
      three.style.backgroundColor = "plum";
    } else {
      three.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};
var fillBoxFour = function(){
  if (!boxStatus.four) {
    four.textContent = gamePiece;
    boxStatus.four = gamePiece;
    if (gamePiece === "X") {
      four.style.backgroundColor = "plum";
    } else {
      four.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};
var fillBoxFive = function(){
  if (!boxStatus.five) {
    five.textContent = gamePiece;
    boxStatus.five = gamePiece;
    if (gamePiece === "X") {
      five.style.backgroundColor = "plum";
    } else {
      five.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};
var fillBoxSix = function(){
  if (!boxStatus.six) {
    six.textContent = gamePiece;
    boxStatus.six = gamePiece;
    if (gamePiece === "X") {
      six.style.backgroundColor = "plum";
    } else {
      six.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};
var fillBoxSeven = function(){
  if (!boxStatus.seven) {
    seven.textContent = gamePiece;
    boxStatus.seven = gamePiece;
    if (gamePiece === "X") {
      seven.style.backgroundColor = "plum";
    } else {
      seven.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};
var fillBoxEight = function(){
  if (!boxStatus.eight) {
    eight.textContent = gamePiece;
    boxStatus.eight = gamePiece;
    if (gamePiece === "X") {
      eight.style.backgroundColor = "plum";
    } else {
      eight.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};
var fillBoxNine = function(){
  if (!boxStatus.nine) {
    nine.textContent = gamePiece;
    boxStatus.nine = gamePiece;
    if (gamePiece === "X") {
      nine.style.backgroundColor = "plum";
    } else {
      nine.style.backgroundColor = "skyblue";
    }
    changeGamePiece();
  }
};


var addClick = function() {
  one.addEventListener("click", fillBoxOne);
  two.addEventListener("click", fillBoxTwo);
  three.addEventListener("click", fillBoxThree);
  four.addEventListener("click", fillBoxFour);
  five.addEventListener("click", fillBoxFive);
  six.addEventListener("click", fillBoxSix);
  seven.addEventListener("click", fillBoxSeven);
  eight.addEventListener("click", fillBoxEight);
  nine.addEventListener("click", fillBoxNine);
};

var reset = function() {
  addClick();
  boxStatus = {
    one: false,
    two: false,
    three: false,
    four: false,
    five: false,
    six: false,
    seven: false,
    eight: false,
    nine: false
  }
  gamePiece = "X";
  one.textContent = "";
  two.textContent = "";
  three.textContent = "";
  four.textContent = "";
  five.textContent = "";
  six.textContent = "";
  seven.textContent = "";
  eight.textContent = "";
  nine.textContent = "";
  youWinText.textContent = "";
  youWinText.style.transform = "scale(0)";

  playerOne.style.fontWeight = "bold";
  playerOne.style.transform = "scale(1.5)";
  playerTwo.style.fontWeight = "normal";
  playerTwo.style.transform = "scale(1)";

  one.style.backgroundColor = "";
  two.style.backgroundColor = "";
  three.style.backgroundColor = "";
  four.style.backgroundColor = "";
  five.style.backgroundColor = "";
  six.style.backgroundColor = "";
  seven.style.backgroundColor = "";
  eight.style.backgroundColor = "";
  nine.style.backgroundColor = "";
};

button.addEventListener("click", reset);

addClick();








// * Upon marking of an individual cell, use JavaScript to
// add a class to each cell to display separate colors.

// * Add a reset button that will clear the contents of the board.
// * Display a message to indicate which turn is about to be played.

// * After the necessary moves have been played,
// stop game and alert the winner if one player ends up winning
 // with three in a row.
//
