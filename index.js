import {iShape,lShape, sShape, tShape} from './shapes.js'
import Logic from './logic.js'

const gameContainer = document.querySelector('.game-container')
const COL = 10
const ROW = 20
const SQUERE_SIZE = 30

// for(let i= 0; i< COL * ROW; i++){
//     const gameBoard = document.createElement('div')
//     gameBoard.classList.add('squere')
//     gameContainer.appendChild(gameBoard)
// }

gameContainer.style.width = COL * SQUERE_SIZE+ 'px'
gameContainer.style.height = ROW * SQUERE_SIZE+ 'px'

const squereElem = document.querySelectorAll('.squere')



// shapes wrapper
const shapeElem = document.createElement('div')
// shapeElem.classList = 'shape-container'
// gameContainer.appendChild(shapeElem)

// 2D ARRAY BUILDER
let boardArray =[];
for(let i = 0; i < 20;i++){
    let tempArr = [];
    for(let j =0; j<10; j++){
        tempArr.push(0)
    }
    boardArray.push(tempArr)
}

console.table(boardArray);


// --------------------------------------- game progress --------------------------------------

let logic = new Logic(shapeElem,0 ,0);
let shapeElement = logic.shapeGenerator();

// game loop -----------------------------
const shapeHandler = setInterval(()=> { 
    debugger
    logic.checkCollision()
    if(logic.checkShapeButtom()){
        logic.downMove(shapeElement)
    } else {
        logic = new Logic(shapeElem,0 ,0)
        shapeElement = logic.shapeGenerator()
    }
       
}, 1000)

// --------------------------------------
// -------------------------------------- EVENT LISTENERS -------------------------------------
window.addEventListener('keyup', (e) => {
    console.log(e);
    if(e.code === 'ArrowRight'){
        logic.rightMove(shapeElement)
    }
})

window.addEventListener('keyup', (e) => {
    console.log(e);
    if(e.code === 'ArrowLeft'){
        logic.leftMove(shapeElement)
    }
})

window.addEventListener('keyup', (e) => {
    console.log(e);
    if(e.code === 'ArrowDown'){
        logic.downMove(shapeElement)
    }
})

