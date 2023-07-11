<script setup>
    import {ref} from 'vue';
    const palavra  =  ref('');
    const dica  =  ref('');
    const currentForm = ref('palavra');

    function nextFormInput(evt){
        if(currentForm.value == 'palavra'){
            currentForm.value = 'dica'
            palavra.value = evt.target.previousElementSibling.value
        }
        else{
            dica.value = evt.target.previousElementSibling.value
            console.log(palavra.value)
            console.log(dica.value)
        }
    }
</script>

<template>
    <form class="form">
        <label :for="currentForm">
            Digite a {{currentForm}}:
        </label>
        <input type="text" :id="currentForm" :name="currentForm">
        <button @click.prevent = "nextFormInput">
            Próximo
        </button>
    </form>
</template>

<style scoped>
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;


        text-align: center;

        margin: 2rem;
    }
    .form input{
        width: 100%;
        height: 2rem;
        border-radius: 0.5rem;
    }
    button{
        display: block;
    }
</style>