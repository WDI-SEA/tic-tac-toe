


document.addEventListener("click", handleClick); // Runs the function when a clicked
clickCount = 0;
function handleClick(click){
  const whatGotClicked = click.target; // Records the HTML element that got clicked
  if(whatGotClicked.classList.contains("tic")){ // Checks a condition related to the element
    console.log(`Somebody clicked on button #${whatGotClicked.id}!`);
    clickCount += 1;
    if (clickCount % 2 == 0) {
        whatGotClicked.innerText = 'O'
        console.log(clickCount)
        }
    else {
        whatGotClicked.innerText = 'X'
        console.log(clickCount)
       
    }
        disableButton(whatGotClicked)
        setTimeout(gameOver(), 400);
        Draw()

  }
  else if (whatGotClicked.classList.contains("reset")) { // Records the HTML element that got clicked
    enableButton();
    if (clickCount % 2 == 0) {clickCount -=0;} else {clickCount -=1;};
    console.log(clickCount)
    console.log("Form Reset!")
  }
  else{
    console.log("Ignore this click");
  }
}


function disableButton(whatGotClicked) {
    whatGotClicked.disabled = true;
}

function enableButton() {
    document.getElementById("1").disabled = false;
    document.getElementById("1").innerHTML = '';
    document.getElementById("2").disabled = false;
    document.getElementById("2").innerHTML = '';
    document.getElementById("3").disabled = false;
    document.getElementById("3").innerHTML = '';
    document.getElementById("4").disabled = false;
    document.getElementById("4").innerHTML = '';
    document.getElementById("5").disabled = false;
    document.getElementById("5").innerHTML = '';
    document.getElementById("6").disabled = false;
    document.getElementById("6").innerHTML = '';
    document.getElementById("7").disabled = false;
    document.getElementById("7").innerHTML = '';
    document.getElementById("8").disabled = false;
    document.getElementById("8").innerHTML = '';
    document.getElementById("9").disabled = false;
    document.getElementById("9").innerHTML = '';
}

function gameOver() {
    // console.log(document.getElementById('1').innerText)
    if ((document.getElementById('1').innerText == 'X')
        && (document.getElementById('2').innerText == 'X')
        && (document.getElementById('3').innerText == 'X')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 1 Wins!');
    }
    else if ((document.getElementById('1').innerText == 'O')
        && (document.getElementById('2').innerText == 'O')
        && (document.getElementById('3').innerText == 'O')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 2 Wins!');
    }
    else if ((document.getElementById('1').innerText == 'X')
        && (document.getElementById('4').innerText == 'X')
        && (document.getElementById('7').innerText == 'X')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 1 Wins!');    
    }
    else if ((document.getElementById('1').innerText == 'O')
        && (document.getElementById('4').innerText == 'O')
        && (document.getElementById('7').innerText == 'O')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 2 Wins!');
    }
    else if ((document.getElementById('1').innerText == 'X')
        && (document.getElementById('5').innerText == 'X')
        && (document.getElementById('9').innerText == 'X')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 1 Wins!');
    }
    else if ((document.getElementById('1').innerText == 'O')
        && (document.getElementById('5').innerText == 'O')
        && (document.getElementById('9').innerText == 'O')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 2 Wins!');
    }
    else if ((document.getElementById('3').innerText == 'X')
        && (document.getElementById('6').innerText == 'X')
        && (document.getElementById('9').innerText == 'X')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 1 Wins!');
    }
    else if ((document.getElementById('3').innerText == 'O')
        && (document.getElementById('6').innerText == 'O')
        && (document.getElementById('9').innerText == 'O')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 2 Wins!');
    }
    else if ((document.getElementById('7').innerText == 'X')
        && (document.getElementById('8').innerText == 'X')
        && (document.getElementById('9').innerText == 'X')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 1 Wins!');
    }
    else if ((document.getElementById('7').innerText == 'O')
        && (document.getElementById('8').innerText == 'O')
        && (document.getElementById('9').innerText == 'O')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 2 Wins!');
    }
    else if ((document.getElementById('2').innerText == 'X')
        && (document.getElementById('5').innerText == 'X')
        && (document.getElementById('8').innerText == 'X')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 1 Wins!');
    }
    else if ((document.getElementById('2').innerText == 'O')
        && (document.getElementById('5').innerText == 'O')
        && (document.getElementById('8').innerText == 'O')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 2 Wins!');
    }
    else if ((document.getElementById('4').innerText == 'X')
        && (document.getElementById('5').innerText == 'X')
        && (document.getElementById('6').innerText == 'X')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 1 Wins!');
    }
    else if ((document.getElementById('4').innerText == 'O')
        && (document.getElementById('5').innerText == 'O')
        && (document.getElementById('6').innerText == 'O')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 2 Wins!');
    }
    else if ((document.getElementById('3').innerText == 'X')
        && (document.getElementById('5').innerText == 'X')
        && (document.getElementById('7').innerText == 'X')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 1 Wins!');
    }
    else if ((document.getElementById('3').innerText == 'O')
        && (document.getElementById('5').innerText == 'O')
        && (document.getElementById('7').innerText == 'O')) {
        console.log('three in a row!');
        document.querySelectorAll('button.tic').forEach(gameButton => { gameButton.disabled = true; });
        alert('GAME OVER, Player 2 Wins!');
    }
    else if (clickCount % 2 == 0) {alert('Player 1 turn')}
    else if (clickCount % 2 !== 0) {alert('Player 2 turn')}
}

function Draw() {
if ((document.getElementById('1').innerText !== '')
    &&
    (document.getElementById('2').innerText !== '')
    &&
    (document.getElementById('3').innerText !== '')
    &&
    (document.getElementById('4').innerText !== '')
    &&
    (document.getElementById('5').innerText !== '')
    &&
    (document.getElementById('6').innerText !== '')
    &&
    (document.getElementById('7').innerText !== '')
    &&
    (document.getElementById('8').innerText !== '')
    &&
    (document.getElementById('9').innerText !== '')
    )
    {
        alert('IT\'S A DRAW!');
    }


}
