console.log('Javascript is a go');

var player1;
var player2;
var game = true;
var currentPlayer = 'X';

var alertBox = document.getElementsByClassName("alertbox")[0];
var topRow = document.getElementById("row1");
var middleRow = document.getElementById("row2");
var bottomRow = document.getElementById("row3");

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
  });
}



var checkForWin = function () {
  // If all boxes in row 1 have an x, player 1 won
    // topRow.children. ;
      if (topRow.textContent == 'X') {
        document.getElementsByClassName("alertbox")[0].textContent = "Player 1 won the game!";
        document.getElementsByClassName("alertbox")[0].classList.remove("red");
        document.getElementsByClassName("alertbox")[0].classList.add("green");    
      } else if (topRow.textContent == 'O'){
        // If all the boxes in row 1 have an o, player 2 won
        document.getElementsByClassName("alertbox")[0].textContent = "Player 2 won the game!";
        document.getElementsByClassName("alertbox")[0].classList.remove("red");
        document.getElementsByClassName("alertbox")[0].classList.add("green"); 
      } else {
        return;
      }
  
}
checkForWin();


// var initGame = function() {
//   // This line empties the game array
//   game.length = 0;
  
//   console.log(game);
//   // document.getElementById("siren").play();
// }







// Reload Game
document.getElementsByTagName("button")[0].addEventListener("click", function() {
  location.reload();
});


// 8 win conditions, earliest win on 5th move
// Don't have to check all win conditions, depending on where you play
// Potential class names: col 1/2/3 row 1/2/3 diag 1/2

// Initial Game Board 
//  Empty Board
//  Player One Start message or Play vs. AI message
//  Reset button
//  Game audio?

// Win Condition
//  Play "win" audio?
//  Display "win" message in notification div


// Lose Condition
//  Three x or o in a row

// Reset Game Board

// AI Opponent 

// Icons for the game
{/* <i class="fas fa-times"></i>
<i class="far fa-circle"></i> */}

//maybe replace the block with something like
