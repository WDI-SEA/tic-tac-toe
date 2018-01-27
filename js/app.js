var turn = 0;
var gameResult = false;

var reset = function () {

}

var placeKey = function () {
	var key = null;
	if (turn % 2 === 0) {
		key = "treeKey"
		} else {key = "birdKey"
	}
	this.classList.add(key);
	turn ++;
}

var checkWin = function () {

}

var displayResult = function () {

}





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
})
