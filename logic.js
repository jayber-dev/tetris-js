import { iShape, lShape, tShape ,sShape} from './shapes.js'
const gameContainer = document.querySelector('.game-container')

class GameLogic {
    constructor(shapeElem){
        this.boardRow = 0;
        this.boardCol = 0
        this.shapeElem = shapeElem
    }

    shapeGenerator (){
        const shapeElem = document.createElement('div')
        shapeElem.classList = 'shape-container'
        gameContainer.appendChild(shapeElem)
        // shape builder
        let test = ''
        const shpesArray = [iShape,lShape,tShape,sShape]
        shpesArray[0].forEach((el) => { 
            el.forEach(i => {
                if(i === 1) {
                    test = document.createElement('div')
                    test.classList = 'squere shape occupied'
                    test.Occupied = 1;
                    shapeElem.appendChild(test)
                } else {
                    const test = document.createElement('div')
                    test.Occupied = 0;
                    test.classList = 'squere'
                    shapeElem.appendChild(test)
                }
        })   
    });
    return test
    }

    downMove () {
        if(this.boardRow < gameContainer.clientHeight -80){
            console.log();
            this.boardRow += 32;
            this.shapeElem.style.top = `${this.boardRow}px`;
        } 
        
    }

    rightMove () {       
        if(this.boardCol < 210){ 
        this.boardCol += 32
        this.shapeElem.style.left = this.boardCol +'px'        
        } 
    }

    leftMove() {
        if(this.boardCol >0){
            this.boardCol -= 32
            this.shapeElem.style.left = this.boardCol +'px'    
        }
    }
}

export default GameLogic