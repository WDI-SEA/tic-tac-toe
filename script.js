var container = document.getElementById('container');

var cell = document.getElementById('cells')

var cellsArray = ['cell1', 'cell2' 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8', 'cell9' ];

cell = function() {
	if (addEventListener.'click'.cellsArray !% 2){
		console.log = "X";
	else if (addEventListener.'click'.cellsArray % 2)
		console.log  = "O";
	else console.log  = "X";
	}
}






// A user should be able to click on different squares to make a move.

// Every click will alternate between marking an X and O

// Upon marking of an individual cell, use javascript to add a class to each cell to display separate colors.

// A cell should not be able to be replayed once marked.

// Add a reset button that will clear the contents of the board. -->