//Variables
var moves = 0;
var xClick;
var oClick;
var cells = document.querySelectorAll(".gameSection");
var xName = "X's Turn";
var oName = "O's Turn";
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
//Function to start and add event listeners/reset
begin();

function begin(){
	for(i = 0; i < cells.length; i++){
		cells[i].textContent = "";
		cells[i].style.background = `transparent`;
		cells[i].style.display = "";
		cells[i].addEventListener("click", turnClick)
	}
	document.getElementById("reset").addEventListener("click", begin);
    xClick = new Array();
    oClick = new Array();
	moves = 0;
	message.textContent = `X's Turn`;
	message.style.fontSize = `50px`;
	message.style.color = `#ff2e63`;
	h1.style.color=`#ff2e63`;
}

//Win Combinations
const winCombos = [
	[`one`, `two`, `three`],
	[`four`, `five`, `six`],
	[`seven`, `eight`, `nine`],
	[`one`, `four`, `seven`],
	[`two`, `five`, `eight`],
	[`three`, `six`, `nine`],
	[`one`, `five`, `nine`],
	[`three`, `five`, `seven`]
];
//Click function / checking who is going to click and if the space has been clicked already
//Wincheck after each click
function turnClick(event){
	if(event.target.textContent.length === 1){
		if (moves % 2 === 0){
			message.style.color = `black`;
			message.textContent = `WOAH WOAH WOAH HEY NOW, DO NOT DO THAT X`;

		}
		else{
			message.textContent = `WOAH WOAH WOAH HEY NOW, DO NOT DO THAT O`;
			message.style.color = `black`;
		}
	}
	if (event.target.textContent.length === 0){
		
		if (moves % 2 === 0){
			xClick.push(event.target.id);
			console.log("xClick", xClick);
			document.getElementById(event.target.id).textContent = `X`;
			document.getElementById(event.target.id).style.background = "#ff2e63";
			moves++;
			h1.style.color = `#eaeaea`;
			message.textContent = "O's Turn";
			message.style.color = `#eaeaea`;
		}
		else{
			oClick.push(event.target.id);
			console.log("oClick", oClick);
			document.getElementById(event.target.id).textContent = `O`;
			document.getElementById(event.target.id).style.background = `#eaeaea`;
			moves++;
			h1.style.color = `#ff2e63`;
			message.textContent = "X's Turn";
			message.style.color = `#ff2e63`;
		}
	}
	winCheck(oClick, xClick, winCombos);}
//Win check function, goes through arrays of clicks and the wincombos to look for matches. Tie function at bottom if 9 moves are hit
function winCheck(oClick, xClick, winCombos){
	for(var i = 0; i < winCombos.length; i++){
		var oWins = 0;
		var xWins = 0;
		for(var j = 0; j < winCombos[i].length; j++){
			if(oClick.includes(winCombos[i][j])){
				oWins++;
			}
            if(oWins === 3){
				setTimeout(function(){begin();}, 2000);
				message.style.fontSize = `200px`;
				for(i = 0; i < cells.length; i++){
						cells[i].textContent = ``;
						cells[i].style.background = `transparent`;
						cells[i].style.display = `none`;
				}
				h1.style.color = `#eaeaea`;
				message.style.color = `#eaeaea`;
				message.textContent = `O Wins`;
            }
            
			if(xClick.includes(winCombos[i][j])){
				xWins++;
			}	 			
			if(xWins === 3){
				setTimeout(function(){begin();}, 2000);
				message.style.fontSize = `200px`;
				for(i = 0; i < cells.length; i++){
					cells[i].textContent = ``;
					cells[i].style.background = `transparent`;
					cells[i].style.display = `none`;
				}
				h1.style.color = `#ff2e63`;
				message.style.color = `#ff2e63`;
				message.textContent = `X Wins`;
				}
				
			}
			if (moves === 9 && xWins !== 3 && oWins !== 3) {
				setTimeout(function(){begin();},2000);
				message.style.fontSize = `200px`;
				for(i = 0; i < cells.length; i++){
						cells[i].textContent = ``;
						cells[i].style.background = `transparent`;
						cells[i].style.display = `none`;
				}
				h1.style.color = `#000`;
				message.style.color = `#000`;
				message.textContent = `Tie Game!`;
			}		
	}
}