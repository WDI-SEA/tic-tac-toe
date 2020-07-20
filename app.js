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
        
        
    }


    function checkWin () {

        
        let squareOne = evTar.className;
        let squareTwo = evTar.className;
        let squareThree = evTar.className;
        let squareFour = evTar.className;
        let squareFive = evTar.className;
        let squareSix = evTar.className;
        let squareSeven = evTar.className;
        let squareEight = evTar.className;
        let squareNine = evTar.className;
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
        if(squareThree == squareFive && squareOne == squareSeven && squareSeven != 'squares') {
            winCo = true;
        }
        
        
        
        
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

