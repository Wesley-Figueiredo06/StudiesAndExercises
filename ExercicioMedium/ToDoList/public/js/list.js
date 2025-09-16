const tarefasDiv = document.getElementById("tarefas-div");
const infoTarefaBtn = document.getElementById("infoTarefa");
const editarBtn = document.getElementById("editar");
const apagarBtn = document.getElementById("apagar");

const dados = JSON.parse(localStorage.getItem("Tarefas"));

console.log(dados);

Object.keys(...dados).forEach((el, index) => {
  tarefasDiv.innerHTML += `<label id="tarefa"><button id="infoTarefa" type="button">${index.Tarefa}</button></label>
                <button id="editar" type="button"><img src="./assets/img/pencil.png" alt=""></button>
                <button id="apagar" type="button"><img src="./assets/img/cancel.png" alt=""></button> `;
});

function criarElemento(element, text, id, classNamee) {
  const el = document.createElement(element);
  el.textContent = text;
  el.id = id;

  return el;
}
