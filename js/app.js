
//Global Variables//
var turn;
var player1Click = [];
var player2Click = [];
var board = Array[9];
var gameOver = false;



// all possible winning combinations
var winCombos = [ 
    ["num0", "num1", "num2"],
    ["num3", "num4", "num5"],
    ["num6", "num7", "num8"],
    ["num0", "num3", "num6"],
    ["num1", "num4", "num7"],
    ["num2", "num5", "num8"],
    ["num0", "num4", "num8"],
    ["num2", "num4", "num6"]
]


//DOM /
// var boxes = document.getElementsByClass("boxes");
var playableSquares = document.getElementsByClassName("box"); // return HTML collection (which is like a shitty array that you can't do a lot of arry things to) of all elements with class name 'box'
var message = document.getElementById("message");
var button = document.getElementById("button");
button.addEventListener("click", reset);


//Start Tic Tac Toe Game Board
function startGame() {
    turn = "X";
    message.textContent = `Let's get playing!`;
}; 


//Create 'X' or 'O', and switches player turn 
var createGamePiece = function(e){
    if (e.target.children.length === 0 && !gameOver){
        var createIcon = document.createElement('p');
        if (turn === "X"){
            createIcon.textContent = "X";
            message.textContent = `💃It's ❌'s turn!`
            // turn = "O"
        } else {
            createIcon.textContent = "O";
            message.textContent = `🎉It's ⭕️'s turn!`
            // turn = "X"   
        };
        e.target.appendChild(createIcon);
        createIcon.classList.add('gamePiece');
        checkWin();
    }
};


//Add Event Listener for ability to 'click' on the div elements
for (let i = 0; i < playableSquares.length; i++) {
    playableSquares[i].addEventListener('click', createGamePiece)
}

function checkWin(){
    for (let i = 0; i<winCombos.length; i++){
        var square1 = document.getElementById(winCombos[i][0]);
        var square2 = document.getElementById(winCombos[i][1]);
        var square3 = document.getElementById(winCombos[i][2]);
        if (square1.children.length && square2.children.length && square3.children.length) {
            // console.log("All relevant squares have a mark")
            // console.log(square1.children[0].textContent)
            // console.log(square2.children[0].textContent)
            // console.log(square3.children[0].textContent)
            console.log("turn is:", turn);
            if (square1.children[0].textContent === turn &&
                square2.children[0].textContent === turn &&
                square3.children[0].textContent === turn) {
                    message.textContent = `🎉 ${turn} wins! 🎉`
                    gameOver = true;
                }
            }
        }
    turn = turn === 'X' ? 'O' : 'X';
}

function reset (){
    for(let i = 0; i < playableSquares.length; i++){
        if (playableSquares[i].children.length > 0) {
            playableSquares[i].removeChild(playableSquares[i].children[0]);
        }
    }
    message.textContent = `Let's get playing!`;
    gameOver = false;
}


startGame();

