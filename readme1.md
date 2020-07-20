# README
## Tic-Tac-Toe

#### *This is a very basic setup for a Tic-Tac-Toe game. The funtionality is not complete, but I will continue to come back and update the code until it runs as necessary.*

### Technologies Used
1. HTML
2. Javascript
3. CSS

### HTML structure

1. *Divs* created to separate each box individually on my gameboard.
2. Each *div* that represented a box on the gameboard was given a *class* that was shared across all spaces, as well as *ID*'s individualized for each box themself.
3. Created a button for the reset feature of the game.



### CSS Structure

1. Using the tags created in the HTML, I input the tag selectors in my CSS to style them.
2. I went for a rainbow theme using a gradient(example below).
3. The board is stylized as *600px by 600px* to create a nice large square.


#### How to get the gradient background using CSS
```css
    body{
 background-image: linear-gradient(to left, violet, indigo,
 blue, green, yellow, orange, red);
}
``` 
**Inside your body tag, (or the tag of whichever element you would like to give thic color gradient to) use the property *background-image* and give it a value of *linear-gradient*, followed by the color combo you would like to include**.

### Javascript Structure

1. I included an *eventListener* at the very top of my Javascript, so that the *DOM* has to be fully loaded before it will start running through the rest of the code.
2. I delcared variables for each of my boxes to manipulate them throughout the game.
3. I used *if* statements to tell the game that, once a box has been clicked, play passes to the other player, as well as keeping that box from being marked a second time.

*Here are some of my challenges*:
- Creating the functionality of the actual game (win conditions)
- Understanding how to manipulate the Javascript to get the results needed.

