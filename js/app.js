var moveCount = 0;
var movesMade = new Array(8); // [{cell :cell1, cellValue: "ex"}]
var interval;

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
}

function removeAllEventListeners() {
  var cellArray = document.getElementsByClassName("cell");
  for(var i = 0; i<cellArray.length; i++){
    cellArray[i].removeEventListener("click", cellClicked);
  }

  document.getElementById("ai").removeEventListener("click", generateNextMove);
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
  movesMade = new Array(8);

  //reset whos turn board
  updateWhosTurn("ex");
  document.getElementsByClassName("ai-indicator")[0].style.visibility = "hidden";

  //reset event listeners
  removeAllEventListeners();
  addAllEventListeners();
}

function generateNextMove(){
  document.getElementsByClassName("ai-indicator")[0].style.visibility = "visible";

  if( moveCount % 2 === 0 ){
    document.getElementById("message-board").textContent = ", it's YOUR turn!";
  }

  interval = setInterval(function() {
    //don't let AI be clicked again
    document.getElementById("ai").removeEventListener("click", generateNextMove);

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
}
