console.log("hello front end");

var turn = 0;
var gameResult = false;

var reset = function () {
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
 	// document.getElementById("resetButton").addEventListener("click",reset);
})