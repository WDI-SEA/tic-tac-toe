//Declare Variable
var allDivs = document.getElementsByTagName("div");
var topLeftTile = document.getElementById("topLeft");
var topCenterTile = document.getElementById("topCenter");
var topRightTile = document.getElementById("topRight");
var middleLeftTile = document.getElementById("middleLeft");
var middleCenterTile = document.getElementById("middleCenter");
var middleRightTile = document.getElementById("middleRight");
var bottomLeftTile = document.getElementById("bottomLeft");
var bottomCenterTile = document.getElementById("bottomCenter");
var bottomRightTile = document.getElementById("bottomRight");
var clickCount = 0;

var hello = function() {
	console.log("hello there");
}

//Add Event Listeners
topLeftTile.addEventListener("click", function) {
	clickCount += 1;
	if (topLeftTile.class = "blank") {
		if (clickCount % 2) {
			topLeftTile.backgroundColor = "red";
			topLeftTile.innerHTML = "X";
		} else {
			topLeftTile.backgroundColor = "green";
			topLeftTile.
		}
	}
}



/*var counter = function() {
	var numClicks = 0;
	for (var i = 0; i < allDivs.length; i++) {
		allDivs[i].addEventListener("click", function() {
			numClicks += 1;
			console.log(numClicks);
			return numClicks;
		});
	}
}

counter();*/