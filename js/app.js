var boxes = document.getElementsByClassName('box');
var winners = new Array();
var currentPlayer = 0;
var player1Selections = new Array();
var player2Selections = new Array();
// var turnText = document.querySelector(."playerTurn");
// var counter = 1;
// var winCounter = 0;
// var OMoves = [];
// var XMoves = [];



function reset(){
  // console.log('this worked');
  var boxSquares = document.querySelectorAll('.box');
  //empty images
  //addEventListenersBack
  for(var i = 0; i<boxSquares.length; i++){
    boxSquares[i].style.backgroundImage = 'none';
    boxSquares[i].addEventListener('click', boxClicked);
    document.getElementById("result").innerHTML = '';
  }
  //make currentPlayer = 0;
  currentPlayer = 0;

}

var boxClicked = function(){
  var winnie;
  console.log('fired');
  currentPlayer++;
  //this function fires when I click boxes
  //this referes to div I clicked
  //I'm changing the background image
  if(currentPlayer%2 ===1){
    ///Add X class
    this.style.backgroundImage = 'url(img/theLetterX.png)';
    this.className += " x";
    winnie = " x";
  }else if (currentPlayer%2 ===0){
    ///Add O Class
    this.style.backgroundImage = 'url(img/theLetterO.png)';
    this.className += " o";
    winnie = " o";
  }
  this.removeEventListener('click', boxClicked);

  everyTurn(winnie);

  if(currentPlayer === 9){
    //Theres a draw
    draw();
  }

  //every turn call checkWinner function Here VVVVVV


}

///add a param to everyturn
var everyTurn = function(param){
  if(currentPlayer >=5){
    //pass same parameterinto check winner
    checkWinner(param);
  }
}

var draw = function(){
  document.getElementById("result").innerHTML = "There Was a Draw";
}

//add a param to check winner
var checkWinner = function(winner){
  //every turn check to see if winning combination of divs has X or O id;
  // console.log("inside check winner", winner);
  var boxes = document.querySelectorAll(".box");

  console.log(boxes[0].className === 'box'+winner);
    if(boxes[0].className === 'box'+ winner && boxes[1].className === 'box'+ winner && boxes[2].className === 'box'+ winner){
        document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        removeEventListeners();
    }else if(boxes[3].className === 'box'+ winner && boxes[4].className === 'box'+ winner && boxes[5].className === 'box'+ winner){
        document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        removeEventListeners();
    }else if(boxes[6].className === 'box'+ winner && boxes[7].className === 'box'+ winner && boxes[8].className === 'box'+ winner){
        document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        removeEventListeners();
    }else if(boxes[2].className === 'box'+ winner && boxes[4].className === 'box'+ winner && boxes[6].className === 'box'+ winner){
        document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        removeEventListeners();
    }else if(boxes[0].className === 'box'+ winner && boxes[4].className === 'box'+ winner && boxes[8].className === 'box'+ winner){
        document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        removeEventListeners();
    }else if(boxes[0].className === 'box'+ winner && boxes[3].className === 'box'+ winner && boxes[6].className === 'box'+ winner){
        document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        removeEventListeners();
    }else if(boxes[1].className === 'box'+ winner && boxes[4].className === 'box'+ winner && boxes[7].className === 'box'+ winner){
        document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        removeEventListeners();
    }else if(boxes[2].className === 'box'+ winner && boxes[5].className === 'box'+ winner && boxes[8].className === 'box'+ winner){
        document.getElementById("result").innerHTML = winner.toUpperCase() + " Won!";
        removeEventListeners();
  }     
}

var removeEventListeners = function(){
  var boxes = document.querySelectorAll(".box");
  for(var i = 0; i< boxes.length; i++){
    boxes[i].removeEventListener('click', boxClicked);
  }
}

var generateBoxes = function(){
  console.log('generating boxes');
  for(var i = 0; i < boxes.length; i++){}
}


var addBoxesEventListeners = function(){
  var boxSquares = document.querySelectorAll('.box');

  for(var i = 0; i < boxSquares.length; i++){
    boxSquares[i].addEventListener('click', boxClicked);
  }
}


//stop game listener for clicking


document.addEventListener('DOMContentLoaded', function() {
  //Add Event Listeners
  document.getElementById('reset').addEventListener('click', reset);
  addBoxesEventListeners();
});

