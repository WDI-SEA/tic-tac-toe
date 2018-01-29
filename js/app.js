var moveCount = 1;

var nextMove = function () {
	moveCount ++;
	};



var player = document.getElementById('playername');
var reset = document.getElementById('resetbutton');

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');
var box6 = document.getElementById('box6');
var box7 = document.getElementById('box7');
var box8 = document.getElementById('box8');
var box9 = document.getElementById('box9');



var resetGame = function() {
	location.reload();
};



var switchPlayer = function() {
	if (moveCount % 2 === 0) {
		player.innerHTML = "Player 2";
		player.style.color = "red";
	} else {
		player.innerHTML = "Player 1";
		player.style.color = "blue";
	};
};





var boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];



///-----------------------------------------------------------------game ending

var blue = '<img src="img/x_blue.png">';
var red = '<img src="img/o_red.png">';

var didYouWin = function () {
 	if (
(box1.innerHTML === blue && box2.innerHTML === blue && box3.innerHTML === blue) ||
(box4.innerHTML === blue && box5.innerHTML === blue && box6.innerHTML === blue) ||
(box7.innerHTML === blue && box8.innerHTML === blue && box9.innerHTML === blue) ||
(box1.innerHTML === blue && box4.innerHTML === blue && box7.innerHTML === blue) ||
(box2.innerHTML === blue && box5.innerHTML === blue && box8.innerHTML === blue) ||
(box3.innerHTML === blue && box6.innerHTML === blue && box9.innerHTML === blue) ||
(box1.innerHTML === blue && box5.innerHTML === blue && box9.innerHTML === blue) ||
(box3.innerHTML === blue && box5.innerHTML === blue && box7.innerHTML === blue)||
(box1.innerHTML === red && box2.innerHTML === red && box3.innerHTML === red) ||
(box4.innerHTML === red && box5.innerHTML === red && box6.innerHTML === red) ||
(box7.innerHTML === red && box8.innerHTML === red && box9.innerHTML === red) ||
(box1.innerHTML === red && box4.innerHTML === red && box7.innerHTML === red) ||
(box2.innerHTML === red && box5.innerHTML === red && box8.innerHTML === red) ||
(box3.innerHTML === red && box6.innerHTML === red && box9.innerHTML === red) ||
(box1.innerHTML === red && box5.innerHTML === red && box9.innerHTML === red) ||
(box3.innerHTML === red && box5.innerHTML === red && box7.innerHTML === red) 
 		) {
 			alert("You win " + player.innerHTML + "!");
 			setInterval(resetGame, 1000);
 		} else if (moveCount === 10) {
 			alert('Tie!');
 			setInterval(resetGame, 1000);
 		};
	 };

//-------------------------------------------------------------------------------










var place = function() {
	if (moveCount % 2 === 0) {
		var markO = document.createElement('img');
		markO.setAttribute('src', 'img/o_red.png');
		this.appendChild(markO);
	} else {
		var markX = document.createElement('img');
		markX.setAttribute('src', 'img/x_blue.png');
		this.appendChild(markX);
	};
	nextMove();
	didYouWin();
	switchPlayer();
};


// for (i = 0; boxes.length; i++) {
// 	boxes[i].addEventListener('click', place, {once:true});
// };



// var place1 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box1.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box1.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
// };



// var place2 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box2.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box2.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
// };

// var place3 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box3.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box3.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
// };

// var place4 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box4.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box4.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
// };


// var place5 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box5.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box5.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
// };

// var place6 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box6.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box6.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
// };

// var place7 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box7.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box7.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
// };

// var place8 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box8.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box8.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
// };

// var place9 = function() {
// 	if (moveCount % 2 === 0) {
// 		var markO = document.createElement('img');
// 		markO.setAttribute('src', 'img/o_red.png');
// 		box9.appendChild(markO);
// 	} else {
// 		var markX = document.createElement('img');
// 		markX.setAttribute('src', 'img/x_blue.png');
// 		box9.appendChild(markX);
// 	};
// 	nextMove();
// 	didYouWin();
// 	switchPlayer();
	
// };




 // box1.addEventListener('click', place1, {once: true});
 // box2.addEventListener('click', place2, {once: true});
 // box3.addEventListener('click', place3, {once: true});
 // box4.addEventListener('click', place4, {once: true});
 // box5.addEventListener('click', place5, {once: true});
 // box6.addEventListener('click', place6, {once: true});
 // box7.addEventListener('click', place7, {once: true});
 // box8.addEventListener('click', place8, {once: true});
 // box9.addEventListener('click', place9, {once: true});


 
 
document.addEventListener("DOMContentLoaded", function() {

	reset.addEventListener('click', resetGame, {once:false});

	for (i = 0; i < boxes.length; i++) {
	boxes[i].addEventListener('click', place, {once:true});
	}

});

 
