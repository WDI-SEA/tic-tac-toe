gameOver = false;
userTurn = 0;
xClicks = 0;
oClicks = 0;
// var to hold message for player turns and the outcome of win or draw
// var turn = document.getElementsByClassName("turns")[0];
// var wins = document.getElementsByClassName("wins")[0];

var tilesFilled = {
	zero: false,
	one: false,
	two: false,
	three: false,
	four: false,
	five: false,
	six: false,
	seven: false,
	eight: false
};

var xTiles = [];
var oTiles = [];

var row1x = 0;
var row2x = 0;
var row3x = 0;
var col1x = 0;
var col2x = 0;
var col3x = 0;
var diag1x = 0;
var diag2x = 0;
var row1o = 0;
var row2o = 0;
var row3o = 0;
var col1o = 0;
var col2o = 0;
var col3o = 0;
var diag1o = 0;
var diag2o = 0;


// endGame function
var endGame = function () {
	console.log('in the endGame function', xClicks, oClicks);
	if (xClicks + oClicks === 9) {
		console.log("cat's game");
		wins.textContent("cat's game");
	} else if (xClicks > oClicks) {
		// console.log("x won");
		console.log("xWins");
		//wins.textContent("x won")
	} else if (xClicks === oClicks) {
		// console.log("o won");
		//wins.textContent("o won");
	}
} 

var checkWin = function () {
	if (xClicks + oClicks === 9) {
		if (userTurn % 2 !== 0) {
			// checking if total number of plays can produce possible win scenario
			// if ( xTiles.length + oTiles.length >= 5 ) {
			// for each value (which will be used as a key) in xTiles
			for (var value of xTiles) {
				// getting the tile from HTML
				var tileSelectedHTML = document.getElementById(value);
				// extracting the classes from that tile and storing them in array called classes
				//  it does this for each tile in xTile (ie each tile clicked)
				var classes = tileSelectedHTML.className.split(" ");
				console.log( "the classes length is " + classes.length );
				// if class has row 1 (ie indexOf > -1), then add to var row1
				if (classes.indexOf('row1') > -1) {
					row1x = row1x + 1;
					console.log("row1x score: " + row1x);
				}
				if (classes.indexOf('row2') > -1) {
					row2x = row2x + 1;
					console.log("row2x score: " + row2x);
				}
				if (classes.indexOf('row3') > -1) {
					row3x = row3x + 1;
					console.log("rowx3 score: " + row3x);
				}
				if (classes.indexOf('col1') > -1) {
					col1x = col1x + 1;
					console.log("col1x score: " + col1x);
				}
				if (classes.indexOf('col2') > -1) {
					col2x = col2x + 1;
					console.log("col2x score: " + col2x);
				}
				if (classes.indexOf('col3') > -1) {
					col3x = col3x + 1;
					console.log("col3x score: " + col3x);
				}
				if (classes.indexOf('diag1') > -1) {
					diag1x = diag1x + 1;
					console.log("diag1x score: " + diag1x);
				}
				if (classes.indexOf('diag2') > -1) {
					diag2x = diag2x + 1;
					console.log("diag2x score: " + diag2x);
				}
				if (row1x > 2 || row2x > 2 || row3x > 2 || col1x > 2 || col2x > 2 || col3x > 2 || diag1x > 2 || diag2x > 2) {
					console.log("you won");
					gameOver = true;
					endGame();
				}
			}
		} else if (userTurn % 2 === 0) {
			for (var value of oTiles) {
				var tileSelectedHTML = document.getElementById(value);
				var classes = tileSelectedHTML.className.split(" ");
				if (classes.indexOf('row1') > -1) {
					row1o = row1o + 1;
					console.log("row1o score: " + row1o);
				}
				if (classes.indexOf('row2') > -1) {
					row2o = row2o + 1;
					console.log("row2o score: " + row2o);
				}
				if (classes.indexOf('row3') > -1) {
					row3o = row3o + 1;
					console.log("row3o score: " + row3o);
				}
				if (classes.indexOf('col1') > -1) {
					col1o = col1o + 1;
					console.log("col1o score: " + col1o);
				}
				if (classes.indexOf('col2') > -1) {
					col2o = col2o + 1;
					console.log("col2o score: " + col2o);
				}
				if (classes.indexOf('col3') > -1) {
					col3o = col3o + 1;
					console.log("col3o score: " + col3o);
				}
				if (classes.indexOf('diag1') > -1) {
					diag1o = diag1o + 1;
					console.log("diag1o score: " + diag1o);
				}
				if (classes.indexOf('diag2') > -1) {
					diag2o = diag2o + 1;
					console.log("diag2o score: " + diag2o);
				}
				if (row1o > 2 || row2o > 2 || row3o > 2 || col1o > 2 || col2o > 2 || col3o > 2 || diag1o > 2 || diag2o > 2) {
					console.log("you won");
					gameOver = true;
					endGame();
				}
			}
		}
	}
	endGame();
}

var fillTile = function () {
	//check if this tile hasnt been filled && if game is not over, continue through if
	// if (!tileFilled[this.id] && !gameOver)
	if (!tilesFilled[this.id] && !gameOver)
		if (userTurn % 2 === 0) {
			// if userTurn is even, fill with x
			// changes the text of tile to x
			document.getElementById(this.id).textContent = "X";
			console.log(this.id);
			// updates tile clicked in tilesFilled to have bool = true
			tilesFilled[this.id] = true;
			// want to move tilesFilled into xTiles, makes array tilesFilledKeys
			// which just has keys of tilesFilled. then pushes the key of tile selected
			// into array called xTiles
			var tilesFilledKeys = Object.keys(tilesFilled)
			// console.log ( tilesFilledKeys );
			xTiles.pop();
			xTiles.push(this.id);
			xClicks = xClicks + 1;
			checkWin();
			userTurn = userTurn + 1;
			turn.textContent("x turn");
		} else {
			document.getElementById(this.id).textContent = "O";
			console.log(this.id);
			tilesFilled[this.id] = true;
			var tilesFilledKeys = Object.keys(tilesFilled)
			oTiles.pop();
			oTiles.push(this.id);
			oClicks = oClicks + 1;
			checkWin();
			userTurn = userTurn + 1;
		}
}

// waiting for the DOM to fully load, then telling every tile on the page to wait for a click
// then once the click happens, it will run the funciton fillTile
document.addEventListener('DOMContentLoaded', function () {
	console.log("DOM loaded!");
	for (var number in tilesFilled) {
		document.getElementById(number).addEventListener('click', fillTile)
	}
	// initGame();
})