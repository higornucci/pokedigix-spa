<script>
import { RouterLink } from 'vue-router';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
export default {
  data() {
    return {
      nomeTreinador: ""
    }
  },
  mounted() {
    this.nomeTreinador = cookies.get('treinador_nome');
  } 
}
</script>

<template>
<header>
  <nav class="sticky-top navbar navbar-dark navbar-expand-lg bg-dark">
    <div class="container-md">
      <a class="navbar-brand" href="#">Pokedigix</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/pokemons-selvagens" class="nav-link">Pokemons Selvagens</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Ataques
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/ataques/novo">Novo</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/ataques/lista">Lista</RouterLink></li>
            </ul>
          </li>

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tipos
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/tipos/novo">Novo</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/tipos/lista">Lista</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pokemons
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/pokemons/novo">Novo</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/pokemons/lista">Lista</RouterLink></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Treinadores
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/treinadores/novo">Novo</RouterLink></li>
              <li><RouterLink class="dropdown-item" to="/treinadores/lista">Lista</RouterLink></li>
            </ul>
          </li>
        </ul>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex" v-if="nomeTreinador">
          <li class="nav-item dropdown d-flex">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-hearts" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
              </svg>
              <span class="m-2">{{nomeTreinador}}</span>
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink class="dropdown-item" to="/treinadores/lista">Trocar Treinador</RouterLink></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle active" href="#" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false"> <svg
                            xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                            fill="currentColor" class="bi bi-person-fill mb-1" viewBox="0 0 16 16">
                            <path
                                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        {{ nomeTreinador }}
                    </a>
                    <ul class="dropdown-menu">
                        <li>
                            <RouterLink class="dropdown-item" to="/treinador/lista">Trocar o treinador
                            </RouterLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <RouterLink class="nav-link" to="/logins/novo" role="button" aria-expanded="false">
                        <button type="button" class="btn btn-secondary btn-sm"
                            data-bs-dismiss="modal">Entrar/Cadastrar</button>
                    </RouterLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  </nav>
</header>
</template>