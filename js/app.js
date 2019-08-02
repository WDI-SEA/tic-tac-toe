const gamePieces = {}
const validMoves= {
    "0,0": ["1,0", "1,1", "0,1"],
    "0,1": ["1,1", "1,0", "1,2", "0,0", "0,2"],
    "0,2": ["1,2", "1,1", "1,3", "0,1", "0,3"],
    "0,3": ["1,3", "1,2", "1,4", "0,2", "0,4"],
    "0,4": ["1,4", "1,3", "1,5", "0,3", "0,5"],
    "0,5": ["1,5", "1,4", "0,4"],
    "1,0": ["0,0", "0,1", "2,0", "2,1", "1,1"],
    "1,1": ["0,1", "0,0", "0,2", "2,1", "2,0", "2,2", "1,0", "1,2"],
    "1,2": ["0,2", "0,1", "0,3", "2,2", "2,1", "2,3", "1,1", "1,3"],
    "1,3": ["0,3", "0,2", "0,4", "2,3", "2,2", "2,4", "1,2", "1,4"],
    "1,4": ["0,4", "0,3", "0,5", "2,4", "2,3", "2,5", "1,3", "1,5"],
    "1,5": ["0,5", "0,4", "2,5", "2,4", "1,4"],
    "2,0": ["1,0", "1,1", "3,0", "3,1", "2,1"],
    "2,1": ["1,1", "1,0", "1,2", "3,1", "3,0", "3,2", "2,0", "2,2"],
    "2,2": ["1,2", "1,1", "1,3", "3,2", "3,1", "3,3", "2,1", "2,3"],
    "2,3": ["1,3", "1,2", "1,4", "3,3", "3,2", "3,4", "2,2", "2,4"],
    "2,4": ["1,4", "1,3", "1,5", "3,4", "3,3", "3,5", "2,3", "2,5"],
    "2,5": ["1,5", "1,4", "3,5", "3,4", "2,4"],
    "3,0": ["2,0", "2,1", "4,0", "4,1", "3,1"],
    "3,1": ["2,1", "2,0", "2,2", "4,1", "4,0", "4,2", "3,0", "3,2"],
    "3,2": ["2,2", "2,1", "2,3", "4,2", "4,1", "4,3", "3,1", "3,3"],
    "3,3": ["2,3", "2,2", "2,4", "4,3", "4,2", "4,4", "3,2", "3,4"],
    "3,4": ["2,4", "2,3", "2,5", "4,4", "4,3", "4,5", "3,3", "3,5"],
    "3,5": ["2,5", "2,4", "4,5", "4,4", "3,4"],
    "4,0": ["3,0", "3,1", "5,0", "5,1", "4,1"],
    "4,1": ["3,1", "3,0", "3,2", "5,1", "5,0", "5,2", "4,0", "4,2"],
    "4,2": ["3,2", "3,1", "3,3", "5,2", "5,1", "5,3", "4,1", "4,3"],
    "4,3": ["3,3", "3,2", "3,4", "5,3", "5,2", "5,4", "4,2", "4,4"],
    "4,4": ["3,4", "3,3", "3,5", "5,4", "5,3", "5,5", "4,3", "4,5"],
    "4,5": ["3,5", "3,4", "5,5", "5,4", "4,4"],
    "5,0": ["4,0", "4,1", "6,0", "6,1", "5,1"],
    "5,1": ["4,1", "4,0", "4,2", "6,1", "6,0", "6,2", "5,0", "5,2"],
    "5,2": ["4,2", "4,1", "4,3", "6,2", "6,1", "6,3", "5,1", "5,3"],
    "5,3": ["4,3", "4,2", "4,4", "6,3", "6,2", "6,4", "5,2", "5,4"],
    "5,4": ["4,4", "4,3", "4,5", "6,4", "6,3", "6,5", "5,3", "5,5"],
    "5,5": ["4,5", "4,4", "6,5", "6,4", "5,4"],
    "6,0": ["5,0", "5,1", "6,1"],
    "6,1": ["5,1", "5,0", "5,2", "6,0", "6,2"],
    "6,2": ["5,2", "5,1", "5,3", "6,1", "6,3"],
    "6,3": ["5,3", "5,2", "5,4", "6,2", "6,4"],
    "6,4": ["5,4", "5,3", "5,5", "6,3", "6,5"],
    "6,5": ["5,5", "5,4", "6,4"]
}
var currentPlayer
var spotsInRow = 0
document.addEventListener('DOMContentLoaded', function(){
    createBoard()
})

