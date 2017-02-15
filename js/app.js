
var player = 0;
var moves =0;
var x_score = 0;
var o_score = 0;

$('.tile').bind("click",clickedTile);


$('.reset').click(function(){
    player=0;
    moves=0;
    var tiles=$('.tile');
    $('.tile').each(function(){
      $(this).html ("&nbsp;").removeClass("x").removeClass('o').css('background-color', 'white');
    });
    $('.tile').bind("click",clickedTile);

  });


function clickedTile(){
  if(player==1) {
    $(this).text('X').addClass("x").css('background-color', 'red');
  
  }else{
    $(this).text('O').addClass("o").css('background-color', 'green');
  }

  if (checkWinner('o')) {
  o_score++;
  alert("O has won");
  $('.tile').unbind("click",clickedTile);
  $('#o_score').html(" "+o_score);
}

if(checkWinner('x')){
  x_score++;
  alert('X has won');
  $('.tile').unbind("click",clickedTile);
  $('#x_score').html(" "+x_score);
}
  moves++;
  player=(player+1)%2;
  $(this).unbind("click");
  if (moves>=9) {
    alert('The game has ended in a Tie!')
  }


};

function checkWinner(player){
    if($("#one").hasClass(player) && $("#two").hasClass(player) && $("#three").hasClass(player) || 
    $("#four").hasClass(player) && $("#five").hasClass(player) && $("#six").hasClass(player) || 
    $("#seven").hasClass(player) && $("#eight").hasClass(player) && $("#nine").hasClass(player) || 
    $("#one").hasClass(player) && $("#four").hasClass(player) && $("#seven").hasClass(player) || 
    $("#two").hasClass(player) && $("#five").hasClass(player) && $("#eight").hasClass(player) || 
    $("#three").hasClass(player) && $("#six").hasClass(player) && $("#nine").hasClass(player) || 
    $("#one").hasClass(player) && $("#five").hasClass(player) && $("#nine").hasClass(player) || 
    $("#three").hasClass(player) && $("#five").hasClass(player) && $("#seven").hasClass(player))
  {
    return true;
  }
  return false;
}
