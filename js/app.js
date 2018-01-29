console.log("javascript running");

//grab elements I need from DOM
//gets all the divs holding the backgrounds for tiles
var gameBoard = document.querySelectorAll("#gameboard > .box");

var turn = 0


//check for win after each click, see function above
checkWin();


//function to step 1. add turn counter +1 each time boxClick happens (each time we click)
//step 2. once a box is clicked, the function will count even turns (turn%2===0) & switch to one color, odd turns are the "else" condition
//since first move is odd, X's happen on odd turns
var boxClick = function() {
  turn++;
  if (turn%2 === 0){
    this.textContent= 'O';
    this.style.backgroundColor = 'red';
    checkWin();
  } else {
    this.textContent= 'X';
    this.style.backgroundColor = 'black';
    checkWin();
  }
  //making sure boxClick function is working - also logs number of clicks to verify
  console.log("clicked!");
};


//setting all scenarios in which a win could happen
var checkWin = function() {

var sq1 = classes(gameBoard[0].firstElementChild.className);


while (turnCount >= 4) {
  if (
      (sq1 === sq2 && sq2 === sq3)  ||
      (midL === midM && midM === midR)  ||
      (botL === botM && botM === botR)  ||
      (topL === midL && midL === botL)  ||
      (topM === midM && midM === botM)  ||
      (topR === midR && midR === botR)  ||
      (topL === midM && midM === botR)  ||
      (topR === midM && midM === botL)
    ) {
      console.log("we have a winner!");
    }
  }
};


// add event listener for all 9 boxes to be clicked. using loop for the class boxes
var addBoxClickListener = function() {
	for(var i = 0; i < box.length; i++){
		box[i].addEventListener('click', boxClick);
	}
};

document.addEventListener("DOMContentLoaded", function() {
    addBoxClickListener();
});
