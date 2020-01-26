let row0 = [
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	}
];
let row1 = [
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	}
];
let row2 = [
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	},
	{
		marked: false,
		type: ""
	}
];

var numberOfMoves = 0;
let gameBoard = [row0,row1,row2];
let gameOver = false;
let gameAI = false;

let checkBoxHandler = function(e){
	let idString = e.target.id;
	let stringSplit = idString.split("-")
	let currRow = parseInt(stringSplit[0].slice(3), 10);
	let currColumn = parseInt(stringSplit[1].slice(3), 10);
	if(!gameBoard[currRow][currColumn].marked && !gameOver)
		if(numberOfMoves % 2 == 0){
			gameBoard[currRow][currColumn].type = "X";
			e.target.classList.remove("row-box");
			e.target.classList.add("player-1");
			e.target.innerText = "X";
			gameBoard[currRow][currColumn].marked = true;
			numberOfMoves++;
		} else if(!gameAI) {
			e.target.classList.remove("row-box");
			e.target.classList.add("player-2");
			gameBoard[currRow][currColumn].type = "O";
			e.target.innerText = "O";
			gameBoard[currRow][currColumn].marked = true;
			numberOfMoves++;
		}

	if(numberOfMoves >= 5){
		let win = checkWin();
		if(win == true){
			console.log(numberOfMoves);
			if(numberOfMoves % 2 == 0 && !gameOver){
				setTimeout(function(){ alert("player-2 has won the game"); }, 300);
			} else {
				if(!gameOver){
					setTimeout(function(){ alert("player-1 has won the game"); }, 300);
				}
			}
			gameOver = true;
		} else if(numberOfMoves == 9) {
			gameOver = true;
			setTimeout(function(){ alert("the game is a tie"); }, 300);

		}
	}
	if(gameAI && !gameOver){
		dumbAI();
	}
	if (numberOfMoves > 0 && !gameOver){
		nextTurnHandler();
	}
}


let checkWin = function(){
	let rowWin = checkRowWin();
	if(rowWin == true){
		console.log("WINNER");
		return true;
	} else {
		let columnWin = checkColumnWin();
		if(columnWin == true){
			console.log("WINNER");
			return true;
		} else {
			let diagWinLeft = checkDiagonalWinLeftToRight();
			if(diagWinLeft == true){
				console.log("WINNER");
				return true;
			} else {
				let diaWinRight = checkDiagonalWinRightToLeft();
				if(diaWinRight == true){
					console.log("WINNER");
					return true;
				}
			}
		}
	}
	return false;
}

let checkRowWin = function(){
	for(let i = 0; i <= 2; i++){
		let box0 = "";
		let box1 = "";
		let box2 = "";
		for(let j = 0; j <= 2; j++){
			if(j === 0){
				box0 = gameBoard[i][j].type;
			} else if (j === 1){
				box1 = gameBoard[i][j].type;
			} else if (j === 2){
				box2 = gameBoard[i][j].type;
			}
		}
		if((box0 == "X" && box1 == "X") && box2 == "X"){
			return true;
		} else if((box0 == "O" && box1 == "O") && box2 == "O"){
			return true;
		}
	}
	return false;
}
let checkColumnWin = function(){
	for(let i = 0; i <= 2; i++){
		let box0 = "";
		let box1 = "";
		let box2 = "";
		for(let j = 0; j <= 2; j++){
			if(j === 0){
				box0 = gameBoard[j][i].type;
			} else if (j === 1){
				box1 = gameBoard[j][i].type;
			} else if (j === 2){
				box2 = gameBoard[j][i].type;
			}
		}
		if((box0 == "X" && box1 == "X") && box2 == "X"){
			return true;
		} else if((box0 == "O" && box1 == "O") && box2 == "O"){
			return true;
		}
	}
	return false;
}

