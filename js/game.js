// to do:
// -add images to board
// -rotate through images with multiple clicks (use an array of images to cycle through? Each click moves through one on the array)
// -specify win conditions
// -check for win conditions
// -check for ties
// -if win  or tie conditions, end game
// -start game 
// 	starts with blank board
// 	allows clicking in boxes
// -reset game
// 	resets board to start game condition

console.log("game.js is working")
var playsMade = 0
var cellStatus = new Array();
var occupied = [];
var setPic;
var playerTurn = 0;
var winCon = [
	[0, 1, 2], 
	[3, 4, 5], 
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
	];

document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content loaded");
	// gameBoard();
	for(var i = 0; i < 9; i++){
		cellStatus[i] = false
	}

	
});


function selection(tabNum){
	console.log(playerTurn)
	setPic = document.getElementById(tabNum);

	if(cellStatus[tabNum] === false){
		if(playerTurn % 2 == 0){
			console.log("player 1");
			setPic.innerHTML = "<img src='./img/spiderman_face.jpg' width='75' height='auto'>"
			occupied[tabNum] = 'spidey'
			document.getElementById('announcerbooth').innerHTML = "Playing Now: Venom!"
			

		} else {
			console.log('player 2')
			setPic.innerHTML = "<img src='./img/venom_face.jpg' width='75' height='auto'>"
			occupied[tabNum] = 'venom'
			document.getElementById('announcerbooth').innerHTML = "Playing Now: Spiderman!"
			
		}
	} else {
		console.log('OCCUPIED!')
		document.getElementById('announcerbooth').innerHTML = "You can't do that!";
		playsMade--
		playerTurn--
		// if(playerTurn % 2 == 0){
		// 	document.getElementById('reminder').innerHTML = "It's still Venom's turn!";
		// } else {
		// 	document.getElementById('reminder').innerHTML = "It's still Spiderman's turn!";
		// }
	}
	playerTurn++;
	cellStatus[tabNum] = true;
	playsMade++;
	checkWin();

	if(playsMade >= 9){
		console.log("It's a tie!")
		document.getElementById('announcerbooth').innerHTML = "It's a draw!"
	}
		
}

function checkWin(hero){
	//console.log('Checking to see if ' + hero + ' won!')
	console.log (occupied)
	for(var x = 0; x < winCon.length; x++){
	if(//horizontal check
		occupied[winCon[x][0]] == 'spidey' && occupied[winCon[x][1]] == 'spidey' && occupied[winCon[x][2]] == 'spidey'){
		document.getElementById('announcerbooth').innerHTML = "Spiderman WINS!";
		document.getElementById('reminder').innerHTML = "";
		//document.removeEventListener('click', selection())
	} 
	else {
		document.getElementById('reminder').innerHTML = "I can't believe they're still going!";
	}

	if(//horizontal check
		occupied[winCon[x][0]] == 'venom' && occupied[winCon[x][1]] == 'venom' && occupied[winCon[x][2]] == 'venom'){
		document.getElementById('announcerbooth').innerHTML = "Venom WINS!";
		document.getElementById('reminder').innerHTML = "";
	// 	//document.removeEventListener('click', selection())
	 }
	else {
		document.getElementById('reminder').innerHTML = "I can't believe they're still going!";
	}
  }
}











