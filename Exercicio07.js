const prompt = require('prompt-sync')();

let quantidadeDeCompra = Number(prompt("Quantidade de compra: "));

if(quantidadeDeCompra >= 12){
    console.log("Preço final: ", quantidadeDeCompra * 0.25, "R$");
}else if(quantidadeDeCompra < 12){
    console.log("Preço final: ", quantidadeDeCompra * 0.30, "R$")
}