// declare all the variables
var cell0 = document.getElementById('cell0');
var cell1 = document.getElementById('cell1');
var cell2 = document.getElementById('cell2');
var cell3 = document.getElementById('cell3');
var cell4 = document.getElementById('cell4');
var cell5 = document.getElementById('cell5');
var cell6 = document.getElementById('cell6');
var cell7 = document.getElementById('cell7');
var cell8 = document.getElementById('cell8');

var whoseTurn = 'X';

function changeTurn() {
    if (whoseTurn == 'X') {
        whoseTurn = 'O';
    } else {
        whoseTurn = 'X';
    }
}

//make a click event for individual element
//assign individual element with an 'X' or 'O'
//BUUUUT with a condition where only "if" an element is not empty
//we need to alternate every turn

// K.I.S.S!!! Keep It Simple Stupid!!!

cell0.addEventListener('click', function() {
    console.log('clicked cell0');
    cell0.textContent = whoseTurn;
    changeTurn();
});
cell1.addEventListener('click', function() {
    console.log('clicked cell1');
    cell1.textContent = whoseTurn;
    changeTurn();
});
cell2.addEventListener('click', function() {
    console.log('clicked cell2');
    cell2.textContent = whoseTurn;
    changeTurn();
});
cell3.addEventListener('click', function() {
    console.log('clicked cell3');
    cell3.textContent = whoseTurn;
    changeTurn();
});
cell4.addEventListener('click', function() {
    console.log('clicked cell4');
    cell4.textContent = whoseTurn;
    changeTurn();
});
cell5.addEventListener('click', function() {
    console.log('clicked cell5');
    cell5.textContent = whoseTurn;
    changeTurn();
});
cell6.addEventListener('click', function() {
    console.log('clicked cell6');
    cell6.textContent = whoseTurn;
    changeTurn();
});
cell7.addEventListener('click', function() {
    console.log('clicked cell7');
    cell7.textContent = whoseTurn;
    changeTurn();
});
cell8.addEventListener('click', function() {
    console.log('clicked cell8');
    cell8.textContent = whoseTurn;
    changeTurn();
});
