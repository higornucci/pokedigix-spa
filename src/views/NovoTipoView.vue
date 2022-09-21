<script>
    import TipoDataService from '../services/TipoDataService';
    import Tipo from '../models/Tipo'
    export default {
      name: "novo-tipo",
      data() {
        return { 
            tipo: {},
            salvo: false };
      },
      methods: {
        salvar() {

        TipoDataService.criar(this.tipo)
            .then(resposta => {
                this.tipo.id = resposta.data.id;
                console.log(resposta.data);
                this.salvo = true;
            })
            .catch(e => {
                console.log(e);
            });
        },
        
        novo() {
            this.salvo = false;
            this.tipo = {};
        }
      },
      mounted() {
        this.tipo = new Tipo();
      }
    }
</script>
    
<template>
    <div class="submit-form">
        <div v-if="!salvo">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input
                type="text"
                class="form-control"
                id="nome"
                required
                v-model="tipo.nome"
                name="nome"
                />
            </div>

            <button @click="salvar" class="btn btn-success">Salvar</button>
        </div>
        <div v-else>
            <h4>Salvo com sucesso!</h4>
            <button class="btn btn-success" @click="novo">Novo</button>
        </div>
  </div>
</template>