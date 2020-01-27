// let squares = {
//     s1: {
//         name: "space1",
//         flipped: false,
//         flippedImg: "https://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "https://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     },
//     s2: {
//         name: "space2",
//         flipped: false,
//         flippedImg: "https://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "https://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     },
//     s3: {
//         name: "space3",
//         flipped: false,
//         flippedImg: "https://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "https://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     },
//     s4: {
//         name: "space4",
//         flipped: false,
//         flippedImg: "https://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "https://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     },
//     s5: {
//         name: "space5",
//         flipped: false,
//         flippedImg: "https://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "https://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     },
//     s6: {
//         name: "space6",
//         flipped: false,
//         flippedImg: "https://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "https://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     },
//     s7: {
//         name: "space7",
//         flipped: false,
//         flippedImg: "https://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "https://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     },
//     s8: {
//         name: "space8",
//         flipped: false,
//         flippedImg: "ihttps://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "https://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     },
//     s9: {
//         name: "space9",
//         flipped: false,
//         flippedImg: "https://previews.123rf.com/images/haden65/haden651308/haden65130800043/21651543-gold-letter-x-isolated.jpg",
//         unflippedImg: "ihttps://static1.squarespace.com/static/5c102eda8ab72298fe5f7334/t/5c10320baa4a99188a2866d3/1577590823147/"
//     }
// };


var counter = 0;

//create varible counting each turn
//use modulus to determine even or odd count 
//check even or odd to player




// /* -------------Functions------------*/
let messageBoard = document.querySelector(".message-board");
let squares = document.querySelectorAll("img");
let mainGameFunk = function() {
    // document.querySelectorAll("img").addEventListener("click", flippingSquare);
    squares.forEach(function(square, index) {
        square.clicked = false;
        square.addEventListener("click", function() {
            // console.log(index);
            turnTracker();
            //change img
            if (counter % 2 == 0) {

                square.src = "data:image/png;base64,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";
            } else {
                square.src = "https://i.pinimg.com/originals/fc/d7/90/fcd7906e849c123200403029056612fe.png";
            }
        })
    })

}

// let flippingSquare = function(e) {
//             //first determined what square was clicked
//     if (squares[e.target.id].flipped) {
//                 //determine players turn
//         turnTracker();
//                 //change img according to the player
//          e.target.src = squares[e.target.id].flippedImg;
//                 //then make make square no longer flippable
//             }
//             //change img to clicked square to player imag
//         }
let turnTracker = function() {
    if (counter % 2 == 0) {
        var player1 = "Player One";
        // let X = true;
        counter = counter + 1;
        //dom to message board
        messageBoard.innerHTML = "Player Two's Turn";
        // console.log(counter);÷

    } else {
        var player2 = "Player Two"
        // let X = false;
        counter = counter + 1;
        //dom to message board
        messageBoard.innerHTML = "Player One's Turn";
    }
    // console.log(counter);
}

//make two playerClicked arrays
const playerOneClicked = [];
const playerTwoClicked =[];


//make const for win 
const win = [
[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2],
[4, 5, 6], [4, 6, 5], [5, 6, 4], [5, 4, 6], [6, 5, 4], [6, 4, 5],
[7, 8, 9], [7, 9, 8], [8, 9, 7], [8, 7, 9], [9, 8, 7], [9, 7, 8],
[1, 4, 7], [1, 7, 4], [7, 1, 4], [7, 4, 1], [4, 1, 7], [4, 7, 1],
[2, 5, 8], [2, 8, 5], [5, 8, 2], [5, 2, 8], [8, 2, 5], [8, 5, 2],
[3, 6, 9], [3, 9, 6], [6, 9, 3], [6, 3, 9], [9, 3, 6], [9, 6, 3],
[1, 5, 9], [1, 9, 5], [5, 9, 1], [5, 1, 9], [9, 1, 5], [9, 5, 1],
[3, 5, 7], [3, 7, 5], [5, 3, 7], [5, 7, 3], [7, 5, 3], [7, 3, 5]
];
//check win and losing and tie functions
// function checkWin() {
//     if (playerOneClicked[])
// };
//win and lose and tie function
//reset game function


document.addEventListener("DOMContentLoaded", function() {
    mainGameFunk();
    // document.querySelector(".game-space").addEventListener("click", flippingSquare);
}
)