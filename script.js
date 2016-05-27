// var compMove = function() {
// 	var move = Math.floor(Math.random() * 9) + 1;
// 	console.log(move)
// 	if(move === 1) {
// 		document.getElementById('r1c1').innerHTML = '<img src=\'O.png\'>';
// 	} else if (move === 2) {
// 		document.getElementById('r2c1').innerHTML = '<img src=\'O.png\'>';
// 	} else if (move === 3) {
// 		document.getElementById('r3c1').innerHTML = '<img src=\'O.png\'>';
// 	} else if (move === 4) {
// 		document.getElementById('r1c2').innerHTML = '<img src=\'O.png\'>';
// 	} else if (move === 5) {
// 		document.getElementById('r2c2').innerHTML = '<img src=\'O.png\'>';
// 	} else if (move === 6) {
// 		document.getElementById('r3c2').innerHTML = '<img src=\'O.png\'>';
// 	} else if (move === 7) {
// 		document.getElementById('r1c3').innerHTML = '<img src=\'O.png\'>';
// 	} else if (move === 8) {
// 		document.getElementById('r2c3').innerHTML = '<img src=\'O.png\'>';
// 	} else if (move === 9) {
// 		document.getElementById('r3c3').innerHTML = '<img src=\'O.png\'>';
// 	}
// }

var playerMove = function(move) {

}

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');


var gameBoard = [
	[box1, box2, box3],
	[box4, box5, box6],
	[box7, box8, box9]
]

var board = document.querySelectorAll("div.toe");
console.log(board)

function hasArrayBeenFilled(result) {
  var countI = 0;
  var countJ = 0;
  for (i = 0; gameBoard.length >= i; i++) {
  	countI++;
  	for (j =0; gameBoard[i].length; j++) {
  		if (gameBoard[i][j] === 'X' || gameBoard[i][j] === 'O') {
      countJ++;
    }
  }
  console.log(count);
  return countI;
};

[]


function whosTurn(countOutput) {
  var countOutput = hasArrayBeenFilled(result);
  if (countOutput % 2 === 0) {
    return 'X';
  } else {
    return 'O';
  }
}


var winner = function () {
	if(gameBoard[0][0] === playerMove && gameBoard[0][1] === playerMove && gameBoard[0][2] === playerMove || 
	  gameBoard[1][0] === playerMove && gameBoard[1][1] === playerMove && gameBoard[1][2] === playerMove ||
	  gameBoard[2][0] === playerMove && gameBoard[2][1] === playerMove && gameBoard[2][2] === playerMove ||
	  gameBoard[0][0] === playerMove && gameBoard[1][0] === playerMove && gameBoard[2][0] === playerMove ||
	  gameBoard[0][1] === playerMove && gameBoard[1][1] === playerMove && gameBoard[2][1] === playerMove ||
	  gameBoard[0][2] === playerMove && gameBoard[1][2] === playerMove && gameBoard[2][2] === playerMove ||
	  gameBoard[0][0] === playerMove && gameBoard[1][1] === playerMove && gameBoard[2][2] === playerMove ||
	  gameBoard[0][2] === playerMove && gameBoard[1][1] === playerMove && gameBoard[2][0] === playerMove) {
	  	document.write('player wins');
	} else if (gameBoard[0][0] === compMove && gameBoard[0][1] === compMove && gameBoard[0][2] === compMove || 
	  gameBoard[1][0] === compMove && gameBoard[1][1] === compMove && gameBoard[1][2] === compMove ||
	  gameBoard[2][0] === compMove && gameBoard[2][1] === compMove && gameBoard[2][2] === compMove ||
	  gameBoard[0][0] === compMove && gameBoard[1][0] === compMove && gameBoard[2][0] === compMove ||
	  gameBoard[0][1] === compMove && gameBoard[1][1] === compMove && gameBoard[2][1] === compMove ||
	  gameBoard[0][2] === compMove && gameBoard[1][2] === compMove && gameBoard[2][2] === compMove ||
	  gameBoard[0][0] === compMove && gameBoard[1][1] === compMove && gameBoard[2][2] === compMove ||
	  gameBoard[0][2] === compMove && gameBoard[1][1] === compMove && gameBoard[2][0] === compMove) {
	  	document.write('computer wins');
	} else {
		document.write('cats cradle')
	}
}


