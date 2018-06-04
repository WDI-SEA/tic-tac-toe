var array = [
	document.getElementById("space11"),
	document.getElementById("space12"),
	document.getElementById("space13"),
	document.getElementById("space21"),
	document.getElementById("space22"),
	document.getElementById("space23"),
	document.getElementById("space31"),
	document.getElementById("space32"),
	document.getElementById("space33")
	];
var count = 0;
var playerOne = false;
var playerTwo = false;
var p1Count = 0;
var p2Count = 0;
var p1Score = document.getElementById("p1Score");
var p2Score = document.getElementById("p2Score");
var display = document.getElementById("turn");
var t1Display = function(){
	display.textContent = "Player One's Turn"
	display.style.color = "gold";
};
var t2Display = function(){
	display.textContent = "Player Two's Turn";
	display.style.color = "purple";
};
var tie = function(){
	display.textContent = "Bummer, it's a tie. Press Reset to try again!";
	display.style.color = "red";
};
p1Score.textContent = p1Count;
p2Score.textContent = p2Count;
t1Display();
var p1 = function () {
	playerOne = true;
	p1Count++;
	p1Score.textContent = p1Count;
	display.textContent = "Player One Wins!";
	display.style.color = "gold";
};
var p2 = function () {	
	playerTwo = false;
	p2Count++;
	p2Score.textContent = p2Count;
	display.textContent = "Player Two Wins!";
	display.style.color = "purple";
};

var stop = function() { 
	array[0].removeEventListener('click', firstCell);
	array[1].removeEventListener('click', secondCell);
	array[2].removeEventListener('click', thiCell);
	array[3].removeEventListener('click', fourCell);
	array[4].removeEventListener('click', fiveCell);
	array[5].removeEventListener('click', sixCell);
	array[6].removeEventListener('click', sevCell);
	array[7].removeEventListener('click', eightCell);
	array[8].removeEventListener('click', nineCell);
};

