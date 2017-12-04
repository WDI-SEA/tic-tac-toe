
// Global Variables
var count = 0;
var player1selection = [];
var player2selection = [];


// To identify pattterns for diagonals 
function arrayContainsArray (superset, subset) {
  return subset.every(function (value) {
    return (superset.indexOf(value) >= 0);
  });
}


// To identify patter for row or column wins
var rows_column_win = function(a) {

	var counts = {}

	// Loop through array to check occurance of index
	a.forEach(function(x) {
		counts[x] = (counts[x] || 0) + 1;
	});

	// check count of each number of occurance of row/column index
	var test_counts = function (test) {
		for(var key in test){
			return test[key];
		};
	};
	
	// check for count of 3
	if (test_counts(counts)===3) {
		return true;
	};
};


// To confirm if combination of selected tiles is a win
var checkWin = function(selectedTiles, x){

		//Define winning diagonal combination
	 	var diagonal1 = ["0-0", "1-1", "2-2"]
 		var diagonal2 = ["0-2", "1-1", "2-0"]
		
		// When 3 (or more) tiles selected - check for winning combination
		if(selectedTiles.length >= 3){
			var rows = [];
			for(var i = 0; i < selectedTiles.length; i++){
				rows.push(Number(selectedTiles[i].slice(0,1)));
			}

			var cols = [];
			for(var i = 0; i < selectedTiles.length; i++){
				cols.push(Number(selectedTiles[i].slice(-1)));
			}
		// To determine winner
		if( rows_column_win(rows) || 
			rows_column_win(cols)  ||
			(arrayContainsArray(selectedTiles,diagonal1)) ||
			arrayContainsArray(selectedTiles,diagonal2)) {
				document.getElementById('winText').style.display = 'block';
				// Change win text based on player
				if (x%2 === 0){
					document.getElementById('winText').innerHTML = "Player 2 is the WINNER!";
					removeTileEventListeners();
				} else {
					document.getElementById('winText').innerHTML = "Player 1 is the WINNER!";
					removeTileEventListeners();
				}
		// To determine tie game
		} else  if (x%2 === 1 && selectedTiles.length === 5) {
			document.getElementById('winText').style.display = 'block';
			document.getElementById('winText').innerHTML = "Sorry - It's a cat's game!";
			removeTileEventListeners();
		} else {
			return false;
		}
	} else {
		return false;
	}

}


var tileClicked = function() {
	
	// Change to image and coloring based on player turn
	if(count%2 === 0){
			document.getElementById('playerIndicator').style.display = 'block';
			document.getElementById('playerIndicator').innerHTML = "Player 1";
			document.getElementById('playerIndicator').style.backgroundColor= "#D0E4F2";
			this.className = "tileO";
			player1selection.push(this.id);
			count++;
			checkWin(player1selection, count);

	} else {
		document.getElementById('playerIndicator').style.display = 'block';
		document.getElementById('playerIndicator').innerHTML = "Player 2";
		document.getElementById('playerIndicator').style.backgroundColor= "#A7C7C5";
		this.className = "tileX";
		player2selection.push(this.id);
		count++;
		checkWin(player2selection, count);
	}

	// Remove the click event (to not allow tile to be clickable)
	this.removeEventListener('click', tileClicked);
}

// To add event listeners to the board
var addTileEventListeners = function() {
	var tiles = document.querySelectorAll('.tile');

	for(var i =0; i < tiles.length; i++){
		tiles[i].addEventListener('click', tileClicked);
	}
}

// To remove event listeners to the board
var removeTileEventListeners = function(){
	var tiles = document.querySelectorAll('.tile');
	
	for(var i = 0; i < tiles.length; i++){
		tiles[i].removeEventListener('click', tileClicked);
	}
}

// To reset game
document.getElementById("reset").onclick = function() {

	document.getElementById('winText').style.display = 'none';
	document.getElementById('playerIndicator').style.display = 'none';

	var tilesO = document.querySelectorAll('.tileO');
	
	for(var i = 0; i < tilesO.length; i++){
		tilesO[i].className = "tile";
	}

	var tilesX = document.querySelectorAll('.tileX');
	
	for(var i = 0; i < tilesX.length; i++){
		tilesX[i].className = "tile";
	}

	addTileEventListeners();
	count = 0;
	player1selection = [];
	player2selection = [];

}


// Load Page Content
document.addEventListener("DOMContentLoaded", function() {
	//document.getElementById('reset').addEventListener('click', reset);
	addTileEventListeners();
	document.getElementById('playerIndicator').style.display = 'none';
	document.getElementById('winText').style.display = 'none';
});
