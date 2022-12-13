export default class UsuarioLoginRequest {
    constructor() {
        this.username = null;
        this.password = null;
    }

    populate(obj) {
        this.username = obj.username;
        this.password = obj.password;
    }

    toJson() {
        return {
            username: this.username,
            password: this.password
        }
    }
}