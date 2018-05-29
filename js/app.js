
// Decide who's turn it is
// Mark a box
// Switch player Turn


//variables
var gameOver;
var player1;
var player2;
var turn;
var game = true;
var boxesMarked = [];
var boxes = document.getElementsByClassName("box");
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

// if box is clicked, then box is marked
  var clickedBoxes = function() {
    //push box that has been clicked into array
    boxesMarked.push(this);
    // Deciding who's turn it is
    if (player1 === true) {
      document.getElementById("player").textContent = "1";
    } else {
      document.getElementById("player").textContent = "2";
    }
    player1 = !player1;
    if(player1) {
      this.textContent = "X";
  } else {
      this.textContent = "O";
  }
  console.log(boxesMarked.length);
  };

// loop through aray when a box has been clicked
for(var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", clickedBoxes);
}

// prevent box from being clicked on again
var dontRepeat = function() {
  if (this.textContent === "X" || this.textContent === "O") {
    boxes.removeEventListener("click", clickedBoxes);
  }
}


// reset the board
var initGame = function() {
  boxesMarked.length = 0;
}

// reset tic tac toe board function
var reset = function() {
  gameOver = false;
  var letters = document.getElementsByClassName("box")[0].children;
  for(let i = 0; i < letters.length; i++) {
    letters[i] = document.getElementById('box').textContent = '';
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded");
  document.getElementById("reset").addEventListener("click", reset);
  initGame();
});





// var boxMarked = {
//   box1: false,
//   box2: false,
//   box3: false,
//   box4: false,
//   box5: false,
//   box6: false,
//   box7: false,
//   box8: false,
//   box9: false,
// };

// var box2 = document.getElementById("box2").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box3 = document.getElementById("box3").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box4 = document.getElementById("box4").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box5 = document.getElementById("box5").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box6 = document.getElementById("box6").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box7 = document.getElementById("box7").addEventListener("click", function() {
//   console.log("X");
// });

// var box8 = document.getElementById("box8").addEventListener("click", function() {
//   console.log("X");
// });
//
// var box9 = document.getElementById("box9").addEventListener("click", function() {
//   console.log("X");
// });
