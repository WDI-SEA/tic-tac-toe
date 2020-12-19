// Get the cells
const gameCell = document.querySelectorAll(`[data-target='cell']`);


let whoseTurnIsIt; // Initalize turn tracker
const possession = whoseTurnIsIt ? "o" : "x";

// Functions
const handleClick = (event) => {
  //// A. marks the cell
  //// B. checks the score
  //// C. Switch players

  console.log(event.target);
};

gameCell.forEach( cell => {
  cell.addEventListener('click', handleClick, { once: true }); // Add event listeners to each of them

  // TIL the `{ once: true }` is Super helpful for not double-firing click event. It "... indicate[s] that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked." https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
});
