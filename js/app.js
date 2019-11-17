
let count = 0;
let tile = document.getElementsByTagName('img')
let xScore = 0;
let oScore = 0;




const addTileListeners = () => {
    for (i = 0; i < tile.length; i++){
        tile[i].src = './img/emptyTile.png';
        tile[i].addEventListener('click', tileChange);
        tile[i].setAttribute("id", "emptyTile")
    }
}

const removeTileListeners = () =>{
        for(i = 0; i < tile.length; i++){
            tile[i].removeEventListener('click', tileChange)
        }
}

const tileChange = (e) => {
    if (count % 2 == 0){
        e.target.src = "./img/tileX.png"
        e.target.setAttribute("id", "x")
        checkForWin()
        document.getElementById("player1").style.color = "#fd5696";
        document.getElementById("player2").style.color = "white";
        
    }
    else{
        e.target.src = "./img/tileO.png"
        e.target.setAttribute("id", "o")
        checkForWin()
        document.getElementById("player2").style.color = "#fd5696";
        document.getElementById("player1").style.color = "white";
        
    }
    count++;
    e.target.removeEventListener('click', tileChange)
    document.getElementById('turn').textContent = `Turn: ${count}`;
    

}
//Yeah this is ugly, ugly, non-DRY code. I could have stored these win conditions in an array as well..? But still very ugly.
const checkForWin = () =>{
    //X Win conditions
    if(
        //Horizontal solutions
        tile[0].getAttribute("id") == "x" && tile[1].getAttribute("id") == "x" && tile[2].getAttribute("id") == "x"
        ||
        tile[3].getAttribute("id") == "x" && tile[4].getAttribute("id") == "x" && tile[5].getAttribute("id") == "x"
        ||
        tile[6].getAttribute("id") == "x" && tile[7].getAttribute("id") == "x" && tile[8].getAttribute("id") == "x"
        //Vertical solutions
        ||
        tile[0].getAttribute("id") == "x" && tile[3].getAttribute("id") == "x" && tile[6].getAttribute("id") == "x"
        ||
        tile[1].getAttribute("id") == "x" && tile[4].getAttribute("id") == "x" && tile[7].getAttribute("id") == "x"
        ||
        tile[2].getAttribute("id") == "x" && tile[5].getAttribute("id") == "x" && tile[8].getAttribute("id") == "x"
        //Diagonal Solutions
        ||
        tile[0].getAttribute("id") == "x" && tile[4].getAttribute("id") == "x" && tile[8].getAttribute("id") == "x"
        ||
        tile[2].getAttribute("id") == "x" && tile[4].getAttribute("id") == "x" && tile[6].getAttribute("id") == "x"
    ){
        xVictory();
        removeTileListeners();
    } //O Win conditions
    else if(
        //Horizontal solutions
        tile[0].getAttribute("id") == "o" && tile[1].getAttribute("id") == "o" && tile[2].getAttribute("id") == "o"
        ||
        tile[3].getAttribute("id") == "o" && tile[4].getAttribute("id") == "o" && tile[5].getAttribute("id") == "o"
        ||
        tile[6].getAttribute("id") == "o" && tile[7].getAttribute("id") == "o" && tile[8].getAttribute("id") == "o"
        //Vertical solutions
        ||
        tile[0].getAttribute("id") == "o" && tile[3].getAttribute("id") == "o" && tile[6].getAttribute("id") == "o"
        ||
        tile[1].getAttribute("id") == "o" && tile[4].getAttribute("id") == "o" && tile[7].getAttribute("id") == "o"
        ||
        tile[2].getAttribute("id") == "o" && tile[5].getAttribute("id") == "o" && tile[8].getAttribute("id") == "o"
        //Diagonal Solutions
        ||
        tile[0].getAttribute("id") == "o" && tile[4].getAttribute("id") == "o" && tile[8].getAttribute("id") == "o"
        ||
        tile[2].getAttribute("id") == "o" && tile[4].getAttribute("id") == "o" && tile[6].getAttribute("id") == "o"
    ){
        oVictory();
        removeTileListeners();
    }
    else if(count >= 8){
        document.getElementById("message").style.opacity = "1"
        document.getElementById("message").textContent = "Tie Game. 🥱"
        document.getElementById("start").addEventListener("click", start)
    }
    
}

const xVictory = () => {
    console.log("(DM)X wins!")
    document.getElementById("message").style.opacity = "1"
    document.getElementById("message").textContent = "X GON GIVE IT TO YA"
    document.getElementById("start").addEventListener("click", start)
    xScore++;
    document.getElementById("xScore").textContent = xScore;
    document.getElementById("oScore").textContent = oScore;
    document.getElementById("xVictory").play();
}

const oVictory = () => {
    console.log("O wins!")
    document.getElementById("message").style.opacity = "1"
    document.getElementById("message").textContent = "OOO snap!"
    document.getElementById("start").addEventListener("click", start)
    oScore++;
    document.getElementById("xScore").textContent = xScore;
    document.getElementById("oScore").textContent = oScore;
    document.getElementById('oVictory').play();
}

const start = () => {
    addTileListeners()
    document.getElementById("player1").style.color = "white";
    document.getElementById("message").style.opacity = "0";
    count = 0;
    document.getElementById('turn').textContent = `Turn: ${count}`;
    document.getElementById('start').removeEventListener('click', start);
    document.getElementById('xVictory').pause();
    document.getElementById('oVictory').pause();

}



document.addEventListener("DOMContentLoaded", () =>{
    document.getElementById("start").addEventListener("click", start)
    document.getElementById("xScore").textContent = xScore;
    document.getElementById("oScore").textContent = oScore;
    // document.getElementById("player1").style.display = "none";
    // document.getElementById("player2").style.display = "none";
})
