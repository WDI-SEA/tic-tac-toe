

document.addEventListener('DOMContentLoaded', function() {

var player = 1;
var X = "X";
var O = "O";
var nextPlayer = "O";
var turn = 1;
var xPoints = 0;
var oPoints = 0;
var squares = document.getElementsByClassName("square");

// Turn function
var player = function (){
    if(turn % 2 === 0){
        nextPlayer = "O";
        turn++;
    }else{
        nextPlayer = "X";
        turn++;
    }
};


function gamePiece(elementId){
    var el = document.getElementById(elementId);
    if(el.textContent === "X" || el.textContent === "O"){
        console.log("this square has been played");
    } else{
        el.textContent = nextPlayer;
    }
    checkWinner();
    player();
}
function checkWinner() {
    //brings up a winner alert box regardless of what box is clicked and how many turns have passed
    console.log('in check winner')
    if ($("#tleft").textContent === $("#tmiddle").textContent && $("#tleft").textContent === $("#tright").textContent && $("#tmiddle").textContent === $("#tright").textContent) {
        window.alert(nextPlayer + " Won!!");  
    } else if ($("#cleft").textContent === $("#cmiddle").textContent && $("#cleft").textContent === $("#cright").textContent && $("#cright").textContent === $("#cleft").textContent) {
        window.alert(nextPlayer + " Won!!");  
        console.log('this worked')
    } else if ($("#bleft").textContent === $("#bmiddle").textContent && $("#bleft").textContent === $("#bright").textContent && $("#middle").textContent === $("#bright").textContent) {
        window.alert(nextPlayer + " Won!!");  
    } else if ($("#tleft").textContent === $("#cleft").textContent && $("#tleft").textContent === $("#bleft").textContent && $("#cleft").textContent == $("#bleft").textContent) {
        window.alert(nextPlayer + " Won!!");  
    } else if ($("#tmiddle").textContent === $("#cmiddle").textContent && $("#tmiddle").textContent === $("#bmiddle").textContent && $("cmiddle").textContent === $("bmiddle").textContent) {
        window.alert(nextPlayer + " Won!!");  
    } else if ($("#bleft").textContent === $("#bmiddle").textContent && $("#bleft").textContent === $("#bright").textContent && $("#bmiddle").textContent === $("#bright").textContent) {
        window.alert(nextPlayer + " Won!!");  
    } else if ($("#tleft").textContent === $("#cmiddle").textContent && $("tleft").textContent === $("#bright").textContent && $("#cmiddle").textContent ===  $("#bright").textConent) {
        window.alert(nextPlayer + " Won!!");  
    } else if ($("#tright").textContent === $("#cmiddle").textContent && $("#tright").textContent === $("#bleft").textContent && $("#cmiddle").textConent === $("#bleft").textConent) {
        window.alert(nextPlayer + " Won!!");  
    } else if (document.getElementById(elementId) === 9) {
     window.alert("You tie!!");
    }
};



// create board function 
function createBoard(){
    document.getElementById("board");
}

//reset function
//function reset(){
$('button').on('click', function() {  
    document.getElementsByClassName("square").empty(); //should empty the divs # of any text. Not working??
    // var clear = document.getElementsByClassName("square");
    // for (var i = 0; i <= clear.length; i++) {
     //   clear.removeChild(clear.firstChild);
     //clear.removeAttribute("");

    //var reset = document.getElementsByClassName('square').textContent("");
    //reset.setAttribute(text, "");
    //$("#square").empty();
 
    var turn = 1
    nextPlayer = "O";
    console.log("reset");
    console.log(nextPlayer);
    console.log("turn counter is " + turn);
});



//click events for each div
squares[0].addEventListener("click", function() {
    var elementId = squares[0].id;
    gamePiece(elementId);
});
squares[1].addEventListener("click", function(){
    var elementId = squares[1].id
    gamePiece(elementId);    
});
squares[2].addEventListener("click", function(){
    var elementId = squares[2].id
    gamePiece(elementId);    
});
squares[3].addEventListener("click", function(){
    var elementId = squares[3].id
    gamePiece(elementId);    
});
squares[4].addEventListener("click", function(){
    var elementId = squares[4].id
    gamePiece(elementId);    
});
squares[5].addEventListener("click", function(){
    var elementId = squares[5].id
    gamePiece(elementId);    
});
squares[6].addEventListener("click", function(){
    var elementId = squares[6].id
    gamePiece(elementId);    
});
squares[7].addEventListener("click", function(){
    var elementId = squares[7].id
    gamePiece(elementId);    
});
squares[8].addEventListener("click", function(){
    var elementId = squares[8].id
    gamePiece(elementId);    
});
});
// createBoard();