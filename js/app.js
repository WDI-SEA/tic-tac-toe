var turn = 0;

var cells = [
 [ 0, 0, 0],
 [ 0, 0, 0],
 [ 0, 0, 0]
];

var xOrO = function(){
	if (turn % 2 + 1 == 1){
		return "X"
	}else return "O"
};

var win = function() {
	if (turn % 2 + 1 == 1){
		document.getElementById("x").innerText = 1 ;
	}else document.getElementById("o").innerText = 1;
}

var checkWin = function() {
	   if 
	   	(cells[0][0] == (turn % 2 + 1) && cells[0][1] == (turn % 2 + 1) && cells[0][2] == (turn % 2 + 1)){
	   		win();
	}else if 
		(cells[1][0] == (turn % 2 + 1) && cells[1][1] == (turn % 2 + 1) && cells[1][2] == (turn % 2 + 1)){
			win();
	}else if
		(cells[2][0] == (turn % 2 + 1) && cells[2][1] == (turn % 2 + 1) && cells[2][2] == (turn % 2 + 1)){
			win();
	}else if 
		(cells[0][0] == (turn % 2 + 1) && cells[1][1] == (turn % 2 + 1) && cells[2][2] == (turn % 2 + 1)){
			win();
	}else if
		(cells[0][2] == (turn % 2 + 1) && cells[1][1] == (turn % 2 + 1) && cells[2][0] == (turn % 2 + 1)){
			win();
	}else if
		(cells[0][0] == (turn % 2 + 1) && cells[1][0] == (turn % 2 + 1) && cells[2][0] == (turn % 2 + 1)){
			win();
	}else if
		(cells[0][1] == (turn % 2 + 1) && cells[1][1] == (turn % 2 + 1) && cells[2][1] == (turn % 2 + 1)){
			win();
	}else if
		(cells[0][2] == (turn % 2 + 1) && cells[1][2] == (turn % 2 + 1) && cells[2][2] == (turn % 2 + 1)){
			win();
	}else
		(turn++)
};

function cellClicked(id) {
    console.log("cellClicked", id);
    document.getElementById(id).innerText = xOrO();
    checkWin();
};

































