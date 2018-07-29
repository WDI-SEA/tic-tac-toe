console.log('Hello frontend');
var mavIntro;
var aryaIntro;
var gameIntro;
var clickSound;
var maverick;
var arya;
var mavMoves = [];
var aryaMoves = [];

document.addEventListener('DOMContentLoaded', function(){
	console.log('DOM got loaded');
	document.getElementById('selection').addEventListener('click', start);

	pOne = document.getElementById('selection').addEventListener('click', pOne = this);

});

function start() {
	console.log('starting game');
	gameIntro = document.getElementById('introSound');
	gameIntro.play();
}

// function endTurn()

// function clickSquare()
