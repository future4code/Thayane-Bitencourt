//**EXERCICIO DE INTERPRETACAO DE CODIGO**//
//1-Ele vai incrementar valores a i,ate i ser menor que cinco
//o resultado a ser exibido será 10

//2-a) 19,21,23,25,27,30
//b) Eu acredito que nao.

//3- se nao tivesse com erro no prompt apresentaria 3 asteristicos

// EXERCICIO DE CODIGO

//PRIMEIRA QUESTAO
// const qtdAnimais = Number(prompt("Quantos animais de estimação você tem?"))
//  if (qtdAnimais===0){
//      console.log("Que pena! Você pode adotar um pet.")
//  }
//  if(qtdAnimais>0){
//      var nomeDosPets = prompt ("Informe o nome deles")
//      console.log(nomeDosPets)
//  }

//segunda questao
//EXERCICIOS DE IMPLEMENTAÇÂO
// 1. Pergunte ao usuário quantos bichinhos de estimação ele
//tem e guarde esse dado em uma variável.
//
// const bichinhos = Number(prompt("quantos bichinhos de estimação você tem?"));
// console.log(bichinhos);

//a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//   if(bichinhos === 0) { console.log("Que pena! Você pode adotar um pet!")}

//b) Se a quantidade for maior que 0, solicite que o usuário digite
// os nomes deles, um por um, e guarde esses nomes em um array.

// if(bichinhos > 0){
//   let arrayBichinhos = []
//   for(let i = 0; i < bichinhos; i++){

//     arrayBichinhos.push(prompt("diga o nome do seu bichinho"))
//   }
//   console.log(arrayBichinhos)//c) Por fim, imprima o array com os nomes dos bichinhos no console
// }

// 2. Considere que você tenha acesso a um `array`
//(chamado de 'array original') que é composto somente de números.
// Baseando-se nisso, crie uma função para cada um dos itens abaixo,
// realizando as operações pedidas:

// const arrayOriginal =  [5, 22, 98, 121, 10]

//a) Escreva um programa que **imprime** cada um dos valores do array original.

// function imprimirValorDoArrayOriginal (arrayOriginal) {
//   for(let valor of arrayOriginal){
//     console.log(valor)
//   }
// }
// imprimirValorDoArrayOriginal(arrayOriginal)

//b) Escreva um programa que **imprime** cada um dos valores
//do array original divididos por 10.

// function imprimirValorDoArrayOriginal (arrayOriginal) {
//   for(let valor of arrayOriginal){
//     console.log(valor/10)
//   }
// }
// imprimirValorDoArrayOriginal(arrayOriginal)

//c) Escreva um programa que **crie** um novo array contendo,
//somente, os números pares do array original e **imprima**
//esse novo array.

// function imprimirValoresPares (arrayOriginal) {
//   let arrayNumerosPares = []
//   for(let valor of arrayOriginal){
//     if(valor % 2 === 0){
//       arrayNumerosPares.push(valor)
//     }

//   }
//   console.log(arrayNumerosPares)
// }
// imprimirValoresPares(arrayOriginal)

//d) Escreva um programa que **crie** um novo array contendo
//strings, da seguinte forma: "O elemento do índex `i` é: `numero`".
//Depois, **imprima** este novo array.

// function imprimirArrayDeStrings (arrayOriginal){
//   let arrayDeStrings = []
//   let i = 0
//   for(let valor of arrayOriginal){
//     arrayDeStrings.push(`O elemento do índex ${i} é: ${valor}`)
//     i++
//   }
//   console.log(arrayDeStrings)
// }
// imprimirArrayDeStrings (arrayOriginal)

//e) Escreva um programa que imprima no console o maior e
// o menor números contidos no array original.

// function pegarMaiorOuMenorNumero (arrayOriginal){
//   let maiorNumero = 0;
//   let menorNumero = Infinity;
//   for(let i = 0; i < arrayOriginal.length; i++){

//     if(arrayOriginal[i] < menorNumero){
//       menorNumero = arrayOriginal[i]
//     }else if(arrayOriginal[i] > maiorNumero){
//       maiorNumero = arrayOriginal[i]
//     }
//   }
//   console.log("O maior numero é:", maiorNumero)
//   console.log("O menor numero é:", menorNumero)
// }
// pegarMaiorOuMenorNumero (arrayOriginal)

//================= Desafios =====================
// DESAFIOS 1 e 2
// console.log("Vamos jogar!")
// const numeroEscolhido = Math.floor(Math.random() * 100) + 1

// let acertou = false
// let tentativas = 0

// let numeroChutado

// while(!acertou){
//     numeroChutado = Number(prompt("Chute um número"))
//     tentativas++
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     if(numeroChutado === numeroEscolhido){
//         console.log("Acertou!")
//         console.log(`O número de tentativas foi : ${tentativas}`)
//         acertou = true
//     } else if (numeroEscolhido > numeroChutado){
//         console.log("Errou. O número escolhido é maior")
//     } else {
//         console.log("Errou. O número escolhido é menor")
//     }
// }