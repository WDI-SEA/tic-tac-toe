// modifing the project with an AI algorithm: 
// notes from 
// https://stackoverflow.com/questions/125557/what-algorithm-for-a-tic-tac-toe-game-can-i-use-to-determine-the-best-move-for


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


var turn = null;
var winner = null;

document.addEventListener('DOMContentLoaded',function(){
	// console.log("DOM got loaded");
	// document.addEventListener('click', setMessage('Please click Start'));
	document.getElementById('start').addEventListener('click', start);
	document.getElementById('cStart').addEventListener('click', start);

});
//console.log('loaded! again');
//this function starts the game;
function start(){
	console.log('Starting game');
	var num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	for (var i = 0; i <= 8; i++){
		clearBox(num[i]);
	}
	turn = 'X';
	setMessage(turn + ' is starting:');
}
function setMessage(m) {
	document.getElementById('message').innerText = m;
}
function clearBox(number) {
	document.getElementById(number).innerText = "";
	winner = null;
}
function getBoxValue(idNumber) {
	// var abc = document.getElementById(idNumber).innerText;
	// console.log(abc)
	return document.getElementById(idNumber).innerText;
}
function checkRow(a, b, c, move){
	var result = false;
	if (getBoxValue(a) == move && getBoxValue(b) == move && getBoxValue(c) == move){
		result = true;
	} return result;
}
// if there is three symble in a row with the same turn. then the turn wins. 
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
	{
		result = true;
	}
	return result;
}
//Checks if the game is Draw.
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
//This function keeps track of who's turn:
function switchTurn(){
	// console.log("TURN");
	if (turn == 'X'){
		turn = 'O';
	}else{
		turn = 'X';
	}setMessage('It\'s '  + turn + ' turn now!' );
}

function nextMove(square){
	if (square.innerText == 'O' || square.innerText == 'X'){
		if (winner == null) {
			setMessage('Please Pick another cell');
		}else{
			setMessage('This game has ended, please start another game!');
		}
	}else if (winner == null) {
		square.innerText = turn;
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





// if winner is not null, then the game has ended! 



// function minimax(game, depth, maximizingPlayer) {
// 	if (game) {}



// }
// if depth = 0 or node is a terminal node then
// 	return the heuristic value of node
// if maximizingPlayer then
// 	value := −∞
// for each child of node do
// 	value := max(value, minimax(child, depth − 1, FALSE))
// return value
// else (* minimizing player *)
// 	value := +∞
// for each child of node do
// 	value := min(value, minimax(child, depth − 1, TRUE))
// return value



