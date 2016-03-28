// var container = document.getElementById('container');

// var cell = document.getElementById('cells')

var cellsArray = ['cell1', 'cell2' 'cell3', 'cell4', 'cell5', 'cell6', 'cell7', 'cell8', 'cell9' ];



var logXOrO = function() {

	if (document.getElementById.('container').addEventListener.('onclick'){
		console.log = getElementById.playerMove.("X");

	else console.log = getElementById.playerMove.("O");
	};


var playerXWins;
var playerOWins;

var top = [ 1,2,3 ];
var middle = [ 4,5,6 ];
var bottom = [ 7,8,9 ];

var left =[ 1.4.7];
var middle = [ 2,5,8 ];
var right = [ 3,6,9 ];

var diagonalLeft = [ 1,5,9 ] 
var diagonalRight =[ 3,5,7 ]


var playerXWins = function( ) {
	if (top || middle || bottom || left || ight || diagonalLeft ||  diagonalRight === "X")
		console.log = "playerXWins" {
			else  console.log = "playerOWins"
		}
};	








// A user should be able to click on different squares to make a move.

// Every click will alternate between marking an X and O

// Upon marking of an individual cell, use javascript to add a class to each cell to display separate colors.

// A cell should not be able to be replayed once marked.

// Add a reset button that will clear the contents of the board. -->

// Javascript portion will be next.

// Locate the element first to use it within your app. Think about using:

// getElementById, 
// getElementsByClassName, 
// querySelector, or 
// querySelectorAll 

// to locate your target elements. Try this in your console to make sure your selection works.

// After finding the elements, start writing logic to use an event listener for click against those elements.

// You will also need a variable to keep track of moves. 
// This will be used to indicate whether or not to draw an X or an O.
