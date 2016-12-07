console.log('Hello frontend');
var whosTurn = "X";
var soundsList = [
  ["sounds/bing o.mp3", "sounds/peter o.mp3", "sounds/queeno.mp3"],
  ["sounds/xgongivit.mp3", "sounds/xdeliver.mp3", "sounds/xibit.mp3"]
];
toWin = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
];
var boxes = ["topLeft", "topMid", "topRight", "midLeft", "middle", "midRight", "lowerLeft", "lowerMid", "lowerRight"];
xMoves = [];
oMoves = [];
sound = false;
document.addEventListener("DOMContentLoaded", function() {
  reset();
});

function drawBoard(what, i) {
  document.getElementById(what).addEventListener('click', setMove);
  document.getElementById(what).style.background = "";
  document.getElementById(what).setAttribute('value', i + 1);
  document.getElementById('turnX').style.visibility = "visible";
  document.getElementById('turnO').style.visibility = "hidden";
}

function setMove() {
  this.removeEventListener('click', setMove);
  if (whosTurn == "X") {
    whosTurn = "O";
    if (displayX(this)) {
      youWon("X");
    }
  } else {
    whosTurn = "X";
    if (displayO(this)) {
      youWon("O");
    }
  }
}

function displayO(thing) {
  thing.style.background = "url(img/DC.png) 0% 0% / cover";
  document.getElementById('turnX').style.visibility = "visible";
  document.getElementById('turnO').style.visibility = "hidden";
  oMoves.push(thing.getAttribute('value'));
  if (oMoves.length > 2) {
    console.log('attmpting to run checkWinner for O');
    if (checkWinner(oMoves)) {
      return true;
    }
  }
  document.getElementById('toPlay').setAttribute('src', soundsList[0][Math.floor(Math.random() * [soundsList[0].length])]);
}

function displayX(thing) {
  thing.style.background = "url(img/x.png) 0% 0% / cover";
  xMoves.push(thing.getAttribute('value'));
  document.getElementById('turnO').style.visibility = "visible";
  document.getElementById('turnX').style.visibility = "hidden";
  if (xMoves.length > 2) {
    console.log('attmpting to run checkWinner for X');
    if (checkWinner(xMoves)) {
      return true;
    } else if (xMoves.length + oMoves.length == 9) {
      setTimeout(stalemate, 1000);
    }
  }
  document.getElementById('toPlay').setAttribute('src', soundsList[1][Math.floor(Math.random() * [soundsList[0].length])]);
}

function toggleSounds() {
  if (!sound) {
    document.getElementById('toggleSounds').value = "Disable Sounds";
    document.getElementsByTagName('audio')[0].id = "toPlay";
    sound = true;
  } else {
    document.getElementById('toggleSounds').value = "Enable Sounds";
    document.getElementsByTagName('audio')[0].id = "";
    sound = false;
  }
}

function reset() {
  whosTurn = "X";
  boxes.forEach(drawBoard);
  xMoves = [];
  oMoves = [];
  document.getElementById('test').textContent = "Tic-Tac-Doh!";
}
function stalemate() {
  document.getElementById('test').textContent = "STALEMATE, TRY AGAIN!";
  document.getElementById('turnX').style.visibility = "hidden";
  document.getElementById('turnO').style.visibility = "hidden";
  document.getElementById('toPlay').setAttribute('src', "sounds/doh.mp3");

}
function youWon(team) {
  boxes.forEach(function(what) {
    document.getElementById(what).removeEventListener('click', setMove);
  });
  document.getElementById('test').textContent = team + " IS THE VICTOR!!";
  document.getElementById('turnX').style.visibility = "hidden";
  document.getElementById('turnO').style.visibility = "hidden";
  document.getElementById('toPlay').setAttribute('src', "sounds/woohoo.mp3");
}

function checkWinner(moves) {
  console.log('checking to see if ' + moves + " has a winning combo");
  winner = 0;
  counter = 1;
  for (j = 0; j < toWin.length; j++) {
    for (k = 0; k < toWin[j].length; k++) {
      for (i = 0; i < moves.length; i++) {
        if (moves[i] == toWin[j][k]) {
          winner++;
          if (winner == 3) {
            return true;
          } else if (counter == (moves.length * 3)) {
            winner = 0;
            counter = 0;
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
