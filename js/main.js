var boardColumn0 = [];
var boardColumn1 = [];
var boardColumn2 = [];
var boardColumn3 = [];
var boardColumn4 = [];
var boardColumn5 = [];
var boardColumn6 = [];

var winner = null;
var iterations = 0;

var h0Count = 0;
var h1Count = 0;

// add random start for player 1 or 2
var playerNum = null; // player 0 = red, player 1 = blue.

let resetGlobals = function() {
  boardColumn0 = [];
  boardColumn1 = [];
  boardColumn2 = [];
  boardColumn3 = [];
  boardColumn4 = [];
  boardColumn5 = [];
  boardColumn6 = [];

  winner = null;
  iterations = 0;

  h0Count = 0;
  h1Count = 0;

  // add random start for player 1 or 2
  playerNum = null; // player 0 = red, player 1 = blue.
};

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("start-game").addEventListener("click", function() {
    //clear the board
    //clear the listeners
    //clear the column arrays

    // Set starting player. Could randomize.
    resetGlobals();

    playerNum = 0;
    // startPlay(playerNum);
    // debugger;

    removeColumnListeners();
    clearGameBoard();

    if (playerNum === 0) {
      // Setup listeners on each column. This is where we "drop token"
      let columns = document.getElementsByClassName("board-column");

      for (let i = 0; i < columns.length; i++) {
        document
          .getElementById(columns[i].id)
          .addEventListener("click", dropTokenInColumn);
      }
    }
  });
});

// let startPlay = function(playerNum) {};

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
  }

  if (testWinner() === true) {
    endGame(playerNum);
  } else {
    if (playerNum === 0) {
      playerNum = 1;
      h0Count = 0;
    } else {
      playerNum = 0;
      h1Count = 0;
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
  }

  if (testWinner() === true) {
    endGame(playerNum);
  } else {
    if (playerNum === 0) {
      playerNum = 1;
      h0Count = 0;
    } else {
      playerNum = 0;
      h1Count = 0;
    }
  }
};

