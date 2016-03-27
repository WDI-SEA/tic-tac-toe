


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






letsPlay.addEventListener('click', function(e) {
	console.log('We playing');
	one.addEventListener ('click', function(e) {
		one.innerHTML = 'X';
	})
	two.addEventListener ('click', function(e) {
		two.innerHTML = 'O';
	})
});
	// var xTally = 0;
	// var oTally = 0;
	// // var i;
	// // var j;
	// for (i = 0; i <= 5; i += 2) {
	// 	if (one.addEventListener('click', function(e) {
	// 		return one.innerHTML = 'X';
	// 		xTally++;
	// 	})) else if (two.addEventListener('click', function(e) {
	// 		two.innerHTML = "X";
	// 		xTally++;
	// 	})) else if (three.addEventListener('click', function(e) {
	// 		three.innerHTML = "X";
	// 		xTally++;
	// 	})) else if (four.addEventListener('click', function(e) {
	// 		four.innerHTML = "X";
	// 		xTally++;
	// 	})) else if (five.addEventListener('click', function(e) {
	// 		five.innerHTML = "X";
	// 		xTally++;
	// 	})) else if (six.addEventListener('click', function(e) {
	// 		six.innerHTML = "X";
	// 		xTally++;
	// 	})) else if (seven.addEventListener('click', function(e) {
	// 		seven.innerHTML = "X";
	// 		xTally++;
	// 	})) else if (eight.addEventListener('click', function(e) {
	// 		eight.innerHTML = "X";
	// 		xTally++;
	// 	})) else if (nine.addEventListener('click', function(e) {
	// 		nine.innerHTML = "X";
	// 		xTally++;
	// 	}));

	// for (j = 1; j <= 5; j += 2) {
		
	// 	var.innerHTML = 'O';
	// 	oTally++;
	// }
// })




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


