export default class User {
    #uid
    #nome
    #email
    #role
    #emailVerified

    constructor(uid, nome, email, role, emailVerified) {
        this.setUid(uid)
        this.setNome(nome)
        this.setEmail(email)
        this.setRole(role)
        this.setEmailVerified(emailVerified)
    }

    static fromJson(json) {
        return new User(json.uid, json.nome, json.email, json.role, json.emailVerified)
    }

    toJson() {
        return {
            uid: this.#uid,
            nome: this.#nome,
            email: this.#email,
            role: this.#role,
            emailVerified: this.#emailVerified
        }
    }

    getUid() {
        return this.#uid
    }

    getNome() {
        return this.#nome
    }

    getEmail() {
        return this.#email
    }

    getRole() {
        return this.#role
    }

    getEmailVerified() {
        return this.#emailVerified
    }

    setNome(nome) {
        this.#nome = nome
    }

    setEmail(email) {
        this.#email = email
    }

    setRole(role) {
        this.#role = role
    }

    setEmailVerified(emailVerified) {
        this.#emailVerified = emailVerified
    }
}