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
        shpesArray[1].forEach((el) => { 
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
    

    checkCollision (shapeElement) {
        const inGameElem = document.querySelectorAll('.occupied')
        const shapeContainer = document.querySelectorAll('.shape-container')
        console.log(inGameElem[0].getBoundingClientRect().top);
        try {
            console.log(inGameElem[7].getBoundingClientRect().top);
        } catch {}
        
        for(let i=0;i<inGameElem.length;i++){
            for(let j = 1;j <inGameElem.length; j++) {
                if(inGameElem[i].parentElement === inGameElem[j].parentElement) {
                    continue
                }
                if(i == j) {
                    continue
                }
                if(inGameElem[i].getBoundingClientRect().top === inGameElem[j].getBoundingClientRect().bottom ) {
                    console.log(`${inGameElem[i].getBoundingClientRect().top} and ${inGameElem[j].getBoundingClientRect().bottom}`);
                    console.log('wow');
                    return false
                }
            }
        }
        return true
        // inGameElem[i].getBoundingClientRect().left === inGameElem[j].getBoundingClientRect().left
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