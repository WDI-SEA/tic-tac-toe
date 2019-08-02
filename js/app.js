console.log('Hello frontend');
// variables
var timesClicked = 0;
var playerXScore = 0;
var playerOScore = 0;
var ties = 0;
var gameArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var gameArrIndex;


// console.log("timesClicked =", timesClicked);


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("restart-button").addEventListener("click", start);
});

document.getElementById("reset-scores").addEventListener("click", resetScores);

// cached elements
var resetScoreButton = document.getElementById("reset-scores");
var restartGameButton = document.getElementById("restart-button");
var messageBoard = document.getElementById("message-board");
var boxes = document.querySelectorAll("div.grid-box");
var xScore = document.getElementById("x-score");
var oScore = document.getElementById("o-score");
var tieScore = document.getElementById("tie-score");
var kitty = document.createElement("img");
kitty.src = "./img/kitty.jpeg";

console.log("boxes =", boxes);


 function start() {
    
    console.log("working!", gameArr);
    document.getElementById("jeopardy-music").play();
    boxesOn();
    timesClicked = 0;
    gameArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        
    boxes.forEach((box) => {
        box.textContent = '';
        console.log(box.textContent);
    })
 }
function playerOrder() {
    if (timesClicked % 2 === 0) {
        messageBoard.textContent = "Player X, It's Your Turn";
    } else {
         messageBoard.textContent = "Player O, It's Your Turn"
    }
    
}


function clickBox() {

    timesClicked += 1;
    //console.log(this.value);
    if (timesClicked % 2 !== 0) {
        //assign to X
        this.textContent = "X";
        updateArr("X");
        //gameArr[this.value] = "X";
        console.log(gameArr);
    } else {
        this.textContent = "O";
        updateArr("O");
        //gameArr[this.value] = "O";
        console.log(gameArr);
    }
    playerOrder();
    //remove clicking option
    this.removeEventListener("click", clickBox);
    //check if won
    if (timesClicked >= 5) {
        if (winGame()){
            declareWinner(winGame());
        } else if (timesClicked >= 9){
            declareWinner(winGame());
        }
    }
}


//make boxes clickable
function boxesOn () {
    var onBoxes = document.querySelectorAll("div.grid-box");
    for (i=0; i < onBoxes.length; i++) {
    onBoxes[i].addEventListener("click", clickBox);
    }
}

function boxesOff () {
    var offBoxes = document.querySelectorAll("div.grid-box");
    for (i=0; i < offBoxes.length; i++) {
    offBoxes[i].removeEventListener("click", clickBox)
    }
}

function winGame() {
    console.log(gameArr);
    if (gameArr[0] === gameArr[1] &&
        gameArr[1] === gameArr[2]) {
        console.log("true1");
            return true;
        } else
        if (gameArr[3] === gameArr[4] &&
        gameArr[4] === gameArr[5]) {
            console.log("true2");
        return true;
        } else
        if (gameArr[6] === gameArr[7] &&
        gameArr[7] === gameArr[8]) {
            console.log("true3");
            return true;
        } else
        if (gameArr[0] === gameArr[3] &&
        gameArr[3] === gameArr[6]) {
            console.log("true4");
            return true;
        } else
        if (gameArr[1] === gameArr[4] &&
        gameArr[4] === gameArr[7]) {
            console.log("true5");
            return true;
        } else
        if (gameArr[2] === gameArr[5] &&
        gameArr[5] === gameArr[8]) {
            console.log("true6");
            return true;
        } else
        if (gameArr[0] === gameArr[4] &&
        gameArr[4] === gameArr[8]) {
            console.log("true7");
            return true;
        } else
        if (gameArr[2] === gameArr[4] &&
        gameArr[4] === gameArr[6]) {
            console.log("true8");
            return true;
        } else
        return false;
    }
    

    function endGame() {
        // stop music
        document.getElementById("jeopardy-music").pause();
        // turn clicks off
        boxesOff();
        // change button text
		document.getElementById("restart-button").textContent = "Play Again?";
        //post winner
        
    }
    function updateArr (str) {
        for (i = 0; i < gameArr.length; i++ ) {
            if (boxes[i].textContent === str) {
                gameArr[i] = str;
            }
        }
    }

    function declareWinner(winGame) {
        if (winGame) {
            if (timesClicked % 2 !== 0) {
                console.log("X wins");
                messageBoard.textContent = "Player X is the Winner!";
                playerXScore += 1;
                xScore.textContent = playerXScore;
                endGame();
            } else {
                messageBoard.textContent = "Player O is the Winner!";
                playerOScore += 1;
                oScore.textContent = playerOScore;
                endGame();
            }
        } else {
            messageBoard.textContent = "Cat's Game...Click Below to Play Again";
            tieScore.textContent = ++ties;
            endGame();
        }
    }

    function resetScores() {
        playerXScore = 0;
        playerOScore = 0;
        ties = 0;
        xScore.textContent = 0;
        oScore.textContent = 0;
        tieScore.textContent = 0;
        timesClicked = 0;
}
