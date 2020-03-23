let counter =0;
let playerX = 'X';
let playerO = 'O';
let players =[];
let Xscore =0;
let Oscore = 0;
let grids = document.getElementsByClassName('item');
let result = document.getElementById('result');
let XscoreCnt = document.getElementById('Xscore');
let YscoreCnt = document.getElementById('Oscore');

// Begins a new match between two opponents
let newMatch = document.getElementById('reset');
newMatch.addEventListener('click',init);
// Starts a new game between same opponents, here scores for each recorded from previous game
let restart = document.getElementById('restart');
restart.addEventListener('click', newGameWithPrevScore);



startTictactoe();

function startTictactoe()
{
    createListeners();  
}

 function createListeners()
{ for(let i=0; i< grids.length;i++){
            grids[i].addEventListener('click', turnhandle);
        }

}

 removeListeners =() =>
{ for(let i=0; i< grids.length;i++){
        grids[i].removeEventListener('click', turnhandle);
    }
    
}

 function turnhandle(e)
 {   // taking the index number from the gridId
     // for instance if gridId is grid-0, 
     //we need the 0 to use as index for the player array
     let gridId =  e.target.getAttribute('id');
     let pIndex = parseInt(gridId.slice(5));
     console.log('pIndex',pIndex);

     if(counter%2== 0){  // push X in the  player array at pIndex
        e.target.textContent = playerX; 
       players[pIndex] = playerX;
        
     }
     else{ // push O in the  player array at pIndex
        e.target.textContent = playerO;
        players[pIndex] = playerO;
     }
     // when player X and O have covered together more than 3 spots
     if(counter>=3)
     { // check the winner
        checkWinner();
     }
     counter++;
     e.target.removeEventListener('click',turnhandle);
     console.log(players);
     console.log('counter',counter);
}


 checkWinner = ()=>
 {  let winningPlayer = '';
     winningPlayer = winPattern();    
     if(winningPlayer) // if winningPlayer is not empty string
     { displayWinResult(winningPlayer);
        removeListeners();
     }
     else if(counter>=8)
     { // display if there is a draw
        displayDrawResult();
        removeListeners();
     }

 }
// if player array has any match pattern then return which player X or O is the winner
 winPattern = ()=>{
     let winner ='';
    if(players[0]!== undefined && players[0]===players[1]&& players[1]===players[2]
    ||
    players[0]!== undefined && players[0]===players[3]&& players[3]===players[6]
    ||
    players[0]!== undefined && players[0]===players[4]&& players[4]===players[8])
    {
        winner = players[0];
    }
    else if(players[3]!== undefined && players[3]===players[4]&& players[4]===players[5]
    ||
    players[1]!== undefined && players[1]===players[4]&& players[4]===players[7])
    {
        winner = players[4];
    }
    else if(players[2]!== undefined && players[2]===players[5]&& players[5]===players[8]
    ||
    players[2]!== undefined && players[2]===players[4]&& players[4]===players[6])
    {
        winner = players[2];
      
    }
    else if(players[6]!== undefined && players[6]===players[7]&& players[7]===players[8])
    {
        winner = players[6];
    }
    return winner;
 }
 
 displayWinResult= (winner)=> {
    result.textContent = `Player ${winner} wins the game`;
    if(winner === playerX)
    {  Xscore++;
       document.getElementById("XWin").play();
       XscoreCnt.textContent = Xscore; 
    }
    else {
        Oscore++;
        document.getElementById("OWin").play();
        YscoreCnt.textContent = Oscore;
    }
 }

 displayDrawResult=()=>{
    result.textContent = "There is a tie!"
 }

 function init()
{ // new match button resets the scores also to zero
    Xscore =0;
    Oscore =0;
    XscoreCnt.textContent = Xscore; 
    YscoreCnt.textContent = Oscore;
   initialize();
}

function newGameWithPrevScore()
{
    initialize();
}

function pauseReloadAudio()
{   document.getElementById("XWin").pause();
    document.getElementById("OWin").pause();
    document.getElementById("XWin").load();
    document.getElementById("OWin").load();
}


function initialize()
{   players =[];
    counter =0;
    for(let i=0; i< grids.length;i++){
        grids[i].textContent = '';
    }
    result.textContent ='';
    pauseReloadAudio();
    startTictactoe(); 
}


