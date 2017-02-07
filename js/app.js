
var gameBlocks = ["topLeft", "topCenter", "topRight", "midLeft", "midCenter", "midRight", "botLeft", "botCenter", "botRight"]
var playBoxes = document.querySelectorAll(".squares");
var click = 0;

document.addEventListener("DOMContentLoaded", function() {
	
	//add click event listener to each box
	addListeners();

	//add click event for reset button
	document.getElementById("reset").addEventListener("click", resetBoard);


});

// document.getElementById("squares").addEventListener("click", clickBox)

function clickBox() {

// for (var i=0; i < playBoxes.length; i++) {
	// if (playBoxes.innerText) {
	if (click % 2 == 0) {
		this.innerHTML = "X";
		this.style.backgroundColor = "gray";
		// this.style.background = "url('/Users/rosswildin/GA/MavThumb.jpg')";
		// this.removeEventListener("click", clickBox);
	} else {
		this.innerHTML = "O";
		this.style.backgroundColor = "deeppink";
		// this.style.background = "url('/Users/rosswildin/GA/IceMan.gif') no-repeat center";
	}
click ++;
  
// 	if (playBoxes[i].innerText) {
// 		playBoxes[i].innerText = "O";
		this.removeEventListener("click", clickBox);

}		
// 	}
// 	else if (playBoxes[i].innerText) {
// 		playBoxes[i].innerText = "X";
// 		this.style.backgroundColor = "deeppink"; 
// 		this.removeEventListener("click", clickBox);
// 	}


// function clickBox2() {
// 	this.innerText = "O";
// 	this.style.backgroundColor = "gray";
// }
	
	// }
	// var click1 = function() {
	// 	this.innerHTML = "X";
	// }
	// var click2 = function() {
	// 	this.innerHTML = "O";
	// }
	
	// switch("click") {
	// 	case null:
	// 		this.innerText = "X";
	// 	break;
	// 	case "X":
	// 		this.innerText = "O";
	// 	break;
	// }


// var playBoxes = document.querySelectorAll(".squares");

function addListeners() {
	var playBoxes = document.querySelectorAll(".squares");

	for (var i=0; i < playBoxes.length; i++) {
		//add event listenter (need two things: 1. type of event 2. function to run when event happens)
		playBoxes[i].addEventListener("click", clickBox)
		// playBoxes[i].addEventListener("click", clickBox2)
	}
	// console.log("click");
}

function resetBoard (){
	//remove all inner HTML/CSS from playBoxes
	for (i = 0; i < playBoxes.length; i++) {
		playBoxes[i].innerHTML = "";
		playBoxes[i].backgroundColor = "transparent";
	}
}

