var turns, interval
turns = 1;

// the function below is actually calling for the eventListener rather than the function
var blocks = document.getElementsByClassName("block")


// this functions applies a turn based style based on clicks via event listener
for (let i = 0; i < blocks.length; i++) {
  let currentBlock = blocks[i];
    currentBlock.addEventListener('click', function (){

        if (turns % 2 == 0) {
            currentBlock.textContent = "O" //input of O 
        } else {
            currentBlock.textContent = "X" //input of X 
        }
        turns++;

        checkOutcome();
    });
//     Const invalidSpace =(e) => {
//         console.log("not a valid turn")
//         currentBlock.removeEventListener('click', function(){

//         }
//     }
// }
// Fumction to remove click eventListener, not sure where to put it.

// Const invalidSpace =(e) => {
//     console.log("not a valid turn")
//     e.target.removeEventListener('click', invalidSpace)
// } 


//this function checks for the outcomes whther player x wins, player o wins, or its a tie game 
function checkOutcome() {
    checkWin("X");
    checkWin("O");

    var fullboard = true;
        for (let i = 0; i < blocks.length; i++){
            if (blocks[i].textContent !=="X" || blocks[i].textContent !== "O") {
                fullboard == false;
                break;
            }
            else (fullboard == true)
            alert("Eh");
            return;
        }
        // if (fullboard == true)
        // alert("Eh");
        // return;
    }

function checkWin(player) {
    if (checkHtl(player) || checkVert(player) || checkDiag(player)) {
    alert("Player: " + player + " Wins");
    return;
    }
}


//Win Conditions 
function checkHtl(player) {
    if(player == blocks[0].textContent && player == blocks[1].textContent && player == blocks[2].textContent) {
        return true;
    }; 
    if(player == blocks[3].textContent && player == blocks[4].textContent && player == blocks[5].textContent) {
        return true;
    }; 
    if(player == blocks[6].textContent && player ==blocks[7].textContent && player == blocks[8].textContent) {
        return true;
    }; 
    return false;
}
function checkVert(player) {
    if(player == blocks[0].textContent && player == blocks[3].textContent && player == blocks[6].textContent) {
        return true;
    }; 
    if(player == blocks[1].textContent && player == blocks[4].textContent && player == blocks[7].textContent) {
        return true;
    }; 
    if(player == blocks[2].textContent && player == blocks[5].textContent && player == blocks[8].textContent) {
        return true;
    };
    return false;
}
function checkDiag(player) {
    if(player == blocks[0].textContent && player == blocks[4].textContent && player == blocks[8].textContent) {
        return true;
    }; 
    if(player == blocks[2].textContent && player == blocks[4].textContent && player == blocks[6].textContent) {
        return true;
    };
    return false;
}




//  function checkTie(player) {
//      var blocks = document.getElementsByClassName("block")
//      var fullBoard = true
//      for (let i = 0; i < blocks.length; i++) {
//          if(player = block[i]) && return false
//      }
     
//  }

// // the code below is pasted within the turns for loop f(x)
// // function turnClix (){
//     // if (i % 2 == 0) {
//     //     document.addEventListener('click').textContent = "O" //input of O
//     // }
//     // else if (i % 2 == 1) {
//     //     document.addEventListener('click').textContent = "X" //input of X
//     // }
