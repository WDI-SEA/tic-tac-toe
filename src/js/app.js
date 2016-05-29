
document.addEventListener('DOMContentLoaded', function () {
var turn = 2;
var cellA1 = document.getElementById('cellA1');
var cellA2 = document.getElementById('cellA2');
var cellA3 = document.getElementById('cellA3');
var cellB1 = document.getElementById('cellB1');
var cellB2 = document.getElementById('cellB2');
var cellB3 = document.getElementById('cellB3');
var cellC1 = document.getElementById('cellC1');
var cellC2 = document.getElementById('cellC2');
var cellC3 = document.getElementById('cellC3');

var gameboard = [
[0,0,0],
[0,0,0],
[0,0,0]
];




cellA1.addEventListener('click', function() {
if (gameboard[0][0] === 0) {
  if (turn % 2 === 0) {
    cellA1.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    gameboard[0][0] = 1;
    cellA1.className += " addBlue";
    console.log('successX');
    turn += 1;
  } else { cellA1.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellA1.className = " addRed";
    console.log('successO');
    gameboard[0][0] = 2;
    turn += 1;
    }
  }
})

cellA2.addEventListener('click', function() {
  if (gameboard[0][1] === 0) {
  if (turn % 2 === 0) {
    cellA2.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    gameboard[0][1] = 1;
    cellA2.className = " addBlue";
    console.log('successX');
    turn += 1;
  } else { cellA2.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellA2.className = " addRed";
    gameboard[0][1] = 2;
    console.log('successO');
    turn += 1;
  }
}
})
cellA3.addEventListener('click', function() {
if (gameboard[0][2] === 0) {
  if (turn % 2 === 0) {
    cellA3.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    cellA3.className = " addBlue";
    gameboard[0][2] = 1;
    console.log('successX');
    turn += 1;
  } else { cellA3.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellA3.className = " addRed";
    gameboard[0][2] = 2;
    console.log('successO');
    turn += 1;
  }
}
})
cellB1.addEventListener('click', function() {
if (gameboard[1][0] === 0) {
  if (turn % 2 === 0) {
    cellB1.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    cellB1.className = " addBlue";
    gameboard[1][0] = 1;
    console.log('successX');
    turn += 1;
  } else { cellB1.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellB1.className = " addRed";
    gameboard[1][0] = 2;
    console.log('successO');
    turn += 1;
  }
}
})
cellB2.addEventListener('click', function() {
if (gameboard[1][1] === 0) {
  if (turn % 2 === 0) {
    cellB2.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    cellB2.className = " addBlue";
    gameboard[1][1] = 1;
    console.log('successX');
    turn += 1;
  } else { cellB2.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellB2.className = " addRed";
    gameboard[1][1] = 2;
    console.log('successO');
    turn += 1;
  }
}
})
cellB3.addEventListener('click', function() {
if (gameboard[1][2] === 0) {
  if (turn % 2 === 0) {
    cellB3.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    cellB3.className = " addBlue";
    gameboard[1][2] = 1;
    console.log('successX');
    turn += 1;
  } else { cellB3.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellB3.className = " addRed";
    gameboard[1][2] = 2;
    console.log('successO');
    turn += 1;
  }
}
})
cellC1.addEventListener('click', function() {
if (gameboard[2][0] === 0) {
  if (turn % 2 === 0) {
    cellC1.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    cellC1.className = " addBlue";
    gameboard[2][0] = 1;
    console.log('successX');
    turn += 1;
  } else { cellC1.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellC1.className = " addRed";
    gameboard[2][0] = 2;
    console.log('successO');
    turn += 1;
  }
}
})
cellC2.addEventListener('click', function() {
if (gameboard[2][1] === 0) {
  if (turn % 2 === 0) {
    cellC2.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    cellC2.className = " addBlue";
    gameboard[2][1] = 1;
    console.log('successX');
    turn += 1;
  } else { cellC2.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellC2.className = " addRed";
    gameboard[2][1] = 2;
    console.log('successO');
    turn += 1;
  }
}
})
cellC3.addEventListener('click', function() {
if (gameboard[2][2] === 0) {
  if (turn % 2 === 0) {
    cellC3.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/16-gold-letter-x_0x90.jpg">';
    cellC3.className = " addBlue";
    gameboard[2][2] = 1;
    console.log('successX');
    turn += 1;
  } else { cellC3.innerHTML = '<img src="http://www.partygoodsmalta.com/images/stories/virtuemart/product/resized/foil-balloon-40-inch-gold-letter-o_0x90.jpg">';
    cellC3.className = " addRed";
    gameboard[2][2] = 2;
    console.log('successO');
    turn += 1;
  }
}
})
//parentheses below are for "DOMContentLoaded" function
})
