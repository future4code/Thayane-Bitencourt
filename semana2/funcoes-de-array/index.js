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
 

