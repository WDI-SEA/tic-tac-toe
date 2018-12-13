$(document).ready(function(e){
  let player1="X";
  let player2="O";

  let whoseTurn= 1;
  let mademoves=2;

  let sqr = $(".square");
  let winnerContainer = $('.winner');
  let reset = $('.reset');
  sqr.on('click', function(e){
    mademoves++;

    if(whoseTurn === 1){
      event.target.innerHTML = player1;
      event.target.style.color= "red";
      whoseTurn++;
    } else{
      event.target.innerHTML = player2;
      event.target.style.color="blue";
      whoseTurn--;
    }

    if(whoWon()){
      let theWinner = whoseTurn === 1 ?player2:player1;
      declareWinner(theWinner);

    }

  });

  reset.on('click', function(e){
    let moves = Array.prototype.slice.call($(".square"))
    moves.map((m) => {
      m.innerHTML="";
    });
    winnerContainer.html("");
    winnerContainer.css("");
    whoseTurn = 1;
    mademoves = 0;

  })

  function whoWon(){
  if(mademoves > 4){
  let moves = Array.prototype.slice.call($(".square"));
  let results = moves.map(function(square){
    return square.innerHTML;
  })
  let winningCombos = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,5,9],
    [3,5,7],
    [1,4,7],
    [2,5,8],
    [3,6,9]];

  return winningCombos.find(function(combo){
  if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                return true;
            } else {
                return false;
            }
  })

  }
}

function declareWinner(winner){
  winnerContainer.css('display','block');
  reset.css('display','block');
  winner = winner === player1? "Red":"Blue";
  winnerContainer.html(winner + " Wins!");
}
})



