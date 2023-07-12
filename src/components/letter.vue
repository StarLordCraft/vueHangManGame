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

</style>