let counter = 0;
let messageBoard = document.querySelector(".message-board");
let squares = document.querySelectorAll("img");
const playerOneClicked = [];
const playerTwoClicked =[];
const winCombos = [
    [0, 1, 2], [3, 4, 5], 
    [6, 7, 8], [0, 3, 6], 
    [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
    ];

// /* -------------Functions------------*/
let theGame = function() {
    squares.forEach(function(square, index) {
        square.clicked = false;
        square.addEventListener("click", function callback() {
            turnTracker();
            if (counter % 2 == 0) {
                square.src = "https://cdn.pixabay.com/photo/2013/07/12/12/39/letter-146064_960_720.png";
                playerTwoClicked.push(index);
                console.log("P2 clicked: " + playerTwoClicked)
                checkWin();
                
            } else {
                square.src = "https://cdn.pixabay.com/photo/2013/07/12/12/39/letter-146055_960_720.png";
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
        counter = counter + 1;
        messageBoard.innerHTML = "Player Two's Turn";
    } else {
        var player2 = "Player Two"
        counter = counter + 1;
        messageBoard.innerHTML = "Player One's Turn";
    }
}
function reset() {
    location.reload()
}
function checkWin() {
    winCombos.forEach(function(array) {
        if (array.every(element => playerOneClicked.includes(element))) {
            // lost();
            messageBoard.innerHTML = "Yasssss Player One!"; 
            
        } else if (array.every(element => playerTwoClicked.includes(element))) {
            // lost();
            messageBoard.innerHTML = "Yasssss Player Two!";
            
        } else if (
            counter >= 9) {
                messageBoard.innerHTML = "Ittsssaaa TIE!";
            }     
    })
}
// function lost() { 
//     squares.removeEventListener("click", );
// }
document.addEventListener("DOMContentLoaded", function() {
    theGame();
}
)