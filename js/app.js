console.log('Javascript is a go');

var currentPlayer = 'X';


var gameBoard = [
  [document.getElementById('box1'), document.getElementById('box2'), document.getElementById('box3')],
  [document.getElementById('box4'), document.getElementById('box5'), document.getElementById('box6')],
  [document.getElementById('box7'), document.getElementById('box8'), document.getElementById('box9')] 
];

var alertBox = document.getElementsByClassName("alertbox")[0];

var boxElements = document.getElementsByClassName("box");

for (var i=0; i<boxElements.length; i++) {
  boxElements[i].addEventListener("click",function(){
    if (this.textContent == 'X' || this.textContent == 'O') {
      return;
    }
    this.textContent = currentPlayer;
    if (currentPlayer == 'X') {
      currentPlayer = 'O';
      alertBox.textContent = "Player 2, make a move.";
      this.style.color = "blue";
    } else {
      currentPlayer = 'X';
      alertBox.textContent = "Player 1, make a move.";
      this.style.color = "yellow";
    }
    console.log("box clicked");
    checkForWin();
  });
}

var checkForWin = function () {
  var winner;
  // Check rows for a win
  for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[i][0].textContent === gameBoard[i][1].textContent && gameBoard[i][1].textContent === gameBoard[i][2].textContent) {
      if (gameBoard[i][0].textContent === 'X') {
        // Player 1 has won
        console.log("Player 1 has won due to row " + i);
        updateMessage("Player 1");
      } else if (gameBoard[i][0].textContent === 'O') {
        // Player 2 has won
        console.log("Player 2 has won due to row " + i);
        updateMessage("Player 2");
      }
    }
  }  
  // Check Columns for a win
  for (var i = 0; i < gameBoard.length; i++) {
    if (gameBoard[0][i].textContent === gameBoard[1][i].textContent && gameBoard[1][i].textContent === gameBoard[2][i].textContent) {
      if (gameBoard[0][i].textContent === 'X') {
        // Player 1 has won
        console.log("Player 1 has won due to column " + i);
        updateMessage("Player 1");
      } else if (gameBoard[0][i].textContent === 'O') {
        // Player 2 has won
        console.log("Player 2 has won due to column " + i);
        updateMessage("Player 2");
      }
    }
  }  
  // Check Diagonal 1 for a win
  if (gameBoard[0][0].textContent === gameBoard[1][1].textContent && gameBoard[1][1].textContent === gameBoard[2][2].textContent) {
    if (gameBoard[0][0].textContent === 'X') {
      // Player 1 has won
      console.log("Player 1 has won due to diagonal column 1");
      updateMessage("Player 1");
    } else if (gameBoard[0][0].textContent === 'O') {
      // Player 2 has won
      console.log("Player 2 has won due to diagonal column 1");
      updateMessage("Player 2");
    }
  }
  // Check Diagonal 2 for a win
  if (gameBoard[2][0].textContent === gameBoard[1][1].textContent && gameBoard[1][1].textContent === gameBoard[0][2].textContent) {
    if (gameBoard[0][2].textContent === 'X') {
      // Player 1 has won
      console.log("Player 1 has won due to diagonal column 2");
      updateMessage("Player 1");
    } else if (gameBoard[0][2].textContent === 'O') {
      // Player 2 has won
      console.log("Player 2 has won due to diagonal column 2");
      updateMessage("Player 2");
    } 
  }
}

var updateMessage = function(winner) {
  alertBox.textContent = winner + " won the game!";
  alertBox.classList.remove("red");
  alertBox.classList.add("green");
}

// Reset Game Board
document.getElementsByTagName("button")[0].addEventListener("click", function() {
  location.reload();
});