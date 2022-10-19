<template>
<div class="container text-center">

  <h1 class="m-4">Essa pagina nao existe!</h1>
  <p class="display-4">????</p>
  <img src="../../public/slowpoke.png" class="img-fluid w-25" 
    alt="Imagem de um Slowpoke" title="Slowpoke"/>
  <p class="text-lg-center">Volte para a <RouterLink to="/">pagina inicial</RouterLink></p>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>