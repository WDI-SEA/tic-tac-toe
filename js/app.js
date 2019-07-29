console.log('Hello frontend');
//variables
var timesClicked = 0, playerXScore = 0, PlayerOScore = 0, Ties = 0;
console.log("timesClicked =", timesClicked);
// var winCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];
// var xClickedArr = [1,4,7];

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("restart-button").addEventListener("click", start);
});

var resetScoreButton = document.getElementById("reset-scores");
var restartGameButton = document.getElementById("restart-button");
var messageBoard = document.getElementById("message-board");
var boxes = document.querySelectorAll("div.grid-box");
console.log("boxes =", boxes);
//constants needed
// x Image
// o Image
// get
// var x = 

//document.getElementById("grid-box-1").textContent = "X";


//player clicks on a box, an X is entered
//the box can no longer be clicked until reset
//player 2 clicks on a box, an O is entered
//the box can no longer be clicked until reset
//after 5th iteration, begin checking for a Win
//if Win, execute youWon, else continue current game
//if 9 iterations, execute youTied
//reset game with click of Play Again button
//update score for winner
//reset score counter button
//alternate which player starts
//draw line through win?
//create AI player

 function start() {
    console.log("working!");
    document.getElementById("jeopardy-music").play();
    boxesOn();
    
    // console.log(document.getElementById("grid-box-1").value);
    // console.log(xClickedArr.join(""));
   
    //getElementsByClassName("grid-box")[0].classList.remove();
 }

// //timer?
// time = 0
// document;

// //reset boxes
// document.getElementById("grid").childNode.remove();

//Set the initial order of play
function playerOrder() {
    if (timesClicked % 2 === 0) {
        messageBoard.textContent = "Player X, It's Your Turn";
    } else
    { messageBoard.textContent = "Player O, It's Your Turn"
    }
    }


function clickBox() {
    timesClicked += 1;
    console.log(timesClicked);
    if (timesClicked % 2 !== 0) {
        //insert image
        this.textContent = "X";
        console.log("x inserted");
       } else
    { this.textContent = "O";
    console.log("o inserted");
}
playerOrder();
    //remove clicking option
    this.removeEventListener("click", clickBox);
    
    //check if won
    if (timesClicked >= 5) {
        winGame();
    }
}

//make boxes clickable
function boxesOn () {
    
var emptyBoxes = document.querySelectorAll("div.grid-box");

for (i=0; i < emptyBoxes.length; i++) {
    emptyBoxes[i].addEventListener("click", clickBox)
}
}

function winGame() {
    if (boxes[0].getAttribute("textContent") === boxes[1].getAttribute("textContent") &&
        boxes[1].getAttribute("textContent") === boxes[2].getAttribute("textContent")) {
            return true;
        } else
        if (boxes[3].getAttribute("textContent") === boxes[4].getAttribute("textContent") &&
        boxes[4].getAttribute("textContent") === boxes[5].getAttribute("textContent")) {
            return true;
        } else
        if (boxes[6].getAttribute("textContent") === boxes[7].getAttribute("textContent") &&
        boxes[7].getAttribute("textContent") === boxes[8].getAttribute("textContent")) {
            return true;
        } else
        if (boxes[0].getAttribute("textContent") === boxes[3].getAttribute("textContent") &&
        boxes[3].getAttribute("textContent") === boxes[6].getAttribute("textContent")) {
            return true;
        } else
        if (boxes[1].getAttribute("textContent") === boxes[4].getAttribute("textContent") &&
        boxes[4].getAttribute("textContent") === boxes[7].getAttribute("textContent")) {
            return true;
        } else
        if (boxes[2].getAttribute("textContent") === boxes[5].getAttribute("textContent") &&
        boxes[5].getAttribute("textContent") === boxes[8].getAttribute("textContent")) {
            return true;
        } else
        if (boxes[0].getAttribute("textContent") === boxes[4].getAttribute("textContent") &&
        boxes[4].getAttribute("textContent") === boxes[8].getAttribute("textContent")) {
            return true;
        } else
        if (boxes[2].getAttribute("textContent") === boxes[4].getAttribute("textContent") &&
        boxes[4].getAttribute("textContent") === boxes[6].getAttribute("textContent")) {
            return true;
        } else
        return false;
        
    }
    console.log(winGame());

    function endGame(resultMessage) {
    //stop music
        document.getElementById("jeopardy-music").pause();
    //turn clicks off
    var emptyBoxes = document.querySelectorAll("div.grid-box");
    for (i=0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].removeEventListener("click", clickBox)
    }
    //change button text
    document.getElementById("restart-button").textContent = "Play Again?";

    }

//         } else
// }

// function checkWin() {
// 	if (positions[0].getAttribute("data-piece") == positions[1].getAttribute("data-piece") && positions[0].getAttribute("data-piece") == positions[2].getAttribute("data-piece")) {
// 		return true;
		
//
// function winGame() {
//     for (i=0; i < winCombos.length; i++) {
//         if (xClickedArr === 3 && xClickedArr === winCombos[i]) {
//             return true;
//         }
//         else if (xClickedArr === 4) {
//             (xClickedArr)
//         }
//         }
//     }

// }