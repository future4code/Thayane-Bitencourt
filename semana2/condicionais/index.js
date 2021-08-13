//**exercicio de interpretacao *//
//primeira questao
//a)ele vai verificar se o número é divisivel por dois, deixando resto 0,se for 
//ele imprime a mensangem:passou no teste, caso contrário
//nao passou no teste
//b)numeros divisiveis por dois, ou seja pares
//c)numeros nao divisiveis por dois, ou seja impar

//**segunda questao**//
//a)serve para dizer o preço de algumas frutas
//b)O preço da fruta Maçã é R$2,25
//c)Ia ser informado o valor de R$5,50

//terceira questao//
//a)solicitando um numero ao usuario
//b)Se o numero fosse 10, a mensagem exibida seria: "Esse numero passou no teste. Essa mensagem é secreta"
//se fosse -10, nada
//c)Sim, pois não tem condição caso numero seja negativo

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// Exercicio de escrita de codigo
//primeira questao

// const idade = Number(prompt("Qual sua idade?"))
// if(idade<18){
// console.log("Voce não pode dirigir. Espere completar dezoito anos")
//   alert("Você não pode dirigir. Espere completar dezoito anos.")
//   }
//   else{
//     console.log("Você pode dirigir")
//     alert("Você pode dirigir")
//   }

//segunda questao

// const turno = prompt("Informe o turno que estuda: M (matutino), V(vespertino) e N(noturno)")
// {
// if (turno==="M")
// {
//   console.log("Bom dia")
// }
// if (turno==="V")
// {
//   console.log("Boa tarde")
// } 
//   if (turno==="N")
// {
//   console.log("Boa Noite")
// }
// }

//terceira questao
// const  turno = prompt("Informe o turno que estuda: M (matutino), V(vespertino) e N(noturno)")
//  switch(turno){
//  case "M" : {
//       console.log("Bom dia")
//       break;
//  }
//  case "V": 
//  {
//     console.log("Boa tarde")
//   break;
// }
//  case "N":
//     {
//   console.log("Boa noite")
//   break;
// }
//  }

//Quarta questao

//Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for
// do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme 
// que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o
//  filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const generoFilme = prompt("Qual genero de filme que vão assistir? Comedia, Ficcao, Suspense, Terror, Romance ou Fantasia")
// const valorIngresso = prompt("Qual valor do ingresso?")

// switch(generoFilme){
//   case "Comedia" : {
//    console.log("Escolha outro filme")
//    break;
//     }
//    case "Ficcao": 
//    {
//     console.log("Escolha outro filme")
//     break;
//    }
//    case "Suspense": 
//    {
//     console.log("Escolha outro filme")
//     break;
//    }
//    case "Terror": 
//    {
//     console.log("Escolha outro filme")
//     break;
//    }
//     case "Romance": 
//    {
//     console.log("Escolha outro filme")
//     break;
//    }
//    case "Fantasia": 
//    {
//      if(valorIngresso<15){
//        console.log("Bom filme!")
//      }
//      else{
//     console.log("Escolha outro filme")
//      }
//     break;
//    }
//     }

//DESAFIO
// //PRIMEIRA QUESTAO 
// const generoFilme = prompt("Qual genero de filme que vão assistir? Comedia, Ficcao, Suspense, Terror, Romance ou Fantasia")
//  const valorIngresso = prompt("Qual valor do ingresso?")
//  switch(generoFilme){
//    case "Comedia" : {
//     console.log("Escolha outro filme")
//     break;
//      }
//     case "Ficcao": 
//     {
//      console.log("Escolha outro filme")
//      break;
//     }
//     case "Suspense": 
//     {
//      console.log("Escolha outro filme")
//      break;
//     }
//     case "Terror": 
//     {
//      console.log("Escolha outro filme")
//      break;
//     }
//      case "Romance": 
//     {
//      console.log("Escolha outro filme")
//      break;
//     }
//     case "Fantasia": 
//     {
//       if(valorIngresso<15){
//         const lanche = prompt("Qual lanche você vai comprar?")
//         console.log("Bom filme!")
//         console.log("Aproveite o(a) seu(sua)",lanche)
//       }
//       else{
//      console.log("Escolha outro filme")
//       }
//      break;
//     }
//      }


//segunda questao - venda de ingressos

// const nomeCompleto = prompt("Qual nome completo?")
// const etapaDoJogo = prompt("Qual etapa do jogo:  SF - Semi-final ; DT - Decisão de terceiro lugar e FI indica Final")


// if (etapaDoJogo==="SF") {
//       const categoria = Number(prompt("Qual categoria desejada?"))
//     switch (categoria) {
//       case 1:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 1320.00
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário:R$1.320 . Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$5.412. Valor Total:", int)

//           }
//           break;
//         }
//       case 2:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 880
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário:R$880,00 .Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$3.608. Valor Total:", int)

//           }
//           break;
//         }
//       case 3:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 550
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$550,00. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$2.255,00. Valor Total:", int)

//           }
//           break;
//         }
//       case 4:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 220
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$220,00. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso  unitário: R$902,00. Valor Total:", int)

//           }
//           break;
//         }
//           }
//             }    ;
// if (etapaDoJogo==="DT") {
//       const categoria = Number(prompt("Qual categoria desejada?"))
//     switch (categoria) {
//       case 1:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 660
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$660,00. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$2.706,00. Valor Total:", int)

//           }
//           break;
//         }
//       case 2:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 440
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário:R$440,0. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$1.804,00. Valor Total:", int)

//           }
//           break;
//         }
//       case 3:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 330
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$330,00. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$1.353,00. Valor Total:", int)

//           }
//           break;
//         }
//       case 4:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 170
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$170,00. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$697,00.Valor Total:", int)

//           }
//           break;
//         }
    
//     } 
//   }



//   if(etapaDoJogo==="FI")
//   {
//     const categoria = Number(prompt("Qual categoria desejada?"))
//     switch (categoria) {
//       case 1:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 1980.00
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário:R$1.980,00. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA---Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário:R$8.118,00. Valor Total:", int)

//           }
//           break;
//         }
//       case 2:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 1320.00
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$1.320,00. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso:R$5.412,00 . Valor Total:", int)

//           }
//           break;
//         }
//       case 3:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 880.00
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$880,0 . Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$3.608,00. Valor Total:", int)

//           }
//           break;
//         }
//       case 4:
//         {
//           const qtdIngresso = Number(prompt("Qual quantidade de ingressos?"))
//           const valor = qtdIngresso * 330
//           const publico = prompt("Qual tipo de publico? DO- Domestico e IN- Internacional")
//           if (publico === "DO") {
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso unitário: R$330,00. Valor Total:", valor)
//           }
//           else {
//             const int = valor * 4.10
//             console.log("---DADOS DA COMPRA--Nome do cliente:", nomeCompleto, "Tipo de jogo:", publico, "Etapa do jogo:", etapaDoJogo, "Categoria:", categoria, "--DADOS DA VENDA--Valor do ingresso: R$ 1.353,00. Valor Total:", int)

//           }
//           break;
//         }
//       }
//     }

 