console.log('hello');
var count= 0;
var board= [[null, null, null],[null, null, null],[null, null, null]];
var box = document.querySelector('#box-1');
var box2 = document.querySelector('#box-2');
var box3 = document.querySelector('#box-3');
var box4 = document.querySelector('#box-4');
var box5 = document.querySelector('#box-5');
var box6 = document.querySelector('#box-6');
var box7 = document.querySelector('#box-7');
var box8 = document.querySelector('#box-8');
var box9 = document.querySelector('#box-9');

var getWinner = function() {
  if (isXWinner()) {
    alert ('X is the winner!');
  }
  else if (isOWinner()) {
   alert ('O is the winner!');
  }
  else if (board[0][0] != null && board[0][1] != null && board[0][2] != null && board[1][0] != null && board[1][1] != null && board[1][2] != null && board[2][0] != null && board[2][1] != null && board[2][2] != null){
  	alert("Tie!");
  // return null;
	}
};


function isXWinner(){
	return winsRowX() || winsColumnX() || winsDiagonalX();
}

function isOWinner(){
	return winsRowO() || winsColumnO() || winsDiagonalO();
}


var winsRowX = function(){
	return allThreeX (board[0][0],board[0][1],board[0][2])||
		allThreeX (board[1][0],board[1][1],board[1][2])||
		allThreeX (board[2][0],board[2][1],board[2][2]);	
};

var winsColumnX = function(){
	return allThreeX (board[0][0],board[1][0],board[2][0])||
		allThreeX (board[0][1],board[1][1],board[2][1])||
		allThreeX (board[0][2],board[1][2],board[2][2]);
};

var winsDiagonalX = function(){
	return allThreeX(board[0][0],board[1][1], board[2][2])||
		 allThreeX(board[2][0],board[1][1], board[0][2]);
};

var allThreeX = function(cellOne, cellTwo, cellThree) {

  return (cellOne === 'x') && (cellTwo === 'x') && (cellThree === 'x');
};

var winsRowO = function(){
	return allThreeO (board[0][0],board[0][1],board[0][2])||
		allThreeO (board[1][0],board[1][1],board[1][2])||
		allThreeO (board[2][0],board[2][1],board[2][2]);	
};

var winsColumnO = function(){
	return allThreeO (board[0][0],board[1][0],board[2][0])||
		allThreeO (board[0][1],board[1][1],board[2][1])||
		allThreeO (board[0][2],board[1][2],board[2][2]);
};

var winsDiagonalO = function(){
	return allThreeO (board[0][0],board[1][1], board[2][2])||
		 allThreeO (board[2][0],board[1][1], board[0][2]);
};

var allThreeO = function(cellOne, cellTwo, cellThree) {
  
  return (cellOne === 'o') && (cellTwo === 'o') && (cellThree === 'o');

};


function currentPlayer(selectBox, position1, position2) {
	selectBox.addEventListener('click', function(){
		if ( count%2 === 0) {
			console.log('Player Move');
			count ++;
			this.innerHTML = "x";
			this.style.backgroundColor = "blue";
			board[position1][position2] = "x";
			console.log('count of X' + count);
			getWinner();
		
			
		} else{
			console.log('Opponent Move');
			count++;
			this.innerHTML = "o";
			this.style.backgroundColor = "red";
			board[position1][position2] = "o";
			console.log('count of O' + count);
			getWinner();
		}
	});
}

currentPlayer(document.querySelector("#box-1"), 0, 0);
currentPlayer(document.querySelector("#box-2"), 0, 1);
currentPlayer(document.querySelector("#box-3"), 0, 2);
currentPlayer(document.querySelector("#box-4"), 1, 0);
currentPlayer(document.querySelector("#box-5"), 1, 1);
currentPlayer(document.querySelector("#box-6"), 1, 2);
currentPlayer(document.querySelector("#box-7"), 2, 0);
currentPlayer(document.querySelector("#box-8"), 2, 1);
currentPlayer(document.querySelector("#box-9"), 2, 2);



	document.getElementById('clear').addEventListener('click', function(event){
		event.preventDefault();
		console.log('clear');
		count = 0;
		board = [[null, null, null],[null, null, null],[null, null, null]];
		for(var i =0; i < 9; i++){
			console.log('loop');
			document.getElementsByClassName('box')[i].innerHTML = " ";
			document.getElementsByClassName('box')[i].style.backgroundColor = "#ffffff";
		}
	});





	// document.getElementById("box-1").addEventListener('click', function(event){
	// 	event.preventDefault();

	// 	document.getElementById("box-1").innerHTML = currentPlayer();


	// });

	// document.getElementById("box-2").addEventListener('click', function(event){
	// event.preventDefault();

	// document.getElementById("box-2").innerHTML = currentPlayer();

	// });


	// document.getElementById("box-3").addEventListener('click', function(event){
	// event.preventDefault();

	// document.getElementById("box-3").innerHTML = currentPlayer();

	// });


	// document.getElementById("box-4").addEventListener('click', function(event){
	// event.preventDefault();

	// document.getElementById("box-4").innerHTML = currentPlayer();

	// });

	// document.getElementById("box-5").addEventListener('click', function(event){
	// event.preventDefault();

	// document.getElementById("box-5").innerHTML = currentPlayer();

	// });


	// document.getElementById("box-6").addEventListener('click', function(event){
	// event.preventDefault();

	// document.getElementById("box-6").innerHTML = currentPlayer();

	// });


	// document.getElementById("box-7").addEventListener('click', function(event){
	// event.preventDefault();

	// document.getElementById("box-7").innerHTML = currentPlayer();

	// });

	// document.getElementById("box-8").addEventListener('click', function(event){
	// event.preventDefault();

	// document.getElementById("box-8").innerHTML = currentPlayer();

	// });

	// document.getElementById("box-9").addEventListener('click', function(event){
	// event.preventDefault();

	// document.getElementById("box-9").innerHTML = currentPlayer();

	// });