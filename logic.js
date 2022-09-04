const gameContainer = document.querySelector('.game-container')

class GameLogic {
    constructor(shapeElem){
        this.boardRow = 0;
        this.boardCol = 0
        this.shapeElem = shapeElem
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