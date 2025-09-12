export default class Contato {
  #nome;
  #telefone;
  #email;

  constructor(nome, telefone, email) {
    this.#nome = nome;
    this.#telefone = Number(telefone);
    this.#email = email;

  }

  getNome() {
    return this.#nome;
  }

  getTelefone() {
    return this.#telefone;
  }

  getEmail() {
    return this.#email;
  }

  editar(novoNome, novoTelefone, novoEmail) {
    this.#nome = novoNome;
    this.#telefone = novoTelefone;
    this.#email = novoEmail;
  }
}
