function loadGame(){
    addCellListener();
}
//Whether X or O is played
let totBoxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Whether we have a draw or not
let draw = 0;
//SCORE KEEPERS
let x = 0;
let o = 0; 
//addEventListener Function and Deletion
let block = document.querySelectorAll('.cell')

//FUNCTION TO ADD EVENT LISTENERS TO ALL CELLS
function addCellListener() {
let block = document.querySelectorAll('.cell')
for (i = 0; i < block.length; i++) {
    block[i].addEventListener('click', addText)
    }
};
//FUNCTION TO REMOVE ALL CELL LISTENERS
function removeCellListener() {
    let block = document.querySelectorAll('.cell')
    for (i = 0; i < block.length; i++){
    block[i].removeEventListener('click', addText);
    }
};
//ADD X OR O AND REMOVE INDIVIDUAL EVENT LISTENER
function addText() {
    totBoxes.pop();
    draw++;
    if (totBoxes.length % 2 === 0){
        this.textContent = "Vader";
        this.style.background = "red";
        this.setAttribute('letter', 'X');
        x++;
        document.getElementById('message-board').textContent = "Kenobi's Turn!"
        
    } else if (totBoxes.length === 0){
        this.textContent = "Kenobi";
        this.style.background = "blue";
        this.setAttribute('letter', 'O');
        o++;
        document.getElementById('message-board').textContent = "Vader's Turn!"
    }else {
        this.textContent = "Kenobi";
        this.style.background = "blue";
        this.setAttribute('letter', 'O');
        o++;
        document.getElementById('message-board').textContent = "Vader's Turn!"
    }
    this.removeEventListener('click', addText);
    checkMatch();
};

//LIST ALL THE CELLS
let r1c1 = document.getElementById('1-1');
let r1c2 = document.getElementById('1-2');
let r1c3 = document.getElementById('1-3');
let r2c1 = document.getElementById('2-1');    
let r2c2 = document.getElementById('2-2');
let r2c3 = document.getElementById('2-3');
let r3c1 = document.getElementById('3-1');
let r3c2 = document.getElementById('3-2');
let r3c3 = document.getElementById('3-3');

//after click check match
function checkMatch(){
   if ((r1c1.getAttribute('letter') === r1c2.getAttribute('letter')) && r1c1.getAttribute('letter') === r1c3.getAttribute('letter')){
       win();
   }else if ((r2c1.getAttribute('letter') === r2c2.getAttribute('letter')) && r2c1.getAttribute('letter') === r2c3.getAttribute('letter')){
       win();
   }else if ((r3c1.getAttribute('letter') === r3c2.getAttribute('letter')) && r3c1.getAttribute('letter') === r3c3.getAttribute('letter')){
       win();
   }else if ((r1c1.getAttribute('letter') === r2c1.getAttribute('letter')) && r1c1.getAttribute('letter') === r3c1.getAttribute('letter')){
       win();
   }else if ((r1c2.getAttribute('letter') === r2c2.getAttribute('letter')) && r1c2.getAttribute('letter') === r3c2.getAttribute('letter')){
       win();
   }else if ((r1c3.getAttribute('letter') === r2c3.getAttribute('letter')) && r1c3.getAttribute('letter') === r3c3.getAttribute('letter')){
       win();
   }else if ((r1c1.getAttribute('letter') === r2c2.getAttribute('letter')) && r1c1.getAttribute('letter') === r3c3.getAttribute('letter')){
       win();
   }else if ((r3c1.getAttribute('letter') === r2c2.getAttribute('letter')) && r3c1.getAttribute('letter') === r1c3.getAttribute('letter')){
       win();
   }else if (draw === 9){
    console.log('we have a DRAW!')
    document.getElementById('message-board').textContent = "We Have a Draw!"
   }else {
    console.log('Keep playing!')
   }
};
//WIN CONDITIONS
function win() {
    let block = document.querySelectorAll('.cell')
    if(x > o) {
        console.log('Player-x won!')
        document.getElementById('x-score').textContent += 1;
        document.getElementById('message-board').textContent = "Vader Won!"

    }else {
        console.log('Player-O won!')
        document.getElementById('o-score').textContent += 1;
        document.getElementById('message-board').textContent = "Kenobi Won!"
    }
    removeCellListener();
};


//Function to check if someone has won All three games
//Function that removes content from the board 
function clearBoard(){
//     let block = document.querySelectorAll('.cell')
//     for (i = 0; i < block.length; i++){
//     block[i].style.background = "white";
//     block[i].textContent = "";
// }
// loadGame();
location.reload();
};


//CLEAR BUTTON CLEARS THE FIELD

document.getElementById('clear-button').addEventListener('click', clearBoard);


//Play Lightsaber Sound
// if (totBoxes.length === 9){
//     console.log("9 boxes empty")
// }else if (totBoxes.length === 8){
//     document.getElementById("saber1").play();
// }else if(totBoxes.length === 7){
//     document.getElementById("saber2").play();
// }else if (totBoxes.length === 6){
//     document.getElementById("saber3").play();
// }else if(totBoxes.length === 5){
//     document.getElementById("saber4").play();
// }else if(totBoxes.length === 4){
//     document.getElementById("saber5").play();
// }else if(totBoxes.length === 3){
//     document.getElementById("saber6").play();
// }else if(totBoxes.length === 2){
//     document.getElementById("saber7").play();
// }else if(totBoxes.length === 1){
//     document.getElementById("saber8").play();
// }else{
//     document.getElementById("saber9").play();
// }

loadGame();


