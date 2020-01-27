let counter = 0;
let messageBoard = document.querySelector(".message-board");
let squares = document.querySelectorAll("img");

// /* -------------Functions------------*/
let gameInit = function() {
    // document.querySelectorAll("img").addEventListener("click", flippingSquare);
    squares.forEach(function(square, index) {
        square.clicked = false;
        square.addEventListener("click", function callback() {
            // console.log(index);
            turnTracker();
            //change img
            if (counter % 2 == 0) {
                square.src = "https://i.pinimg.com/originals/06/2b/75/062b75c962fe374ba95abbf5319643ef.png";
                playerTwoClicked.push(index);
                console.log("P2 clicked: " + playerTwoClicked)
                checkWin();
                
            } else {
                square.src = "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
                playerOneClicked.push(index);
                console.log("P1 clicked: " + playerOneClicked)
                checkWin();
            }
            square.removeEventListener("click", callback);
        })
    })

}
let turnTracker = function() {
    if (counter % 2 == 0) {
        var player1 = "Player One";
        // let X = true;
        counter = counter + 1;
        //dom to message board
        messageBoard.innerHTML = "Player Two's Turn";
        // console.log(counter);÷

    } else {
        var player2 = "Player Two"
        // let X = false;
        counter = counter + 1;
        //dom to message board
        messageBoard.innerHTML = "Player One's Turn";
    }
    // console.log(counter);
}
function reset() {
    location.reload()
}

//make two playerClicked arrays
const playerOneClicked = [];
const playerTwoClicked =[];


//make const for win 
const winCombos = [
[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7],[2, 5, 8], [0, 4, 8], [2, 4, 6]
];
//check win and losing and tie functions
// function checkWin() {
//create switch statement going through all winCombos and if true then game function stops
function checkWin() {
    winCombos.forEach(function(array) {
        if (array.every(element => playerOneClicked.includes(element))) {
            messageBoard.innerHTML = "Yasssss Player One!";
           
            
        } else if (array.every(element => playerTwoClicked.includes(element))) {
            messageBoard.innerHTML = "Yasssss Player Two!";
            
        }
    })
}
// arr.every(callback(element[, index[, array]])[, thisArg])


/*

function checkWin() {
    winCombos.forEach(function(array) {
        if (array.every(function(element) {

        playerOneClicked.includes(element)
        })) {
            console.log("p1 wins")
        } else if (array.every(function(element) {
            playerTwoClicked.includes(element)
        })) {
            console.log("p2 wins")
        }
    })
}

*/

//win and lose and tie function
//reset game function


document.addEventListener("DOMContentLoaded", function() {
    gameInit();
}
)