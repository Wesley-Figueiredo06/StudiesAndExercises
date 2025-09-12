import {
  calcular,
  cadastrarPessoa,
  parOuImpar,
  calcularMedia,
  validarIdade,
  cadastros,
  game
} from "./functions.js";

const form = document.querySelector(".form");
const input = document.getElementById("input");
const buttonSmt = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  const value = input.value;
  e.preventDefault();

  console.log(game(value));


});

