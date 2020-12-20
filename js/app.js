document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello")
});

// this is selecting the grid spaces.
let boxes = document.getElementsByClassName('chart');
// shows the result
let result = document.getElementById('winner');

// each player
let X = 'X';
let O = 'O';
let player = 0;

// if x's turn return X
// something with player=0; player < 9 ; i++ or something....
// want it to select X's turn if the number is even and O's turn if it's odd. 
function playerTurn () {
    if (player % 2 === 0) {
        return X;
        //if O's turn return O 
    } else {
        return O;
    }
};

for(let player = 0; player < 10; player++) {
    playerTurn
};

/* have an event listener that on click checks
 which turn and adds a number to player */

 //this doesn't work...  it says there is a missing ) after the argument list??
boxes.addEventListener('click', (playerTurn) {
});
