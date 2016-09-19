document.addEventListener('DOMContentLoaded', function() {
	console.log('loaded up the DOM');

var x = "X";
var o = "O";
var turn = 2;

var t1 = document.getElementById('t1');
var t2 = document.getElementById('t2');
var t3 = document.getElementById('t3');
var t4 = document.getElementById('t4');
var t5 = document.getElementById('t5');
var t6 = document.getElementById('t6');
var t7 = document.getElementById('t7');
var t8 = document.getElementById('t8');
var t9 = document.getElementById('t9');

var gBoard = {
	sq1: null,
	sq2: null,
	sq3: null,
	sq4: null,
	sq5: null,
	sq6: null,
	sq7: null,
	sq8: null,
	sq9: null,
}

var newGame = document.getElementById('reset');



	t1.addEventListener('click', function(event) {
		if (t1.textContent === "") {
			if (turn % 2 === 0) {
				t1.textContent = 'X';
				gBoard.sq1 = 'X';
				turn ++;
				document.getElementById('t1').style.color='blue';
				
			}
			else {
				t1.textContent = 'O';
				gBoard.sq1= 'O';
				turn ++;
				document.getElementById('t1').style.color= "yellow";
				
			}
		}
		winner()
	});
	t2.addEventListener('click', function(event) {
		if (t2.textContent === "") {
			if (turn % 2 === 0) {
				t2.textContent = 'X';
				gBoard.sq2= 'X';
				turn ++;
				document.getElementById('t2').style.color='blue';
				
			}
			else {
				t2.textContent = 'O';
				gBoard.sq2= 'O';
				turn ++;
				document.getElementById('t2').style.color= "yellow";
				
			}
		}
		winner()
	});
	t3.addEventListener('click', function(event) {
		if (t3.textContent === "") {
			if (turn % 2 === 0) {
				t3.textContent = 'X';
				gBoard.sq3= 'X';
				turn ++;
				document.getElementById('t3').style.color='blue';
				
			}
			else {
				t3.textContent = 'O';
				gBoard.sq3= 'O';
				turn ++;
				document.getElementById('t3').style.color= "yellow";
				
			}
		}
		winner()
	});
	t4.addEventListener('click', function(event) {
		if (t4.textContent === "") {
			if (turn % 2 === 0) {
				t4.textContent = 'X';
				gBoard.sq4= 'X';
				turn ++;
				document.getElementById('t4').style.color='blue';
				
			}
			else {
				t4.textContent = 'O';
				gBoard.sq4= 'O';
				turn ++;
				document.getElementById('t4').style.color= "yellow";
				
			}
		}
		winner()
	});
	t5.addEventListener('click', function(event) {
		if (t5.textContent === "") {
			if (turn % 2 === 0) {
				t5.textContent = 'X';
				gBoard.sq5= 'X';
				turn ++;
				document.getElementById('t5').style.color='blue';
				
			}
			else {
				t5.textContent = 'O';
				gBoard.sq5= 'O';
				turn ++;
				document.getElementById('t5').style.color= "yellow";
				
			}
		}
		winner()
	});
	t6.addEventListener('click', function(event) {
		if (t6.textContent === "") {
			if (turn % 2 === 0) {
				t6.textContent = 'X';
				gBoard.sq6= 'X';
				turn ++;
				document.getElementById('t6').style.color='blue';
				
			}
			else {
				t6.textContent = 'O';
				gBoard.sq6= 'O';
				turn ++;
				document.getElementById('t6').style.color= "yellow";
				
			}
		}
		winner()
	});
	t7.addEventListener('click', function(event) {
		if (t7.textContent === "") {
			if (turn % 2 === 0) {
				t7.textContent = 'X';
				gBoard.sq7= 'X';
				turn ++;
				document.getElementById('t7').style.color='blue';
				
			}
			else {
				t7.textContent = 'O';
				gBoard.sq7= 'O';
				turn ++;
				document.getElementById('t7').style.color= "yellow";
				
			}
		}
		winner()
	});
	t8.addEventListener('click', function(event) {
		if (t8.textContent === "") {
			if (turn % 2 === 0) {
				t8.textContent = 'X';
				gBoard.sq8= 'X';
				turn ++;
				document.getElementById('t8').style.color='blue';
				
			}
			else {
				t8.textContent = 'O';
				gBoard.sq8= 'O';
				turn ++;
				document.getElementById('t8').style.color= "yellow";
				
			}
		}
		winner()
	});
	t9.addEventListener('click', function(event) {
		if (t9.textContent === "") {
			if (turn % 2 === 0) {
				t9.textContent = 'X';
				gBoard.sq9= 'X';
				turn ++;
				document.getElementById('t9').style.color='blue';
				
			}
			else {
				t9.textContent = 'O';
				gBoard.sq9= 'O';
				turn ++;
				document.getElementById('t9').style.color= "yellow";
				
			}
		}
		winner()
	});


newGame.addEventListener('click', function(event) {
	newGame.textContent = location.reload();
})

function winner(){
	if(gBoard.sq1 === 'X' && gBoard.sq2 === 'X' && gBoard.sq3 ==='X') {
		alert('X WINS!');
	}
	if(gBoard.sq1 === 'O' && gBoard.sq2 === 'O' && gBoard.sq3 ==='O') {
		alert('O WINS!');
	}
	if(gBoard.sq4 === 'X' && gBoard.sq5 === 'X' && gBoard.sq6 ==='X') {
		alert('X WINS!');
	}
	if(gBoard.sq4 === 'O' && gBoard.sq5 === 'O' && gBoard.sq6 ==='O') {
		alert('O WINS!');
	}
	if(gBoard.sq7 === 'X' && gBoard.sq8 === 'X' && gBoard.sq9 ==='X') {
		alert('X WINS!');
	}
	if(gBoard.sq7 === 'O' && gBoard.sq8 === 'O' && gBoard.sq9 ==='O') {
		alert('O WINS!');
	}
	if(gBoard.sq1 === 'X' && gBoard.sq4 === 'X' && gBoard.sq7 ==='X') {
		alert('X WINS!');
	}
	if(gBoard.sq1 === 'O' && gBoard.sq4 === 'O' && gBoard.sq7 ==='O') {
		alert('O WINS!');
	}
	if(gBoard.sq2 === 'X' && gBoard.sq5 === 'X' && gBoard.sq8 ==='X') {
		alert('X WINS!');
	}
	if(gBoard.sq2 === 'O' && gBoard.sq5 === 'O' && gBoard.sq8 ==='O') {
		alert('O WINS!');
	}
	if(gBoard.sq3 === 'X' && gBoard.sq6 === 'X' && gBoard.sq9 ==='X') {
		alert('X WINS!');
	}
	if(gBoard.sq3 === 'O' && gBoard.sq6 === 'O' && gBoard.sq9 ==='O') {
		alert('O WINS!');
	}
	if(gBoard.sq1 === 'X' && gBoard.sq5 === 'X' && gBoard.sq9 ==='X') {
		alert('X WINS!');
	}
	if(gBoard.sq1 === 'O' && gBoard.sq5 === 'O' && gBoard.sq9 ==='O') {
		alert('O WINS!');
	}
	if(gBoard.sq3 === 'X' && gBoard.sq5 === 'X' && gBoard.sq7 ==='X') {
		alert('X WINS!');
	}
	if(gBoard.sq3 === 'O' && gBoard.sq5 === 'O' && gBoard.sq7 ==='O') {
		alert('O WINS!');
	}
	if (turn === 11)
		alert('Draw! :(')
}




























});