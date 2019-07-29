// global variable
let playerOne = 0;
let playerTwo = 0;
let currentPlayer = "X";
let playerOneSelections = [];
let playerTwoSelections = [];
let gameOver = false;
let lastClicked = ''; //stores box clicked > switch to a number value
var positions = document.querySelectorAll("#gameBoard div");
// console.log(positions);
var winArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], 
                [1, 4, 7], [2, 5, 8], [3, 6, 9],                                [1, 5, 9], [7, 5, 3]]; //all the possible win combos



// ============== a better way of getting and setting selectors ==============//
function load() {
    boxListener();
    // this function is called at the bottom
}

function boxListener() {
     // grab all the boxes to add listeners
     var positions = document.querySelectorAll(".box");
     // check for positions
     console.log(positions.length);
     for (var i = 0; i < positions.length; i++) {
         positions[i].addEventListener('click', doesSomething);
     }
 }

 function doesSomething () {
     console.log('somethig was clicked');
 }
// ==================== ends here ===========================================//

// use a for(of) loop to go through

function addPositionListeners(){
	// var positions = document.querySelectorAll("#gameBoard span");

 	for (var i = 0; i < positions.length; i++) {
		positions[i].addEventListener("click", boxClicked)
	}
}

// SET LISTENER FOR EACH BOX WHEN CLICKED 
function clickedBox(value) {
    lastClicked = [];
    if (document.getElementById(value)) {
        console.log("here: " + value);
        lastClicked = lastClicked.push(value);
        
        }
        else {
            // console.log('nothing');
       }    
}
clickedBox();

function boxClicked(value) {
    if (currentPlayer === "X") {
        this.classList.add('imageX');
        console.log(`player 2 clicked ` + lastClicked);
        playerOne+= 1;
        currentPlayer = "O";
    } 
    else {
        this.classList.add('imageO');
        console.log(`player 1 clicked ` + lastClicked );
        playerTwo+= 1;
        currentPlayer = "X"
    }
    load();
}

// create a function checks for a win
function gameWin() {
//   add code here
}

// create a function sets the game-over event
function isGameOver() {
   document.getElementById("message").textContent = "Play again?"
}

load() 

// SELECTORS ===== (DONT NEED THIS ANYMORE)
// var gameBoard = document.getElementById('gameBoard');
// var topLeft = document.getElementById('top-left');
// var topMiddle = document.getElementById('top-middle');
// var topRight = document.getElementById('top-right');
// var middleLeft = document.getElementById('mid-left');
// var middleMiddle = document.getElementById('mid-middle');
// var middleRight = document.getElementById('mid-right');
// var bottomLeft = document.getElementById('bot-left');
// var bottomMiddle = document.getElementById('bot-middle');
// var bottomRight = document.getElementById('bot-right');

// Add function that checks selected box ==== (DONT NEED THIS ANYMORE)
// topLeft.addEventListener('click', boxClicked);
// topMiddle.addEventListener('click', boxClicked);
// topRight.addEventListener('click', boxClicked);
// middleLeft.addEventListener('click', boxClicked);
// middleMiddle.addEventListener('click', boxClicked);
// middleRight.addEventListener('click', boxClicked);
// bottomLeft.addEventListener('click', boxClicked);
// bottomMiddle.addEventListener('click', boxClicked);
// bottomRight.addEventListener('click', boxClicked);