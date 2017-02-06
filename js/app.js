var moveCount = 0;
var movesMade = new Array(9);
var interval;
var INFINITY = 1000000;

document.addEventListener("DOMContentLoaded", function() {
  console.log('DOM loaded');

  //add event listeners
  document.getElementById("reset").addEventListener("click", resetBoard);
  addAllEventListeners();
});

function addAllEventListeners() {
  var cellArray = document.getElementsByClassName("cell");
  for(var i = 0; i<cellArray.length; i++){
    cellArray[i].addEventListener("click", cellClicked);
  }

  document.getElementById("ai").addEventListener("click", generateNextMove);
  document.getElementById("ai-defensive").addEventListener("click", generateNextDefensiveMove);
}

function removeAllEventListeners() {
  var cellArray = document.getElementsByClassName("cell");
  for(var i = 0; i<cellArray.length; i++){
    cellArray[i].removeEventListener("click", cellClicked);
  }

  document.getElementById("ai").removeEventListener("click", generateNextMove);
  document.getElementById("ai-defensive").removeEventListener("click", generateNextDefensiveMove);
}

function updateWhosTurn(classToAdd){
  document.getElementsByClassName("whosturn")[0].classList.remove("oh");
  document.getElementsByClassName("whosturn")[0].classList.remove("ex");
  document.getElementsByClassName("whosturn")[0].classList.add(classToAdd);
  document.getElementById("message-board").textContent = "'s turn";
}

function cellClicked() {
  moveCount++;
  //if moves is even, add an oh
  if(moveCount % 2 === 0){
    this.classList.add("oh");
    //add turn to movesMade
    movesMade[parseInt(this.id.match(/\d/)[0])] = "oh";
    //update the whos turn display
    updateWhosTurn("ex");

  } else { //else add an ex
    this.classList.add("ex");
    movesMade[parseInt(this.id.match(/\d/)[0])] = "ex";
    updateWhosTurn("oh");
  }

  //don't allow cell to be clicked again
  this.removeEventListener("click", cellClicked);

  //check if someone has won
  if(donePlayingGame()){
    removeAllEventListeners();
    clearInterval(interval);
  }

  //if 9 moves have been played it's game over
  if(moveCount === 9){
      //check if someone has won
      if(donePlayingGame()){
        clearInterval(interval);
        removeAllEventListeners();
      } else {
        document.getElementById("message-board").textContent = " aww it's a draw!";
        //display both images
        if(document.getElementsByClassName("whosturn")[0].classList.contains("ex")){
          document.getElementsByClassName("draw")[0].classList.add("oh");
        } else {
          document.getElementsByClassName("draw")[0].classList.add("ex");
        }
        document.getElementsByClassName("draw")[0].style.visibility = "visible";

        clearInterval(interval);
      }
  }
}

function donePlayingGame(){
  //check for victory conditions
  return (horizontalWin() || verticalWin() || diagonalWin());
}

function displayWinner(winner){
  updateWhosTurn(winner);
  document.getElementById("message-board").textContent = "has won!";
  //add score
  var scoreElement = document.getElementsByClassName(winner + "-score")[0];
  scoreElement.textContent = parseInt(scoreElement.textContent)+1;
}

function horizontalWin(){
  //horizontal line win
  for(var i = 0; i < 7; i+=3){
    if(movesMade[i]){
      if(movesMade[i] === movesMade[i+1] && movesMade[i] === movesMade[i+2]){
        //add winner message
        displayWinner(movesMade[i]);
        return true;
      }
    }
  }
  return false;
}

function verticalWin(){
  //vertical line win
  for(var i = 0; i < 3; i+=1){
    if(movesMade[i]){
      if(movesMade[i] === movesMade[i+3] && movesMade[i] === movesMade[i+6]){
        //add winner message
        displayWinner(movesMade[i]);
        return true;
      }
    }
  }
  return false;
}

function diagonalWin(){
  //diagonal line win
  if(movesMade[0]){
    if(movesMade[0] === movesMade[4] && movesMade[0] === movesMade[8]){
      displayWinner(movesMade[0]);
      return true;
    }
  }
  if(movesMade[2]){
    if(movesMade[2] === movesMade[4] && movesMade[2] === movesMade[6]){
      displayWinner(movesMade[2]);
      return true;
    }
  }
  return false;
}

function resetBoard() {
  //remove all exs and ohs
  var cellArray = document.getElementsByClassName("cell");
  for(var i = 0; i<cellArray.length; i++){
      cellArray[i].classList.remove("ex");
      cellArray[i].classList.remove("oh");
  }

  //clear interval
  clearInterval(interval);

  //reset move count for a new game
  moveCount = 0;

  //reset moves movesMade
  movesMade = new Array(9);

  //reset whos turn board
  updateWhosTurn("ex");
  document.getElementsByClassName("short")[0].style.visibility = "hidden";
  document.getElementsByClassName("full")[0].style.visibility = "hidden";
  document.getElementsByClassName("draw")[0].style.visibility = "hidden";
  document.getElementsByClassName("draw")[0].classList.remove("ex");
  document.getElementsByClassName("draw")[0].classList.remove("oh");

  //reset event listeners
  removeAllEventListeners();
  addAllEventListeners();
}

