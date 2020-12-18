// HELPER FUNCTIONS:

// Helper function that clears a div box

// Helper function that identifies if a div box is clicked on, and if so, which one it is

// Helper function that holds a count wheneve a div box is clicked on. Returns 'odd' or 'even' and ends the game if the count hits 9. Also determines 

// Helper function that draws an x or an o depending on what the count is 

// Helper function that determines whether a game has been won 
// // 

// Create a counter for whenever a player clicks on a valid box
// END HELPER FUNCTIONS


// Create event listener on Reset button
// // Create a nested for loop to iterate and extract each of the div boxes
// // For each div box, invoke the clearDivBox function

// Create event listener on page for clicks
// Check if valid box

let count = 0; 
let xLocations = [];
let oLocations = [];



document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM has been loaded');
    
    function checkVictory(locations) { // Check after 'x' moves. Check after 'o' moves. Pass in locations of whoever just moved.
        // row clear
        // column clear
        // diagonal top to bottom clear
        // diagonal bottom to top clear

    }
    
    
    
    const boxes = document.querySelectorAll('.box'); // Creates an HTML collection that functions as an array.
    console.log(boxes);
    console.log(typeof boxes);
    const boxesForEach = boxes.forEach( function(box) {
        box.addEventListener('click', function() {
            console.log("Box clicked");
            console.log(this.id); // This gives me the id of the div box that was clicked on. 
        })
    })

    // function for knowing whose turn it is
    // if count%2 === 0 then it's x's turn
    // else then it's o's turn

    

})