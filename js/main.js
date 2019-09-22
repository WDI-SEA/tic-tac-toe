//Global Variables
//Sorry
// var sq1 = document.getElementById('0');
// var sq2 = document.getElementById('1');
// var sq3 = document.getElementById('2');
// var sq4 = document.getElementById('3');
// var sq5 = document.getElementById('4');
// var sq6 = document.getElementById('5');
// var sq7 = document.getElementById('6');
// var sq8 = document.getElementById('7');
// var sq9 = document.getElementById('8');

var moves = 0;
var currentPlayer;
var winCond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8]
];
//DOM References
var wholeBoard = document.querySelector(".whole-board");
var grid = Array.from(document.getElementsByClassName('gametile'));
var tileId = grid[1].id;
console.log(grid[0].textContent);
var checkSame = function(arr) {
    if (grid[arr[0]].textContent != " " && grid[arr[0]].textContent === grid[arr[1]].textContent && grid[arr[0]].textContent === grid[arr[2]].textContent) {
        console.log('WIN');
    } else {
        console.log('nothing');
    }
}

//Functions
var pickWinner = function() {}

//Check for win 
var getWinner = function() {
    for (let i = 0; i < winCond.length; i++) {
        checkSame(winCond[i]);
    }
}

//moveCounter ++ if % 2 === 0 
var playerTurn = function() {
    if (moves % 2 === 0) {
        currentPlayer = "Player1";
    } else {
        currentPlayer = "Player2";
    }
    document.getElementById('display').textContent = currentPlayer;
    moves++;
    // console.log(moves);
}

//The Clicks
wholeBoard.addEventListener('click', function(e) {
    var currentSpot = e.target;
    if (currentSpot.textContent == " ") {
        playerTurn();
        if (currentPlayer === "Player1") {
            currentSpot.textContent = 'X';
        } else {
            currentSpot.textContent = 'O';
        }
    } else {
        console.log("welp");
    }
    getWinner();
})
//Reset Function