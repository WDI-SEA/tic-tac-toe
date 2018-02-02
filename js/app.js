console.log("hello front end");

var player1 = false;
var player2 = false;
var winGame = [];
var tLeft = document.getElementById("tLeft");
var tMiddle = document.getElementById("tMiddle");
var tRight = document.getElementById("tRight");
var cLeft = document.getElementById("cLeft");
var cMiddle = document.getElementById("cMiddle");
var cRight = document.getElementById("cRight");
var bLeft = document.getElementById("bLeft");
var bMiddle = document.getElementById("bMiddle");
var bRight = document.getElementById("bRight");




var markBox = function () {	
	if (player1) {
	this.style.backgroundColor = "red"; 
	console.log("clicked" + this);
	player1 = false;
	player2 = true;
	this.removeEventListener("click", markBox);
	// do this for p1
} else {
	this.style.backgroundColor = "green";
	console.log("player2" + this);
	player2 = false;
	player1 = true;
	this.removeEventListener("click", markBox);
	// do this for p2
}
	//mark the box
}

switch (true) {
  case 'tRight':
  
    console.log('we have a winner!');
    break;
  case (tLeft === tMiddle && tMiddle === tRight): 
    console.log('we have a winner!');
    break;
  case (cLeft === cMiddle && cMiddle === cRight):  
    console.log('we have a winner!');
    break;
  case (bLeft === bMiddle && bMiddle === bRight): 
    console.log('we have a winner!');
    break;
  case (tLeft === cLeft && cLeft === bLeft):  
    console.log('we have a winner!');
    break;
  case (tMiddle === cMiddle && cMiddle === bMiddle): 
    console.log('we have a winner!');
    break;
  case (tRight === cRight && cRight === bRight):   
    console.log('we have a winner!');
    break;
  case (tLeft === cMiddle && cMiddle === bRight): 
    console.log('we have a winner!');
    break;
  case (bLeft === cMiddle && cMiddle === tRight): 
    console.log('we have a winner!');
    break;
  default:
    console.log('we have a draw!');
}





document.addEventListener("DOMContentLoaded", function(){
 	document.getElementById("tRight").addEventListener("click", markBox);
 	document.getElementById("tMiddle").addEventListener("click", markBox);
 	document.getElementById("tLeft").addEventListener("click", markBox);
 	document.getElementById("cRight").addEventListener("click", markBox);
 	document.getElementById("cMiddle").addEventListener("click", markBox);
 	document.getElementById("cLeft").addEventListener("click", markBox);
 	document.getElementById("bRight").addEventListener("click", markBox);
 	document.getElementById("bMiddle").addEventListener("click", markBox);
 	document.getElementById("bLeft").addEventListener("click", markBox);
 	player1 = true;
});

// if (player1) {
// 	this.setAttribute("background-color", "red"); 
// 	// do this for p1
// } else {
// 	this.setAttribute("background-color", "green"); 
// 	// do this for p2
// }

