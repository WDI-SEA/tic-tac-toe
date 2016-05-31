document.addEventListener('DOMContentLoaded', function() {

  var gameBoard = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];


  // the game board positions are set to variables for later use

  var tleft = document.getElementById('tleft');
  var tmid = document.getElementById('tmid');
  var tright = document.getElementById('tright');
  var mleft = document.getElementById('mleft');
  var mmid = document.getElementById('mmid');
  var mright = document.getElementById('mright');
  var bleft = document.getElementById('bleft');
  var bmid = document.getElementById('bmid');
  var bright = document.getElementById('bright');


  // vars
  var messagebox = document.getElementById('messageBox');
  var turn = 2;

  var winMessage = function() {
    messagebox.style.zIndex = "100";
    messagebox.style.opacity = "0.3";
    messagebox.style.fontSize = "50px";
  };



  // lots of if statements checking board positions by accessing
  // nested array values

  var winState = function() {
    for(var rownum = 0; rownum < gameBoard.length; rownum++){
      for(var cellnum = 0; cellnum < gameBoard[rownum].length; cellnum++){
        // human win check
        // checking rows for a win
        if((gameBoard[0][0] === 1 && gameBoard[0][1] === 1 && gameBoard[0][2] === 1)){
          messagebox.innerHTML = "You win!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[1][0] === 1 && gameBoard[1][1] === 1 && gameBoard[1][2] === 1)){
          messagebox.innerHTML = "You win!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[2][0] === 1 && gameBoard[2][1] === 1 && gameBoard[2][2] === 1)){
          messagebox.innerHTML = "You win!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        // checking columns for a win
        else if((gameBoard[0][0] === 1 && gameBoard[1][0] === 1 && gameBoard[2][0] === 1)){
          messagebox.innerHTML = "You win!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][1] === 1 && gameBoard[1][1] === 1 && gameBoard[2][1] === 1)){
          messagebox.innerHTML = "You win!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][2] === 1 && gameBoard[1][2] === 1 && gameBoard[2][2] === 1)){
          messagebox.innerHTML = "You win!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        // checking diags for a win
        else if((gameBoard[0][0] === 1 && gameBoard[1][1] === 1 && gameBoard[2][2] === 1)){
          messagebox.innerHTML = "You win!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][2] === 1 && gameBoard[1][1] === 1 && gameBoard[2][0] === 1)){
          messagebox.innerHTML = "You win!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        // other player win check
        // checking rows for a win
        else if((gameBoard[0][0] === 2 && gameBoard[0][1] === 2 && gameBoard[0][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[1][0] === 2 && gameBoard[1][1] === 2 && gameBoard[1][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[2][0] === 2 && gameBoard[2][1] === 2 && gameBoard[2][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        // checking columns for a win
        else if((gameBoard[0][0] === 2 && gameBoard[1][0] === 2 && gameBoard[2][0] === 2)){
          messagebox.innerHTML = "The second player won!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][1] === 2 && gameBoard[1][1] === 2 && gameBoard[2][1] === 2)){
          messagebox.innerHTML = "The second player won!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[2][0] === 2 && gameBoard[2][1] === 2 && gameBoard[2][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        // checking diags for a win
        else if((gameBoard[0][0] === 2 && gameBoard[1][1] === 2 && gameBoard[2][2] === 2)){
          messagebox.innerHTML = "The second player won!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }
        else if((gameBoard[0][2] === 2 && gameBoard[1][1] === 2 && gameBoard[2][0] === 2)){
          messagebox.innerHTML = "The second player won!";
          winMessage();
          console.log(JSON.stringify(gameBoard));
        }

      }
    }
  };

  tleft.addEventListener('click', function() {
    if(gameBoard[0][0] === 0){
      if(turn % 2 === 0){
        tleft.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[0][0] = 1;
        console.log(gameBoard);
        tleft.className = 'blueBg';
        console.log(tleft.className);
        turn += 1;
        winState();
      }else{
        tleft.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[0][0] = 2;
        tleft.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  tmid.addEventListener('click', function() {
    if(gameBoard[0][1] === 0){
      if(turn % 2 === 0){
        tmid.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[0][1] = 1;
        tmid.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        tmid.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[0][1] = 2;
        tmid.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  tright.addEventListener('click', function() {
    if(gameBoard[0][2] === 0){
      if(turn % 2 === 0){
        tright.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[0][2] = 1;
        tright.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        tright.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[0][2] = 2;
        tright.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  mleft.addEventListener('click', function() {
    if(gameBoard[1][0] === 0){
      if(turn % 2 === 0){
        mleft.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[1][0] = 1;
        mleft.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        mleft.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[1][0] = 2;
        mleft.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  mmid.addEventListener('click', function() {
    if(gameBoard[1][1] === 0){
      if(turn % 2 === 0){
        mmid.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[1][1] = 1;
        mmid.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        mmid.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[1][1] = 2;
        mmid.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  mright.addEventListener('click', function() {
    if(gameBoard[1][2] === 0){
      if(turn % 2 === 0){
        mright.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[1][2] = 1;
        mright.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        mright.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[1][2] = 2;
        mright.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  bleft.addEventListener('click', function() {
    if(gameBoard[2][0] === 0){
      if(turn % 2 === 0){
        bleft.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[2][0] = 1;
        bleft.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        bleft.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[2][0] = 2;
        bleft.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  bleft.addEventListener('click', function() {
    if(gameBoard[2][0] === 0){
      if(turn % 2 === 0){
        bleft.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[2][0] = 1;
        bleft.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        bleft.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[2][0] = 2;
        bleft.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  bmid.addEventListener('click', function() {
    if(gameBoard[2][1] === 0){
      if(turn % 2 === 0){
        bmid.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[2][1] = 1;
        bmid.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        bmid.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[2][1] = 2;
        bmid.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

  bright.addEventListener('click', function() {
    if(gameBoard[2][2] === 0){
      if(turn % 2 === 0){
        bright.innerHTML = "<img src='images/coinhead.png'>";
        gameBoard[2][2] = 1;
        bright.className = 'blueBg';
        turn += 1;
        winState();
      }else{
        bright.innerHTML = "<img src='images/cointail.png'>";
        gameBoard[2][2] = 2;
        bright.className = 'redBg';
        turn += 1;
        winState();
      }
    }
  });

});
