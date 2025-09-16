import Tarefa from "./tarefa.js";

export default class Lista {
  #tarefas = [];
  #leitura = false;

  adicionarTarefa(...tarefa) {
    const modelo = { Tarefa: "", TipoTarefa: "", duracao: 0, descricao: "" };
    const novaTarefa = {};
    Object.keys(modelo).forEach((chave, index) => {
      novaTarefa[chave] = tarefa[index] ?? null;
    });

    this.#tarefas.push(novaTarefa);
    this.salvarNoLocalStorage();
  }

  listarTarefas() {
    return this.#tarefas;
  }

  excluirTarefa(indice) {
    if (!this.#tarefas[indice]) throw new Error("Tarefa não encontrado!");
    this.#tarefas.splice(indice, 1);
    this.salvarNoLocalStorage();
  }

  marcarLido(check) {
    return (this.#leitura = !check);
  }

  salvarNoLocalStorage() {
    localStorage.setItem("Tarefas", JSON.stringify(this.#tarefas));
  }

  carregarDoLocalStorage() {
    const dados = JSON.parse(localStorage.getItem("Tarefas")) || [];
    this.#tarefas = dados;
  }
}
