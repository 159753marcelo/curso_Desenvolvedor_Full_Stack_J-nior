const prompt = require('prompt-sync')()

let soma = 0, cont = 0, entrada;
do {
  entrada = parseFloat(prompt("Digite um numero, ou 0 para sair: "));
  if (entrada !== 0) {
    soma += entrada;
    cont++;
  }
} while (entrada !== 0);
console.log("Média:", cont > 0 ? (soma / cont).toFixed(2) : "Nenhum número digitado");