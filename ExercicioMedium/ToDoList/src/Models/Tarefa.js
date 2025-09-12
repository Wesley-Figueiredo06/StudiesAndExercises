export default class Tarefa {
  #tarefaNome;
  #tipoTarefa;
  #tempoTarefa;
  #descricaoTarefa;
  constructor(tarefaNome, tipoTarefa, tempoTarefa, descricaoTarefa) {
    this.#tarefaNome = tarefaNome;
    this.#tipoTarefa = tipoTarefa;
    this.#tempoTarefa = tempoTarefa;
    this.#descricaoTarefa = descricaoTarefa;
  }

  getTarefaNome() {
    return this.#tarefaNome;
  }
  getTipoTarefa() {
    return this.#tipoTarefa;
  }
  getTempoTarefa() {
    return this.#tempoTarefa;
  }
  getDescricaoTarefa() {
    return this.#descricaoTarefa;
  }

  editar(novTarefaNome, novTipoTarefa, novTempoTarefa, novDescricaoTarefa) {
    this.#tarefaNome = novTarefaNome;
    this.#tipoTarefa = novTipoTarefa;
    this.#tempoTarefa = novTempoTarefa;
    this.#descricaoTarefa = novDescricaoTarefa;
  }
}
