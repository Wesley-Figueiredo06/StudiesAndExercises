import Contato from "./scripts/contatoModel.js";
import Agenda from "./scripts/AgendaModel.js";
import { db } from "./DB/db.js";

const agenda = new Agenda();

const contato = new Contato("Wesley", "11938053261", "wesley@email.com");
const contato1 = new Contato("Juliaana", 119318053331, "Juliadasna@email.com");

agenda.adicionarContato(contato);
agenda.adicionarContato(contato1);

const contatosListados = agenda.listarContatos();

function enviarDados(listaContatos) {
  let listados = listaContatos;
  db.push(...listados);
  return db;
}

enviarDados(contatosListados);

const envioApi = db;

export default envioApi;
