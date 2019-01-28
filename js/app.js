console.log('Hello frontend');
// cited source from amultiple users on git hub. I was using it as an example. 

//user functions// 
var msgDiv = document.querySelector('.message');
var gameboardDiv = document.querySelector('.gameboard'); 
var cell = document.querySelectorAll('.cell'); 
var cellsArr = Array.from(cell); 

var btnStart = document.querySelector(".btn--start"); 
var btnReset = document.querySelector(".btn--reset"); 

// var playerOneScore = document.querySelector('.player-onescore'); 
// var playerTwoScore = document.querySelector('.player-twoscore'); 
// // not working becuase there was a bug. So I took it out of the system. 



// thought it might help if i broke the display down in rows and colums so i can visually see the gameboard and functions. 

var gameboard = (() =>{
    var display = 
    [   "", "", "", 
        "", "", "",
        "", "", ""  ]; 


var init = function(){

    for(var i = 0; i < cellsArr.length; i++){
        cellsArr[i].textContent= ""; 
    }

    msgDiv.textContent = "X's Turn";
}; 
    return {display, init};
})(); 

//^^^^above is the functionality of the game board and to check if space has been taken while rotating the X players. ^^^^ 
// establish players 
var player = (marker) =>{
    var score = 0;
    return {marker, score};

}

//user index of X & O 
var playerOne = player("X"); 
var playerTwo = player("O");

var gameController = (() => {
    
    //start with Player X first 
    var currentPlayer = playerOne; 

    //this method adds the marker on the gameboard 
    var nextMove = ((e) => {
        var board = gameboard.display;
        var gameWon; 
            if (e.target.textContent === "") {
                e.target.textContent = currentPlayer.marker;

                //updating the gameboard 
            var cellNb = e.target.dataset.cell;
            board [cellNb - 1] = currentPlayer.marker; 

            gameWon = checkForWin(board);
                //checking to see if a user has won
                if (gameWon === true){

                    msgDiv.textContent = `${currentPlayer.marker} won!`;
                    currentPlayer.score += 1; 

                    displayScore() 
                    //removed event from gameboard 
                    cellsArr.forEach(cell => cell.removeEventListner("click", gameController.nextMove)); 
                 } // Draw Checker 
                    else if (gameWon === false && board.includes("") === false) {
                        msgDiv.textContent = "It's a tie!"; 
                        cellsArr.forEach(cell=> cell.removeEventListener("click", gameController.nextMove));
             }
                // if not, game still continues         
            else{
                    currentPlayer = changePlayer(currentPlayer);
                    msgDiv.textContent= `${currentPlayer.marker}'s turn.`;  
                }
                
        } else {
            msgDiv.textContent ="Please Choose Another"
        }
    }) 

   

     // change player function 
    function changePlayer(currentPlayer){
        if(currentPlayer === playerOne){
            currentPlayer = playerTwo
        
    } else {

        currentPlayer = playerOne
    }
    return currentPlayer; 
}   

//Win Conditions below that are required below 

function checkRow(a,b,c, board){
    var winingRow = false;
    if (board[a] === board[b] && 
        board[a] === board[c] &&
        board[a] !== ""){
          winingRow = true;
      } 

      return winingRow;

    }
function checkForWin(board){

    //this is going to start checking the rows for matches 
    if (checkRow(0,1,2,board) === true){
        return true
    }
    else if (checkRow(3,4,5,board)){
        return true
    }
    else if (checkRow(6,7,8,board)){
        return true
    }

    //check columns

    else if (checkRow(0,3,6,board)){
        return true
    }
    else if (checkRow(1,4,7,board)){
        return true
    }
    else if (checkRow(2,5,8,board)){
        return true
    }

    //check for diagnals 
    else if (checkRow(0,4,8,board)){
        return true
    }
    else if (checkRow(2,4,6,board)){
        return true
    }
    // keep playing if no matches are found 

    else{
        return false
    }
}
function displayScore(){
    playerOneScore.textContent=playerOne.score;
    playerTwoScore.textContent=playerTwo.score; 
}
    return {nextMove}
})(); 

// this is where the clicks come in to play. This will trigger the rest of the game. 

btnReset.addEventListener("click", function(){
    
gameboard.display = ["","","",
                     "","","", 
                     "","",""];
                     //display board 
gameboard.init(); 
    cellsArr.forEach(cell => cell.addEventListener("click", gameController.nextMove)); 
}); 

btnStart.addEventListener("click", function(){
    gameboardDiv.style.display = "grid"; 
    gameboard.init(); 
btnStart.style.display = "none";
btnReset.style.display = "block";
cellsArr.forEach(cell=> cell.addEventListener("click", gameController.nextMove));
}); 

gameController.displayScore; 