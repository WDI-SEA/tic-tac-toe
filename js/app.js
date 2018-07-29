
var turnCounter = 0;
var token;

console.log('Hello frontend');
document.getElementById("reset").addEventListener("click", start);

function start() {
	console.log("starting game!");
	changeColor("Navy");
	token = "X";
	document.getElementById("update").textContent = "Player: " + token;
	var boxContent = document.querySelectorAll("p");
		for (var i = 0; i < boxContent.length; i++) {
			boxContent[i].textContent = "";
		}
	this.textContent = "Restart Game";
	addBoxListeners();

	}

	function addBoxListeners(){
		var boxes = document.querySelectorAll(".square");
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].addEventListener("click", clickBox);
			//console.log("listeners added");
		}
	}

	function removeBoxListeners() {
		var boxes = document.querySelectorAll(".square");
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].removeEventListener("click", clickBox);
			//console.log("listeners removed");
		}
	}

	function turnChange() {
		if (checkWinX()){
			winGame("X");
		}
		else if (checkWinO()){
			winGame("O");
		}
		else if (turnCounter === 9) {
			drawGame();	
		} else if (turnCounter % 2 === 0) {
			token = "X";
			document.getElementById("update").textContent = "Player: " + token;
		} else if (turnCounter % 2 === 1) {
			token = "O";
			document.getElementById("update").textContent = "Player: " + token;
		} 
	}

	function clickBox() {
		//console.log(this.id + " box clicked");
		this.childNodes[1].textContent = token;
		this.removeEventListener("click", clickBox);
		var clickSound = document.getElementById("click");
		clickSound.play();
		turnCounter = turnCounter+1;
		turnChange();
		
	}

	function drawGame() {
		changeColor("WhiteSmoke");
		document.getElementById("update").textContent = "";
		document.getElementById("update").textContent = "This game is a tie.";
		var tieGame = document.getElementById("tieSound");
		tieGame.play();
		turnCounter = 0;
		updateScore("ties");
		
	}
	function updateScore(winner){	
		var score = document.getElementById(winner).textContent;
		console.log(score);
		score = Number(score) + 1;
		document.getElementById(winner).textContent = score;
	}

	function changeColor(shade) {
		var par = document.getElementsByTagName("p");
		for (var i = 0; i < par.length; i++){
			par[i].style.color = shade;
		}

	}
	function checkWinX() {
		var para = document.getElementsByTagName("p");
		if ( (para[0].textContent + para[1].textContent + para[2].textContent === "XXX") ||
			 (para[3].textContent + para[4].textContent + para[5].textContent === "XXX") ||
			 (para[6].textContent + para[7].textContent + para[8].textContent === "XXX") ||
			 (para[0].textContent + para[3].textContent + para[6].textContent === "XXX") ||
			 (para[1].textContent + para[4].textContent + para[7].textContent === "XXX") ||
			 (para[2].textContent + para[5].textContent + para[8].textContent === "XXX") ||
			 (para[0].textContent + para[4].textContent + para[8].textContent === "XXX") ||
			 (para[2].textContent + para[4].textContent + para[6].textContent === "XXX"))
		{
			updateScore("xWins");
			return true;
		}
	}

	function checkWinO() {
		var para = document.getElementsByTagName("p");
		if (
			 (para[0].textContent + para[1].textContent + para[2].textContent === "OOO") ||
			 (para[3].textContent + para[4].textContent + para[5].textContent === "OOO") ||
			 (para[6].textContent + para[7].textContent + para[8].textContent === "OOO") ||
			 (para[0].textContent + para[3].textContent + para[6].textContent === "OOO") ||
			 (para[1].textContent + para[4].textContent + para[7].textContent === "OOO") ||
			 (para[2].textContent + para[5].textContent + para[8].textContent === "OOO") ||
			 (para[0].textContent + para[4].textContent + para[8].textContent === "OOO") ||
			 (para[2].textContent + para[4].textContent + para[6].textContent === "OOO") )
			 
			{
			 updateScore("oWins");
			 return true;
		}
		
	}

	function winGame(winner) {
		console.log("THE GAME HAS BEEN WON");
		removeBoxListeners();
	
		document.getElementById("update").textContent = winner + " has won the game.";
		var Winning = document.getElementById("winMusic");
		Winning.play();
		var para = document.getElementsByTagName("p");
		for (var i = 0; i < para.length; i++){
			if (para[i].textContent === winner) {
				para[i].style.color = "red";
			}
		}
		turnCounter = 0;
	}

	

