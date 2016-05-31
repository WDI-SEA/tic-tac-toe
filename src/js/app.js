var divBoxs = document.querySelectorAll('.divs');
var div1 = document.getElementById('div1');
var div2 = document.getElementById('div2');
var div3 = document.getElementById('div3');
var div4 = document.getElementById('div4');
var div5 = document.getElementById('div5');
var div6 = document.getElementById('div6');
var div7 = document.getElementById('div7');
var div8 = document.getElementById('div8');
var div9 = document.getElementById('div9');

var win = 0;

var turn = 'x';
  
for(i=0;i<divBoxs.length;i++){


    divBoxs[i].addEventListener('click', function(e){

    if(win === 1){
      return;
    } else {

      if(e.target.licked){
        return;
      } 

      e.target.innerHTML = turn;
      if(turn === 'x'){
        turn = 'o';
        e.target.licked = 'o';
        e.target.className = 'divs blue';
      } else {
        turn = 'x';
        e.target.licked = 'x';
        e.target.className = 'divs red';
      }
    }

    checkForWin();  

    });
  
}

var reset = document.getElementById('reset');

reset.addEventListener('click', function(){
  for(i=0;i<divBoxs.length;i++){
    divBoxs[i].innerHTML = '_';
    divBoxs[i].className = 'divs';
    divBoxs[i].licked = '';
    
  }
  turn = 'x';
  win = 0;
});

function checkForWin(){

  for(i=0;i<divBoxs.length;i++){
    if(div1.innerHTML === 'x' && div2.innerHTML === 'x' && div3.innerHTML === 'x'){
      alert('X wins!');
      win = 1;
      return;
      
    } else if(div1.innerHTML === 'o' && div2.innerHTML === 'o' && div3.innerHTML === 'o'){
      alert('O wins!');
      win = 1;
      return;

    } else if(div4.innerHTML === 'x' && div5.innerHTML === 'x' && div6.innerHTML === 'x'){
      alert('X wins!');
      win = 1;
      return;

    } else if(div4.innerHTML === 'o' && div5.innerHTML === 'o' && div6.innerHTML === 'o'){
      alert('O wins!');
      win = 1;
      return;

    } else if(div7.innerHTML === 'x' && div8.innerHTML === 'x' && div9.innerHTML === 'x'){
      alert('X wins!');
      win = 1;
      return;

    } else if(div7.innerHTML === 'o' && div8.innerHTML === 'o' && div9.innerHTML === 'o'){
      alert('O wins!');
      win = 1;
      return;

    } else if(div1.innerHTML === 'x' && div4.innerHTML === 'x' && div7.innerHTML === 'x'){
      alert('X wins!');
      win = 1;
      return;

    } else if(div1.innerHTML === 'o' && div4.innerHTML === 'o' && div7.innerHTML === 'o'){
      alert('O wins!');
      win = 1;
      return;

    } else if(div2.innerHTML === 'x' && div5.innerHTML === 'x' && div8.innerHTML === 'x'){
      alert('X wins!');
      win = 1;
      return;

    } else if(div2.innerHTML === 'o' && div5.innerHTML === 'o' && div8.innerHTML === 'o'){
      alert('O wins!');
      win = 1;
      return;

    } else if(div3.innerHTML === 'x' && div6.innerHTML === 'x' && div9.innerHTML === 'x'){
      alert('X wins!');
      win = 1;
      return;

    } else if(div3.innerHTML === 'o' && div6.innerHTML === 'o' && div9.innerHTML === 'o'){
      alert('O wins!');
      win = 1;
      return;

    } else if(div1.innerHTML === 'x' && div5.innerHTML === 'x' && div9.innerHTML === 'x'){
      alert('X wins!');
      win = 1;
      return;

    } else if(div1.innerHTML === 'o' && div5.innerHTML === 'o' && div9.innerHTML === 'o'){
      alert('O wins!');
      win = 1;
      return;

    } else if(div3.innerHTML === 'x' && div5.innerHTML === 'x' && div7.innerHTML === 'x'){
      alert('X wins!');
      win = 1;
      return;

    } else if(div3.innerHTML === 'o' && div5.innerHTML === 'o' && div7.innerHTML === 'o'){
      alert('O wins!');
      win = 1;
      return;
    }
  }
}


