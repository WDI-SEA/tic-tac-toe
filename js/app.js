console.log('Hello frontend');
var whosTurn = "X";
// var pictureList = ["img/xmen_x.jpg"];
var boxes = ["topMid", "topRight", "topLeft", "midLeft", "middle", "midRight", "lowerLeft", "lowerMid", "lowerRight"];

document.addEventListener("DOMContentLoaded", function(){
reset();
});
function drawBoard(what){
    document.getElementById(what).addEventListener('click', setMove);
    document.getElementById(what).style.background = "";
    // picX = Math.floor(Math.random(pictureList.length)); //pick a picture at random
}

function setMove(){
    this.removeEventListener('click', setMove);
    if (whosTurn == "X"){
        whosTurn = "O";
        displayX(this);
    } else {
        whosTurn = "X";
        displayO(this);
    }
}

function displayO(thing) {
    thing.style.background = "url(img/DC.png) 0% 0% / cover";

}
function displayX(thing) {
    thing.style.background = "url(img/x.png) 0% 0% / cover";

}

function reset() {
    boxes.forEach(drawBoard);

}
