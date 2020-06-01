// We spent hours on trying to get from this step to the next using this method combined with the proper  and HTML but just couldn't figure it out.
var markers = ["X" , "O"];
var players = [];

const winningCombonations = [  
  [0, 1, 2],  
  [3, 4, 5],  
  [6, 7, 8],  
  [0, 3, 6],  
  [1, 4, 7],  
  [2, 5, 8],  
  [0, 4, 8],  
  [2, 4, 6]  
  ];  

players[0] = prompt("Enter Player 1");
players[1] = prompt("Enter Player 2");

var whoseTurn = 0;

function playGame(clickedDiv) {
  clickedDiv.innerText = markers[whoseTurn];
  if(whoseTurn) {whoseTurn= 0;
    } else {whoseTurn=1;
    }
  clickedDiv.onclick = "";
  document.getElementById("message").innerText = "It's " + players[whoseTurn] + "'s turn!";
  }


