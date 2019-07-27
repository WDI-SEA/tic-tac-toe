var boardColumn0 = [];
var boardColumn1 = [];
var boardColumn2 = [];
var boardColumn3 = [];
var boardColumn4 = [];
var boardColumn5 = [];
var boardColumn6 = [];

// add random start for player 1 or 2
var playerNum = 1; // static for now.

document.addEventListener("DOMContentLoaded", function() {
  // Other load options?
  document.getElementById("new-game").addEventListener("click", newGame);
});

let newGame = function() {
  //clear the board
  //clear the listeners
  //clear the column arrays

  let columns = document.getElementsByClassName("board-column");
  for (let i = 0; i < columns.length; i++) {
    document
      .getElementById(columns[i].id)
      .addEventListener("click", dropTokenInColumn);
  }
};

let dropTokenInColumn = function() {
  console.log(`Clicked column: ${this.id}`);

  switch (this.id) {
    case "board-column-0":
      boardColumn0.push(playerNum);
      setGridColor(playerNum);
      break;
    case "board-column-1":
      boardColumn1.push(playerNum);
      setGridColor(playerNum);
      break;
    case "board-column-2":
      boardColumn2.push(playerNum);
      setGridColor(playerNum);
      break;
    case "board-column-3":
      boardColumn3.push(playerNum);
      setGridColor(playerNum);
      break;
    case "board-column-4":
      boardColumn4.push(playerNum);
      setGridColor(playerNum);
      break;
    case "board-column-5":
      boardColumn5.push(playerNum);
      setGridColor(playerNum);
      break;
    case "board-column-6":
      boardColumn6.push(playerNum);
      setGridColor(playerNum);
      break;
    default:
      console.log("dropTokenInColumn fell into the default switch. Eh?!");
      break;
  }
};
let setGridColor = function(p) {
  console.log(`Dropped token for player number: ${p}`);

  if (p === 0) {
    //set background of next grid location to 'red'
  } else if (p === 1) {
    // set the background to "blue"
  }
};
