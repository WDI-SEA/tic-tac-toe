var plays = 0;
var evenTurn = [];
var oddTurn = [];
var resetButton = document.getElementsByTagName("button");
var win123 = ["1one", "2two", "3three"]
var win147 = ["1one", "4four", "7seven"]
var win159 = ["1one", "5five", "9nine"]
var win258 = ["2two", "5five", "8eight"]
var win369 = ["3three", "6six", "9nine"]
var win357 = ["3three", "5five", "7seven"]
var win456 = ["4four", "5five", "6six"]
var win789 = ["7seven", "8eight", "9nine"]

var checkWin = function(){
	console.log("checkin win");
	console.log("checkSort");
	switch(evenTurn.sort().join(",")){
		case win123.join(","):
			console.log("winner");
			document.getElementById("playerTwoW").style.display = "inline-block";
			break;
		case win147.join(","):
			console.log("winner");
			document.getElementById("playerTwoW").style.display = "inline-block";
			break;
		case win159.join(","):
			console.log("winner");
			document.getElementById("playerTwoW").style.display = "inline-block";
			break;
		case win258.join(","):
			console.log("winner");
			document.getElementById("playerTwoW").style.display = "inline-block";
			break;
		case win357.join(","):
			console.log("winner");
			document.getElementById("playerTwoW").style.display = "inline-block";
			break;
		case win369.join(","):
			console.log("winner");
			document.getElementById("playerTwoW").style.display = "inline-block";
			break;
		case win456.join(","):
			console.log("winner");
			document.getElementById("playerTwoW").style.display = "inline-block";
			break;
		case win789.join(","):
			console.log("winner");
			document.getElementById("playerTwoW").style.display = "inline-block";
			break;
		default:
			console.log("default");
			break;
	}
	switch(oddTurn.sort().join(",")){
		case win123.join(","):
			console.log("winner");
			document.getElementById("playerOneW").style.display = "inline-block";
			break;
		case win147.join(","):
			console.log("winner");
			document.getElementById("playerOneW").style.display = "inline-block";
			break;
		case win159.join(","):
			console.log("winner");
			document.getElementById("playerOneW").style.display = "inline-block";
			break;
		case win258.join(","):
			console.log("winner");
			document.getElementById("playerOneW").style.display = "inline-block";
			break;
		case win357.join(","):
			console.log("winner");
			document.getElementById("playerOneW").style.display = "inline-block";
			break;
		case win369.join(","):
			console.log("winner");
			document.getElementById("playerOneW").style.display = "inline-block";
			break;
		case win456.join(","):
			console.log("winner");
			document.getElementById("playerOneW").style.display = "inline-block";
			break;
		case win789.join(","):
			console.log("winner");
			document.getElementById("playerOneW").style.display = "inline-block";
			break;
		default:
			console.log("default");
			break;
	}	
}

var resetBoard = function(){
	plays = 0;
	document.getElementById("playerOneTurn").style.display = "inline-block";
	document.getElementById("playerTwoTurn").style.display = "none";
	oddTurn.splice(0,oddTurn.length);
	evenTurn.splice(0,evenTurn.length);
	document.getElementById("playerOneW").style.display = "none";
	document.getElementById("playerTwoW").style.display = "none";
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
	}else{
	this.className = "cellEven";
	document.getElementById("playerTwoTurn").style.display = "none";
	document.getElementById("playerOneTurn").style.display = "inline-block";
	evenTurn.push(this.id);
	}
	this.removeEventListener("click", cellClicked);
	checkWin();
}
var move = function(){
	var allCells = document.querySelectorAll(".cell");
	for(var i=0; i<allCells.length; i++){
	allCells[i].addEventListener("click", cellClicked);
	}
}
move();

