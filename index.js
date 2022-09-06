import Logic from './logic.js'
import movement from './movement.js'


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
// let boardArray =[];
// for(let i = 0; i < 20;i++){
//     let tempArr = [];
//     for(let j =0; j<10; j++){
//         tempArr.push(0)
//     }
//     boardArray.push(tempArr)
// }

// console.table(boardArray);


// --------------------------------------- game progress --------------------------------------
console.log(gameContainer.getBoundingClientRect());
let logic = new Logic(shapeElem,0 ,120);
let shapeElement = logic.shapeGenerator();
let move = new movement(shapeElem,0 ,120)
// game loop -----------------------------
const shapeHandler = setInterval(()=> { 
    // debugger
    let isCollide = logic.checkCollisionTop()
    if(isCollide){
        move.downMove(shapeElement, 0, 120)
    } else {
        logic = new Logic(shapeElem,0 ,120)
        move = new movement(shapeElem,0 ,120)
        shapeElement = logic.shapeGenerator()
    }
    // console.log(shapeElement.offsetTop)
}, 1000)

// --------------------------------------
// -------------------------------------- EVENT LISTENERS -------------------------------------
window.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.code === 'ArrowRight'){
        move.rightMove(shapeElement)
    }
})

window.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.code === 'ArrowLeft'){
        move.leftMove(shapeElement)
    }
})

window.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.code === 'ArrowDown'){
        move.downMove(shapeElement)
    }
})

window.addEventListener('keydown', (e) => {
    console.log(e);
    if(e.code === 'Space'){
        move.pieceRotation(shapeElement)
    }
})



