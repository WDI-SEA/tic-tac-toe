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
var restart = document.getElementById("startOver");
var clickCount = 0;

var hello = function() {
	console.log("hello there");
}

var winner = function() {
	if (topLeftTile.className !== "blank") {
		if (
			(
				(topLeftTile.className === topCenterTile.className) && (topCenterTile.className === topRightTile.className)
			) || (
				(topLeftTile.className === middleLeftTile.className) && (middleLeftTile.className === bottomLeftTile.className)
			) || (
				(topLeftTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomRightTile.className)
			) 
		) {
			alert(topLeftTile.innerHTML + " is the winner!");
		}
	} else if (topRightTile.className !== "blank") {
		if (
			(
				(topRightTile.className === middleRightTile.className) && (middleRightTile.className === bottomRightTile.className)
			) || (	
				(topRightTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomLeftTile.className)
			)
		) {
			alert(topRightTile.innerHTML + " is the winner!");
		}	
	} else if (middleCenterTile.className !== "blank") {
		if (
			(
				(middleLeftTile.className === middleCenterTile.className) && (middleCenterTile.className === middleRightTile.className)
			) || (
				(topCenterTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomCenterTile.className)
			) 
		) {
		alert(middleCenterTile.innerHTML + " is the winner!")
		}
	} else if (bottomLeftTile.className !== "blank") {
		if (
			(bottomLeftTile.className === bottomCenterTile.className) && (bottomCenterTile.className === bottomRightTile.className)
		) {
			alert(bottomLeftTile.innerHTML + " is the Winner!");
		}
	} else if (clickCount === 9) {
		alert("It's a tie!");
	}
}

//Add Event Listeners
topLeftTile.addEventListener("click", function() {
	if (topLeftTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			topLeftTile.className = "red";
			topLeftTile.innerHTML = "X";
		} else {
			topLeftTile.className = "green";
			topLeftTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

topCenterTile.addEventListener("click", function() {
	if (topCenterTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			topCenterTile.className = "red";
			topCenterTile.innerHTML = "X";
		} else {
			topCenterTile.className = "green";
			topCenterTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

topRightTile.addEventListener("click", function() {
	if (topRightTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			topRightTile.className = "red";
			topRightTile.innerHTML = "X";
		} else {
			topRightTile.className = "green";
			topRightTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

middleLeftTile.addEventListener("click", function() {
	if (middleLeftTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			middleLeftTile.className = "red";
			middleLeftTile.innerHTML = "X";
		} else {
			middleLeftTile.className = "green";
			middleLeftTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

middleCenterTile.addEventListener("click", function() {
	if (middleCenterTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			middleCenterTile.className = "red";
			middleCenterTile.innerHTML = "X";
		} else {
			middleCenterTile.className = "green";
			middleCenterTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

middleRightTile.addEventListener("click", function() {
	if (middleRightTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			middleRightTile.className = "red";
			middleRightTile.innerHTML = "X";
		} else {
			middleRightTile.className = "green";
			middleRightTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

bottomLeftTile.addEventListener("click", function() {
	if (bottomLeftTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			bottomLeftTile.className = "red";
			bottomLeftTile.innerHTML = "X";
		} else {
			bottomLeftTile.className = "green";
			bottomLeftTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

bottomCenterTile.addEventListener("click", function() {
	if (bottomCenterTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			bottomCenterTile.className = "red";
			bottomCenterTile.innerHTML = "X";
		} else {
			bottomCenterTile.className = "green";
			bottomCenterTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

bottomRightTile.addEventListener("click", function() {
	if (bottomRightTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			bottomRightTile.className = "red";
			bottomRightTile.innerHTML = "X";
		} else {
			bottomRightTile.className = "green";
			bottomRightTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winner();
})

//Add "Start Over" button

restart.addEventListener("click", function() {
	clickCount = 0;
	for (var i = 0; i < allDivs.length; i++) {
		allDivs[i].className = "blank";
		allDivs[i].innerHTML = "";
	}
})

//Declare winner or tie



/*
for (var i = 0; i < allDivs.length; i++) {
	allDivs[i].addEventListener("click", function() {
		if (allDivs[i].className === "blank") {
			clickCount += 1;
			if (clickCount % 2) {
				allDivs[i].className = "red";
				allDivs[i].innerHTML = "X";
			} else {
				allDivs[i].className = "green";
				allDivs[i].innerHTML = "O";
			}
		} else {
			alert("That tile is already taken, please select another");
		}
	})
}*/