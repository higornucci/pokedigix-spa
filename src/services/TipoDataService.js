import http from "../http-common";

class TipoDataService {
  async buscarTodos() {
    return await http.get("/tipos");
  }

  buscarPeloId(id) {
    return http.get(`/tipos/${id}`);
  }

  criar(data) {
    return http.post("/tipos", data);
  }

  atualizar(id, data) {
    return http.put(`/tipos/${id}`, data);
  }

  remover(id) {
    return http.delete(`/tipos/${id}`);
  }

  removerTodos() {
    return http.delete(`/tipos`);
  }

  buscarPeloNome(nome) {
    return http.get(`/tipos?nome=${nome}`);
  }
}

export default new TipoDataService();