<script setup>
    import {ref, defineProps, watch} from 'vue';
    
    import FailStatus from './failStatus.vue'
    import Inputletter from './inputletter.vue';
    import Letter from './letter.vue';
    import EndGame from './endgame.vue'
    
    import GameContext from '../gameContext.js';

    const updateFails = () => fails.value = Game.gameState.failStatus;

    const updateCorrects = () => GameState.value = Game.gameState.corrects;

    const toggleshowHint = () => showHint.value = !showHint.value;

    const endGame = () =>{ result.value = Game.gameState.result; console.log(result);}
    
    const props = defineProps({
        gameData:{
            type: Object,
            required: true,
        }
    });
    
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s",
    "t", "u", "v", "w", "x", "y", "z"];
    
    const Game = new GameContext(props.gameData);

    const fails = ref(Game.gameState.failStatus);
    const correctLetters = ref(Game.gameState.corrects);
    const showHint = ref(false);
    const result = ref(Game.gameState.result);

    watch(() => Game.gameState.failStatus, updateFails);
    watch(() => Game.gameState.correct, updateCorrects);
    watch(() => Game.gameState.result, endGame)

</script>

<template>
    <section>
        <section class="info">
            <FailStatus :fails="fails" />

            <div class="word">
                <Letter v-for="letter in props.gameData.palavra"
                :letter="letter" 
                :correct="correctLetters.indexOf(letter) != -1" 
                />
            </div>

            <p v-if="showHint">
                Dica: {{ props.gameData.dica }}
            </p>

            <button @click="toggleshowHint">
                Mostrar Dica
            </button>

        </section>
        <section class="letters">
            <Inputletter v-for="letter in alphabet" 
            :letter="letter"  
            :checkLetter="Game.checkLetter"  
            />
        </section>

        <EndGame v-if="result != null" :result="result"/>
    </section>
</template>

<style scoped>
    .info{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .word{
        width: 32rem;

        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem;

        margin-bottom: 1.5rem;
    }
    .letters{
        width: 32rem;

        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

    p,
    button{
        margin-bottom: 1rem;
    }

    p{
        color: var(--color-text-title);
    }
</style>