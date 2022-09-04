import {iShape,lShape} from './shapes.js'

const topElem = document.querySelector('.game-container')
const COL = 10
const ROW = 20
const SQUERE_SIZE = 30

// for(let i= 0; i< COL * ROW; i++){
//     const gameBoard = document.createElement('div')
//     gameBoard.classList.add('squere')
//     topElem.appendChild(gameBoard)
// }

topElem.style.width = COL * SQUERE_SIZE+'px'
topElem.style.height = ROW * SQUERE_SIZE+'px'

const squereElem = document.querySelectorAll('.squere')

let boardArray =[];

// shapes wrapper
const top = document.createElement('div')
top.classList = 'shape-container'
topElem.appendChild(top)

console.log(lShape);

lShape.forEach((el) => { 
    el.forEach(i => {
        if(i === 1) {
            const test = document.createElement('div')
            test.classList = 'squere shape'
            top.appendChild(test)
        } else {
            const test = document.createElement('div')
            test.classList = 'squere'
            top.appendChild(test)
        }
    })   
});
// const test = document.createElement('div')
// test.classList = 'squere shape'
// topElem.appendChild(test)

// for(let i = 0; i < 20;i++){
//     let tempArr = [];
//     for(let j =0; j<10; j++){
//         tempArr.push(0)
//     }
//     boardArray.push(tempArr)
// }


console.log(boardArray);

let boardCol = 0;
let boardRow = 0;

setInterval(()=> {
    
    top.style.top = `${boardRow}px`
    boardRow += 30
}, 1000)

