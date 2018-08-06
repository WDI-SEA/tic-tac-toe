
var begin = 0;

document.addEventListener('DOMContentLoaded', function(){
	console.log('Dom got loaded');
	document.getElementById('play').addEventListener('click', start);
});

function start(){
	begin = 1;
	document.turn = 'X';
	for(var i = 0; i<9; i++){
		document.getElementById('c' + i).textContent = '';
		document.getElementById('c' + i).style.backgroundColor = 'yellow';
	}
	document.getElementById('play').textContent = 'Reset';
	console.log('let\'s play');
}


function nextMove(cell){
	if (begin === 1){
		if (cell.textContent == ''){
			cell.textContent = document.turn;
			if(document.turn == 'X'){
				cell.style.backgroundColor = 'red';
			}else{
				cell.style.backgroundColor = 'green';
			}

			if (checkWin(document.turn)){
				alert(document.turn + ' win! Congratulations!!!');
				begin = 0;
			}else if(checkTie()){
				alert('It\'s a tie game!!!');
				begin = 0;
			}else{
			switchTurn();
			}
		}else{
			alert('This cell is already placed!');
		}
	}
}

function switchTurn(){
	if (document.turn === 'X'){
		document.turn = 'O';
	}else{
		document.turn = 'X';
	}
}

function checkWin(turn){
	if (checkThreeCells(0, 1, 2, turn) || checkThreeCells(3, 4, 5, turn) ||
		checkThreeCells(6, 7, 8, turn) || checkThreeCells(0, 3, 6, turn) ||
		checkThreeCells(1, 4, 7, turn) || checkThreeCells(2, 5, 8, turn) ||
		checkThreeCells(0, 4, 8, turn) || checkThreeCells(2, 4, 6, turn)
		) {
		return true;
	}else{
		return false;
	}
}

function checkTie(){
	for (var i = 0; i < 9; i++){
		if (document.getElementById('c' + i).textContent == ''){
			return false;
		}
	}
	return true;
}

function checkThreeCells(a,b,c,turn){
	if (document.getElementById('c' +a).textContent === turn &&
		document.getElementById('c' +b).textContent === turn &&
		document.getElementById('c' +c).textContent === turn) {
		return true;
	} else {
		return false;
	}

}

