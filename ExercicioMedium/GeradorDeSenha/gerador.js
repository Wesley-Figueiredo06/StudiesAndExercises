const random = (max, min) => Math.floor(Math.random() * (max - min) + min);
const gerarMaiuscula = () => String.fromCharCode(random(65, 91));
const gerarMinuscula = () => String.fromCharCode(random(97, 123));
const gerarNumero = () => String.fromCharCode(random(48, 58));
const simbolos = "~^{}[]!@#$%&*-+/";
const gerarSimbolo = () => simbolos[random(0, simbolos.length)];

export default function gerarSenha(
  qtd,
  maiusculas,
  minusculas,
  numeros,
  simbolos
) {
  const senhaArray = [];
  qtd = Number(qtd);

  for (let i = 0; i < qtd; i++) {
    maiusculas && senhaArray.push(gerarMaiuscula());
    minusculas && senhaArray.push(gerarMinuscula());
    numeros && senhaArray.push(gerarNumero());
    simbolos && senhaArray.push(gerarSimbolo());
  }

  return senhaArray.join("").slice(0, qtd);
}
