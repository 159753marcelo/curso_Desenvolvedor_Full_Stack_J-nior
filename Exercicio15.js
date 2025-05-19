let n1 = 0;
let n2 = 1;
let proximo;

console.log("sequência de Fibonacci:");

for (let i = 0; i < 10; i++) {
    console.log(n1);         
    proximo = n1 + n2;        
    n1 = n2;                  
    n2 = proximo;             
}