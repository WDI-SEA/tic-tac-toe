var round = 0;
var clickedBox = function (element){
	var turn = "";
	if (round % 2 === 0){
		turn = "X";
		round++;
		} else {
		turn = "O";
		round++;
	}
	if (element.classList.contains('clicked') === false){
		console.log("working." + element.clicked);
		element.innerHTML = turn;
		element.classList.add("clicked");
		console.log(element.classList.contains('clicked'));

}
};


var idOne = document.getElementById("1");
var idTwo = document.getElementById("2")
var idThree = document.getElementById("3")
var idFour = document.getElementById("4")
var idFive = document.getElementById("5")
var idSix = document.getElementById("6")
var idSeven = document.getElementById("7")
var idEight = document.getElementById("8")
var idNine = document.getElementById("9")

idOne.addEventListener("click", function (){clickedBox(idOne);});
idTwo.addEventListener("click", function (){clickedBox(idTwo);})
idThree.addEventListener("click", function (){clickedBox(idThree);});
idFour.addEventListener("click", function (){clickedBox(idFour);});
idFive.addEventListener("click", function (){clickedBox(idFive);});
idSix.addEventListener("click", function (){clickedBox(idSix);});
idSeven.addEventListener("click", function (){clickedBox(idSeven);});
idEight.addEventListener("click", function (){clickedBox(idEight);});
idNine.addEventListener("click", function (){clickedBox(idNine);});


