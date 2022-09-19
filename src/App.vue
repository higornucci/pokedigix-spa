<script>
import axios from 'axios';
export default {
  name: "ListaDePokemons",
  data() {
    return { pokemons: [] };
  },
  async created() {
    try {
      var resposta = await axios.get('http://localhost:8080/api/v1/pokemons');
      console.log(resposta);
      this.pokemons = resposta.data;
    } catch(erro) {
      console.log(erro);
    }
  }
}
</script>

<template>
<div>
  <h2>Lista de Pokemon</h2>
  <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + pokemon.numeroPokedex + '.png'" />
        {{pokemon.numeroPokedex}} - {{pokemon.nome}} 
      </li>
  </ul>  
</div>
</template>

<style>

</style>
