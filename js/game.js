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

var gameGrid = document.getElementsByTagName("td");
var hero = document.getElementsByClassName("spidey")
var playerTurn = 0;
var image = document.createElement("img")
// var boxNum = document.getElementbyId(index);

document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content loaded");
	var playerTurn = 0;
	// gameBoard();
	
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
	if(playerTurn === 0){
		console.log("player 1");
		image.setAttribute('src', './img/spiderman_face.jpg');
		image.setAttribute('width', '75px');
		image.setAttribute('height', 'auto');
		tabNum.appendChild(image);
		//tabNum.removeEventListener('click', selection());
				
		playerTurn = 1;

	} else {
		console.log('player 2')
		image.setAttribute('src', './img/venom_face.jpg');
		image.setAttribute('width', '75px');
		image.setAttribute('height', 'auto');
		tabNum.appendChild(image);
		//tabNum.removeEventListener('click', selection());

		playerTurn -= 1
	}
}