var box = document.getElementsByClassName('tile');
var turn = 0;
var playerX = "X";
var playerO = "O";
var restart = document.getElementById('reset');
var win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

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
    this.className = 'tileX';
    console.log('click X' + 'on turn ' + turn);
  } else {
    this.className = 'tileO';
    console.log('click O ' + "on turn " + turn);
  }
  this.removeEventListener('click', boxClick);
  console.log("listener removed");
}
// box clicked
// var board = function () {
//     for (var i=0; i<box.length; i++){
//     box[i].addEventListener('click', function(){
//       turn ++;
//       if(turn % 2 === 1){
//         this.className = 'tileX';
//         console.log('clickx');
//         removeTile();
//         // document.getElementById('playerChange').textContent = "Player O is Up";
//         // this.removeEventListener('click', tileSelect);
//       }else{
//         this.className = 'tileO';
//         console.log('clicko');
//         removeTile();
//         // document.getElementById('playerChange').textContent= "Player X is Up";
//         // this.removeEventListener('click', tileSelect);
//   }});
// }
// }
// board();
// var removeTile = function () {
//   var boardBox = document.querySelectorAll('tile');
//   for(var i=0; i<box.length; i++){
//     console.log('remove');
//     this.removeEventListener('click',board);
//   }
// }

restart.addEventListener('click', function(){
  window.location.reload();
});
