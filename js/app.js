console.log('Hello frontend');

var resetGame = document.getElementById("button");
var position1 = document.getElementById("1");
var position2 = document.getElementById("2");
var position3 = document.getElementById("3");
var position4 = document.getElementById("4");
var position5 = document.getElementById("5");
var position6 = document.getElementById("6");
var position7 = document.getElementById("7");
var position8 = document.getElementById("8");
var position9 = document.getElementById("9");
var game = document.getElementsByClassName("box");
var gameBoard = false;
var clicked1 = false;
var clicked2 = false;
var clicked3 = false;
var clicked4 = false;
var clicked5 = false;
var clicked6 = false;
var clicked7 = false;
var clicked8 = false;
var clicked9 = false;
var playerOne = 'X';
var playerTwo = 'O';
var turnCounter = 0;
var boardArray = [
	[position1, position2, position3],
	[position4, position5, position6],
	[position7, position8, position9]
];
keepPlaying = true;
var winningCombinations = [
	["1", "2", "3"],
	["4", "5", "6"],
	["7", "8", "9"],
	["1", "4", "7"],
	["2", "5", "8"],
	["3", "6", "9"],
	["1", "5", "9"],
	["3", "5", "7"]
	];
var score = {
	X: 0,
	O: 1
};

//turn function
var turn = function (){
	if(turnCounter % 2 === 0) {
		return "X";
	} else {
		return "O";
	}
};

// var checkForWinner = function () {
//  	switch(true);
//  	 	case winningCombinations[0] === X && winningCombinations[1] === X && winningCombinations[2]:
//  	 	break;
//  	 	case winningCombinations[3] === X && winningCombinations[4] === X && winningCombinations[5]:
//  	 	break;
//  	 	case winningCombinations[6] === X && winningCombinations[7] === X && winningCombinations[8]:
//  	 	break;
//  	 	case winningCombinations[0] === X && winningCombinations[3] === X && winningCombinations[6]:
//  	 	break;
//  	 	case winningCombinations[1] === X && winningCombinations[4] === X && winningCombinations[7]:
//  	 	break;
//  	 	case winningCombinations[2] === X && winningCombinations[5] === X && winningCombinations[8]:
//  	 	break;
//  	 	case winningCombinations[0] === X && winningCombinations[4] === X && winningCombinations[8]:
//  	 	break;
//  	 	case winningCombinations[2] === X && winningCombinations[4] === X && winningCombinations[6]:
//  	 	break;
//       		// add winner function -- display a winner function then set keepPlaying = false
//  }

var play = function (){
	if(!this.classList.contains('X') && !this.classList.contains('O') && keepPlaying) {
	this.classList.add(turn());
	// add check for winner function here
	turnCounter++;
	}
}; 

var startBoard = function (){
	var gameBoxes = document.getElementsByClassName('box');
	for(var i=0; i < gameBoxes.length; i++) {
		gameBoxes[i].addEventListener('click', play);
	}
};

turn();
// play();
startBoard();

// position1.addEventListener('click', function (){
// 	clicked1 = true;
// 	return playerOne;
// 	//var called = function () {
// 		//console.log('I feel like I am close...');
// 		//document.getElementById('1').setAttribute.playerOne;
// 	//}
// 	//called();
// })





// var turn = function(){
// 	for (var i=0; i < boardArray.length; i++) {
// 		boardArray[i].addEventListener('click', function(){
// 			if (i % 2 === 0) {
// 				return playerOne;
// 			}
// 			else {
// 				return playerTwo;
// 			}
//  		turn()
//  		})
// 	}
// }

// position1.addEventListener('click', function (){
// 	clicked1 = true;
// 	if (clicked1) {
// 		var called = function () {
// 			return playerOne;
// 		}
// 		called();
// 	}
// })


// for(var i=0; i < boardArray.length; i++) {
//  	boardArray.addEventListener('click', function() {
//  		gameBoard = true;
//  		if(gameBoard) {
//  			var called = function (){
//  				boardArray.setAttribute('src', 'img/sloth.jpg');
//  			}
//  			called();
//  		}
//  	})
//  }



//  game.addEventListener('click', function() {
//  	gameBoard = true;
//  	if(gameBoard) {
//  		var called = function (){
//  			boardArray.setAttribute('src', 'img/sloth.jpg');
//  		}
//  		called();
//  	}
//  })
// 	