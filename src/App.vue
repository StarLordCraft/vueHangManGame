<script setup>
  import {ref} from 'vue';
  const title = ref('title');
</script>

<template>
  <div>
    <h1 :id="title">Hangman Game</h1>
  </div>
</template>

<style scoped>
  #title{
    color: var(--color-text-title);
  }
</style>
