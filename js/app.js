var turn = 0;
function reset(){
	location.reload();
}

var cells = [
 [ 0, 0, 0],
 [ 0, 0, 0],
 [ 0, 0, 0]
];

var oneTwo = function(){
	return (turn % 2 + 1);
}

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
	   	(cells[0][0] == oneTwo && cells[0][1] == oneTwo && cells[0][2] == oneTwo){
	   		win();
	}else if 
		(cells[1][0] == oneTwo && cells[1][1] == oneTwo && cells[1][2] == oneTwo){
			win();
	}else if
		(cells[2][0] == oneTwo && cells[2][1] == oneTwo && cells[2][2] == oneTwo){
			win();
	}else if 
		(cells[0][0] == oneTwo && cells[1][1] == oneTwo && cells[2][2] == oneTwo){
			win();
	}else if
		(cells[0][2] == oneTwo && cells[1][1] == oneTwo && cells[2][0] == oneTwo){
			win();
	}else if
		(cells[0][0] == oneTwo && cells[1][0] == oneTwo && cells[2][0] == oneTwo){
			win();
	}else if
		(cells[0][1] == oneTwo && cells[1][1] == oneTwo && cells[2][1] == oneTwo){
			win();
	}else if
		(cells[0][2] == oneTwo && cells[1][2] == oneTwo && cells[2][2] == oneTwo){
			win();
	}else
		(turn++)
};

function cellClicked(id) {
    console.log("cellClicked", id);
    document.getElementById(id).innerText = xOrO();
    // cellValue();
    
    document.getElementById(id).removeAttribute("onclick");
};

function cellValue(id){
		if (id == "one"){
		cells[0][0] = oneTwo; checkWin();
	}else if (id == "two"){
		cells[0][1] = oneTwo; checkWin();
	}else if (id == "three"){
		cells[0][2] = oneTwo; checkWin();
	}else if (id == "four"){
		cells[1][0] = oneTwo; checkWin();
	}else if (id == "five"){
		cells[1][1] = oneTwo; checkWin();
	}else if (id == "six"){
		cells[1][2] = oneTwo; checkWin();
	}else if (id == "seven"){
		cells[2][0] = oneTwo; checkWin();
	}else if (id == "eight"){
		cells[2][1] = oneTwo; checkWin();
	}else if (id == "nine"){
		cells[2][2] = oneTwo; checkWin();
	}else 
		console.log("error no id value");
}











