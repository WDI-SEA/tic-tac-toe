var x = "X";
var o = "O";
var player = 1;
var cell = document.getElementsByTagName('input');
// console.log(getCells);

// play cell 1
cell[0].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[0].value = x;
		cell[0].style.backgroundColor = "green";
		cell[0].style.color = "yellow";
		player += 1;
	} else {
		cell[0].value = o;
		cell[0].style.backgroundColor = "yellow";
		cell[0].style.color = "green";
		player -= 1;
	}
} );

// // play cell 2
cell[1].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[1].value = x;
		cell[1].style.backgroundColor = "green";
		cell[1].style.color = "yellow";
		player += 1;
	} else {
		cell[1].value = o;
		cell[1].style.backgroundColor = "yellow";
		cell[1].style.color = "green";
		player -= 1;
	}
} );

// // play cell 3
cell[2].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[2].value = x;
		cell[2].style.backgroundColor = "green";
		cell[2].style.color = "yellow";
		player += 1;
	} else {
		cell[2].value = o;
		cell[2].style.backgroundColor = "yellow";
		cell[2].style.color = "green";
		player -= 1;
	}
} );

// // play cell 4
cell[3].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[3].value = x;
		cell[3].style.backgroundColor = "green";
		cell[3].style.color = "yellow";
		player += 1;
	} else {
		cell[3].value = o;
		cell[3].style.backgroundColor = "yellow";
		cell[3].style.color = "green";
		player -= 1;
	}
} );

// // play cell 5
cell[4].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[4].value = x;
		cell[4].style.backgroundColor = "green";
		cell[4].style.color = "yellow";
		player += 1;
	} else {
		cell[4].value = o;
		cell[4].style.backgroundColor = "yellow";
		cell[4].style.color = "green";
		player -= 1;
	}
} );

// // play cell 6
cell[5].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[5].value = x;
		cell[5].style.backgroundColor = "green";
		cell[5].style.color = "yellow";
		player += 1;
	} else {
		cell[5].value = o;
		cell[5].style.backgroundColor = "yellow";
		cell[5].style.color = "green";
		player -= 1;
	}
} );

// // play cell 7
cell[6].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[6].value = x;
		cell[6].style.backgroundColor = "green";
		cell[6].style.color = "yellow";
		player += 1;
	} else {
		cell[6].value = o;
		cell[6].style.backgroundColor = "yellow";
		cell[6].style.color = "green";
		player -= 1;
	}
} );

// // play cell 8
cell[7].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[7].value = x;
		cell[7].style.backgroundColor = "green";
		cell[7].style.color = "yellow";
		player += 1;
	} else {
		cell[7].value = o;
		cell[7].style.backgroundColor = "yellow";
		cell[7].style.color = "green";
		player -= 1;
	}
} );

// // play cell 9
cell[8].addEventListener('click', function (event) {
	event.preventDefault();
	if (player == 1) {
		cell[8].value = x;
		cell[8].style.backgroundColor = "green";
		cell[8].style.color = "yellow";
		player += 1;
	} else {
		cell[8].value = o;
		cell[8].style.backgroundColor = "yellow";
		cell[8].style.color = "green";
		player -= 1;
	}
} );

// clear cells when reset button clicked
document.getElementById('reset').reset();


