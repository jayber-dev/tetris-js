import GameLogic from "./logic.js";

class movement extends GameLogic {
    constructor(shapeElem, boardRow,boardCol){
        super(shapeElem, boardRow,boardCol)
        this.boardRow = boardRow;
        this.boardCol = boardCol;
        this.shapeElem = shapeElem
        this.fixedRotationDegree = 180
        this.rotationDegree = 0;
        this.occupiedArray = []
    }
    downMove (shapeElement) {
        
        if(this.checkCollisionBottom()){   
            this.boardRow += 30;
            shapeElement.style.top = `${this.boardRow}px`;
        } 
        
    }

    rightMove (shapeElement,e) {  
         
        if(this.checkCollisionBorders(shapeElement,e)&& this.rightCheckShapeSideCollision()) {
            this.boardCol += 30
            shapeElement.style.left = this.boardCol +'px' 
        }
                       
    }
    
    leftMove(shapeElement,e) {
           
        if(this.checkCollisionBorders(shapeElement,e) && this.leftCheckShapeSideCollision()){ 
                this.boardCol -= 30
                shapeElement.style.left = this.boardCol +'px'        
                     
        } 
    }
   
    pieceRotation (shapeElement,e) {
        if(this.checkCollisionBottom() && this.checkCollisionBorders(shapeElement,e) ){
            this.rotationDegree += 90    
            shapeElement.style.transform = `rotate(${this.rotationDegree}deg)`
            const direction = this.rotationDirection()
            if(direction.direction === 'right') {
                direction.invokeCounter.forEach(() => {
                this.rightMove(shapeElement,e)
                })
            } else if(direction.direction === 'left') {
                direction.invokeCounter.forEach(() => {        
                    this.leftMove(shapeElement,e)  
                })
            } 
        }        
    }
    

}

export default movement