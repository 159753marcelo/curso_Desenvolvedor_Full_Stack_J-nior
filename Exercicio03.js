const prompt = require('prompt-sync')();

let n = parseFloat(prompt("Digite sua nota: "))
let n2;

if (n < 6 && n > 0) {
    console.log("Você está de recuperação")
    n2 = parseFloat(prompt("Digite sua nota da Recuperação: "))
    if (n2 >=6 && n2 < 10) {
        console.log("Você foi Aprovado!")
    } else if (n2 < 6 && n2 > 0){
        console.log("Você foi reprovado!")
    } else {
        console.log("Nota Invalida")
    }
} else if (n >= 6 && n < 10) {
    console.log("Você foi aprovado!")
} else {
    console.log("Nota Invalida.")
}