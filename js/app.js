var turn = 0;

var selectPlayerX = function(cell) {
	cell.textContent = "X";
	cell.style.background = "red";
}

var selectPlayerO = function(cell) {
	cell.textContent = "O";
	cell.style.background = "green";
}

var reset = function() {
	var gridReset = [[document.getElementById("row1col1"), document.getElementById("row1col2"), document.getElementById("row1col3")],
 				[document.getElementById("row2col1"), document.getElementById("row2col2"), document.getElementById("row2col3")],
 				[document.getElementById("row3col1"), document.getElementById("row3col2"), document.getElementById("row3col3")]];
 	for(var i = 0; i < gridReset.length; i++) {
 		for(var j = 0; j < gridReset.length; j++) {
 			gridReset[i][j].textContent = "";
 			gridReset[i][j].style.background = "blue";
 		}
 	}
 	turn = 0;
	console.log("You've reset the game.");
}

var swapPlayer = function(cell) {
	turn++;
	if (turn % 2) {
		selectPlayerX(cell);
		return true;
	}
	selectPlayerO(cell);
	return false;
}

var checkVictor = function(check) {
	var allEqual = true;
	if(turn === 9) {
		alert("Tie");
		return true;
	}
	for(var i = 1; i < check.length; i++) {
		if(check[i] != check[i-1] || (check[i] != "X" && check[i] != "O")) {
			allEqual = false;
			return false;
		}
	}
	if(allEqual) {
		win(check[0]);
		return true;
	}
}

//stops everything and puts in winning text
var win = function(winner) {
	console.log(winner + " won!");
	alert(winner + " has won!");
}

var checkWin = function(cell) {
	var grid = [[document.getElementById("row1col1").textContent, document.getElementById("row1col2").textContent, document.getElementById("row1col3").textContent],
 				[document.getElementById("row2col1").textContent, document.getElementById("row2col2").textContent, document.getElementById("row2col3").textContent],
 				[document.getElementById("row3col1").textContent, document.getElementById("row3col2").textContent, document.getElementById("row3col3").textContent]];

 	//check rows
 	for(var i = 0; i < grid.length; i++) {
 		var checkRows = [];
 		var allEqualRows = true;
 		for(var j = 0; j < grid[i].length; j++) {
 			checkRows.push(grid[i][j]);
 		}
 		checkVictor(checkRows);
 	}

 	//check columns
 	for(var i = 0; i < grid.length; i++) {
 		var checkCols = [];
 		var allEqualCols = true;
	 	for(var j = 0; j < grid.length; j++) {
	 		checkCols.push(grid[j][i]);
	 	}
	 	checkVictor(checkCols);
	}

	//check left to right down diagonal
	var diagonal1 = [];
	allEqualDiagonal1 = true;
	for(var i = 0; i < grid.length; i++) {
		diagonal1.push(grid[i][i]);
	}
	checkVictor(diagonal1);

 	var diagonal2 = [];
 	allEqualDiagonal2 = true;
 	for(var i = 0; i < grid.length; i++) {
 		diagonal2.push(grid[i][grid.length-i-1]);
 	}
	checkVictor(diagonal2);
}

var takeTurn = function() {
	cell=this;
	if(cell.textContent == 0)
		swapPlayer(cell);
	else
		console.log("Can't repeat.");

	if(checkWin(cell))
		console.log("Player Wins.");
}

for(var i = 0; i < document.getElementsByTagName("td").length; i++) {
	document.getElementsByTagName("td")[i].addEventListener("click", takeTurn);
}
document.getElementById("reset").addEventListener("click", reset);