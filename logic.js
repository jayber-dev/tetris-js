import { iShape, lShape, tShape ,sShape} from './shapes.js'

const gameContainer = document.querySelector('.game-container')

class GameLogic {
    constructor(shapeElem, boardRow,boardCol){
        this.boardRow = boardRow;
        this.boardCol = boardCol;
        this.shapeElem = shapeElem
    }

    shapeGenerator (){        
        let test = ''
        const shpesArray = [iShape,lShape,tShape,sShape]
        const shapeElem = document.createElement('div')
        shapeElem.classList = 'shape-container'
        gameContainer.appendChild(shapeElem)
        // shape builder        
        shpesArray[0].forEach((el) => { 
            el.forEach(i => {
                if(i === 1) {
                    test = document.createElement('div')
                    test.classList = 'squere shape occupied'
                    test.pied = 1;
                    shapeElem.appendChild(test)
                } else {
                    const test = document.createElement('div')
                    test.pied = 0;
                    test.classList = 'squere'
                    shapeElem.appendChild(test)
                }
        })
           
    });
        return shapeElem
    }

    checkShapeButtom () {
        if(this.boardRow < gameContainer.clientHeight -80) {
            return true
        }
        return false
    }
    

    checkCollision () {
        const inGameElem = document.querySelectorAll('.occupied')
        const activeElem = document.querySelectorAll('.shape-container')
        
        
    }

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