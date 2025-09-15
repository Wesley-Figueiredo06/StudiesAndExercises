const form = document.getElementById("form");
const nomeTarefa = document.getElementById("NomeTarefa");
const tipoTarefa = document.getElementById("TipoTarefa");
const tempoTarefa = document.getElementById("TempoTarefa");
const descricao = document.getElementById("Descricao");
const btnSmt = document.getElementById("btnSmt");


form.addEventListener("submit", (e) => {
    const valornome = nomeTarefa.value
    e.preventDefault()
    const teste = validarValores(valornome, tipoTarefa.value)

    console.log(teste);


});


function validarValores(...valor) {
    let valores = [...valor]

    valores.forEach(v => {
        if (!v) {
            throw new Error("não contem escrita");
        }
    });
}