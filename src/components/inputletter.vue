<script setup>
    import {defineProps} from 'vue';
    const props = defineProps({
        letter:{
            type: String,
            required: true,
        },

        checkLetter:{
            type: Function,
            required: true,
        },
    })

    function handleLetterClick(){
        checkLetter(props.letter);
    }
</script>

<template>
    <button @click="handleLetterClick">
        {{ props.letter }}
    </button>
</template>

<style scoped>
    button{
        background-color: transparent;
        
        border: 2px solid var(--color-text-light); 
        border-radius: 0;

        width: 4rem;
        height: 4rem;

        text-transform: uppercase;
    }
    
    button:hover{
        border: 2px solid var(--color-background-button);
    }
</style>