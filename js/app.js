const emptyState = {
    image: "../tic-tac-toe/img/empty.png",
    state: "empty"
}
const xState = {
    image: "../tic-tac-toe/img/x.png",
    state: "X"
}
const oState = {
    image: "../tic-tac-toe/img/o.png",
    state: "O"
}
let squaresLeft = 9;
let turn = xState;
let winner = "error";
let domSquares = document.querySelectorAll('img');
let domPopup = document.querySelector(".popup");
let domBanner = document.querySelector(".banner");
let domMessage = document.querySelector(".message");

let gameInit = function() {
    //start each square as blank image and class
    for (let i = 0; i < 9; i++) {
        domSquares[i].src = emptyState.image;
        domSquares[i].classList.remove("xState");
        domSquares[i].classList.remove("oState");
        domSquares[i].classList.add("emptyState");
    }
    // initialize variables
    squaresLeft = 9;
    winner = false;
    turn = xState;
    domBanner.innerHTML = "<p>Currently " + turn.state + "'s turn</p>";
    // hide popup 
    domPopup.style.visibility = "hidden";
}

let squareClickHandler = function(e) {
    //check state
    if ((squaresLeft > 0) && !winner) {
        //run turn
        if (e.target.classList.contains("emptyState")) {
            // change the picture
            e.target.src = turn.image;
            // change the target's state class
            e.target.classList.remove("emptyState");
            // change whose turn it is
            if (turn === xState) {
                e.target.classList.add("xState");
                turn = oState;
            } else {
                e.target.classList.add("oState");
                turn = xState;
            }
            domBanner.innerHTML = "<p>Currently " + turn.state + "'s turn</p>";
            squaresLeft--;
            winner = checkWin();
            // check if the game is over and display pop up
            if (winner) {
                domMessage.innerText = winner.state + " won!";
                domPopup.style.visibility = "visible";
            } else if (squaresLeft === 0) {
                domMessage.innerText = "It's a cat's game!";
                domPopup.style.visibility = "visible";
            }
        }
    }
}
// return who won as a state object else return false
let checkWin = function() {
     
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    // DOM References 
    gameInit();
    document.querySelector('.gameboard').addEventListener('click', squareClickHandler);
    document.querySelector("button").addEventListener('click', gameInit);
});