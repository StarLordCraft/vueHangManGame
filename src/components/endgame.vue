<script setup>
    import {defineProps} from 'vue';
    const props = defineProps({
        result:{
            type: String,
            required: true,
        }
    })

    const reinitGame = () => {
        location.reload();
    }
</script>

<template>
    <div id="result-bg">
        <div id="result">
            <h2>Você: {{ props.result == 'loss'? 'Perdeu' : 'Ganhou' }}</h2>

            <button @click="reinitGame">
                Ok
            </button>
        </div>
    </div>
</template>

<style scoped>
    #result-bg{
        width: 100vw;
        height: 100vh;

        background-color: rgba(0, 0, 0, 0.5);
        
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        left: 0;
        top: 0;
        z-index: 1;
    }
    #result{
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--color-text-light);

        width: 20rem;
        height: 20rem;

        position: relative;
    }

    h2{
        color: #000;
    }

    button{
        position: absolute;
        bottom: 0;
        right: calc(0 + 4rem);
    }
</style>