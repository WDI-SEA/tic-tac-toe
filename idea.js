


var gameBoard = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
]


var compMove = function() {
	var move = function() {
		Math.floor(Math.random() * 9) + 1;
	}
	console.log(move)
	if(move === 1) {
		document.getElementById('r1c1').innerHTML = '<p> O </p>';
	} else if (move === 2) {
		document.getElementById('r2c1').innerHTML = '<p> O </p>';
	} else if (move === 3) {
		document.getElementById('r3c1').innerHTML = '<p> O </p>';
	} else if (move === 4) {
		document.getElementById('r1c2').innerHTML = '<p> O </p>';
	} else if (move === 5) {
		document.getElementById('r2c2').innerHTML = '<p> O </p>';
	} else if (move === 6) {
		document.getElementById('r3c2').innerHTML = '<p> O </p>';
	} else if (move === 7) {
		document.getElementById('r1c3').innerHTML = '<p> O </p>';
	} else if (move === 8) {
		document.getElementById('r2c3').innerHTML = '<p> O </p>';
	} else if (move === 9) {
		document.getElementById('r3c3').innerHTML = '<p> O </p>';
	}
}

