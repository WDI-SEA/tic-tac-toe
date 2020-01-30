const emptyState = {
    image: "img/empty.png",
    state: "empty"
}
const xState = {
    image: "img/x.png",
    state: "X"
}
const oState = {
    image: "img/o.png",
    state: "O"
}
let squaresLeft = 9;
let turn = xState;
let winner = false;
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
    // build an array of state objects to describe the board
    let squares = [];
    for (let i = 0; i < 9; i++) {
        if (domSquares[i].classList.contains("xState")) {
            squares[i] = xState;
        } else if (domSquares[i].classList.contains("oState")) {
            squares[i] = oState;
        } else {
            squares[i] = emptyState;
        }
    }
    // traverse array for matches
    for (let i = 0; i < 9; i += 3) {
        // check rows
        if ((squares[i].state === squares[i+1].state) 
            && (squares[i+1].state === squares[i+2].state)
            && (squares[i].state !== "empty")) {
            return squares[i];
            // check columns
        } else {
            int1 = Math.floor(i/3);
            int2 = Math.floor(i/3+3);
            int3 = Math.floor(i/3+6);
            if ((squares[int1].state == squares[int2].state)
                && (squares[int2].state == squares[int3].state)
                && (squares[int1].state !== "empty")) {
                return squares[int1];
            }
        }
    }
    // check diagonals: if 0, 4, 8  OR 2, 4, 6 match
    if (((squares[0].state === squares[4].state)
         && (squares[4].state === squares[8].state)) 
    || ((squares[2].state === squares[4].state)
         && (squares[4].state === squares[6].state))) {
        if (squares[4].state !== "empty") {
        return squares[4]; //returns middle square 
        }
    }
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    // DOM References 
    gameInit();
    document.querySelector('.gameboard').addEventListener('click', squareClickHandler);
    document.querySelector("button").addEventListener('click', gameInit);
});