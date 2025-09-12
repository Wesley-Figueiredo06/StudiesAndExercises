import Contato from "./scripts/contatoModel.js";
import Agenda from "./scripts/AgendaModel.js";

const agenda = new Agenda();

const contato = new Contato("Wesley", "11938053261", "wesley@email.com");
const contato1 = new Contato("Juliana", 11938053331, "Juliana@email.com");

agenda.adicionarContato(contato);
agenda.adicionarContato(contato1);

console.log(agenda.listarContatos());
