

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
    var clicked = el.getAttribute('data-clicked');
    if(clicked == "true"){
        console.log("this square has been played");
       
    } else{
        el.textContent = nextPlayer;
        el.setAttribute('data-clicked', 'true'); 

    }
    checkWinner();
    player();
}

function declareWin() {

}

function checkWinner() {
   if (turn >= 5) {
    console.log('in check winner'); 
    console.log($('#tleft').text());
     if ($('#tleft').text() === nextPlayer && $('#tmiddle').text() === nextPlayer && $('#tright').text() === nextPlayer) {
        console.log(nextPlayer + " Won!!"); 
        ($(".square").attr('data-clicked', "true"));
        console.log("No More Plays") //window alert functions no longer work after adjustments (9/7 10:23pm)
    } else if ($("#cleft").text() === nextPlayer && $("#cmiddle").text() === nextPlayer && $("#cright").text() === nextPlayer) {
        console.log(nextPlayer + " Won!!");  
        console.log('this worked')
        ($(".square").attr('data-clicked', "true"));
    } else if ($("#bleft").text() === nextPlayer && $("#bmiddle").text() === nextPlayer && $("#bright").text() === nextPlayer) {
        console.log(nextPlayer + " Won!!");  
        ($(".square").attr('data-clicked', "true"));
    } else if ($("#tleft").text() === nextPlayer && $("#cleft").text() === nextPlayer && $("#bleft").text() == nextPlayer) {
        console.log(nextPlayer + " Won!!");  
        ($(".square").attr('data-clicked', "true"));
    } else if ($("#tmiddle").text() === nextPlayer && $("#bmiddle").text() === nextPlayer && $("cmiddle").text() === nextPlayer) {
        console.log(nextPlayer + " Won!!");  
        ($(".square").attr('data-clicked', "true"));
    } else if ($("#bleft").text() === nextPlayer && $("#bmiddle").text() === nextPlayer && $("#bright").text() === nextPlayer) {
        console.log(nextPlayer + " Won!!");  
        ($(".square").attr('data-clicked', "true"));
    } else if ($("#tleft").text() === nextPlayer && $("cmiddle").text() === nextPlayer && $("#bright").text() ===  nextPlayer) {
        console.log(nextPlayer + " Won!!");  
        ($(".square").attr('data-clicked', "true"));
    } else if ($("#tright").text() === nextPlayer && $("#cmiddle").text() === nextPlayer && $("#bleft").text() === nextPlayer) {
        console.log(nextPlayer + " Won!!");  
        ($(".square").attr('data-clicked', "true"));
    } else if (turn === 9) {
     console.log("You tie!!");
    }
}};



// }

// function reset() {
//     for (var i = 0; i < 9; i++) {
//         squares.textContent[i] = ("")
//     }
// };
// create board function 
function createBoard(){
    document.getElementById("board");
};

//reset function

$('#button').on('click', function() {  
    $(".square").empty(); 
    var turn = 1;
    nextPlayer = "O";
    console.log("reset");
    console.log(nextPlayer);
    console.log("turn counter is " + turn);
   $(".square").attr('data-clicked', "false");
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
})
});

// createBoard();