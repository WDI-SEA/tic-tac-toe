// Get the cells
const gameCell = document.querySelectorAll(`[data-target='cell']`);
let whoseTurnIsIt = false; // Initialize turn tracker

function possessionChange() {
  whoseTurnIsIt = !whoseTurnIsIt; // Change possession of the board by flipping the variable's assignment value to the opposite.
} 


// Functions
const handleClick = (event) => {
  const gameKeeper = whoseTurnIsIt ? "o" : "x"; // Important! This is how we switch who can claim a free square.

  //// A. marks the cell
  event.target.setAttribute('data-modification', gameKeeper);
  //// B. checks the score
  //// C. Switch players

  possessionChange(); // End the turn by changing possession of the board
};

gameCell.forEach( cell => {
  cell.addEventListener('click', handleClick, { once: true }); // Add event listeners to each of them

  // TIL the `{ once: true }` is Super helpful for not double-firing click event. It "... indicate[s] that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked." https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
});
