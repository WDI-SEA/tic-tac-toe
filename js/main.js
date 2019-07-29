var boardColumn0 = [];
var boardColumn1 = [];
var boardColumn2 = [];
var boardColumn3 = [];
var boardColumn4 = [];
var boardColumn5 = [];
var boardColumn6 = [];

var winner = null;
var iterations = 0;

// add random start for player 1 or 2
var playerNum = null; // player 0 = red, player 1 = blue.

document.addEventListener("DOMContentLoaded", function() {
  // Other load options?
  document.getElementById("new-game").addEventListener("click", newGame);
});

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // return Math.floor(Math.random() * Math.floor(max));
}

let newGame = function() {
  //clear the board
  //clear the listeners
  //clear the column arrays

  // randomly select a starig player.
  playerNum = 0;
  nextMove(playerNum);
};

let nextMove = function(playerNum) {
  // debugger;
  if (playerNum === 0) {
    // Setup listeners on each column. This is where we "drop token"
    let columns = document.getElementsByClassName("board-column");

    for (let i = 0; i < columns.length; i++) {
      document
        .getElementById(columns[i].id)
        .addEventListener("click", dropTokenInColumn);
    }
  }
};

let dropTokenInColumn = function(c) {
  let colNum;

  if (playerNum === 0) {
    if (isNaN(c)) {
      // c is a mouse click event
      colNum = +this.id.substring(13);
    } else {
      // c was random int.
      colNum = c;
    }
    switch (colNum) {
      case 1:
        boardColumn0.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn0);
        break;
      case 2:
        boardColumn1.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn1);
        break;
      case 3:
        boardColumn2.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn2);
        break;
      case 4:
        boardColumn3.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn3);
        break;
      case 5:
        boardColumn4.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn4);
        break;
      case 6:
        boardColumn5.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn5);
        break;
      case 7:
        boardColumn6.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn6);
        break;
      default:
        console.log("dropTokenInColumn fell into the default switch. Eh?!");
        break;
    }

    if (testWinner(playerNum)) {
      endGame(playerNum);
    } else {
      if (playerNum === 0) {
        playerNum = 1;
      } else {
        playerNum = 0;
      }
    }
  }

  // Computer Play
  if (playerNum === 1) {
    // No fancy AI yet, just a random placement :)
    colNum = randInt(1, 7);

    switch (colNum) {
      case 1:
        boardColumn0.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn0);
        break;
      case 2:
        boardColumn1.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn1);
        break;
      case 3:
        boardColumn2.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn2);
        break;
      case 4:
        boardColumn3.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn3);
        break;
      case 5:
        boardColumn4.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn4);
        break;
      case 6:
        boardColumn5.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn5);
        break;
      case 7:
        boardColumn6.push(playerNum);
        setGridColor(colNum, playerNum, boardColumn6);
        break;
      default:
        console.log("dropTokenInColumn fell into the default switch. Eh?!");
        break;
    }

    if (testWinner(playerNum)) {
      endGame(playerNum);
    } else {
      if (playerNum === 0) {
        playerNum = 1;
      } else {
        playerNum = 0;
      }
    }
  }
};

let endGame = function(p) {
  console.log(`Player ${p} won!`);
};

let setGridColor = function(colNum, p, colArray) {
  // console.log(`Dropped token for player number: ${p}`);

  if (p === 0) {
    // console.log(event.id, colArray.length);

    if (colNum === 1) {
      let fillPosition = 6 - (colArray.length - 1);
      document.getElementById(
        `board-postion-${fillPosition}`
      ).style.backgroundColor = "red";
    } else {
      let fillPosition = colNum * 6 - (colArray.length - 1);
      document.getElementById(
        `board-postion-${fillPosition}`
      ).style.backgroundColor = "red";
    }
  } else if (p === 1) {
    if (colNum === 1) {
      let fillPosition = 6 - (colArray.length - 1);
      document.getElementById(
        `board-postion-${fillPosition}`
      ).style.backgroundColor = "blue";
    } else {
      let fillPosition = colNum * 6 - (colArray.length - 1);
      document.getElementById(
        `board-postion-${fillPosition}`
      ).style.backgroundColor = "blue";
    }
    // set the background to "blue"
  }
};

let testWinner = function(playerNum) {
  // for (let i = 0; i < 7; i++) {
  //   get cheld elements from columns
  // }

  //  Check the columns
  

  // Check the rows


  // Check the diags

  if (boardColumn0.length > 0) {
    console.log(`Column 0: ${boardColumn0}`);
  }
  if (boardColumn1.length > 0) {
    console.log(`Column 1: ${boardColumn1}`);
  } 
  if (boardColumn2.length > 0) {
    console.log(`Column 2: ${boardColumn2}`);
  } 
  if (boardColumn3.length > 0) {
    console.log(`Column 3: ${boardColumn3}`);
  } 
  if (boardColumn4.length > 0) {
    console.log(`Column 4: ${boardColumn4}`);
  } 
  if (boardColumn5.length > 0) {
    console.log(`Column 5: ${boardColumn5}`);
  } 
  if (boardColumn6.length > 0) {
    console.log(`Column 6: ${boardColumn6}`);
  }

  if (1 != 1) {
    return playerNum;
  } else {
    console.log("no winner, next move");
  }
};