const createBoard = () => {
    console.log('here')
    gamePieces.board = document.getElementById('board')
    gamePieces.display = document.getElementById('display')
    gamePieces.columns = []
    currentPlayer = 'red-player'
    for(let columnIdx=0; columnIdx<7; columnIdx++){
        let columnDiv = document.createElement('div')
        columnDiv.id = `column${columnIdx}`
        columnDiv.classList.add('column')
        for(let rowIdx=0; rowIdx<6; rowIdx++){
            let element = document.createElement('div')
            element.id = `${columnIdx},${rowIdx}`
            element.classList.add('square')
            let spot = document.createElement('div')
            spot.classList.add('empty-spot')
            element.append(spot)
            columnDiv.append(element)
            gamePieces[element.id] = element
        }
        gamePieces.board.append(columnDiv)
        gamePieces[`column${columnIdx}`] = Array.from(columnDiv.childNodes).reverse()
        document.getElementById(`column${columnIdx}`).addEventListener('click', handleColumnClick)
    }
    let display = document.createElement('h1')
    let button = document.createElement('input')
    button.type = 'submit'
    button.value = 'RESET GAME'
    button.addEventListener('click',function(){
        while(gamePieces.board.firstChild){
            gamePieces.board.removeChild(gamePieces.board.firstChild)
        }   
        while(gamePieces.display.firstChild){
            gamePieces.display.removeChild(gamePieces.display.firstChild)
        }
        gamePieces.button
        createBoard()
    })
    display.textContent = currentPlayer.replace('-',' ').toUpperCase() + "'S TURN"
    gamePieces.display.append(display)
    gamePieces.display.append(button)


}

const dropPiece = (event) => {
    let column = gamePieces[event.currentTarget.id]
    let spaceCount = 0
    for(space of column){
        let spot = space.childNodes[0]
        if(spot.classList.contains('empty-spot')){
            spot.classList.remove('empty-spot')
            if(currentPlayer==='red-player'){
                spot.classList.add('red-player')
                checkWinner(space.id)
                return
            }
            else if(currentPlayer==='yellow-player'){
                spot.classList.add('yellow-player')
                checkWinner(space.id)
                return
            }
            spaceCount++
        }
    }
    if(spaceCount>=6){
        column.removeEventListener('click')
    }
}

const checkWinner = (spaceId) => {
    let originX = parseInt(spaceId.split(',')[0])
    let originY = parseInt(spaceId.split(',')[1])
    let spaceMoves = validMoves[spaceId]
    for(move of spaceMoves){
        let X = parseInt(move.split(',')[0])
        let Y =parseInt( move.split(',')[1])
        if(gamePieces[`${X},${Y}`].childNodes[0].classList.contains(`${currentPlayer}`)){
            spotsInRow++
            traverseLine(X-originX,Y-originY,X,Y)
            spotsInRow = 0
        }
    }
    if(currentPlayer==='red-player'){
        currentPlayer = 'yellow-player'
    }
    else if(currentPlayer==='yellow-player'){
        currentPlayer = 'red-player'
    }
}

const handleColumnClick = (event) => {
    dropPiece(event)
}

const computeValidMoves = () => {
    for(let columnIdx=0;columnIdx<7;columnIdx++){
        for(let rowIdx=0;rowIdx<6;rowIdx++){
            let moves = []
            if(columnIdx-1>=0){
                moves.push(`${columnIdx-1},${rowIdx}`)
                if(rowIdx-1>=0){
                    moves.push(`${columnIdx-1},${rowIdx-1}`)
                }
                if(rowIdx+1<=5){
                moves.push(`${columnIdx-1},${rowIdx+1}`)
                }
            }
            if(columnIdx+1<=6){
                moves.push(`${columnIdx+1},${rowIdx}`)
                if(rowIdx-1>=0){
                    moves.push(`${columnIdx+1},${rowIdx-1}`)
                }
                if(rowIdx+1<=5){
                moves.push(`${columnIdx+1},${rowIdx+1}`)
                }
            }
            if(rowIdx-1>=0){
                moves.push(`${columnIdx},${rowIdx-1}`)
            }
            if(rowIdx+1<=5){
                moves.push(`${columnIdx},${rowIdx+1}`)
            }
            validMoves[`${columnIdx},${rowIdx}`] = moves
        }
    }
    console.log(validMoves)
}

const declareWinner = () =>{
    console.log(`${currentPlayer} is the winner!`)
    removeColumnListeners()
}

const removeColumnListeners = () => {
    for(let i=0;i<7;i++){
        document.getElementById(`column${i}`).removeEventListener('click')
    }
}

const traverseLine = (slopeX,slopeY,X,Y) => {
    let spot = gamePieces[`${X+slopeX},${Y+slopeY}`]
    if(spot){
        if(spot.childNodes[0].classList.contains(`${currentPlayer}`)){
            spotsInRow++
            if(spotsInRow>=3){
                declareWinner()
                return
            }
            else{
                traverseLine(slopeX,slopeY,X+slopeX,Y+slopeY)
            }
        }
    }
    return
}

