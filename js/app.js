var top1 = document.getElementById('top-1');
var top2 = document.getElementById('top-2');
var top3 = document.getElementById('top-3');
var middle1 = document.getElementById('middle-1');
var middle2 = document.getElementById('middle-2');
var middle3 = document.getElementById('middle-3');
var bottom1 = document.getElementById('bottom-1');
var bottom2 = document.getElementById('bottom-2');
var bottom3 = document.getElementById('bottom-3');


var currentPlayer = 'x'
var currentPlayero = '<img src="img/o.jpg" alt="o" />'
var currentPlayerx = '<img src="img/x.jpg" alt="x" />'
// var board = [
// [0, 0, 0], 
// [0, 0, 0], 
// [0, 0, 0]
// ];

var newGame = document.getElementById('btn');
// var board = ['top-1', 'top-2', 'top-3', 'middle-1', 'middle-2', 'middle-3', 'bottom-1', 'bottom-2', 'bottom-3'];

top1.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		top1.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		top1.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});


top2.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		top2.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		top2.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});

top3.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		top3.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		top3.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});

middle1.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		middle1.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		middle1.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});

middle2.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		middle2.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		middle2.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});

middle3.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		middle3.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		middle3.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});

bottom1.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		bottom1.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		bottom1.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});

bottom2.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		bottom2.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		bottom2.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});

bottom3.addEventListener('click', function(){
	alert('current player is: ' + currentPlayer)

	if (currentPlayer === 'x') {
		bottom3.innerHTML = currentPlayerx;
		currentPlayer = 'o'
	} else if (currentPlayer === 'o') {
		bottom3.innerHTML = currentPlayero;
		currentPlayer = 'x';
	}

});


newGame.addEventListener('click', function(){
	
});





    // document.getElementById("demo").innerHTML = "Hello World";
// 