console.log('Hello frontend');
// object that holds playerO
// https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/
// https://stackoverflow.com/questions/7837456/how-to-compare-arrays-in-javascript
var playerO = {
  id: "playerO",
  currentPlayer: false,
  score: 0,
  src: "./img/o-image.png",
  plays: []
};
// object that holds playerX
var playerX = {
  id: "playerX",
  currentPlayer: false,
  score: 0,
  src: "./img/x-image.png",
  plays: []
};
// object that holds gameBoard
var gameBoard = {
  src: "./img/frame.png",
  moveCount: 0,
  possibleWins: [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
  ]
};
var gameCount = 0;
var gameOver = false;

//reset the game
var newGame = function(){
  // console.log("newGame called");
  playerO.plays = [];
  playerX.plays = [];
  gameBoard.moveCount = 0;
  gameCount++;
  var displayCount = document.getElementById("gameCount").textContent = gameCount;
  loadGamePieces();
};

//check the game to see if someone won
var checkGame = function(){
  console.log("check game called");
  if (playerO.currentPlayer && playerO.plays.length > 1){
    // evaluate playerO plays with possibleWins
    console.log("check playerO");
    for (play in playerO.plays){
      console.log(playerO.plays[play]);

    }
    for (wins in gameBoard.possibleWins){
      console.log(gameBoard.possibleWins[wins]);

    }
  } else if (playerX.currentPlayer && playerX.plays.length > 1){
    // evaluate playerX plays with possibleWins
    console.log("check playerX");

  }

}

var currentPlayer = function(){
  if (playerO.currentPlayer){
    var notInPlay = document.getElementById("playerO");
    notInPlay.classList.remove("currentPlayer");
    var inPlay = document.getElementById("playerX");
    inPlay.classList.add("currentPlayer");
  } else {
    var notInPlay = document.getElementById("playerX");
    notInPlay.classList.remove("currentPlayer");
    var inPlay = document.getElementById("playerO");
    inPlay.classList.add("currentPlayer");
  }
}

//increase move count, adjust current player, set new image src
var flipImage = function(){
  gameBoard.moveCount++;
  if (playerO.currentPlayer){
    this.src = playerO.src;
    playerO.plays.push(parseInt(this.id));
    console.log("playerO");
    console.log(playerO.plays);
    playerO.currentPlayer = false;
    playerX.currentPlayer = true;
  } else {
    this.src = playerX.src;
    playerX.plays.push(parseInt(this.id));
    console.log("playerX");
    console.log(playerX.plays);
    playerX.currentPlayer = false;
    playerO.currentPlayer = true;
  }
  //check the game to see if someone won
  if (gameBoard.moveCount > 9){
    newGame();
  } else if (gameBoard.moveCount > 4){
    checkGame();
  }
  currentPlayer();
}

// create and load game pieces
var loadGamePieces = function(){
  var gamePieces = document.getElementsByClassName("row");
  // if game player game pieces are loaded change the face
  // console.log(gamePieces[0].children);
  if (gamePieces[0].children.length <= 0){
      // make game pieces
      for (var i = 0; i < gamePieces.length; i++){
        var gamePiece = document.createElement("img");
        gamePiece.setAttribute("src", gameBoard.src);
        gamePiece.setAttribute("id", i+1);
        gamePiece.setAttribute("data-id", "gamePiece"+(i+1));
        gamePiece.addEventListener("click", flipImage);
        gamePieces[i].appendChild(gamePiece);
      }
    } else {
      //update existing img tag
      for (var i = 0; i < gamePieces.length; i++){
        var gamePiece = document.getElementById((i+1));
        gamePiece.setAttribute("src", gameBoard.src);
      }
      // console.log(gamePieces[0].children);
    }
  }

// begin the game
var initGame = function(){
  loadGamePieces();
  currentPlayer();
  playerX.currentPlayer = true;
  gameCount = 0;

}

// wait for DOM to load then initate game
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("newGame").addEventListener("click", newGame);

  initGame();
});
// Before you even start working with JavaScript, construct the gameboard.
// The gameboard page should include the 3x3 grid (of divs), and at
// minimum a reset button. Using id and class on clickable elements
// will help you wire this up in JavaScript afterwards.
// The JavaScript portion will be next
// Select elements and attach functions via event listeners
// You will also need a variable to keep track of moves. This will be
// used to indicate whether or not to draw an X or an O

// Requirements
// A user should be able to click on different squares to make a move.
// Every click will alternate between marking an X and O
// Upon marking of an individual cell, use JavaScript to add a class to
// each cell to display separate colors.
// A cell should not be able to be replayed once marked.
// Add a reset button that will clear the contents of the board.
// Display a message to indicate which turn is about to be played.
// After the necessary moves have been played, stop game and alert the
// winner if one player ends up winning with three in a row.

// Hint: Determine a set of winning combinations. Check those combinations
// on the board contents after every move.

// Bonuses
// Add a simple AI to support one player vs computer mode. Note that randomly
// selecting a space would count as "simple". Try that and iterate from there.
// Add an AI that can beat you every time with the mini-max algorithm
