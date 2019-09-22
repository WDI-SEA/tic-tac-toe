//laying out the win positions
const winPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//Pushing cell elements into an array
const board =[]
for (var i =0; i< 9; i++){
    board.push(document.getElementById(i.toString()))
}

//Global variables to be later from any function 
var move; //variable to keep track of whose it is that is X or O
var prompt = document.getElementById("prompt")// variable to store the h2 element with id prompt
var moveCount= 0// this variable is keepiong the count of moves

//Create a setup game function that can be called to start and reset the gameboard
//clear the cell content
//add event listeners

function setupGame(){
    move = 'X'
    moveCount = 0;
    prompt.textContent= move + " turn";
    for (var cell of board){
        cell.textContent= ''
        cell.addEventListener('click', makeMove)//makeMove is a call back function
    }
}

//when there is a win or draw, clear all event listeners to disable the board so no clicks should happen
function clearEventListeners(){
    for(var cell of board){
        cell.removeEventListener('click',makeMove )
    }
}

//makeMove makes the move happpen and check for a win each time
function makeMove(){
    moveCount++//increment the counter
    this.textContent = move// make the move appear on screen

    
    //If a win is found then change the prompt and clear all event listeners and exit
    var foundWin = checkWin()
    if (foundWin === true){
        prompt.textContent = move + ' wins!!! ' + String.fromCodePoint(0x1F3C6);
        clearEventListeners()
        return;

    
    }//if win is not found but maximum numbers of moves r reached
    else if (foundWin=== false && moveCount===9){
        prompt.textContent = "Its a tie " + String.fromCodePoint(0x1F610);
        clearEventListeners()
        return;
    }
    move = move === 'X' ? 'O':'X';
    prompt.textContent= move + " turn";
    this.removeEventListener('click', makeMove )
}

//Checks each win position and returns if a win is found
function checkWin(){
    var foundWin = false
    for (var win of winPositions){
        foundWin = foundWin || 
        (
            board[win[0]].textContent === move && 
            board[win[1]].textContent === move && 
            board[win[2]].textContent === move
        )
    }
    return foundWin;
}

//activating the rest button at the start
var reset =document.getElementById("reset")
reset.addEventListener('click' , setupGame)

//setting up for the first game!
setupGame()