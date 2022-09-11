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
        let r = 3    
        let squereElem = ''
        const shpesArray = [lShape,tShape,sShape,iShape] // randomized the shape generationg
        const shapeElem = document.createElement('div')
        shapeElem.classList = 'shape-container'
        gameContainer.appendChild(shapeElem)
        // Shape container style initilizer  
        shapeElem.style.display = shpesArray[r].styleProp.display  
        shapeElem.style.position = shpesArray[r].styleProp.position
        shapeElem.style.gridTemplateColumns = shpesArray[r].styleProp['grid-template-columns']
        shapeElem.style.width = shpesArray[r].styleProp.width
        shapeElem.style.height = shpesArray[r].styleProp.height
        shapeElem.style.gridRow = shpesArray[r].styleProp['grid-row']
        // Shape builder
        shpesArray[r].matrix.forEach((el) => {
            el.forEach(i => {
                if(i === 1) {
                    squereElem = document.createElement('div')
                    squereElem.classList = 'squere shape occupied'    
                    squereElem.fixedOnPosition = 0;
                    shapeElem.appendChild(squereElem)
                } else {
                    squereElem = document.createElement('div')
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

    // shapeGenerator1 (){ 
    //     debugger   
    //     let r = 3    
    //     let squereElem = ''
    //     const shpesArray = [lShape,tShape,sShape,iShape] // randomized the shape generationg
    //     const shapeElem = document.createElement('div')
    //     shapeElem.classList = 'shape-container'
    //     gameContainer.appendChild(shapeElem)
    //     // Shape container style initilizer  
        
    //     shapeElem.style.position = "abosulte"
    //     // shapeElem.style.gridTemplateColumns = shpesArray[r].styleProp['grid-template-columns']
    //     shapeElem.style.width = shpesArray[r].styleProp.width
    //     shapeElem.style.height = shpesArray[r].styleProp.height
    //     shapeElem.style.gridRow = shpesArray[r].styleProp['grid-row']
    //     // Shape builder
    //     for(let i= 0;i < shpesArray[r].matrix.length ;i++) {
    //         for(let j = 0; j <shpesArray[r].matrix[i].length; j++){
    //             if(shpesArray[r].matrix[i][j] === 1) {
    //                 squereElem = document.createElement('div')
    //                 squereElem.classList = 'squere shape occupied' 
    //                 let resi = i * 30
    //                 squereElem.fixedOnPosition = 0;
    //                 squereElem.style.top = `${resi}px`
    //                 let resj =j * 30
    //                 squereElem.style.left = `${resj}px`
    //                 shapeElem.appendChild(squereElem)
    //             } else {
    //                 squereElem = document.createElement('div')
    //                 squereElem.fixedOnPosition = 0;
    //                 squereElem.classList = 'squere'                
    //                 // squereElem.style.display = 'grid'
    //                 squereElem.fixedOnPosition = 0;
    //                 let resi = i * 30
    //                 squereElem.style.top = `${resi}px`
    //                 let resj = j * 30
    //                 squereElem.style.left = `${resj}px`
    //                 shapeElem.appendChild(squereElem)                  
    //             }
    //         }
                
    //         }
          
    
    //     shapeElem.style.top = "-30px"
    //     shapeElem.style.left = "90px"
    //     return shapeElem
    // }

    // ------------------------------- Collision detection ----------------------------------------
    // Current active shape builder //
    collisionDataBuilder(){
        const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes // Extraction of child elements of moving piece
             
        activeChild.forEach(element => {
            if(element.classList[2] === "occupied")
                this.occupiedArray.push(element)
        })
        return this.occupiedArray
    }
    
    setFixedOnEmptySqueres() {
        /* Sets a marker on the empty matrix to check where there is
        an occupied squere*/
        const emptySqueres = document.querySelectorAll('.empty-squere')
        const occupiedsqueres = document.querySelectorAll('.occupied')

        for(let i = occupiedsqueres.length - 4; i<occupiedsqueres.length; i++) {
            emptySqueres.forEach(emptySquere => {
                if(occupiedsqueres[i].getBoundingClientRect().x === emptySquere.getBoundingClientRect().x &&
                    occupiedsqueres[i].getBoundingClientRect().y === emptySquere.getBoundingClientRect().y) {
                        emptySquere.fixedOnPosition = 1 
                    }
            })
        }
    }

    rowRemoval(ArrayToRemove,rowIndex){
        let occupied = document.querySelectorAll('.occupied')
        occupied.forEach(squereElm => {
            ArrayToRemove.forEach(emptySquere => {
                if(squereElm.getBoundingClientRect().x === emptySquere.getBoundingClientRect().x &&
                squereElm.getBoundingClientRect().y === emptySquere.getBoundingClientRect().y){
                    console.log('must be removed');
                    squereElm.classList.remove("shape")
                    squereElm.classList.remove("occupied")
                    emptySquere.fixedOnPosition = 0;
                }
                 
            })
        })   
        this.moveRowsDown(ArrayToRemove,rowIndex)
    }

    moveRowsDown(rowsToManipulate,rowIndex) {
        let occupied = document.querySelectorAll('.occupied')
        let shapeElem = document.querySelectorAll('.shape-container')
        for(let i =0; i < occupied.length ; i++){
            const pos = occupied[i].getBoundingClientRect().top
            console.log(pos);

            // occupied[i].style.position = `absolute`
            // occupied[i].style.top = `${50}px`
        }
        console.log(this,rowsToManipulate);
    }

    checkCompleteRow(){
        /* Checks if row is full and needed to be handeled with row removal method 
        if row is complete invoke a rowRemoval method*/
        let counter = 0
        const COL =10
        let boardArray =[];
        const squereElem = document.querySelectorAll('.empty-squere')

        for(let i = 0; i < squereElem.length; i += 10) {
            const tempArr = []
            for(let j = 0;j < COL; j++){
                tempArr.push(squereElem[j+i])
            }
            boardArray.push(tempArr)
        }
        
        for(let i = 0; i < boardArray.length; i++){
            
            for(let j = 0; j < boardArray[i].length;j++){
                if(boardArray[i][j].fixedOnPosition === 1){
                    counter += 1
                    if(counter === 10) {
                        console.log(i);
                        this.rowRemoval(boardArray[i],i)
                    }
                } else {
                    counter = 0
                }
            }
            counter = 0
        }
        return false
       

    }

    checkCollisionBottom () { 
        /* Check squere collision on board squere by squere with the buttom border and the other 
        fixed in place squeres */
        const staticElem = document.querySelectorAll('.occupied') // All occupied squeres on board              
        const occupied = this.collisionDataBuilder()

        // Comparing moving squeres to all other squers on board
        for(let i=0; i< occupied.length; i++){
            if(occupied[i].getBoundingClientRect().bottom === gameContainer.getBoundingClientRect().bottom){
                staticElem.forEach(element => {
                    element.fixedOnPosition = 1
                    
                    this.setFixedOnEmptySqueres()
                })
                this.occupiedArray = []
                return false
            };

            for(let j = 0; j < (staticElem.length) - (occupied.length); j++) {        
                if(occupied[i].getBoundingClientRect().bottom === staticElem[j].getBoundingClientRect().top && 
                    occupied[i].getBoundingClientRect().left === staticElem[j].getBoundingClientRect().left) {  
                    staticElem.forEach(element => {
                        element.fixedOnPosition = 1
                        
                        this.setFixedOnEmptySqueres()
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
        // const shapeContainer = document.querySelectorAll('.shape-container') // All shapes on board
        let isNotOutOfBound = true; 
        
        const occupied = this.collisionDataBuilder()
        
        for(let i = 0; i < occupied.length; i++){
            if(e.code === 'ArrowLeft') {
                if(occupied[i].getBoundingClientRect().left > gameContainer.getBoundingClientRect().left){ 
                    isNotOutOfBound = true;
                } else {
                    isNotOutOfBound = false;
                    this.occupiedArray = []
                    break
                }
            } else if(e.code === 'ArrowRight'){
                if(occupied[i].getBoundingClientRect().right < gameContainer.getBoundingClientRect().right){ 
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
        let isNotOutOfBound = true;  

        const occupied = this.collisionDataBuilder()

        for(let i=0; i< occupied.length; i++){
            for(let j = 0; j < (staticElem.length) - (occupied.length); j++) {    
                if(occupied[i].getBoundingClientRect().left === staticElem[j].getBoundingClientRect().right &&
                  occupied[i].getBoundingClientRect().bottom === staticElem[j].getBoundingClientRect().bottom) { 
                    const occupied = this.collisionDataBuilder()       
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
        let isNotOutOfBound = true;  

        const occupied = this.collisionDataBuilder()

        for(let i=0; i<occupied.length; i++){
            for(let j = 0; j < (staticElem.length) - (occupied.length); j++) {    
                if(occupied[i].getBoundingClientRect().right === staticElem[j].getBoundingClientRect().left &&
                   occupied[i].getBoundingClientRect().bottom === staticElem[j].getBoundingClientRect().bottom) {        
                    const occupied = this.collisionDataBuilder()
                    return isNotOutOfBound = false
                } else {      
                    isNotOutOfBound = true
                }           
            }
        }
        return isNotOutOfBound
    }

    rotationDirection(){
        let rotateDirection = {
            direction: "",
            invokeCounter: [],
        } 
        
        const occupied = this.collisionDataBuilder()

        for(let i = 0; i < occupied.length; i++) {
            if(occupied[i].getBoundingClientRect().right > gameContainer.getBoundingClientRect().right){
                rotateDirection.direction = 'left'
                rotateDirection.invokeCounter.push('call') 
                console.log('wow');
            }else if(occupied[i].getBoundingClientRect().left < gameContainer.getBoundingClientRect().left){
                rotateDirection.direction  = 'right'
                rotateDirection.invokeCounter.push('call') 
                console.log('nana');
            } 
        }
        return rotateDirection
    }
}

export default GameLogic