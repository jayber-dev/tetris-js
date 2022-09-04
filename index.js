const topElem = document.querySelector('.game-container')
const COL = 10
const ROW = 20
for(i= 0; i< COL * ROW; i++){
    const gameBoard = document.createElement('div')
    gameBoard.classList.add('squere')
    topElem.appendChild(gameBoard)
}



const squereElem = document.querySelectorAll('.squere')

let twoDimArr =  new Array()
let tempArr =[]
for(let i = 0; i < squereElem.length; i=i+10){
    
    for(let j = 0; j < 10; j++){    
        tempArr.push(squereElem[i+j])
    }
    twoDimArr.push(tempArr)
    tempArr =[]
}

console.table(twoDimArr);

let elemPos = 4

// setInterval(()=> {
    
//     squereElem[elemPos].classList='squere shape';
//     squereElem[elemPos + 1].classList='squere shape';
//     squereElem[elemPos + 2].classList='squere shape';
    

//     elemPos += 10
//     squereElem[elemPos - 20].classList = 'squere';
//     squereElem[elemPos - 19].classList = 'squere';
//     squereElem[elemPos - 28].classList = 'squere';
    
    
// }, 1000)

