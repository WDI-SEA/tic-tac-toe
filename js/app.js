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

let gameboard;
let gameboardSquares;
let playerOneLabel;
let playerOneCount;
let playerTwoLabel;
let playerTwoCount;
let resetButton;

let currentPlayer;

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
    gameboardSquares = document.querySelectorAll(".square");
    for (let i = 0; i < GAME_SQUARES.length; i++) {
        GAME_SQUARES[i] = [0, 0, 0];
    }

    for (let i = 0; i < gameboardSquares.length; i++) {
        gameboardSquares[i].innerText = " ";
    }
}

const squareClickHandler = function(e) {
    e.target.innerText = currentPlayer.token;
    switchActivePlayer();

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

document.addEventListener("DOMContentLoaded", function() {

    gameboard = document.querySelector("#gameboard");
    playerOneLabel = document.querySelector("#player-one-label");
    playerOneCount = document.querySelector("#player-one-count");
    playerTwoLabel = document.querySelector("#player-two-label");
    playerTwoCount = document.querySelector("#player-two-count");
    resetButton = document.querySelector("#reset");

    gameboard.addEventListener("click", squareClickHandler);
    resetButton.addEventListener("click", setUp);
    setUp();
});