function generateNextMove(){
  console.log("click");
  document.getElementsByClassName("short")[0].style.visibility = "visible";

  if( moveCount % 2 === 0 ){
    document.getElementById("message-board").textContent = ", it's YOUR turn!";
  }

  interval = setInterval(function() {
    //don't let AI be clicked again
    document.getElementById("ai").removeEventListener("click", generateNextMove);
    document.getElementById("ai-defensive").removeEventListener("click", generateNextDefensiveMove);

    //have ai go second
    if(moveCount % 2 === 1){
      document.getElementById("message-board").textContent = " is thinking...";
      //pick a random number between 0 and 8
      var num = Math.floor(Math.random()*(9));
      //if that index is undefined, place an ex or an oh
      if(!movesMade[num]){
        document.getElementById('cell' + num).click();
      }
    }
  }, 1000);
  //TODO: disable click while AI is thinking
}


//defensive AI logic
function getHorizontalScore(cellIndex, player){
  var first, second;

  if( cellIndex === 1 || cellIndex === 4 || cellIndex === 7 ){
    first = -1;
    second = 1;
  } else if( cellIndex === 0 || cellIndex === 3 || cellIndex === 6 ){
    first = 1;
    second = 2;
  } else {
    first = -2;
    second = -1;
  }
  return calculateScoreLogic(cellIndex, player, first, second);
}

function getVerticalScore(cellIndex, player){
  var first, second;

  if( cellIndex === 0 || cellIndex === 1 || cellIndex === 2 ){
    first = 3;
    second = 6;
  } else if( cellIndex === 3 || cellIndex === 4 || cellIndex === 5 ){
    first = -3;
    second = 3;
  } else {
    first = -6;
    second = -3;
  }

  return calculateScoreLogic(cellIndex, player, first, second);
}

function calculateScoreLogic(cellIndex, player, first, second){
  if( movesMade[cellIndex+first] === player && movesMade[cellIndex+second] === player ){ //stay
      return 1;
  }
  //one = me and other empty
  else if(movesMade[cellIndex+first] === player){
    if(!movesMade[cellIndex+second]){
      return 2;
    } else {
      return INFINITY;
    }
  }

  else if(movesMade[cellIndex+second] === player){
    if(!movesMade[cellIndex+first]){
      return 2;
    } else {
      return INFINITY;
    }
  }

  //both !== me and both empty
  else if(movesMade[cellIndex+first] !== player && movesMade[cellIndex+second] !== player){
    if(!movesMade[cellIndex+first] && !movesMade[cellIndex+second]){
      return 3;
    } else { //both !== me and both full
      return INFINITY;
    }
  }
}

function getLeftDiagonalScore(cellIndex, player){
  var first, second;

  //shouldn't calculate if index = 1, 3, 5, or 7
  if( [1,3,5,7,2,6].indexOf(cellIndex) >= 0 ){
    return INFINITY;
  }

  if( cellIndex === 0 ){
    first = 4;
    second = 8;
  } else if( cellIndex === 4 ){
    first = -4;
    second = 4;
  } else {
    first = -8;
    second = -4;
  }

  return calculateScoreLogic(cellIndex, player, first, second);
}

function getRightDiagonalScore(cellIndex, player){
  var first, second;

  if( [1,3,5,7, 0, 8].indexOf(cellIndex) >= 0 ){
    return INFINITY;
  }

  if( cellIndex === 2 ){
    first = 2;
    second = 4;
  } else if( cellIndex === 4 ){
    first = -2;
    second = 2;
  } else {
    first = -4;
    second = -2;
  }

  return calculateScoreLogic(cellIndex, player, first, second);
}


function getScore(cellIndex, player){
  var horizontal, vertical, leftDiagonal, rightDiagonal;
  //if it's not an empty cell, all values are infinity
  if( movesMade[cellIndex] ){
    horizontal = vertical = leftDiagonal = rightDiagonal = INFINITY;
  } else {
    //calculate horizontal score
    horizontal = getHorizontalScore(cellIndex, player);

    //calculate vertical score
    vertical = getVerticalScore(cellIndex, player);

    //calculate diagonal score
    leftDiagonal = getLeftDiagonalScore(cellIndex, player);
    rightDiagonal = getRightDiagonalScore(cellIndex, player);

  }

  var indexScores = {
    h: horizontal,
    v: vertical,
    ld: leftDiagonal,
    rd: rightDiagonal
  };

  return indexScores;
};

function chooseMove(){
  var opponentScores = new Array(9);

  for( var i = 0; i < 9; i++){
    opponentScores[i] = getScore(i, "ex");
  }

  //choose a cell with the lowest score
  var temp = opponentScores[0].h;
  var moveIndex = 0;
  for( var i = 0; i < opponentScores.length; i++){

    for(var key in opponentScores[i]){
      if(opponentScores[i][key] < temp){
        temp = opponentScores[i][key];
        moveIndex = i;
      }
    }
  }
  console.log(moveIndex);
  return moveIndex;
}

function generateNextDefensiveMove(){
  console.log("click");
  document.getElementsByClassName("full")[0].style.visibility = "visible";

  if( moveCount % 2 === 0 ){
    document.getElementById("message-board").textContent = ", it's YOUR turn!";
  }

  interval = setInterval(function() {
    //don't let either AI be clicked again
    document.getElementById("ai-defensive").removeEventListener("click", generateNextDefensiveMove);
    document.getElementById("ai").removeEventListener("click", generateNextMove);

    //have ai go second
    if(moveCount % 2 === 1){
      document.getElementById("message-board").textContent = " is thinking...";
      document.getElementById('cell' + chooseMove()).click();
    }
  }, 1000);
  //TODO: disable click while AI is thinking
}
