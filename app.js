let squareChange = document.getElementsByClassName('squares');
let table1 = document.querySelector('table');
let td = document.getElementsByTagName('td');
let turn = 0;
let resetButton = document.querySelector('button');
let winCo = false;






document.addEventListener('DOMContentLoaded', function() {
table1.addEventListener('click', event => {
    

    
    
    let evTar = event.target;
    if (evTar.className =='squares') {

        if (winCo === false) {
                
        
    
        if (turn % 2 == 0) {
            turn ++;
            evTar.setAttribute('class', 'player1');
            evTar.toggleAttribute('squares');
            document.getElementById('turn').textContent = `Player 1's turn`;
            
            
            checkWin();
            
            
            draw1();
        } else {
            turn ++;
            evTar.setAttribute('class', 'player2');
            evTar.toggleAttribute('squares');
            document.getElementById('turn').textContent = `Player 2's turn`;
            
            checkWin();
            
            
            draw1();
        };
        
        } else if (winCo === true) {
            table1.removeEventListener('click', event => {
                
            })
        }
        
    }


    function checkWin () {

        
        let squareOne = document.getElementById('square1').className;
        let squareTwo = document.getElementById('square2').className;
        let squareThree = document.getElementById('square3').className;
        let squareFour = document.getElementById('square4').className;
        let squareFive = document.getElementById('square5').className;
        let squareSix = document.getElementById('square6').className;
        let squareSeven = document.getElementById('square7').className;
        let squareEight = document.getElementById('square8').className;
        let squareNine = document.getElementById('square9').className;
        console.log(squareOne);
        
        
        
        if(squareOne == squareTwo && squareOne == squareThree && squareOne != 'squares') {
            winCo = true;
        }
        if(squareOne == squareFour && squareOne == squareSeven && squareSeven != 'squares') {
            winCo = true;
        }
        if(squareOne == squareFive && squareOne == squareNine && squareNine != 'squares') {
            winCo = true;
        }
        if(squareFour == squareFive && squareFour == squareSix && squareSix != 'squares') {
            winCo = true;
        }
        if(squareSeven == squareEight && squareSeven == squareNine && squareNine != 'squares') {
            winCo = true;
        }
        if(squareTwo == squareFive && squareTwo == squareEight && squareEight != 'squares') {
            winCo = true;
        }
        if(squareThree == squareSix && squareThree == squareNine && squareNine != 'squares') {
            winCo = true;
        }
        if(squareThree == squareFive && squareThree == squareSeven && squareSeven != 'squares') {
            winCo = true;
        } 
        
        
        return winCo;
      
    }


    function draw1 () {

        if (turn == 9) {
            alert('Games a Draw');
        }
    }

    

        
    resetButton.addEventListener('click', function(){
        
            location.reload();
        
    });


    


});










});

