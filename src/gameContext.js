export default class GameContext{
    constructor(gameState){
        this.gameState = gameState;

        this.fails = 0;
        this.correct = 0;

        this.controllerWin = 0;
        for(let i of this.gameState.palavra)if(i != ' ')++this.controllerWin;
    }
    checkLetter = (letter) => {
        let corrects = 0;
        for(let i of this.gameState.palavra)if(i.toLowerCase() === letter.toLowerCase())++corrects

        corrects === 0 ? ++this.fails : this.correct += corrects;
        //Se acertar alguma letra ele mexe na controler, senão ai ele simplesmente soma um nos erros
        console.log(corrects);
        return (corrects > 0);
    }
    checkEndGame = (gameState) => {
        if(this.fails >= 6)gameState.result = false;
        if(this.correct >= this.controllerWin)gameState.result = true;
    }
}