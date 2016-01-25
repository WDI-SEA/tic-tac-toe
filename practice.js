var count = 0;

var box1 = document.querySelector("#tile1");
var box2 = document.querySelector("#tile2");
var box3 = document.querySelector("#tile3");
var box4 = document.querySelector("#tile4");
var box5 = document.querySelector("#tile5");
var box6 = document.querySelector("#tile6");
var box7 = document.querySelector("#tile7");
var box8 = document.querySelector("#tile8");
var box9 = document.querySelector("#tile9");

function click(box) {
	box.addEventListener("click", function() {
		if (box.innerHTML === "") {
			
			if (count % 2 ===0) {

				box.style.background = "yellow";
				box.style.color = "green";
				box.innerHTML = "X";
				count++;
			} else {
				box.style.background = "green";
				box.style.color = "yellow";
				box.innerHTML = "O";
				count++;
			}
		}
	})
}

click(box1);
click(box2);
click(box3);
click(box4);
click(box5);
click(box6);
click(box7);
click(box8);
click(box9);

// clear cells when reset button clicked
var tiles = document.querySelectorAll('.tile');

document.getElementById('reset').addEventListener ('click', function (event) {
	event.preventDefault();
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].innerHTML = "";
		tiles[i].style.backgroundColor = "#eeeeee";
	}
} );

// document.getElementById('tile2').innerHTML = "?";

// document.getElementById('tile2').addEventListener('click', function (event) {
// 	event.preventDefault();
// 	if (turn == 1) {
// 		document.getElementById('tile2').innerHTML = "X";
// 		document.getElementById('tile2').style.backgroundColor = "green";
// 		document.getElementById('tile2').style.color = "yellow";
// 		turn += 1;
// 	} else {
// 		document.getElementById('tile2').innerHTML = "O";
// 		document.getElementById('tile2').style.backgroundColor = "yellow";
// 		document.getElementById('tile2').style.color = "green";
// 		turn -= 1;
// 	}
// } );
// do not delete above this line


/*
I tried looping it all below but kept getting this console error:
"Uncaught TypeError: Cannot set property 'innerHTML' of undefined"
*/


// var tiles = document.querySelectorAll('div');
// var turn = 1;

// for (i = 0; i < tiles.length; i++) {
// 	tiles[i].addEventListener('click', function (event) {
// 	event.preventDefault();
// 	if (turn == 1) {
// 		tiles[i].innerHTML = "X";
// 		tiles[i].style.backgroundColor = "green";
// 		tiles[i].style.color = "yellow";
// 		turn += 1;
// 	} else {
// 		tiles[i].innerHTML = "O";
// 		tiles[i].style.backgroundColor = "yellow";
// 		tiles[i].style.color = "green";
// 		turn -= 1;
// 	}
// } );
// }

// this works

// document.getElementById('tile1').innerHTML = "?";

// var turn = 1


// var tiles = document.getElementsByClassName('tile');
// console.log(tiles);


// tiles.addEventListener('click', function (event) {
// 	event.preventDefault();
// 	if (turn == 1) {
// 		document.getElementById('tile1').innerHTML = "X";
// 		document.getElementById('tile1').style.backgroundColor = "green";
// 		document.getElementById('tile1').style.color = "yellow";
// 		turn += 1;
// 	} else {
// 		document.getElementById('tile1').innerHTML = "O";
// 		document.getElementById('tile1').style.backgroundColor = "yellow";
// 		document.getElementById('tile1').style.color = "green";
// 		turn -= 1;
// 	}
// });

// var wasClicked = function(i){
// 	if (turn == 1) {
// 		document.getElementById('tile'+i).innerHTML = "X";
// 		document.getElementById('tile'+i).style.backgroundColor = "green";
// 		document.getElementById('tile'+i).style.color = "yellow";
// 		console.log("tile"+i+"was clicked");
// 		turn += 1;
// 	} else {
// 		document.getElementById('tile'+i).innerHTML = "O";
// 		document.getElementById('tile'+i).style.backgroundColor = "yellow";
// 		document.getElementById('tile'+i).style.color = "green";
// 		console.log("tile"+i+"was clicked");

// 		turn -= 1;
// 	