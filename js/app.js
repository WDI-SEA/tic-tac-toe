var box = document.getElementsByClassName('tile');
var turn = 0;
var restart = document.getElementById('reset');
var win = document.getElementById('sq')

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
      document.getElementById('headline').textContent = winner + " Won!";
    }
}
// function checkWin() {
//   if (tileX)
// }
//
// function boxScan(){
//   return document.getElementById('sq' + ).className;
// }

restart.addEventListener('click', function(){
  window.location.reload();
});
