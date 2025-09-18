const tarefasDiv = document.getElementById("tarefas-div");
const infoTarefaBtn = document.getElementById("infoTarefa");
const editarBtn = document.getElementById("editar");
const apagarBtn = document.getElementById("apagar");

const dados = JSON.parse(localStorage.getItem("Tarefas"));

console.log(dados);

// dados.forEach((el) => {
//   tarefasDiv.innerHTML += `<label id="${el}tarefa"><button id="infoTarefa" type="button">${el.Tarefa}</button></label>
//                 <button id="editar" type="button"><img src="./assets/img/pencil.png" alt=""></button>
//                 <button id="apagar" type="button"><img src="./assets/img/cancel.png" alt=""></button> `;
// });

carregarElemento(dados);

function carregarElemento(data) {
  const resultado = document.querySelector(".tarefas-lista-input");
  const table = document.querySelector(".index-table");
  const arrayData = data;

  for (let i = 0; i < data.length; i++) {
    const tr = document.createElement("tr");
    let td = document.createElement("td");
    const btn = document.createElement("button");

    td = document.createElement("td");
    td.innerText = data[i].Tarefa;
    btn.innerText = data[i].Tarefa;
    tr.appendChild(btn);
    tr.appendChild(td);

    table.appendChild(tr);
    resultado.appendChild(table);
  }
}
