var currentPlay = 0;
var resetButton = document.getElementById('reset');
var squaresArr = document.querySelectorAll('.square');
var currentPlayElement = document.getElementById('current-play');
var friendOrAiArr = document.querySelectorAll('input[type="radio"]');
var whosTurn;

var displayCurrentPlay = function() {
  if (currentPlay % 2 === 0) {
    whosTurn = "(X's turn)";
  } else {
    whosTurn = "(O's turn)"
  }
  currentPlayElement.textContent = currentPlay + 1 + "  " + whosTurn;
}
displayCurrentPlay();

// changeSquare function fired when square is clicked
var changeSquare = function() {
  if (friendOrAiArr[0].checked) {
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
    checkIfWon();
  } // END -- if friend is checked

  else if (friendOrAiArr[1].checked) {
    var emptySquaresArr = [];
    var aiPlay = function() {
      squaresArr.forEach(function(item) {
        if (!item.hasChildNodes())
        emptySquaresArr.push(item);
      });

      var rand = emptySquaresArr[Math.floor(Math.random() * emptySquaresArr.length)];
      var computersPlay = function() {
        rand.textContent = 'O';
        rand.className += ' color2';
        currentPlay++;
        if (currentPlay <= 8){
          displayCurrentPlay();
        } else {
          currentPlayElement.textContent = 'Game Over';
        }
        checkIfWon();
      }
      setTimeout(computersPlay, 500);
    }

    if (!this.hasChildNodes()) {
      this.textContent = 'X';
      this.className += ' color1';
      currentPlay++;
      if (currentPlay <= 8){
        displayCurrentPlay();
      } else {
        currentPlayElement.textContent = 'Game Over';
      }
      aiPlay();
      checkIfWon();
    }
  } // END -- else if AI is checked
} // END changeSquare function

var checkIfWon = function() {
  // check to see if anyone has won yet
  if (squaresArr[0].textContent !== '' && squaresArr[0].textContent === squaresArr[1].textContent && squaresArr[1].textContent === squaresArr[2].textContent ) {
    setTimeout(function() {
      document.querySelector('#game-over h1').textContent = squaresArr[0].textContent + " Wins!!";
      document.getElementById('game-over').classList.add("dis-block");
    }, 400);
  } else if (squaresArr[3].textContent !== '' && squaresArr[3].textContent === squaresArr[4].textContent && squaresArr[4].textContent === squaresArr[5].textContent ) {
    setTimeout(function() {
      document.querySelector('#game-over h1').textContent = squaresArr[3].textContent + " Wins!!";
      document.getElementById('game-over').classList.add("dis-block");
    }, 400);
  } else if (squaresArr[6].textContent !== '' && squaresArr[6].textContent === squaresArr[7].textContent && squaresArr[7].textContent === squaresArr[8].textContent ) {
    setTimeout(function() {
      document.querySelector('#game-over h1').textContent = squaresArr[6].textContent + " Wins!!";
      document.getElementById('game-over').classList.add("dis-block");
    }, 400);
  } else if (squaresArr[0].textContent !== '' && squaresArr[0].textContent === squaresArr[4].textContent && squaresArr[4].textContent === squaresArr[8].textContent ) {
    setTimeout(function() {
      document.querySelector('#game-over h1').textContent = squaresArr[0].textContent + " Wins!!";
      document.getElementById('game-over').classList.add("dis-block");
    }, 400);
  } else if (squaresArr[2].textContent !== '' && squaresArr[2].textContent === squaresArr[4].textContent && squaresArr[4].textContent === squaresArr[6].textContent ) {
    setTimeout(function() {
      document.querySelector('#game-over h1').textContent = squaresArr[2].textContent + " Wins!!";
      document.getElementById('game-over').classList.add("dis-block");
    }, 400);
  } else if (squaresArr[0].textContent !== '' && squaresArr[0].textContent === squaresArr[3].textContent && squaresArr[3].textContent === squaresArr[6].textContent ) {
    setTimeout(function() {
      document.querySelector('#game-over h1').textContent = squaresArr[0].textContent + " Wins!!";
      document.getElementById('game-over').classList.add("dis-block");
    }, 400);
  } else if (squaresArr[1].textContent !== '' && squaresArr[1].textContent === squaresArr[4].textContent && squaresArr[4].textContent === squaresArr[7].textContent ) {
    setTimeout(function() {
      document.querySelector('#game-over h1').textContent = squaresArr[1].textContent + " Wins!!";
      document.getElementById('game-over').classList.add("dis-block");
    }, 400);
  } else if (squaresArr[2].textContent !== '' && squaresArr[2].textContent === squaresArr[5].textContent && squaresArr[5].textContent === squaresArr[8].textContent ) {
    setTimeout(function() {
      document.querySelector('#game-over h1').textContent = squaresArr[2].textContent + " Wins!!";
      document.getElementById('game-over').classList.add("dis-block");
    }, 400);
  } else if (squaresArr[0].textContent !== '' && squaresArr[1].textContent !== '' && squaresArr[2].textContent !== '' && squaresArr[3].textContent !== '' && squaresArr[4].textContent !== '' && squaresArr[5].textContent !== '' && squaresArr[6].textContent !== '') {
    if (squaresArr[7].textContent !== '' && squaresArr[8].textContent !== ''){
      setTimeout(function() {
        document.querySelector('#game-over h1').textContent = "It's a Draw!!";
        document.getElementById('game-over').classList.add("dis-block");
      }, 300);
    }
  } // END -- check to see if anyone has won yet
}

// Add Click Event Listener To Each Square
for (var i = 0; i <= 8; i++) {
  squaresArr[i].addEventListener('click', changeSquare, false);
}
var resetBoard = function() {
  for (var i = 0; i <= 8; i++) {
    squaresArr[i].textContent = '';
    squaresArr[i].classList.remove('color1');
    squaresArr[i].classList.remove('color2');
    document.getElementById('game-over').classList.remove("dis-block");
    document.querySelector('#game-over h1').textContent = '';
    displayCurrentPlay();
    currentPlay = 0;
  }
}
resetButton.addEventListener('click', resetBoard, false);
document.getElementById('popup-reset').addEventListener('click', resetBoard, false);
