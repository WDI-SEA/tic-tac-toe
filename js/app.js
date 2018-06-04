document.addEventListener('DOMContentLoaded', function() {

var harry = document.getElementsByClassName("harry");
var draco = document.getElementsByClassName("draco");
var player = "";

function startGame() {
  $('#message').empty();
  if(Math.random() < 0.5) {
    player = harry;
    $('#message').append('Harry is chasing after the Snitch!');
    }else{
    player = draco;
    $('#message').append('Draco is chasing after the Snitch!');
  }
}

$('.square').on('click', function(startGame){
  $('#message').empty();
var clickedSquare = $(this);
if (clickedSquare.hasClass('harry') || clickedSquare.hasClass('draco')) {
  $('#message').append("Hey, you can't pick that one!");
}else{
  if (player===harry) {
    clickedSquare.addClass('harry');
    $('#message').append('Now Draco is chasing after the Snitch!');
    if(checkForWinner('harry')) {
      $('#message').empty();
      $('#message').append('Harry has caught the Snitch!');
      $('#game').append('<img src=http://i1378.photobucket.com/albums/ah110/Susana_Nieto/HP___GOLDEN_SNITCH_by_Aoeiya_zps052ta8ci.gif id="snitch">')
      $('#game').ready(function() {
          $("#snitch").animate({left: "-700"}, 3000);
      });
      $('.square').unbind('click');
    }else{
      player=draco;
  }
  }else{
    clickedSquare.addClass('draco');
    $('#message').append('Now Harry is chasing after the Snitch!');
    if(checkForWinner('draco')) {
      $('#message').empty();
      $('#message').append('Draco has caught the Snitch!');
      $('#game').append('<img src=http://i1378.photobucket.com/albums/ah110/Susana_Nieto/HP___GOLDEN_SNITCH_by_Aoeiya_zps052ta8ci.gif id="snitch">')
      $('#game').ready(function() {
          $("#snitch").animate({left: "-700"}, 3000);
      });
      $('.square').unbind('click');
    }else{
      player=harry;
    }
    
  }
}


});

function checkForWinner(whichPlayer) {
  if  ($('.sq1').hasClass(whichPlayer) && $('.s2').hasClass(whichPlayer) && $('.s3').hasClass(whichPlayer)) {
    return true;
  } else if($('.s4').hasClass(whichPlayer) && $('.s5').hasClass(whichPlayer) && $('.s6').hasClass(whichPlayer)){
    return true;
  } else if($('.s7').hasClass(whichPlayer) && $('.s8').hasClass(whichPlayer) && $('.s9').hasClass(whichPlayer)){
    return true;
  } else if($('.s1').hasClass(whichPlayer) && $('.s4').hasClass(whichPlayer) && $('.s7').hasClass(whichPlayer)){
    return true;
  } else if($('.s2').hasClass(whichPlayer) && $('.s5').hasClass(whichPlayer) && $('.s8').hasClass(whichPlayer)){
    return true;
  } else if($('.s3').hasClass(whichPlayer) && $('.s6').hasClass(whichPlayer) && $('.s9').hasClass(whichPlayer)){
    return true;
  } else if($('.s1').hasClass(whichPlayer) && $('.s5').hasClass(whichPlayer) && $('.s9').hasClass(whichPlayer)){
    return true;
  } else if($('.s3').hasClass(whichPlayer) && $('.s5').hasClass(whichPlayer) && $('.s7').hasClass(whichPlayer)){
    return true;
  }else if (checkForWinner===false){
    $('#message').empty();
    $('#message').append('Oh blimey, the Snitch flew off into the distance!');
    $('.square').unbind('click');
    ////return false;
  }
}

$('.reset').click(function(){
  $('.square').removeClass('harry').removeClass('draco');
  location.reload();
});

startGame();

});