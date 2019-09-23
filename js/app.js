// TIC TAC TOE LOGIC

/*
Explicitly enable mixed code (including pre-ES5) with this
special directive. 
Strict mode:
- catches some common coding bloopers, throwing exceptions.
- Prevents, or throws errors, when relatively "unsafe" actions
  are taken (such as gaining access to the global object).
- Disables features that are confusing or poorly thought out.
*/
"use strict";
// Library now strictly defined

// Block scope variables
// Variables that remain constant
const startScreen = document.getElementById("start"),
  startButton = document.querySelector(".button"),
  newButton = document.getElementById("newGame"), 
  boardScreen = document.getElementById("board"),
  finishScreen = document.getElementById("finish"),
  squares = document.querySelector(".boxes"),
  square = document.querySelector(".boxes > .box"),
  o = "url(img/o.svg)",
  x = "url(img/x.svg)",
  /*
  Permutator will check for any combination of, say, 012:
  Permutations of 0, 1, 2:
  012, 120, 201,
  210, 021, 102
  There are 6 permuations for each of the 8 winning combinations.
  Instead of making an array of 48 combinations and then checking
  for any one of those, I decided to create a function which takes
  any combination of moves and then creates an array consisting of
  all possible variations of those moves. Then if any of those
  combinations (array) match a regular expression (string) of a
  winning combination in any of its permutations, announce a
  winner.
  */
  wins = ["012", "345", "678", "036", "147", "258", "048", "246"],
  board = Array(9);
// Variables that will change
let player1 = document.getElementById("player1"),
  player2 = document.getElementById("player2"),
  player1Name = document.getElementById("player1Name"),
  player2Name = document.getElementById("player2Name"),
  printName1 = document.getElementById("printName1"),
  printName2 = document.getElementById("printName2"),
  message = document.querySelector(".message"),
  currentPlayer = player1,
  player1Move = [],
  player2Move = [];

// Show Current Display
function showScreen(screen) {
  if (screen == startScreen) {
    startScreen.style.display = "block";
    boardScreen.style.display = "none";
    finishScreen.style.display = "none";
  } else if (screen == boardScreen) {
    startScreen.style.display = "none";
    boardScreen.style.display = "block";
    finishScreen.style.display = "none";
  } else if (screen == finishScreen) {
    startScreen.style.display = "none";
    boardScreen.style.display = "none";
    finishScreen.style.display = "block";
  }
}

// Start with Random Player
function pickRandom() {
  if (Math.random() < 0.5) {
    currentPlayer = player1;
  } else {
    currentPlayer = player2;
  }
}

// New Game
function newGame() {
  showScreen(boardScreen);
  // Prints Names to Screen
  let name1 = player1Name.value,
    name2 = player2Name.value;
  if (name1 == "" && name2 == "") {
    printName1.innerHTML = "Player 1";
    printName2.innerHTML = "Player 2";
  } else if (name1 == "") {
    printName1.innerHTML = "Player 1";
    printName2.innerHTML = name2;
  } else if (name2 == "") {
    printName1.innerHTML = name1;
    printName2.innerHTML = "Player 2";
  } else {
    printName1.innerHTML = name1;
    printName2.innerHTML = name2;  
  }
}

// Switch Player
function switchPlayer() {
  currentPlayer = currentPlayer == player1 ? player2 : player1;
}

// Highlight Player / Unhighlight Player
function highlightPlayer() {
  if (currentPlayer == player1) {
    player1.classList.add("active");
  } else {
    player2.classList.add("active");
  }
}

function unhighlightPlayer() {
  player1.classList.remove("active");
  player2.classList.remove("active");
}

// Highlight Square / Unhighlight Square
function highlightSquare() {
  squares.addEventListener("mouseover", (e) => {
    if (currentPlayer == player1) {
      e.target.style.backgroundImage = o;
    } else {
      e.target.style.backgroundImage = x;
    }
  });
}

function unhighlightSquare() {
  squares.addEventListener("mouseout", (e) => {
    e.target.style.backgroundImage = "";
  });
}

