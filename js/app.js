document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello")
});

// this is selecting the grid spaces.
let boxes = document.getElementsByClassName('chart');
// shows the result
let result = document.getElementById('winner');

let gameBoard = document.getElementsByClassName('chart');

let playerTurn = "X"
let winningCombinations = [
    ["1", "2", "3"], 
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["1", "4", "7"],
    ["2", "5", "8"],
    ["3", "6", "9"],
    ["1", "5", "9"],
    ["3", "5", "7"],
];

let playerXTurn = []
let playerOTurn = []
// each player


// if x's turn return X
// something with player=0; player < 9 ; i++ or something....
// want it to select X's turn if the number is even and O's turn if it's odd. 
// function playerTurn () {
//     if (player % 2 === 0) {
//         return X;
//         //if O's turn return O 
//     } else {
//         return O;
//     }
// };

// for(let player = 0; player < 10; player++) {
//     playerTurn
// };

/* have an event listener that on click checks
 which turn and adds a number to player */

 //this doesn't work...  it says there is a missing ) after the argument list??
for (let i=0; i< gameBoard.length; i++) {
    gameBoard[i].addEventListener('click', (e) => {
        console.log(e.target); 
        if (playerTurn == "X") {
            e.target.innerText = "X";
            playerXTurn.push(e.target.id);
            console.log(playerXTurn);
            playerTurn = "O";
        } else {
            e.target.innerText = "O";
            playerOTurn.push(e.target.id);
            console.log(playerOTurn);
            playerTurn = "X";
        }
        });
};

//This isn't working correctly... maybe syntax is not entered right?
const endGame = () => {
    gameBoard.removeEventListener('click', (e()));
};

const checkWin = () => {
    if (playerTurn == "X") {
        let xWin = false
        for (let i=0; i < winningCombinations.length; i++) {
            let match = 0;
            console.log(winningCombinations.i)
            for (let j=0; j < winningCombinations[i].length; j++) {
                if (playerXTurn.includes(winningCombinations[i][j])) {
                    match++;
                }
            } 
            if (match === 3) {
                xWin = true
            }
        } 
        if (xWin) {
            endGame();
        }
    } else {
        let oWin = false;
        for (let i=0; i < winningCombinations.length; i++) {
        let match = 0;
        console.log(winningCombinations.i)
        for (let j=0; j < winningCombinations[i].length; j++) {
            if (playerXTurn.includes(winningCombinations[i][j])) {
                match++;
                }
            }
            if (match === 3) {
                oWin = true;
            }
        } 
        if (oWin) {
            endGame();
        }
    }
}


// e.target.id is a string not an int - winningcomb is full of ints. 
// if match = 3 end game
