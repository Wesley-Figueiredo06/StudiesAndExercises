const form = document.getElementById("form");
const nomeTarefa = document.getElementById("NomeTarefa");
const tipoTarefa = document.getElementById("TipoTarefa");
const tempoTarefa = document.getElementById("TempoTarefa");
const descricao = document.getElementById("Descricao");
const btnSmt = document.getElementById("btnSmt");

form.addEventListener("submit", (e) => {
  const valorNome = nomeTarefa.value;
  const valorTipoTarefa = tipoTarefa.value;
  const valorTempoTarefa = tempoTarefa.value;
  const valorDescricao = descricao.value;

  e.preventDefault();

  validarValores(nomeTarefa, tipoTarefa, tempoTarefa);
});

function validarValores(...valor) {
  let valores = [...valor];
  valores.forEach((v) => {
    !v.value ? erro(v) : sucesso(v);
  });
}

function erro(valor) {
  valor.style.borderColor = "red";
}

function sucesso(valor) {
  valor.style.borderColor = "#89fcb3";
}
