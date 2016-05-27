


var letsPlay = document.getElementById('start');

var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');

var turns = 0;

letsPlay.addEventListener('click', function(e) {
	console.log('We playin');
	one.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			one.innerHTML = 'X';
			turns++;
		} else {
			one.innerHTML = "O";
			turns++;
		}
	});
	two.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			two.innerHTML = 'X';
			turns++;
		} else {
			two.innerHTML = "O";
			turns++;
		}
	});
	three.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			three.innerHTML = 'X';
			turns++;
		} else {
			three.innerHTML = "O";
			turns++;
		}
	});
	four.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			four.innerHTML = 'X';
			turns++;
		} else {
			four.innerHTML = "O";
			turns++;
		}
	});
	five.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			five.innerHTML = 'X';
			turns++;
		} else {
			five.innerHTML = "O";
			turns++;
		}
	});
	six.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			six.innerHTML = 'X';
			turns++;
		} else {
			six.innerHTML = "O";
			turns++;
		}
	});
	seven.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			seven.innerHTML = 'X';
			turns++;
		} else {
			seven.innerHTML = "O";
			turns++;
		}
	});
	eight.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			eight.innerHTML = 'X';
			turns++;
		} else {
			eight.innerHTML = "O";
			turns++;
		}
	});
	nine.addEventListener ('click', function(e) {
		if (turns % 2 === 0) {
			nine.innerHTML = 'X';
			turns++;
		} else {
			nine.innerHTML = "O";
			turns++;
		}
	});
});



var startOver = document.getElementById('reset');

startOver.addEventListener('click', function(e) {
	one.innerHTML = '';
	two.innerHTML = '';
	three.innerHTML = '';
	four.innerHTML = '';
	five.innerHTML = '';
	six.innerHTML = '';
	seven.innerHTML = '';
	eight.innerHTML = '';
	nine.innerHTML = '';
})

// 


