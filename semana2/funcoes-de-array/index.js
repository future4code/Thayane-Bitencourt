//EXERCICIO DE INTERPRETACAO

//PRIMEIRA QUESTAO
//A- VAI SER IMPRESSO TODO CONTEUDO DA ARRAY, NOME E APELIDO DELAS

//SEGUNDA QUESTAO
//A- NESSE CASO SERA IMPRESSO APENAS OS NOMES DA ARRAY

//TERCEIRA QUESTAO
//A- VAI IMPRIMIR QUEM TEM O APELIDO DIFERENTE DE CHIJO.


//ESCRITA DE CÓDIGO

//primeira questao

//letra a
// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
//  const novoArrayB = pets.map((item, array) => {
//     return item.nome
//  })
 
//  console.log(novoArrayB)

//  // letra b
//  const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]
// // const novoArrayC = pets.filter((item, array) => {
// //    return item.raca == "Salsicha"
// // })

// // console.log(novoArrayC)

// //letra c
 
// const poodles = pets.filter((dog) => {
//    return dog.raca === "Poodle";
//  });

//  const cuponsPoodles = poodles.map((poodle) => {
//    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`;
//  });

//  console.log("item c", cuponsPoodles);

// EXERCÍCIOS DE ESCRITA DE CÓDIGO
// EXERCÍCIO 1
// const pets = [
//   { nome: "Lupin", raca: "Salsicha" },
//   { nome: "Polly", raca: "Lhasa Apso" },
//   { nome: "Madame", raca: "Poodle" },
//   { nome: "Quentinho", raca: "Salsicha" },
//   { nome: "Fluffy", raca: "Poodle" },
//   { nome: "Caramelo", raca: "Vira-lata" }
// ];

// const nomeDosPets = pets.map((pet) => {
//   return pet.nome;
// });

// console.log("item a", nomeDosPets);

// const cachorrosSalsicha = pets.filter((cachorro) => {
//   return cachorro.raca === "Salsicha";
// });

// console.log("item b", cachorrosSalsicha);

// const poodles = pets.filter((dog) => {
//   return dog.raca === "Poodle";
// });

// const cuponsPoodles = poodles.map((poodle) => {
//   return `Você ganhou um cupom de desconto de 10% para tosar o/a ${poodle.nome}!`;
// });

// console.log("item c", cuponsPoodles);

// EXERCÍCIO 2
// const produtos = [
//   { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//   { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//   { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//   { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//   { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//   { nome: "Cândida", categoria: "Limpeza", preco: 3.3 },
//   { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//   { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//   { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//   { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.8 }
// ];

// const nomesProdutos = produtos.map((prod) => {
//   return prod.nome;
// });

// console.log("item a", nomesProdutos);

// const produtosComDesconto = produtos.map((prod) => {
//   return { nome: prod.nome, preco: (prod.preco * 0.95).toFixed(2) };
// });

// console.log("item b", produtosComDesconto);

// const bebidas = produtos.filter((prod) => {
//   return prod.categoria === "Bebidas";
// });

// console.log("item c", bebidas);

// const produtosYpe = produtos.filter((prod) => {
//   return prod.nome.includes("Ypê");
// });

// console.log("item d", produtosYpe);

// const compreYpe = produtosYpe.map((prod) => {
//   return `Compre ${prod.nome} por ${prod.preco}`;
// });

// console.log("item e", compreYpe);

// DESAFIOS

// DESAFIO 1

const pokemons = [
   { nome: "Bulbasaur", tipo: "grama" },
   { nome: "Bellsprout", tipo: "grama" },
   { nome: "Charmander", tipo: "fogo" },
   { nome: "Vulpix", tipo: "fogo" },
   { nome: "Squirtle", tipo: "água" },
   { nome: "Psyduck", tipo: "água" }
 ];
 
 // ITEM A
 const nomePokemons = pokemons.map((poke) => {
   return poke.nome;
 });
 
 const pokemonsOrdenados = nomePokemons.sort((a, b) => a.localeCompare(b));
 
 console.log("item a", pokemonsOrdenados);
 
 // ITEM B
 //https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
 const tipos = pokemons.map((poke) => {
   return poke.tipo;
 });
 
 console.log(tipos);
 
 const tiposSemRepetir = tipos.filter((tipo, index, array) => {
   return array.indexOf(tipo) === index;
 });
 
 console.log("item b", tiposSemRepetir);
 

