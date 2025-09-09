//#region Função para definir se o número é par ou impar.
function parOuImpar(num) {
    if (num % 2 === 0) {
        return "Par";
    } else {
        return "Impar";;
    }
}
//#endregion

//#region Função para calcular entre 2 números.

function calcular(n1, n2, operador) {
    Number(n1, n2);
    switch (operador) {
        case "+":
            return n1 + n2
        case "-":
            return n1 - n2
        case "*":
            return n1 * n2

        case "/":
            if (n2 === 0) return "Erro: Divisão por zero!"
            return n1 / n2

        default:
            return "Operador inválido"
    }
}

const rest = calcular(2, 0, "+");


//#endregion

//#region Função para Verificar a Idade.

function validarIdade(idade) {
    let Idade;
    if (idade <= 11) {
        Idade = "Criança"
    } else if (idade >= 11 & idade <= 17) {
        Idade = "Adolescente"
    } else if (idade >= 18 & idade <= 59) {
        Idade = "Adulto"
    } else {
        Idade = "Idoso"
    }
    return Idade;
}

validarIdade(10);
validarIdade(12);
validarIdade(18);
validarIdade(60);

//#endregion

//#region Função para Verificar a Média.

function calcularMedia(n1, n2, n3, n4) {
    const media = (n1 + n2 + n3 + n4) / 4
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
const cadastros = [];

function cadastrarPessoa(nome, idade) {
    if (cadastros.length >= 5) return new Error("Limite de 5 pessoas atingido!");
    cadastros.push({ nome, idade });
    return cadastros;
}
cadastrarPessoa("Wesley", 24);
cadastrarPessoa("Jonatas", 22);
cadastrarPessoa("Kimberly", 27);
cadastrarPessoa("Carol", 26);
cadastrarPessoa("Matheus", 29);

console.log(cadastros);


//#endregion

