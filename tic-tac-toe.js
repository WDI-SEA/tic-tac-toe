cell = document.getElementsByTagName('td');
	// console.log(cell);
// var turn = "X";



// do not delete
for (i = 0; i < cell.length; i++) {
 cell[i].addEventListener('click', function (event) {
	event.preventDefault();
	console.log('click worked');
	} );
 	// cell[i].innerHTML = "?";
 	if (cell[i].innerHTML = "X") {
 		cell[i].innerHTML = "O";
 	} else {
 		cell[i].innerHTML = "X";
 	}
}

