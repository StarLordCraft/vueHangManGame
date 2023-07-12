import fails0 from './assets/fails0.svg';
import fails1 from './assets/fails1.svg';
import fails2 from './assets/fails2.svg';
import fails3 from './assets/fails3.svg';
import fails4 from './assets/fails4.svg';
import fails5 from './assets/fails5.svg';
import fails6 from './assets/fails6.svg';

export default class GameContext{
    constructor(gameState){
        this.gameState = gameState;

        this.gameState.corrects = [];

        this.fails = 0;
        this.correct = 0;
        
        this.gameState.displayFails = [fails0, fails1, fails2, fails3, fails4, fails5, fails6];
        this.gameState.failStatus = this.gameState.displayFails[this.fails];

        this.controllerWin = 0;
        for(let i of this.gameState.palavra)if(i != ' ')++this.controllerWin;
    }
    checkLetter = (letter) => {
        let corrects = 0;
        for(let i of this.gameState.palavra)if(i.toLowerCase() === letter.toLowerCase())++corrects

        corrects === 0 ? ++this.fails : this.correct += corrects;
        //Se acertar alguma letra ele mexe na controler, senão ai ele simplesmente soma um nos erros

        if(corrects > 0){
            this.displayLetter(letter);
        }else{
            this.displayFailStatus();
        }

        return (corrects > 0);
    }

    displayLetter = (letter) => {
        this.gameState.corrects.push(letter);
    }

    displayFailStatus = () => {
        this.gameState.failStatus = this.gameState.displayFails[this.fails];
        return this.gameState.failStatus;
    }


    checkEndGame = (gameState) => {
        if(this.fails >= 6)gameState.result = false;
        if(this.correct >= this.controllerWin)gameState.result = true;
    }
}