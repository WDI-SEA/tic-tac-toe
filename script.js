var round = 0;
var clickedBox = function (element){
	var turn = "";
	if ((element.classList.contains('blue') === false)&& 
		(element.classList.contains('yellow') === false)){
		if (round % 2 === 0){
			turn = "X";
			element.classList.add("blue");
			round++;
		} else {
			turn = "O";
			round++;
			element.classList.add("yellow");
		}
		element.innerHTML = turn;
		winner()
	}	
};
var winner = function (){

	if ((document.getElementById("1").innerHTML === "X")
		&& (document.getElementById("2").innerHTML === "X")
		&& (document.getElementById("3").innerHTML === "X")) {
		document.getElementById("winner").innerHTML = "X is the Winner!";
	} else if ((document.getElementById("1").innerHTML === "O")
		&& (document.getElementById("2").innerHTML === "O")
		&& (document.getElementById("3").innerHTML === "O")) {
		document.getElementById("winner").innerHTML = "O is the Winner!";
	} else if ((document.getElementById("4").innerHTML === "O")
		&& (document.getElementById("5").innerHTML === "O")
		&& (document.getElementById("6").innerHTML === "O")) {
		document.getElementById("winner").innerHTML = "O is the Winner!";
	} else if ((document.getElementById("4").innerHTML === "X")
		&& (document.getElementById("5").innerHTML === "X")
		&& (document.getElementById("6").innerHTML === "X")) {
		document.getElementById("winner").innerHTML = "X is the Winner!";
	}else if ((document.getElementById("7").innerHTML === "X")
		&& (document.getElementById("8").innerHTML === "X")
		&& (document.getElementById("9").innerHTML === "X")) {
		document.getElementById("winner").innerHTML = "X is the Winner!";
	}else if ((document.getElementById("7").innerHTML === "O")
		&& (document.getElementById("8").innerHTML === "O")
		&& (document.getElementById("9").innerHTML === "O")) {
		document.getElementById("winner").innerHTML = "O is the Winner!";
	}else if ((document.getElementById("1").innerHTML === "X")
		&& (document.getElementById("4").innerHTML === "X")
		&& (document.getElementById("7").innerHTML === "X")) {
		document.getElementById("winner").innerHTML = "X is the Winner!";
	}else if ((document.getElementById("1").innerHTML === "O")
		&& (document.getElementById("4").innerHTML === "O")
		&& (document.getElementById("7").innerHTML === "O")) {
		document.getElementById("winner").innerHTML = "O is the Winner!";
	}else if ((document.getElementById("2").innerHTML === "X")
		&& (document.getElementById("5").innerHTML === "X")
		&& (document.getElementById("8").innerHTML === "X")) {
		document.getElementById("winner").innerHTML = "X is the Winner!";
	}else if ((document.getElementById("2").innerHTML === "O")
		&& (document.getElementById("5").innerHTML === "O")
		&& (document.getElementById("8").innerHTML === "O")) {
		document.getElementById("winner").innerHTML = "O is the Winner!";
	}else if ((document.getElementById("3").innerHTML === "X")
		&& (document.getElementById("6").innerHTML === "X")
		&& (document.getElementById("9").innerHTML === "X")) {
		document.getElementById("winner").innerHTML = "X is the Winner!";
	}else if ((document.getElementById("3").innerHTML === "O")
		&& (document.getElementById("6").innerHTML === "O")
		&& (document.getElementById("9").innerHTML === "O")) {
		document.getElementById("winner").innerHTML = "O is the Winner!";
	}else if ((document.getElementById("1").innerHTML === "X")
		&& (document.getElementById("5").innerHTML === "X")
		&& (document.getElementById("9").innerHTML === "X")) {
		document.getElementById("winner").innerHTML = "X is the Winner!";
	}else if ((document.getElementById("1").innerHTML === "O")
		&& (document.getElementById("5").innerHTML === "O")
		&& (document.getElementById("9").innerHTML === "O")) {
		document.getElementById("winner").innerHTML = "O is the Winner!";
	}else if ((document.getElementById("3").innerHTML === "X")
		&& (document.getElementById("5").innerHTML === "X")
		&& (document.getElementById("7").innerHTML === "X")) {
		document.getElementById("winner").innerHTML = "X is the Winner!";
	}else if ((document.getElementById("3").innerHTML === "O")
		&& (document.getElementById("5").innerHTML === "O")
		&& (document.getElementById("7").innerHTML === "O")) {
		document.getElementById("winner").innerHTML = "O is the Winner!";
	}

};


var idOne = document.getElementById("1");
var idTwo = document.getElementById("2");
var idThree = document.getElementById("3");
var idFour = document.getElementById("4");
var idFive = document.getElementById("5");
var idSix = document.getElementById("6");
var idSeven = document.getElementById("7");
var idEight = document.getElementById("8");
var idNine = document.getElementById("9");

idOne.addEventListener("click", function (){clickedBox(idOne);});
idTwo.addEventListener("click", function (){clickedBox(idTwo);})
idThree.addEventListener("click", function (){clickedBox(idThree);});
idFour.addEventListener("click", function (){clickedBox(idFour);});
idFive.addEventListener("click", function (){clickedBox(idFive);});
idSix.addEventListener("click", function (){clickedBox(idSix);});
idSeven.addEventListener("click", function (){clickedBox(idSeven);});
idEight.addEventListener("click", function (){clickedBox(idEight);});
idNine.addEventListener("click", function (){clickedBox(idNine);});

document.getElementById("clear").addEventListener("click", function() {
	var count = 0;
	document.getElementById('winner').innerHTML = '';
	var clicked = document.querySelectorAll('span');
	for (var i = 0; i < clicked.length; i++){
		clicked[i].innerHTML = ' ';
		clicked[i].classList.remove('blue');
		clicked[i].classList.remove('yellow');
	}

});

