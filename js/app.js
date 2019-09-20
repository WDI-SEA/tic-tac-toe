document.addEventListener("DOMContentLoaded", function(){
begin();
});
var initialBoard;
var moves = 0;
var xClick = [];
var oClick = [];

var cells = document.querySelectorAll('.cell');


function begin(){
	initialBoard = Array.from(Array(9).keys());
	for(i = 0; i < cells.length; i++){
		cells[i].textContent = "";
		cells[i].addEventListener("click", turnClick)
		document.getElementById("reset").addEventListener("click", reset);
	}
}
const winCombos = [
	["one", "two", "three"],
	["four", "five", "six"],
	["seven", "eight", "nine"],
	["one", "four", "seven"],
	["two", "five", "eight"],
	["three", "six", "nine"],
	["one", "five", "nine"],
	["three", "five", "seven"]
];
function turnClick(event){
	if(event.target.textContent.length === 1){
		alert("You clicked this box already, are you trying to cheat?!");
	}
	if (event.target.textContent.length === 0){
		
		if (moves % 2 === 0){
			xClick.push(event.target.id);
			console.log("xClick", xClick);
			document.getElementById(event.target.id).textContent = "X";
			document.getElementById(event.target.id).style.background = "#902500";
			moves++;
		}
		else{
			oClick.push(event.target.id);
			console.log("oClick", oClick);
			document.getElementById(event.target.id).textContent = "O";
			document.getElementById(event.target.id).style.background = "#002590";
			moves++;
		}
	}
	winCheck(oClick, xClick, winCombos);
	if (moves === 9 ){
        alert("🐱🐱🐱Game!");
        reset();
	}
}

function winCheck(oClick, xClick, winCombos){
	for(var i = 0; i < winCombos.length; i++){
		var oWins = 0;
		var xWins = 0;
		for(var j = 0; j < winCombos[i].length; j++){
			if(oClick.includes(winCombos[i][j])){
				oWins++;
					console.log(oWins);
			}
            if(oWins === 3){
				var oAlert = setTimeout(function(){
					alert("O wins!");
					reset();}, 500);
                            			
            }
            
			if(xClick.includes(winCombos[i][j])){
				xWins++;
                    console.log(xWins);
			}	 			
			if(xWins === 3){
				var xAlert = setTimeout(function(){
					alert("X wins!");
					reset();}, 500);
                         
            }
             
		}
	}
}
function reset(){
            for(i = 0; i < cells.length; i++){
                cells[i].textContent = "";
                cells[i].style.background = "transparent";
            }
                xClick = new Array();
                oClick = new Array();
                moves = 0;
            }


