let counter = 0;
let messageBoard = document.querySelector(".message-board");
let squares = document.querySelectorAll("img");
let gameOver = false;
const playerOneClicked = [];
const playerTwoClicked =[];
const winCombos = [
    [0, 1, 2], [3, 4, 5], 
    [6, 7, 8], [0, 3, 6], 
    [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
    ];

    
    
    
    
    // /* -------------Functions------------*/
    //write out how game works
    let theGame = function() {
        //iterating through each square and giving it a number index
        squares.forEach(function(square, index) {
            square.clicked = false;
            //on ce the button is clicked then start counting how much times it's been clicked
                function callback(event) {
                    turnTracker();
                    if (counter % 2 == 0) {
                        event.target.src = "https://cdn.pixabay.com/photo/2013/07/12/12/39/letter-146064_960_720.png";
                        playerTwoClicked.push(index);
                        // console.log("P2 clicked: " + playerTwoClicked)
                        checkWin();
                        
                        
                    } else {
                        event.target.src = "https://cdn.pixabay.com/photo/2013/07/12/12/39/letter-146055_960_720.png";
                        playerOneClicked.push(index);
                        // console.log("P1 clicked: " + playerOneClicked)
                        checkWin();
                    
                    }
                    event.target.removeEventListener("click", callback);
                }
            square.addEventListener("click", callback)
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
//trying to add removeEventlistener but can't seem to figure it out
// function removeListener() {
//     for (var i = 1; i < 10; i ++)
//     document.getElementById(`s${i}`).removeEventListener("click");
// }
function checkWin() {
    winCombos.forEach(function(array) {
        if (array.every(element => playerOneClicked.includes(element))) {
            // lost();
            messageBoard.innerHTML = "Yasssss Player One!"; 
            gameOver = true;
            // removeListener();
            alert("Player One Wins!");
            reset();
            
            
        } else if (array.every(element => playerTwoClicked.includes(element))) {
            // lost();
            messageBoard.innerHTML = "Yasssss Player Two!";
            gameOver = true;
            alert("Player Two Wins!");
            reset();
            // removeListener();
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