class gameContext{
    constructor(gameState){
        this.gameState = gameState;

        this.fails = 0;
        this.correct = 0;

        this.controllerWin = 0;
        for(i in this.gameState.palavra)i != ' ' ? ++this.controllerWin : '';
    }
    checkLetter = (letter) => {
        for(i in this.gameState.palavra){

        }
    }
}