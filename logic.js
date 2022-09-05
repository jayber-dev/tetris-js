import { iShape, lShape, tShape ,sShape} from './shapes.js'

const gameContainer = document.querySelector('.game-container')

class GameLogic {
    constructor(shapeElem, boardRow,boardCol){
        this.boardRow = boardRow;
        this.boardCol = boardCol;
        this.shapeElem = shapeElem
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

    checkShapeButtom (shapeElement) {
        const staticElem = document.querySelectorAll('.occupied')
        const shapeContainer = document.querySelectorAll('.shape-container')
        if(this.boardRow < gameContainer.clientHeight -80) {
            return true
        }
        (shapeContainer[shapeContainer.length-1].childNodes.forEach(element => {
            element.fixedOnPosition = 1
        }))
        return false
    }
    

    checkCollision () {
        const staticElem = document.querySelectorAll('.occupied')
        const shapeContainer = document.querySelectorAll('.shape-container')
        const activeChild = shapeContainer[shapeContainer.length-1].childNodes
        const occupiedArray = []
        
        activeChild.forEach(element => {
            if(element.classList[2] === "occupied")
                occupiedArray.push(element)
        })

        console.log(occupiedArray);
        // comparing moving squeres to all other squers on board
        for(let i=0;i< occupiedArray.length -1;i++){
            for(let j = 0;j < (staticElem.length - 1) - (occupiedArray.length); j++) {
                // if(i === j) {
                //     continue
                console.log(occupiedArray[i])
                console.log(occupiedArray[i].getBoundingClientRect().bottom);
                if(occupiedArray[i].getBoundingClientRect().bottom === staticElem[j].getBoundingClientRect().top && occupiedArray[i].getBoundingClientRect().left === staticElem[j].getBoundingClientRect().left) {
                    
                    console.log(`${staticElem[i].attributes} is ${staticElem[i].getBoundingClientRect().top} and${staticElem[j]} ${staticElem[j].getBoundingClientRect().bottom}`);
                    console.log('wow');
                    staticElem.forEach(element => {
                        element.fixedOnPosition = 1
                    })
                    return false
                }
                
                
            }
        }
        return true
        // staticElem[i].getBoundingClientRect().left === staticElem[j].getBoundingClientRect().left
    }


    // -------------------------- movement handling -------------------------------

    downMove (shapeElement) {
        
        if(this.boardRow < gameContainer.clientHeight -80){
            this.boardRow += 30;
            shapeElement.style.top = `${this.boardRow}px`;
        } 
        
    }

    rightMove (shapeElement) {       
        if(this.boardCol < 210){ 
            this.boardCol += 30
            shapeElement.style.left = this.boardCol +'px'        
        } 
    }

    leftMove(shapeElement) {
        if(this.boardCol >0){
            this.boardCol -= 30
            shapeElement.style.left = this.boardCol +'px'    
        }
    }

    
}

export default GameLogic