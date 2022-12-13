<script>
import AuthDataService from '../services/AuthDataService';
import MensagemSucessoVue from '../components/MensagemSucesso.vue';
import UsuarioRequest from '../models/UsuarioRequest';
export default {
    name: 'usuarios-novo',
    data() {
        return {
            authRequest: new UsuarioRequest(),
            salvo: false
        }
    },
    components: {
        MensagemSucessoVue
    },
    methods: {
        cadastrar() {
            AuthDataService.cadastrar(this.authRequest)
                .then(() => {
                    this.salvo = true;
                })
                .catch(() => {
                    this.salvo = false;
                })
        },
        novo() {
            this.authRequest = new UsuarioRequest();
            this.salvo = false;
        }
    },
}
</script>
<template>
    <div v-if="!salvo" class="container mt-3">
        <div class="d-flex justify-content-center h-100">
            <div class="card mt-3 rounded-4">
                <div class="card-header">
                    <h3 class="text-center">Cadastro</h3>
                </div>
                <div class="card-body">
                    <form @submit.prevent="cadastrar">
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text p-2 rounded-3"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="22" height="22" fill="currentColor" class="bi bi-person"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                    </svg><i class="fas fa-user"></i></span>
                            </div>
                            <input type="text" v-model="authRequest.username" class="form-control p-1 rounded-2" placeholder="Nome de Usuário">
                        </div>
                        <div class="input-group form-group mb-2">
                            <div class="input-group-prepend">
                                <span class="input-group-text p-2 rounded-3"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="22" height="22" fill="currentColor" class="bi bi-envelope-at"
                                        viewBox="0 0 16 16">
                                        <path
                                            d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                                        <path
                                            d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z" />
                                    </svg><i class="fas fa-user"></i></span>
                            </div>
                            <input type="email" v-model="authRequest.email" class="form-control p-1 rounded-2" placeholder="Email">
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
                            <input type="password" v-model="authRequest.password" class="form-control p-1 rounded-2" placeholder="Senha">
                        </div>


                        <div class="row">
                            <input type="submit" value="Cadastrar" class="btn btn-success rounded-4 mt-3 mb-1">
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                        Já possui cadastro? <RouterLink to="/logins/novo"><a href="#"> ENTRAR</a></RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <MensagemSucessoVue urlListagem="logins-novo" @cadastro="novo">
            O usuario {{authRequest.username}} foi salvo com sucesso!
        </MensagemSucessoVue>
    </div>
</template>
<style>
.card {
    margin-top: auto;
    margin-bottom: auto;
    width: 400px;
}
</style>