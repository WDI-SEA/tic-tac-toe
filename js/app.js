console.log('Hello frontend');
var whosTurn = "X";

document.getElementById('topMid').addEventListener('click', setMove);
document.getElementById('topLeft').addEventListener('click', setMove);
document.getElementById('topRight').addEventListener('click', setMove);
document.getElementById('midLeft').addEventListener('click', setMove);
document.getElementById('middle').addEventListener('click', setMove);
document.getElementById('midRight').addEventListener('click', setMove);
document.getElementById('lowerLeft').addEventListener('click', setMove);
document.getElementById('lowerRight').addEventListener('click', setMove);
document.getElementById('lowerMid').addEventListener('click', setMove);

function setMove(){
    if (whosTurn == "X"){
        whosTurn = "O";
        console.log("applying X to " + this.id);
        this.style.background = "url(img/xmen_x.jpg)";
        this.style.backgroundSize = "cover";
        this.removeEventListener('click', setMove);

    } else {
        whosTurn = "X";
        console.log("applying O");
        this.style.background = "url(img/DC.png)";
        this.style.backgroundSize = "cover";
        this.removeEventListener('click', setMove);
    }
}
