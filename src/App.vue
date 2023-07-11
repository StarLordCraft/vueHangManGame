<script setup>
  import {ref} from 'vue';
  import PreJogo from './components/preJogo.vue'
  let tela = 'inicio';
</script>

<template>
  <main id="app">
    <h1 id="title">Hangman Game</h1>
    <section v-if="tela === 'inicio'" id="inicio">
      <PreJogo />
    </section>
    <section v-if="tela === 'game'" id="game">
      Jogo
    </section>
  </main>
</template>

<style scoped>
  #title{
    color: var(--color-text-title);
  }

  #app{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
  #inicio{
    width: 30rem;
  }
</style>
