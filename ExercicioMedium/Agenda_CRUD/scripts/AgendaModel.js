import Contato from "./contatoModel.js";

export default class Agenda {
    #contatos = [];

    // Função que pega 3 argumetos e cria um contato
    adicionarContato(contato) {
        if (!(contato instanceof Contato)) {
            throw new Error("Somente objetos do tipo Contato podem ser adicionados!");
        }
        this.#contatos.push(contato)
    }

    // Função para ver o contato.
    listarContatos() {
        return this.#contatos.map(c => ({
            nome: c.getNome(),
            telefone: c.getTelefone(),
            email: c.getEmail(),
        }));
    }

    // Função para excluir um contato
    excluirContato(indice) {
        if (!this.#contatos[indice]) throw new Error("Contato não encontrado!");
        this.#contatos.splice(indice, 1)
    }

}
