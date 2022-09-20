export default class Pokemon {
    constructor() {
        this.id = null;
        this.nome = null;
    }

    isEmpty() {
        return Object.values(this).every(o => o === null);
    }

    populate(obj) {
        this.id = obj.id;
        this.nome = obj.nome;
    }

    toJson() {
        return {
            id: this.id,
            nome: this.nome,
        };
    }

}