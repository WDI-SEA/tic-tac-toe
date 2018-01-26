var currentPlay = 0;
var resetButton = document.getElementById('reset');
var element = document.getElementsByClassName("square");
var squaresArr = [];
var displayCurrentPlay = function() {
  if (currentPlay % 2 ===0) {
    whosTurn = "X's turn";
  } else {
    whosTurn = "O's turn"
  }
  document.getElementById('current-play').innerHTML = currentPlay + 1 + "  " + whosTurn;

}
displayCurrentPlay();

for (var i = 0; i <= 8; i++) {
  squaresArr.push(element[i]);
  element[i].addEventListener('click', function() {
    if (currentPlay % 2 === 0 && !this.hasChildNodes()) {
      this.innerHTML = 'X';
      this.className += ' color1';
      currentPlay++;
      if (currentPlay <= 8){
        displayCurrentPlay();
      } else {
        document.getElementById('current-play').innerHTML = 'Game Over';
      }
    } else if (currentPlay % 2 !== 0 && !this.hasChildNodes()){
      this.innerHTML = 'O';
      this.className += ' color2';
      currentPlay++;
      if (currentPlay <= 8){
        displayCurrentPlay();
      } else {
        document.getElementById('current-play').innerHTML = 'Game Over';
      }
    }
    // check to see if anyone has won yet
    if (squaresArr[0].innerHTML !== '' && squaresArr[0].innerHTML === squaresArr[1].innerHTML && squaresArr[1].innerHTML === squaresArr[2].innerHTML ) {
      alert(squaresArr[0].innerHTML + " Wins!!");
    } else if (squaresArr[3].innerHTML !== '' && squaresArr[3].innerHTML === squaresArr[4].innerHTML && squaresArr[4].innerHTML === squaresArr[5].innerHTML ) {
      alert(squaresArr[3].innerHTML + " Wins!!");
    } else if (squaresArr[6].innerHTML !== '' && squaresArr[6].innerHTML === squaresArr[7].innerHTML && squaresArr[7].innerHTML === squaresArr[8].innerHTML ) {
      alert(squaresArr[6].innerHTML + " Wins!!");
    } else if (squaresArr[0].innerHTML !== '' && squaresArr[0].innerHTML === squaresArr[4].innerHTML && squaresArr[4].innerHTML === squaresArr[8].innerHTML ) {
      alert(squaresArr[0].innerHTML + " Wins!!");
    } else if (squaresArr[2].innerHTML !== '' && squaresArr[2].innerHTML === squaresArr[4].innerHTML && squaresArr[4].innerHTML === squaresArr[6].innerHTML ) {
      alert(squaresArr[2].innerHTML + " Wins!!");
    } else if (squaresArr[0].innerHTML !== '' && squaresArr[0].innerHTML === squaresArr[3].innerHTML && squaresArr[3].innerHTML === squaresArr[6].innerHTML ) {
      alert(squaresArr[0].innerHTML + " Wins!!");
    } else if (squaresArr[1].innerHTML !== '' && squaresArr[1].innerHTML === squaresArr[4].innerHTML && squaresArr[4].innerHTML === squaresArr[7].innerHTML ) {
      alert(squaresArr[1].innerHTML + " Wins!!");
    } else if (squaresArr[2].innerHTML !== '' && squaresArr[2].innerHTML === squaresArr[5].innerHTML && squaresArr[5].innerHTML === squaresArr[8].innerHTML ) {
      alert(squaresArr[2].innerHTML + " Wins!!");
    }
  });
}

resetButton.addEventListener('click', function() {
  for (var i = 0; i <= 8; i++) {
    element[i].innerHTML = '';
    element[i].classList.remove('color1');
    element[i].classList.remove('color2');
    displayCurrentPlay();
    currentPlay = 0;
  }
});
