// wait for the site to be loaded
window.addEventListener('DOMContentLoaded', (event) => {
    let gameGrid;
    // add click listener to game-grid
    gameGrid = document.querySelector(boardData.gamegridIdSelector);
    console.log(gameGrid);
    gameGrid.addEventListener('click', gameGridClickListener);

    // add click listener to reset button
    document.querySelector(boardData.resetButtonClassSelector).addEventListener('click', resetGameButtonHandler);

    // set each players score label (span)
    let scoreSpans = document.querySelectorAll(boardData.scoreClassSelector);
    for (const iterator of scoreSpans) {
        if (player1.name === iterator.classList[0])
        {
            player1.scoreSpan = iterator;
        }
        else
        {
            player2.scoreSpan = iterator;
        }
    }
    // initialize game
    initGame();
});

// holds information about the board itself
let boardData = {
    dialogIdSelector: "#dialog",
    dialogClassHidden: "hidden",
    dialogClassVisible: "visible",
    gamegridIdSelector: "#game-grid",
    resetButtonClassSelector: ".reset",
    scoreClassSelector: ".score",
    tileClassName: "span",
    tileClassSelector: ".span"
}

// player clicked reset button
let resetGameButtonHandler = function() {
    console.log('Reset button clicked');
    // clear the visuals
    resetGameBoard();
    // initialize new game
    initGame();
};

// reset the game
let resetGameBoard = function() {
    // loop through the tiles to clear the visuals 
    let gameBoardTiles = document.querySelectorAll(boardData.tileClassSelector);
    for (let item of gameBoardTiles) {
        item.className = "";
        item.classList.add(boardData.tileClassName);
    }    
}

// initialize/reset game
let initGame = function() {
    preparePlayerForNewRound();
    hideDialog();
    gameIsActive.set(true);
};

let pauseGame = function() {
    gameIsActive.set(false);
}

let gameIsActive = {
    status: false,
    set: function(value) {
        this.status = value;
    },
    get: function() {
        return this.status;
    }
}

// some player clicked a tile
let gameGridClickListener = function(event) {
    if (!gameIsActive.get())
    {
        console.log(`game is paused`);
        return;
    }
    console.log(`${gameIsActive.get()}`);   
    // local variables
    let clickedElement;
    let clickedTile;

    // what was clicked?
    clickedElement = event.target.id;

    // check if relevant id was clicked (numeric)
    if (!clickedElement.match(/[0-9]/g))
    {
        return
    }
    console.log('A relevant div was clicked');

    // check if this div is already occupied
    clickedTile = event.target.querySelector(boardData.tileClassSelector);
    if (clickedTile.classList.length > 1) 
    {
        return;
    }

    console.log('The div is free');

    // current playerObject can take over
    playerContract.computeTurn(clickedElement, clickedTile);
    //playerContract.setSpan(clickedSpan);
    
    console.log(clickedTile.classList);

    // next players turn
    changeCurrentPlayer();
};

// passthrough function to maintain readability 
let changeCurrentPlayer = function() {
    playerContract.changeCurrentPlayer();
};

let preparePlayerForNewRound = function() {
    playerContract.currentPlayer = player1;
    // tell playerContract to reset 
    playerContract.resetValues();
};

// handle the end of the game
let gameEndedHandler = {
    // win condition is met, what happens next
    gameEndsWithWinner: function() {
        pauseGame();
    },
    // if there's no winner, but every tile is in use
    gameEndsWithDraw: function() {
        pauseGame();
    }
};

let handleWin = function() {
    console.log(`Handle what happens if a player wins`);
    showDialog(`Congratiolations, ${playerContract.currentPlayer.name} won this round`);
    gameEndedHandler.gameEndsWithWinner();
};

let handleDraw = function() {
    console.log(`Handle what happens if there is a tie`);
    showDialog(`Tie, no player won this round`);
    gameEndedHandler.gameEndsWithDraw();
};

let hideDialog = function() {
    let dialog = document.querySelector(boardData.dialogIdSelector);
    dialog.className = "";
    dialog.classList.add(boardData.dialogClassHidden)
}

