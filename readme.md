# Tic-Tac-COVID
### General Assembly Bootcamp project, week 1

## Technilogies
* HTML
* CSS
* JavaScript

## Assignment
* Build a tic tac toe game in HTML, CSS, and vanilla JavaScript
* Use best practices when writing code

## Approach
1. Build HTML structure
2. Use CSS to style and define element groups
3. Create JavaScript for functionality

> I wanted to make it a little fun!
> In the midst of a pandemic and all,
> a little laugh can go a long way.
> Thus, the creation of tic-tac-covid.

## HTML
---
### Nothing special here, used div containers to break out each element group so I could manipulate them individually. I had containers for the gameboard cells, the reset button, the win counter, etc.

## CSS 
---
### Although I am no designer(thus the use of a simple black white and red color scheme), I did take the liberty of replacing the 'O' with a COVID bacteria along with a nervous doctor as the hover image on each game cell. 
### I used the display grid options to arrange the game board, display flex options to center the rest, to keep the win counter in the corner, I used absolute positioning. 
### The "X" and "O" images are linked to classes, and are referenced by the JavaScript to create the interactivity of the game.


## JavaScript
---
### I wanted to take a much more slick approach, but to get to the MVP stage, I sacrificed some of my dreams for a more rudimentary method of defining each element possibly more than I needed to. Rather than look thru an array that is getting updated along with the button I just re-referenced each cell each time a click event went off inside of the board container. I reduced some code by setting my event listner for a click on the board as a whole, rather than each cell individually, as shown below:
```
const allCells = document.querySelector('.board');

allCells.addEventListener('click', event => {....};
```
### The win conditions were all defined individually by comparing class's of each row/column/diagional, after each click. 

### Reset button simply iterated thru the board div with a forEach command to reset each class to the origional state. This was done so I didn't reset the game win counter while refreshing the board. 

###### Thanks to all of my instructors, classmates, and google for all the help!