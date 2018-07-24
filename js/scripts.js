
//global variables for game
var table =[];
var toContinue = true;
var turn = 'x';


// Populates the table with the td elements from the document and adds listener for click
function populateTable(){
	var rows = document.getElementById('tictac').getElementsByTagName('tr');
	for(var i = 0; i < rows.length; i++){
		var columns = rows[i].children;
		var row = [];
		for(var j = 0; j < columns.length; j++){
			if(columns[j].tagName=='TD'){
				row.push(columns[j])
				row[j].addEventListener("click",playerClicked);
				row[j].className=" ";
			}
		}
		table.push(row);
	}
	document.getElementById("reset").addEventListener("click",resetBoard);
}

// Executed when the player clicks, checks for win and changes turn
function playerClicked(){
	if(this.className == " "){
		this.className = turn;
		setTimeout(500);
		if(checkForWin()){
			alert("Player " + turn.toUpperCase() + " won!");	
			win();
			resetBoard();
		}
		turn = switchTurn(turn);
	}
	else {}
}

// Switches player turns 
function switchTurn(currentTurn){
 return ((currentTurn ==='x') ? 'o' : 'x');
}

// Compares 3 tiles to see if they are all the same
function compareTiles(tile1, tile2, tile3){
	console.log(tile1.classNamem, tile2.className, tile3.className);
	if((tile1.className== tile2.className && tile1.className == tile3.className) && tile1.className != " ")
		return true;
	return false;
}

// Checks for 3 similar in a row 
function checkForWin() {
	//check for horizontal/verticle wins
	for(var i = 0; i < 3; i++){
		if(compareTiles(table[i][0],table[i][1],table[i][2])){
			return true;
		}
		if(compareTiles(table[0][i], table[1][i], table[2][i])){
			return true;
		}
	}

	//check for diagonal wins
	if(compareTiles(table[0][0], table[1][1],table[2][2])){
		return true;
	}
	else if (compareTiles(table[0][2],table[1][1],table[2][0])){
		return true;
	}
	checkTie();
	return false;
}
// Checking for tie 
function checkTie(){
	var total = 0;
	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
			if(table[i][j].className != " ")
				total++;
		}
	}
	if(total == 9)
	{
		alert("It's a tie!")
		resetBoard();
	}
}
//Reset the board
function resetBoard(){
	for(var i = 0; i < 3; i++){
		for(var j = 0; j < 3; j++){
			table[i][j].className = " ";
		}
	}
}

function win(){
	var number = document.getElementById(turn).innerHTML;
	number = parseInt(number);
	number++;
	document.getElementById(turn).innerHTML = number;
}

populateTable();

