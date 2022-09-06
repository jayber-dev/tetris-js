import GameLogic from "./logic.js";

class movement extends GameLogic {
    constructor(shapeElem, boardRow,boardCol){
        super(shapeElem, boardRow,boardCol)
        this.boardRow = boardRow;
        this.boardCol = boardCol;
        this.shapeElem = shapeElem
        this.rotationDegree = 0;
        this.occupiedArray = []
    }
    downMove (shapeElement) {
        
        if(this.checkCollisionBottom()){   
            this.boardRow += 30;
            shapeElement.style.top = `${this.boardRow}px`;
        } 
        
    }

    rightMove (shapeElement) {  
         
        if(this.rightBorderCollisionCheck()) {
            this.boardCol += 30
            shapeElement.style.left = this.boardCol +'px' 
        }
                       
    }
    
    leftMove(shapeElement) {
           
        if(this.leftBorderCollisionCheck() && this.leftCheckShapeSideCollision()){ 
                this.boardCol -= 30
                shapeElement.style.left = this.boardCol +'px'        
        } 
    }

    
    pieceRotation (shapeElement) {
        if(this.checkCollisionBottom() && this.rightBorderCollisionCheck() && this.leftBorderCollisionCheck())
        this.rotationDegree += 90
        shapeElement.style.transform = `rotate(${this.rotationDegree}deg)`
    }

}

export default movement