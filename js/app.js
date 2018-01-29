console.log("hello front end");

var player1 = false;
var player2 = false;

// var turn = 0;
// var gameResult = false;
var markBox = function() {
if (player1) {
	// this.setAttribute("background-color", "red"); 
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
})

// if (player1) {
// 	this.setAttribute("background-color", "red"); 
// 	// do this for p1
// } else {
// 	this.setAttribute("background-color", "green"); 
// 	// do this for p2
// }