
// board=empty => click character -> start button -> click box (player/computer) -> winning/losing/nowinner option-> check result -> click to restart

//player 1,2 (turn) setting 
//winning case/message setting
//losing case/message setting
//no winner case/message setting
//reset game button settling


console.log('hi')

const emptyBoard = () => {
    let square = document.getElementsByClassName('square')

    for (let i = 0; i < square.length; i++) {
        square[i].addEventListener('click', event => {
            let player = document.getElementsByName('character')
            let characterName = ""
            //get current selected character name - what character selected 
            for (let j = 0; j < player.length; j++) {
                if (player[j].checked == true) {
                    characterName = player[j].value

                }
            }

            //checking if the square elements contains child element of type image 
            //if there are no child images move on to creating images 
            // if there are child images do not add images
            let childElements = square[i].childNodes
            let foundImage = false
            for (let e = 0; e < childElements.length; e++) {
                console.log(childElements[e].nodeName)
                if (childElements[e].nodeName == 'IMG') {
                    console.log("found image")
                    foundImage = true
                }
            }
            if (foundImage == false) {
                //create image 
                console.log("Choosen character:" + characterName + " Square" + i)
                let img = document.createElement('img')
                img.src = "./img/" + characterName + ".png"
                square[i].appendChild(img)
            }


            // have to connect the character i clicked
            // switch statement????
            let winCase = {
                case1: "[0], [1], [2]",
                case2: "[3], [4], [5]",
                case3: "[6], [7], [8]",
                case4: "[0], [3], [6]",
                case5: "[1], [4], [7]",
                case6: "[2], [5], [8]",
                case7: "[0], [4], [8]",
                case8: "[2], [4], [6]"
            }

            for (let s = 0; s < winCase.length; s++) {
                switch (winCase[s]) {
                    case 0:
                        break;
                    case 1:
                        break;
                    case 2:
                        break;
                    case 3:
                        break;
                    case 4:
                        break;
                    case 5:
                        break;
                    case 6:
                        break;
                    case 7:
                        break;
                    default:
                        text: "keep playing"
                }


            }

        })

        //show which box you are on
        square[i].addEventListener("mouseover", event => {
            console.log("square" + i)
        })
    }
}

emptyBoard()



const startGame = () => {
    let character = document.getElementsByName('character')
    for (let j = 0; j < character.length; j++) {
        character[j].checked = true
        character[j].addEventListener('click', event => {
            console.log(character[j].value)
            if (character[j].checked == true) {
                let startBtn = document.getElementById('start')
                startBtn.innerText = character[j].value
            }
        })

    }

}

startGame()




const loseGame = () => {

}

const endGame = () => {

}





document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start').addEventListener('click', start)
})









