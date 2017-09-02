var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var scorePlayer1 = document.getElementById("player1Score");
var scorePlayer2 = document.getElementById("player2Score");

var table = document.getElementById("table");
var oneA = document.getElementById("oneA");
var oneB = document.getElementById("oneB");
var oneC = document.getElementById("oneC");
var twoA = document.getElementById("twoA");
var twoB = document.getElementById("twoB");
var twoC = document.getElementById("twoC");
var threeA = document.getElementById("threeA");
var threeB = document.getElementById("threeB");
var threeC = document.getElementById("threeC");

var resetGame = document.getElementById("reset");

var array = [oneA, oneB, oneC, twoA, twoB, twoC, threeA, threeB, threeC];
var winners = [
  [oneA, twoA, threeA],
  [oneB, twoB, threeB],
  [oneC, twoC, threeC],
  [oneA, oneB, oneC],
  [twoA, twoB, twoC],
  [threeA, threeB, threeC],
  [oneA, twoB, threeC],
  [oneC, twoB, threeA]
]
var player1Selections = [];
var player2Selections = [];

var currentPlayer = "X";

var currentScorePlayer1 = 0;
var currentScorePlayer2 = 0;


function startGame(){

//onclick to place x's and o's
// to do:
//   -figure out loop to replace these
//   -only allow click once- now will allow multiple clicks replacing x's and o's
//   -winner gets declared after an extra click - placement of checkForWinner()?

  table.onclick = function(){
    checkForWinner();
  }

  oneA.onclick = function(){
    oneA.textContent = currentPlayer;
    oneA.classList.add(currentPlayer);
    if(currentPlayer === "X"){
      player1Selections.push(oneA);
    }else{
      player2Selections.push(oneA);
    }
    changeTurn();
    checkForWinner();
    }
  oneB.onclick = function(){
    oneB.textContent = currentPlayer;
    oneB.classList.add(currentPlayer);
    if(currentPlayer === "X"){
      player1Selections.push(oneB);
    }else{
      player2Selections.push(oneB);
    }
    changeTurn();
    checkForWinner();
    }
  oneC.onclick = function(){
    oneC.textContent = currentPlayer;
    oneC.classList.add(currentPlayer);
    if(currentPlayer === "X"){
      player1Selections.push(oneC);
    }else{
      player2Selections.push(oneC);
    }
    changeTurn();
    checkForWinner();
    }
  twoA.onclick = function(){
    twoA.textContent = currentPlayer;
    twoA.classList.add(currentPlayer);
    if(currentPlayer === "X"){
      player1Selections.push(twoA);
    }else{
      player2Selections.push(twoA);
    }
    changeTurn();
    checkForWinner();
    }
  twoB.onclick = function(){
    twoB.textContent = currentPlayer;
    twoB.classList.add(currentPlayer);
    if(currentPlayer === "X"){
      player1Selections.push(twoB);
    }else{
      player2Selections.push(twoB);
    }
    changeTurn();
    checkForWinner();
    }
  twoC.onclick = function(){
    twoC.textContent = currentPlayer;
    twoC.classList.add(currentPlayer);
    if(currentPlayer === "X"){
      player1Selections.push(twoC);
    }else{
      player2Selections.push(twoC);
    }
    changeTurn();
    checkForWinner();
    }
  threeA.onclick = function(){
    threeA.textContent = currentPlayer;
    threeA.classList.add(currentPlayer);
    if(currentPlayer === "X"){
      player1Selections.push(threeA);
    }else{
      player2Selections.push(threeA);
    }
    changeTurn();
    checkForWinner();
    }
  threeB.onclick = function(){
    threeB.textContent = currentPlayer;
    threeB.classList.add(currentPlayer);
      if(currentPlayer === "X"){
      player1Selections.push(threeB);
    }else{
      player2Selections.push(threeB);
    }
    changeTurn();
    checkForWinner();
    }
  threeC.onclick = function(){
    threeC.textContent = currentPlayer;
    threeC.classList.add(currentPlayer);
      if(currentPlayer === "X"){
      player1Selections.push(threeC);
    }else{
      player2Selections.push(threeC);
    }
    changeTurn();
    checkForWinner();
    }
  resetGame.onclick = function(){
    reset();
  }
}
// }

//keeps track of turns/changes color for active player
function changeTurn(){
  if(currentPlayer === "X"){
      currentPlayer = "O";
      player1.style.background = "white";
      player2.style.background = "green";
  } else {
    currentPlayer = "X";
    player1.style.background = "green";
    player2.style.background = "white";
  }
}

//adapted from http://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript
function checkForWinner(){
  var win = false;
  var playerSelections = new Array()
  if(currentPlayer == "X"){
      playerSelections = player1Selections;
    }else{
      playerSelections = player2Selections;
    };
  if(playerSelections.length >= 3){
    for(i=0; i< winners.length; i++){
      var sets = winners[i];
      var setFound = true;
      for(j=0;j<sets.length; j++){
        var found = false;
        for(k=0;k<playerSelections.length; k++){
          if(sets[j] == playerSelections[k]){
            found = true;
            break;
          }
        }
        if(found == false){
          setFound = false;
          break;
        }
      }
      if(setFound == true){
        win = true;
        break;
      }
    }
      if(win == true){
        if(currentPlayer == "X"){
          currentScorePlayer1++;
          scorePlayer1.textContent = currentScorePlayer1;
        }else{
          currentScorePlayer2++;
          scorePlayer2.textContent = currentScorePlayer2;
        }
       reset();
      }
  }
}

function reset()
{
    currentPlayer = "X";
    player1Selections = [];
    player2Selections = [];
    for(i=0; i<array.length; i++){
      array[i].textContent = "";
    }
}

startGame();
