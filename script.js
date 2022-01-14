//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let number = 20;

if (number > 18) {
    console.log("Parabéns, agora você pode acessar o site");
} else {
    console.log("Você ainda não completou 18 anos");
}

//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true
let idade = 21;
let humano = "true";

if (idade > 18) {
    console.log("Você é maior de idade e humano");
} else {
    console.log("Você é menor de idade");
}

//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes = "Novembro"

if (mes === "Dezembro" || mes === "Janeiro") {
    console.log("seu aniversário é em janeiro ou dezembro");
} else {
    console.log("seu aniversário não é janeiro ou dezembro");
}

//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
let letraInicial = "A";

if (letraInicial !== "R") {
    console.log("seu nome não começa com R");
} else {
    console.log("seu nome começa com R");
}

//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
let letras = 6;
let primeiraLetra = "A";


if (letras > 6 || primeiraLetra === "E") {
    console.log("sobrenome com mais de 6 letras ou começa com E");
} else {
    console.log("sobrenome não tem mais de 6 letras ou não começa com E");
}