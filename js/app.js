console.log("javascript running");

var gameBoard = document.querySelectorAll("#gameboard > .box");
var box = document.querySelectorAll('.box');
//turn counter
var turn = 0
var player;
var winnerText = document.querySelector('.winnerText')

// var boxIndexX = []
// var boxIndexO = []

var resetButton = document.getElementById('reset');
resetButton.addEventListener('click', resetBoard);

var resetBoard = function (){
  for(var i = 0; i < box.length; i++){
  		box[i].textContent = '';
      box[i].style.backgroundColor = '#4D9BA6';
      box[i].addAttribute("class", "");
      winnerText.textContent = " ";
      // boxIndexX = [""];
      // boxIndexO = [""];
      turn = 0;
  }
};

//X wins function
var winnerX = function() {
alert("X wins");
}
var winnerO = function() {
alert("O wins");
}

//function to turn boxes to X or O depending on turn click, also adds textContent and changes backgroundColor
var boxClick = function() {
  turn++;
  if (turn%2 === 0) {
    this.textContent = 'O';
    this.style.backgroundColor = 'red';
    this.className += " O";
    // boxIndexO.push(this);
    console.log(this.className);
    // this.removeEventListener('click', boxClick);
    // console.log('removed event listener');
    if (turn >= 4) {
    checkWin();
    }
    // if (!this.classList.contains("O") && !this.classList.contains("X")) {
    // this.classList.add('O')};

  } else {
    this.textContent= 'X';
    this.style.backgroundColor = 'black';
    this.className += " X";
    // boxIndexX.push(this);
    console.log(this.className);
    if (turn >= 4) {
    checkWin();
    }
    // if (!this.classList.contains("X") && !this.classList.contains("O")) {
    // this.classList.add('X')};
    // player = 'X'
  }
};


var checkWin = function() {
//matching two conditions: box does not include textContent and it's classList matches X
//matches 3 rows, 3 columns, 2 diagonals
  switch (true) {
      case box[0].textContent.contains('X') === box[1].textContent && box[1].textContent == box[2].textContent:
        winnerX();
        break;
      case box[3].textContent === box[4].textContent && box[4].textContent == box[5].textContent:
        winnerX();
        break;
      case box[6].textContent === box[7].textContent && box[7].textContent == box[8].textContent:
        winnerX();
        break;
      case box[0].textContent === box[3].textContent && box[3].textContent == box[6].textContent:
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
  };
}
// add event listener for all 9 boxes to be clicked. using loop for the class boxes
var addBoxClickListener = function() {
	for(var i = 0; i < box.length; i++){
		box[i].addEventListener('click', boxClick);
	}
};

document.addEventListener("DOMContentLoaded", function() {
    addBoxClickListener();
});
