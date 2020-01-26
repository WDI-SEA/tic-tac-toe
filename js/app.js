const GAME_SQUARES = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const PLAYER_ONE = {
    playerName: "one",
    isActive: false,
    wins: 0,
    token: 'X'
};

const PLAYER_TWO = {
    playerName: "two",
    isActive: false,
    wins: 0,
    token: 'O'
};

const MAX_MOVES = 9;

let gameboard;
let gameboardSquares;
let playerOneLabel;
let playerOneCount;
let playerTwoLabel;
let playerTwoCount;
let resetButton;
let endStatus;

let currentPlayer;
let numberOfMoves = 0;

// Hi honey! I love you! <3
const setUp = function() {
    getFirstPlayer();
    resetGameBoard();
}

const getFirstPlayer = function() {

    let randomChance = Math.floor(Math.random() * 2);

    if (randomChance % 2 === 0) {
        currentPlayer = PLAYER_ONE;
        playerOneLabel.classList.add("current-player");
    } else {
        currentPlayer = PLAYER_TWO;
        playerTwoLabel.classList.add("current-player");
    }
    currentPlayer.isActive = true;
}

const resetGameBoard = function() {

    for (let i = 0; i < GAME_SQUARES.length; i++) {
        GAME_SQUARES[i] = [0, 0, 0];
    }

    for (let i = 0; i < gameboardSquares.length; i++) {
        gameboardSquares[i].innerText = " ";
        gameboardSquares[i].setAttribute("data-col", i%3);
        let rowValue;
        if (i < 3) {
            rowValue = 0;
        } else if (i < 6) {
            rowValue = 1;
        } else {
            rowValue = 2;
        }
        gameboardSquares[i].setAttribute("data-row", rowValue);
    }
}

const squareClickHandler = function(e) {

    e.target.innerText = currentPlayer.token;
    let squareRow = e.target.getAttribute("data-row");
    let squareCol = e.target.getAttribute("data-col");
    GAME_SQUARES[squareRow][squareCol] = currentPlayer.token;

    numberOfMoves++;

    switchActivePlayer();
    checkBoard();

}

const switchActivePlayer = function() {
    
    PLAYER_TWO.isActive = !PLAYER_TWO.isActive;
    PLAYER_ONE.isActive = !PLAYER_ONE.isActive;
    if (currentPlayer.playerName === "one") {
        currentPlayer = PLAYER_TWO;
        playerOneLabel.classList.remove("current-player");
        playerTwoLabel.classList.add("current-player");
    } else {
        currentPlayer = PLAYER_ONE;
        playerTwoLabel.classList.remove("current-player");
        playerOneLabel.classList.add("current-player");
    }
}

const checkBoard = function() {
    if (numberOfMoves === MAX_MOVES) {
        endStatus.innerText = "Tie!";
        console.log(GAME_SQUARES);
    }
}

const getDOMElements = function() {

    gameboard = document.querySelector("#gameboard");
    gameboardSquares = document.querySelectorAll(".square");
    playerOneLabel = document.querySelector("#player-one-label");
    playerOneCount = document.querySelector("#player-one-count");
    playerTwoLabel = document.querySelector("#player-two-label");
    playerTwoCount = document.querySelector("#player-two-count");
    resetButton = document.querySelector("#reset");
    endStatus = document.querySelector(".end-status");

}

document.addEventListener("DOMContentLoaded", function() {

    getDOMElements();

    gameboard.addEventListener("click", squareClickHandler);
    resetButton.addEventListener("click", setUp);
    
    setUp();
});


