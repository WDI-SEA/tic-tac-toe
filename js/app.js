var player1 = document.getElementById("player1");
var dropdown = document.getElementById("dropdown");

var scorePlayer1 = document.getElementById("player1Score");
var scorePlayer2 = document.getElementById("player2Score");

var oneA = document.getElementById("cell1");
var oneB = document.getElementById("cell2");
var oneC = document.getElementById("cell3");
var twoA = document.getElementById("cell4");
var twoB = document.getElementById("cell5");
var twoC = document.getElementById("cell6");
var threeA = document.getElementById("cell7");
var threeB = document.getElementById("cell8");
var threeC = document.getElementById("cell9");

var newGame = document.getElementById("newGame");

var array = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
//winning combos:
var winners = [
  [cell1, cell4, cell7],
  [cell2, cell5, cell8],
  [cell3, cell6, cell9],
  [cell1, cell2, cell3],
  [cell4, cell5, cell6],
  [cell7, cell8, cell9],
  [cell1, cell5, cell9],
  [cell3, cell5, cell7]
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

//if computer player is selected
function computerPlays(){
  if(dropdown.options[dropdown.selectedIndex].value == "2"){
    if(currentPlayer == "O"){
      var emptyCells = [];
      for(x=0; x<array.length; x++){
        if(array[x].textContent == ""){
          emptyCells.push(array[x]);
        }
      }
      //stops computer from getting an extra turn if Player 1("X") wins on last available square
      if(emptyCells.length == "0"){
        checkForWinner();
      }
      // randomly selects from empty cells array and fills cell with "O"
      var randomSelection = emptyCells[Math.floor(Math.random()*emptyCells.length)];
      setTimeout(function(){
        randomSelection.textContent = "O";
        player2Selections.push(randomSelection);
        checkForWinner();
        changeTurn();
      }, 1500);
    }
  }
}

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
      computerPlays();
      }
    }

//keeps track of turns + changes bottom border of active player
function changeTurn(){
  if(currentPlayer === "X"){
      currentPlayer = "O";
      player1.style.borderBottom = "none";
      dropdown.style.borderBottom = "thick solid #fffb96";
  } else {
    currentPlayer = "X";
    player1.style.borderBottom = "thick solid #fffb96";
    dropdown.style.borderBottom = "none";
  }
}

//adapted from http://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript
function checkForWinner(){
  var win = false;
  var playerSelections = new Array()
   var winningCombo = "";
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
            //filters two sets to return the winning combo- used for animation later
            winningCombo = sets.filter(function(value){
              return playerSelections.indexOf(value)>-1;
            });
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
    //if game is won, add +1 score to winning player, start border animation, starts cell animation, reset game after 2 seconds
      if(win == true){
        if(currentPlayer == "X"){
          currentScorePlayer1++;
          scorePlayer1.textContent = currentScorePlayer1;
          player1.classList.add("animate");
        }else{
          currentScorePlayer2++;
          scorePlayer2.textContent = currentScorePlayer2;
          dropdown.classList.add("animate");
        }
       for(m=0; m<winningCombo.length; m++){
          winningCombo[m].classList.add("colorChange");
       }
       setTimeout(function(){
          reset();
       }, 2000);
      }
  }
  //if tie, add skeleton waving gif and reset after 4 seconds
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
    dropdown.style.borderBottom = "none";
    player1Selections = [];
    player2Selections = [];
    player1.classList.remove("animate");
    dropdown.classList.remove("animate");
    for(i=0; i<array.length; i++){
      array[i].textContent = "";
      array[i].classList.remove("colorChange");
    }
    winningCombo = [];
}


