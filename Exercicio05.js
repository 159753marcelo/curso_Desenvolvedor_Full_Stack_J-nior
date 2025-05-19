const prompt = require('prompt-sync')();

function imc(peso, altura){
    let calculo = (peso / (altura **2)).toFixed(2)

    if(calculo < 18.5){
        console.log("Abaixo do peso")
    }else if(calculo >= 18.5 && calculo < 24.9){
        console.log("Peso normal")
    }else if(calculo >= 25.0 && calculo < 29.9){
        console.log("Sobrepeso")
    }else if(calculo >= 30.0 && calculo < 34.9){
        console.log("Obesidade grau I")
    }else if(calculo >= 35.0 && calculo < 39.9){
        console.log("Obesidade grau II")
    }else if(calculo >= 40.0){
        console.log("Obesidade grau III")
    }else{
        console.log("Peso inválido")
    }
}

let seuPeso = prompt("Seu peso: ");
let suaAltura = prompt("Sua altura: ");
imc(seuPeso, suaAltura);