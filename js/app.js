// object that holds playerO
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
  gameEnd: false,
  gameCount: 0,
  drawCount: 0,
  match: []
};

//reset the game
var newGame = function(){
  if (gameBoard.match.length < 3){
    gameBoard.drawCount++;
    var displayDrawCount = document.getElementById("drawCount").textContent = gameBoard.drawCount;
  }
  setMatch();
  playerO.plays = [];
  playerX.plays = [];
  gameBoard.gameEnd = false;
  gameBoard.moveCount = 0;
  loadGamePieces();
  currentPlayer();
  gameBoard.gameCount++;
  var displayCount = document.getElementById("gameCount").textContent = gameBoard.gameCount;
};

// set winning pieces
var setMatch = function(){
    var winMatch = document.getElementsByClassName("gamePiece");
    var matches = Array.from(gameBoard.match);
    if (gameBoard.gameEnd){
      for (var i = 0; i < matches.length; i++){
        winMatch[matches[i]-1].classList.remove("win");
        gameBoard.match = [];
      }
    } else {
      for (var i = 0; i < matches.length; i++){
        winMatch[matches[i]-1].classList.add("win");
        gameBoard.gameEnd = true;
      }
    }
}

// end the game
var endGame = function(){
  var el = document.getElementsByTagName("img");
  for (var i = 0; i < el.length; i++){
    el[i].removeEventListener("click", flipImage);
  }
  // update player score
  if (playerO.currentPlayer && gameBoard.match.length === 3){
    playerO.score++;
    var gameWon = document.getElementById("playerOScore").textContent = playerO.score;
  } else if (playerX.currentPlayer && gameBoard.match.length === 3) {
    playerX.score++;
    var gameWon = document.getElementById("playerXScore").textContent = playerX.score;
  }
  setMatch();
}

// check to see if game is over
var gameOver = function(array){
  var arrayToCompare = Array.from(array);
  arrayToCompare.sort();
  arrayLength = arrayToCompare.length;
  // check the winning possibilities
  switch (arrayLength >= 3){
    case arrayToCompare.indexOf(1) >-1 && arrayToCompare.indexOf(2) >-1 && arrayToCompare.indexOf(3) >-1:
      gameBoard.match = [1,2,3];
      endGame();
      break;
    case arrayToCompare.indexOf(4) >-1 && arrayToCompare.indexOf(5) >-1 && arrayToCompare.indexOf(6) >-1:
      gameBoard.match = [4,5,6];
      endGame();
      break;
    case arrayToCompare.indexOf(7) >-1 && arrayToCompare.indexOf(8) >-1 && arrayToCompare.indexOf(9) >-1:
      gameBoard.match = [7,8,9];
      endGame();
      break;
    case arrayToCompare.indexOf(1) >-1 && arrayToCompare.indexOf(4) >-1 && arrayToCompare.indexOf(7) >-1:
      gameBoard.match = [1,4,7];
      endGame();
      break;
    case arrayToCompare.indexOf(2) >-1 && arrayToCompare.indexOf(5) >-1 && arrayToCompare.indexOf(8) >-1:
      gameBoard.match = [2,5,8];
      endGame();
      break;
    case arrayToCompare.indexOf(3) >-1 && arrayToCompare.indexOf(6) >-1 && arrayToCompare.indexOf(9) >-1:
      gameBoard.match = [3,6,9];
      endGame();
      break;
    case arrayToCompare.indexOf(1) >-1 && arrayToCompare.indexOf(5) >-1 && arrayToCompare.indexOf(9) >-1:
      gameBoard.match = [1,5,9];
      endGame();
      break;
    case arrayToCompare.indexOf(3) >-1 && arrayToCompare.indexOf(5) >-1 && arrayToCompare.indexOf(7) >-1:
      gameBoard.match = [3,5,7];
      endGame();
      break;
  }
}

//check the game to see if someone won
var checkGame = function(){
  if (playerO.currentPlayer && playerO.plays.length >= 3){
    // evaluate playerO plays with possibleWins
    //compare the possible wins with the input
    gameOver(playerO.plays);
  } else if (playerX.currentPlayer && playerX.plays.length >= 3){
    // evaluate playerX plays with possibleWins
    //compare the possible wins with the input
    gameOver(playerX.plays);
  }
}

// set currentPlayerStyle
var currentPlayerStyle = function(){
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

// who is the current player
var currentPlayer = function(){
  if (playerO.currentPlayer){
    playerO.currentPlayer = false;
    playerX.currentPlayer = true;
  } else {
    playerX.currentPlayer = false;
    playerO.currentPlayer = true;
  }
  currentPlayerStyle();
}

//increase move count, adjust current player, set new image src
var flipImage = function(){
  gameBoard.moveCount++;
  if (playerO.currentPlayer){
    this.src = playerO.src;
    playerO.plays.push(parseInt(this.id));
    this.removeEventListener("click", flipImage);
  } else {
    this.src = playerX.src;
    playerX.plays.push(parseInt(this.id));
    this.removeEventListener("click", flipImage);
  }
  //check the game to see if someone won
  if (gameBoard.moveCount > 9){
    newGame();
  } else if (gameBoard.moveCount >= 4 && !gameBoard.gameEnd){
    checkGame();
    currentPlayer();
  } else {
    currentPlayer();
  }
}

// create and load game pieces
var loadGamePieces = function(){
  var gamePieces = document.getElementsByClassName("row");
  // if game player game pieces are loaded change the face
  if (gamePieces[0].children.length <= 0){
      // make game pieces
      for (var i = 0; i < gamePieces.length; i++){
        var gamePiece = document.createElement("img");
        gamePiece.setAttribute("src", gameBoard.src);
        gamePiece.setAttribute("id", i+1);
        gamePiece.setAttribute("class", "gamePiece");
        gamePiece.setAttribute("data-id", "gamePiece"+(i+1));
        gamePiece.addEventListener("click", flipImage);
        gamePieces[i].appendChild(gamePiece);
      }
    } else {
      //update existing img tag
      for (var i = 0; i < gamePieces.length; i++){
        var gamePiece = document.getElementById((i+1));
        gamePiece.setAttribute("src", gameBoard.src);
        gamePiece.addEventListener("click", flipImage);
      }
    }
  }

// begin the game
var initGame = function(){
  loadGamePieces();
  playerX.currentPlayer = true;
  currentPlayerStyle();
}

// wait for DOM to load then initate game
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("newGame").addEventListener("click", newGame);
  initGame();
});
