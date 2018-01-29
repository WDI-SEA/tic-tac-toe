console.log("javascript running");

//grab elements I need from DOM
var sq1 = document.getElementById('sq1');
var sq2 = document.getElementById('sq2');
var sq3 = document.getElementById('sq3');
var sq4 = document.getElementById('sq4');
var sq5 = document.getElementById('sq5');
var sq6 = document.getElementById('sq6');
var sq7 = document.getElementById('sq7');
var sq8 = document.getElementById('sq8');
var sq9 = document.getElementById('sq9');

var box = document.querySelectorAll('.box');
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
  } else {
    this.textContent= 'X';
    this.style.backgroundColor = 'black';
  }
  //making sure boxClick function is working - also logs number of clicks to verify
  console.log("clicked!");
};


//setting all scenarios in which a win could happen
var checkWin = function() {
//set conditions for each win by row, column and diagonal
  if (boxClick.sq1.textContent === boxClick.sq2.textContent === boxClick.sq3.textContent) {
    console.log("win row 1");
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
