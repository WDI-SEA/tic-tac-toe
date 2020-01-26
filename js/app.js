const emptyImg = "../img/empty.png";
const xImg = "../img/x.png";
const oImg = "../img/o.png";
let squares = [];

let gameInit = function() {
    //start each square as blank
    squares = [];
    for (let i = 0; i < 9; i++) {
        squares.push({
            state: "empty",
            image: emptyImg,
        });
    }
}

gameInit();
console.log(squares[8]);