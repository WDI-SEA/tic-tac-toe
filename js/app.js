


//function to remove ability to click any cell (when game is won/tied)
const removeCellListeners = () => {
    // grab all cells from DOM
    let cells = document.querySelectorAll('.cell')
    //prevent clicking cells
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener('click', placeMarker)
    }
}

//function to place click listeners for cells
const addCellListeners = () => {
    //grab cells from DOM
    let cellListeners = document.querySelectorAll('.cell')

    //loop through cells and add click listener to allow player to place marker
    for (let i = 0; i < cellListeners.length; i++) {
        cellListeners[i].addEventListener('click', placeMarker)
    }
}

//function to place marker (prevent clicking cell again, check for win)
const placeMarker = (e) =>  {
    //change cell content from nothing to x
    e.target.textContent = 'X'
    
    removeEventListener('click', placeMarker)

    //draw scenario
    if (clicks === 8) {
        document.getElementById('message').textContent = "Cat's Game - Try Again!"
        removeCellListeners()
    }
}

//keep track off turns
let clicks = 0
const turnTracker = () => { 
    //grab all cells from DOM
    let turn = document.querySelectorAll('.cell')
    
    //increase clicks by 1 when cell clicked
    addClick = () => {
        for (let i = 0; i < turn.length; i++) {
            turn[i].onclick = () => {
                console.log(clicks)
                ++clicks
            }            
        }
    }

    addClick(turn)
    
}

//start condtions
const start = () => {
    //grab all cells from DOM
    startCell = document.querySelectorAll('.cell')

    //starting cells have no content
    for (let i = 0; i < startCell.length; i++) {
        startCell[i].textContent = ''
    }

    //button text changes to Restart
    document.getElementById('start').textContent = "Restart Game"

    //add event Listeners to the cells once game is started
    addCellListeners()

    //turn on turnTracker at start and reset to 0
    turnTracker(clicks = 0)
    markerChange()

    
    
    
}



//change marker from X to O, and change player message for each turn
const markerChange = () => {

    if (clicks%2 === 0) {
        document.getElementsByClassName('cell').textContent = 'x'
        document.getElementById('message').textContent = "Player 1 - Your Turn"
    }
    else {
        document.getElementsByClassName('cell').textContent = 'o'
        document.getElementById('message').textContent = "Player 2 - Your Turn"
    }
    
}

//win scenario
    //create boolean data for each cell - textContent === x or o
        //if cell 1-3 or 4-6 or 7-9 === true for x = WIN
        //if cell 1,4,7, or 2,5,8 or 3,6,9 === true for x = WIN
        //if cell 1,5,9 or 3,5,7 === true for x = WIN

        //if cell 1-3 or 4-6 or 7-9 === true for o = WIN
        //if cell 1,4,7, or 2,5,8 or 3,6,9 === true for o = WIN
        //if cell 1,5,9 or 3,5,7 === true for o = WIN


//check win senario after each turn

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', start)
})