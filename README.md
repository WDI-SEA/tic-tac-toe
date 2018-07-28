# Design

## Game Mechancis

* cannot mark an occupied box
* one mark per turn

## Game States

### Game Start

### Game In Progress

* alternate between X and O players
    * even / odd turn changes if X or O is printed

### Game Over States

* 3, of one type, in a row
    * player who last clicked gets victory
        * example: "X wins!" or "O wins!"
* 3, of one type, in a row impossible (draw)
    * results in a draw

# Implementation

## Game Board

* 3x3 tiles
    * use a CSS grid?
    * otherwise, we're talking 3 columns repeated 2 more times
        * seems like this would be unwieldy code

* tile
    * CSS grid piece?

## Markers

* X for player 1
    * green
* O for player 2
    * red
