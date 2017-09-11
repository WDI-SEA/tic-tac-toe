var nextPlayer = "X";
var turn = 0;
var xPoints = 0;
var oPoints = 0;
var squares = document.getElementsByClassName("square");
var resetBtn = document.getElementById("reset");
// console.log(squares);

resetBtn.addEventListener("click", reset);

// Turn function
var player = function (){
	if(turn % 2 === 0){
		nextPlayer = "O";
		turn++;
	}else if(turn % 2 === 1){
		nextPlayer = "X";
		turn++;
	}
};

for (var i = 0; i < squares.length; i++) {
	squares[i].addEventListener("click", function(){
	gamePiece(i);	
});


X, O function
function gamePiece(index){
	if(squares[index].textContent ==="X"||squares[index].textContent ==="O"){
		console.log("filled square");
	}else{
		squares[index].textContent = nextPlayer;
	}
}
	checkWin();
	player();

// win function
function checkWin(){
  var xo = ["X", "O"];
  for (var i = 0; i < 2; i++) {
  	if (squares[0].textContent === xo[i] &&
        squares[1].textContent === xo[i] &&
        squares[2].textContent === xo[i] ||
        	squares[0].textContent === xo[i] &&
        	squares[3].textContent === xo[i] &&
        	squares[6].textContent === xo[i] ||
        squares[1].textContent === xo[i] &&
        squares[4].textContent === xo[i] &&
        squares[7].textContent === xo[i] ||
        	squares[2].textContent === xo[i] &&
        	squares[5].textContent === xo[i] &&
        	squares[8].textContent === xo[i] ||
        squares[0].textContent === xo[i] &&
        squares[4].textContent === xo[i] &&
        squares[8].textContent === xo[i] ||
        	squares[3].textContent === xo[i] &&
        	squares[4].textContent === xo[i] &&
        	squares[5].textContent === xo[i] ||
        squares[6].textContent === xo[i] &&
        squares[7].textContent === xo[i] &&
        squares[8].textContent === xo[i] ||
        	squares[2].textContent === xo[i] &&
        	squares[4].textContent === xo[i] &&
        	squares[6].textContent === xo[i]
          ) {
  		declareWin();
  	}
	}

}

function declareWin(){
	alert(nextPlayer + " won!");
	switch(nextPlayer){
		case "O": oPoints++; 
		break;
		case "X": xPoints++; 
		break;
		default: 
		break;
	}
	document.getElementById("xScore").textContent = xPoints;
	document.getElementById("oScore").textContent = oPoints;
	reset();
}

//reset function
function reset(){
    for (var i = 0; i < 9; i++) {
      squares[i].textContent = "";
    }
}

function draw(){
	if(gamePiece === 9 && checkWin === false){
		alert("Draw!")
	}
	reset();
}

}
