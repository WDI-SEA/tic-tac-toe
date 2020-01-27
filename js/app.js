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
let gameMode;
let resetButton;
let endStatus;

let currentPlayer;
let currentMode;
let numberOfMoves = 0;
let gameOver = false;

// Hi honey! I love you! <3
const setUp = function() {

    numberOfMoves = 0;
    gameOver = false;
    endStatus.innerText = " ";
    currentMode = gameMode["game mode"].value;
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

    if (currentPlayer.playerName === PLAYER_ONE.playerName && currentMode === "computer") {
        gameboard.addEventListener("click", squareClickHandler);
        gameboard.addEventListener("keypress", squareClickHandler);
    } else if (currentPlayer.playerName == PLAYER_TWO && currentMode === "computer") {
        simpleAITurn();
    } 
    else if (currentMode === "pvp") {
        gameboard.addEventListener("click", squareClickHandler);
        gameboard.addEventListener("keypress", squareClickHandler);
    }
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
        gameboardSquares[i].style.cursor = "pointer";
        gameboardSquares[i].classList.add("square-hover");
    }
}

const squareClickHandler = function(e) {
    let squareRow = e.target.getAttribute("data-row");
    let squareCol = e.target.getAttribute("data-col");

    if (GAME_SQUARES[squareRow][squareCol] === 0) {
        GAME_SQUARES[squareRow][squareCol] = currentPlayer.token;
        e.target.innerText = currentPlayer.token;
        e.target.style.cursor = "initial";
        e.target.classList.remove("square-hover");
        e.target.removeAttribute("aria-label");
    
        numberOfMoves++;
    
        checkBoard();
        
        if (!gameOver) {
            switchActivePlayer();
        }
    }
}

const simpleAITurn = function() {
    let randomRow = Math.floor(Math.random() * 3);
    let randomCol = Math.floor(Math.random() * 3);

    while (GAME_SQUARES[randomRow][randomCol] !== 0) {
        randomRow = Math.floor(Math.random() * 3);
        randomCol = Math.floor(Math.random() * 3);
    } 

    GAME_SQUARES[randomRow][randomCol] = currentPlayer.token;
    console.log(randomRow, randomCol);

    let selectedSquare;
    for (let i = 0; i < gameboardSquares.length; i++) {
        let currentRow = gameboardSquares[i].getAttribute("data-row");
        let currentCol = gameboardSquares[i].getAttribute("data-col");

        if (randomRow == currentRow && randomCol == currentCol) {
            selectedSquare = gameboardSquares[i];
            console.log(selectedSquare);
        }
    }

    selectedSquare.innerText = currentPlayer.token;
    selectedSquare.style.cursor = "initial";
    selectedSquare.classList.remove("square-hover");
    selectedSquare.removeAttribute("aria-label");

    numberOfMoves++;

    checkBoard();
    
    if (!gameOver) {
        console.log(currentPlayer);
        switchActivePlayer();
    }
}

const switchActivePlayer = function() {
    
    PLAYER_TWO.isActive = !PLAYER_TWO.isActive;
    PLAYER_ONE.isActive = !PLAYER_ONE.isActive;

    if (currentPlayer.playerName === PLAYER_ONE.playerName) {

        currentPlayer = PLAYER_TWO;
        playerOneLabel.classList.remove("current-player");
        playerTwoLabel.classList.add("current-player");

        if (currentMode === "computer") {
            gameboard.removeEventListener("click", squareClickHandler);
            gameboard.removeEventListener("keypress", squareClickHandler);
            simpleAITurn();
        }
    } else {

        currentPlayer = PLAYER_ONE;
        playerTwoLabel.classList.remove("current-player");
        playerOneLabel.classList.add("current-player");

        if (currentMode === "computer") {
            gameboard.addEventListener("click", squareClickHandler);
            gameboard.addEventListener("keypress", squareClickHandler);
        }
    }
}

const checkBoard = function() {

    checkForWinner();

    if (numberOfMoves === MAX_MOVES && !gameOver) {
        endStatus.innerText = "Tie!";

        if (currentPlayer.playerName === "one") {
            playerOneLabel.classList.remove("current-player");
        } else {
            playerTwoLabel.classList.remove("current-player");
        }
        gameOver = true;
    }
}

const checkForWinner = function() {

    let currentPlayerToken = currentPlayer.token;
    
    switch(true) {
        case (currentPlayerToken === GAME_SQUARES[0][0] && currentPlayerToken === GAME_SQUARES[0][1] && currentPlayerToken === GAME_SQUARES[0][2]):
        case (currentPlayerToken === GAME_SQUARES[1][0] && currentPlayerToken === GAME_SQUARES[1][1] && currentPlayerToken === GAME_SQUARES[1][2]):
        case (currentPlayerToken === GAME_SQUARES[2][0] && currentPlayerToken === GAME_SQUARES[2][1] && currentPlayerToken === GAME_SQUARES[2][2]):
        case (currentPlayerToken === GAME_SQUARES[0][0] && currentPlayerToken === GAME_SQUARES[1][0] && currentPlayerToken === GAME_SQUARES[2][0]):
        case (currentPlayerToken === GAME_SQUARES[0][1] && currentPlayerToken === GAME_SQUARES[1][1] && currentPlayerToken === GAME_SQUARES[2][1]):
        case (currentPlayerToken === GAME_SQUARES[0][2] && currentPlayerToken === GAME_SQUARES[1][2] && currentPlayerToken === GAME_SQUARES[2][2]):
        case (currentPlayerToken === GAME_SQUARES[0][0] && currentPlayerToken === GAME_SQUARES[1][1] && currentPlayerToken === GAME_SQUARES[2][2]):
        case (currentPlayerToken === GAME_SQUARES[0][2] && currentPlayerToken === GAME_SQUARES[1][1] && currentPlayerToken === GAME_SQUARES[2][0]):
            endStatus.innerText = `Winner: ${currentPlayer.playerName}!`;
            wonRound();
            break;    
    }

}

const wonRound = function() {
    currentPlayer.wins++;
    gameOver = true;

    if (currentPlayer.playerName === "one") {
        playerOneCount.textContent = currentPlayer.wins;
        playerOneLabel.classList.remove("current-player");
    } else {
        playerTwoCount.textContent = currentPlayer.wins;
        playerTwoLabel.classList.remove("current-player");
    }

    gameboard.removeEventListener("click", squareClickHandler);
    gameboard.removeEventListener("keyboard", squareClickHandler);
}

const getDOMElements = function() {

    gameboard = document.querySelector("#gameboard");
    gameboardSquares = document.querySelectorAll(".square");
    playerOneLabel = document.querySelector("#player-one-label");
    playerOneCount = document.querySelector("#player-one-count");
    playerTwoLabel = document.querySelector("#player-two-label");
    playerTwoCount = document.querySelector("#player-two-count");
    gameMode = document.querySelector(".game-mode");
    resetButton = document.querySelector("#reset");
    endStatus = document.querySelector(".end-status");

}

document.addEventListener("DOMContentLoaded", function() {

    getDOMElements();

    resetButton.addEventListener("click", setUp);
    
    setUp();
});


