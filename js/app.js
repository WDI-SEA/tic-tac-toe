console.log('Hello frontend');


//user functions// 
var msgDiv = document.querySelector('.message');
var gameboardDiv = document.querySelector('.gameboard'); 
var cell = document.querySelectorAll('.cell'); 
var cellsArray = Array.from(cell); 

// console.log(gameboard);
// console.log

var btnStart = document.querySelector(".btn--start"); 
var btnReset = document.querySelector(".btn--reset"); 

var playerOneScore = document.querySelector('.playeronescore'); 
var playerTwoScore = document.querySelector('.playertwoscore'); 

// Tic Tac Toe

// thought it might help if i broke the display down in rows and colums so i can visually see the gameboard

var gameboard = (() =>{
    var display = [ 
        "", "", "", 
        "", "", "",
        "", "", "" 

                    ]; 


var init = function(){

    for(var i=0; i< cellsArray.length; i++){
        cellsArray[i].textContent=""; 
    }
    msgDiv.textContent = "X's Turn";

}; 
    return {display,init};
})(); 

//^^^^above is the functionality of the game board and to check if space has been taken while rotating the X players. ^^^^ 
// establish players 
var player = (marker) =>{
    var score=0;
    return {marker, score};

}

//user index 
var playerOne = player("X"); 
var playerTwo = player("O");

var gameController = (() => {
    
    //start with Player X first 
    var currentPlayer = playerOne; 

    //this method adds the marker on the gameboard 
    var nextMove = ((e) => {
        let board = gameboard.display;
        var gameWon; 
            if (e.target.textContent==="") {
                e.target.textContent = currentPlayer.marker;

                //updating the gameboard 
            var cellNb = e.target.dataset.cell;
            board[cellNb-1] = currentPlayer.marker; 

            gameWon = checkForWin(board);
                //checking to see if you have won
                if (gameWon === true){
                    msg.msgDiv.textContent = `${currentPlayer.marker} good job foo!`;
                    currentPlayer.score += 1; 

                    displayScore()
                    //removed event from gameboard 
                    cellsArray.forEach(cell => cell.remove.EventListner("click, gameController.nextMove")); 
                // Draw Checker 
             }        else if (gameWon == false && board.includes("") === false) {
                        msgDiv.textContent ="It's a tie!"; 
                        cellsArray.forEach(cell=> cell.removeEventListener("click", gameController.nextMove));
             }
                // if not, game still continues 
                else{
                    currentPlayer = changePlayer(currentPlayer);
                    msgDiv.textContent= `${currentPlayer.marker}'s turn.`;  
                }
                
        } else {
            msgDiv.textContent ="Clicked already. Choose another title"
        }
    }) 

   

     // change player function 
    function changePlayer(currentPlayer){
        if(currentPlayer===playerOne){
            currentPlayer=playerTwo
        
    } else {
        currentPlayer=playerOne
    }
    return currentPlayer; 
}   

//Win Conditions below 

function checkRow(a,b,c, board){
    var winingRow = false;
    if (board[a] === board[b] && 
        board[a] === board[c] &&
        board[a] !== ""){
          winnigRow = true;
      } 

      return winingRow;

    }
function checkForWin(board){
    //this is going to start checking the rows for matches 
    if (checkRow(0,1,2,board)=== true){
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
    // keep playing if not connected 

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
    //reset gameboard
    gameBoard.display = [ "", "", "",
    "", "", "",
   "", "", "" ];
    gameBoard.init();
    cellsArr.forEach(cell => cell.addEventListener("click", gameController.nextMove));
  
  });

btnStart.addEventListener("click", function(){
    gameboardDiv.style .display = "grid"; 
    gameboard.init(); 
btnStart.style.display ="none";
btnReset.style.display ="block";
cellsArray.forEach(cell=> cell.addEventListener("click", gameController.nextMove));
}) 

gameController.displayScore; 