var turn = 0;
var gameResult = false;
var classes = [".row1", ".row2", ".row3", ".col1", ".col2", ".col3", ".diag1", ".diag2"]


var reset = function () {
	location.reload();
}

var placeKey = function () {
	var key = null;
	console.log(this.classList)
	if ((!this.classList.contains("birdKey")) && (!this.classList.contains("treeKey"))) {
		if (turn % 2 === 0) {
			key = "treeKey";
			document.getElementById("tree1").classList.remove("keySelected");
			document.getElementById("bird1").classList.add("keySelected");


			} else { key = "birdKey";
			document.getElementById("bird1").classList.remove("keySelected");
			document.getElementById("tree1").classList.add("keySelected");			

		}
		this.classList.add(key);

		if (turn % 2 === 0) {
			this.dataset.score = 1;
		} else {
			this.dataset.score = 2;
		}
		turn ++;
		console.log("turn is " + turn);
		console.log(this.dataset.score);

		checkWin();
	}
}


var checkWin = function () { //example  ".row1"		
	var elements = null;
	var currentScore = null;	

		for (var i = 0; i < classes.length; i++) {
			elements = document.querySelectorAll(classes[i]); 
			currentScore = 0;
		
				for (var j = 0; j < elements.length; j++) {
					currentScore += parseInt(elements[j].dataset.score);
				}

			console.log(currentScore);

			if (currentScore === 3) {
				setTimeout(function () {
					document.getElementById('results').textContent = ('Tree Wins!')
				}, 50);
				document.getElementById("a1").removeEventListener("click",placeKey);
				document.getElementById("a2").removeEventListener("click",placeKey);
				document.getElementById("a3").removeEventListener("click",placeKey);
				document.getElementById("b1").removeEventListener("click",placeKey);
				document.getElementById("b2").removeEventListener("click",placeKey);
				document.getElementById("b3").removeEventListener("click",placeKey);
				document.getElementById("c1").removeEventListener("click",placeKey);
				document.getElementById("c2").removeEventListener("click",placeKey);
				document.getElementById("c3").removeEventListener("click",placeKey);
				return;
			} if (currentScore === 6) {
				setTimeout(function () {
					document.getElementById('results').textContent = ('Bird Wins!')
				}, 50);
				document.getElementById("a1").removeEventListener("click",placeKey);
				document.getElementById("a2").removeEventListener("click",placeKey);
				document.getElementById("a3").removeEventListener("click",placeKey);
				document.getElementById("b1").removeEventListener("click",placeKey);
				document.getElementById("b2").removeEventListener("click",placeKey);
				document.getElementById("b3").removeEventListener("click",placeKey);
				document.getElementById("c1").removeEventListener("click",placeKey);
				document.getElementById("c2").removeEventListener("click",placeKey);
				document.getElementById("c3").removeEventListener("click",placeKey);
				return;	
			} if (turn>=8) {
				setTimeout(function () {
					document.getElementById('results').textContent = ('Draw!')
				}, 50);
				document.getElementById("a1").removeEventListener("click",placeKey);
				document.getElementById("a2").removeEventListener("click",placeKey);
				document.getElementById("a3").removeEventListener("click",placeKey);
				document.getElementById("b1").removeEventListener("click",placeKey);
				document.getElementById("b2").removeEventListener("click",placeKey);
				document.getElementById("b3").removeEventListener("click",placeKey);
				document.getElementById("c1").removeEventListener("click",placeKey);
				document.getElementById("c2").removeEventListener("click",placeKey);
				document.getElementById("c3").removeEventListener("click",placeKey);
				return;
			}
}}



document.addEventListener("DOMContentLoaded", function(){
	document.getElementById("a1").addEventListener("click",placeKey);
	document.getElementById("a2").addEventListener("click",placeKey);
	document.getElementById("a3").addEventListener("click",placeKey);
	document.getElementById("b1").addEventListener("click",placeKey);
	document.getElementById("b2").addEventListener("click",placeKey);
	document.getElementById("b3").addEventListener("click",placeKey);
	document.getElementById("c1").addEventListener("click",placeKey);
	document.getElementById("c2").addEventListener("click",placeKey);
	document.getElementById("c3").addEventListener("click",placeKey);
	document.getElementById("resetButton").addEventListener("click",reset);
});
