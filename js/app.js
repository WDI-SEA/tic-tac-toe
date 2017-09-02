// to do:
//figure out loop to replace onclicks
//add condition for draw
//fix skeleton
//clean out unecessary code


var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var winnerAnnouncement = document.getElementById("winnerAnnoucement2");

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
  table.onclick = function(){
    checkForWinner();
  }

  oneA.onclick = function(){
    if(oneA.textContent == ""){
      oneA.textContent = currentPlayer;
      if(currentPlayer === "X"){
        player1Selections.push(oneA);
      }else{
        player2Selections.push(oneA);
      }
      checkForWinner();
      changeTurn();
      }
    }
  oneB.onclick = function(){
    if(oneB.textContent== ""){
      oneB.textContent = currentPlayer;
      if(currentPlayer === "X"){
        player1Selections.push(oneB);
      }else{
        player2Selections.push(oneB);
      }
      checkForWinner();
      changeTurn();
      }
    }
  oneC.onclick = function(){
    if(oneC.textContent== ""){
      oneC.textContent = currentPlayer;
      if(currentPlayer === "X"){
        player1Selections.push(oneC);
      }else{
        player2Selections.push(oneC);
      }
      checkForWinner();
      changeTurn();
      }
    }
  twoA.onclick = function(){
    if(twoA.textContent== ""){
      twoA.textContent = currentPlayer;
      if(currentPlayer === "X"){
        player1Selections.push(twoA);
      }else{
        player2Selections.push(twoA);
      }
      checkForWinner();
      changeTurn();
      }
    }
  twoB.onclick = function(){
    if(twoB.textContent== ""){
      twoB.textContent = currentPlayer;
      if(currentPlayer === "X"){
        player1Selections.push(twoB);
      }else{
        player2Selections.push(twoB);
      }
      checkForWinner();
      changeTurn();
      }
    }
  twoC.onclick = function(){
    if(twoC.textContent== ""){
      twoC.textContent = currentPlayer;
      if(currentPlayer === "X"){
        player1Selections.push(twoC);
      }else{
        player2Selections.push(twoC);
      }
      checkForWinner();
      changeTurn();
      }
    }
  threeA.onclick = function(){
    if(threeA.textContent== ""){
      threeA.textContent = currentPlayer;
      if(currentPlayer === "X"){
        player1Selections.push(threeA);
      }else{
        player2Selections.push(threeA);
      }
      checkForWinner();
      changeTurn();
      }
    }
  threeB.onclick = function(){
    if(threeB.textContent== ""){
      threeB.textContent = currentPlayer;
        if(currentPlayer === "X"){
        player1Selections.push(threeB);
      }else{
        player2Selections.push(threeB);
      }
        checkForWinner();
        changeTurn();
      }
    }
  threeC.onclick = function(){
    if(threeC.textContent== ""){
      threeC.textContent = currentPlayer;
        if(currentPlayer === "X"){
        player1Selections.push(threeC);
      }else{
        player2Selections.push(threeC);
      }
      checkForWinner();
      changeTurn();
      }
    }
  resetGame.onclick = function(){
    reset();
  }
}

//keeps track of turns/changes color for active player
function changeTurn(){
  if(currentPlayer === "X"){
      currentPlayer = "O";
      player1.style.borderBottom = "none";
      player2.style.borderBottom = "thick solid #fffb96";
  } else {
    currentPlayer = "X";
    player1.style.borderBottom = "thick solid #fffb96";
    player2.style.borderBottom = "none";
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
          player1.classList.add("animate");
        }else{
          currentScorePlayer2++;
          scorePlayer2.textContent = currentScorePlayer2;
          player2.classList.add("animate");
        }
       setTimeout(function(){
          reset();
       }, 2000);
      }
  }
  // if(playerSelections.length >= 9){
  //   var div = document.createElement("div");
  //   div.classList.add("draw");
  //   div.textContent = "Nobody Won!";
  //   setTimeout(function(){
  //     reset();
  //   }, 2000);
  //   var img = new Image();
  //   div.appendChild(img);
  //   img.src = "../img/skeleton.gif";
  // setTimeout(function(){
  //   div.removeChild(div.firstChild);
  //   div.textContent = "";
  // }, 4000);
  }
}

function reset()
{
    currentPlayer = "X";
    player1.style.borderBottom = "thick solid #fffb96";
    player2.style.borderBottom = "none";
    player1Selections = [];
    player2Selections = [];
    player1.classList.remove("animate");
    player2.classList.remove("animate");
    for(i=0; i<array.length; i++){
      array[i].textContent = "";
    }
}

startGame();
