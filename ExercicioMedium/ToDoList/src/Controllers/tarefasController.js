import Lista from "../Models/Lista.js";
import Tarefa from "../Models/tarefa.js";

const lista = new Lista();
const tarefa = new Tarefa(
  "Estudar JS",
  "Estudo",
  "2h",
  "Estudar classes em JavaScript"
);

lista.adicionarTarefa(tarefa);

const listado = lista.listarTarefas();
