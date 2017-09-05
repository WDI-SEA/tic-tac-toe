console.log('Javascript running, better catch it!');

//Start declaring variables
var square = document.getElementsByClassName('tile');
var mark = document.getElementsByTagName('h1');
var reset = document.querySelector('#reset');
var colors = ['purple', 'red', 'white', 'orange', 'yellow'];
var players = ['player1', 'player2'];

//Declare functions
var addX = function() {
	mark.textContent = 'X';
};

//Add event listeners
square.addEventListener('click', addX);
