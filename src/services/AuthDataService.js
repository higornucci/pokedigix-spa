import http from '../http-commons';

class AuthDataService {
    
    async cadastrar(usuario) {
        let resposta = await http.post('/auth/signup', usuario);
        return resposta.data;
    }

    async entrar(login) {
        let resposta = await http.post('/auth/signin', login);
        return resposta.data;
    }
}

export default new AuthDataService();