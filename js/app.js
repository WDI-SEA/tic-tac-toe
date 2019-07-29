console.log('Hello frontend');
// global variable
//all the possible win combos
var winArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [7, 5, 3]];

// SELECTORS
var gameBoard = document.getElementById('gameBoard');
var topLeft = document.getElementById('top-left');
var topMiddle = document.getElementById('top-middle');
var topRight = document.getElementById('top-right');
var middleLeft = document.getElementById('mid-left');
var middleMiddle = document.getElementById('mid-middle');
var middleRight = document.getElementById('mid-right');
var bottomLeft = document.getElementById('bot-left');
var bottomMiddle = document.getElementById('bot-middle');
var bottomRight = document.getElementById('bot-right');

// Add function that checks selected box
topLeft.addEventListener('click', boxClicked);
topMiddle.addEventListener('click', boxClicked);
topRight.addEventListener('click', boxClicked);
middleLeft.addEventListener('click', boxClicked);
middleMiddle.addEventListener('click', boxClicked);
middleRight.addEventListener('click', boxClicked);
bottomLeft.addEventListener('click', boxClicked);
bottomMiddle.addEventListener('click', boxClicked);
bottomRight.addEventListener('click', boxClicked);

// Variables
let playerOne = 0;
let playerTwo = 0;
let currentPlayer = "x";
let playerOneSelections = [];
let playerTwoSelections = [];
let gameOver = false;
let lastClicked = ''; //stores box clicked > switch to a number value


var positions = document.querySelectorAll("#gameBoard div");
console.log(positions);

function addPositionListeners(){
	// var positions = document.querySelectorAll("#gameBoard span");

 	for (var i = 0; i < positions.length; i++) {
		positions[i].addEventListener("click", boxClicked)
	}
}

// SET LISTENER FOR EACH BOX WHEN CLICKED 
function clickedBox(value) {
if (document.getElementById(value)) {
    console.log("here: " + value);
    lastClicked = value;
    }
    else {
        console.log('nothing');
    }
}
clickedBox();

function boxClicked(value) {
    if (currentPlayer === "X") {
        this.classList.add('imageX');
        console.log(`player 2 clicked ` + lastClicked );
        playerOne+= 1;
        currentPlayer = "O";
    } 
    else {
        this.classList.add('imageO');
        console.log(`player 1 clicked ` + lastClicked );
        playerTwo+= 1;
        currentPlayer = "X"
    }

    // console.log("P1 turns",playerOne);
    // console.log("P2 turns",playerTwo);
    }




// 
// function boxClickListener() {
//     var boxClass = document.querySelectorAll('#gameBoard div');
//     for (var i = 0; i < boxClass.length; i++) {
//         boxClass[i] = document.getElementsByClassName('box');
//         // console.log(boxClass);
//         // console.log(boxClass[i]);

//         for (var j = 0; j < boxClass[i].length; j++) {
            
//             console.log("thing:" + boxClass[j]);
//             boxClass[i].addEventListener('click', gameWin[i]);

//         }
//     }
// }

// boxClickListener();
// console.log(boxClick());
// =======================
// store each event based on box clicked



// create a function checks for a win
function gameWin() {
//   add code here
console.log('this will trigger when you win');
}

// create a function sets the game-over event
function isGameOver() {
   
	document.getElementById("message").textContent = "Play again?"

}


