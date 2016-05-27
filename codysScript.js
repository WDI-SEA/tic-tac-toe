var gameBoard = [
	[0, 0, 0],
	[0, 0, 0],
	[0, 0, 0]
] 


var writeBoard = function(board){
	var output = ''; // html we turn into a board
	board.forEach(function(element, i, arr){
		// element is an array
		output += '<div class="row'+i+'">'
		element.forEach(function(el, i, arr){
			switch(el){
				case 0:
					output += '<div class="toe col'+i+'"></div>'
					break;
				case 'X':
					output += '<div class="toe col'+i+'">X</div>'
					break;
				case 'O':
					output += '<div class="toe col'+i+'">O</div>'
					break;
			}
		});
		output += '</div>'
	});
	document.getElementById('game-board').innerHTML = output;
}

var stopDuplicateInput = function(row, col, board, cb){
	if ( board[row][col] !== 0 ){
		return alert('Duplicate move')
	}
	cb()
}

var playerInput = function(e){
	var columnClass = e.path[0].className;
	var rowClass = e.path[1].className;
	var col = columnClass[columnClass.length - 1];
	var row = rowClass[rowClass.length - 1];

	stopDuplicateInput(row, col, gameBoard, function(){
		gameBoard[row][col] = 'X';
		writeBoard(gameBoard);
	});
}


writeBoard(gameBoard)
document.getElementById('game-board').addEventListener('click', playerInput)