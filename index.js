import Logic from './logic.js'
import movement from './movement.js'

// TODO:randomize shapes creation
// TODO: row complete logic

// ------------------------------------ Constants initialization -------------------------------
const COL = 10
const ROW = 20
const SQUERE_SIZE = 30

const shapeElem = document.createElement('div')
const gameContainer = document.querySelector('.game-container')


gameContainer.style.width = COL * SQUERE_SIZE+ 'px'
gameContainer.style.height = ROW * SQUERE_SIZE+ 'px'
let isGame = false



for(let i= 0; i< COL * ROW; i++){
    const gameBoard = document.createElement('div')
    gameBoard.classList.add('empty-squere')
    gameContainer.appendChild(gameBoard)
}
const squereElem = document.querySelectorAll('.empty-squere')

// --------------------------------------- Game starter btn -----------------------------------
const startGameBtn = document.querySelector('button')
startGameBtn.addEventListener('click', () => {
    document.querySelector('button').disabled = true
    document.querySelector('h1').style.display = 'none'

    isGame =true
    gameProccess() 
    
})
// --------------------------------------- Game progress --------------------------------------
function gameProccess (){
    let logic = new Logic(shapeElem, -60 ,90);
    logic.restartGame()
    let move = new movement(shapeElem, logic.boardRow ,logic.boardCol)
    let shapeElement = logic.shapeGenerator();
    

// Game loop -----------------------------

    const shapeHandler = setInterval(()=> {   
        let isCollideBottom = logic.checkCollisionBottom()
        if(isGame){
            if(isCollideBottom){
                move.downMove(shapeElement, 0, 0)
            } else {
                logic.checkCompleteRow()
                let stopGame = logic.checkCollisionTop()
                if(!stopGame) {
                    document.querySelector('h1').style.display = 'block'
                    clearInterval(shapeHandler)
                    startGameBtn.disabled = false
                }      
                logic = new Logic(shapeElem, -60 ,90)
                move = new movement(shapeElem,logic.boardRow ,logic.boardCol)
                shapeElement = logic.shapeGenerator()
            } 
        } 

    }, 200)

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
        
        if(e.code === 'ArrowUp'){
            move.pieceRotation(shapeElement,e)
        }
    })
    
    const leftBtn = document.querySelector('.move-left')
    leftBtn.addEventListener('click', (e) => {
        const direction = 'left'
        move.leftMove(shapeElement,e,direction)
    })
    document.querySelector('.move-right').addEventListener('click', (e) => {
        const direction = 'right'
        move.rightMove(shapeElement,e,direction)
    })
    document.querySelector('.rotate-piece').addEventListener('click', (e) => {
        move.pieceRotation(shapeElement,e)
    })
    
    

    
}











