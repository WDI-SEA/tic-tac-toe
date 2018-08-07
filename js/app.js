// modifing the project with an AI algorithm: 
// notes from 
// https://stackoverflow.com/questions/125557/what-algorithm-for-a-tic-tac-toe-game-can-i-use-to-determine-the-best-move-for
//https://www.youtube.com/watch?v=6ELUvkSkCts

// Pseudocode for Minimax Algorithms: 
// function minimax(node, depth, maximizingPlayer) is
//     if depth = 0 or node is a terminal node then
//         return the heuristic value of node
//     if maximizingPlayer then
//         value := −∞
//         for each child of node do
//             value := max(value, minimax(child, depth − 1, FALSE))
//         return value
//     else (* minimizing player *)
//         value := +∞
//         for each child of node do
//             value := min(value, minimax(child, depth − 1, TRUE))
//         return value      

// Setting the global variables for later use: 
var turn = null;
var winner = null;
var computer = null;
var boardTiles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];


// Set the document listener when loaded to the two buttons: 
document.addEventListener('DOMContentLoaded',function(){
	// console.log("DOM got loaded");
	// document.addEventListener('click', setMessage('Please click Start'));
	document.getElementById('start').addEventListener('click', start);
	document.getElementById('cStart').addEventListener('click', compStart);

});


// Function starts the game and add event listener to the div boxes: 
function start(){
	console.log('Starting game!!!');
	boardTiles.forEach(function(element){
		document.getElementById(element).addEventListener('click', nextMove)
	});
	var num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	for (var i = 0; i <= 8; i++){
		clearBox(num[i]);
	};
	turn = 'X';
	setMessage(turn + ' is starting:');
}

// computer start: 
function compStart(){
	console.log('Computer is starting the game');
	var num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	for (var i = 0; i <= 8; i++){
		clearBox(num[i]);
	};
	document.getElementById(num[Math.floor(Math.random() * num.length)]).innerText = 'X';

}
// Set the messages above the game board: 
function setMessage(m) {
	document.getElementById('message').innerText = m;
}
// Clear the Game board when the game is restarted: 
function clearBox(number) {
	document.getElementById(number).innerText = "";
	winner = null;
}
// Check the tile value when needed to see either X is inside or O is inside: 
function getBoxValue(idNumber) {
	// var abc = document.getElementById(idNumber).innerText;
	// console.log(abc)
	return document.getElementById(idNumber).innerText;
}
// Check if tiles a b c are all the same: 
function checkRow(a, b, c, move){
	var result = false;
	if (getBoxValue(a) == move && getBoxValue(b) == move && getBoxValue(c) == move){
		result = true;
	} return result;
}
// if there is three symble in a row with the same turn. then the turn wins:  
function checkWin(currentTurn) {
	//console.log('is checking win!...');
	var result = false;
	if (checkRow("one", "two", "three", currentTurn) ||
		checkRow("four", "five", "six", currentTurn) ||
		checkRow('seven', 'eight', 'nine', currentTurn) ||
		checkRow('one', 'four', 'seven', currentTurn) ||
		checkRow('one', 'five', 'nine', currentTurn) ||
		checkRow('two', 'five', 'eight', currentTurn) ||
		checkRow('three', 'five', 'seven', currentTurn) ||
		checkRow('three', "six", 'nine', currentTurn) ) 
		{result = true;}
	return result;
}
//Checks if the game is Draw by checking if all the tiles are filled:
function checkDraw() {
	//console.log('is checking Draw!')
	var result = 0;
	var num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	for (var i = 0; i <= 8; i++){
		if (getBoxValue(num[i]) == 'X' || getBoxValue(num[i]) == 'O') {
			result += 1;
		}
	} if (result == 9) {
		return true;
	}else {
		return false;
	}
}

//This function changes turns when we need to change from X player or O player:
function switchTurn(){
	// console.log("TURN");
	if (turn == 'X'){
		turn = 'O';
	}else{
		turn = 'X';
	}setMessage('It\'s '  + turn + ' turn now!' );
}

// when the div box is clicked, the nextMove is called to filled the tile if the tile is empty 
// and no winner is found or game is draw: 
function nextMove(){
	console.log('nextmove is clicked!!!')
	if (this.innerText == 'O' || this.innerText == 'X'){
		if (winner == null) {
			setMessage('Please Pick another cell');
		}else{
			setMessage('This game has ended, please start another game!');
		}
	}else if (winner == null) {
		this.innerText = turn;
		if (checkWin(turn)) {
			winner = turn;
			console.log(checkWin(turn));
			console.log('call setMessage and ends the game');
			setMessage(winner + ", has WON the game!");

		} else if (checkDraw()) {
			winner = 'no one';
			setMessage("This Game is a Draw!");
			console.log('call Drawfunctions and setMessage and ends the game');
		} else {
			switchTurn();
		}	
		console.log('the move has switched: ', turn);
	} 
}




// ============================< minimax > ============================


// Heuristic function: 
function score(computer) {
	if (winner == computer) {
		return 1;
	}else if (winner == 'no one') {
		return 0;
	}else{
		return -1;
	}
}
// This function returns all the possible moves of the current state:
function actions(state){ // need to use the state pre
	var emptySquareArray = [];
	var num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	for (var i = 0; i <= 8; i++){
		if (getBoxValue(num[i]) !== 'X' && getBoxValue(num[i]) !== 'O') {
			emptySquareArray.push(i);
		}
	}
	console.log(emptySquareArray);
	return emptySquareArray;
}
// if winner is not null, then the game has ended! 
// function minimax(gamePlayer, depth) {
	
// 	if (winner!==null) {
// 		return score(gamePlayer);
// 	} 
// 	var	scoreArray = [];
// 	var	moves = [];
// 	var emptySquares = actions();

// 	if (turn==gamePlayer) {
// 		emptySquareArray.forEach(function(element){
// 			value = Math.max(value, minimax('X', depth−1, ));
// 			return value;
// 		})
// 	}else {
// 		emptySquareArray.forEach(function(element){
// 			value = Math.min(value, minimax('O', depth−1, );
// 				return value
// 			})
// 		}
// 	}

// 	function bestmove(){
// 		var emptySquares = actions();
// 		return emptySquares[Math.floor(Math.random() * emptySquares.length)];
// 	}




