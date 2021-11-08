// Exercícios JavaScript Array e Loop For ///


// Ex 1. Imprimir valores do Array //

 let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

 for(let index = 0; index < numbers.length; index +=1){
    console.log(numbers[index])
 };


// Ex 2. Somar valores do Array //

 numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let somaTotal = 0;

 for(let index = 0; index < numbers.length; index +=1){
    somaTotal += numbers[index]   
 }
 console.log(somaTotal)


// Ex 3. Média Aritmética dos valores do Array //

 numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 somaTotal = 0;

 for(let index = 0; index < numbers.length; index +=1){
    somaTotal += numbers[index]   
 }
 console.log(somaTotal / 10);


// Ex 4. Mensagem do Array //

 numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 somaTotal = 0;

 for(let index = 0; index < numbers.length; index +=1){
   somaTotal += numbers[index]   
 }
 if(somaTotal > 20){
    console.log("Valor maior que 20")
 }
 else{console.log("Valor menor que 20")
 };


// Ex 5. Maior valor do Array //

 numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let numMaior = Math.max.apply(Math, numbers);
 
 console.log(numMaior);


// Ex 6. Números impares do Array //

 numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let impares = []
 let pares = []

 for(let index = 0; index < numbers.length; index +=1){
    if(numbers[index] % 2 != 0){impares.push(numbers[index])
    }
    else{pares.push(numbers[index])
    };
 }
 if(impares.length != 0){console.log(impares)
 }
 else{console.log("Nenhum valor ímpar encontrado")
 };


// Ex 7. Menor valor do Array //

 numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let numMenor = Math.min.apply(Math, numbers);
 
 console.log(numMenor);


 // Ex 8. Novo Array //

 let arrayNovo = []

 for(let index = 0; index < 26; index += 1){
     arrayNovo.push(index)
 }
 console.log(arrayNovo);


// Ex 9. Novo Array dividido por 2 //

 arrayNovo = []

 for(let index = 0; index < 26; index += 1){
    arrayNovo.push(index)
 }
 for(index = 0; index < arrayNovo.length; index += 1){
     console.log(arrayNovo[index] / 2);
 }
 