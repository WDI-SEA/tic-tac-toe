var row1 = ['Cell 1', 'Cell 2', 'Cell 3']; 
var row2 = ['Cell 4', 'Cell 5', 'Cell 6'];
var row3 = ['Cell 7', 'Cell 8', 'Cell 9'];
var x = "X";
var o = "O";
var whosTurn = 'X'

var Cell1;
var Cell2;
var Cell3;
var Cell4;
var Cell5;
var Cell6;
var Cell7;
var Cell8;
var Cell9;

function changeTurn() {
	console.log("whos turn: " + whosTurn )
	if (whosTurn == 'X') {
		whosTurn = 'O'
	} else {
		whosTurn = 'X'
	}
}

function checkWinningCombos() {
	console.log("evaluating: " + "Cell1:" + Cell1 + "Cell2:" + Cell2  + "Cell3:" + Cell3 + "Cell4:" + Cell4 + "Cell5:" + Cell5 + "Cell6:" + Cell6 + "Cell7:" + Cell7 + 
		"Cell8:" + Cell8 + "Cell9:" + Cell9);
	if ((Cell1 == whosTurn && Cell2 == whosTurn && Cell3 == whosTurn) || (Cell4 == whosTurn && Cell5 == whosTurn && Cell6 == whosTurn) || (Cell7 == whosTurn && Cell8 == whosTurn 
		&& Cell9 == whosTurn) || (Cell1 == whosTurn && Cell5 == whosTurn && Cell9 ==whosTurn) || (Cell3 == whosTurn && Cell5 == whosTurn && Cell7 == whosTurn) || (Cell1 == whosTurn
		&& Cell4 == whosTurn && Cell7 == whosTurn) || (Cell2 == whosTurn && Cell5 == whosTurn && Cell8 == whosTurn) || (Cell3 == whosTurn && Cell6 == whosTurn && Cell9 == whosTurn)) {
		alert("You win, mayne!");
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
	Cell3 = whosTurn;
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell4').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell4 = whosTurn;
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell5').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell5 = whosTurn
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell6').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell6 = whosTurn;
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell7').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell7 = whosTurn;
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell8').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell8 = whosTurn;
	checkWinningCombos();
	changeTurn();
})
document.getElementById('Cell9').addEventListener('click', function(event){
	event.target.innerHTML = whosTurn;
	Cell9 = whosTurn;
	checkWinningCombos();
	changeTurn();
})

document.getElementById('Clear My Grid, Honky!').addEventListener('click', function() {
	 var row1Children = document.getElementById('Row1').children;

	 for (var i = 0; i < row1Children.length; i++){
	 	row1Children[i].innerHTML = row1[i];
	 }

	 var row2Children = document.getElementById('Row2').children;

	 for (var i = 0; i < row2Children.length; i++){
	 	row2Children[i].innerHTML = row2[i];
	 }

	 var row3Children = document.getElementById('Row3').children;

	 for (var i = 0; i < row3Children.length; i++){
	 	row3Children[i].innerHTML = row3[i];
	 }
});




