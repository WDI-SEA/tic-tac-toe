console.log("javascript running");
//i've set the gameboard at the top of the doccument. now, i'm pulling out each of the 9 squares, and assigning variable to each, so i can match below for win conditions

// var sq1 = (gameBoard[0].firstElementChild.className);
// var sq2 = (gameBoard[1].firstElementChild.className);
// var sq3 = (gameBoard[2].firstElementChild.className);
// var sq4 = (gameBoard[3].firstElementChild.className);
// var sq5 = (gameBoard[4].firstElementChild.className);
// var sq6 = (gameBoard[5].firstElementChild.className);
// var sq7 = (gameBoard[6].firstElementChild.className);
// var sq8 = (gameBoard[7].firstElementChild.className);
// var sq9 = (gameBoard[8].firstElementChild.className);

//grab elements I need from DOM
//gets all the divs holding the backgrounds for tiles
var gameBoard = document.querySelectorAll("#gameboard > .box");
var box = document.querySelectorAll('.box');
//turn counter
var turn = 0
var player;
var winnerText = document.getElementsByClassName('winnerText')

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);

var resetBoard = function (){
  for(var i = 0; i < box.length; i++){
  		box[i].textContent = '';
      box[i].style.backgroundColor = '#4D9BA6';
      winnerText.textContent = " ";
      turn = 0;
  }
};

//X wins function
var winnerX = function (){
winnerText.textContent = ('X Wins!')
}

//O wins function
var winnerX = function (){
winnerText.textContent = ('X Wins!')
}

//function to turn boxes to X or O depending on turn click, also adds textContent and changes backgroundColor
var boxClick = function() {
  turn++;
  if (turn%2 === 0){
    this.textContent= 'O';
    this.style.backgroundColor = 'red';
    if (!this.classList.contains("O") && !this.classList.contains("X")) {
    this.classList.add('O')};
    //remove event listener in here
    player = 'O'
      if (turn >= 4 {
        checkWin();
      })
  } else {
    this.textContent= 'X';
    this.style.backgroundColor = 'black';
    if (!this.classList.contains("X") && !this.classList.contains("O")) {
    this.classList.add('X')};
    player = 'X'
      if (turn >= 4 {
        checkWin();
      })
  }
};



var checkWin = function() {
//matching two conditions: box does not include textContent and it's classList matches X
//matches 3 rows, 3 columns, 2 diagonals
  switch (true) {
      case box[0].textContent !== '' && box[0].classList.contains('X') === box[1].textContent !== '' && box[1].classList.contains('X') === box[2].textContent !== '' && box[2].classList.contains('X'):
        winnerX();
      break;
      case box[3].textContent !== '' && box[3].classList.contains('X') === box[4].textContent !== '' && box[4].classList.contains('X') === box[5].textContent !== '' && box[5].classList.contains('X'):
        winnerX();
      break;
      case box[6].textContent !== '' && box[6].classList.contains('X') === box[7].textContent !== '' && box[7].classList.contains('X') === box[8].textContent !== '' && box[8].classList.contains('X'):
        winnerX();
      break;
      case box[0].textContent !== '' && box[0].classList.contains('X') === box[3].textContent !== '' && box[3].classList.contains('X') === box[6].textContent !== '' && box[6].classList.contains('X'):
        winnerX();
      break;
      case box[1].textContent !== '' && box[1].classList.contains('X') === box[4].textContent !== '' && box[4].classList.contains('X') === box[7].textContent !== '' && box[7].classList.contains('X'):
        winnerX();
      break;
      case box[2].textContent !== '' && box[2].classList.contains('X') === box[5].textContent !== '' && box[5].classList.contains('X') === box[8].textContent !== '' && box[8].classList.contains('X'):
        winnerX();
      break;
      case box[0].textContent !== '' && box[0].classList.contains('X') === box[4].textContent !== '' && box[4].classList.contains('X') === box[8].textContent !== '' && box[8].classList.contains('X'):
        winnerX();
      break;
      case box[2].textContent !== '' && box[2].classList.contains('X') === box[4].textContent !== '' && box[4].classList.contains('X') === box[6].textContent !== '' && box[6].classList.contains('X'):
        winnerX();
      break;
      //matching 'O winners'
      case box[0].textContent !== '' && box[0].classList.contains('O') === box[1].textContent !== '' && box[1].classList.contains('O') === box[2].textContent !== '' && box[2].classList.contains('O'):
        winnerO();
      break;
      case box[3].textContent !== '' && box[3].classList.contains('O') === box[4].textContent !== '' && box[4].classList.contains('O') === box[5].textContent !== '' && box[5].classList.contains('O'):
        winnerO();
      break;
      case box[6].textContent !== '' && box[6].classList.contains('O') === box[7].textContent !== '' && box[7].classList.contains('O') === box[8].textContent !== '' && box[8].classList.contains('O'):
        winnerO();
      break;
      case box[0].textContent !== '' && box[0].classList.contains('O') === box[3].textContent !== '' && box[3].classList.contains('O') === box[6].textContent !== '' && box[6].classList.contains('O'):
        winnerO();
      break;
      case box[1].textContent !== '' && box[1].classList.contains('O') === box[4].textContent !== '' && box[4].classList.contains('O') === box[7].textContent !== '' && box[7].classList.contains('O'):
        winnerO();
      break;
      case box[2].textContent !== '' && box[2].classList.contains('O') === box[5].textContent !== '' && box[5].classList.contains('O') === box[8].textContent !== '' && box[8].classList.contains('O'):
        winnerO();
      break;
      case box[0].textContent !== '' && box[0].classList.contains('O') === box[4].textContent !== '' && box[4].classList.contains('O') === box[8].textContent !== '' && box[8].classList.contains('O'):
        winnerO();
      break;
      case box[2].textContent !== '' && box[2].classList.contains('O') === box[4].textContent !== '' && box[4].classList.contains('O') === box[6].textContent !== '' && box[6].classList.contains('O'):
        winnerO();
      break;
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
