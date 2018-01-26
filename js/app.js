var currentPlay = 0;
var resetButton = document.getElementById('reset');
var squaresArr = document.querySelectorAll('.square');
var currentPlayElement = document.getElementById('current-play');

var displayCurrentPlay = function() {
  if (currentPlay % 2 ===0) {
    whosTurn = "X's turn";
  } else {
    whosTurn = "O's turn"
  }
  currentPlayElement.textContent = currentPlay + 1 + "  " + whosTurn;

}
displayCurrentPlay();

// changeSquare function fired when square is clicked
var changeSquare = function() {
  if (currentPlay % 2 === 0 && !this.hasChildNodes()) {
    this.textContent = 'X';
    this.className += ' color1';
    currentPlay++;
    if (currentPlay <= 8){
      displayCurrentPlay();
    } else {
      currentPlayElement.textContent = 'Game Over';
    }
  } else if (currentPlay % 2 !== 0 && !this.hasChildNodes()){
    this.textContent = 'O';
    this.className += ' color2';
    currentPlay++;
    if (currentPlay <= 8){
      displayCurrentPlay();
    } else {
      currentPlayElement.textContent = 'Game Over';
    }
  }
  // check to see if anyone has won yet
  if (squaresArr[0].textContent !== '' && squaresArr[0].textContent === squaresArr[1].textContent && squaresArr[1].textContent === squaresArr[2].textContent ) {
    setTimeout(function() {
      alert(squaresArr[0].textContent + " Wins!!");
      resetBoard();
    }, 400);
  } else if (squaresArr[3].textContent !== '' && squaresArr[3].textContent === squaresArr[4].textContent && squaresArr[4].textContent === squaresArr[5].textContent ) {
    setTimeout(function() {
      alert(squaresArr[3].textContent + " Wins!!");
      resetBoard();
    }, 400);
  } else if (squaresArr[6].textContent !== '' && squaresArr[6].textContent === squaresArr[7].textContent && squaresArr[7].textContent === squaresArr[8].textContent ) {
    setTimeout(function() {
      alert(squaresArr[6].textContent + " Wins!!");
      resetBoard();
    }, 400);
  } else if (squaresArr[0].textContent !== '' && squaresArr[0].textContent === squaresArr[4].textContent && squaresArr[4].textContent === squaresArr[8].textContent ) {
    setTimeout(function() {
      alert(squaresArr[0].textContent + " Wins!!");
      resetBoard();
    }, 400);
  } else if (squaresArr[2].textContent !== '' && squaresArr[2].textContent === squaresArr[4].textContent && squaresArr[4].textContent === squaresArr[6].textContent ) {
    setTimeout(function() {
      alert(squaresArr[2].textContent + " Wins!!");
      resetBoard();
    }, 400);
  } else if (squaresArr[0].textContent !== '' && squaresArr[0].textContent === squaresArr[3].textContent && squaresArr[3].textContent === squaresArr[6].textContent ) {
    setTimeout(function() {
      alert(squaresArr[0].textContent + " Wins!!");
      resetBoard();
    }, 400);
  } else if (squaresArr[1].textContent !== '' && squaresArr[1].textContent === squaresArr[4].textContent && squaresArr[4].textContent === squaresArr[7].textContent ) {
    setTimeout(function() {
      alert(squaresArr[1].textContent + " Wins!!");
      resetBoard();
    }, 400);
  } else if (squaresArr[2].textContent !== '' && squaresArr[2].textContent === squaresArr[5].textContent && squaresArr[5].textContent === squaresArr[8].textContent ) {
    setTimeout(function() {
      alert(squaresArr[2].textContent + " Wins!!");
      resetBoard();
    }, 400);
  } // END -- check to see if anyone has won yet
}
// END changeSquare function

// Add Click Event Listener To Each Square
for (var i = 0; i <= 8; i++) {
  squaresArr[i].addEventListener('click', changeSquare, false);
}
var resetBoard = function() {
  for (var i = 0; i <= 8; i++) {
    squaresArr[i].textContent = '';
    squaresArr[i].classList.remove('color1');
    squaresArr[i].classList.remove('color2');
    displayCurrentPlay();
    currentPlay = 0;
  }
}
resetButton.addEventListener('click', resetBoard, false);

document.getElementById('game-name').style.transform = "rotate(-90deg)";
