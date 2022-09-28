<script>
import PokemonDataService from '../services/PokemonDataService';
export default {
  name: "lista-pokemons",
  data() {
    return { pokemons: [] };
  },
  methods: {
    buscarPokemons() {
      PokemonDataService.buscarTodos()
        .then(resposta => {
          this.pokemons = resposta
        })
        .catch(erro => {
          console.log(erro);
        });
    }
  },
  mudarCaminho() {
    console.log("evento");
  },
  mounted() {
    this.buscarPokemons();
  }
}
</script>

<template>
  <main>
    <div>
      <h2>Lista de Pokemon</h2>
      <ul>
          <li v-for="pokemon in pokemons" :key="pokemon.id">
            <img :src="'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' + pokemon.numeroPokedex + '.png'" />
            {{pokemon.numeroPokedex}} - {{pokemon.nome}} 
          </li>
      </ul>  
    </div>
  </main>
</template>
