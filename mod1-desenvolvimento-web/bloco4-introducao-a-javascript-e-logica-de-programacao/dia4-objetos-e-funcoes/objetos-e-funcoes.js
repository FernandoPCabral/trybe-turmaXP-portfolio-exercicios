// Exercícios JavaScript Objetos e Funções ///

// Parte I - Objetos e For/In

// Ex 1. Mensagem de Boas-vindas //

   let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
   };

   console.log("Bem-vinda, " + info.personagem);

// Ex 2. Chave Recorrente //

   let info = {
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
   };

   info.recorrente = "Sim";

   console.log(info);


// Ex 3. For/In Chaves //

   let info = { 
   personagem: 'Margarida',
   origem: 'Pato Donald',
   nota:
   'Namorada do personagem principal nos quadrinhos do Pato Donald',
   recorrente: 'Sim' 
   };

   for (let key in info){
      console.log(key)
   };


// Ex 4. For/In Valores //

   let info = { 
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota:
      'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim' 
   };

   for (let key in info){
      console.log(info[key])
   };


// Ex 5. For/In Valores //

   let info = { 
      personagem: 'Margarida',
      origem: 'Pato Donald',
      nota:
      'Namorada do personagem principal nos quadrinhos do Pato Donald',
      recorrente: 'Sim' 
   };

   let info2 = {
      personagem: 'Tio Patinhas',
      origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
      nota: 'O último MacPatinhas',
      recorrente: 'Sim'
   };

   for (let key in info){
      if(info[key] == 'Sim' && info2[key] == 'Sim'){
      let mensagem = "ambos recorrentes";   
      console.log(mensagem);
      break;
      };

      console.log(info[key] + " e " + info2[key])
   };


// Ex 6. O livro favorito //

   let leitor = {
      nome: 'Julia',
      sobrenome: 'Pessoa',
      idade: 21,
      livrosFavoritos: [
         {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
         },
      ],
   };

   console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo)


// Ex 7. Novo Livro Favorito //

   leitor = {
      nome: 'Julia',
      sobrenome: 'Pessoa',
      idade: 21,
      livrosFavoritos: [
         {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
         },
      ],
   };

   leitor.livrosFavoritos.push(
      {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editor: 'Rocco'
   }
   );

   console.log(leitor)


// Ex 8. Livros Favoritos

   leitor = {
      nome: 'Julia',
      sobrenome: 'Pessoa',
      idade: 21,
      livrosFavoritos: [
         {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
         },
      ],
   };

   leitor.livrosFavoritos.push(
      {
         titulo: 'Harry Potter e o Prisioneiro de Azkaban',
         autor: 'JK Rowling',
         editor: 'Rocco'
      }
   );

   function mostraLivros(obj, index) {
      for(objeto in index){
         console.log(objeto[index])
      }
   }

   let arrProp = [];

   for(chaves in leitor) {
      arrProp.push(chaves);
   }

   let palavraCerta = arrProp[3].split('F')

   console.log(leitor.nome + " tem 2 " + palavraCerta[0] + " " + "F" + palavraCerta[1])