let testWinner = function(playerNum) {
  let isWinningRowTotal = function() {
    if (h0Count === 4) {
      // return 'endGame(playerNum)';
      return true;
    } else if (h1Count === 4) {
      // return 'endGame(playerNum)';
      return true;
    } else {
      console.log(`{h0Count: ${h0Count}, h1Count: ${h1Count}}`);
    }
  };
  // Check the rows

  for (let i = 0; i < 6; i++) {
    if (boardColumn0[i] === 0) {
      h0Count++;
      isWinningRowTotal();
    } else if (boardColumn0[i] === 1) {
      h1Count++;
      isWinningRowTotal();
    }

    if (boardColumn1[i] === 0) {
      h0Count++;
      isWinningRowTotal();
    } else if (boardColumn1[i] === 1) {
      h1Count++;
      isWinningRowTotal();
    }

    if (boardColumn2[i] === 0) {
      h0Count++;
      isWinningRowTotal();
    } else if (boardColumn2[i] === 1) {
      h1Count++;
      isWinningRowTotal();
    }

    if (boardColumn3[i] === 0) {
      h0Count++;
      isWinningRowTotal();
    } else if (boardColumn3[i] === 1) {
      h1Count++;
      isWinningRowTotal();
    }

    if (boardColumn4[i] === 0) {
      h0Count++;
      isWinningRowTotal();
    } else if (boardColumn4[i] === 1) {
      h1Count++;
      isWinningRowTotal();
    }

    if (boardColumn5[i] === 0) {
      h0Count++;
      isWinningRowTotal();
    } else if (boardColumn5[i] === 1) {
      h1Count++;
      isWinningRowTotal();
    }

    if (boardColumn6[i] === 0) {
      h0Count++;
      isWinningRowTotal();
    } else if (boardColumn6[i] === 1) {
      h1Count++;
      isWinningRowTotal();
    }
  }

  // Check the diags

  // Check the columns. This should be for looh over an
  // array of column arrays.
  if (boardColumn0.length > 0) {
    let v0Count = 0;
    let v1Count = 0;
    for (let i = 0; i < boardColumn0.length; i++) {
      if (boardColumn0[i] === 0) {
        v0Count++;
        v1Count = 0;
      } else {
        v0Count = 0;
        v1Count++;
      }
    }
    if (v0Count === 4) {
      return true;
    } else if (v1Count === 4) {
      return true;
    } else {
      // console.log(`{Column: 0, v0Count: ${v0Count}, v1Count: ${v1Count}}`);
    }
  }
  if (boardColumn1.length > 0) {
    let v0Count = 0;
    let v1Count = 0;
    for (let i = 0; i < boardColumn1.length; i++) {
      if (boardColumn1[i] === 0) {
        v0Count++;
        v1Count = 0;
      } else {
        v0Count = 0;
        v1Count++;
      }
    }
    if (v0Count === 4) {
      return true;
    } else if (v1Count === 4) {
      return true;
    } else {
      // console.log(`{Column: 1, v0Count: ${v0Count}, v1Count: ${v1Count}}`);
    }
  }
  if (boardColumn2.length > 0) {
    let v0Count = 0;
    let v1Count = 0;
    for (let i = 0; i < boardColumn2.length; i++) {
      if (boardColumn2[i] === 0) {
        v0Count++;
        v1Count = 0;
      } else {
        v0Count = 0;
        v1Count++;
      }
    }
    if (v0Count === 4) {
      return true;
    } else if (v1Count === 4) {
      return true;
    } else {
      // console.log(`{Column: 2, v0Count: ${v0Count}, v1Count: ${v1Count}}`);
    }
  }
  if (boardColumn3.length > 0) {
    let v0Count = 0;
    let v1Count = 0;
    for (let i = 0; i < boardColumn3.length; i++) {
      if (boardColumn3[i] === 0) {
        v0Count++;
        v1Count = 0;
      } else {
        v0Count = 0;
        v1Count++;
      }
    }
    if (v0Count === 4) {
      return true;
    } else if (v1Count === 4) {
      return true;
    } else {
      // console.log(`{Column: 3, v0Count: ${v0Count}, v1Count: ${v1Count}}`);
    }
  }
  if (boardColumn4.length > 0) {
    let v0Count = 0;
    let v1Count = 0;
    for (let i = 0; i < boardColumn4.length; i++) {
      if (boardColumn4[i] === 0) {
        v0Count++;
        v1Count = 0;
      } else {
        v0Count = 0;
        v1Count++;
      }
    }
    if (v0Count === 4) {
      return true;
    } else if (v1Count === 4) {
      return true;
    } else {
      // console.log(`{Column: 4, v0Count: ${v0Count}, v1Count: ${v1Count}}`);
    }
  }
  if (boardColumn5.length > 0) {
    let v0Count = 0;
    let v1Count = 0;
    for (let i = 0; i < boardColumn5.length; i++) {
      if (boardColumn5[i] === 0) {
        v0Count++;
        v1Count = 0;
      } else {
        v0Count = 0;
        v1Count++;
      }
    }
    if (v0Count === 4) {
      return true;
    } else if (v1Count === 4) {
      return true;
    } else {
      // console.log(`{Column: 5, v0Count: ${v0Count}, v1Count: ${v1Count}}`);
    }
  }
  if (boardColumn6.length > 0) {
    let v0Count = 0;
    let v1Count = 0;
    for (let i = 0; i < boardColumn6.length; i++) {
      if (boardColumn6[i] === 0) {
        v0Count++;
        v1Count = 0;
      } else {
        v0Count = 0;
        v1Count++;
      }
    }
    if (v0Count === 4) {
      return true;
    } else if (v1Count === 4) {
      return true;
    } else {
      // console.log(`{Column: 6, v0Count: ${v0Count}, v1Count: ${v1Count}}`);
    }
  }
};

let endGame = function(p) {
  console.log(`Player ${p} won!`);

  resetGlobals();
  removeColumnListeners();

  document.getElementById('victory').textContent = `Player ${p.toString()} is victorious!`;

};

///////////////////////////////////////////////////////////////////////////////

let setGridColor = function(colNum, p, colArray) {
  if (p === 0) {
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
  }
};

let randInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
  // return Math.floor(Math.random() * Math.floor(max));  // 0 to max.
};

let removeColumnListeners = function() {
  let columns = document.getElementsByClassName("board-column");

  for (let i = 0; i < columns.length; i++) {
    document
      .getElementById(columns[i].id)
      .removeEventListener("click", dropTokenInColumn);
  }
};

let clearGameBoard = function() {
  var bPosition = document.getElementsByClassName("board-position");
  for (let i = 0; i < bPosition.length; i++) {
    bPosition[i].style.backgroundColor = "white";
  }

  document.getElementById('victory').textContent = '';
};
