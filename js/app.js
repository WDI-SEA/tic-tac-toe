
//let clickedElement;




window.addEventListener('DOMContentLoaded', (event) => {
    let gameGrid;
    // add click listener to game-grid
    gameGrid = document.querySelector("#game-grid");
    console.log(gameGrid);
    gameGrid.addEventListener('click', gameGridClickListener);
    document.querySelector(".reset").addEventListener('click', resetGame);
    initGame();
});

let resetGame = function() {
    console.log('Reset button clicked');
}

// initialize/reset game
let initGame = function() {
    playerContract.currentPlayer = player1;
};

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
    clickedSpan = event.target.querySelector('.span');
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

let changeCurrentPlayer = function() {
    playerContract.changeCurrentPlayer();
}


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