const gameCell = document.querySelectorAll(`[data-target='cell']`); // Get all the cells (note:, returns a node list=)

const winningCombinations = [
  // Legit copied this solution pattern from Web Dev Simplified // https://www.youtube.com/watch?v=Y-GkMjUZsmM
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function checkScore(gameKeeper) {
  return winningCombinations.some(combo => { // is there at least one winning combination present
    return combo.every(index => {
      console.log(index);
      return gameCell[index].classList.contains(gameKeeper) // Check to see any winning combinations have been made
    })
  })
}

let whoseTurnIsIt = false; // Initialize turn tracker

function possessionChange() {
  whoseTurnIsIt = !whoseTurnIsIt; // Change possession of the board by flipping the variable's assignment value to the opposite.
}

// Functions
const handleClick = (event) => {
  const gameKeeper = whoseTurnIsIt ? "o" : "x"; // Important! This is how we switch who can claim a free square.

  //// A. marks the cell
  event.target.classList.add(gameKeeper);

  //// B. checks the score
  checkScore(gameKeeper);
  
  possessionChange(); // Change game board possession control to opponent
};

gameCell.forEach( cell => {
  cell.addEventListener('click', handleClick, { once: true }); // Add event listeners to each of them

  // TIL the `{ once: true }` is Super helpful for not double-firing click event. It "... indicate[s] that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked." https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
});
