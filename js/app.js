
//--global vars

var playerTurn;
var squares = document.getElementsByClassName("square");
var divMarkX = document.getElementById("markX");
var divMarkO = document.getElementById("markO");
var headText = document.getElementsByTagName("h1")[0];
var gridMark = [];
var blinkCount = 0;
var blinkInterval;
var hasWon =0;
var markSize = "200px";
var playComputer = false;

//--functions

var squareClick = function() {
   if (playComputer && playerTurn===1) {
      return 0;
   }
   addPlayerMark(this);
}

var setText = function(string, justify) {
   headText.textContent = string;
   headText.style.textAlign = justify;
   headText.style.visibility = "visible";

   if (blinkInterval) clearInterval(blinkInterval);
}

var blinkText = function(s) {
   if (blinkCount===0) {
      setText(s,"center");

      blinkInterval = window.setInterval(blinkText, 800);
   } else if (blinkCount>9){
      clearInterval(blinkInterval);
   }

   if (blinkCount%2===0) {
      headText.style.visibility = "visible";
   } else {
      headText.style.visibility = "hidden";
   }
   blinkCount++;
}

var setWinner = function(location) {
   hasWon = true;

   if (playerTurn===0 && location !=="tie") {
      blinkText("Player X wins!");
   } else if(location !=="tie") {
      blinkText("Player O wins!");
   } else if(location === "tie") {
      blinkText("Tie game! Both minds are equal.");
   }
}

//-- check for winner 
var checkWinner = function() {
   let winRow = 0;
   let winCol = 0;
   let isFull = 0;

   for (let r=0; r<3; r++) {
      winRow =0;
      winCol =0;

      for (let c=0; c<3; c++) {
         winRow += gridMark[r][c];
         // backwards c,r will get the column info
         winCol += gridMark[c][r];
         if (gridMark[r][c] !== 0) {
            isFull++;
         }
      }

      //-- check row win
      if (winRow === 3 || winRow === -3 || winCol ===3 || winCol ===-3) {
         //winner
         setWinner();
      }
   }

   //--check diag win
   let diag1 = gridMark[0][0]+gridMark[1][1]+gridMark[2][2];
   let diag2 = gridMark[2][0]+gridMark[1][1]+gridMark[0][2];

   if (diag1 === 3 || diag1 === -3 || diag2 ===3 || diag2 ===-3) {
      //winner
      setWinner();
   }

   //-- check draw
   if (isFull ===9) {
      setWinner("tie");
   }
}

var setComputerMark = function() {
   let valid=false;
   let tries,r,c=0;

   while (!valid) {
      r=Math.random()*3 | 0;
      c=Math.random()*3 | 0;
      tries++;
      if (tries>100 || gridMark[r][c]===0) {
         valid = true;
      }
   }
   r++;
   c++;
   let sq = document.getElementById("r"+r+"c"+c);
   if (!sq) {
      console.log("Oops, error! Square not found: ",r,"-",c);
   }

   addPlayerMark(sq);
}

var nextPlayerTurn = function() {
   //-- do not overwrite previous text if winner text is up
   if (hasWon) {
      return 0;
   }

   playerTurn = 1-playerTurn;

   if (playerTurn===0) {
      setText("Player X", "left");
   } else {
      setText("Player O", "right");
      if (playComputer) {
         waitInterval = window.setTimeout(setComputerMark,300);
      }
   }
}

var resetGrid = function() {
   gridMark = [[0,0,0],[0,0,0],[0,0,0]];
}

var setGrid = function(id) {
   let row = (id.slice(1,2)|0)-1;
   let col = (id.slice(3,4)|0)-1;

   if (playerTurn ===1) {
      gridMark[row][col] = -1;
   } else {
      gridMark[row][col] = 1;
   }
}

var addPlayerMark = function(sq) {
   if (hasWon) {
      return 0;
   }

   if (playerTurn===0) {
      var newX = divMarkX.cloneNode(true);

      sq.appendChild(newX);
      newX.style.display = "block";

      window.setTimeout( function() {
         newX.style.fontSize = markSize;
      }, 15);

      sq.removeEventListener("click", squareClick);
   } else {
      var newO = divMarkO.cloneNode(true);

      sq.appendChild(newO);
      newO.style.display = "block";

      window.setTimeout( function() {
         newO.style.fontSize = markSize;
      }, 15);

      sq.removeEventListener("click", squareClick);
   }

   setGrid(sq.id);
   checkWinner();
   nextPlayerTurn();
}

var setSquareListeners = function() {
   for (var i=0; i<squares.length; i++) {
      squares[i].addEventListener("click", squareClick);
   };
}

var clearSquares = function() {
   for (var i=0; i<squares.length; i++) {
      while(squares[i].firstChild) {
         squares[i].removeChild(squares[i].firstChild);
      }
   }
}

var gameInit = function() {
   playerTurn = 0;
   hasWon = 0;
   blinkCount = 0;

   setText("Do you want to play a game?", "center");
   setSquareListeners();
   clearSquares();
   resetGrid();
}

var gamePlayHuman = function() {
   gameInit();
   humanButton.className = "button";
   computerButton.className = "button dimmed";
   setText("Player X", "left");
   playComputer = false;

}

var gamePlayComputer = function() {
   gameInit();
   humanButton.className = "button dimmed";
   computerButton.className = "button";
   setText("Player X", "left");
   playComputer = true;

}

//--persistant buttons
var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", gameInit);
var humanButton = document.getElementById("humanButton");
humanButton.addEventListener("click", gamePlayHuman);
var computerButton = document.getElementById("computerButton");
computerButton.addEventListener("click", gamePlayComputer);

//--run game
gameInit();
