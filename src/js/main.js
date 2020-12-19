// Get the cells
const gameCell = document.querySelectorAll(`[data-target='cell']`);


// Decision Algorithm 
// (current user's turn) =>  "Circle"
let whoseTurnIsIt;
const possession = whoseTurnIsIt ? "o" : "x";

const handleClick = (event) => {
  console.log(event.target);
};

// Add event listeners to each of them
gameCell.forEach( cell => {
  cell.addEventListener('click', handleClick);
});

// Add click event handler that
  //// A. marks the cell
  //// B. checks the score
  //// C. Switch players





// (shapeDecider = current user's turn ? o : x) => "shapeDecider = o"
  // add classes

// Winning Algorithm
// Whitelist: Construct all the a winning patterns in an array to check against

// Read current user layout selection
// Check current users layout selection against the winning profile pattern array