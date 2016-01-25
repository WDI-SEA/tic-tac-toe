var allSquares = document.getElementsByClassName('square');
var squares = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var turn ="X"

document.getElementById('cell1').addEventListener('click', function(){ 
	if(squares[0]===0) {
		squares[0]=turn;
		testForWin();
		document.getElementById('cell1').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell1').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell1').innerHTML = "0";

		}
	} 

})

document.getElementById('cell2').addEventListener('click', function(){
	if(squares[1]===0) {
		squares[1]=turn;
		testForWin();
		document.getElementById('cell2').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell2').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell2').innerHTML = "0";
		}
	} 

})

document.getElementById('cell3').addEventListener('click', function(){
	if(squares[2]===0) {
		squares[2]=turn;
		testForWin();
		document.getElementById('cell3').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell3').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell3').innerHTML = "0";
		}
	} 

})

document.getElementById('cell4').addEventListener('click', function(){
 	if(squares[3]===0) {
		squares[3]=turn;
		testForWin();
		document.getElementById('cell4').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell4').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell4').innerHTML = "0";
		}
	} 

})

document.getElementById('cell5').addEventListener('click', function(){
	if(squares[4]===0) {
		squares[4]=turn;
		testForWin();
		document.getElementById('cell5').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell5').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell5').innerHTML = "0";
		}
	} 

})

document.getElementById('cell6').addEventListener('click', function(){
 	if(squares[5]===0) {
		squares[5]=turn;
		testForWin();
		document.getElementById('cell6').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell6').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell6').innerHTML = "0";
		}
	} 

})

document.getElementById('cell7').addEventListener('click', function(){
	if(squares[6]===0) {
		squares[6]=turn;
		testForWin();
		document.getElementById('cell7').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell7').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell7').innerHTML = "0";
		}
	} 

})

document.getElementById('cell8').addEventListener('click', function(){
	if(squares[7]===0) {
		squares[7]=turn;
		testForWin();
		document.getElementById('cell8').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell8').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell8').innerHTML = "0";
		}
	} 

})

document.getElementById('cell9').addEventListener('click', function(){
 	if(squares[8]===0) {
		squares[8]=turn;
		testForWin();
		document.getElementById('cell9').className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell9').innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell9').innerHTML = "0";
		}
	} 

})

function testForWin(){
	var thereIsAWinner = false;
	if(squares[0]===squares[1]&&squares[1]===squares[2]){
		thereIsAWinner= true;
	}
	if (thereIsAWinner){
		if (turn==="X"){
			console.log("Winner is X");
		} else {
		 	console.log("Winner is O")
		}
		
	}
}
/* The followin is a function to clean up eventlisteners above 

funcion squareClick(cellNumber){
		if(squares[cellNumber-1]===0) {
		squares[cellNumber-1]=turn;
		testForWin();
		document.getElementById('cell'+cellNumber).className = "clicked"; 
		if(turn==="X") {
			document.getElementById('cell'+cellNumber).innerHTML = "X";
			turn="O"; 
		} else {
			turn="X";
			document.getElementById('cell'+cellNumber).innerHTML = "0";
		}
	}
} If done this way only thing needed after event listener created is:
squareClick(corresponding cellnumber)

*/
// The following is for the clear button clearing the board when clicked. 
// Need to establish vairable for clearing board still. 

document.getElementById('clear').addEventListener('click', function() {
	squares=[0, 0, 0, 0, 0, 0, 0, 0, 0];
	document.getElementById('cell9').innerHTML = "";
	document.getElementById('cell8').innerHTML = "";
	document.getElementById('cell7').innerHTML = "";
	document.getElementById('cell6').innerHTML = "";
	document.getElementById('cell5').innerHTML = "";
	document.getElementById('cell4').innerHTML = "";
	document.getElementById('cell3').innerHTML = "";
	document.getElementById('cell2').innerHTML = "";
	document.getElementById('cell1').innerHTML = "";
	document.getElementById('cell9').className = "square";
	document.getElementById('cell8').className = "square";
	document.getElementById('cell7').className = "square";
	document.getElementById('cell6').className = "square";
	document.getElementById('cell5').className = "square";
	document.getElementById('cell4').className = "square";
	document.getElementById('cell3').className = "square";
	document.getElementById('cell2').className = "square";
	document.getElementById('cell1').className = "square";
}) 

/*  Loop that would take away all of above clearning code. 
	for(var i= 1; i<allSquares.length; i++) {
		document.getElementById("cell"+i).innerHTML="";
		document.getElementById("cell"+i).classname="square";
}
*/