let checkDiagonalWinLeftToRight = function(){
	let box0 = "";
	let box1 = "";
	let box2 = "";
	for(let i = 0; i <= 2; i++){
		for(let j = 0; j <= 2; j++){
			if(i == 0 && j==0){
				box0 = gameBoard[i][j].type;
			} else if(i == 1 && j ==1){
				box1 = gameBoard[i][j].type;
			} else if(i == 2 && j == 2){
				box2 = gameBoard[i][j].type;
			}
		}
	}

	if((box0 == "X" && box1 == "X") && box2 == "X"){
		return true;
	} else if((box0 == "O" && box1 == "O") && box2 == "O"){
		return true;
	}
	return false;
}

let checkDiagonalWinRightToLeft = function (){
	let box0 = "";
	let box1 = "";
	let box2 = "";
	for(let i = 0; i <= 2; i++){
		for(let j = 0; j <= 2; j++){
			if(i == 0 && j==2){
				box0 = gameBoard[i][j].type;
			} else if(i == 1 && j ==1){
				box1 = gameBoard[i][j].type;
			} else if(i == 2 && j == 0){
				box2 = gameBoard[i][j].type;
			}
		}
	}

	if((box0 == "X" && box1 == "X") && box2 == "X"){
		return true;
	} else if((box0 == "O" && box1 == "O") && box2 == "O"){
		return true;
	}
	return false;

}

let resetHandler = function (){
	console.log("resetButtonHandler");
	numberOfMoves = 0;
	gameOver = false;
	for(let i = 0; i <= 2; i++){
		for(let j = 0; j <=2; j++){
			let selector = `#row${i}-box${j}`;
			//console.log(selector);
			gameBoard[i][j].type = "";
			gameBoard[i][j].marked = false;
			let domBox = document.querySelector(selector);
			domBox.innerText = "";
			domBox.classList.remove("player-1");
			domBox.classList.remove("player-2");
			domBox.classList.add("row-box");


		}
	}
	nextTurnHandler();
}
let startHandler = function (){
	if(numberOfMoves > 0){
		alert("game already started");
	} else {
		alert("player-1's turn");
	}
}
let nextTurnHandler = function(){
	if(numberOfMoves % 2 == 0){
		setTimeout(function(){ alert("player-1's turn"); }, 300);
	} else {
		setTimeout(function(){ alert("player-2's turn"); }, 300);
		//setTimeout(alert("player-2's turn");
	}

}
let soloPlayHandler = function(){
	console.log("soloPlayHandler");
	resetHandler();
	gameAI = true;
}

let dumbAI = function (){
	let foundEmpty = false;
	while(!foundEmpty){
		let rand1 = Math.floor(Math.random() * 3);
		let rand2 = Math.floor(Math.random() * 3);
		console.log(rand1 + " " + rand2);
		let selector = `#row${rand1}-box${rand2}`;
		if(!gameBoard[rand1][rand2].marked){
			console.log("unmarked");
			gameBoard[rand1][rand2].marked = true;
			gameBoard[rand1][rand2].type = "O";
			let domBox = document.querySelector(selector);
			domBox.classList.remove("row-box");
			domBox.classList.add("player-2");
			domBox.innerText = "O";
			foundEmpty = true;
			numberOfMoves++;
		}
	}
	if(numberOfMoves >= 5){
		let win = checkWin();
		if(win == true){
			console.log(numberOfMoves);
			if(numberOfMoves % 2 == 0 && !gameOver){
				setTimeout(function(){ alert("the computer has won the game"); }, 300);
			} else {
				if(!gameOver){
					setTimeout(function(){ alert("player-1 has won the game"); }, 300);
				}
			}
			gameOver = true;
		} else if(numberOfMoves == 9) {
			gameOver = true;
			setTimeout(function(){ alert("the game is a tie"); }, 300);

		}
	}
}






document.addEventListener("DOMContentLoaded", function(){
	document.querySelector(".start-game").addEventListener("click", startHandler);
	document.querySelector(".row-space").addEventListener("click", checkBoxHandler);
	document.querySelector(".reset").addEventListener("click", resetHandler);
	document.querySelector(".solo-play").addEventListener("click", soloPlayHandler);

})
