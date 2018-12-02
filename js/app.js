
var startButtonText = 'start game!'
var currentPlayer = '';
var ticTacState = 'neutral';
var toeState = 'neutral';

var getPlayer = function() {
	if (Math.random() > .5) {
		currentPlayer = 'ticTac';
	} else {
		currentPlayer = 'toe';
	};
}
getPlayer();
console.log('player is ', currentPlayer);


document.getElementById("A1n").addEventListener('click', clickedCell);
document.getElementById("A2").addEventListener('click', clickedCell);
document.getElementById("A3p").addEventListener('click', clickedCell);
document.getElementById("B1").addEventListener('click', clickedCell);
document.getElementById("B2pn").addEventListener('click', clickedCell);
document.getElementById("B3").addEventListener('click', clickedCell);
document.getElementById("C1p").addEventListener('click', clickedCell);
document.getElementById("C2").addEventListener('click', clickedCell);
document.getElementById("C3n").addEventListener('click', clickedCell);
document.getElementById("toeAvatar").addEventListener('click', clickedAvatar);
document.getElementById("ticTacAvatar").addEventListener('click', clickedAvatar);


function updatePlayerScore(cell) {
	console.log('passed', cell, 'to updatePlayerScore function');

}


function clickedCell(event) {
	//check whether cell is already occupied;
	// if(this.id.occupier != '') {
	var cellObject = this.id;
	console.log('blah' + cellObject);
	console.log('please' + A1n.occupier);
	console.log(cellObject.occupier);
	// } else {
	  console.log("you clicked on " + this.id);
	  //updatePlayerScore(this.id);
	// }
}

function clickedAvatar(event) {
	console.log("you clicked on " + this.id);
}

var A1n = {
	occupier:'ticTac',
	rowId: 'A',
	colId: 1,
	slopeN: 'n',
	slopeP: ''
}

