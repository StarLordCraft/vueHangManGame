<script setup>
    import {defineProps} from 'vue';
    const props = defineProps({
        letter:{
            type: String,
            required: true,
        }
    })
</script>

<template>
    <button @click="">
        {{ props.letter }}
    </button>
</template>

<style scoped>
    button{
        background-color: transparent;
        
        border: 2px solid var(--color-background-button);; 
        border-radius: 0;

        width: 4rem;
        height: 4rem;
    }
</style>