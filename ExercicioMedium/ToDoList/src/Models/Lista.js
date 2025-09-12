import Tarefa from "./tarefa.js";

export default class Lista {
  #tarefas = [];
  #leitura = false;

  adicionarTarefa(tarefa) {
    if (!(tarefa instanceof Tarefa))
      throw new Error("Precisa ser um objeto de Tarefa!");
    this.#tarefas.push(tarefa);
  }

  listarTarefas() {
    return this.#tarefas.map((t) => ({
      tarefaNome: !t.getTarefaNome() ? "" : t.getTarefaNome(),
      tipoTarefa: !t.getTipoTarefa() ? "" : t.getTipoTarefa(),
      tempoTarefa: !t.getTempoTarefa() ? "" : t.getTempoTarefa(),
      descricaoTarefa: !t.getDescricaoTarefa() ? "" : t.getDescricaoTarefa(),
    }));
  }

  excluirTarefa(indice) {
    if (!this.#tarefas[indice]) throw new Error("Tarefa não encontrado!");
    this.#tarefas.splice(indice, 1);
  }

  marcarLido(check) {
    return (this.#leitura = !check);
  }
}
