import {iShape,lShape, sShape, tShape} from './shapes.js'
import movement from './movement.js'
import Logic from './logic.js'


const gameContainer = document.querySelector('.game-container')
const COL = 10
const ROW = 20
const SQUERE_SIZE = 30

for(let i= 0; i< COL * ROW; i++){
    const gameBoard = document.createElement('div')
    gameBoard.classList.add('squere')
    gameContainer.appendChild(gameBoard)
}

gameContainer.style.width = COL * SQUERE_SIZE+ 20+'px'
gameContainer.style.height = ROW * SQUERE_SIZE+ 39+'px'

const squereElem = document.querySelectorAll('.squere')

let boardArray =[];

// shapes wrapper
const shapeElem = document.createElement('div')
shapeElem.classList = 'shape-container'
gameContainer.appendChild(shapeElem)

// shape builder
// sShape.forEach((el) => { 
//     el.forEach(i => {
//         if(i === 1) {
//             const test = document.createElement('div')
//             test.classList = 'squere shape occupied'
//             test.Occupied = 1;
//             shapeElem.appendChild(test)
//         } else {
//             const test = document.createElement('div')
//             test.Occupied = 0;
//             test.classList = 'squere'
//             shapeElem.appendChild(test)
//         }
//     })   
// });

for(let i = 0; i < 20;i++){
    let tempArr = [];
    for(let j =0; j<10; j++){
        tempArr.push(0)
    }
    boardArray.push(tempArr)
}

const logic = new Logic(shapeElem)
    logic.shapeGenerator()
setInterval(()=> { 
        
    logic.downMove() 
    
}, 500)

window.addEventListener('keyup', (e) => {
    console.log(e);
    if(e.code === 'ArrowRight'){
        logic.rightMove()
    }
})

window.addEventListener('keyup', (e) => {
    console.log(e);
    if(e.code === 'ArrowLeft'){
        logic.leftMove()
    }
})

