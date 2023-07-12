<script setup>
    import {ref, defineProps} from 'vue';
    
    import fails0 from '../assets/fails0.svg'
    import fails1 from '../assets/fails1.svg'
    import fails2 from '../assets/fails2.svg'
    import fails3 from '../assets/fails3.svg'
    import fails4 from '../assets/fails4.svg'
    import fails5 from '../assets/fails5.svg'
    import fails6 from '../assets/fails6.svg'

    const props = defineProps({
        gameData:{
            type: Object,
            required: true,
        }
    })

    import Inputletter from './inputletter.vue';
    import Letter from './letter.vue'
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s",
     "t", "u", "v", "w", "x", "y", "z"];
    const fails = ref(fails0);
</script>

<template>
    <section>
        <section>
            <div>
                <img :src="fails" alt="user fails">
            </div>

            <div>
                
            </div>

        </section>
        <section class="letters">
            <Inputletter v-for="letter in alphabet" :letter="letter" />
        </section>
    </section>
</template>

<style scoped>
    .letters{
        width: 32rem;

        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
</style>