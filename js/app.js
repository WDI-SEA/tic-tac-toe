//Set all boxes to null
//Create event lsitner that responds to a box being clicked
//create event for each box
//

var playerTurn = 0;
var setBoxValue = {
	"a": null,
	"b": null,
	"c": null,
	"d": null,
	"e": null,
	"f": null,
	"g": null, 
	"h": null,
	"i": null
}

/*************************************************************************************************************************/

//This function will take an input telling it what box was click populate the function and output an x or o
	function fillBox(element){
		document.getElementById(element).addEventListener("click", function(e) {
   
    		if(document.getElementById(element).innerHTML === ""){
    			if(playerTurn % 2 === 0){
    				document.getElementById(element).innerHTML = "X";
    				setBoxValue[element] = "X";
    				playerTurn++;
    			}
    			else if (playerTurn % 2 !== 0){
    				document.getElementById(element).innerHTML = "O";
                    setBoxValue[element] = "O";
    				playerTurn++;
    			} else {
    				alert("This space is already taken");
    			}
                
    		}
    		Turn(playerTurn);
            checkForWinner();
    	});	
        return setBoxValue;
    }
    fillBox("a");
    fillBox("b");
    fillBox("c");
    fillBox("d");
    fillBox("e");
    fillBox("f");
    fillBox("g");
    fillBox("h");
    fillBox("i");


/***************************************************************************************************************************/
    
    function checkForWinner(){

/*calculate if theres a win in the row [[a,b,c], [d,e,f], [g,h,i]];********************************************************/
        if(setBoxValue["a"] === "X" && setBoxValue["b"] === "X" && setBoxValue["c"] === "X"){
            console.log("player X Wins")
    	    document.querySelector('.pTurn').innerHTML = "X Wins !";
            clearPlayer();
        }
        if(setBoxValue["d"] === "X" && setBoxValue["e"] === "X" && setBoxValue["f"] === "X"){
            console.log("player X Wins")
            document.querySelector('.pTurn').innerHTML = "X Wins !";
            clearPlayer();
        }
        if(setBoxValue["g"] === "X" && setBoxValue["h"] === "X" && setBoxValue["i"] === "X"){
            console.log("player X Wins")
            document.querySelector('.pTurn').innerHTML = "X Wins !";
            clearPlayer();
        }
        if(setBoxValue["a"] === "O" && setBoxValue["b"] === "O" && setBoxValue["c"] === "X"){
            console.log("player O Wins")
            document.querySelector('.pTurn').innerHTML = "O Wins !";
            clearPlayer();
        }
        if(setBoxValue["d"] === "O" && setBoxValue["e"] === "O" && setBoxValue["f"] === "O"){
            console.log("player O Wins")
            document.querySelector('.pTurn').innerHTML = "O Wins !";
            clearPlayer();
        }
        if(setBoxValue["g"] === "O" && setBoxValue["h"] === "O" && setBoxValue["i"] === "O"){
            console.log("player O Wins")
            document.querySelector('.pTurn').innerHTML = "O Wins !";
            clearPlayer();
        }

    
/*calculate if theres a win in the column[[a,d,g][b,e,h][c,f,i]]; *******************************************/
        
        if(setBoxValue["a"] === "X" && setBoxValue["d"] === "X" && setBoxValue["g"] === "X"){
            console.log("player X Wins")
            document.querySelector('.pTurn').innerHTML = "X Wins !";
            clearPlayer();
        }
        if(setBoxValue["b"] === "X" && setBoxValue["e"] === "X" && setBoxValue["h"] === "X"){
            console.log("player X Wins")
            document.querySelector('.pTurn').innerHTML = "X Wins !";
            clearPlayer();
        }
        if(setBoxValue["c"] === "X" && setBoxValue["f"] === "X" && setBoxValue["i"] === "X"){
            console.log("player X Wins")
            document.querySelector('.pTurn').innerHTML = "X Wins !";
            clearPlayer();
        }
        if(setBoxValue["a"] === "O" && setBoxValue["d"] === "O" && setBoxValue["g"] === "X"){
            console.log("player O Wins")
            document.querySelector('.pTurn').innerHTML = "O Wins !";
            clearPlayer();
        }
        if(setBoxValue["b"] === "O" && setBoxValue["e"] === "O" && setBoxValue["h"] === "O"){
            console.log("player O Wins")
            document.querySelector('.pTurn').innerHTML = "O Wins !";
            clearPlayer();
        }
        if(setBoxValue["c"] === "O" && setBoxValue["f"] === "O" && setBoxValue["i"] === "O"){
            console.log("player O Wins")
            document.querySelector('.pTurn').innerHTML = "O Wins !";
            clearPlayer();
        }

/*calculate if there is a diagonal win [[a,e,i][c,e,g]] ******************************************************/

        if(setBoxValue["a"] === "X" && setBoxValue["e"] === "X" && setBoxValue["i"] === "X"){
            console.log("player X Wins")
            document.querySelector('.pTurn').innerHTML = "X Wins !";
            clearPlayer();
        }
        if(setBoxValue["c"] === "X" && setBoxValue["e"] === "X" && setBoxValue["g"] === "X"){
            console.log("player X Wins")
            document.querySelector('.pTurn').innerHTML = "X Wins !";
            clearPlayer();
        }
        if(setBoxValue["a"] === "O" && setBoxValue["e"] === "O" && setBoxValue["i"] === "X"){
            console.log("player O Wins")
            document.querySelector('.pTurn').innerHTML = "O Wins !";
            clearPlayer();
        }
        if(setBoxValue["c"] === "O" && setBoxValue["e"] === "O" && setBoxValue["g"] === "O"){
            console.log("player O Wins")
            document.querySelector('.pTurn').innerHTML = "O Wins !";
            clearPlayer();
        }

    }
/***************************************************************************************************************************/
//who's turn is it
function Turn(playerTurn){
	console.log(playerTurn);
	if(playerTurn % 2 === 0){
		document.querySelector(".pTurn").innerHTML = "Player X Turn";
	}
	else if(playerTurn % 2 !== 0){
		document.querySelector(".pTurn").innerHTML = "Player O Turn";
	}
}

document.getElementById("resetButton").addEventListener("click", function(){ 
  location.reload();
});


//need to write a delay function
function clearPlayer(){
    setTimeout(function(){
        document.querySelector('.pTurn').innerHTML = "Click reset to play again!";
    } ,1000);   
}
















