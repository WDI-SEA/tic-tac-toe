let whoseTurnIsIt = false; // Initialize turn tracker
const gameBoardCells = document.querySelectorAll(`[data-target='cell']`); // Get all the cells (note:, returns a node list=)]
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
];

function checkScore(currentTeam) {
  return winningCombinations.some(winningCombo => { // Of the possible winning combinations, is there at least one winning combination claimed by a team? 
    // ⚠️Note: Each `winningCombo` is one of the possible winning combinations, we are checking to see if every cell that comes back all shares the same class.
    return winningCombo.every(cell => { // Check to see if every cell in a particular combo shares the same class pattern
      console.log(gameBoardCells[cell].attributes.class = currentTeam);
      return gameBoardCells[cell].classList.contains(currentTeam);
      // Check game board cells to see if they have been claimed by the current team
      // Every single cell in the winningCombo has an x or an o
    });
  });
};

const possessionChange= () => whoseTurnIsIt = !whoseTurnIsIt; // Change possession of the board by flipping the variable's assignment value to the opposite.

const handleClick = (event) => {
  const currentTeam = whoseTurnIsIt ? "o" : "x"; // Important! This is how we switch who can claim a free square.
  event.target.classList.add(currentTeam); // Flag a cell for a team
  
  console.log(`Winner?: ${checkScore(currentTeam)}`); // Check the score
  checkScore(currentTeam);
  possessionChange(); // Change game board possession control to opponent
};

gameBoardCells.forEach( cell => {
  cell.addEventListener('click', handleClick, { once: true }); // Add event listeners to each of them
  // TIL the `{ once: true }` is Super helpful for not double-firing click event. It "... indicate[s] that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked." https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
});
