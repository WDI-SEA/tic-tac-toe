//document.addEventListener("DOMContentLoaded", function() {
console.log("DOM loaded");
console.log('Hello player');

var p1 = document.getElementById('p1');
var p2 = document.getElementById('p2');
var reset = document.getElementById('reset');
var currentPlayer = 'X'
var p1Selections=[];
var p2Selections=[];
var currentScorePlayer1 = 0;
var currentScorePlayer2 = 0;
var scorePlayer1 = document.getElementById("Player1Score");
var scorePlayer2 = document.getElementById("Player2Score");

/*function startGame(){

};*/

//reset
 /* reset.onclick = function(){
  	reset();
  }*/
  /* = function(){
    reset();
  }
}*/
//reset try two
/*function resetgame(){
  document.getElementById('gameboard').reset();
  reset();
}*/

//reset game try 3
function resetBoard(){
    currentPlayer = "X";
    p1.style.borderBottom = "thick solid #fffb96 ";
    p2.style.borderBottom = "none";
    p1Selections = [];
    p2Selections = [];
    for(i=0; i<array.length; i++){
      array[i].textContent = "";
    }
}

reset.onclick = function(){
   resetBoard();
}

//TOP LEFT
var TL = document.getElementById("topL");
//TOP MIDDLE
var TM = document.getElementById("topM");
//TOP RIGHT
var TR = document.getElementById("topR");
//MIDDLE LEFT
var ML = document.getElementById("midL");
//MIDDLE MIDDLE
var MM = document.getElementById("midM");
//MIIDLE RIGHT
var MR = document.getElementById("midR");
//BOTTOM LEFT
var BL = document.getElementById("botL");
//BOTTOM MIDDLE
var BM = document.getElementById("botM");
//BOTTOM RIGHT
var BR = document.getElementById("botR");

var game =[[],[],[]];
game[0,0].push(TL,TM,TR);
game[0,1].push(ML,MM,MR);
game[0,2].push(BL,BM,BR);
console.log(game);
var winners = [
[TL, TM, TR],
[TL, ML, BL],
[TL, ML, BR],
[ML, MM, MR],
[BL, BM, BR],
[BL, MM, TR],
[TM, MM, BR],
[TR, MR, BR]
]
var array = [TL,TM,TR,ML,MM,MR,BL,BM,BR];

//function xOro() {
	//if(data-id === game[]){

//	}
//}
//TOP CLICK
TL.onclick = function(){
	if(TL.textContent === ""){
		TL.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(TL);
		}else{
			p2Selections.push(TL);
		}
		  checkForWinner();
      changeTurn();
	}
}

TM.onclick = function(){
	if(TM.textContent === ""){
		TM.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(TM);
		}else{
			p2Selections.push(TM);
		}
		  checkForWinner();
      changeTurn();
	}
}
TR.onclick = function(){
	if(TR.textContent === ""){
		TR.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(TR);
		}else{
			p2Selections.push(TR);
		}
		  checkForWinner();
      changeTurn();
	}
}
//MIDDLE CLICK
/*ML.onclick = function(){
	if(ML.textContent === ""){
		ML.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(ML);
		}else{
			p2Selections.push(ML);
		}
		  checkForWinner();
      changeTurn();
      console.log("clicked");
	}*/
//}
function midclick(){
  document.getElementById('midL').innerHTML =currentPlayer;
}

MM.onclick = function(){
	if(MM.textContent === ""){
		MM.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(MM);
		}else{
			p2Selections.push(MM);
		}
		  checkForWinner();
      changeTurn();
	}
}
MR.onclick = function(){
	if(MR.textContent === ""){
		MR.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(MR);
		}else{
			p2Selections.push(MR);
		}
		  checkForWinner();
      changeTurn();
	}
}
//CLICK FOR BOTTOM
BL.onclick = function(){
	if(BL.textContent === ""){
		BL.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(BL);
		}else{
			p2Selections.push(BL);
		}
		  checkForWinner();
      changeTurn();
	}
}

BM.onclick = function(){
	if(BM.textContent === ""){
		BM.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(BM);
		}else{
			p2Selections.push(BM);
		}
		  checkForWinner();
      changeTurn();
	}
}
BR.onclick = function(){
	if(BR.textContent === ""){
		BR.textContent = currentPlayer;
		if(currentPlayer === 'X'){
			p1Selections.push(BR);
		}else{
			p2Selections.push(BR);
		}
		  checkForWinner();
      changeTurn();
	}
}


//
//SWITCH TRY ONE
/*function Switchp(){
	if(currentplayer === 'X') {
		currentplayer = "O";

	} else{
		currentplayer = "X";

	}
}
*/
//SWITCH TRY TWO
function changeTurn(){
  if(currentPlayer === "X"){
      currentPlayer = "O";
      p1.style.borderBottom = "none";
      p2.style.borderBottom = "thick solid #fffb96";
  } else {
    currentPlayer = "X";
    p1.style.borderBottom = "thick solid #fffb96";
    p2.style.borderBottom = "none";
  }
}

//CHECK FOR WINNERS TRY 2
function checkForWinner(){
  var win = false;
  var playerSelections = new Array()
  //sets up player selections arrays
  if(currentPlayer == "X"){
      playerSelections = p1Selections;
    }else{
      playerSelections = p2Selections;
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
         alert('PLAYER 1 WON!');
        }else{
          currentScorePlayer2++;
          scorePlayer2.textContent = currentScorePlayer2;
          alert('PLAYER 2 WON!');
        }
       setTimeout(function(){
          reset();
       }, 2000);
      }
  }
  //if tie, play bomb and reset after 4 seconds
  /*if(bomb.length >= 5 && win == false){
    var img = new Image();
    var hello = document.getElementById("hello");
    hello.appendChild(img);
    img.src = "img/explostion";
    setTimeout(function(){
      hello.removeChild(img);
      reset();
    }, 4000);*/
  //}

//reset game function (clear board, remove animations, reset arrays, reset to player 1's turn)
function reset() {
  currentPlayer = "X";
    p1.style.borderBottom = "thick solid #fffb96";
    p2.style.borderBottom = "none";
      p1Selections = [];
        p2Selections = [];
        p1.classList.remove("animate");
        p2.classList.remove("animate");
        for(i=0; i<array.length; i++){
          array[i].textContent = "";
        };
      }
}

/*startGame();*/



//});

//so I counldn't get the restart button to work, or the 'x's and 'o's to be in the boxes correctly
//for some reason the game will only say when x has won ...
// I got a lot of help from this site http://www.thatsoftwaredude.com/content/6189/coding-tic-tac-toe-in-javascript
// it was very helpful but I still can't seem to make my page work right
// I was stuck on the players alternating for a really long time and not sure why its working now but if you could give me another way it would work that would be awsome,
//and sorry it's so ugly I'll probably go back and fix it up

//thanks!
