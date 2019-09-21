var player1;
var player2;
var currentPlayer = 1;
var isChecked = false;
container = document.getElementById("container").addEventListener("click",boxClicked);
// .addEventListener("click",boxClicked);

console.log(container);
function boxClicked(e){

    if (e.target.innerHTML === "X"|| e.target.innerHTML === "O"){
        container.removeEventListener("click", boxClicked);
    }
    takeTurn(e);
        
}

function takeTurn(e){
        console.log('hello');
        if(currentPlayer === 1){
        console.log(currentPlayer);
        e.target.innerHTML = "X";
        currentPlayer++;
        
        }else if(currentPlayer !== 1){
        e.target.innerHTML= "O";
        currentPlayer--;
        
    }
    
}