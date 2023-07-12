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

    window.addEventListener('keydown', handleKeyPressed)

    const className = ref('');

    function handleLetterClick(){
        if(props.checkLetter(props.letter)){
            className.value = 'correct';
            return;
        }
        
        className.value = 'fail';
    }

    function handleKeyPressed(evt){
        if(evt.key === props.letter){
            handleLetterClick();
            window.removeEventListener('keydown', handleKeyPressed);
        }
    }

</script>

<template>
    <button @click.prevent="handleLetterClick" :class="className">
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

    .correct{
        border: 2px solid var(--color-text-success);

        color: var(--color-text-success);
        
        pointer-events: none;
    }

    .fail{
        border: 2px solid var(--color-text-error);
        
        color: var(--color-text-error);
        
        pointer-events: none;
    }

    
</style>