console.log('Hello frontend');
function startGame () {
	document.currentPlayer = "X";
}

function nextTurn(col) {
	if(col.innerText == '') {
	   col.innerText = document.currentPlayer;
	   switchPlayer();
	}else {
		setMessage("Choose another square! ")
	}
	
}

function setMessage(msg){
	document.getElementById("message").innerText = msg;	
}


function switchPlayer(){
	if(document.currentPlayer == "X") {
		document.currentPlayer = "O";
	} else {
		document.currentPlayer = "X";
	}

}