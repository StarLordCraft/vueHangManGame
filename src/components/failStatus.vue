<script setup>
    import {ref, defineProps} from 'vue';

    const props = defineProps({
        fails:{
            type: String,
            required: true,
        },
    })
    
</script>

<template>
    <div>
        <img :src="props.fails" alt="Fail Status">
    </div>
</template>

<style scoped>
</style>