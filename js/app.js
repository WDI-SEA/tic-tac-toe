console.log('Hello frontend');
document.addEventListener('DOMContentLoaded', function() {


var boxset = [];

var box1 = document.getElementById("b1");
var box2 = document.getElementById("b2");
var box3 = document.getElementById("b3");
var box4 = document.getElementById("b4");
var box5 = document.getElementById("b5");
var box6 = document.getElementById("b6");
var box7 = document.getElementById("b7");
var box8 = document.getElementById("b8");
var box9 = document.getElementById("b9");















var changeLetter = function () {
	if (boxset.value === undefined) {
		box1.textContent = "X";
		console.log("this function works")
	} else {
		return "this box has been played, idiot"
		alert("this box has been played, idiot")
		console.log("this box has been played")
	}
}


document.addEventListener("click", changeLetter);



})