// Exercícios JavaScript Lógica de Programação e Algorítmos ///


// Ex 1. Quadrado de Asteríscos //

 let n = 4;

 for(let index = 0; index < n; index += 1){
     console.log("*".repeat(n))
 };


// Ex 2. Triângulo retângulo de Asteríscos //

 let n = 5;

 for(let index = 0; index < n; index += 1){
    console.log("*".repeat(index + 1))
 };


// Ex 3. Triângulo retângulo inverso de Asteríscos //

 let n = 5;
 
 for(let index = 0; index <= n; index += 1){
    console.log("*".repeat(index).padStart(n, ' '))
 };


// Ex 4. Triângulo N de Asteríscos //

 let n = 11;

 for(let index = 1; index <= n; index += 2){
    console.log("*".repeat(index).padStart(Math.ceil((n-index / 2) + index, " ")))
 };
