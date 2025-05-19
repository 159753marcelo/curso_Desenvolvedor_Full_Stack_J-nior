const prompt = require('prompt-sync')();

let A = parseFloat(prompt("Digite o valor do lado A:"));
let B = parseFloat(prompt("Digite o valor do lado B:"));
let C = parseFloat(prompt("Digite o valor do lado C:"));


if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo Equilátero (todos os lados iguais).");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo Isósceles (dois lados iguais).");
    } else {
        console.log("Triângulo Escaleno (todos os lados diferentes).");
    }
} else {
    console.log("Os valores fornecidos NÃO formam um triângulo.");
}