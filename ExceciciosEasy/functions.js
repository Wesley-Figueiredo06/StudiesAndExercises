//#region Função para definir se o número é par ou impar.
export function parOuImpar(num) {
  const number = Number(num);
  if (number % 2 === 0) {
    return "Par";
  } else {
    return "Impar";
  }
}
//#endregion

//#region Função para calcular entre 2 números.

export function calcular(n1, n2, operador) {
  Number(n1, n2);
  switch (operador) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;

    case "/":
      if (n2 === 0) return "Erro: Divisão por zero!";
      return n1 / n2;

    default:
      return "Operador inválido";
  }
}

const rest = calcular(2, 1, "+");

//#endregion

//#region Função para Verificar a Idade.

export function validarIdade(idade) {
  let Idade;
  if (idade <= 11) {
    Idade = "Criança";
  } else if ((idade >= 11) & (idade <= 17)) {
    Idade = "Adolescente";
  } else if ((idade >= 18) & (idade <= 59)) {
    Idade = "Adulto";
  } else {
    Idade = "Idoso";
  }
  return Idade;
}

validarIdade(10);
validarIdade(12);
validarIdade(18);
validarIdade(60);

//#endregion

//#region Função para Verificar a Média.

export function calcularMedia(n1, n2, n3, n4) {
  const media = (n1 + n2 + n3 + n4) / 4;
  let apuracao;

  if (media >= 7) {
    apuracao = `Sua média é ${media} e você está aprovado!`;
  } else if (media >= 5) {
    apuracao = `Sua média é ${media} e você está em recuperação!`;
  } else {
    apuracao = `Sua média é ${media} e você está reprovado!`;
  }
  return apuracao;
}

calcularMedia(11, 10, 10, 10);

//#endregion

//#region Função para Cadastar pessoa.
export const cadastros = [];

export function cadastrarPessoa(nome, idade) {
  if (cadastros.length >= 5) return new Error("Limite de 5 pessoas atingido!");
  cadastros.push({ nome, idade });

  return cadastros;
}
cadastrarPessoa("Wesley", 24);
cadastrarPessoa("Jonatas", 22);
cadastrarPessoa("Kimberly", 27);
cadastrarPessoa("Carol", 26);
cadastrarPessoa("Matheus", 29);
//#endregion

//#region Função para tabuada.

function calcTab(number) {
  const valorArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const newArray = valorArray.map((val, index) => {
    return val * number;
  });

  return console.log(newArray);
}
// calcTab(5);

//#endregion

//#region Função para fluxo de caixa.

function contaCorrente() {
  let saldo = 0;
  const menu = {
    Sacar: (valorSaque) => {
      if (valorSaque > saldo) {
        throw new Error("Saldo insuficiente!");
      } else {
        saldo -= valorSaque;
        return saldo;
      }
    },
    Depositar: (valorDeopisto) => {
      saldo += valorDeopisto;
      return saldo;
    },
    VerSaldo: () => {
      return console.log(saldo);
    },
  };

  return menu;
}

const resultado = contaCorrente();
// resultado.VerSaldo();

//#endregion

//#region Transformando temperaturas.

function transformarTemp(valorTemp, tipoTem) {
  let resultado;
  if (tipoTem === "Celsius") {
    resultado = valorTemp * 1.8 + 32;
    return resultado;
  } else if (tipoTem === "Fahrenheit") {
    resultado = ((valorTemp - 32) * 5) / 9;
    return resultado;
  } else {
    throw new Error("Este valor não existe!");
  }
}

const res = transformarTemp(1, "Fahrenheit");


//#endregion

//#region Jogo de adivinhação.

export function game(palpite) {
  const randomRange = Math.floor(Math.random() * (1 - 100 + 1)) + 100;
  let resposta;
  if (palpite > randomRange) {
    resposta = "Passou em!"
  } else if (palpite < randomRange) {
    resposta = "Está distante!"
  } else {
    resposta = alert("Perfeito! Você acertou!");
  }
  return resposta;
}

//#endregion

