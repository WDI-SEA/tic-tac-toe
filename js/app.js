var box1 = document.getElementById('box1').onclick;
var box2 = document.getElementById('box2').onclick;
var box3 = document.getElementById('box3').onclick;
var box4 = document.getElementById('box4').onclick;
var box5 = document.getElementById('box5').onclick;
var box6 = document.getElementById('box6').onclick;
var box7 = document.getElementById('box7').onclick;
var box8 = document.getElementById('box8').onclick;
var box9 = document.getElementById('box9').onclick;
var allBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]
var selectedXBoxes = [];
var selectedOBoxes = [];

// var reset = document.getElementById('reset');
// var resetBoard = 

// var numberOfClicks = c

// reset button

// click button 1) X or O shows up 2) switch turns 3) Play 2's Turn lights up
// if () {} else {}
// var boxClicked = addEventListener('click', function() {
// 	for (var i = 0; i <= 8; i++) {
// 		allBoxes[i] = function() {
// 			console.log('box' + [i + 1] + 'clicked');
// 		}
// 		allBoxes[i]();
// 	}
// })

// var boxClicked = addEventListener('click', function() {
// 	for (var i = 0; i <= 8; i++) {
// 		if (i >= 9) {
// 			break;
// 		}
// 		allBoxes = function() {
// 			console.log('box' + [i + 1] + 'clicked');
// 		}
// 		allBoxes();
// 	}
// })

switch (addEventListener('click', function() {
	case box1:allBoxes = function() {
		console.log('box' + [allBoxes + 1] + 'clicked');
	}
	allBoxes();

// 	console.log('box1 clicked');
// });
// box1Clicked();

// no button can be clicked more than once until reset

// win condition 123 456 789 147 258 369 159 357

// tie condition else
