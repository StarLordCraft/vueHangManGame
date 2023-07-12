<script setup>
    import {defineProps} from 'vue';
    const props = defineProps({
        palavra:{
            type: String,
            required: true,
        }
    });
</script>

<template>
    <div>
        {{  }}
    </div>
</template>

<style scoped>
    div{
        width: 4rem;
        height: 4rem;
        
        border-bottom: 2px solid var(--color-text-success);
    }
</style>