import http from "../http-common";

class PokemonDataService {
  BuscarTodos() {
    return http.get("/pokemons");
  }

  buscarPeloId(id) {
    return http.get(`/pokemons/${id}`);
  }

  criar(data) {
    return http.post("/pokemons", data);
  }

  atualizar(id, data) {
    return http.put(`/pokemons/${id}`, data);
  }

  remover(id) {
    return http.delete(`/pokemons/${id}`);
  }

  removerTodos() {
    return http.delete(`/pokemons`);
  }

  buscarPeloNome(nome) {
    return http.get(`/pokemons?nome=${nome}`);
  }
}

export default new PokemonDataService();