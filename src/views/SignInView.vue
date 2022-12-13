<script>
import AuthDataService from '../services/AuthDataService';
import UsuarioLoginRequest from '../models/UsuarioLoginRequest';
import LoginResponse from '../models/LoginResponse';
import { useCookies } from "vue3-cookies";

const { cookies } = useCookies();
export default {
    name: 'logins-novo',
    data() {
        return {
            loginResponse: new LoginResponse(),
            login: new UsuarioLoginRequest(),
            lembrar: false
        }
    },
    methods: {
        entrar() {
            AuthDataService.entrar(this.login)
                .then(resposta => {
                    this.loginResponse = resposta;
                    console.log(this.loginResponse);
                    cookies.set('usuarioLogado', 
                        this.loginResponse, this.tempoDeExpiracao());
                    this.$router.push({ name: "tipos-lista" });
                })
                .catch(erro => {
                    console.log(erro);
                })
        },
        tempoDeExpiracao() {
            return this.lembrar ? '1m' : '30min' ;
        }
    },
}
</script>
<template>
    <div class="container mt-3">
        <div class="d-flex justify-content-center h-100">
            <div class="card mt-3 rounded-4">
                <div class="card-header">
                    <h3 class="text-center">Entrar</h3>
                </div>
                <div class="card-body">
                    <form @submit.prevent="entrar">
                        <div class="input-group form-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text p-2 rounded-3"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="22" height="22" fill="currentColor" class="bi bi-person"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                    </svg><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" v-model="login.username" class="form-control p-1 rounded-2"
                                placeholder="Nome de Usuário">
                        </div>
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text p-2 rounded-3"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="22" height="22" fill="currentColor" class="bi bi-key"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg><i class="fas fa-key"></i></span>
                            </div>
                            <input type="password" v-model="login.password" class="form-control p-1 rounded-2" placeholder="Senha">
                        </div>


                        <div class="row">
                            <div class="row justify-content-center">
                                <div class="form-check mt-2">
                                    <input class="form-check-input" v-model="lembrar" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Lembrar Usuário
                                    </label>
                                </div>
                            </div>
                            <input type="submit" value="Entrar" class="btn btn-success rounded-4 mt-1">
                        </div>
                    </form>
                </div>
                <div class="col-md-12 ">
                    <div class="login-or">
                        <hr class="hr-or">
                        <span class="span-or">ou</span>
                    </div>
                </div>
                <div class="col-md-12 mb-3 mt-3 mb-1">
                    <p class="text-center">
                        <a href="javascript:void();" class="google btn " style="border:none;"><i class="fa fa-google-plus">
                            </i> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-google mb-1" viewBox="0 0 16 16">
                                <path
                                    d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                            </svg> Entrar usando o Google
                        </a>
                    </p>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                        Não possui conta?<RouterLink to="/usuarios/novo"><a href="#">Cadastre-se</a></RouterLink>
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <RouterLink to="/recuperacoes/novo"><a href="#">Esqueceu sua senha?</a></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.card {
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
}
.login-or {
    position: relative;
    color: #aaa;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.span-or {
    display: block;
    position: absolute;
    left: 50%;
    top: -2px;
    margin-left: -25px;
    background-color: #fff;
    width: 50px;
    text-align: center;
}
.hr-or {
    height: 1px;
    margin-top: 0px !important;
    margin-bottom: 0px !important;
}
.google {
    color: #666;
    width: 100%;
    height: 40px;
    text-align: center;
    outline: none;
    border: 1px solid lightgrey;
}
</style>