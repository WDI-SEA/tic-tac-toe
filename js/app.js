/*
    Global Variables
*/
var currentTurn = document.getElementById('currentTurn')
var curTurn; // Whose turn it currently is
var xai = false;
var oai = false;
var gameRunning = false;

// Setting up the grid of innerHTML
var allCells = document.getElementsByTagName('td')
var grid = [[],[],[]]
const makeGrid = () => {
    cellCounter = 0;
    for (var i=0; i<3; i++) {
        for (var j=0; j<3; j++) {
            grid[i].push(allCells[cellCounter])
            console.log(grid[i][j].innerHTML)
            cellCounter++;
        }
    }
}

/*
 Primary turn-making function
*/
 const takeTurn = (coord) => {
    console.log('Turn Initiated')
    cellValue = grid[coord[0]][coord[1]].innerHTML;
    if (cellValue != '') {
        return;
    } else {
        fillBox(coord); // Fill a box when a turn is taken
    }
    
    if(checkVictory()) {
        return endGame(false); // If the player wins, end the game
    } else if(checkBoard()) {
        return endGame(true); // If the board is full, end the game
    }

    if (curTurn == 'X') {
        curTurn = 'O'; // If X just went    , O goes next
        currentTurn.innerHTML = curTurn;
        if(oai) { // If xai, run it
            AImechanics();
        }
    } else if (curTurn == 'O') {
        curTurn = 'X'; // If O just went, X goes next
        currentTurn.innerHTML = curTurn;
        if(xai) {// If oai, run it
            AImechanics();
        }
    } else {
        alert('Something went wrong assigning next player')
    }
} 
// Fill the corresponding box with the current player's symbol
const fillBox = (coord) => {
    grid[coord[0]][coord[1]].innerHTML = curTurn
    console.log('Box should be filled with',curTurn)
}
// Check if the current player is victorious. If so, end the game
// Returns True if the current player wins; False if they have not
const checkVictory = () => {
    console.log('Checking for victory...')
    var cellValues = [];
    for (var i=0; i<allCells.length; i++) {
        cellValues.push(allCells[i].innerHTML)
    }
    console.log(cellValues[0] === cellValues[1])
    // Create an array of each possible combination
    var combos = [];
    for (var i=0; i<3; i++) {
        combos.push([cellValues[3*i], cellValues[3*i+1], cellValues[3*i+2]])
        combos.push([cellValues[i], cellValues[i+3], cellValues[i+6]])
    }
    combos.push([cellValues[0], cellValues[4], cellValues[8]])
    combos.push([cellValues[2], cellValues[4], cellValues[6]])
    
    // Check each combination, and return true if they are aligned
    for(var i=0; i<combos.length; i++) {
        if(combos[i].every(function equalToPlayer(cellVal) {return cellVal == curTurn})) {
            return true;
        }
    }
    return false;
}
// Check if the board is full. If so, end the game.
// Returns True if the board is full; False if it is not.
const checkBoard = () => {
    console.log('Checking if board is full...')
    for (var j=0;j<3;j++) {
        for (var i=0; i<3; i++) {   // For each cell in a row,
            if(grid[j][i].innerHTML == '') {    // If a cell is empty,
                return false;   // Then the board is NOT full.
            }
        }
    }
    return true; // If every cell has something in it, then the board is full.
}

//  Clears the board of all entries
const clearBoard = () => {
    console.log('Clearing board...')
    for(var i=0; i<3; i++) {
        for(var j=0; j<3; j++) {
            grid[i][j].innerHTML = ''
            console.log('Cell',i,j,'should now be empty, and is',grid[i][j].innerHTML)
        }
    }
}
// Sends an alert for who won or if no one won
// Clears the board of functionality
const endGame = (stalemate) => {
    if(stalemate) {
        alert('The game is a stalemate!'); // Alert if there is a stalemate
    } else {
        alert(`Player ${curTurn} wins!`); // Alert which player wins
    }
    for (i=0; i<allCells.length; i++) {
        allCells[i].onclick = '';
    }
}

const startGame = () => {
    makeGrid();
    clearBoard();
    xai = false;
    oai = false;
    gameRunning = true;
    var cellCounter = 0;
    for (var i=0; i<3; i++) {
        for(var j=0; j<3; j++) {
            allCells[cellCounter].onclick = function() {
                takeTurn(this.id.split(''))
            }
            cellCounter++;
        }
    }
    curTurn = 'X'
    currentTurn.innerHTML = curTurn;
}

// The AI functions
const AImechanics = () => {
    var validCoords = false;
    var coord = [,];
    while (!validCoords) {
        console.log('Calculating new solutions...')
        xCoord = Math.floor(Math.random() *3);
        yCoord = Math.floor(Math.random() *3);
        console.log('Checking if',yCoord,xCoord,'is clear');
        if(grid[yCoord][xCoord].innerHTML == '') {
            coord[0] = yCoord;
            coord[1] = xCoord;
            validCoords = true;
        }
    }
    var delayedTurn = setTimeout(takeTurn(coord), 2000);
}
const activateXAI = () => {
    if (!gameRunning) {
        startGame();
    }
    xai = true;
    AImechanics();
}
const activateOAI = () => {
    if (!gameRunning) {
        startGame();
    }
    oai = true;
    if (curTurn == 'O') {
        AImechanics();
    }
}