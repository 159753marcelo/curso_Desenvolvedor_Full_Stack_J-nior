const prompt = require('prompt-sync')();

let num1 = Number(prompt("Diga um numero: "));
let num2 = Number(prompt("Diga outro numero: "));

if(num1 > num2){
    console.log(num1, num2)
}else{
    console.log(num2, num1)
}