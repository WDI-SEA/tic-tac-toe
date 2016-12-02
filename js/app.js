console.log('Hello tic-tac-toe');

/*
board:
 col co1 co1 dia
[a1][a2][a3] row
[b1][b2][b3] row
[c1][c2][c3] row
             dia
*/

/* ELEMENT SETUP */
var squares = document.getElementsByClassName("square");
var scores = document.getElementsByClassName("score");
var message = document.getElementById("message");

/* GAME INITIALIZATION */
// assuming static 3x3 grid
// maybe edit later for modular grid size
for (var i=0; i<squares.length) {
  squares[i].addEventListener("click", claimSq);
}

/* PLAYER TURN STATES */
// switch between players on function call
function switch(p) {
  return 1 - p; // SWITCHES BETWEEN 0 AND 1
}

function claimSq() {
  this.textContent = ""
}

/* WIN CHECK FUNCTIONS */

function winRow() {}
function winCol() {}
function winDia() {}
