var box = document.getElementsByClassName('tile');
var turn = 0;
var restart = document.getElementById('reset');

var boxListeners = function () {
    for (var i = 0; i < box.length; i++){
      box[i].addEventListener('click', boxClick);
      console.log("listeners added");
    }
}
boxListeners();
function boxClick(){
  turn++
  if (turn % 2 ===1){
    this.className += ' tileX';
    console.log('click X' + ' on turn ' + turn);
    checkWin(" tileX");
  } else {
    this.className += ' tileO';
    console.log('click O ' + 'on turn' + turn);
    checkWin(" tileO");
  }
    this.removeEventListener('click', boxClick);
    console.log("listener removed");
}
var checkWin = function (winner) {
  var boxes = document.querySelectorAll('.tile');
    if(boxes[0].className === 'tile'+ winner && boxes[1].className === 'tile' + winner && boxes[2].className === 'tile' + winner){
      document.getElementById('winMessage').textContent = winner + " is your winner!";
      removeEventListener();
    }else if(boxes[3].className === 'tile'+ winner && boxes[4].className === 'tile' + winner && boxes[5].className === 'tile' + winner){
      document.getElementById('winMessage').textContent = winner + " is your winner!";
      removeEventListener();
    }else if(boxes[6].className === 'tile'+ winner && boxes[7].className === 'tile' + winner && boxes[8].className === 'tile' + winner){
      document.getElementById('winMessage').textContent = winner + " is your winner!";
      removeEventListeners();
    }else if(boxes[0].className === 'tile'+ winner && boxes[3].className === 'tile' + winner && boxes[6].className === 'tile' + winner){
      document.getElementById('winMessage').textContent = winner + " is your winner!";
      removeEventListeners();
    }else if(boxes[1].className === 'tile'+ winner && boxes[4].className === 'tile' + winner && boxes[7].className === 'tile' + winner){
      document.getElementById('winMessage').textContent = winner + " is your winner!";
      removeEventListeners();
    }else if(boxes[2].className === 'tile'+ winner && boxes[5].className === 'tile' + winner && boxes[8].className === 'tile' + winner){
      document.getElementById('winMessage').textContent = winner + " is your winner!";
      removeEventListeners();
    }else if(boxes[0].className === 'tile'+ winner && boxes[4].className === 'tile' + winner && boxes[8].className === 'tile' + winner){
      document.getElementById('winMessage').textContent = winner + " is your winner!";
      removeEventListeners();
    }else if(boxes[2].className === 'tile'+ winner && boxes[4].className === 'tile' + winner && boxes[6].className === 'tile' + winner){
      document.getElementById('winMessage').textContent = winner + " is your winner!";
      removeEventListeners();
    }else if(turn === 9){
      document.getElementById('winMessage').textContent = " This match is a draw!";
    }
}
restart.addEventListener('click', function(){
  window.location.reload();
});
