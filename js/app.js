// selectors
var cells = document.querySelectorAll(".cell");
var resetBtn = document.querySelector(".reset");
var turnIndicator = document.querySelector(".turn");
var spanWinner = document.querySelector(".winner");
var spanX = document.querySelector(".score-x");
var spanO = document.querySelector(".score-o");

var computerBtn = document.querySelector(".button-holder");

// player markers
var xMarker = `<i class="far fa-times-circle red"></i>`;
var oMarker = `<i class="far fa-dot-circle blue"></i>`;

// win combos
var winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// variables
var isPlayerOne = true;
var movesCount = 0;
var markX = [];
var markO = [];
var gameOver = false;
var xScore = 0;
var oScore = 0;

var isComputerPlayer = false;

// FUNCTIONS

// computer button toggle
computerBtn.addEventListener("click", function() {
  this.classList.toggle("active");
  isComputerPlayer = !isComputerPlayer;
  // isPlayerOne = true;
  // console.log(isComputerPlayer);
  initGame(); //reset game when changing mode
});

// updateTurn
var updateTurn = function() {
  if (!gameOver) {
    if (isPlayerOne) {
      turnIndicator.innerHTML = xMarker;
    } else {
      turnIndicator.innerHTML = oMarker;
    }
  }
};

// updateScore
var updateScore = function() {
  spanX.textContent = `${xScore}`;
  spanO.textContent = `${oScore}`;
};

// updateWinner
var updateWinner = function(condition) {
  if (condition === "draw") {
    spanWinner.textContent = "Draw!";
    spanWinner.classList.add("blinking");
  } else {
    spanWinner.textContent = "Winner!";
    spanWinner.classList.add("blinking");
  }
};

// endGame
var endGame = function() {
  // remove all click listener
  cells.forEach(function(cell) {
    cell.removeEventListener("click", clickCell);
  });
  updateScore();
  isPlayerOne = !isPlayerOne; // swap players next game
};

// declareWin
var declareWin = function(condition) {
  if (condition === "draw") {
    console.log("Tie");
    updateWinner("draw");
    isPlayerOne = !isPlayerOne; // swap players next game
  } else if (isPlayerOne) {
    console.log("Player One Won");
    updateWinner();
    xScore++;
  } else if (!isPlayerOne) {
    console.log("Player Two Won");
    updateWinner();
    oScore++;
  }
  endGame();
};

// checkWin
// * @param: markX or markO
var checkWin = function(arr) {
  if (arr.length >= 3) {
    // check if marker array === one of the win combo[array]
    winCombos.forEach(function(combo) {
      if (
        arr.includes(combo[0]) &&
        arr.includes(combo[1]) &&
        arr.includes(combo[2])
      ) {
        // console.log("found", arr, combo);
        gameOver = true;
        declareWin();
      }
    });
  }
};

// AI controller
// if computer
//  human click -> comp move

//comp move
// random 0-8
// if markX.includes(rand) && markO.includes(rand), random again
// else cells[rand].click()
var computerMove = function() {
  while (true) {
    var randnum = Math.floor(Math.random() * 9);
    if (!markX.includes(randnum) && !markO.includes(randnum)) break;
  }

  console.log(randnum, markX, markO);

  cells[randnum].innerHTML = oMarker;
  markO.push(randnum);
  checkWin(markO);
  isPlayerOne = true;

  cells[randnum].removeEventListener("click", clickCell);
  updateTurn();
  movesCount++;
};

// clickCell, event callback
var clickCell = function() {
  if (isComputerPlayer) {
    if (isPlayerOne) {
      this.innerHTML = xMarker;
      markX.push(parseInt(this.id)); // keep track of marked x
      checkWin(markX); // check for match
      isPlayerOne = false; // change turn

      // console.log(foo);
      if (!gameOver) {
        setTimeout(function() {
          computerMove();
        }, 900);
      }
    }
  } else {
    if (isPlayerOne) {
      this.innerHTML = xMarker;
      markX.push(parseInt(this.id)); // keep track of marked x
      checkWin(markX); // check for match
      isPlayerOne = false; // change turn
    } else {
      this.innerHTML = oMarker;
      markO.push(parseInt(this.id));
      checkWin(markO);
      isPlayerOne = true;
    }
  }

  this.removeEventListener("click", clickCell);
  updateTurn();
  movesCount++;
  if (movesCount > 8 && gameOver === false) declareWin("draw"); // if last move && not Game over
};

// initGame
var initGame = function() {
  // reset variables
  gameOver = false;
  movesCount = 0;
  markX.length = 0;
  markO.length = 0;

  // reset cell content
  // add click listeners to cells
  cells.forEach(function(cell) {
    cell.textContent = "";
    cell.addEventListener("click", clickCell);

    // remove blink
    spanWinner.classList.remove("blinking");
  });

  updateTurn();
  resetBtn.addEventListener("click", initGame);
  // if computer & player2
  if (isComputerPlayer && !isPlayerOne) {
    computerMove();
  }
};

initGame();
