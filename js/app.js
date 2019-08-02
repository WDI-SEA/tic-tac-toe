// GLOBAL VARIABLES
let turn = 1;
let currentPlayer = "X";
let imgSrc;
let gameOver = false;

//======================DOM SELECTORS AND CALL FUNCTIONS======================//
var positions = document.querySelectorAll("#gameBoard div");
console.log(positions);

document.getElementById('reset-button').addEventListener('click', resetGame);

setGameBoard();

// ==================CHECK WINS AND/OR DRAW======================//
// 
function getClass(index) {
    return positions[index].getAttribute("class");
}

function checkWin(playerClass) {
    if ((getClass(0) == 'box ' + playerClass && getClass(1) == 'box ' + playerClass && getClass(2) == 'box ' + playerClass) ) {
        return true;
    } else if (getClass(3) == 'box ' + playerClass && getClass(4) == 'box ' + playerClass && getClass(5) == 'box ' + playerClass) {
        return true;
    } else if (getClass(6) == 'box ' + playerClass && getClass(7) == 'box ' + playerClass && getClass(8) == 'box ' + playerClass) {
        return true;
    } else if (getClass(0) == 'box ' + playerClass && getClass(4) == 'box ' + playerClass && getClass(8) == 'box ' + playerClass) {
        return true;
    } else if (getClass(2) == 'box ' + playerClass && getClass(4) == 'box ' + playerClass && getClass(6) == 'box ' + playerClass) {
        return true;
    } else if (getClass(0) == 'box ' + playerClass && getClass(3) == 'box ' + playerClass && getClass(6) == 'box ' + playerClass) {
        return true;
    } else if (getClass(1) == 'box ' + playerClass && getClass(4) == 'box ' + playerClass && getClass(7) == 'box ' + playerClass) {
        return true;
    } else if (getClass(2) == 'box ' + playerClass && getClass(5) == 'box ' + playerClass && getClass(8) == 'box ' + playerClass) {
        return true;
    }
    return false;
}
        

// ==================ADD EVENT LISTENERS======================//

function setGameBoard() {
    var positions = document.querySelectorAll(".box");
    for (var i = 0; i < positions.length; i++) {
        positions[i].addEventListener('click', boxClicked);  
    }
}

// ====================END-GAME STATE ======================//

function removeEventListener() {
    var positions = document.querySelectorAll(".box");
    for (var i = 0; i < positions.length; i++) {
        positions[i].removeEventListener('click', boxClicked);
    }
}
// create a function sets the game-over event
function isGameOver() {
	document.getElementById("message").innerText = "Play again?"
}
function resetGame() {
    document.getElementById('reset-button').addEventListener('click', resetGame);
    document.getElementById("message").innerText = "";
    turn = 1;
    
    var positions = document.querySelectorAll(".box");
    for (var i = 0; i < positions.length; i++) {
        positions[i].classList.remove('imageX') 
        positions[i].classList.remove('imageO') 
    }
    setGameBoard()
}


// ===================== GAME STATE =============================//

function boxClicked() {
    this.classList.add('image' + currentPlayer);
    this.removeEventListener('click', boxClicked);
    turn += 1

    if(checkWin('image' + currentPlayer) ){
    
        // checkWin(currentPlayer);
        document.getElementById("message").innerText = "Looks like we have a winner! Great job Player" + currentPlayer + "!" ;
   
        removeEventListener();
        
        
    }
    else if(turn > 9){
        document.getElementById("message").innerText = "That sucks. We have a draw!";

        removeEventListener()
        
    } 
    
    
    currentPlayer = currentPlayer == 'O'? 'X': 'O'; // if current player = O than assign X otherwise assign O
}
