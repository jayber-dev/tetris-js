import Logic from './logic.js'
import movement from './movement.js'


// ----------------------------------------- Constants initialization ----------------------
const COL = 10
const ROW = 20
const SQUERE_SIZE = 30

const shapeElem = document.createElement('div')
const gameContainer = document.querySelector('.game-container')

for(let i= 0; i< COL * ROW; i++){
    const gameBoard = document.createElement('div')
    gameBoard.classList.add('empty-squere')
    gameContainer.appendChild(gameBoard)
}

gameContainer.style.width = COL * SQUERE_SIZE+ 'px'
gameContainer.style.height = ROW * SQUERE_SIZE+ 'px'

const squereElem = document.querySelectorAll('.empty-squere')

// shapes wrapper

// 2D ARRAY BUILDER
let boardArray =[];

for(let i = 0; i < squereElem.length; i += 10) {
    const tempArr = []
    for(let j = 0;j < COL; j++){
        tempArr.push(squereElem[j+i])
    }
    boardArray.push(tempArr)
}

console.table(boardArray);

// --------------------------------------- game progress --------------------------------------
console.log(gameContainer.getBoundingClientRect());
let logic = new Logic(shapeElem, -30 ,90);
let move = new movement(shapeElem,-30 ,90)
let shapeElement = logic.shapeGenerator();
// game loop -----------------------------
const shapeHandler = setInterval(()=> { 
    // debugger
    let isCollide = logic.checkCollisionBottom()
    if(isCollide){
        move.downMove(shapeElement, 0, 90)
    } else {
        logic = new Logic(shapeElem, 0 ,90)
        move = new movement(shapeElem,0 ,90)
        shapeElement = logic.shapeGenerator()
    }
}, 1000)


// -------------------------------------- EVENT LISTENERS -------------------------------------
window.addEventListener('keydown', (e) => {
    
    if(e.code === 'ArrowRight'){
        move.rightMove(shapeElement,e)
    }
})

window.addEventListener('keydown', (e) => {
    
    if(e.code === 'ArrowLeft'){
        move.leftMove(shapeElement,e)
    }
})

window.addEventListener('keydown', (e) => {
    
    if(e.code === 'ArrowDown'){
        move.downMove(shapeElement)
    }
})

window.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.code === 'Space'){
        move.pieceRotation(shapeElement,e)
    }
})



