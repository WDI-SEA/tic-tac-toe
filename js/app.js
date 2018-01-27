console.log('Hello frontend');
var playerO = {
  id: "playerO",
  score: 0,
  src: "./img/o-image.png",
  plays: []
};
var playerX = {
  id: "playerX",
  score: 0,
  src: "./img/x-image.png",
  plays: []
};
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
var currentPlayer = "playerX";

var newGame = function(){
  console.log("newGame called");
  

};

var checkGame = function(){
  //check the game to see if someone won
  console.log("check game called");

}

var flipImage = function(){
  //increase move count, adjust current player, set new image src
  gameBoard.moveCount++;
  if (currentPlayer === "playerO"){
    this.src = playerO.src;
    currentPlayer = "playerX";
  } else {
    this.src = playerX.src;
    currentPlayer = "playerO";
  }
  //check the game to see if someone won
  if (gameBoard.moveCount > 9){
    newGame();
  } else if (gameBoard.moveCount > 2){
    checkGame();
  }
}

// create and load game pieces
var loadGamePieces = function(){
  // create and load game pices
  var gamePieces = document.getElementsByClassName("row");
  for (var i = 0; i < gamePieces.length; i++){
    var gamePiece = document.createElement("img");
    gamePiece.src = gameBoard.src;
    gamePiece.id = "gamePiece"+(i+1);
    gamePiece.addEventListener("click", flipImage);
    gamePieces[i].appendChild(gamePiece);
  }
  gameBoard.moveCount = 0;
}

var initGame = function(){
  loadGamePieces();

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
