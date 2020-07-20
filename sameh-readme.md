# TicTacToe (attempt)

## Languages Used
1. HTML
2. CSS
3. JS

### Order of HTML

1. First I created a container div, which I promptly added a second div called table to encompass the board elements. I then added three table row's. For each row I added three table div's containing the same class, yet each with a unique id.
2. Next I created a section for the updated text from the DOM called indicators, to which I added whose turn it was, and what the outcome was at the end, if I ever get that to work.
3. Finally I created a reset button that will allow the game to start over.

### Order of CSS

1. I applied ```display:grid``` to the table element, which allowed everything to be centered and in one column.
2. I gave each one of the table div's a solid black border, and set height and width so that they would be even.
3. I then applied flex to my indicators class in order to get them to be in a row as well, which in turn let me position them in the center.
4. Added some CSS to the player1, tie, and player 2 id's.
5. Defined the height and width of my button so as it wasn't too large, then gave it a slight margin and justified it in the center.

### Order of JS

1. First I assigned DOM and regular variables.
2. Did the DOM event listener.
3. Put the table event listener inside of the DOM listener.
4. Was able to attach most of my functions inside of my table event listener, if not inside of the table listener, but was not able to get all of them to work.
5. I was proud of figuring out I could just assign a variable to event.target, which enabled me to recycle it throughout my conditionals and functions, and allowed me to eventually grab the class name for what I was clicking on.
```javascript
let evTar = event.target;
    if (evTar.className =='squares') {

        
    
        if (turn % 2 == 0) {
            turn ++;
            evTar.setAttribute('class', 'player1');
            document.getElementById('turn').textContent = `Player 1's turn`;
            
            
            checkWin();
            
            
            draw1();
        } else {
            turn ++;
            evTar.setAttribute('class', 'player2');
            document.getElementById('turn').textContent = `Player 2's turn`;
            
            checkWin();
            
            
            draw1();
        };
```
6. I wasn't able to get my ```checkWin()``` function to work probably, but I did figure out how to set turns by using a simple conditional, and manipulating the ```turn``` variable in my favor. This also allowed me to stop any clicks on already used containers.
7. Initially I had created a function that would grab ```document.getElementById``` when called, but realized I didn't need them when the ```event.target``` was able to grab everything I needed, including classes I had added after the DOM had loaded.
9. I considered using the ```element.hasAttributes``` method, but was unable to figure it out.
10. My draw function was simple, if the `turn` counter went to 9, the game would end in a draw, unfortunately I wasn't able to properly implement it due to not being able to complete the win function.
11. I added an eventListener to my reset button that on click would refresh the page.




