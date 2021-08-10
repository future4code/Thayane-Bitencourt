//EXERCICIO DE INTERPRETACAO DE CODIGO
//PRIMEIRA QUESTAO
//A
//SERA IMPRESSO 10 E 50.
//B
//SE RETIRASSE OS DOIS CONSOLE.LOG SIMPLESMENTE O RESULTADO
//NAO IRIA APARECER, POIS NADA TEM A SER IMPRESSO


//SEGUNDA QUESTAO
//letra a- ESSA FUNCAO VAI VERIFICAR SE O TEXTO DIGITADO PELO USUARIO
//ESTA EM MAIUSCULO OU CONTEM CENOURA, PARA APRESENTAR RE-
//SULTADO VERDADEIRO OU FALSO.

//letra b-
//i. true
//ii. true
//iii. true

// EXERCICIO DE ESCRITA DE CÓDIGO

//PRIMEIRA QUESTAO
// console.log("Eu sou Thayane, tenho 32 anos, moro em Salvador e sou estudante")

// const imprimeMensagem = function (nome, idade, cidade,profissao){
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)

// }
// imprimeMensagem("Leticia",23, "São Paulo", "instrutora" )                    

//SEGUNDA QUESTAO

//letra a: recebe dois parametros e faz a soma, imprimindo o 
//resultado no console
// const somaDosNumeros = (num1,num2) => {
//     return num1 + num2
// }
//  const valoresSomados = somaDosNumeros(2,3)
//  console.log("Resposta:",valoresSomados)



//letra b: recebe dois numeros e retorna um booleano que 
//informa se o primeiro numero é maior ou igual ao segundo

//   const somaDosNumeros = (num1,num2) => {
//       return num1 >= num2
//   }
//    const resultado = somaDosNumeros (5,5)

//    console.log(resultado)

//letra c == funcao recebe um numero e devolve booleano indicando 
//se ele é par ou nao
// const somaDosNumeros = (num1) => {
//     return num1%2===0
// }
//  const resultado = somaDosNumeros (5)

//  console.log(resultado)

//letra d = função que recebe uma frase transforma em maiusculo e conta o tamanho
// var stringExemplo = "Programar é bom demais";
// //console.log(stringExemplo.toUpperCase()); pode colocar assim, ou junto
// var tamanho = stringExemplo.length;
// console.log(stringExemplo.toUpperCase(),tamanho)

//TERCEIRA QUESTAO
// console.log("Essa função recebe dois numeros, e faz operação básica")
// const num1 = Number(prompt("Insira um numero:"))
// const num2 = Number(prompt("Insira outro número:"))
// const soma = Number(num1 + num2)
// console.log("Soma", soma)

// const diferenca = Number(num1 - num2)
// console.log("Diferença:", diferenca)

// const multiplicacao = Number(num1 * num2)
// console.log("Multiplicação:", multiplicacao)

// const divisao = Number(num1 / num2)
// console.log("Divisão:", divisao)

//DESAFIOS
//letra a //recebe um parametro e imprime no console esse parametro
 
// function arrowFunction (base,altura){
//     const area = base * altura
//     console.log(area)
// }
// arrowFunction(2,3)

//letra b // recebe dois valores como parametro e soma esses valores

// function arrowFunction (base,altura){
//     const area = base + altura
//     console.log(area)
// }
// arrowFunction(2,3)

//segunda questao


//     const cat1= Number(prompt ("Insira o cateto oposto"))
//     const cat2= Number(prompt ("Insira o cateto adjacente"))
//     teoremaPitagoras =  Math.hypot(cat1, cat2).toFixed(2)
// console.log(teoremaPitagoras)
