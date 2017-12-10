var turn = 0;
function reset(){
	location.reload();
}

var cells = [
 [ 9, 9, 9],
 [ 9, 9, 9],
 [ 9, 9, 9]
];

// var oneTwo = turn % 2;

var xOrO = function(){
	if (turn % 2 + 1 == 1){
		return "X";
	}else {
		return "O";
	}
};

var win = function() {
	if (turn % 2 + 1 == 1){
		document.getElementById("x").innerText = 1 ;
	}else {
		document.getElementById("o").innerText = 1;
	}
	var rmcellclickdocument = document.getElementsByClassName("cell")
	    for (i=0; i<rmcellclickdocument.length; i++) {
	      rmcellclickdocument[i].removeAttribute("onclick");
    }
}

var checkWin = function() {
	   if 
	   	(cells[0][0] == turn % 2 && cells[0][1] == turn % 2 && cells[0][2] == turn % 2){
	   		win();
	}else if 
		(cells[1][0] == turn % 2 && cells[1][1] == turn % 2 && cells[1][2] == turn % 2){
			win();
	}else if
		(cells[2][0] == turn % 2 && cells[2][1] == turn % 2 && cells[2][2] == turn % 2){
			win();
	}else if 
		(cells[0][0] == turn % 2 && cells[1][1] == turn % 2 && cells[2][2] == turn % 2){
			win();
	}else if
		(cells[0][2] == turn % 2 && cells[1][1] == turn % 2 && cells[2][0] == turn % 2){
			win();
	}else if
		(cells[0][0] == turn % 2 && cells[1][0] == turn % 2 && cells[2][0] == turn % 2){
			win();
	}else if
		(cells[0][1] == turn % 2 && cells[1][1] == turn % 2 && cells[2][1] == turn % 2){
			win();
	}else if
		(cells[0][2] == turn % 2 && cells[1][2] == turn % 2 && cells[2][2] == turn % 2){
			win();
	}else{
		(turn++)
	}
};

function cellClicked(id) {
    console.log("cellClicked", id);
    document.getElementById(id).innerText = xOrO();
    if(turn % 2 == 0){
    	document.getElementById(id).style.color = "red";
    }else {
    	document.getElementById(id).style.color = "green";
    }
    document.getElementById(id).removeAttribute("onclick");
};

function cellValue(id){
		if (id == "one"){
		cells[0][0] = turn % 2; checkWin();
	}else if (id == "two"){
		cells[0][1] = turn % 2; checkWin();
	}else if (id == "three"){
		cells[0][2] = turn % 2; checkWin();
	}else if (id == "four"){
		cells[1][0] = turn % 2; checkWin();
	}else if (id == "five"){
		cells[1][1] = turn % 2; checkWin();
	}else if (id == "six"){
		cells[1][2] = turn % 2; checkWin();
	}else if (id == "seven"){
		cells[2][0] = turn % 2; checkWin();
	}else if (id == "eight"){
		cells[2][1] = turn % 2; checkWin();
	}else if (id == "nine"){
		cells[2][2] = turn % 2; checkWin();
	}else {
		console.log("error no id value");
	}
}











