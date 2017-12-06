
// this is for TIC TAC TOE



 var winCombo= [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
 [0, 3, 6],
 [1, 4, 7],
 [2, 5, 8],
 [2, 4, 6],
 [0, 4, 8],
 ];

// Add minimax algorithm for hard AI 
// store arrays for playermoves 
// calculate player moves arrays
// use switch statements to create win conditions



// grabbing key elements from the DOM
var cells = document.querySelectorAll('.cell');
var playerStart = document.getElementById('playerStart');
var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var resetBtn = document.getElementById('resetBtn');


var player1Selection = []
var player2Selection = []


var turn = 0;

// functions to add and remov displays to show whos turn it is

var player2Notice = function(){
	player2.style.display = 'inline-block';
	player2.style.color = 'red';
	player1.style.display = 'none';
	playerStart.style.display = 'none';
}
var player1Notice = function(){
	player1.style.display = 'inline-block';
	player1.style.color = 'blue';
	player2.style.display = 'none';
	playerStart.style.display = 'none';
}




var everyTurn = function(param){
	if(turn >=5){
	    //pass same parameterinto check winner
	    checkWinner(param);
	}
}


var checkWinner = function(winner){
  //grab the cells
  // console.log('inside the check winner function',winner);
  var allCells = document.querySelectorAll('.cell');
  console.log(allCells);
  //Loop through win combos
  //if(allCells[0].someAttribute ==== winner && allCells[1].someAttribute === winner && allcells[2].someAttribute === winner){
  	//x won
  //}



  

	console.log(allCells[0].className === 'cell'+winner);
    if(allCells[0].className === 'cell'+ winner && allCells[1].className === 'cell'+ winner && boxes[2].className === 'cell'+ winner){
        // document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        // removeEventListeners();
	}
}

  //check if currentplayer is in any of the combos
  //returns true if win is detected
// determine alternating turns
var cellsClicked = function(){
	var winner;
	turn++;
	if (turn%2 === 0 ){
		this.textContent= 'X';
		this.style.color = 'red';
		this.removeEventListener('click',cellsClicked);
		console.log(this.id);
		player1Notice();
		player2Selection.push(this);
		winner = " x";

	}
	else{
		this.textContent = 'O';
		this.style.color = 'blue';
		this.removeEventListener('click',cellsClicked);
		player2Notice();
		player1Selection.push(this);
		winner = " o";

	};

	everyTurn(winner);

	if(turn > 8){
    	console.log('draw');
    	// display none originally
    	/////#######&#^&#(*#&$(*$#&)) Change DOM to display a draw
  	}
}

// sets button to click that engages newGame and addCellEventListener
resetBtn.addEventListener('click', function(){ 
	console.log('click');
	newGame();
	addCellEventListener();
});

// 
var addCellEventListener = function(){
	console.log('eventlisteners engaged');
	for(var i = 0; i < cells.length; i++){
		cells[i].addEventListener('click', cellsClicked);
	}
}


// newGame function that 
var newGame = function() {
	for(var i = 0; i < cells.length; i++){
		cells[i].innerHTML = '';
	}
	playerStart.style.display = 'inline-block';
	player1.style.display = 'none';
	player2.style.display = 'none';
	turn = 0;
}



addCellEventListener();

