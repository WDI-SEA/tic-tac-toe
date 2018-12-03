// document.addEventListener('DOMContentLoaded', function(){
// 		document.getElementById("restart").addEventListener("click", startGame);
// });
//1.
function startGame(){
	//loops through and clears the squares
	for(var i = 1; i <= 9; i++){
		clearSquares(i);
	}
	//set up a variable on the document object
	document.turn = "X";
	//variable set to null to check for winner, 
	document.winner = null;
//5. call the setMsg function
	setMsg(document.turn + " get's to start.");
	// document.square.innerText = "";
}

//4.
function setMsg(msg) {
	document.getElementById("playerMsg").innerText = msg;
}

//2.
function move(square){
	//if winner is not nothing.
	if (document.winner != null){
	setMsg(document.turn + " already won.")
//6. If the square is blank, then you can document.turn
	} else if(square.innerText == ''){
		square.innerText = document.turn;
		switchTurn();
	} else {
		setMsg("Pick another square.");
	}
}

//3.
function switchTurn(){
	//9. if check for winner's result is true
	if(checkForWinner(document.turn)){
		setMsg("Congrats " + document.turn + ", you won!")
		//winner now equals to document.turn
		document.winner = document.turn
	} else if(checkForTie()) {
		setMsg("Draw! Let's play again!");
	} else if(document.turn == "X"){
		document.turn = "O";
		setMsg("It's "+ document.turn + "'s turn.")
	} else {
		document.turn = "X";
		setMsg("It's "+ document.turn + "'s turn.")
	}
}

function checkForWinner(move){
	var result = false;
	if(checkRow(1, 2, 3, move) ||
		checkRow(4, 5, 6, move) ||
		checkRow(7, 8, 9, move) ||
		checkRow(1, 4, 7, move) ||
		checkRow(2, 5, 8, move) ||
		checkRow(3, 6, 9, move) ||
		checkRow(1, 5, 9, move) ||
		checkRow(3, 5, 7, move)){
		result = true;	
	} 
	return result;
}

//7. compare the values that we got in step 8. to the specific rows that we passed in.
function checkRow(a, b, c, move){
	var result = false;
	if(getSquare(a) == move && getSquare(b) == move && getSquare(c) == move){
		result = true;
	}
	// return result for the check for winner function 
	return result;
}

//8. to return the innerText of what's in the square using the id
function getSquare(number){
	return document.getElementById("s" + number).innerText;
	}

function clearSquares(number){
	document.getElementById("s"+ number).innerText = "";
}

function checkForTie(){
	for(var i=1; i <= 9; i++) {
		if(getSquare(i)=="")
			return false;
	} 
	return true;
}






