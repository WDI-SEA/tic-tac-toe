
var winCombo = [["one","two","three"], ["four","five","six"], ["seven","eight","nine"], ["one","four","seven"], ["two","five","eight"], ["three","six","nine"], ["one","five","nine"], ["three","five","seven"]];
var playerX = [];
var playerO = [];
var counter = 0;
var allBoxes;
// defining all variables involved

document.addEventListener("DOMContentLoaded", startGame);{
	console.log("dom content has loaded");

	document.getElementById("reset").addEventListener("click", resetGame);
	// adding event listener and click function for the reset button

	allBoxes = document.getElementsByClassName("gameBox");
	// defining what all boxes are referring to

	for(i = 0; i < allBoxes.length; i++){
		allBoxes[i].addEventListener("click", onTurn);
	}
	// add forloop to iterate through the chosen class into an array
};



//defintion of functions out side the addEventListener
function startGame(){
	document.getElementById("message").innerHTML = "Player X's Turn"; //had to set message back to starting header
	for(i = 0; i < allBoxes.length; i++){
		allBoxes[i].addEventListener("click", onTurn); //turn on event listerner again
	}
}

function allBoxesRemove(){
	document.getElementsByClassName("gameBox");
	for(i = 0; i < allBoxes.length; i++){
		allBoxes[i].removeEventListener("click", onTurn);
	}
}

function resetGame(){
	console.log("reset running");
	playerX = [];
	playerO = [];
	counter = 0;

	for(i = 0; i < allBoxes.length; i++){
		allBoxes[i].classList.remove("playerX");
		allBoxes[i].classList.remove("playerO");
	}
	startGame();
}



function onTurn(e){
	// determine which box is picked
	// deetermine which player is up <- conditional
	if(counter % 2 === 0){ // this returns either 0 or not to differenciate player turn
		// all playerX logic, 
		playerX.push(e.target.id);
		document.getElementById(e.target.id).classList.add("playerX");
		checkWin(playerX);
		document.getElementById("message").innerHTML = "Player O's Turn";
	} else {
		// all playerO logic
		playerO.push(e.target.id);
		document.getElementById(e.target.id).classList.add("playerO");
		checkWin(playerO);
		document.getElementById("message").innerHTML = "Player X's Turn";
	}
	if(!checkWin(playerO) && !checkWin(playerX)){ //checking to see true or false of checkWIN, if returns false, run checktie function
		checkTie();
	}
	counter++; //add counter after every box clicked - also used to determine total box count click
	document.getElementById(e.target.id).removeEventListener("click", onTurn); // after each turn, remove eventlistner for that div id to prevent re-clicking the same box for the other player
}

function checkTie(){
	console.log("check tie is running");
	if(counter == 8){  // counter was needed to see when all boxes are filled to determine a tie.  8 was due to first box in array starting at 0...   = 9 boxes.  this counter count is being added in onTurn function. 
		console.log(counter);
		document.getElementById("message").innerHTML = "It's a Tie!";
	}
}

function checkWin(playerArr){ //playerArr is provided by $onTurn. ID of the box is added within player x array e.g playerX = ["one"] after 1st box click
	var pointCounter = 0;  
	for(i = 0; i < winCombo.length; i++){ // iterate through the number of 8 possible win conditions
		let innerArr = winCombo[i]; 
		for(j = 0; j < innerArr.length; j++){  // doing an inception forloop here, iterating through the actual winning box combination within the 8 possible win conditions
			if(playerArr.includes(innerArr[j])){ // checking the playerArr (what box was clicked by who) against the innerARR (win combo).  
			pointCounter++;  //add pointcounter every check
			console.log("yes", pointCounter);
				if(pointCounter === 3){ //once pointcounter reaches 3 = it means 3 boxes are clicked
				console.log("win");
				document.getElementById("message").innerHTML = "You WIN!";
				allBoxesRemove(); // remove eventlistener on all boxes so you can't keep playing after game is done
				//
				return true; // someone has met the 3 matching conditions
				}
			}
		}
		pointCounter = 0; //reset the counter to reset
	}
	return false; //tie funtion will be used when this is passed on
}
