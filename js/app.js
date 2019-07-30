// global variable
let turn = 1;
let currentPlayer = "X";
let playerX = [];
var score;
let gameOver = false;
// let cell = []; //stores box clicked > switch to a number value


// gloabl selector of the boxes
var positions = document.querySelectorAll("#gameBoard div");
console.log(positions);
//winning combinations
var winArray = [['t1', 't2', 't3'], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]; //all the possible win combos


// create a function checks for a win (think about using classList.contains)
function checkDraw() {
}


// display id of box clicked on console.
function addCellEventListener() {
    var cell = document.getElementById('gameBoard');
    var cellId = cell.getAttribute('id');
    console.log(cellId);
    for (var i = 0; i < cellId.length; i++) {
    console.log(cell);
    }
    cell.addEventListener('click', load);

}
addCellEventListener();
// ====== efficient way of getting/setting selectors ========//
function load() {
    boxListener();
}

// listens for boxes clicked
function boxListener() {
     // grab all the boxes to add listeners
     var positions = document.querySelectorAll(".box");
     // check for positions
     for (var i = 0; i < positions.length; i++) {
         positions[i].addEventListener('click', boxClicked);
     }
 }
//  get 


// SET LISTENER FOR EACH BOX WHEN CLICKED 
function boxClicked(value) {
    if (currentPlayer === "X") {
        this.classList.add('imageX');
        // gets the id of box clicked
        var positionClicked = this.getAttribute('id');
        // this pushed id-value into player array
        playerX.push(positionClicked);
        console.log(playerX);
        console.log(`playerX clicked: ${playerX}`);
        console.log(`player 2 clicked `);
        currentPlayer = "O";
    } 
    else {
        this.classList.add('imageO');
        var positionClicked = this.getAttribute('id');
        console.log(positionClicked);
        console.log(`player 1 clicked `, positionClicked);
        currentPlayer = "X"
    }
    // Increment turn counter
    turn+= 1
    this.removeEventListener('click', boxClicked);
}


// remove box listener after clicked
function removeEventListener() {
    var positions = document.querySelectorAll(".box");
    for (var i = 0; i < positions.length; i++) {
        positions[i].removeEventListener('click', boxClicked);
    }
}

// create a function sets the game-over event
function isGameOver() {
	document.getElementById("message").textContent = "Play again?"
}
load();
