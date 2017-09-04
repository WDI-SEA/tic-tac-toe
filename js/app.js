var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");

var scorePlayer1 = document.getElementById("player1Score");
var scorePlayer2 = document.getElementById("player2Score");

var oneA = document.getElementById("oneA");
var oneB = document.getElementById("oneB");
var oneC = document.getElementById("oneC");
var twoA = document.getElementById("twoA");
var twoB = document.getElementById("twoB");
var twoC = document.getElementById("twoC");
var threeA = document.getElementById("threeA");
var threeB = document.getElementById("threeB");
var threeC = document.getElementById("threeC");

var newGame = document.getElementById("newGame");

var array = [oneA, oneB, oneC, twoA, twoB, twoC, threeA, threeB, threeC];
//winning combos:
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

//CLICK EVENTS

//reset game and score
  newGame.onclick = function(){
    reset();
    currentScorePlayer1 = 0;
    currentScorePlayer2 = 0;
    scorePlayer1.textContent = currentScorePlayer1;
    scorePlayer2.textContent = currentScorePlayer2;
  }

//FUNCTIONS

//adds X or O from click event (click events in HTML)
function modifyText(location){
     if(location.textContent == ""){
      location.textContent = currentPlayer;
      if(currentPlayer === "X"){
        player1Selections.push(location);
      }else{
        player2Selections.push(location);
      }
      checkForWinner();
      changeTurn();
      }
    }


//keeps track of turns + changes bottom border of active player
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
  //sets up player selections arrays
  if(currentPlayer == "X"){
      playerSelections = player1Selections;
    }else{
      playerSelections = player2Selections;
    };
  //if more than 3 turns from one player, checks if cells match winning combos in winners array
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
    //if game is won, add +1 score to winning player, start border animation, reset game
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
  //if tie, play skeleton waving and reset after 4 seconds
  if(playerSelections.length >= 5 && win == false){
    var img = new Image();
    var hello = document.getElementById("hello");
    hello.appendChild(img);
    img.src = "img/skeleton.gif";
    setTimeout(function(){
      hello.removeChild(img);
      reset();
    }, 4000);
  }
}

//reset game function (clear board, remove animations, reset arrays, reset to player 1's turn)
function reset(){
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
