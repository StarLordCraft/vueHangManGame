export default class GameContext{
    constructor(gameState){
        this.gameState = gameState;

        this.fails = 0;
        this.correct = 0;

        this.controllerWin = 0;
        for(i in this.gameState.palavra)i != ' ' ? ++this.controllerWin : '';
    }
    checkLetter = (letter) => {
        let corrects = 0;
        for(i in this.gameState.palavra)i === letter ? ++corrects : '';

        corrects === 0 ? ++this.fails : this.correct += corrects;
        //Se acertar alguma letra ele mexe na controler, senão ai ele simplesmente soma um nos erros
    }
}