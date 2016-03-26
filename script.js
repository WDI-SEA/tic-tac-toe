//Instantiate Array of squares
var divArray = [];
var xTurn = true;

//Populate Array of squares
for (var i = 0; i < 3; i++){
	divArray[i * 3] = document.getElementById("div_square" + i + "0");
	divArray[i * 3 + 1] = document.getElementById("div_square" + i + "1");
	divArray[i * 3 + 2] = document.getElementById("div_square" + i + "2");
}

var handleClick = function(arrayAddress){
	console.log("xTurn = " + xTurn)
	console.log("arrayAdress clicked = " + arrayAddress);
	if (!divArray[arrayAddress].innerHTML && xTurn){
		divArray[arrayAddress].innerHTML = "X";
		changeTurn();
	}
	else if(!divArray[arrayAddress.innderHTML && !xTurn]){
		divArray[arrayAddress].innerHTML = "O";
		changeTurn();
	}
	else
	{
		console.log("Pick a different square!")
	}
}

//Add event listeners to the array of squares
var i = 0;
for (i = 0; i < 9; i++){
	divArray[i].addEventListener("click", function(){
		handleClick();
	})
}

var changeTurn = function(){
	if (xTurn) {
		xTurn = false;
	}
	else {
		xTurn = true;
	}
}




