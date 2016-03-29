var board = ['Cell 1', 'Cell 2', 'Cell 3', 'Cell 4', 'Cell 5', 'Cell 6', 'Cell 7', 'Cell 8', 'Cell 9'];
var x = "X";
var o = "O";
var whosTurn = 'X'

var Cell1;
var Cell2;
var Cell3;

function changeTurn() {
	console.log("whos turn: " + whosTurn )
	if (whosTurn == 'X') {
		whosTurn = 'O'
	} else {
		whosTurn = 'X'
	}
}

function checkWinningCombos() {
	console.log("evaluating: " + "Cell1:" + Cell1 + " Cell2:" + Cell2  + " Cell3:" + Cell3)
	if (Cell1 == whosTurn && Cell2 == whosTurn && Cell3 == whosTurn) {
		console.log("winning  combo");
	} 
}

document.getElementById('Cell1').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell1 = whosTurn;
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell2').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell2 = whosTurn;
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell3').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell3 = whosTurn
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell4').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	changeTurn();
})
document.getElementById('Cell5').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	changeTurn();
})
document.getElementById('Cell6').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	changeTurn();
})
document.getElementById('Cell7').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	changeTurn();
})
document.getElementById('Cell8').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	changeTurn();
})
document.getElementById('Cell9').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	changeTurn();
})




