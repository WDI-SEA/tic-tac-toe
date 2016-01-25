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

//Declare functions to determine winner
var winnerTopLeft = function() {
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
}

var winnerTopCenter = function() {
	if (
		(
			(topLeftTile.className === topCenterTile.className) && (topCenterTile.className === topRightTile.className)
		)|| (
			(topCenterTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomCenterTile.className)
		) 
	) {
		alert(topCenterTile.innerHTML + " is the winner!");
	}
}

var winnerTopRight = function() {
	if (
		(
			(topLeftTile.className === topCenterTile.className) && (topCenterTile.className === topRightTile.className)
		) || (
			(topRightTile.className === middleRightTile.className) && (middleRightTile.className === bottomRightTile.className)
		) || (	
			(topRightTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomLeftTile.className)
		)
	) {
		alert(topRightTile.innerHTML + " is the winner!");
	}
}

var winnerMiddleLeft = function() {
	if (
		(
			(middleLeftTile.className === middleCenterTile.className) && (middleCenterTile.className === middleRightTile.className)
		) || (
			(topLeftTile.className === middleLeftTile.className) && (middleLeftTile.className === middleRightTile.className)
		)
	) {
		alert(middleLeftTile.innerHTML + " is the winner!");
	}
}

var winnerMiddleCenter = function() {
	if (
		(
			(middleLeftTile.className === middleCenterTile.className) && (middleCenterTile.className === middleRightTile.className)
		) || (
			(topCenterTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomCenterTile.className)
		) || (
			(topLeftTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomRightTile.className)
		) || (
			(topRightTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomLeftTile.className)
		)
	) {
		alert(middleCenterTile.innerHTML + " is the winner!");
	}
}

var winnerMiddleRight = function() {
	if (
		(
			(middleLeftTile.className === middleCenterTile.className) && (middleCenterTile.className === middleRightTile.className)
		) || (
			(topRightTile.className === middleRightTile.className) && (middleRightTile.className === bottomRightTile.className)
		)
	) {
		alert(middleRightTile.innerHTML + " is the winner!");
	}
}

var winnerBottomLeft = function() {
	if (
		(
			(bottomLeftTile.className === bottomCenterTile.className) && (bottomCenterTile.className === bottomRightTile.className)
		) || (
			(topLeftTile.className === middleLeftTile.className) && (middleLeftTile.className === bottomLeftTile.className)
		) || (
			(topRightTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomLeftTile.className)
		)
	) {
		alert(bottomLeftTile.innerHTML + " is the winner!");
	}
}

var winnerBottomCenter = function() {
	if (
		(
			(bottomLeftTile.className === bottomCenterTile.className) && (bottomCenterTile.className === bottomRightTile.className)
		) || (
			(topCenterTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomCenterTile.className)
		)
	) {
		alert(bottomCenterTile.innerHTML + " is the winner!");
	}
}

var winnerBottomRight = function() {
	if (
		(
			(bottomLeftTile.className === bottomCenterTile.className) && (bottomCenterTile.className === bottomRightTile.className)
		) || (
			(topRightTile.className === middleRightTile.className) && (middleRightTile.className === bottomRightTile.className)
		) || (
			(topLeftTile.className === middleCenterTile.className) && (middleCenterTile.className === bottomRightTile.className)
		)
	) {
		alert(bottomRightTile.innerHTML + " is the winner!");
	}
}



//Add Event Listeners
topLeftTile.addEventListener("click", function() {
	if (topLeftTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			topLeftTile.className = "X";
			topLeftTile.innerHTML = "X";
		} else {
			topLeftTile.className = "O";
			topLeftTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerTopLeft();
})

topCenterTile.addEventListener("click", function() {
	if (topCenterTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			topCenterTile.className = "X";
			topCenterTile.innerHTML = "X";
		} else {
			topCenterTile.className = "O";
			topCenterTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerTopCenter();
})

topRightTile.addEventListener("click", function() {
	if (topRightTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			topRightTile.className = "X";
			topRightTile.innerHTML = "X";
		} else {
			topRightTile.className = "O";
			topRightTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerTopRight();
})

middleLeftTile.addEventListener("click", function() {
	if (middleLeftTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			middleLeftTile.className = "X";
			middleLeftTile.innerHTML = "X";
		} else {
			middleLeftTile.className = "O";
			middleLeftTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerMiddleLeft();
})

middleCenterTile.addEventListener("click", function() {
	if (middleCenterTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			middleCenterTile.className = "X";
			middleCenterTile.innerHTML = "X";
		} else {
			middleCenterTile.className = "O";
			middleCenterTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerMiddleCenter();
})

middleRightTile.addEventListener("click", function() {
	if (middleRightTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			middleRightTile.className = "X";
			middleRightTile.innerHTML = "X";
		} else {
			middleRightTile.className = "O";
			middleRightTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerMiddleRight();
})

bottomLeftTile.addEventListener("click", function() {
	if (bottomLeftTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			bottomLeftTile.className = "X";
			bottomLeftTile.innerHTML = "X";
		} else {
			bottomLeftTile.className = "O";
			bottomLeftTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerBottomLeft();
})

bottomCenterTile.addEventListener("click", function() {
	if (bottomCenterTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			bottomCenterTile.className = "X";
			bottomCenterTile.innerHTML = "X";
		} else {
			bottomCenterTile.className = "O";
			bottomCenterTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerBottomCenter();
})

bottomRightTile.addEventListener("click", function() {
	if (bottomRightTile.className === "blank") {
		clickCount += 1;
		if (clickCount % 2) {
			bottomRightTile.className = "X";
			bottomRightTile.innerHTML = "X";
		} else {
			bottomRightTile.className = "O";
			bottomRightTile.innerHTML = "O";
		}
	} else {
		alert("That tile is already taken, please select another");
	}
	winnerBottomRight();
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


/*var winner = function() {
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
}*/