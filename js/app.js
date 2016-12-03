console.log('Hello frontend');
var whosTurn = "X";
// var pictureList = ["img/xmen_x.jpg"];
toWin = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
var boxes = ["topLeft","topMid","topRight","midLeft","middle","midRight","lowerLeft","lowerMid","lowerRight"];
xMoves=[];
oMoves=[];
document.addEventListener("DOMContentLoaded", function(){
reset();
});
function drawBoard(what, i){
    document.getElementById(what).addEventListener('click', setMove);
    document.getElementById(what).style.background = "";
    document.getElementById(what).setAttribute('value', i+1);
    // picX = Math.floor(Math.random(pictureList.length)); //pick a picture at random
}

function setMove(){
    this.removeEventListener('click', setMove);
    if (whosTurn == "X"){
        whosTurn = "O";
        displayX(this);
    } else {
        whosTurn = "X";
        displayO(this);
    }
}

function displayO(thing) {
    thing.style.background = "url(img/DC.png) 0% 0% / cover";
    oMoves.push(thing.getAttribute('value'));
    if (oMoves.length > 2) {
      console.log('attmpting to run checkWinner for O');
      if(checkWinner(oMoves)){
        youWon("O");
      }
    }

}
function displayX(thing) {
    thing.style.background = "url(img/x.png) 0% 0% / cover";
    xMoves.push(thing.getAttribute('value'));
    if (xMoves.length > 2) {
      console.log('attmpting to run checkWinner for X');
      if (checkWinner(xMoves)){
        youWon("X");
      }
    }
}

function reset() {
    whosTurn = "X";
    boxes.forEach(drawBoard);
    xMoves = [];
    oMoves = [];
    document.getElementById('test').textContent = "Tic-Tac-Doh!";
}

function youWon(team) {
  boxes.forEach(function(what){
    document.getElementById(what).removeEventListener('click', setMove);
  });
  document.getElementById('test').textContent = team +" IS THE VICTOR!!";
}


// function checkWinner() {
//   winner = 0;
//   counter = 0;
//   for (j = 0; j < toWin.length; j++) {
//     for (k = 0; k < toWin[j].length; k++) {
//       for (i = 0; i < moves.length; i++) {
//         counter++;
//         if (moves[i] == toWin[j][k]) {
//           winner++;
//         } else if (counter == 3) {
//           winner = 0;
//           counter = 0;
//         } else if (winner == 3){
//           return true;
//         }
//       }
//     }
//   }
// }
function checkWinner(moves) {
  console.log('checking to see if ' + moves + " is has a winning combo");
  winner = 0;
  counter = 1;
  for (j = 0; j < toWin.length; j++) {
    for (k = 0; k < toWin[j].length; k++) {
      for (i = 0; i < moves.length; i++) {
        // console.log("counter is " + counter);
        if (moves[i] == toWin[j][k]) {
          winner++;
          // console.log("winner is " + winner + " while the counter is at " + counter);
          if (winner == 3) {
            return true;
          } else if (counter == (moves.length * 3)) {
            winner = 0;
            counter = 0;
          } else {
            // counter++;
          }
        } else if (counter == (moves.length * 3)) {
          winner = 0;
          counter = 0;
        }
        counter++;
      }
    }
  }
}
