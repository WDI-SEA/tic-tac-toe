const boxOne = document.getElementById("one");
const boxTwo = document.getElementById("two");
const boxThree = document.getElementById("three");

const boxFour = document.getElementById("four");
const boxFive = document.getElementById("five");
const boxSix = document.getElementById("six");

const boxSeven = document.getElementById("seven");
const boxEight = document.getElementById("eight");
const boxNine = document.getElementById("nine");

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

// cannot click in box once someone wins
var endGame = function(){
  boxOne.removeEventListener("click", fillBoxOne);
  boxTwo.removeEventListener("click", fillBoxTwo);
  boxThree.removeEventListener("click", fillBoxThree);
  boxFour.removeEventListener("click", fillBoxFour);
  boxFive.removeEventListener("click", fillBoxFive);
  boxSix.removeEventListener("click", fillBoxSix);
  boxSeven.removeEventListener("click", fillBoxSeven);
  boxEight.removeEventListener("click", fillBoxEight);
  boxNine.removeEventListener("click", fillBoxNine);
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
    youWinText.textContent = "No winner, play again"
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
  // stops you from clicking a second time in the box
  // boxStatus starts at false !boxStatus.one = true --> runs code
  // boxStatus is either "X" or "O" !boxStatus.one = false --> doesn't run the code in the if
  if (!boxStatus.one) {
    boxOne.textContent = gamePiece;
    boxStatus.one = gamePiece;
    if (gamePiece === "X") {
      boxOne.style.backgroundColor = "#6892f0";
    } else {
      boxOne.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var fillBoxTwo = function(){
  if (!boxStatus.two) {
    boxTwo.textContent = gamePiece;
    boxStatus.two = gamePiece;
    if (gamePiece === "X") {
      boxTwo.style.backgroundColor = "#6892f0";
    } else {
      boxTwo.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var fillBoxThree = function(){
  if (!boxStatus.three) {
    boxThree.textContent = gamePiece;
    boxStatus.three = gamePiece;
    if (gamePiece === "X") {
      boxThree.style.backgroundColor = "#6892f0";
    } else {
      boxThree.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var fillBoxFour = function(){
  if (!boxStatus.four) {
    boxFour.textContent = gamePiece;
    boxStatus.four = gamePiece;
    if (gamePiece === "X") {
      boxFour.style.backgroundColor = "#6892f0";
    } else {
      boxFour.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var fillBoxFive = function(){
  if (!boxStatus.five) {
    boxFive.textContent = gamePiece;
    boxStatus.five = gamePiece;
    if (gamePiece === "X") {
      boxFive.style.backgroundColor = "#6892f0";
    } else {
      boxFive.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var fillBoxSix = function(){
  if (!boxStatus.six) {
    boxSix.textContent = gamePiece;
    boxStatus.six = gamePiece;
    if (gamePiece === "X") {
      boxSix.style.backgroundColor = "#6892f0";
    } else {
      boxSix.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var fillBoxSeven = function(){
  if (!boxStatus.seven) {
    boxSeven.textContent = gamePiece;
    boxStatus.seven = gamePiece;
    if (gamePiece === "X") {
      boxSeven.style.backgroundColor = "#6892f0";
    } else {
      boxSeven.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var fillBoxEight = function(){
  if (!boxStatus.eight) {
    boxEight.textContent = gamePiece;
    boxStatus.eight = gamePiece;
    if (gamePiece === "X") {
      boxEight.style.backgroundColor = "#6892f0";
    } else {
      boxEight.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var fillBoxNine = function(){
  if (!boxStatus.nine) {
    boxNine.textContent = gamePiece;
    boxStatus.nine = gamePiece;
    if (gamePiece === "X") {
      boxNine.style.backgroundColor = "#6892f0";
    } else {
      boxNine.style.backgroundColor = "#e3d874";
    }
    changeGamePiece();
  }
};

var addClick = function() {
  boxOne.addEventListener("click", fillBoxOne);
  boxTwo.addEventListener("click", fillBoxTwo);
  boxThree.addEventListener("click", fillBoxThree);
  boxFour.addEventListener("click", fillBoxFour);
  boxFive.addEventListener("click", fillBoxFive);
  boxSix.addEventListener("click", fillBoxSix);
  boxSeven.addEventListener("click", fillBoxSeven);
  boxEight.addEventListener("click", fillBoxEight);
  boxNine.addEventListener("click", fillBoxNine);
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
  boxOne.textContent = "";
  boxTwo.textContent = "";
  boxThree.textContent = "";
  boxFour.textContent = "";
  boxFive.textContent = "";
  boxSix.textContent = "";
  boxSeven.textContent = "";
  boxEight.textContent = "";
  boxNine.textContent = "";
  youWinText.style.transform = "scale(0)";

  playerOne.style.fontWeight = "bold";
  playerOne.style.transform = "scale(1.5)";
  playerTwo.style.fontWeight = "normal";
  playerTwo.style.transform = "scale(1)";

  boxOne.style.backgroundColor = "";
  boxTwo.style.backgroundColor = "";
  boxThree.style.backgroundColor = "";
  boxFour.style.backgroundColor = "";
  boxFive.style.backgroundColor = "";
  boxSix.style.backgroundColor = "";
  boxSeven.style.backgroundColor = "";
  boxEight.style.backgroundColor = "";
  boxNine.style.backgroundColor = "";
};

button.addEventListener("click", reset);

addClick();
