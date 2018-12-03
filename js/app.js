console.log('Hello frontend');
var player = "X";
var grid = [0,0,0,0,0,0,0,0,0];
var winCombo = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];


document.addEventListener("DOMContentLoaded", function(){
	console.log("dom content has loaded");
	//add event listener to the start/reset button
	//document.getElementById("reset").addEventListener("click", start);
}); 

function clickButton(indexOf) {
document.getElementsByTagName("button")[indexOf].innerHTML = player;
	if (player == "X") {
		grid[indexOf] = 1;
		document.getElementsByTagName("button")[indexOf].className = "red";
		player="O";
		//remove event listener this.clicked
	} else {
		grid[indexOf] = 2;
		document.getElementsByTagName("button")[indexOf].className = "blue";
		player = "X";
		//
	}
	console.log(grid);
	checkWinner();
}

function checkWinner(){
	for(var i = 0; i < winCombo.length; i++){
		if ((grid[winCombo[i][0]] == grid[winCombo[i][1]]) && (grid[winCombo[i][1]] == grid[winCombo[i][2]]) && (grid[winCombo[i][0]] != 0) ){
			console.log(grid[winCombo[i][0]]);
			console.log(grid[winCombo[i][1]]);
			console.log(grid[winCombo[i][2]]);
			console.log('winwinwin');
		}
	}
	// if ((grid[0] == grid[1]) && (grid[1] == grid[2]) && (grid[0] != 0)){
	// 	console.log(grid[0]);
	// 	console.log('winCombo 1');
	// }
}