// show dialog div with a message if the game is over
let showDialog = function(msg) {
    let dialog = document.querySelector(boardData.dialogIdSelector);
    dialog.textContent = msg;
    dialog.classList.add(boardData.dialogClassVisible);
}


// player relevant objects
let player1 = {
    name: "player1",
    score: 0,
    scoreSpan: null,
    symbol: "x"
};

let player2 = {
    name: "player2",
    score: 0,
    scoreSpan: null,
    symbol: "o"
};

let playerScoreUpdater = {
    update: function(player) {
        player.scoreSpan.textContent = player.score;
    }
};
 
let playerContract = {
    currentPlayer: player2,
    gameBoardState: new Array(9),
    turns: 0,
    changeCurrentPlayer: function() {
        if (this.currentPlayer === player1) 
        {
            this.currentPlayer = player2;
        }
        else
        {
            this.currentPlayer = player1;
        }
    },
    computeTurn: function(clickedElementIndex, clickedTile) {
        this.turns++;
        // change the visual of the clicked tile
        this.setPlayerTile(clickedTile);
        // mirror the current state of the board
        this.gameBoardState[clickedElementIndex] = this.currentPlayer.symbol;
        // check for a win condition
        if (checkForWin(this.gameBoardState, clickedElementIndex, this.currentPlayer)) 
        { 
            this.currentPlayer.score++;
            handleWin();
            playerScoreUpdater.update(this.currentPlayer);
        }
        else if (this.turns === 9)
        {
            handleDraw();
        }
        console.log(this.gameBoardState);
    },
    resetValues: function() {
        console.log("resetting playerContract");
        this.gameBoardState.length = 0;
        this.turns = 0;
    },
    setPlayerTile: function(clickedTile) {
        clickedTile.classList.add(this.currentPlayer.name);
    }
}

// check if the active player won the game (returns boolean)
let checkForWin = function(gameBoardState, index, player) {
    console.log(`called with ${player.name}, index: ${index} data: ${gameBoardState}`);
    // rowSum represents the sum of a players symbol in that row,
    // colSum represents the sum of a players szmbol in that column,
    // rowIndex defines where to start in the given array for the row and has to be incremented by 1,
    // colIndex defines where to start in the given array for the column ans has to be incremented by 3
    let rowSum = 0, colSum = 0, rowIndex = 0, colIndex = 0, diagonalSum = 0, diagonalIndex = 0;
    let rowToCheck = Math.floor(index / 3);
    let colToCheck = index % 3;
    let checkDiagonal = (index % 2 === 0);
    let winConditionMet = false;
    rowIndex = rowToCheck;
    colIndex = colToCheck;
    
    console.log(`checking row: ${rowToCheck} and column: ${colToCheck}`);

    // check if there are three in a row / column
    for (let i = 0; i < 3; i++) 
    {
        if(gameBoardState[rowIndex] === player.symbol)
        {
            rowSum++;
        }
        if(gameBoardState[colIndex] === player.symbol)
        {
            colSum++;
        }        
        // increment values
        rowIndex++;
        colIndex += 3;
    }

    if(colSum > 2 || rowSum > 2)
    {
        winConditionMet = true;
    } 

    // check if there are three diagonal
    if (!winConditionMet && checkDiagonal)
    {
        diagonalIndex = 0;
        // check from top left to bottom right
        for (let i = 0; i < 3; i++)
        {
            
            if(gameBoardState[diagonalIndex] === player.symbol)
            diagonalSum++; 
            diagonalIndex += 4;
        
        }
        winConditionMet = (diagonalSum === 3)? true : false;
        // check from top right to bottom left
        if (!winConditionMet)
        {
            diagonalSum = 0;
            diagonalIndex = 2;
            for (let i = 0; i < 3; i++)
            {
                
                if(gameBoardState[diagonalIndex] === player.symbol)
                diagonalSum++; 
                diagonalIndex += 2;
            }
        }
        winConditionMet = (diagonalSum === 3)? true : false;
    }
    if (winConditionMet)
    {
        console.log(`WINNER ${player.name} won the game!`);
    }
    return winConditionMet;
}