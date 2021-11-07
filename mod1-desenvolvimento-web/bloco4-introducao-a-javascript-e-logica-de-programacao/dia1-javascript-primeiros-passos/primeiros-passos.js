// Exercícios JavaScript Primeiros Passos//


// Ex 1. Programa de Adição //

 const a = 10;
 const b = 5;

 const resultadoAdicao = a + b
 console.log(resultadoAdicao);

// Ex 1. Programa de Subtração //

 const resultadoSubtração = a - b
 console.log(resultadoSubtração);

// Ex 1. Programa de multiplicação //

 const resultadoMultiplicacao = a * b
 console.log(resultadoMultiplicacao);

// Ex 1. Programa de Divisão //

 const resultadoDivisao = a / b
 console.log(resultadoDivisao);

// Ex 1. Programa de Módulo //

 const resultadoModulo = a % b
 console.log(resultadoModulo);


// Ex 2. Maior de dois números //

 const numA = 15;
 const numB = 30;

 if(numA > numB){
     console.log(numA)
 }
 else{console.log(numB)};


// Ex 3. Maior de dois números //

 const numC = 100;
 const numD = 200;
 const numE = 300;

 if(numC > numD && numC > numE){
    console.log(numC)
 }
 else if(numD > numC && numD > numE){
     console.log(numD)
 }
 else{console.log(numE)};


// Ex 4. Positivo, Negativo ou Zero //

 const numF = 50;

 if(numF > 0){
     console.log("Positive")
 }
 else if(numF < 0){
     console.log("Negative")
 }
 else{console.log(0)};


// Ex 5. Angulos de um Triangulo //

 const anguloA = 90;
 const anguloB = 45;
 const anguloC = 45;

 if(anguloA + anguloB + anguloC == 180){
     console.log(true)
 }
 else if(anguloA < 0 || anguloB < 0 || anguloC < 0){
     console.log("Erro")
 }
 else if(anguloA + anguloB + anguloC != 180){
     console.log(false)
 }
 else{console.log(undefined)};


// Ex 6. Peças de Xadrez //

 var peçaXadrez = "";

 switch(peçaXadrez.toLowerCase()){
    case "rei":
        console.log("O rei pode se mover em todas as direções, porém uma casa de cada vez!")
    break;

    case "rainha":
        console.log("A rainha pode se mover em todas as direções e quantas casas quiser, desde que estejam vazias")
    break;

    case "torre":
        console.log("A torre pode se mover em linha reta, tanto na vertical como na horizontal, por quantas quiser desde que estejam vazias")
    break;

    case "bispo":
        console.log("O bispo pode se mover nas diagonais, por quantas quiser, desde que estejam vazias")
    break;

    case "cavalo":
        console.log("O cavalo movimenta-se em 'L', andando 2 casas em um determinado sentido e uma casa no sentido oposto, de acordo com a vontade do jogador. Vale ressaltar que o cavalo é a unica peça que pode passar por cima de outras, sejam elas amigas ou inimigas")
    break;

    case "peão":
        console.log("O peão movimenta-se somente para frente e somente uma casa por jogada. O movimento de captura do peão é feito na diagonal extritamente a sua frente")
    break;

    default:
        console.log("Essa peça é inválida")
 };


// Ex 7. Notas //

 let nota = 90;

 if(nota >= 90 && nota <= 100){
     console.log("A")
 }
 else if(nota >= 80 && nota < 90){
     console.log("B")
 }
 else if(nota >= 70 && nota < 80){
     console.log("C")
 }
 else if(nota >= 60 && nota < 70){
     console.log("D")
 }
 else if(nota >= 50 && nota < 60){
     console.log("E")
 }
 else if(nota < 0 || nota > 100){
     console.log("Erro")
 }
 else{console.log("F")
 };


// Ex 8. Números Pares //

 const numG = 12;
 const numH = 14;
 const numI = 16;

 if(numG % 2 == 0 || numH % 2 == 0 || numI % 2 == 0){
    console.log("true")
 }
 else{console.log("False")};


// Ex 9. Números Ímpares //

 const numJ = 11;
 const numK = 13;
 const numL = 15;

 if(numJ % 2 != 0 || numK % 2 != 0 || numL % 2 != 0){
    console.log("true")
 }
 else{console.log("False")};


// Ex 10. Custo e Lucro //

 const valorCusto = 500;
 const valorVenda = 1500;
 const impostoSobreOCusto = valorCusto * 0.20;
 const valorCustoTotal = valorCusto + impostoSobreOCusto
 lucro = (valorVenda - valorCustoTotal) * 1000

 if(valorCusto < 0 || valorVenda < 0){
    console.log("Erro")
 }
 else{console.log("O seu lucro é de " + lucro)};
 

// Ex 11. Salário Líquido //

 let salarioBruto = 3000;
 let salarioBase = 0;
 let salarioLiquido = 0;
 
 let aliquotaOito = salarioBruto * 0.08;
 let aliquotaNove = salarioBruto * 0.09;
 let aliquotaOnze = salarioBruto * 0.11;
 let aliquotaMax = 570.88;

 if(salarioBruto <= 1556.94){
    salarioBase = salarioBruto - aliquotaOito
 }
 else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - aliquotaNove
 }
 else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - aliquotaOnze
 }
 else{salarioBase = salarioBruto - aliquotaMax}

 let aliquotaIrSete = (salarioBase * 0.075) - 142.80
 let aliquotaIrQuinze = (salarioBase * 0.15) - 354.80
 let aliquotaIrVinte = (salarioBase * 0.225) - 636.13
 let aliquotaIrMax = (salarioBase * 0.275) - 869.36

 if(salarioBase <= 1903.98){
    salarioBase = salarioLiquido
 }
 else if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    salarioLiquido = salarioBase - aliquotaIrSete
 }
 else if(salarioBase >= 2826.66 && salarioBase <= 3751.05){
    salarioLiquido = salarioBase - aliquotaIrQuinze
 }
 else if(salarioBase >= 3751.06 && salarioBase <= 4664.68){
    salarioLiquido = salarioBase - aliquotaIrVinte
 }
 else{salarioLiquido = salarioBase - aliquotaIrMax}

 console.log("Seu salário líquido é de R$" + salarioLiquido)

 