var firstCell = function() {
	if (count % 2 === 0) {
		array[0].textContent = "0";
		array[0].classList.add("purple");
		t2Display();
		if (array[0].textContent === "0" && array[1].textContent === "0" && array[2].textContent === "0") {
			p1();
			stop();
		} else if (array[0].textContent === "0" && array[3].textContent === "0" && array[6].textContent === "0") {
			p1();
			stop();
		} else if (array[0].textContent === "0" && array[4].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		}
	} else {
		array[0].textContent = "X";
		array[0].classList.add("gold");
		t1Display();
		if (array[0].textContent === "X" && array[1].textContent === "X" && array[2].textContent === "X") {
			p2();
			stop();
		} else if (array[0].textContent === "X" && array[3].textContent === "X" && array[6].textContent === "X") {
			p2();
			stop();
		} else if (array[0].textContent === "X" && array[4].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		}
	};	
	count++;
	console.log(count);
	array[0].removeEventListener('click', firstCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};
var secondCell = function() {
	if (count % 2 === 0) {
		array[1].textContent = "0";
		array[1].classList.add("purple");
		t2Display();
		if (array[0].textContent === "0" && array[1].textContent === "0" && array[2].textContent === "0") {
			p1();
			stop();
		} else if (array[1].textContent === "0" && array[4].textContent === "0" && array[7].textContent === "0") {
			p1();
			stop();
		}
	} else {
		array[1].textContent = "X";
		array[1].classList.add("gold");
		t1Display();
		if (array[0].textContent === "X" && array[1].textContent === "X" && array[2].textContent === "X") {
			p2();
			stop();
		} else if (array[1].textContent === "X" && array[4].textContent === "X" && array[7].textContent === "X") {
			p2();
			stop();
		}
	};
	count++;
	console.log(count);
	array[1].removeEventListener('click', secondCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};
var thiCell = function() {
	if (count % 2 === 0) {
		array[2].textContent = "0";
		array[2].classList.add("purple");
		t2Display();
		if (array[0].textContent === "0" && array[1].textContent === "0" && array[2].textContent === "0") {
			p1();
			stop();
		} else if (array[2].textContent === "0" && array[4].textContent === "0" && array[6].textContent === "0") {
			p1();
			stop();
		} else if (array[2].textContent === "0" && array[5].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		};
	} else {
		array[2].textContent = "X";
		array[2].classList.add("gold");
		t1Display();
		if (array[0].textContent === "X" && array[1].textContent === "X" && array[2].textContent === "X") {
			p2();
			stop();
		} else if (array[2].textContent === "X" && array[4].textContent === "X" && array[6].textContent === "X") {
			p2();
			stop();
		} else if (array[2].textContent === "X" && array[5].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		};
	};
	count++;
	console.log(count);
	array[2].removeEventListener('click', thiCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};
var fourCell = function() {
	if (count % 2 === 0) {
		array[3].textContent = "0";
		array[3].classList.add("purple");
		t2Display();
		if (array[3].textContent === "0" && array[4].textContent === "0" && array[5].textContent === "0") {
			p1();
			stop();
		} else if (array[0].textContent === "0" && array[3].textContent === "0" && array[6].textContent === "0") {
			p1();
			stop();
		}
	} else {
		array[3].textContent = "X";
		array[3].classList.add("gold");
		t1Display();
		if (array[3].textContent === "X" && array[4].textContent === "X" && array[5].textContent === "X") {
			p2();
			stop();
		} else if (array[0].textContent === "X" && array[3].textContent === "X" && array[6].textContent === "X") {
			p2();
			stop();
		}
	};
	count++;
	console.log(count);
	array[3].removeEventListener('click', fourCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};
var fiveCell = function() {
	if (count % 2 === 0) {
		array[4].textContent = "0";
		array[4].classList.add("purple");
		t2Display();
		if (array[3].textContent === "0" && array[4].textContent === "0" && array[5].textContent === "0") {
			p1();
			stop();
		} else if (array[1].textContent === "0" && array[4].textContent === "0" && array[7].textContent === "0") {
			p1();
			stop();
		} else if (array[0].textContent === "0" && array[4].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		} else if (array[2].textContent === "0" && array[4].textContent === "0" && array[6].textContent === "0") {
			p1();
			stop();
		}
	} else {
		array[4].textContent = "X";
		array[4].classList.add("gold");
		t1Display();
		if (array[3].textContent === "X" && array[4].textContent === "X" && array[5].textContent === "X") {
			p2();
			stop();
		} else if (array[1].textContent === "X" && array[4].textContent === "X" && array[7].textContent === "X") {
			p2();
			stop();
		} else if (array[0].textContent === "X" && array[4].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		} else if (array[2].textContent === "X" && array[4].textContent === "X" && array[6].textContent === "X") {
			p2();
			stop();
		}
	};
	count++;
	console.log(count);
	array[4].removeEventListener('click', fiveCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};
var sixCell = function() {
	if (count % 2 === 0) {
		array[5].textContent = "0";
		array[5].classList.add("purple");
		t2Display();
		if (array[3].textContent === "0" && array[4].textContent === "0" && array[5].textContent === "0") {
			p1();
			stop();
		} else if (array[2].textContent === "0" && array[5].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		};
	} else {
		array[5].textContent = "X";
		array[5].classList.add("gold");
		t1Display();
		if (array[3].textContent === "X" && array[4].textContent === "X" && array[5].textContent === "X") {
			p2();
			stop();
		} else if (array[2].textContent === "X" && array[5].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		};
	};
	count++;
	console.log(count);
	array[5].removeEventListener('click', sixCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};
var sevCell = function() {
	if (count % 2 === 0) {
		array[6].textContent = "0";
		array[6].classList.add("purple");
		t2Display();
		if (array[6].textContent === "0" && array[7].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		} else if (array[0].textContent === "0" && array[3].textContent === "0" && array[6].textContent === "0") {
			p1();
			stop();
		} else if (array[2].textContent === "0" && array[4].textContent === "0" && array[6].textContent === "0") {
			p1();
			stop();
		};
	} else {
		array[6].textContent = "X";
		array[6].classList.add("gold");
		t1Display();
		if (array[6].textContent === "X" && array[7].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		} else if (array[0].textContent === "X" && array[3].textContent === "X" && array[6].textContent === "X") {
			p2();
			stop();
		} else if (array[2].textContent === "X" && array[4].textContent === "X" && array[6].textContent === "X") {
			p2();
			stop();
		};
	};
	count++;
	console.log(count);
	array[6].removeEventListener('click', sevCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};
var eightCell = function() {
	if (count % 2 === 0) {
		array[7].textContent = "0";
		array[7].classList.add("purple");
		t2Display();
		if (array[6].textContent === "0" && array[7].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		} else if (array[1].textContent === "0" && array[4].textContent === "0" && array[7].textContent === "0") {
			p1();
			stop();
		}
	} else {
		array[7].textContent = "X";
		array[7].classList.add("gold");
		t1Display();
		if (array[6].textContent === "X" && array[7].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		} else if (array[1].textContent === "X" && array[4].textContent === "X" && array[7].textContent === "X") {
			p2();
			stop();
		}
	};
	count++;
	console.log(count);
	array[7].removeEventListener('click', eightCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};
var nineCell = function() {
	if (count % 2 === 0) {
		array[8].textContent = "0";
		array[8].classList.add("purple");
		t2Display();
		if (array[6].textContent === "0" && array[7].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		} else if (array[0].textContent === "0" && array[4].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		} else if (array[2].textContent === "0" && array[5].textContent === "0" && array[8].textContent === "0") {
			p1();
			stop();
		}
	} else {
		array[8].textContent = "X";
		array[8].classList.add("gold");
		t1Display();
		if (array[6].textContent === "X" && array[7].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		} else if (array[0].textContent === "X" && array[4].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		} else if (array[2].textContent === "X" && array[5].textContent === "X" && array[8].textContent === "X") {
			p2();
			stop();
		}
	};
	count++;
	console.log(count);
	array[8].removeEventListener('click', nineCell);
	if (count === 9 && playerOne === false && playerTwo === false) {
		tie();
	};
};

array[0].addEventListener('click', firstCell);
array[1].addEventListener('click', secondCell);
array[2].addEventListener('click', thiCell);
array[3].addEventListener('click', fourCell);
array[4].addEventListener('click', fiveCell);
array[5].addEventListener('click', sixCell);
array[6].addEventListener('click', sevCell);
array[7].addEventListener('click', eightCell);
array[8].addEventListener('click', nineCell);

document.querySelector('button').addEventListener('click', function(){
	count = 0;
	t1Display();
	for (var i = 0; i < array.length; i++) {
		array[i].textContent = "";
		array[i].classList.remove("purple");
		array[i].classList.remove("gold");
	}
	array[0].addEventListener('click', firstCell);
	array[1].addEventListener('click', secondCell);
	array[2].addEventListener('click', thiCell);
	array[3].addEventListener('click', fourCell);
	array[4].addEventListener('click', fiveCell);
	array[5].addEventListener('click', sixCell);
	array[6].addEventListener('click', sevCell);
	array[7].addEventListener('click', eightCell);
	array[8].addEventListener('click', nineCell);
});

