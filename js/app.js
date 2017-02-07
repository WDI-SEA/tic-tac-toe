


document.getElementsByClassName('tile')[0].onclick = function() {console.log('hello world');}

// var click = document.getElementsByClassName('.tile');

// var textBox = document.getElementsByClassName('.topcontainer')
var move = 0;

var board = document.getElementsByClassName('.board')

var x = [];

var o = [];

// click.addEventListener('click', add);

// function add(){
// 	console.log('hi');
// }

// click.onClick = console.log('hello');


// var click = document.querySelectorAll('.container button')

//---------------------

// tiles click

function clickTile() {
	for (var i = 0; i<board.children.length; i++) {
		board.children[i].addEventListener('click', isClicked)
	}
}

function clicked() {
	console.log(move);
	if (move%2 ===0) {
		var clickX = './img/playX.png';
		console.log('X')
	} else {
		var clickO = './img/playO.png';
		console.log('O')
	}
	move++
}

