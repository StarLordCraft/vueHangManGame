<script setup>
    import Letter from './letter.vue';
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s",
     "t", "u", "v", "w", "x", "y", "z"];

</script>

<template>
    <section>
        <section>

        </section>
        <section>
            <Letter v-for="letter in alphabet" :letter="letter" />
        </section>
    </section>
</template>

<style>

</style>