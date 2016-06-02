document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM loaded!");

  // Declaring variables
  var firstMover;
  var clickCounter = 0;
  var movesMade = [];

  // Declaring DOM variables

  var cells = document.getElementsByClassName("cell");
  for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function(click) {
    if (cells[this.id].textContent != 0) {
      alert("Sorry, this square has already been played!");
    } else {
      if (clickCounter % 2 === 0) {
        movesMade[this] = "O";
        this.style.backgroundColor = "green";
        this.textContent = "O"
      } else {
        movesMade[this] = "X";
        this.style.backgroundColor = "blue";
        this.textContent = "X"
      }
      clickCounter += 1;
    }
    });
    // if (movesMade[0].value === "X" && movesMade[1].value === "X" && movesMade[2].value === "X") {
    //   alert("Player X wins!");
    // };
  }

  // Making reset button work
  var clickedReset = document.getElementById("resetButton");
  clickedReset.addEventListener("click", function(click) {
    location.reload();
  });

  // Function to find who moves first, Player X or Player O
  // var findFirstMover = function() {
  //   var randomNumber = Math.random();
  //   if (randomNumber > .5) {
  //     return firstMover = "Player X";
  //   } else {
  //     return firstMover = "Player O"
  //   }
  // };


  // Alert to explain rules and let players know who moves first
  // alert("Thanks for playing Tic Tac Toe! The rules are simple: click a box to claim a square. Get three squares in a row to win. Player X is up first. Have fun!");

});