// Pick Square
function pickSquare() {
  squares.addEventListener("click", (e) => {
    const gameplay = () => {
      checkWinner();
      switchPlayer();
      unhighlightPlayer();
      highlightPlayer();
      e.target.style.pointerEvents = "none";
    }
    let boxFilledIndex = [].slice.call(e.target.parentNode.children).indexOf(e.target);
    if (currentPlayer == player1) {
      player1Move.push(boxFilledIndex);
      e.target.classList.add("box-filled-1");
      gameplay();
    } else {
      player2Move.push(boxFilledIndex);
      e.target.classList.add("box-filled-2");
      gameplay();
    }
  });
}

// Check for Winner
function checkWinner() {
  /*
  The permutator function creates an array of all the
  moves made in a game. The variation of moves are then
  checked against a regular expression. If any of the winning
  combinations are found then announce the winner of the game.
  */
  let permutator = (arr1) => {
    let result = [];
    const permutate = (arr2, arr3 = []) => {
      // Push the array of permutations into the 'results' array
      if (arr2.length === 0) {
        result.push(arr3);
      /*
      If the array is not empty then append the newer
      moves after the older moves.
      */
      } else {
        for (let i = 0; i < arr2.length; i++) {
          let num = arr2.slice(),
            nextNum = num.splice(i, 1);
          permutate(num.slice(), arr3.concat(nextNum));
        }
      }
    }
    /*
    Pass the 'arr1' input parameter into the
    'permutate' function
    */
    permutate(arr1);
    return result;
  },
  // Pass each player's moves into the permutator
  player1Score = permutator(player1Move),
  player2Score = permutator(player2Move),
  /*
  A win is false by default. A player can only win when
  either of these variables becomes true.
  */
  player1Win = "false",
  player2Win = "false";

  // Iterate through the array of winning combinations
  wins.forEach(win => {
    let winning = new RegExp(".?" + win[0] + ".?" + win[1] + ".?" + win[2] + ".?"),
      /*
      If a permutated combination of a player's moves matches
      one of the winning combinations as a regular expression
      then return a winner.
      */
      isTrue = (win) => {
      return win === "true";
    };

    // Assign the winner as being either Player 1 or Player 2.
    if (winning.test(player1Score)) {
      player1Win = "true";
    } else if (winning.test(player2Score)) {
      player2Win = "true";
    }

    // If Player 1 is the winner
    if (([player1Win]).some(isTrue)) {
      message.innerHTML = printName1.textContent + " Wins";
      finishScreen.classList.add("screen-win-one");
      finishScreen.classList.remove("screen-win-two");
      finishScreen.classList.remove("screen-win-tie");
      showScreen(finishScreen);
    // If Player 2 is the winner
    } else if (([player2Win]).some(isTrue)) {
      message.innerHTML = printName2.textContent + " Wins";
      finishScreen.classList.remove("screen-win-one");
      finishScreen.classList.add("screen-win-two");
      finishScreen.classList.remove("screen-win-tie");
      showScreen(finishScreen);
    // If the game ends in a draw
    } else if (([player1Win]).some(isTrue) === false &&
      ([player2Win]).some(isTrue) === false &&
      player1Move.length + player2Move.length === 9) {
      message.innerHTML = "It's a Tie!";
      finishScreen.classList.remove("screen-win-one");
      finishScreen.classList.remove("screen-win-two");
      finishScreen.classList.add("screen-win-tie");
      showScreen(finishScreen);
    }
  });
  // Demonstration
  console.log(`🏆 Winning Combinations: ${wins} 🏆`);
  console.log(`🙂 ${printName1.textContent} \n Moves: ${player1Move} \n Permutations: ${player1Score} \n Win: ${player1Win}`);
  console.log(`🙂 ${printName2.textContent} \n Moves: ${player2Move} \n Permutations: ${player2Score} \n Win: ${player2Win}`);
}

// Start a new game
function reset() {
  location.reload();
}

// Function calls
showScreen(startScreen);
startButton.addEventListener("click", newGame);
pickRandom();
highlightPlayer();
highlightSquare();
unhighlightSquare();
pickSquare();
newButton.addEventListener("click", reset);