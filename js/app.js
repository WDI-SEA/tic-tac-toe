var allBoxes = document.querySelectorAll(".box");
var definePlayer = true
var recordClick = []


document.addEventListener("DOMContentLoaded", function() {
console.log('Hello frontend');



document.getElementById("start").addEventListener("click", start)


function start() {
	addBoxListeners();

}

// turns whatever was clicked either to X or O
function clicked() {
	// makes it X or O
	if (definePlayer === true) {
		this.id = "dougie";
		// turn off the even listener so I can't click the same box again
		this.removeEventListener("click", clicked)
		setArray();
		definePlayer = false;
	} else {
		this.id = "dp"
		// turn off the even listener so I can't click the same box again
		this.removeEventListener("click", clicked)
		definePlayer = true;
	}
}

function setArray() {
	if (this.id === "one") {
		recordClick[0] = 1;
		console.log(recordClick);
	} 
}
// record what was just clicked


//add event listeners to the boxes
function addBoxListeners() {
	for(var i = 0; i < allBoxes.length; i++) {
		console.log(allBoxes[i]);
		allBoxes[i].addEventListener("click", clicked);
	}
}



})


