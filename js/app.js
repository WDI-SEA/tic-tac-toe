var plays = 0;
var evenTurn = [];
var oddTurn = [];
var resetButton = document.getElementsByTagName("button");


var checkDraw =function(){
	if(plays===9){
		console.log("checkddddraw");
		document.getElementById("draw").style.display = "inline-block";
		document.getElementById("playerOneTurn").style.display = "none";
		document.getElementById("playerTwoTurn").style.display = "none";
	}
}


var checkWinEven = function(){
	if(
		evenTurn.indexOf("1one") != -1
		&& evenTurn.indexOf("2two") != -1
		&& evenTurn.indexOf("3three") != -1){
			console.log("winnwiin");
			document.getElementById("playerTwoW").style.display = "inline-block";
			document.getElementById("playerOneTurn").style.display = "none";

	}else if(
		evenTurn.indexOf("1one") != -1
		&& evenTurn.indexOf("4four") != -1
		&& evenTurn.indexOf("7seven") != -1){
			console.log("winnwiin");
			document.getElementById("playerTwoW").style.display = "inline-block";
			document.getElementById("playerOneTurn").style.display = "none";

	}else if(
		evenTurn.indexOf("1one") != -1
		&& evenTurn.indexOf("5five") != -1
		&& evenTurn.indexOf("9nine") != -1){
			console.log("winnwiin");
			document.getElementById("playerTwoW").style.display = "inline-block";
			document.getElementById("playerOneTurn").style.display = "none";

	}else if(
		evenTurn.indexOf("2two") != -1
		&& evenTurn.indexOf("5five") != -1
		&& evenTurn.indexOf("8eight") != -1){
			console.log("winnwiin");
			document.getElementById("playerTwoW").style.display = "inline-block";
			document.getElementById("playerOneTurn").style.display = "none";

	}else if(
		evenTurn.indexOf("3three") != -1
		&& evenTurn.indexOf("5five") != -1
		&& evenTurn.indexOf("7seven") != -1){
			console.log("winnwiin");
			document.getElementById("playerTwoW").style.display = "inline-block";
			document.getElementById("playerOneTurn").style.display = "none";

	}else if(
		evenTurn.indexOf("3three") != -1
		&& evenTurn.indexOf("6six") != -1
		&& evenTurn.indexOf("9nine") != -1){
			console.log("winnwiin");
			document.getElementById("playerTwoW").style.display = "inline-block";
			document.getElementById("playerOneTurn").style.display = "none";

	}else if(
		evenTurn.indexOf("4four") != -1
		&& evenTurn.indexOf("5five") != -1
		&& evenTurn.indexOf("6six") != -1){
			console.log("winnwiin");
			document.getElementById("playerTwoW").style.display = "inline-block";
			document.getElementById("playerOneTurn").style.display = "none";

	}else if(
		evenTurn.indexOf("7seven") != -1
		&& evenTurn.indexOf("8eight") != -1
		&& evenTurn.indexOf("9nine") != -1){
			console.log("winnwiin");
			document.getElementById("playerTwoW").style.display = "inline-block";
			document.getElementById("playerOneTurn").style.display = "none";
	}else(checkDraw());
}
var checkWinOdd = function(){
	if(
		oddTurn.indexOf("1one") != -1
		&& oddTurn.indexOf("2two") != -1
		&& oddTurn.indexOf("3three") != -1){
			console.log("winnwiin");
			document.getElementById("playerOneW").style.display = "inline-block";
			document.getElementById("playerTwoTurn").style.display = "none";

	}else if(
		oddTurn.indexOf("1one") != -1
		&& oddTurn.indexOf("4four") != -1
		&& oddTurn.indexOf("7seven") != -1){
			console.log("winnwiin");
			document.getElementById("playerOneW").style.display = "inline-block";
			document.getElementById("playerTwoTurn").style.display = "none";

	}else if(
		oddTurn.indexOf("1one") != -1
		&& oddTurn.indexOf("5five") != -1
		&& oddTurn.indexOf("9nine") != -1){
			console.log("winnwiin");
			document.getElementById("playerOneW").style.display = "inline-block";
			document.getElementById("playerTwoTurn").style.display = "none";

	}else if(
		oddTurn.indexOf("2two") != -1
		&& oddTurn.indexOf("5five") != -1
		&& oddTurn.indexOf("8eight") != -1){
			console.log("winnwiin");
			document.getElementById("playerOneW").style.display = "inline-block";
			document.getElementById("playerTwoTurn").style.display = "none";

	}else if(
		oddTurn.indexOf("3three") != -1
		&& oddTurn.indexOf("5five") != -1
		&& oddTurn.indexOf("7seven") != -1){
			console.log("winnwiin");
			document.getElementById("playerOneW").style.display = "inline-block";
			document.getElementById("playerTwoTurn").style.display = "none";

	}else if(
		oddTurn.indexOf("3three") != -1
		&& oddTurn.indexOf("6six") != -1
		&& oddTurn.indexOf("9nine") != -1){
			console.log("winnwiin");
			document.getElementById("playerOneW").style.display = "inline-block";
			document.getElementById("playerTwoTurn").style.display = "none";

	}else if(
		oddTurn.indexOf("4four") != -1
		&& oddTurn.indexOf("5five") != -1
		&& oddTurn.indexOf("6six") != -1){
			console.log("winnwiin");
			document.getElementById("playerOneW").style.display = "inline-block";
			document.getElementById("playerTwoTurn").style.display = "none";

	}else if(
		oddTurn.indexOf("7seven") != -1
		&& oddTurn.indexOf("8eight") != -1
		&& oddTurn.indexOf("9nine") != -1){
			console.log("winnwiin");
			document.getElementById("playerOneW").style.display = "inline-block";
			document.getElementById("playerTwoTurn").style.display = "none";
	}else(checkDraw());
}

var resetBoard = function(){
	plays = 0;
	document.getElementById("playerOneTurn").style.display = "inline-block";
	document.getElementById("playerTwoTurn").style.display = "none";
	oddTurn.splice(0,oddTurn.length);
	evenTurn.splice(0,evenTurn.length);
	document.getElementById("playerOneW").style.display = "none";
	document.getElementById("playerTwoW").style.display = "none";
	document.getElementById("draw").style.display = "none";
	var resetCells = document.querySelectorAll(".cellEven, .cell, .cellOdd");
		for(var i=0; i<resetCells.length; i++){	
			resetCells[i].addEventListener("click", cellClicked);
			resetCells[i].className = "cell";
		}
}
document.getElementById("reset").addEventListener("click", resetBoard);

var cellClicked = function(){
	plays++;
	if(plays%2===1){
	this.className = "cellOdd";
	document.getElementById("playerOneTurn").style.display = "none";
	document.getElementById("playerTwoTurn").style.display = "inline-block";
	oddTurn.push(this.id);
	checkWinOdd();
	}else{
	this.className = "cellEven";
	document.getElementById("playerTwoTurn").style.display = "none";
	document.getElementById("playerOneTurn").style.display = "inline-block";
	evenTurn.push(this.id);
	checkWinEven();
	}
	this.removeEventListener("click", cellClicked);
	// checkWin();
}
var move = function(){
	var allCells = document.querySelectorAll(".cell");
	for(var i=0; i<allCells.length; i++){
	allCells[i].addEventListener("click", cellClicked);
	}
}
move();

