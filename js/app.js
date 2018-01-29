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

//Winner text - haven't got this to work yet, as I'm still trying to get my win conditions to work correctly
var winnerText = document.getElementsByClassName('winnerText')[0];

//reset board using reset button
//rest eent listnere
var resetBoard = function() {
  for(var i = 0; i < box.length; i++){
		box[i].innerHTML = '';
    box[i].style.backgroundColor = '#4D9BA6';
    winnerText.textContent = " ";
    turn = 0;
  }
};
//
// //reset button
//clear event listener
// var resetButton = document.getElementById('#reset')
// resetButton.addEventListener('click', resetBoard);

//bigger question: innerHTML vs. textContent

//function to step 1. add turn counter +1 each time boxClick happens (each time we click)
//step 2. once a box is clicked, the function will count even turns (turn%2===0) & switch to one color, odd turns are the "else" condition
//since first move is odd, X's happen on odd turns
var boxClick = function() {
  turn++;
  if (turn%2 === 0){
    this.textContent= 'O';
    this.style.backgroundColor = 'red';
    if (!this.classList.contains("O") && !this.classList.contains("X")) {
    this.classList.add("O")};
    //remove event listner
    player = 'O'
    if (turn >= 4 {
      checkWin();
    })
  } else {
    this.textContent= 'X';
    this.style.backgroundColor = 'black';
    if (!this.classList.contains("X") && !this.classList.contains("O")) {
    this.classList.add("X")};
    player = 'X'
    if (turn >= 4 {
      checkWin();
    })
  }
  //making sure boxClick function is working - also logs number of clicks to verify
  console.log("clicked!");
};


//master win function which includes all the winning combinations

var checkWin = function() {

  // var boxClick = gameboard.querySelectorAll('.box');

    // row 1 modified match condition
    (sq1.classList.contains(player) && sq2.classList.contains(player) && sq3.classList.contains(player))

    box[0].textContent !'' && box[1].classList.contains('X') === (second arugument) === (third argument)
    //created the win scenarios below to say if these boxes match innerText of 'x' or 'o' all 3 then this wins
    // while (turn >= 3) {
      if (
          //row1
          (boxClick[0].textContent === boxClick[1].innerText && boxClick[1].innerText === boxClick[2].innerText)  ||
          //row 2
          (boxClick[3].innerText === boxClick[4].innerText && boxClick[4].innerText === boxClick[5].innerText)  ||
          //row 3
          (boxClick[6].innerText === boxClick[7].innerText && boxClick[7].innerText === boxClick[8].innerText)  ||
          //col 1
          (boxClick[0].innerText === boxClick[3].innerText && boxClick[3].innerText === boxClick[6].innerText)  ||
          //col 2
          (boxClick[1].innerText === boxClick[4].innerText && boxClick[4].innerText === boxClick[7].innerText)  ||
          //col 3
          (boxClick[2].innerText === boxClick[5].innerText && boxClick[5].innerText === boxClick[8].innerText)  ||
          //diag 1
          (boxClick[0].innerText === boxClick[4].innerText && boxClick[4].innerText === boxClick[8].innerText)  ||
          //diag 2
          (boxClick[2].innerText === boxClick[4].innerText && boxClick[4].innerText === boxClick[6].innerText)
        ) {
          console.log("we have a winner!");
            if (turn%2 === 0) {
              displayWinnerX();
              winner = 'O';
              console.log('O wins!');
            } else {
              displayWinner0();
              winner = 'X';
              console.log('X wins!');
            }
          }
      else {
        console.log('no winner yet');
      }
    };

// //display winner for X
// var displayWinnerX = function (){
//   winnerText.textContent = 'X';
//   // resetBoard();
// };
//
// //display winner for 0
// var displayWinner0 = function (){
//   winnerText.textContent = 'O';
//   // resetBoard();
// };

// add event listener for all 9 boxes to be clicked. using loop for the class boxes
var addBoxClickListener = function() {
	for(var i = 0; i < box.length; i++){
		box[i].addEventListener('click', boxClick);
	}
};


document.addEventListener("DOMContentLoaded", function() {
    addBoxClickListener();
});
