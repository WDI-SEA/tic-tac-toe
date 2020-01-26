// wait for the site to be loaded
window.addEventListener('DOMContentLoaded', (event) => {
    let gameGrid;
    // add click listener to game-grid
    gameGrid = document.querySelector(boardData.gamegridIdSelector);
    console.log(gameGrid);
    gameGrid.addEventListener('click', gameGridClickListener);

    // add click listener to reset button
    document.querySelector(boardData.resetButtonClassSelector).addEventListener('click', resetGameButtonHandler);

    // initialize game
    initGame();
});

// holds information about the board itself
let boardData = {
    gamegridIdSelector: "#game-grid",
    resetButtonClassSelector: ".reset",
    tileClassName: "span",
    tileClassSelector: ".span" 
}

// player clicked reset button
let resetGameButtonHandler = function() {
    console.log('Reset button clicked');
    // clear the visuals
    resetGameBoard();
};

// reset the game
let resetGameBoard = function() {
    // loop through the tiles to clear the visuals 
    let gameBoardTiles = document.querySelectorAll(boardData.tileClassSelector);
    for (let item of gameBoardTiles) {
        item.className = "";
        item.classList.add(boardData.tileClassName);
    }

    // initialize new game
    initGame();
}

// initialize/reset game
let initGame = function() {
    playerContract.currentPlayer = player1;
};

// some player clicked a tile
let gameGridClickListener = function(event) {
    // local variables
    let clickedElement;
    let clickedSpan;

    // what was clicked?
    clickedElement = event.target.id;

    // check if relevant id was clicked (numeric)
    if (!clickedElement.match(/[0-9]/g))
    {
        return
    }
    console.log('A relevant div was clicked');

    // check if this div is already occupied
    clickedSpan = event.target.querySelector(boardData.tileClassSelector);
    if (clickedSpan.classList.length > 1) 
    {
        return;
    }

    console.log('The div is free');

    // current playerObject can take over
    playerContract.setSpan(clickedSpan);
    
    console.log(clickedSpan.classList);

    // next players turn
    changeCurrentPlayer();
};

// passthrough function to maintain readability 
let changeCurrentPlayer = function() {
    playerContract.changeCurrentPlayer();
}

// player relevant objects
let player1 = {
    name: "player1"
};

let player2 = {
    name: "player2"
};
let playerContract = {
    currentPlayer: player2,
    setSpan: function(htmlSpan) {
        htmlSpan.classList.add(this.currentPlayer.name);
    },
    changeCurrentPlayer: function() {
        if (this.currentPlayer === player1) 
        {
            this.currentPlayer = player2;
        }
        else
        {
            this.currentPlayer = player1;
        }
    }
}