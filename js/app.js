// Question: How do you use multiple font weights for the same font?

// classList only giving me one class name, not both/all.

// Hardcoding box 3 with a class X doesn't do anything?

// Background image not working when trying to use local file. Also not sure how to center it vertically.

// Error on line 74 about 'locations'.


let count = 0; 
let xLocations = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let oLocations = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let isGameOver = false;

function checkForWin(player, locations) { 
    console.log("Checking for Win");
    if (locations[0]) {
        if (locations[1] && locations[2]) {  // Check top row for win. 
            isGameOver = true;
            declareWinner(player); // `Player ${player} is the winner!`
            return 
        } else if (locations[4] && locations[8]) { // Top left diagonal. 
            isGameOver = true;
            declareWinner(player);
            return 
        } else if (locations[3] && locations[6]) { // First (left) column.
            isGameOver = true;
            declareWinner(player);
            return 
        }
    } if (locations[1]) {
        if (locations[4] && locations[7]) { // Second (middle) column.
            isGameOver = true;
            declareWinner(player);
            return 
        }
    } if (locations[2]) {
        if (locations[5] && locations[8]) { // Third (right) column.
            isGameOver = true;
            declareWinner(player);
            return 
        } else if (locations[4] && locations[6]) { // Top right diagonal.
            isGameOver = true;
            declareWinner(player);
            return 
        }
    } if (locations[3]) {
        if (locations[4] && locations[5]) { // Middle row. 
            isGameOver = true;
            declareWinner(player);
            return 
        }
    } if (locations[6]) {
        if (locations[7] && locations[8]) { // Bottom row. 
            isGameOver = true;
            declareWinner(player);
            return 
        }
    }
}

function drawBox(player, id, classList) {
    let locations;
    let i = parseInt(id);
    if (classList.contains('X') || classList.contains('O')) { // If box is already filled.
        return
    } else {
        if (player == 'X') {
            xLocations[i] = 1;
            locations = xLocations;
            classList.add('X');
        } else { 
            oLocations[i] = 1;
            locations = oLocations; 
            classList.add('O');
        }
        count += 1;
        checkForWin(player, locations); // Could easily duplicate this code into the above use cases, but... DRY code please. 
        if (count >= 9) {
            isGameOver = true;
            let result = "tie"
            declareWinner(result);
        }
    }
}

function declareWinner(result) {
}

document.addEventListener('DOMContentLoaded', function() {

    //// If a box is clicked. ////
    const boxes = document.querySelectorAll('.box'); // Creates an HTML collection that functions as an array.
    const boxesForEach = boxes.forEach( function(box) {
        box.addEventListener('click', function() {
            // console.log("Box clicked");
            console.log('id ' + this.id); // This gives me the id of the div box that was clicked on. 
            console.log(typeof this.id);
            console.log('classList ' + this.classList);
            if (count % 2 == 0 && !isGameOver) { // If it's player X's turn and the game isn't over.
                drawBox('X', this.id, this.classList);
            } else if (!isGameOver) {
                drawBox('O', this.id, this.classList);
            } 
        })
    })

    //// If the reset button is clicked. ////
    const reset = document.querySelector('#reset').addEventListener('click', function() {
        count = 0;
        const clearBoxes = boxes.forEach ( function(box) {
            if ( box.classList.contains("X") ) { box.classList.remove("X"); }
            else if ( box.classList.contains("O") ) { box.classList.remove("O"); }
        })
    })
})
    

// Useful page for adding, removing, and checking class names: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

///////////////////////////////////////////////
/////////// Plain English Stubbing: ///////////

// How to determine a win in tic-tac-toe, in plain English:
// You have a winner as soon as you have a row, column, or diagonal that have 3 of the same icon ('x' or'o') in a row. The winner corresponds to the person who got the '3 in a row.'
// If you never get a winner during the game, and the entire board is filled (with 9 icons), then it's a draw, also referred to as a "cat's tail" because of how it's nigh impossible for a cat to catch its own tail.


///////////////////////////////////////////////
////////////// Logical Stubbing: //////////////

/// For clicking Reset button //////////////////
// Identifiy reset button.
// Attach event listener to it.
// If clicked on, then loop through each of the boxes and remove class='X' and class='O'


/// For playing game //////////////////////////
// Determine whose turn it is and if the game isGameOver. Game starts with player X. 
//// If count is 9, then isGameOver = true. 
// Recognize when a user is clicking on a box, and know which box it is.
// Determine whether or not that identified box already has a variable in it. (Doesn't already have an X or O class)
// Draw an X or an O if that box is empty (by adding a Class to that div), and increase the count (which keeps track of whose turn it is) if so.
// Determine if there's a win condition.
// // If so, set isGameOver = true to prevent board from being clicked on.
// // If there is no win, determine if the board is full, and if so it's a draw.
// Determine whose turn it is.


// Create event listener on Reset button
// // Create a nested for loop to iterate and extract each of the div boxes
// // For each div box, invoke the clearDivBox function

// Create event listener on page for clicks
// Check if valid box