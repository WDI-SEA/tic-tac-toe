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
var gameGrid = document.getElementsByTagName("td");
var hero = document.getElementsByClassName("spidey")
var cellStatus = new Array();
var occupied = new Array ();
var setPic;
var image = document.createElement("img")
var playerTurn = 0;
// var boxNum = document.getElementbyId(index);

document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content loaded");
	// gameBoard();
	for(var i = 0; i < 9; i++){
		cellStatus[i] = false
	}

	
});

// function gameBoard(){
// 	//makes board clickable 
// 	for(var i = 0; i < gameGrid.length; i++){
// 		var image = gameGrid[i].getElementsByClassName('spidey');
// 		gameGrid[i].addEventListener("click", function(){
// 			image[i].setAttribute('display', 'block');
// 			console.log("Box was clicked");
// 		})
// 	}
// } 

function selection(tabNum){
	console.log(playerTurn)
	setPic = document.getElementById(tabNum);

	if(cellStatus[tabNum] === false){
		if(playerTurn % 2 == 0){
			console.log("player 1");
			setPic.innerHTML = "<img src='./img/spiderman_face.jpg' width='75' height='auto'>"
			// image.setAttribute('src', './img/spiderman_face.jpg');
			// image.setAttribute('width', '75px');
			// image.setAttribute('height', 'auto');
			// setPic.appendChild(image);
			occupied[tabNum] = 'spidey'
			

		} else {
			console.log('player 2')
			setPic.innerHTML = "<img src='./img/venom_face.jpg' width='75' height='auto'>"
			// image.setAttribute('src', './img/venom_face.jpg');
			// image.setAttribute('width', '75px');
			// image.setAttribute('height', 'auto');
			// setPic.appendChild(image);
			occupied[tabNum] = 'venom'
			
		}
	} else {
		console.log('OCCUPIED!')
	}
	playerTurn++;
	cellStatus[tabNum] = true;
		
}











