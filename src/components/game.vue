<script setup>
    import {ref, defineProps, watch} from 'vue';
    
    import FailStatus from './failStatus.vue'
    import Inputletter from './inputletter.vue';
    import Letter from './letter.vue'
    
    import GameContext from '../gameContext.js';
    
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

    const GameState = ref(Game.gameState.corrects);

    const updateFails = () => {
        fails.value = Game.gameState.failStatus;
    };

    const updateCorrects = () => {
        GameState.value = Game.gameState.corrects;
    }

    watch(() => Game.gameState.failStatus, updateFails);
    watch(() => Game.gameState.correct, updateCorrects);
</script>

<template>
    <section>
        <section>
            <FailStatus :fails="fails" />

            <div class="word">
                <Letter v-for="letter in props.gameData.palavra"
                :letter="letter" 
                :correct="GameState.indexOf(letter) != -1" 
                />
            </div>

        </section>
        <section class="letters">
            <Inputletter v-for="letter in alphabet" 
            :letter="letter"  
            :checkLetter="Game.checkLetter"  
            />
        </section>
    </section>
</template>

<style scoped>
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
</style>