document.turn = null;
document.winner = null;

document.addEventListener('DOMContentLoaded',function(){
	console.log("DOM got loaded");
	document.addEventListener('click', setMessage('Please click Start'));
	document.getElementById('start').addEventListener('click', start);
	document.getElementById('reset').addEventListener('click', start);

});
//console.log('loaded! again');
//this function starts the game;
function start(){
	console.log('starting game');
	var num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	for (var i = 0; i <= 8; i++){
		clearBox(num[i]);
	}
	document.turn = 'X';
	setMessage(document.turn + ' is starting:');
}
function setMessage(m) {
	document.getElementById('message').innerText = m;
}
//This function keeps track of who's turn:
function switchTurn(){
	// console.log("TURN");
	if(checkWin(document.turn)){
		setMessage(document.turn + ", WON!")
		document.winner = document.turn;
	}else if (checkDraw(document.turn)){
		setMessage("The game is Draw! ");   // this should be in the next move function
	}
	else if (document.turn == 'X'){
		document.turn = 'O';
	}else{
		document.turn = 'X';
	}
	setMessage('It\'s '  + document.turn + ' turn now!' );
}
function nextMove(square){
	if(document.winner != null){
		setMessage(document.turn + " has won the game!")
	}
	else if (square.innerText == 'O' || square.innerText == 'X'){
		setMessage('Please Pick another cell');
	}else {
		square.innerText = document.turn;
		switchTurn();
	}
}
function clearBox(number) {
	document.getElementById(number).innerText = "";
	document.winner = null;
}
function checkWin(move) {
	var result = false;
	if (checkRow("one", "two", "three", move) ||
		checkRow("four", "five", "six", move) ||
		checkRow('seven', 'eight', 'nine', move) ||
		checkRow('one', 'four', 'seven', move) ||
		checkRow('one', 'five', 'nine', move) ||
		checkRow('two', 'five', 'eight', move) ||
		checkRow('three', 'five', 'seven', move) ||
		checkRow('three', "six", 'nine', move) 
		){ result = true;
	}return result;
}
function checkDraw(move) {
	var result = false;
	var num = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
	for (var i = 0; i <= 8; i++){
		if (getBoxValue(num[i]) == 'X' || getBoxValue(num[i]) == 'O') {
			result = true;
		}else {
			result =false;
		}
	}
	return result;
	console.log(result);
}
function checkRow(a, b, c, move){
	var result = false;
	if (getBoxValue(a) == move && getBoxValue(b) == move && getBoxValue(c) == move){
		result = true;
	}
	return result;
}
function getBoxValue(number) {
	return document.getElementById(number).innerText;
}



