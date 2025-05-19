const prompt = require('prompt-sync')();

let n = parseInt(prompt("Digite um numero inteiro: "))

if (n % 2 === 0) {
    console.log("Este número é par!")

} else {
    console.log("Este numero é Impar!")
}