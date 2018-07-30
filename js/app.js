console.log('Hello frontend');
var mavIntro;
var aryaIntro;
var gameIntro;
var clickSound;
var playerOne;
var playerTwo;
var oneTurns = [];
var twoTurns = [];
var box = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];
var clicked = [];
var diagonalWin = [];
var rowWin = [];
var colWin = [];

document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM got loaded');
	document.getElementById('selection').addEventListener('click', start);
});


//<input type='button' id="button1" value='first button' onclick="clickMe(this)"/>
//<input type='button' id="button2" value='second button' onclick="clickMe(this)"/>


//function pOne(e){
 
    //alert("You have clicked button id = "+e.id+" and button value = "+document.getElementById(e.id).value);
 
//}

function start() {
	console.log('starting game');
	gameIntro = document.getElementById('introSound');
	gameIntro.play();
}


function currentCard(e){
 
    alert("You have clicked td id = "+e.id+" and td value = "+document.getElementById(e.id).value);
 
}
//document.getElementByClassName('box').addEventListener('click', clicked);
//console.log('line27');

//event listener for cell click then into clicked function

// function clicked(A3) {
// var turn = 'A3';
// oneTurns.push(turn);
// clicked.push(turn);
// box.pop(turn);
// console.log(oneTurns.length);
// }

// if it is in clicked array, break and send the message to pick again
// if id isn't in clicked array
// send the id to oneTurns array
// check for win conditions (all matches as or comparison)

// if win, go to the gameWon function
// if tie, go to the gameTie function

// gameWon()
// alert saying it's won

// gameTie
// alert saying it's tie

// Later, set up the player object.



// function clickSquare()

