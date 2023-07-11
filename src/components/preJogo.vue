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

<style>
    .form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    button{
        display: block;
    }
</style>