$(function() {
  
  var player = 1;
  var table = $('table');
  var messages = $('.messages');
  var turn = $('.turn');
  displayNextPlayer(turn, player);
  
  $('td').click(function() {
    sq = $(this);
    var state = getState(sq);
    if(!state) {
      var pattern = definePatternForCurrentPlayer(player);
      changeState(sq, pattern);
     
    } else {
      messages.html('This box is already checked.');
    }
  });
  
  $('.reset').click(function() {
    player = 1;
    messages.html('');
    reset(table);
    displayNextPlayer(turn, player);
  });
  
});

function getState(sq) {
  if(td.hasClass('cross') || td.hasClass('circle')) {
    return 1;
  } else {
    return 0;
  }
}

function changeState(sq, pattern) {
  return td.addClass(pattern)
}

function definePatternForCurrentPlayer(player) {
  if(player == 1) {
    return 'cross';
  } else {
    return 'circle';
  }
}

function setNextPlayer(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
}

function displayNextPlayer(turn, player) {
  turn.html('Player turn : '+player);
}



function reset(table) {
  table.find('.sq').each(function() {
    $(this).removeClass('circle').removeClass('cross');
  });
}