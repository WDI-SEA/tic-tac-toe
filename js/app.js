// this is for TIC TAC TOE

// grabbing key elements from the DOM
var cells = document.querySelectorAll('.cell');
var playerStart = document.getElementById('playerStart');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var resetBtn = document.getElementById('resetBtn');
var gameWin = document.getElementById('gameWin');
var gameDraw = document.getElementById('gameDraw');
var turn = 0;

// functions to add and remov displays to show whos turn it is

var player2Notice = function(){
	player2.style.display = 'inline-block';
	player2.style.color = 'red';
	player1.style.display = 'none';
	playerStart.style.display = 'none';
	gameWin.style.display = 'none';
}
var player1Notice = function(){
	player1.style.display = 'inline-block';
	player1.style.color = 'blue';
	player2.style.display = 'none';
	playerStart.style.display = 'none';
	gameWin.style.display = 'none';
}
var gameWinNotice = function(){
	gameWin.style.display = 'inline-block';
	gameWin.style.color = 'green';
	player2.style.display = 'none';
	player1.style.display = 'none';
	playerStart.style.display = 'none';
	
	removeCellEventListener();
}
var drawNotice = function(){
	// if(gameWinNotice){
	// 	gameDraw.style.display = 'none';
	// }
	gameDraw.style.display = 'inline-block';
	gameDraw.style.color = 'black';
	player2.style.display = 'none';
	player1.style.display = 'none';
	playerStart.style.display = 'none';
}
var everyTurn = function(param){
	if(turn >=5){
	    checkWinner(param);
	}
}

var checkWinner = function(winner){
  //grab the cells
  // console.log('inside the check winner function',winner);
  var allCells = document.querySelectorAll('.cell');
  console.log(allCells);
  //Loop through win combos
  if(allCells[0].textContent === winner && allCells[1].textContent === winner && allCells[2].textContent === winner){
  	console.log('won 012');
  	gameWinNotice();
  } else if (allCells[3].textContent === winner && allCells[4].textContent === winner && allCells[5].textContent === winner){
  	console.log('won 345');
  	gameWinNotice();
  } else if (allCells[6].textContent === winner && allCells[7].textContent === winner && allCells[8].textContent === winner){
  	console.log('won 678');
  	gameWinNotice();
  } else if (allCells[0].textContent === winner && allCells[3].textContent === winner && allCells[6].textContent === winner){
  	console.log('won 036');
  	gameWinNotice();
  } else if (allCells[1].textContent === winner && allCells[4].textContent === winner && allCells[7].textContent === winner){
  	console.log('won 147');
  	gameWinNotice();
  } else if (allCells[2].textContent === winner && allCells[5].textContent === winner && allCells[8].textContent === winner){
  	console.log('won 258');
  	gameWinNotice();
  } else if (allCells[2].textContent === winner && allCells[4].textContent === winner && allCells[6].textContent === winner){
  	console.log('won 246');
  	gameWinNotice();
  } else if (allCells[0].textContent === winner && allCells[4].textContent === winner && allCells[8].textContent === winner){
  	console.log('won 048');
  	gameWinNotice();
  } else{
  	false
  };
}

var cellsClicked = function(){
	var winner;
	turn++;
	if (turn%2 === 0 ){
		this.textContent= 'X';
		this.style.color = 'red';
		this.removeEventListener('click',cellsClicked);
		player1Notice();
		// player2Selection.push(this);
		winner = "X";
		console.log(winner);
	}
	else{
		this.textContent = 'O';
		this.style.color = 'blue';
		this.removeEventListener('click',cellsClicked);
		player2Notice();
		winner = "O";
	};
	everyTurn(winner);
if (turn > 8 && checkWinner()){
	console.log('draw');
	removeCellEventListener();
	drawNotice();
  	}else{
  		gameDraw.style.display = 'none';
  	}
}
// sets button to click that engages newGame and addCellEventListener
resetBtn.addEventListener('click', function(){ 
	newGame();
	addCellEventListener();
});

var addCellEventListener = function(){
	console.log('eventlisteners engaged');
	for(var i = 0; i < cells.length; i++){
		cells[i].addEventListener('click', cellsClicked);
	}
}
// add remove listen function similar to add event function
var removeCellEventListener = function(){
	console.log('eventlisteners removed');
	for(var i = 0; i < cells.length; i++){
		cells[i].removeEventListener('click', cellsClicked);
	}
}

var newGame = function() {
	for(var i = 0; i < cells.length; i++){
		cells[i].innerHTML = '';
	}
	playerStart.style.display = 'inline-block';
	player1.style.display = 'none';
	player2.style.display = 'none';
	gameWin.style.display = 'none';
	gameDraw.style.display = 'none';
	turn = 0;
}

addCellEventListener();

