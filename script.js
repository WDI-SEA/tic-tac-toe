//Instantiate Global Variables
var divArray = [];
var xTurn = true;
var countToTie = 0;

//Populate Array of squares
for (var i = 0; i < 3; i++){
	divArray[i * 3] = document.getElementById("div_square" + i + "0");
	divArray[i * 3 + 1] = document.getElementById("div_square" + i + "1");
	divArray[i * 3 + 2] = document.getElementById("div_square" + i + "2");
}

var displaySmall = document.getElementById("div_small");
var displayLarge = document.getElementById("div_large");

//Create Reset Button
var reset = function(){
	console.log("Reset clicked!");

	xTurn = true;
	displayLarge.innerHTML = "X";

	for (var i = 0; i < 9; i++){
		divArray[i].innerHTML = "";
	}
}
var resetButton = document.getElementById("div_reset");
resetButton.addEventListener("click", reset);

//What happens when you click
var handleClick = function(arrayAddress){
	console.log("xTurn = " + xTurn)
	console.log("arrayAddress clicked = " + arrayAddress);
	console.log("divArray[arrayAddress].innerHTML = " + divArray[arrayAddress].innerHTML);
	if (divArray[arrayAddress].innerHTML === "X" || divArray[arrayAddress].innerHTML === "O"){
		console.log("Pick a different square!");
	} else {
		if (xTurn){
			divArray[arrayAddress].innerHTML = "X";
			changeTurn();
			checkWin();
		} else {
			divArray[arrayAddress].innerHTML = "O";
			changeTurn();
			checkWin();
		}
	}
}

//Go between X and O
var changeTurn = function(){
	console.log("changing turn")
	if (xTurn) {
		xTurn = false;
		displayLarge.innerHTML = "O";
	}
	else {
		xTurn = true;
		displayLarge.innerHTML = "X";
	}
}

var checkWin = function(){
	// // check row
	// for(var i = 0; i < 3; i += 3){
	// 	console.log("Running check row");
	// 	console.log(divArray[i].innerHTML);
	// 	console.log(divArray[i + 1].innerHTML);
	// 	console.log(divArray[i + 2].innerHTML);
	// 	if(divArray[i].innerHTML == "" || divArray[i + 1].innerHTML == "" || divArray[i + 2].innerHTML == ""){
	// 		console.log(i + " is not a complete row");
	// 	} else if (divArray[i].innerHTML == divArray[i + 1].innerHTML && divArray[i].innerHTML == divArray[i + 2].innerHTML){
	// 		console.log("This value of i made a match = " + i);
	// 		console.log("It's suppose to display this = " + divArray[i].innerHTML);
	// 		displaySmall.innerHTML = "The Winner Is:";
	// 		displayLarge.innerHTML - divArray[i].innerHTML;
	// 	}
	// }

}





//Add event listeners to the array of squares
// for (var i = 0; i < 9; i++){
// 	divArray[i].addEventListener("click", function(i){
// 		handleClick(i);
// 	})
// }

divArray[0].addEventListener("click", function(){
	handleClick(0);
})

divArray[1].addEventListener("click", function(){
	handleClick(1);
})

divArray[2].addEventListener("click", function(){
	handleClick(2);
})

divArray[3].addEventListener("click", function(){
	handleClick(3);
})

divArray[4].addEventListener("click", function(){
	handleClick(4);
})

divArray[5].addEventListener("click", function(){
	handleClick(5);
})

divArray[6].addEventListener("click", function(){
	handleClick(6);
})

divArray[7].addEventListener("click", function(){
	handleClick(7);
})

divArray[8].addEventListener("click", function(){
	handleClick(8);
})



