<script setup>
    import {defineProps} from 'vue';
    const props = defineProps({
        letter:{
            type: String,
            required: true,
        },
        correct:{
            type: Boolean,
            required: true,
        }

    });
    const className = props.letter != ' ' ? 'letter' : '';
</script>

<template>
    <div :class="className">
        {{ props.correct ? props.letter : '' }}
    </div>
</template>

<style scoped>
    div{
        width: 4rem;
        height: 4rem;

        font-size: 2rem;
        text-align: center;
        text-transform: uppercase;
    }
    .letter{
        border-bottom: 2px solid var(--color-text-light);
    }
</style>