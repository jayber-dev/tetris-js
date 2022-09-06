import { iShape, lShape, tShape ,sShape} from './shapes.js'

const gameContainer = document.querySelector('.game-container')

class GameLogic {
    constructor(shapeElem, boardRow,boardCol){
        this.boardRow = boardRow;
        this.boardCol = boardCol;
        this.shapeElem = shapeElem
        this.rotationDegree = 0;
        this.occupiedArray = []
    }

    shapeGenerator (){        
        let squereElem = ''
        const shpesArray = [iShape,lShape,tShape,sShape] // randomized the shape generationg
        const shapeElem = document.createElement('div')
        shapeElem.classList = 'shape-container'
        gameContainer.appendChild(shapeElem)
        // shape builder        
        shpesArray[1].forEach((el) => { 
            el.forEach(i => {
                if(i === 1) {
                    squereElem = document.createElement('div')
                    squereElem.classList = 'squere shape occupied'
                    squereElem.fixedOnPosition = 0;
                    shapeElem.appendChild(squereElem)
                } else {
                    const squereElem = document.createElement('div')
                    squereElem.fixedOnPosition = 0;
                    squereElem.classList = 'squere'
                    shapeElem.appendChild(squereElem)
                }
        })
           
    });
        return shapeElem
    }

    // ------------------------------- Collision detection ----------------------------------------

    checkCollision () { // Check squere collision on board squere by squere
        const staticElem = document.querySelectorAll('.occupied') // All occupied squeres on board
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
             
        activeChild.forEach(element => {
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })
        
        // Comparing moving squeres to all other squers on board
        for(let i=0; i< this.occupiedArray.length; i++){
            if(this.occupiedArray[i].getBoundingClientRect().bottom === 700){
                staticElem.forEach(element => {
                    element.fixedOnPosition = 1
                })
                this.occupiedArray = []
                return false
            };

            for(let j = 0; j < (staticElem.length) - (this.occupiedArray.length); j++) {
                
                if(this.occupiedArray[i].getBoundingClientRect().bottom === staticElem[j].getBoundingClientRect().top && 
                    this.occupiedArray[i].getBoundingClientRect().left === staticElem[j].getBoundingClientRect().left) {  
                    staticElem.forEach(element => {
                        element.fixedOnPosition = 1
                    })
                    this.occupiedArray = []
                    return false
                }             
            }
        }
        this.occupiedArray = []
        return true
    }

    rightBoundCollisionCheck() {
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
        let isNotOutOfBound = true;
        activeChild.forEach(element => {
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })

        for(let i = 0; i < this.occupiedArray.length; i++) {
            if(this.occupiedArray[i].getBoundingClientRect().right < 351){ 
                isNotOutOfBound = true;
            } else {
                isNotOutOfBound = false;
                this.occupiedArray = []
                break
            }    
        }
        this.occupiedArray = []
        return isNotOutOfBound
    }

    leftBoundCollisionCheck() {
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
        let isNotOutOfBound = true;     
        activeChild.forEach(element => {
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })

        for(let i = 0; i < this.occupiedArray.length; i++) {
            if(this.occupiedArray[i].getBoundingClientRect().left > 51){ 
                isNotOutOfBound = true;
            } else {
                isNotOutOfBound = false;
                this.occupiedArray = []
                break
            }    
        }
        this.occupiedArray = []
        return isNotOutOfBound
    }
    // -------------------------- movement handling -------------------------------

    downMove (shapeElement) {
        
        if(this.checkCollision()){   
            this.boardRow += 30;
            shapeElement.style.top = `${this.boardRow}px`;
        } 
        
    }

    rightMove (shapeElement) {  
         
        if(this.rightBoundCollisionCheck()) {
            this.boardCol += 30
            shapeElement.style.left = this.boardCol +'px' 
        }
                       
    }
    
    leftMove(shapeElement) {
           
        if(this.leftBoundCollisionCheck()){ 
                this.boardCol -= 30
                shapeElement.style.left = this.boardCol +'px'        
        } 
    }

    
    pieceRotation (shapeElement) {
        if(this.checkCollision())
        this.rotationDegree += 90
        shapeElement.style.transform = `rotate(${this.rotationDegree}deg)`
    }

}

export default GameLogic