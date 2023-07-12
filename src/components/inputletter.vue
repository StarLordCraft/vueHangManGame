<script setup>
    import {defineProps, ref} from 'vue';
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

    const className = ref('');

    function handleLetterClick(){
        if(props.checkLetter(props.letter)){
            className.value = 'correct';
            return;
        }
        
        className.value = 'fail';
    }
</script>

<template>
    <button @click="handleLetterClick" :class="className">
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

    .correct{
        border: 2px solid var(--color-text-success);

        color: var(--color-text-success);
    }

    .fail{
        border: 2px solid var(--color-text-error);
        color: var(--color-text-error)
    }
    
    button:hover{
        border: 2px solid var(--color-background-button);
    }
</style>