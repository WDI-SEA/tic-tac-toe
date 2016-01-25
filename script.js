
var tiles = document.querySelectorAll(".tile")

var moves = 0


function tilesClicked(evt) {
	// console.log(evt);
	var tile = evt.target
	console.log(evt)
	if(tile.innerHTML === '') {
		moves = moves + 1;
		if(moves % 2 === 0) {
			tile.innerHTML = "o";
			tile.className += " odd";
		}
		else {
			tile.innerHTML = "x";
			tile.className += " even";
		}
	}
}

for (var i = 0; i < tiles.length; i++) {
	tiles[i].addEventListener('click', tilesClicked);
}

document.getElementById('button').addEventListener('click', function () {
	for (var i = 0; i < tiles.length; i++) {
		tiles[i].innerHTML = '';
		tiles[i].className = "tile";
		// if (this.classList.contains("even")) {
		// 	this.classList.remove("even");

		// }
		

	}
})










// function hello () {
// 	console.log('Hello')
// }

// hello()

// function printName(name) {
// 	console.log(name)

// }


// printName("")

// function sayHello(name) {
// 	console.log("Hello "  + name )

// }

// sayHello('Chocobo')



// function giveMeAName() {
// 	result = "name"

// }

// giveMeAName('')











