import axios from 'axios';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();

function getToken() {
    let usuarioLogado = cookies.get('usuarioLogado');
    return usuarioLogado.tokenType + " " + usuarioLogado.accessToken;
}

export default axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        "Content-Type": "application/json",
        "Authorization": getToken()
    }
});