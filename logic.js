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
        let r = 0    
        let squereElem = ''
        const shpesArray = [lShape,tShape,sShape,iShape] // randomized the shape generationg
        const shapeElem = document.createElement('div')
        shapeElem.classList = 'shape-container'
        gameContainer.appendChild(shapeElem)
        // shape builder  
        shapeElem.style.display = shpesArray[r].styleProp.display  
        shapeElem.style.position = shpesArray[r].styleProp.position
        shapeElem.style.gridTemplateColumns = shpesArray[r].styleProp['grid-template-columns']
        shapeElem.style.width = shpesArray[r].styleProp.width
        shapeElem.style.height = shpesArray[r].styleProp.height
        shapeElem.style.gridRow = shpesArray[r].styleProp['grid-row']


        shpesArray[3].matrix.forEach((el) => {
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
    
        shapeElem.style.top = "-30px"
        shapeElem.style.left = "90px"
        return shapeElem
    }

    // ------------------------------- Collision detection ----------------------------------------

    checkCollisionBottom () { // Check squere collision on board squere by squere
        const staticElem = document.querySelectorAll('.occupied') // All occupied squeres on board
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
             
        activeChild.forEach(element => {
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })
        
        // Comparing moving squeres to all other squers on board
        for(let i=0; i< this.occupiedArray.length; i++){
            if(this.occupiedArray[i].getBoundingClientRect().bottom === gameContainer.getBoundingClientRect().bottom){
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
    // ----------------------------------- Side border collison check ------------------------------------------------

    checkCollisionBorders (shapeElement,e) {
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
        let isNotOutOfBound = true;  

        activeChild.forEach(element => { // Creation of only occupied active array for comparisson 
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })
        // console.log(e.code)
        for(let i = 0; i < this.occupiedArray.length; i++){
            if(e.code === 'ArrowLeft') {
                if(this.occupiedArray[i].getBoundingClientRect().left > gameContainer.getBoundingClientRect().left){ 
                    isNotOutOfBound = true;
                } else {
                    isNotOutOfBound = false;
                    this.occupiedArray = []
                    break
                }
            } else if(e.code === 'ArrowRight'){
                if(this.occupiedArray[i].getBoundingClientRect().right < gameContainer.getBoundingClientRect().right){ 
                    isNotOutOfBound = true;
                } else {
                    isNotOutOfBound = false;
                    this.occupiedArray = []
                    break
                }       
            } 
        }
        this.occupiedArray = []
        return isNotOutOfBound
    }

    // ------------------------------------ Shape collision with sides of other shapes -----------------------------
    leftCheckShapeSideCollision () {
        const staticElem = document.querySelectorAll('.occupied')
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
        let isNotOutOfBound = true;  

        activeChild.forEach(element => { // Creation of only occupied active array for comparisson 
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })

        for(let i=0; i< this.occupiedArray.length; i++){
            for(let j = 0; j < (staticElem.length) - (this.occupiedArray.length); j++) {    
                if(this.occupiedArray[i].getBoundingClientRect().left === staticElem[j].getBoundingClientRect().right &&
                   this.occupiedArray[i].getBoundingClientRect().bottom === staticElem[j].getBoundingClientRect().bottom) {        
                    return isNotOutOfBound = false
                } else {      
                    isNotOutOfBound = true
                }           
            }
        }
        return isNotOutOfBound
    }

    rightCheckShapeSideCollision () {
        const staticElem = document.querySelectorAll('.occupied')
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
        let isNotOutOfBound = true;  

        activeChild.forEach(element => { // Creation of only occupied active array for comparisson 
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })

        for(let i=0; i< this.occupiedArray.length; i++){
            for(let j = 0; j < (staticElem.length) - (this.occupiedArray.length); j++) {    
                if(this.occupiedArray[i].getBoundingClientRect().right === staticElem[j].getBoundingClientRect().left &&
                   this.occupiedArray[i].getBoundingClientRect().bottom === staticElem[j].getBoundingClientRect().bottom) {        
                    return isNotOutOfBound = false
                } else {      
                    isNotOutOfBound = true
                }           
            }
        }
        return isNotOutOfBound
    }

    rotationDirection(){
        const staticElem = document.querySelectorAll('.occupied')
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
        let rotateDirection = {
            direction: "",
            invokeCounter: [],
        } 

        activeChild.forEach(element => { // Creation of only occupied active array for comparisson 
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })
        for(let i = 0; i < this.occupiedArray.length; i++) {
            if(this.occupiedArray[i].getBoundingClientRect().right > gameContainer.getBoundingClientRect().right){
                rotateDirection.direction = 'left'
                rotateDirection.invokeCounter.push('call') 
                console.log('wow');
            }else if(this.occupiedArray[i].getBoundingClientRect().left < gameContainer.getBoundingClientRect().left){
                rotateDirection.direction  = 'right'
                rotateDirection.invokeCounter.push('call') 
                console.log('nana');
            } 
        }
        return rotateDirection
    }

}

export default GameLogic