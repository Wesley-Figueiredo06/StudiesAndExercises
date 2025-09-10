const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const perguntas = [
  {
    enunciado: "Qual a capital do Brasil?",
    opcoes: {
      a: "Brasília",
      b: "Distrito federal",
      c: "Santos",
    },
    resposta: "a",
  },
  {
    enunciado: "Qual a capital do Japão?",
    opcoes: {
      a: "San Diego",
      b: "Tokyo",
      c: "Hong Kong",
    },
    resposta: "b",
  },
  {
    enunciado: "Qual a linguagem de programação é comum em análise de dados?",
    opcoes: {
      a: "JavaScript",
      b: "C#",
      c: "Python",
    },
    resposta: "c",
  },
];

let indice = 0;

function perguntar() {
  const q = perguntas[indice];

  rl.question(
    `\n${q.enunciado}\n a) ${q.opcoes.a}\n b) ${q.opcoes.b}\n c) ${q.opcoes.c}\n Sua resposta:`,
    (resposta) => {
      if (resposta.toLowerCase() === q.resposta) {
        console.log("\nResposta correta!");
      } else {
        console.log(`\nResposta errada! A resposta correta é "${q.resposta}".`);
      }

      indice++;

      if (indice < perguntas.length) {
        perguntar();
      } else {
        console.log("\nFiz das questões");
      }
    }
  );
}

perguntar();
